import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className=''>
            <header className=''>
            <Navbar></Navbar>
            </header>
           <main className='px-5 md:px-8 my-10'>
            <Outlet></Outlet>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;