import React from 'react';
import { Link } from 'react-router-dom';
import Usercontext from '../utils/Usercontext';
import { useContext } from 'react';
const ResCard = (props) => {
  const { resData } = props;

  let {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    areaName,
    sla,

  } = resData;

  // const data = useContext(Usercontext);
  

  // const firstThreeCuisines = cuisines.slice(0, 3);
  const truncatedCuisines = cuisines.join(', ').length > 30 ? `${cuisines.join(', ').slice(0, 30)}...` : cuisines.join(', ');
   name = name.length > 20 ? `${name.slice(0, 20)}...` : name;
  return (
    <div className="restaurant-card rounded-md m-4 p-2 w-[270px] h-[350px]
     shadow-md border border-solid border-blue-200 bg-white" 
      data-testid='resCard'>
      <img className="restaurant-img rounded-md  h-[200px] w-[300px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant" />
      <div className="restaurant-info">
        <h2 className="restaurant-name font-bold p-2">{name}</h2>
        <p className="px-2">{truncatedCuisines}</p>
        <p className='px-2'>{areaName}</p>
        <div className="flex items-center justify-between gap-2 m-2 text-sm font-bold">
          <p className="bg-green-600 text-white p-1 rounded-md">{avgRating} ✰</p>
          <h4>•</h4>
          <p className="delivery-time"> {sla.deliveryTime} MIN</p>
          <h4>•</h4>
          <p className="delivery-time"> {costForTwo}</p>
        </div>
        
      
        {/* <p>{data.loggedIn}</p> */}
      </div>
    </div>
  );
}

export const PromotedCard = (ResCard) =>{
  return(props) =>{
    return(
      <div>
        <label className='absolute m-1 p-2 bg-orange-400 text-white shadow-md rounded-md'>Top Rated</label>
        <ResCard {...props}/>
      </div>
    )
  }
}


export default ResCard;
