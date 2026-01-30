import React from 'react'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Menu from '../Components/Menu'
import Testimonial from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Menu />
        <Testimonial />
    </div>
  )
}

export default Home