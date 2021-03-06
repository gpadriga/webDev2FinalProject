import React, {Component} from "react";
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/footer.css";

const headerStyle = {

    backgroundColor: "#21d192"

}

const contentStyle = {
    width: "60px"
}

class Footer extends Component {

openFb = (e) => {

    var a = ['https://www.facebook.com/allan.shivji', 'https://www.facebook.com/harish.indalkar.3', 'https://www.facebook.com/amelg.rathappillil', 'https://www.facebook.com/gabby.padriga'];

    for(var i=0; i<a.length; i++){
        window.open(a[i]);
    }
    
}

openLnk = () => {
    var a = ['https://www.linkedin.com/in/harish-indalkar', 'https://www.linkedin.com/in/allan-shivji-a14a18a7/', 'https://www.linkedin.com/in/amel-rathappillil/', 'https://www.linkedin.com/in/gabrielle-padriga/'];

    a.forEach(element => {
        window.open(element);
    });
}

openInsta = () => {
    var a = ['https://www.instagram.com/gab.pad/?hl=en', 'https://www.instagram.com/iallan_s/?hl=en', 'https://www.instagram.com/haribhau_indalkar/?hl=en', 'https://www.instagram.com/_amel_g/?hl=en'];

    a.forEach(element => {
        window.open(element);
    })
}

render(){
    return (
        <div className="mt-5 footerDiv">
            <footer className="page-footer font-small blue-grey lighten-5">
                {/* <div style="background-color: #21d192;"> */}
                <div style={headerStyle}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>

                            <div className="col-md-6 col-lg-7 text-center text-md-right">

                                <a className="fb-ic" onClick={this.openFb} target="_blank">
                                    {/* <i className="fab fa-facebook-f white-text mr-4"> </i> */}
                                    <FontAwesomeIcon cursor="pointer" icon={faFacebookF}
                                        className=" white-text mr-4" />
                                </a>
                                <a className="tw-ic">
                                    {/* <i className="fab fa-twitter white-text mr-4"> </i> */}
                                    <FontAwesomeIcon cursor="pointer" icon={faTwitter}
                                        className=" white-text mr-4" />
                                </a>

                                <a className="gplus-ic">
                                    {/* <i className="fab fa-google-plus-g white-text mr-4"> </i> */}
                                    <FontAwesomeIcon cursor="pointer" icon={faGooglePlusG}
                                        className=" white-text mr-4" />
                                </a>

                                <a className="li-ic" onClick={this.openLnk} target="_blank">
                                    {/* <i className="fab fa-linkedin-in white-text mr-4"> </i> */}
                                    <FontAwesomeIcon cursor="pointer" icon={faLinkedinIn}
                                        className=" white-text mr-4" />
                                </a>
                                <a className="ins-ic" onClick={this.openInsta} target="_blank">
                                    {/* <i className="fab fa-instagram white-text"> </i> */}
                                    <FontAwesomeIcon cursor="pointer" icon={faInstagram}
                                        className=" white-text mr-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center text-md-left mt-5">
                    <div className="row mt-3 dark-grey-text">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Ask OverFlow</h6>
                            {/* <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;" /> */}
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={contentStyle} />
                            {/* <p>Hope you could have extended the deadline for 2 days. We did not sleep for past 2 days. We learned that a "4 week long" project can be done in 3 days if you just don't sleep.</p> */}
                            <p>Ask Overflow is the best place to post your questions and get back great answers from
                                highly talented people. The users can upvote the question if they find its relevant one and
                                do the vice versa.
                                Askoverflow is made with intension to specifically target the questions based on language category.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Members</h6>
                            {/* <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;" /> */}
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={contentStyle} />
                            <p className="dark-grey-text">
                                Harish
                            </p>
                            <p className="dark-grey-text" >
                                Allan
                            </p>
                            <p className="dark-grey-text">
                                Gabrielle
                            </p>
                            <p className="dark-grey-text">
                                Shuangwei Shi
                            </p>
                            <p className="dark-grey-text">
                                Amel G
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">CWID</h6>
                            {/* <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;" /> */}
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={contentStyle} />
                            <p className="dark-grey-text">
                                10441759
                            </p>
                            <p className="dark-grey-text">
                                10437270
                            </p>
                            <p className="dark-grey-text">
                                10416101
                            </p>
                            <p className="dark-grey-text">
                                10427100
                            </p>
                            <p className="dark-grey-text">
                                10442659
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            {/* <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;" /> */}
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={contentStyle} />
                            <p>
                                {/* <i className="fas fa-home mr-3"></i> 1 Castle Point Terrace, Hoboken, NJ 07030</p> */}
                                <FontAwesomeIcon cursor="pointer" icon={faHome}
                                    className=" white-text mr-3" />
                                1 Castle Point Terrace, Hoboken, NJ 07030</p>
                            <p>
                                {/* <i className="fas fa-envelope mr-3"></i> */}
                                <FontAwesomeIcon cursor="pointer" icon={faEnvelope}
                                    className=" white-text mr-3" />
                                info@stevens.com</p>
                            <p>
                                {/* <i className="fas fa-phone mr-3"></i> */}
                                <FontAwesomeIcon cursor="pointer" icon={faPhone}
                                    className=" white-text mr-3" />
                                + 01 (201) 216-5000</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center text-black-50 py-3 cpyRight">© 2019 Copyright
    <a className="dark-grey-text" target="_blank" href="https://github.com/gpadriga/webDev2FinalProject"> CS554-group-9.com</a>
                </div>

            </footer>

        </div>
    )
}
}

export default Footer;