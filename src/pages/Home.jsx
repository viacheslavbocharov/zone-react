import React from 'react'
import Header from "../components/Header";
import Hello from "../components/Hello";
import Footer from "../components/Footer";
import Service from '../components/Service';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';

export const Home = () => {
    return (

        <div className="overflow-wraper">
            <Header />
            <Hello />
            <Service />
            <Team />
            <Subscribe />
            <Footer />
        </div>
    )
}
