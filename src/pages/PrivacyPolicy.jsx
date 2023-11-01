import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';

const PrivacyPolicy = () => {
  return (
    <>
    <Meta title={'Privacy Policy'} />
    <BreadCrumb title='Privacy Policy' /> 
    <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestias dolore esse quisquam alias ab sint architecto, eveniet commodi iusto? Culpa perspiciatis iste reiciendis libero quaerat sed voluptas tempora quam!</p>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestias dolore esse quisquam alias ab sint architecto, eveniet commodi iusto? Culpa perspiciatis iste reiciendis libero quaerat sed voluptas tempora quam!</p>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestias dolore esse quisquam alias ab sint architecto, eveniet commodi iusto? Culpa perspiciatis iste reiciendis libero quaerat sed voluptas tempora quam!</p>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestias dolore esse quisquam alias ab sint architecto, eveniet commodi iusto? Culpa perspiciatis iste reiciendis libero quaerat sed voluptas tempora quam!</p>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    </>
  )
}

export default PrivacyPolicy