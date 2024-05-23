import React from 'react'
import Cardsection from './Cardsection'

function Cardinfo() {
    return (
        <>
            <div className="card-container d-flex flex-column">
                <div className='d-flex justify-content-center mt-4'>
                    <img src="https://png.pngtree.com/png-clipart/20221013/original/pngtree-bestseller-label-png-image_8682649.png" height={"100px"} width={"100px"} alt="" />
                    <h3 className='text-center mt-4' style={{ fontFamily: "sans-serif", fontWeight: "bold" }}><u>Best Sellers</u></h3>
                </div>


                <div className='d-flex'>
                    <Cardsection
                        image="http://beardo.in/cdn/shop/files/ThugLifePerfumeCombo512x512.jpg?v=1694425283"
                        title="Luxury Perfume Gift Set"
                        Price="599"
                        Review="4.4"
                    />

                    <Cardsection
                        image="https://fimgs.net/mdimg/secundar/o.69275.jpg"
                        title="Royal Oudh"
                        Price="999"
                        Review="5.0"
                    />

                    <Cardsection
                        image="https://prod-admin-images.s3.ap-south-1.amazonaws.com/K22GjqT3GPh0_HD1284O/product/the-one-miracle-perfume-combo-01.jpg"
                        title="Unisex Perfume Combo"
                        Price="1099"
                        Review="4.5"
                    />

                    <Cardsection
                        image="https://luxury-paper-box.com/upload/2018-03/08/P1190469.jpg"
                        title="Perfect Box Set for men"
                        Price="799"
                        Review="4.9"
                    />
                </div>
            </div>

           

        </>
    )
}

export default Cardinfo