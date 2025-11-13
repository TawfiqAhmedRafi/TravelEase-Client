import React, { use } from 'react';
import VehicleCard from '../Components/VehicleCard/VehicleCard';

const LatestVehicles = ({latestVehiclesPromise}) => {
    const vehicles = use(latestVehiclesPromise);
   
    return (
        <div>
            <h2 className='text-3xl md:text-5xl font-semibold text-primary text-center mb-5 poppins-font'>Latest <span className='text-secondary'>Vehicles</span></h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {
            vehicles.map(vehicle=><VehicleCard key={vehicle._id} vehicle={vehicle} ></VehicleCard>)
            }
           </div>
        </div>
    );
};

export default LatestVehicles;