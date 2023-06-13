import Header from 'common/Header'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'common/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from 'common/Loading'

const Home = () => {
  const { isSuccess } = useSelector((state: any) => state.product)
  if (!isSuccess) {
    return <Loading />
  }
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
