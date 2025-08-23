import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

type Restaurant = {
  info: {
    id: string;
    name: string;
    avgRating: number;
  };
}

export const MainContent = () => {
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("MainContent Rendered");
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    if (data.ok) {
      const jsonData = await data.json();
      const initRestaurantList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(initRestaurantList);
      setFilteredRestaurantList(initRestaurantList);
    }
  }

  const findTopRestaurant = () => {
    const filteredList = restaurantList.filter(
      restaurant => restaurant.info.avgRating >= 4.5
    );
    setFilteredRestaurantList(filteredList);
  }

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="main">
      <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <input type="text" className="search-box" value={searchText} onChange={(event) => {
          setSearchText(event.target.value);
        }} />

        <button className="search-btn" onClick={() => {
          const filteredList = restaurantList.filter(restaurant =>
            restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurantList(filteredList);
        }}>Search</button>

        <div className="filter-container">
          <button className="filter-button" onClick={() => {
            findTopRestaurant();
          }}>Top Rated Restaurants</button>

        </div>
        <div className="reset-container">
          <button className="reset-button" onClick={() => {
            setFilteredRestaurantList(restaurantList);
          }}>Reset</button>
        </div>
      </div>

      <div className="main-content">
        {filteredRestaurantList.map((restaurant: Restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};