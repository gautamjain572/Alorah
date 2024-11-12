import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Faq from '../components/Faq'
import Reviews from '../components/Reviews'

const Home = () => (
  <div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <Reviews />
    <Faq />
    <NewsletterBox />
  </div>
)

export default Home