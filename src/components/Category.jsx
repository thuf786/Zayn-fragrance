import React from 'react'
import Cardsection from './Cardsection'
import Categorycard from './Categorycard'

function Category() {
  return (
    <div className='row'>
    <div className='col-md-12'>
        <h3 style={{fontWeight:"bold",fontFamily:"sans-serif"}} className='text-center mt-4'>Shop By Category</h3>
    </div>
   <div className="col-md-4">
    <Categorycard
    image="https://images-na.ssl-images-amazon.com/images/I/91Eau2eYHeL._SL1500_.jpg"
    title="Gift Set Perfumes"/>
   </div>
   <div className="col-md-4">
    <Categorycard
    image="https://johnlewis.scene7.com/is/image/JohnLewis/home-fragrance-121119"
    title="Fragrances"/>
   </div>
   <div className="col-md-4">
    <Categorycard
    image="https://prod-admin-images.s3.ap-south-1.amazonaws.com/K22GjqT3GPh0_HD1284O/product/van-cleef-perfumes-combo-01.jpg"
    title="Perfume Combo Packs"/>
   </div>
</div>
  )
}

export default Category