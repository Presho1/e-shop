import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
    <Meta title={'Compare Products'} />
    <BreadCrumb title='Compare Product' />
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/tab.jpg" alt="watch" className='compare-img'/>
                            <div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">
                                        $100.00
                                    </h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Samsung</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Tablet Computers</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Avaliability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/famous5.png" alt="watch" className='compare-img'/>
                            <div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Beoplay A1 Portable Bluetooth Speaker With Microphone
                                    </h5>
                                    <h6 className="price mb-3 mt-3">
                                        $500.00
                                    </h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Sony</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Speakers</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Avaliability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/iwatch1.png" alt="watch" className='compare-img'/>
                            <div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Honor T1 7.0 GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className="price mb-3 mt-3">
                                        $100.00
                                    </h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Apple Watch</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Avaliability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    </Container>
    </>
  )
}

export default CompareProduct