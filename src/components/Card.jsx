import React from 'react';

import noImage from '../assets/no-image-available.svg';

const Card = ({ image, title, year }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white h-card">
      {image === 'N/A' ? (
        <img className="rounded-t-lg w-full h-2/3 p-14" src={noImage} alt={title} />
      ) : (
        <img className="rounded-t-lg w-full object-cover h-2/3" src={image} alt={title}/>
      )}
      <div className="flex flex-col justify-between h-1/3">
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-1">{title}</div>
        <p className="text-gray-700 text-base">
          {year}
        </p>
      </div>
      <div className="px-6 pb-4">
        <button
          className="rounded-md shadow-xl text-white text-lg hover:bg-slate-300 font-semibold bg-slate-400 py-2 px-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"
        >
          Details
        </button>
      </div>
      </div>
    </div>
  )
}

export default Card;