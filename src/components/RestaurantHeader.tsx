const RestaurantHeader = (props) => {
    const { name, avgRating, costForTwoMessage, totalRatings, cuisines } = props.props;
    return (
        <div className="restaurant-header">
            <div className="res-header-name">{name}</div>
            <div>
                <span className="res-rating" style={{ fontWeight: "bold" }}>{"⭐" + avgRating}</span>
                <span className="res-totalRatings" style={{ fontWeight: "bold" }}> ({totalRatings} Ratings) </span>
                <span style={{ color: "grey", fontWeight: "bold" }} >{" • "}</span>
                <span className="res-cost" style={{ fontWeight: "bold" }}>{costForTwoMessage}</span>
            </div>
            <div className="res-cuisines" style={{ fontWeight: "bold" }}>{cuisines.join(", ")}</div>
        </div>
    )
}

export default RestaurantHeader;