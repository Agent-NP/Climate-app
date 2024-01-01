import React from 'react';
import "./HomeCard.css";


function HomeCard(props) {
    return (

        <div className="row card-count-4 m-0 overflow-hidden">
            {/* Card 1 */}
            <div className="col post-cards-col mb-4 mb-md-0 colour-scheme-purple">
                <div className="card-block float-start w-100 position-relative h-100 text-center">
                    <div className="icon-container float-start w-100 position-relative d-flex align-items-center justify-content-center">
                        <img width="0" height="100%" src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_employee-engagement.svg" alt="" />
                    </div>
                    <h4 className="float-start w-100 position-relative">Engagement</h4>
                    <div className="content float-start w-100 position-relative">
                        <p>Interactive bite-sized video content to keep employees engaged</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col my-sm-2 mb-4 mb-md-0 post-cards-col colour-scheme-blue">
                <div className="card-block float-start w-100 position-relative h-100 text-center">
                    <div className="icon-container float-start w-100 position-relative d-flex align-items-center justify-content-center">
                        <img width="0" height="100%" src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_simple-science.svg" alt="" />
                    </div>
                    <h4 className="float-start w-100 position-relative">Science made simple</h4>
                    <div className="content float-start w-100 position-relative">
                        <p>Simple interpretation of scientific terms for easy comprehension, but always verified by independent scientists and experts</p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col post-cards-col mb-4 mb-md-0 colour-scheme-red">
                <div className="card-block float-start w-100 position-relative h-100 text-center">
                    <div className="icon-container float-start w-100 position-relative d-flex align-items-center justify-content-center">
                        <img width="0" height="100%" src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_workforce-empowerment.svg" alt="" />
                    </div>
                    <h4 className="float-start w-100 position-relative">Workforce empowerment</h4>
                    <div className="content float-start w-100 position-relative">
                        <p>Clear actionable insights to help employees support their organisation’s sustainability strategy</p>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="col mt-md-4 mt-lg-0 post-cards-col colour-scheme-orange">
                <div className="card-block float-start w-100 position-relative h-100 text-center">
                    <div className="icon-container float-start w-100 position-relative d-flex align-items-center justify-content-center">
                        <img width="0" height="100%" src="https://axaclimateschool.com/wp-content/uploads/2023/06/icon_export-advice.svg" alt="" />
                    </div>
                    <h4 className="float-start w-100 position-relative">Expert advice</h4>
                    <div className="content float-start w-100 position-relative">
                        <p>
                            <span className="ui-provider fz b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">
                                Testimonies from business leaders & experts with actionable use cases
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;