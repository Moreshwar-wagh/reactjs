import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'
import Services from './Service'
import Contact from './Contact'

const Home = () => {

  // const data = {
  //   name: "Wagh Moreshwar",
  //   image: "./images/hero.svg"
  // }

  const { updateHomePage } = useGlobalContext()

  useEffect(() => updateHomePage(), [])


  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}

export default Home