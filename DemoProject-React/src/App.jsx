import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './assets/Layout/Hero'
import HeroCarousel from './assets/Layout/HeroCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full bg-neutral-400/10'>
        <section>
          <div className='relative w-full text-center'>
            <HeroCarousel></HeroCarousel>
          </div>

        </section>
      </div>

    </>
  )
}

export default App
