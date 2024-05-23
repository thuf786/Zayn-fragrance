import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cardsection from '../components/Cardsection'
import Cardinfo from '../components/Cardinfo'
import Category from '../components/Category'

function Home() {
  
  return (
    <>
    <Header/>
    <div className='row'>
  <div className='col-md-6'>
  <img src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height={"400px"} width={"100%"} alt="" />
  </div>
  <div className='col-md-6'>
<img src="https://scentury.com/wp-content/uploads/2017/07/perfume-quote-c-joybell-c.jpg" height={"400px"} width={"100%"}  alt="" />
  </div>
    </div>
    <div className='d-flex'>
    <Cardinfo/>
    
    </div>
    <Category/>
    <Footer/>
    </>
  )
}

export default Home