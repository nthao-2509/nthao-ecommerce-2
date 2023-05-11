import Header from 'common/Header'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'common/Footer'

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Home
