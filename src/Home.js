import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg" alt="" />
                <div className="home__row">
                    <Product title="The MacBook Pro, 168 gb 4gm ram . 17 inch scystal display screen." price={1050.29} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                    <Product title=" iPhone 12 128GB" price={1528.30} />
                
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                   
                </div>
                <div className="home__row">
                    <Product />
                </div>
            
            </div>
            
        </div>
    )
}

export default Home
