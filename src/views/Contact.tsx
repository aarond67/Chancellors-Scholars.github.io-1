import linkedInIcon from '../img/linkedin_logo.png';
import instagramIcon from '../img/instagram_logo.png';

function Contact() {
    return(
        <div className="container contact-main">
            <div className="row">
                <hr />
                <h2>Contact us</h2>
                <p>
                    Have questions? Want to get in touch with us?
                </p>

                <div className="col-sm-6 col-1">
                    <h4>Email</h4>
                    <p>
                        Chancellor's Scholars Program
                    </p>
                    <a href="mailto:ChancellorsScholars@gmail.com"><p>ChancellorsScholars@ucsd.edu</p></a>
                    <p>
                        Chancellor's Scholars Alliance Student Board
                    </p>
                    <a href="mailto:cscholarsall@ucsd.edu"><p>cscholarsall@ucsd.edu</p></a>
                    <p>
                        Emeriti Mentor Program
                    </p>
                    <a href="mailto:EmeritiMentor@gmail.com"><p>EmeritiMentor@ucsd.edu</p></a> 
                    <p>
                        Chancellor's Scholars Alliance President 
                    </p>
                    <a href="mailto:k7cheung@ucsd.edu"><p>Keene Cheung</p></a>
                    <p>Webmasters</p>
                    <a href="mailto:cag013@ucsd.edu"><p>Carlos Gomez</p></a>
                    <a href="mailto:fdang@ucsd.edu"><p>Foster Dang</p></a>
                </div>
                <div className="col-sm-6 col-2">
                    <h4>Social Media</h4>
                    <div className="social-media">
                        <div className="col-sm-2">
                            <a href="https://www.instagram.com/ucsdcsascholars/" target="_blank" title="Instagram"><img alt="instagram" src={instagramIcon} /></a>
                        </div>
                        <div className="col-sm-2">
                            <a href="https://www.linkedin.com/organization-guest/school/uc-san-diego-chancellor-s-scholars-program/" target="_blank" title="LinkedIn"><img alt="linkedin" src={linkedInIcon} /></a>
                        </div>
                        <div className="col-sm-8">
                            {/* placeholder for alignment, replace with actual links when those accounts are set up */}
                        </div>
                    </div>
            </div>
        </div>
      </div>
    );
}

export default Contact;