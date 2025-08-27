import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantHeader from "./RestaurantHeader";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
    const params = useParams();
    const restaurantInfo = useFetchRestaurantMenu(params);
    if (restaurantInfo === null) {
        return <Shimmer />
    }
    const menutItems = restaurantInfo && restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = restaurantInfo && restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category: any) => category.card?.card?.["@type"].includes("ItemCategory") || category.card?.card?.["@type"].includes("NestedItemCategory"));
    return (
        <div className="menu-container">
            <RestaurantHeader props={restaurantInfo?.cards[2]?.card?.card?.info} />
            <div className="menu">
                {
                    categories.map((category: any) => (
                        <ItemCategory key={category.card.card.title} data={category.card.card} />
                    ))
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;