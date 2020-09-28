import React from 'react';

function Features() {
    return (
        <div className="features">
            <div className="feature">
                <div className="feature-desc">
                    <h2>Lots of happy customers</h2>
                </div>
                <div className="feature-img">
                    <img src={require("../images/happy.svg")} alt="Happy customers" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-img">
                    <img src={require("../images/stream.svg")} alt="Happy customers" />
                </div>
                <div className="feature-desc">
                    <h2>Stream anywhere, anytime</h2>
                </div>
            </div>
            <div className="feature">
                <div className="feature-desc">
                    <h2>Search from a range of choices</h2>
                </div>
                <div className="feature-img">
                    <img src={require("../images/search.svg")} alt="Happy customers" />
                </div>
            </div>
        </div>
    );
}

export default Features;
