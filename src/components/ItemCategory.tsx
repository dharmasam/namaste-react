import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = (props) => {
    const [showItems, setShowItems] = useState(false);
    console.log(props);
    const { title, itemCards, categories } = props.data;
    const handnleClick = () => {
        setShowItems(!showItems);
    }
    console.log(title);
    return (
        <div className="item-category">
            <div className="category-title" onClick={handnleClick}>
                <div>{title}</div>
                <span>🔽</span>
            </div>
            {showItems && <div className="item-list">
                <ItemList data={{ title, itemCards, categories }} />
            </div>}
        </div>
    )
}
export default ItemCategory;