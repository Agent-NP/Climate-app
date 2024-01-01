import React from 'react';
import "./ResourceBoard.css";

const ResourceBoard = () => {
    return (
        <section className="boxed-in-columns padding-top-0 padding-bottom-0 margin-top-0 margin-bottom-70" style={{ background: 'linear-gradient(45deg, rgba(0,0,0,0), rgba(0,0,0,0))' }}>
            <div className="container">
                <div className="row title-row text-center">
                    <div className="col-12">
                        <h2 style={{ color: '#000' }} data-accent-colour="">
                            Just some of the reasons to use <br />our resources
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col post-cards-col colour-scheme-red">
                        <div className="card-block float-start w-100 position-relative">
                            <div className="row justify-content-center">
                                {/* Card 1 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_languages.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_languages.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">9 languages</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>You are global, so are we</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon-employees.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon-employees.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">4 million people</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>worldwide who have access to our content</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_feedback.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_feedback.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">97% positive feedback</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>Clients report learning new and valuable information</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_nps.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_nps.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">+70 NPS</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>Ranked among the very best in our industry by the learners</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 5 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_modules.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_modules.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">190+ modules</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>Our content covers the full range of sustainability topics</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 6 */}
                                <div className="col-12 col-md-6 col-lg-4 boxed-cards-col">
                                    <div className="card-block-inner float-start w-100 position-relative text-center">
                                        <div className="icon-container float-start w-100 position-relative">
                                            <img
                                                width="0"
                                                height="0"
                                                className="float-left w-100 h-100 object-fit-contain"
                                                src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_scientists.svg"
                                                data-src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_scientists.svg"
                                                alt=""
                                            />
                                        </div>
                                        <h4 className="float-start w-100 position-relative">+120 contributors</h4>
                                        <div className="content float-start w-100 position-relative">
                                            <p>We partner with experts and scientists to ensure the accuracy of our content</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of repeated block */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourceBoard;
