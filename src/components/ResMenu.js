import { useState } from "react";
import { MenuShimmer } from "./shimmer/DynamicShimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from './RestaurantCategory';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <MenuShimmer />;

  const {
    name,
    cuisines,
    sla,
    cloudinaryImageId,
    avgRating,
    costForTwo,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  // Find the card that contains the categories we need
  const categoriesCard = resInfo?.cards?.find(card =>
    card.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  // Extract the categories from the found card
  const categories = categoriesCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (!categories || categories.length === 0) {
    console.warn("No categories found or categories are undefined.");
    return null; 
  }

  return (
    <div className="menuItems text-center">
      <div>
        <div className="flex flex-col gap-1 bg-black items-start w-full sm:flex-row sm:items-center sm:gap-2 sm:border-2 border-solid sm:rounded-md p-2 sm:w-6/12 sm:mx-auto my-4">
          <img
            className="restaurant-img rounded-md mt-4 mx-2 sm:m-2 sm:h-[130px] w-[200px]"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt="Restaurant"
            loading="lazy"
          />
          <div className="text-start text-white mx-2">
            <h2 className="font-bold">{name}</h2>
            <p>{cuisines?.join(", ")}</p>
            <div className="flex items-center justify-between gap-2 text-sm font-bold">
              <p className="bg-green-600 text-white p-1 rounded-md">{avgRating} ✰</p>
              <h4>•</h4>
              <p className="">{sla?.deliveryTime || 5} MINs</p>
              <h4>•</h4>
              <p className="">{costForTwo / 1000}$</p>
            </div>
          </div>
        </div>

        {categories.map((cat, index) => (
          <RestaurantCategory
            category={cat?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
