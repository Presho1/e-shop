import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

const Wishlist = () => {
  return (
   <>
    <Meta title={'Wishlist'} />
    <BreadCrumb title='Wishlist' />
    <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />

                        <div className="wishlist-card-image">
                            <img src="images/tab.jpg" alt="tablet" className='compare-img img-fluid w-100' />
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Honor T1 7.0 GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet</h5>
                        <h6 className="price">$100</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />

                        <div className="wishlist-card-image">
                            <img src="images/famous5.png" alt="speaker" className='img-fluid w-100 bg-white' />
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Beoplay A1 Portable Bluetooth Speaker With Microphone</h5>
                        <h6 className="price">$70</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />

                        <div className="wishlist-card-image">
                            <img src="images/iwatch1.png" alt="iwatch" className='img-fluid w-100 bg-white' />
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Honor T1 7.0 GB RAM 8GB ROM 7 INCH With Wi-Fi+3G Tablet</h5>
                        <h6 className="price">$100</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Wishlist