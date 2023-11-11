import React, {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import {BsHeart, BsShuffle} from 'react-icons/bs'
import Container from '../components/Container';



const SingleProduct = () => {
    const props = {
        width: 400, 
        height: 520, 
        zoomWidth: 600, 
        img: "https://i5.walmartimages.com/asr/2b527a08-4236-420b-ad36-c1d885d90665.5992358b49940720b6bc0b44a7b98f04.jpeg"};

    const [orderedProduct, setorderedProduct] = useState(true);

    // const copyToClipboard = (text) =>{
    //     console.log('text', text);
    //     var textField = document.createElement('textarea');
    //     textField.innerText = text;
    //     document.body.appendChild(textField);
    //     textField.select();
    //     document.execCommand('copy');
    //     textField.remove();
    // };

  return (
    <>
    <Meta title={'Product Name'} />
    <BreadCrumb title='Product Name' />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15 ">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KZjSqahvazlN1j2w3nFp3BHMDQ2Q38vfr11STlFKYI7R_NuPk4NGn3NXOnR2iMc8YhE&usqp=CAU" className='img-fluid' alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu41ebcS5aTgSis5ootGLSN5zUHnYiJpYjfgcr7Vg3uCHDL-csythgstNMBWvNTKuz6c&usqp=CAU" className='img-fluid' alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaWL8NU9q5u5zOttVVGm7ZzOP98qgVg28WjBuz2WIlE4FyPMZWnEB9qOodqgFFSAFuvc&usqp=CAU" className='img-fluid' alt="" /></div>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefzEYjc0DB3yPCdMhyYHb7VqrXPTvlaOonm_jZaf9rz0obH664_Z3SYFhiA_fTEgK9rc&usqp=CAU" className='img-fluid' alt="" /></div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                       <div className='border-bottom'>
                        <h3 className='title'>Smart Watch Series 7</h3>
                        </div> 
                        <div className="border-bottom py-3">
                            <p className="price">$100</p>
                            <div className="d-flex align-items-center gap-10">
                                <ReactStars
                                    count={5}
                                    size={15}
                                    value={4}
                                    edit= {false}
                                    activeColor="#ffd700"
                                />
                                <p className='mb-0 t-review'>(2 Reviews)</p>
                            </div>
                            <a className='review-btn' href="#review">Write a Review</a>
                        </div>
                        <div className="py-2">
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Type:</h3>
                                <p className='product-data'>Smartwatch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand:</h3>
                                <p className='product-data'>Apple</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Categories:</h3>
                                <p className='product-data'>iWatch, Smartwatch, Airpods, speaker, Smartphones</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Tags:</h3>
                                <p className='product-data'>watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Avaliability:</h3>
                                <p className='product-data'>230 pieces in Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size:</h3>
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>40mm</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>42mm</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>45mm</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2'>
                                <h3 className='product-heading'>Color:</h3>
                                <Color />
                            </div>
                            <div className='d-flex align-items-center gap-15 flex-row mb-3'>
                                <h3 className='product-heading'>Quantity:</h3>
                                <div>
                                    <input 
                                    type="number" 
                                    min={1}
                                    max={10}
                                    className='form-control'
                                    style={{width: '60px'}} 
                                    name="" 
                                    id="" />
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                    <button className='button border-0' type='submit'>Add to Cart</button>
                                    <button className='button signup'>Buy it Now</button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href="hj">
                                    <BsShuffle className='fs-5 me-2' /> Add to Compare
                                    </a>
                                </div>
                                <div>
                                    <a href="fg">
                                        <BsHeart className='fs-5 me-2' /> Add to Wishlist
                                    </a>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column my-3'>
                                <h3 className='product-heading'>Shipping & Returns:</h3>
                                <p className='product-data'>
                                    Free shipping and returns avaliable on all orders! <br /> we ship to 
                                    all US domestic orders within 
                                    <b>5-10 business days!</b>
                                </p>
                            </div>
                            <div className='d-flex gap-10 flex-column my-3'>
                                <h3 className='product-heading'>Dimensions:</h3>
                                <p className='product-data'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia 
                                     ad saepe quidem veniam quibusdam ab. Ad suscipit tempora eos. Lorem, ipsum dolor.
                                </p>
                            </div>
                            <div className='d-flex gap-10 flex-column my-3'>
                                <h3 className='product-heading'>Care Instructions:</h3>
                                <p className='product-data'>
                                    Use a soft damp cloth and a drop of mild soap to remove haze. Air dry.
                                </p>
                            </div>
                        </div>
                    </div>    
                </div> 
            </div>
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h4>Description</h4>
                    <div className='bg-white p-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Hic ullam, esse odio quas cumque molestiae illo eveniet laboriosam 
                            distinctio pariatur sapiente saepe cum. Deleniti molestiae fuga 
                            reprehenderit ab tempore distinctio.
                        </p>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1="reviews-wrapper home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h3 id='review'>Reviews</h3>
                    <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        value={4}
                                        edit= {false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            {
                                orderedProduct && (
                                    <div>
                                        <a className='text-decoration-underline' href="https://www.skillsyouneed.com/write/review-writing.html">
                                            Write a Review
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                        <div className="review-form py-4">
                            <h4>
                               Write a Review 
                            </h4>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                                <ReactStars
                                    count={5}
                                    size={20}
                                    value={4}
                                    edit= {true}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div>
                                <textarea 
                                name="" 
                                className='w-100 form-control'
                                id="" 
                                cols="30" 
                                rows="4"
                                placeholder='Comments'> 
                                </textarea>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='button border-0'>Submit Review</button>
                            </div>
                        </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                               <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Navdeep</h6>
                               <ReactStars
                                    count={5}
                                    size={20}
                                    value={4}
                                    edit= {false}
                                    activeColor="#ffd700"
                                />
                               </div>
                                <p className='mt-3'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Alias, laudantium id? Provident unde corrupti vitae? 
                                    Ratione totam fuga voluptas qui quae incidunt, eos, 
                                    cum consequatur recusandae reiciendis ea ad labore?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard/>
            <ProductCard/>
          </div>
      </Container>
    </>
  )
}

export default SingleProduct