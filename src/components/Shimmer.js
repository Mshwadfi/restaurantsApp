import React from 'react';

const ResCardShimmer = () => {
  return (
    <div className="restaurant-card rounded-md m-4 p-2 w-[270px] h-[350px] shadow-md border border-solid border-blue-200 bg-white animate-pulse">
      <div className="restaurant-img shimmer-bg rounded-md h-[200px] w-[250px]"></div>
      <div className="restaurant-info">
        <div className="shimmer-bg h-6 w-[70%] rounded-md my-2"></div>
        <div className="shimmer-bg h-4 w-[90%] rounded-md mb-2"></div>
        <div className="shimmer-bg h-4 w-[50%] rounded-md mb-2"></div>
        <div className="flex items-center justify-between gap-2 m-2">
          <div className="shimmer-bg h-6 w-12 rounded-md"></div>
          <div className="shimmer-bg h-6 w-12 rounded-md"></div>
          <div className="shimmer-bg h-6 w-12 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default ResCardShimmer;
