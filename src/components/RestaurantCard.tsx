import { RestaurantCardImageUrl } from "../utils/constants";

export const RestaurantCard = (resData) => {
  const { name, costForTwo, cuisines, cloudinaryImageId } = resData.resData.info;
  return (
    <div className="restaurant-card">
      <img
        style={{ width: "100%", height: "250px" }}
        src={`${RestaurantCardImageUrl}${cloudinaryImageId}`}
        alt="Restaurant"
      />
      <h4>{name}</h4>
      <span>⭐ {resData.resData.info.avgRating}</span>
      <span> {resData.resData.info.sla.deliveryTime} mins</span>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};