
import React from 'react';
import './HomePage.css';
import Image from '../../images/img2.jpg';


const HomePage = () => {
    
    return (
        <div className="App" style={{backgroundImage: `url(${Image})` }}>
            <div className="App-content">
                <h1>Shopping World</h1>
            </div>
        </div>
    );
};

export default HomePage;