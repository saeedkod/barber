import React from "react"
import { About } from "../pages/About"

import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Counter />
      <Portfolio />
       <About />
      <Testimonials />
     
    </>
  )
}
