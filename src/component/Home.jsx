import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" height="600px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                    <p class="card-text lead fs-2">
                        Check out all trends
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;