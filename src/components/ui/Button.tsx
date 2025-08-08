import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocta-50/20 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
	{
		variants: {
			variant: {
				primary:
					"border border-nocta-50/10 bg-nocta-50/90 text-black shadow-sm hover:bg-nocta-50",
				secondary:
					"border border-nocta-50/15 bg-nocta-50/5 text-nocta-50/80 backdrop-blur hover:bg-nocta-50/10",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? "span" : "button";
		return (
			<Comp
				className={buttonVariants({ variant, className })}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
