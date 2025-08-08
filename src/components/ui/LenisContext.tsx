import Lenis from "lenis";
import type React from "react";
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useRef,
} from "react";

interface LenisScrollOptions {
	duration?: number;
	easing?: (t: number) => number;
	offset?: number;
	lerp?: number;
	immediate?: boolean;
	lock?: boolean;
	force?: boolean;
	onComplete?: () => void;
	onStart?: () => void;
}

interface LenisContextType {
	lenis: React.MutableRefObject<Lenis | null>;
	scrollTo: (
		target: string | HTMLElement,
		options?: LenisScrollOptions,
	) => void;
}

const LenisContext = createContext<LenisContextType | undefined>(undefined);

export const LenisProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const lenis = useRef<Lenis | null>(null);

	useEffect(() => {
		lenis.current = new Lenis({
			duration: 0.5,
			easing: (t: number) => 1 - (1 - t) ** 3,
			prevent: (node) => {
				return node.closest('[data-slot="dialog-content"]') !== null;
			},
		});

		const animate = (time: number) => {
			lenis.current?.raf(time);
			requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);

		return () => {
			lenis.current?.destroy();
		};
	}, []);

	const scrollTo = (
		target: string | HTMLElement,
		options?: LenisScrollOptions,
	) => {
		if (lenis.current) {
			const defaultScrollOptions: LenisScrollOptions = {
				duration: 1,
				offset: 0,
				...options,
			};

			lenis.current.scrollTo(target, defaultScrollOptions);
		}
	};

	return (
		<LenisContext.Provider value={{ lenis, scrollTo }}>
			{children}
		</LenisContext.Provider>
	);
};

export const useLenis = () => {
	const context = useContext(LenisContext);
	if (context === undefined) {
		throw new Error("useLenis must be used within a LenisProvider");
	}
	return context;
};