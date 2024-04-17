import Image from 'next/image';
import React from 'react';

const SingleImg = ({item}) => {
  return (
    <div className=' '>
      <Image src={item.image} alt={item.alt} width={300} height={300}/>
    </div>
  );
}

export default SingleImg;
