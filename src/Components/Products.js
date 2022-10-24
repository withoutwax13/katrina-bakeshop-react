import React, { Component } from 'react';

class Products extends Component{
    render(){
        return (
            <div className='container text-center'>
                <h1 className="pb-3 pt-3 fs-1" style={{color: 'black'}}>Our Products</h1>
                <div id="carouselProducts" className="carousel slide carousel " data-bs-ride="carousel" data-bs-interval="3000">
                        <div className="carousel-inner ">
                            <div className="carousel-item container active">
                                <div className='row'>
                                    <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p1_blueberry.jpg")} alt="product image1"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p2_Redvelvet_cake.jpg")}  alt="product image2"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p3_triple_chocolate_cake.jpg")} alt="product image3"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p4_carrotcake")} alt="product image4"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                </div>
                            </div>
                            <div className="carousel-item container">
                                <div className='row'>
                                    <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p5_strawberryshortcake.jpg")}  alt="product image5"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p6_mocha_cake.jpg")}  alt="product image6"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p7_macaroon.jpg")}  alt="product image7"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p8_brazo_de_mercedes.jpg")} alt="product image8"/>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                </div>
                                
                            </div>
                            <div className="carousel-item container">
                                <div className='row'>
                                <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p9_sans_rival.jpg")} alt="product image9"/>
                                        </div>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p11_glazed donut.jpg")} alt="product image10"/>
                                        </div>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p12_croissant.webp")} alt="product image11"/>
                                        </div>
                                        <div className='col-lg-2 col-md-2 col-sm-2'>
                                            <img className='img-fluid img-feature rounded mx-auto d-block' style={{height: '100%'}} src={require("../assets/images/p13 cupcake.jpg")} alt="product image12"/>
                                        </div>
                                        <div className='col-lg-2 col-md-2 col-sm-2'></div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
            </div>

            
        )
    }
}

export default Products