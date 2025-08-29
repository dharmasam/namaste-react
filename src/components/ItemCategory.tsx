import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory: any = (props) => {
    const { title, itemCards, categories } = props.data;

    return (
        <div className="item-category">
            <div className="category-title" onClick={props.setShowIndex}>
                <div>{title}</div>
                <span>🔽</span>
            </div>
            {props.showItems && <div className="item-list">
                <ItemList data={{ title, itemCards, categories }} />
            </div>}
        </div>
    )
}
export default ItemCategory;