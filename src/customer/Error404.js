import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Error404 extends React.Component {
    render() {
        return (
            <div>
                <body class="error-page">

                    {/*  <!-- Main Wrapper --> */}
                    <div class="main-wrapper">

                        <div class="error-box">
                            <h1>404</h1>
                            <h3 class="h2 mb-3"><i class="fa fa-warning"></i> Oops! Page not found!</h3>
                            <p class="h4 font-weight-normal">The page you requested was not found.</p>
                            <Link to="/Home1" class="btn btn-primary">Back to Home</Link>
                        </div>

                    </div>
                    {/* <!-- /Main Wrapper -->
    
    <!-- jQuery --> */}
                    <script src="assets1/js/jquery-3.2.1.min.js"></script>

                    {/*  <!-- Bootstrap Core JS --> */}
                    <script src="assets1/js/popper.min.js"></script>
                    <script src="assets1/js/bootstrap.min.js"></script>

                    {/*  <!-- Custom JS --> */}
                    <script src="assets1/js/script.js"></script>

                </body>
            </div>
        )
    }
}
export default Error404;