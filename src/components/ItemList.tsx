import { ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = (props) => {
    const { title, itemCards, categories } = props.data;
    return (
        <div className="item-list">
            {itemCards && itemCards.map((item) => (
                <div key={item.card.info.id} className="item">
                    <div className="item-info">
                        <h4>{item.card.info.name}</h4>
                        <p className="item-description">{item.card.info.description.substring(0, 150)}...</p>
                        <p>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                    </div>
                    <div>
                        <img className="item-image" src={`${ITEM_IMAGE_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
                    </div>
                    <button className="add-btn">ADD</button>

                </div>
            ))}
            <div className="sub-categories">
                {categories && categories.map((category) => (
                    <div key={category.title} className="sub-category">
                        <h4>{category.title}</h4>
                        {category.itemCards && category.itemCards.map((item) => (
                            <div key={item.card.info.id} className="item">
                                <div className="item-info">
                                    <h4>{item.card.info.name}</h4>
                                    <p className="item-description">{item.card.info.description.substring(0, 150)}...</p>
                                    <p>₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                                </div>
                                <div>
                                    <img className="item-image" src={`${ITEM_IMAGE_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
                                </div>
                                <button className="add-btn">ADD</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ItemList