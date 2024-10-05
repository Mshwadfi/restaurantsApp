import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResCard, { PromotedCard } from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineOffline from '../utils/useOnlineOffline';
import { addRestaurants } from '../utils/restaurantsSlice'

const Body = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector((state) => state.restaurants); // Fetch from Redux store
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (restaurantList.length === 0) {
      // Only fetch if the store is empty
      fetchData();
    } else {
      // If restaurants are already in store, use them
      setFilteredRestaurants(restaurantList);
    }
  }, [restaurantList]); // Rerun when restaurantList updates

  const fetchData = async () => {
    try {
      const data = await fetch(
        'https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING'
      );
      const jsonData = await data.json();
      const fetchedRestaurants = jsonData.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;

      // Push fetched data to Redux store
      dispatch(addRestaurants(fetchedRestaurants));
      setFilteredRestaurants(fetchedRestaurants); // Update the local state for filtered restaurants
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!useOnlineOffline()) {
    return <h1>Please check your internet connection!</h1>;
  }

  const PromotedResCard = PromotedCard(ResCard);

  return restaurantList.length === 0 ? (
    <div className='flex justify-center items-center flex-wrap'>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className='body my-8'>
      <div className='filter flex justify-center items-center'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            placeholder='search...'
            data-testid='searchInput'
            className='rounded-l-lg h-10 border-2 px-4'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className='bg-[#FB923C] px-4 rounded-r-lg h-10 mt-1 text-white'
            onClick={() => {
              const filteredResList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredResList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
            {restaurant.info.avgRating > 4.3 ? (
              <PromotedResCard resData={restaurant.info} />
            ) : (
              <ResCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
