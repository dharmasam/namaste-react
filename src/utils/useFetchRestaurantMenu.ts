import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

interface RestaurantInfo {
    cards: any[];
    // Add more fields as needed based on your API response
}
const useFetchRestaurantMenu = (params) => {
    const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo | null>(null);
    useEffect(() => {
        fetchData();
    }, []);

    console.log("RestaurantMenu params" + params.resId);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + params.resId);
        if (data.ok) {
            const jsonData = await data.json();
            console.log("RestaurantMenu fetchData" + jsonData.data.cards);
            setRestaurantInfo(jsonData?.data);
        }
    }
    return restaurantInfo;
}

export default useFetchRestaurantMenu;