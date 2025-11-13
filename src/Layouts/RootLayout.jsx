import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AboutTravelEase from '../Components/AboutTravelEase/AboutTravelEase ';
import TopCategories from '../Components/TopCategories/TopCategories';

const RootLayout = () => {
    return (
        <div className=''>
            <header className=''>
            <Navbar></Navbar>
            </header>
           <main className='px-5 md:px-8 my-10'>
            <section> <Outlet></Outlet></section>
           <section>
            <TopCategories></TopCategories>
           </section>

            <section className='py-5 md:py-8'>
                <AboutTravelEase></AboutTravelEase>
            </section>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;