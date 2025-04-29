import './App.css'
import Hero from './assets/Layout/Hero'
import HeroCarousel from './assets/Layout/HeroCarousel'
import Timeline from './assets/Components/Timeline';

function App() {

  return (
    <>
      <div className='w-full h-full bg-neutral-400/10'>
        <section className=''>
          <div className='relative w-full text-center'>
            <HeroCarousel></HeroCarousel>
          </div>
        </section>
        <section className=''>
          <Timeline></Timeline>
        </section>
        <section className=''>
        </section>
      </div>

    </>
  )
}

export default App
