import React, { useEffect, useState } from 'react';

import './App.css'

import '@fortawesome/fontawesome-free/css/all.css';
import { LineChart, Line } from 'recharts';

const BitcoinChart = () => {
    const bitcoinData = [

        { name: 'Day 1', price: 50000 },

        { name: 'Day 2', price: 52000 },

        { name: 'Day 3', price: 49000 },

        { name: 'Day 4', price: 53000 },

        { name: 'Day 5', price: 51000 },

    ];

    // Calculating the highest and lowest prices 

    const highestPrice = Math.max(...bitcoinData.map(entry => entry.price));

    const lowestPrice = Math.min(...bitcoinData.map(entry => entry.price));



    // Creating a new data array with only the first bitcoin price 

    const bitcoinDataForGraph = bitcoinData.map(entry => ({ name: entry.name, price: entry.price }));



    return (

        <div style={{ width: '100%', margin: '0 auto' }}>
            <div>
            <p>Highest: ${highestPrice.toFixed(2)} Lowest: ${lowestPrice.toFixed(2)}</p>
            </div>

            <LineChart width={250} height={200} data={bitcoinDataForGraph}>

                <Line type="monotone" dataKey="price" stroke="#8884d8"/>

            </LineChart>

        </div>

    );

}

const BitcoinWallet = () => {

    const [btn4Visible, setBtn4Visible] = useState(false);

    useEffect(() => {

        const handleDropdownClick = () => {

            setBtn4Visible(!btn4Visible);

        };

        const drop = document.querySelector('.fas.fa-angle-down');

        drop.addEventListener('click', handleDropdownClick);

        return () => {

            drop.removeEventListener('click', handleDropdownClick);

        };

    }, [btn4Visible]);

    return (

        <div>

            <div className="first">
                <h4>Bitcoin Wallet</h4>
            <div className='toggel'>
            <i className="fa-solid fa-ellipsis-vertical fa-2xs"style={{ color: '#bababa' }}></i>
            </div>

            </div>

            <div className="second">

                <div className="lobo">

                    <i className="fab fa-bitcoin" style={{ color: '#f99d34', transform: 'rotate(-12deg)' }}></i>

                    <h6>Bitcoin</h6>

                    <p>BTC</p>

                </div>

                <div className="price">

                    <h2>3.529020  BTC</h2>

                    <h4>$19.53 USD <button onClick={() => setBtn4Visible(!btn4Visible)}>-2.32%</button></h4>
                    <div className="d">

                        <i className="fas fa-angle-down" style={{ color: '#9c9ea0' }}></i>


                    </div>

                </div>

            </div>

            <div className="btn4" style={{ display: btn4Visible ? 'flex' : 'none' }}>

                <h5>Day</h5>

                <h5>Week</h5>

                <h5>Month</h5>

                <h5>Year</h5>

            </div>

            <div className="third">

                <BitcoinChart />

            </div>

            <div className="buysell">

                <button>

                    <div>

                        <i className="fab fa-bitcoin" style={{ color: '#0884e2', transform: 'rotate(-12deg)' }}></i>

                        <h6>Buy BTC</h6>
                    </div>

                </button>
                <button>

                    <div>
                         <i className="fab fa-bitcoin" style={{ color: '#dd4783', transform: 'rotate(-12deg)' }}></i>
                        <h6>Sell BTC</h6>
                    </div>

                </button>

            </div>

            <div className="bar">

                <i className="fas fa-wallet" style={{ color: '#1a1b1b' }}></i>

                <i className="fas fa-compass" style={{ color: '#9c9ea0' }}></i>

                <i className="fas fa-bell" style={{ color: '#adafb3' }}></i>

                <i className="fas fa-cog" style={{ color: '#bababa' }}></i>

            </div>

        </div>

    );

};

export default BitcoinWallet;


