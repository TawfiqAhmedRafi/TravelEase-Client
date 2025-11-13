import React, { Suspense } from 'react';
import LatestVehicles from '../../LatestVehicles/LatestVehicles';
import LoadingPage from '../../Pages/LoadingPage';


const latestVehiclesPromise = fetch("http://localhost:3000/latest-vehicles").then(res => res.json());
const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            <Suspense fallback={<LoadingPage></LoadingPage>}>
                <LatestVehicles latestVehiclesPromise={latestVehiclesPromise}></LatestVehicles>
            </Suspense>
            
        </div>
    );
};

export default Home;