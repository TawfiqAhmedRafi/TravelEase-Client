import React from 'react';
import VehicleCard from '../Components/VehicleCard/VehicleCard';

const LatestVehicles = ({ latestVehicles }) => {
    if (!latestVehicles || latestVehicles.length === 0) {
        return <p className="text-center py-10">No vehicles available</p>;
    }

    return (
        <div className='py-10'>
            <h2 className='text-3xl md:text-5xl font-semibold text-primary text-center mb-10 fredoka-font'>
                Latest <span className='text-secondary'>Vehicles</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {latestVehicles.map(vehicle => (
                    <VehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
};

export default LatestVehicles;
