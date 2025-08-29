import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import ItemCategory from "./ItemCategory";
import RestaurantHeader from "./RestaurantHeader";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const restaurantInfo = useFetchRestaurantMenu(params);
    const [showIndex, setShowIndex] = useState(0);
    if (restaurantInfo === null) {
        return <Shimmer />
    }
    // const menutItems = restaurantInfo && restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const categories = restaurantInfo && restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category: any) => category.card?.card?.["@type"].includes("ItemCategory") || category.card?.card?.["@type"].includes("NestedItemCategory"));
    return (
        <div className="menu-container">
            <RestaurantHeader props={restaurantInfo?.cards[2]?.card?.card?.info} />
            <div className="menu">
                {categories &&
                    categories?.map((category: any, index) => (
                        <ItemCategory
                            key={category.card.card.title}
                            data={category?.card?.card}
                            showItems={
                                showIndex === index ? true : false
                            }
                            setShowIndex={() => setShowIndex(index)}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RestaurantMenu;