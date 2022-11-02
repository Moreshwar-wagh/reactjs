import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

const About = () => {

  // const data = {
  //   name: "Moreshwar Wagh",
  //   image: "./images/about1.svg"
  // };

  const { updateAboutPage } = useGlobalContext()

  useEffect(() => updateAboutPage(), [])

  return <HeroSection />
}

export default About