import React from 'react'

export default function Home() {
    return (

        <>
            <div className='container slider-spacing'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row slider-items'>
                                <div className='col-md-6'>
                                    <p className='homePara'>Shop & get upto 100% cashback by promoting brands that you love
                                    </p>
                                    <button className='navbar-btn'>Get your card</button>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center order-second order-sm-top '><img src="https://static.momspresso.com/mymo/slide-03-updated2.png" class="d-block home-img" alt="..." /></div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p className='homePara'>Unlock the power of your social influence with MyMo
                                    </p>
                                    <button className='navbar-btn'>Get your card</button>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center order-second order-sm-top'><img src="https://static.momspresso.com/mymo/slide-02.png" class="d-block home-img" alt="..." /></div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p className='homePara'>India's first shopping card exclusively for Influencers!
                                    </p>
                                    <button className='navbar-btn'>Get your card</button>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center order-second order-sm-top'><img src="https://static.momspresso.com/mymo/slide-02.png" class="d-block home-img" alt="..." /></div>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon d-none" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
