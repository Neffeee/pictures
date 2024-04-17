import React from 'react';

import SingleImg from './SingleImg';

const PictureList = ( {data, filteredData}) => {

   
    
    
  return (
    <div className='my-5'>
      <h1 className='flexCenter text-2xl md:text-3xl my-2 md:my-5  tracking-wider'>LOGOS</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {data.map(item => (
        <div key={item.alt} className="">
            <SingleImg item={item}/>
        </div>
      ))}
      </div>

      
    </div>
  );
}

export default PictureList;
