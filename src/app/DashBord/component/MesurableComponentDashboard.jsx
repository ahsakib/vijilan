
import React from 'react';
import DashboardSideCard from './DashboardSideCard';

const MesurableComponentDashboard = ({ heading, array }) => {
    return (
        <div className='  bg-gradient-to-t to-[#063853] from-[#082235] py-5 px- mt-10'>

            <div className='w-3/4 mx-auto'>
                <h1 className='text-gray-500 text-center text-3xl font-bold my-6'>{heading}</h1>
                {array && <div className='grid grid-cols-1 gap-6'>
                    {array.map(card => <DashboardSideCard head={card.metric} text={card.label} desc={card.text} />)}
                </div>}
            </div>
        </div>
    );
};

export default MesurableComponentDashboard;