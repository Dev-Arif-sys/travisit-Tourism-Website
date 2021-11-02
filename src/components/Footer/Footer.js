import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="container">
                <div className=" row justify-content-center">
                   <div className="col-md-3">
                       <div>
                           <h3 className="fs-3 fw-bold text-white ">TRAV<span className="logo-part">ISIT</span></h3>
                           <p className="text-white">the best agency for your dream tour who are doing the job with the satisfaction of every client</p>
                       </div>
                       <div className="social-link">
            
                       </div>
                       <div>
                           <small className="text-white">copyright &copy;2021Travisit</small>
                       </div>
                   </div>
                   {/* our presence */}
                   <div className="text-white presence text-left col-md-3">
 
                       <ul>
                       <h5>Company</h5>
                           <li>
                               <a href="">About us</a>
            
                           </li>
                           <li>
                               <a href="">Community Blog</a>
                           </li>
                           <li>
                               <a href="">Rewards</a>
                           </li>
                           <li>
                               <a href="">Work with us</a>
                           </li>
                           <li>
                               <a href="">Meet the team</a>
                           </li>
                       </ul>
            
            
                   </div>
            
                {/* our presence */}
                <div className="text-white presence text-left col-md-3">
                
                <ul>
                <h5>Support</h5>
                           <li>
                               <a href="">Accoount</a>
            
                           </li>
                           <li>
                               <a href="">Legal</a>
                           </li>
                           <li>
                               <a href="">Contact</a>
                           </li>
                           <li>
                               <a href="">Affiliate Program</a>
                           </li>
                           <li>
                               <a href="">Privacy policy</a>
                           </li>
                       </ul>
                </div>
            
               {/* our presence */}
                <div className="text-white presence text-left col-md-3">
               
                <ul>
                <h5 className='mt-2'>Subscribe to get TravelBlog</h5>
                 
                  <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>
          
            
            <Button className='btn-sm btn-warning ' variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
                       </ul>
                </div>
            
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;