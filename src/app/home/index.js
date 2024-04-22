import React from 'react'
import MarketingCard from './marketingcard'
import Header from '../../shared/common/header'
import HeroBanner from './herobanner'
import Constructions from './contructions'
import ConstructionServies from './constructionservies'
import YourHome from './yourhome'
import ProjectWork from './projectwork'
import AboutCompany from './aboutcompany'
import Footer from '../../shared/common/footer'
import GetInTouch from './getintouch'

export default function Home() {

  return (
    <div>
      <Header />
      <HeroBanner />
      <MarketingCard />
      <Constructions />
      <ConstructionServies />
      <YourHome />
      <ProjectWork />
      <AboutCompany />
      <GetInTouch />
      <Footer />
    </div>
  )
}
