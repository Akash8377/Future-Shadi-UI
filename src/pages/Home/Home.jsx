import React from 'react'
// import '../../assests/styles/style.css'
import Header from '../../components/Header/Header'
import Banner from './Banner'
import SearchByCity from './SearchByCity'
import SucessStory from './SucessStory'
import SatisfiedCustomer from './SatisfiedCustomer'
import Story from './Story'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <SearchByCity/>
      <SucessStory/>
      <SatisfiedCustomer/>
      <Story/>
      <Footer/>

    </>
  )
}

export default Home
