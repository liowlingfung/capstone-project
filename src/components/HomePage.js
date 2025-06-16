import React from 'react'
import HeroSection from './HeroSection'
import SpecialSection from './SpecialSection'
import FooterSection from './FooterSection'
import { type } from '@testing-library/user-event/dist/type'

function HomePage({specialsData}) {
  return (
    <>
      <HeroSection/>
      <SpecialSection specialsData={specialsData}/>
      <FooterSection/>
    </>
  )
}

export default HomePage