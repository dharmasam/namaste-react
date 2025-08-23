import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

interface RestaurantInfo {
    cards: any[];
    // Add more fields as needed based on your API response
}

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(null);
    useEffect(() => {
        fetchData();
    }, []);

    const params = useParams();
    console.log("RestaurantMenu params" + JSON.stringify(params));

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + params.resId);
        if (data.ok) {
            const jsonData = await data.json();
            console.log("RestaurantMenu fetchData" + jsonData.data.cards);
            setRestaurantInfo(jsonData?.data);
        }
    }
    if (restaurantInfo === null) {
        return <Shimmer />
    }
    const { name } = restaurantInfo?.cards[2]?.card?.card?.info;
    const menutItems = restaurantInfo && restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return (
        <div>
            <h1>Restaurant Menu Page</h1>
            <h2>{name}</h2>
            <h3>Menu Items:</h3>
            <ul>
                {menutItems && menutItems.map((item: any) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;