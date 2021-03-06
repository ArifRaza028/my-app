import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../customer/Header';
import Footer from '../customer/Footer';
class Videocall extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <body class="call-page">

                    {/* <!-- Main Wrapper --> */}
                    <div class="main-wrapper">


                        <div class="content">
                            <div class="asp container-fluid">

                                {/*  <!-- Call Wrapper --> */}
                                <div class="call-wrapper">
                                    <div class="call-main-row">
                                        <div class="call-main-wrapper">
                                            <div class="call-view">
                                                <div class="call-window">

                                                    {/* <!-- Call Header --> */}
                                                    <div class="fixed-header">
                                                        <div class="navbar">
                                                            <div class="user-details">
                                                                <div class="float-left user-img">
                                                                    <Link class="avatar avatar-sm mr-2" to="/Patientsprofile" title="Rochel Dickey">
                                                                        <img src="assets/img/patients/patient1.jpg" alt="User Image" class="rounded-circle" />
                                                                        <span class="status online"></span>
                                                                    </Link>
                                                                </div>
                                                                <div class="user-info float-left">
                                                                    <Link to="/Patientsprofile"><span>Rohini</span></Link>
                                                                    <span class="last-seen">Online</span>
                                                                </div>
                                                            </div>
                                                            <span class="call-duration float-right">00:59</span>
                                                        </div>
                                                    </div>
                                                    {/* <!-- /Call Header -->
                                
                                <!-- Call Contents --> */}
                                                    <div class="call-contents">
                                                        <div class="call-content-wrap">
                                                            <div class="user-video">
                                                                <img src="assets/img/video-call.jpg" alt="User Image" />
                                                            </div>
                                                            <div class="my-video">
                                                                <ul>
                                                                    <li>
                                                                        <img src="assets/img/patients/patient1.jpg" class="img-fluid" alt="User Image" />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  <!-- Call Contents -->
                                
                                <!-- Call Footer --> */}
                                                    <div class="call-footer">
                                                        <div class="call-icons">
                                                            {/* <!-- <span class="call-duration">00:59</span> --> */}
                                                            <div class="toggle-voice-video">
                                                                <label class="switch"><input type="checkbox" id="togBtn" /><div class="slider round"></div></label>
                                                            </div>
                                                            <ul class="call-items">
                                                                <li class="call-item">
                                                                    <a href="#" title="Mute Audio" data-placement="top" data-toggle="tooltip">
                                                                        <i class="fa fa-microphone microphone"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="end-call-new">
                                                                    <a href="javascript:void(0);" title="End Call" data-placement="top" data-toggle="tooltip">
                                                                        <i class="material-icons">call_end</i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/* <!-- <div class="end-call">
                                            <a href="javascript:void(0);">
                                                <i class="material-icons">call_end</i>
                                            </a>
                                        </div> --> */}
                                                        </div>
                                                    </div>
                                                    {/*  <!-- /Call Footer --> */}

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Call Wrapper --> */}

                            </div>

                        </div>
                        <Footer /></div>

                </body>
            </div>
        )
    }
}
export default Videocall;