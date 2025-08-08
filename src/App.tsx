import Hero from '@/sections/Hero'
import Navbar from '@/components/ui/Navbar'
import Features from '@/sections/Features'
import Architecture from './sections/Architecture'
import AdminInterface from './sections/AdminInterface'
import Footer from './components/ui/Footer'
import GetStarted from './sections/GetStarted'
import GitHubCTA from './sections/GitHubCTA'
import { LenisProvider } from './components/ui/LenisContext'

function App() {
  return (
    <LenisProvider>
      <div className="relative bg-nocta-950">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `

              radial-gradient(55% 45% at 18% 12%, rgba(255,255,255,0.028), rgba(255,255,255,0) 70%),
              radial-gradient(50% 42% at 82% 22%, rgba(255,255,255,0.022), rgba(255,255,255,0) 70%),

              radial-gradient(65% 55% at 68% 78%, rgba(255,255,255,0.03), rgba(255,255,255,0) 75%),

              linear-gradient(to top, rgba(255,255,255,0.025), rgba(255,255,255,0) 22%)
            `,
            maskImage: 'radial-gradient(120% 120% at 50% 50%, #000 92%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(120% 120% at 50% 50%, #000 92%, transparent 100%)',
          }}
        />

        <Navbar />
        <Hero />
        <Features />
        <Architecture />
        <AdminInterface />
        <GetStarted />
        <GitHubCTA/>
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App