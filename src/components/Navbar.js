import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar(){

    const cartstate=useSelector(state=>state.cartReducer)
    return(
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
              <Link className="navbar-brand" to="/">PIZZA HOUSE</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                   <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li> 
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart {cartstate.cartItems.length}</Link>
                  </li>
                  
                </ul>
              </div>
            </nav>
        </div>
    )
}
export default Navbar