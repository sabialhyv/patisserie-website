import React from 'react'

function Product({ name, url, description }) {
    return (
        <div className="w-1/3 m-5 p-5 bg-[#f6f4f4] rounded-md shadow">
            <img src={url}  alt={name} className='rounded-md h-60 object-cover w-full'  />
            <h2 className='text-yellow-500 text-2xl font-bold my-2'>{name}</h2>
            <p className='text-lg'>{description}</p>
        </div>
    )
}

export default Product