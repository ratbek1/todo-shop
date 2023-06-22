import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useAppSelector(s => s.ToDoSlice)
    return (
        <div className="container flex flex-wrap gap-7 py-20">
            {
                favorite.map(el => (
                    <ProductCard el={el}/>
                ))
            }
        </div>
    );
};

export default Favorite;