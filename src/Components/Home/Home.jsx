import React, { Suspense } from 'react';
import LatestVehicles from '../../LatestVehicles/LatestVehicles';
import LoadingPage from '../../Pages/LoadingPage';
import Banner from '../Banner/Banner';


const latestVehiclesPromise = fetch("http://localhost:3000/latest-vehicles").then(res => res.json());
const Home = () => {
    return (
        <div>
            <section className='pb-5 md:pb-10'> <Banner></Banner></section>
           
            <Suspense fallback={<LoadingPage></LoadingPage>}>
                <LatestVehicles latestVehiclesPromise={latestVehiclesPromise}></LatestVehicles>
            </Suspense>
            
        </div>
    );
};

export default Home;