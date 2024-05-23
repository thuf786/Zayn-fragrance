import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='  d-flex justify-content-between mt-3 mx-2'>
       <Link to={'/login'}><img src="https://tse2.mm.bing.net/th?id=OIP.bJpr9jpclIkXQT-hkkb1KQHaHa&pid=Api&P=0&w=300&h=300" alt="" height="40px" /></Link> 

        <h2 style={{ color: "black" }} className='text-center justify-content-center'>ZAYN <span className='text-warning'>PERFUMES</span></h2>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-cart-plus"></i></button>
        </form>
      </div>
     

      <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center ">
        <div class="container-fluid mt-2 ms-4">
          <a class="navbar-brand" href="#"><span className='text-danger' style={{ fontFamily: "elyzabeth pro" }}>Crazy Deals</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ fontFamily: "elyzabeth pro" }}>Shop All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ fontFamily: "elyzabeth pro" }}>Fragrances</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ fontFamily: "elyzabeth pro" }}>New Arrivals</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "elyzabeth pro" }}>
                  Gifting
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Gift Sets</a></li>
                  <li><a class="dropdown-item" href="#">Perfume Combos</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>


      </nav>
    </div>

  )
}

export default Header