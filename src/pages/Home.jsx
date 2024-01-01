import React from 'react';
import BigBanner from '../component/board/BigBanner';
import Header from "../component/header/Header";
import HomeCard from '../component/card/HomeCard';
import ResourceBoard from '../component/board/ResourceBoard';
import Footer from '../component/footer/Footer';

function Home(props) {
    return (
        <>
            <Header />
            <main>
                <BigBanner />
                <div className='px-5'>
                    <div className="row title-row text-center increased-sizing m-0 overflow-hidden">
                        <div className="col-12">
                            <span className="sub-header">Our Mission</span>
                            <h2 style={{ color: '#000' }} data-accent-colour="">
                                Empowering organisations living within <br /> planetary boundaries to take meaningful action
                            </h2>
                        </div>
                    </div>
                    <HomeCard />
                </div>

                <div className='py-5'>
                    <ResourceBoard />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;