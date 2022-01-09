import React from 'react';
import {userSelector, useSelector} from 'react-redux'
const Home = () => {
    const state = useSelector((state) => state);
    return (
        <div className="container-fluid h1 p-5 text-center"> 
        Starting with the Homepage {JSON.stringify(state)}
        </div>
    )
}

export default Home;