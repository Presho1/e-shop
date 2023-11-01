import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome} from 'react-icons/ai'
import {BsEnvelope, BsInfoLg} from 'react-icons/bs'
import {MdCall} from 'react-icons/md'


const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us' />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.113635770074!2d3.3939672267121814!3d6.456340881699526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b342006b16d%3A0xb0863987cb2f9b90!2sDolphine%20Estate%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697538852928!5m2!1sen!2sng" 
              width="600" 
              height="450" 
              className='border-0 w-100'
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
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
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/> 
                        <address className='mb-0'>
                          No, 456, Lagoon View Estate, Onikan, TBS, Abuja.
                        </address>
                      </li>
                      <li className='mb-3 mb-3 d-flex gap-15 align-items-center'> 
                        <MdCall className='fs-5'/> 
                        <a href="tel:+234 703 6778867">
                        +234 703 6778867
                        </a> 
                      </li>
                      <li className='mb-3 mb-3 d-flex gap-15 align-items-center'>
                        <BsEnvelope className='fs-5'/> 
                        <a href="mailto:preciousolayinka8@gmail.com">
                          preciousolayinka8@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 mb-3 d-flex gap-15 align-items-center'>
                        <BsInfoLg className='fs-5'/> 
                        <p className='mb-0'>Monday - Friday 10am -6pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Contact