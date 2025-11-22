import {NavLink} from "react-router-dom";
// Img imports  
import linkedInIcon from '../img/linkedin_logo.png';
import instagramIcon from '../img/instagram_logo.png';
import CSALogo from "../img/csa-logo.jpg";
function Footer() {
    return (
        <>
            <div className="bar-divider gray"></div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="logo col-sm-4">
                        <img className="lazy" loading="lazy" alt="csa logo" style={{borderRadius:'50%', marginTop:'20px', marginBottom:'20px'}}src={CSALogo} />
                        </div>
                
                        <div className="site-map col-sm-4">
                            <h4 style={{color:'#25291C'}}>Site Links</h4>
                            <div className="site-links">
                                <div><NavLink to="/">Home</NavLink></div>
                                <div><NavLink to="/events">Events</NavLink></div>
                                <div><NavLink to="/about">About</NavLink></div>
                                <div><NavLink to="/journals">CS Journals</NavLink></div>
                                <div><NavLink to="/meet-the-board">Meet the Board</NavLink></div>
                                <div><NavLink to="/peer-mentoring"> Peer Mentoring </NavLink></div>
                                <div><NavLink to="/spotlight"> Spotlight </NavLink></div>
                                <div><NavLink to="/contact">Contact</NavLink></div>
                            </div>
                        </div>
                
                        <div className="follow col-sm-4">
                            <h4 style={{color:'#25291C'}}>Follow us!</h4>
                            <div className="social-media">
                                <div className="col-sm-4">
                                <a href="https://www.instagram.com/csascholarsatucsd?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGndYGb9ynyvPPn73C5v-FpxeUXmhCMD6-SOovjBQhn-_3bUsTK52axSekogSc_aem_jBTIZWY6TmQZgH3pdp95Ew" target="_blank" title="Instagram"><img
                                    alt="instagram" src={instagramIcon} style={{borderRadius: '25%'}} />
                                    </a>
                                </div>
                                <div className="col-sm-3">
                                <a href="https://www.Icon.com/organization-guest/school/uc-san-diego-chancellor-s-scholars-program/" target="_blank" title="Icon"><img
                                    alt="linkedin" src={linkedInIcon} style={{borderRadius: '25%'}}/>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright row text-center">
                        <p style={{color:'#25291C'}}>&copy; 2025 Chancellor's Scholars Alliance</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;