import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div>
                {/*  <!-- /Blog -->
     <!-- Footer --> */}
                <footer class="footer">
                    {/*  <!-- Footer Top --> */}
                    <div class="footer-top">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 text-center">
                                    <Link to="/" class="footer-logo boda">
                                        <img src="assets/img/boda.png" class="img-fluid" alt="Logo" />
                                    </Link>
                                </div>
                                <div class="social-icon media-btn mt-3 mb-2">
                                    <ul>
                                        <li>
                                            <Link to="#" target="_blank"><i class="fab fa-facebook-f"></i> </Link>
                                        </li>
                                        <li>
                                            <Link to="#" target="_blank"><i class="fab fa-google-plus-g"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#" target="_blank"><i class="fab fa-instagram"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#" target="_blank"><i class="fab fa-twitter"></i> </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 justify-content-center d-flex mt-4 mb-2">
                                    <div class="search-holder">
                                        <input type="text" name="search" placeholder="Your Email" />
                                        <button class=" btn-yellow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="col-12 mt-4 text-center">
                                    <ul class="policy-menu text-center">
                                        <li><Link to="#">About Us</Link></li>
                                        {/* <li><Link to="/Doctordashboard">Doctors</Link></li> */}
                                        {/*  <li><Link to="/Bloglist">Blogs</Link></li> */}
                                        {/*  <li><Link to="#">Our Clinic</Link></li> */}
                                        {/* <li><Link to="#">FAQ</Link></li> */}
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="/Termcondition">Terms and Conditions</Link></li>
                                        <li><Link to="/Privacypolicy">Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Footer Top -->

<!-- Footer Bottom --> */}
                    <div class="footer-bottom">
                        <div class="container-fluid">

                            {/* <!-- Copyright --> */}
                            <div class="copyright">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12 text-center">
                                        <div class="copyright-text">
                                            <p class="mb-0">&copy; 2021 <Link to="#" class="text-yellow"> Boda </Link> All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Copyright -->  */}
                        </div>
                    </div>
                    {/*  <!-- /Footer Bottom --> */}

                </footer>
                {/* <!-- /Footer --> */}

                {/* <!-- /Main Wrapper -->

<!-- jQuery --> */}
                <script src="assets/js/jquery.min.js"></script>

                {/* <!-- Bootstrap Core JS --> */}
                <script src="assets/js/popper.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>

                {/* <!-- Slick JS --> */}
                <script src="assets/js/slick.js"></script>

                {/* <!-- Custom JS --> */}
                <script src="assets/js/script.js"></script>

            </div>

        )

    }
}
export default Footer;
