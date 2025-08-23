import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FETCH_RESTAURANTS_API_URL } from "../utils/constants";

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
    const data = await fetch(FETCH_RESTAURANTS_API_URL);
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
      <div style={{ display: "flex", alignItems: "center", padding: "10px", justifyContent: "center" }}>
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
          return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>;
        })}
      </div>
    </div>
  );
};