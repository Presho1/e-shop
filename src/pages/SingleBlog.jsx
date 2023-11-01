import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';



const SingleBlog = () => {
  return (
    <>
    <Meta title={'Dynamic Blog Name'} />
    <BreadCrumb title='Dynamic Blog Name' /> 
    <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <BsArrowLeft className='fs-4'/> Go back to Blogs
                            </Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Dignissimos laboriosam officia reiciendis quaerat, pariatur 
                                quia excepturi consequatur velit corrupti illum nam quam 
                                distinctio explicabo dolore laborum fuga, veritatis
                                 voluptatibus mollitia. Lorem ipsum dolor sit amet 
                                 consectetur adipisicing elit. Dignissimos, incidunt! 
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                 Asperiores sed voluptatum iusto, iure ad numquam ipsa corporis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBlog