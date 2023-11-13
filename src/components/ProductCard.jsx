import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/iwatch1.png';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg'

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    
    const ButtonWithCustomAttribute = ({ customAttribute, children }) => {
        return (
          <button className={`border-0 bg-transparent`} {...{ [customAttribute]: 'true' }}>
            {children}
          </button>
        );
      };

  return (
   <>
    <div className= {` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link 
            to='/product/:id' 
            className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
            <ButtonWithCustomAttribute customAttribute="border-0">
            <img src={wish} alt="wishlist" />
          </ButtonWithCustomAttribute>
            </div>
            <div className="product-image">
                <img src={ watch} className='img-fluid' alt="product" />
                <img src={ watch2 } className='img-fluid short' alt="product" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={20}
                    value={3}
                    edit= {false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae cupiditate laborum aut similique animi ipsa natus obcaecati nobis impedit ullam enim, a soluta ipsam ut eos vero nihil at!</p>
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={prodcompare} alt="compare" />
                    </ButtonWithCustomAttribute>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={view} alt="view" />
                    </ButtonWithCustomAttribute>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={addcart} alt="add cart" />
                    </ButtonWithCustomAttribute>
                </div>
            </div>
        </Link>
    </div>
    <div className= {` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link 
            to='/product/:id' 
            className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <ButtonWithCustomAttribute customAttribute="border-0">
                    <img src={wish} alt="wishlist" />
                </ButtonWithCustomAttribute>
            </div>
            <div className="product-image">
                <img src={ watch } className='img-fluid' alt="product" />
                <img src={ watch2 } className='img-fluid short' alt="product" />
            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={20}
                    value={3}
                    edit= {false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae cupiditate laborum aut similique animi ipsa natus obcaecati nobis impedit ullam enim, a soluta ipsam ut eos vero nihil at!</p>
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={prodcompare} alt="compare" />
                    </ButtonWithCustomAttribute>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={view} alt="view" />
                    </ButtonWithCustomAttribute>
                    <ButtonWithCustomAttribute customAttribute="border-0">
                        <img src={addcart} alt="add cart" />
                    </ButtonWithCustomAttribute>
                </div>
            </div>
        </Link>
    </div>
   </>
    
  )
}  

export default ProductCard