import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory: any = (props) => {
    const { title, itemCards, categories } = props.data;

    return (
        <div className="item-category">
            <div className="category-title" onClick={props.setShowIndex}>
                <div>{title}</div>
                <button
                    type="button"
                    className="dropdown-btn"
                    aria-label={props.showItems ? "Collapse" : "Expand"}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        marginLeft: "8px",
                        transition: "transform 0.2s",
                        transform: props.showItems ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                >
                ▼
                </button>
            </div>
            {props.showItems && <div className="item-list">
                <ItemList data={{ title, itemCards, categories }} />
            </div>}
        </div>
    )
}
export default ItemCategory;