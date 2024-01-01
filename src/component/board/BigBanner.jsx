import React from 'react';
import "./BigBanner.css";

const BigBanner = () => {
    return (
        <section className="hero-banner hero-style-homepage padding-top-60 padding-bottom-65 margin-top-0 margin-bottom-90" style={{ background: 'linear-gradient(94.92deg, rgba(255, 113, 67, 0.5), rgba(205, 220, 57, 0.9))' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="inner-content-homepage-outer float-start w-100 position-relative">
                            <div className="inner-content-homepage-hero float-start w-100 position-relative">
                                <h1 style={{ color: '#000' }} className="float-start w-100 position-relative text-center" data-accent-colour="">
                                    Sustainability training resources for organisations
                                </h1>
                            </div>

                            <div className="float-left w-100 position-relative d-flex justify-content-center align-items-center buttons-container">
                                <a href="https://axaclimateschool.com/get-in-touch/" title="Get in Touch" target="_self" className="cta-button">
                                    Get in Touch
                                </a>

                                <a href="https://link.edapp.com/Djgy1rL59ob" title="Test our courses" target="_blank" className="cta-button secondary">
                                    Test our courses
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="https://climate.axa/" target="_blank" className="logo-side-container">
                <div className="logo-block">
                    <img
                        width="0"
                        height="0"
                        className=""
                        src="https://axaclimateschool.com/wp-content/uploads/2023/08/AXA_Climate_Blue_square-RVB.png.webp"
                        data-src="https://axaclimateschool.com/wp-content/uploads/2023/08/AXA_Climate_Blue_square-RVB.png.webp"
                        alt=""
                    />
                </div>
                <div className="content">
                    <p>Powered by AXA Climate</p>
                </div>
            </a>
        </section>
    );
};

export default BigBanner;
