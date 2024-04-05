import '../style/_Footer.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        // <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col">
                    <ul className='list-unstyled'>
                    <h4>Lunar Delights</h4>
                        <li>The milky way</li>
                        <li>The Moon</li>
                        <li>420 69</li>
                    </ul>
                        
                    </div>
                    <div className="ccl"> 
                    <ul className='list-unstyled'>
                    <Link to="/contact" className='footer-link'><h4>Contact</h4></Link>
                       <li>+420-69-13-37</li> 
                       <li>Lunardelights@moonmail.uni</li>
                       </ul>
                    </div>
                    <div className="col2">
                    <ul className='list-unstyled'>
                    <h4>Social media</h4>
                       <li>Instagram</li> 
                       <li>X</li>
                       <li>Facebook</li>
                       </ul>
                    </div>
                </div>
                <hr />
                <div className='row2'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Lunar Delights | All rights reserved
                    </p>
                </div>
            </div>
        // {/* </div> */}
    );
};

export default Footer;