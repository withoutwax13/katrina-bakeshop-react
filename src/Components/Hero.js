import React, { Component } from 'react';

class Hero extends Component{
    getScreenHeight(){
        var win = window,
            doc = document,
            docElem = doc.documentElement,
            body = doc.getElementsByTagName('body')[0]
        return win.innerHeight|| docElem.clientHeight|| body.clientHeight
    }
    render(){
        return (
                <div>
                    <div id="carouselExample" className="carousel slide carousel container text-center" data-bs-ride="carousel" data-bs-interval="6000">
                        <div className="carousel-inner row">
                            <div className="carousel-item active col-12">
                                <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight() - 75}px`}}>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                        <div className='col-lg-6 col-md-6 col-sm-8 text-center'>
                                            <h1>Your Best Local Bakeshop</h1>
                                            <p>
                                                We specialize in homemade cakes perfect for your special occasion. We also offer different bread and pastries that will surely satisfy your sweet cravings.
                                            </p>
                                            <button>ORDER NOW</button>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight() - 75}px`}}>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                        <div className='col-lg-6 col-md-6 col-sm-8 text-center'>
                                            <h1>Best Cakes in Town</h1>
                                            <p>
                                            According to the food historians, the ancient Egyptians were the first culture to show evidence of advanced baking skills. The Oxford English Dictionary traces the English word cake back to the 13th century. It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.
                                            </p>
                                            <button>ORDER NOW</button>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='container d-flex align-items-center justify-content-center' style={{height: `${this.getScreenHeight() - 75}px`}}>
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                        <div className='col-lg-6 col-md-6 col-sm-8 text-center'>
                                            <h1>Superb Breads and Pastries</h1>
                                            <p>
                                            Originally made by the Egyptians, one of the earliest forms of pastry was made by combining flour and water into a paste which was then wrapped around meat to be baked. Pastries were later developed in the Middle East and would eventually be brought to Europe, gaining popularity in the medieval period.
                                            </p>
                                            <button>ORDER NOW</button>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-2'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
        )
    }
}

export default Hero