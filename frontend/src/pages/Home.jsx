import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ReviewCard from '../components/ReviewCard'

const Home = () => (
  <div>
    <Hero />
    <LatestCollection />
    <BestSeller />
    <OurPolicy />
    <ReviewCard />
    <NewsletterBox />
  </div>
)

export default Home