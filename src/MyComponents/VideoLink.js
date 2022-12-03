import React from 'react'

export default function VideoLink() {
    return (
        <>
            
            <div>
                <div className="topHeadingClrParent"><div className="heading">Say hello to MyMo!</div></div>

            </div>
            <a id="scrolltop" href="#top" className="scrollup"><i class="fa fa-angle-up top-btn"></i>
                <div class="clearfix"></div>top
            </a>
            <div className='container ytb'>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/EPSj9lWKyqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='ready-mymo' id='readymymo'>
                <div className='container'>
                    <div className="topHeadingParent"><div className="heading">Ready To MyMo?</div></div>
                    <div className='mt-4 top-Para'>It's Simple!</div>
                    <div className='row m-0 justify-content-center mt-3 mt-md-4 pt-5' style={{ padding: "2rem" }}>
                        <div className='col-12 col-md-4'>
                            <div className='readytomymoparent'>
                                <img src='https://static.momspresso.com/mymo/shop-new.png' alt='Please wait' />
                                <div className='mt-2 md-mt-3'></div>
                                <div class="innerParent"><div className="title">Shop</div><span>Brands of your choice with the exclusive MyMo card</span></div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mt-4 mt-md-0'>
                            <div className='readytomymoparent'>
                                <img src='https://static.momspresso.com/mymo/post-new.png' />
                                <div className='mt-2 md-mt-3'></div>
                                <div className="innerParent"><div className="title">Shop</div><span>Brands of your choice with the exclusive MyMo card</span></div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 mt-4 mt-md-0'>
                            <div className='readytomymoparent'>
                                <img src='https://static.momspresso.com/mymo/save-new.png' />
                                <div className='mt-2 md-mt-3'></div>
                                <div ><div class="title">Shop</div><span>Brands of your choice with the exclusive MyMo card</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container whyMymo' id='why-mymo>'>
                <div className="topHeadingClrParent"><div class="heading">Why MyMo?</div></div>
                <div className='mt-4'>Because we put influencers first!</div>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-md-5'>
                        <div className='whymymoleftparentText'>
                            <ul>
                                <li>
                                    <div className='order'>1</div>
                                    <div className='whymymoleftText'>Get exclusive cashbacks on your favourite brands
                                        <div className='bottom-dashed'></div>
                                    </div>
                                </li>
                                <li><div className='order'>2</div>
                                    <div className='whymymoleftText'>Get exclusive cashbacks on your favourite brands
                                        <div className='bottom-dashed'></div>
                                    </div></li>
                                <li><div className='order'>3</div>
                                    <div className='whymymoleftText'>Get exclusive cashbacks on your favourite brands
                                        {/* <div className='bottom-dashed'></div> */}
                                    </div></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-7 order-first order-sm-last'>
                        <img className='whyMyMoImg' src='https://static.momspresso.com/mymo/why-mymo-new.png' />
                    </div>
                </div>
                <div className='whyMymoBottom-text'>Backed by Momspresso & MyMoney.<br />
                    India's largest content & influencer platform for women
                </div>
                <div className='whymymoBorderBottom'></div>
            </div>
            <div className='getmymoApp' id='getmymo-App'>
                <div className='container mt-5'>
                    <div className='row py-5'>
                        <div className='col-12 col-md-6 mymoapp-parent'>
                            <div className='mymoApp'>Now <span>shop & save</span><br />
                                with just a tap <br />
                                Get the <span>MyMo App!</span></div>

                            <div className='letsMyMo'>#LetsMyMo</div>
                            <div className='download-link'>
                                Download the app to access amazing cashbacks on your <br /> favourite brands.
                            </div>
                            <div className='appStore'>
                                <a href='#'>
                                    <img src='https://static.momspresso.com/assets/app-store.png' />
                                </a>
                                <a href='#'>
                                    <img src='https://static.momspresso.com/assets/playstrore.png' />
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img className='mymoApp-img' src='https://static.momspresso.com/mymo/mymo-registration-new.png?tr=w-450' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="topHeadingClrParent"><div class="heading">Brands On MyMo</div></div>
            <div className='mt-4'>Choose brands you use, love and admire!</div>
            <div className='container'>
                <img src='https://static.momspresso.com/mymo/brands-Logos-updated-new.jpg' className='w-100 mt-5 pt-5' />
            </div>
            <div className='container'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What's MyMo?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                MyMo is India’s first shopping card exclusively for influencers which allows you to unlock your social influence!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item accordian-style">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Who Is MyMo For?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                MyMo is exclusively for Instagram influencers.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item accordian-style">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How Does MyMo work?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It’s simple! All you have to do is download the MyMo app, shop brands that you love using the MyMo card, post about your purchase on Instagram and get upto 100% cashback.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-style'>
                <footer className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <ul>
                                <li>
                                    <span>Follow us on<i className="fa fa-instagram m-3"></i></span>
                                </li>
                                <li>
                                    <button>Contact us</button>
                                </li>
                                <li>
                                    <a href=''>Tearm of use</a>
                                </li>
                                <li>
                                    <a href=''>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='copywrite'> &copy;Just4kids Services Pvt Ltd. All rights reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
