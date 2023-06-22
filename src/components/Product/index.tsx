import React, {FormEvent, useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {addBasket, addFavorite, addTodo, delTodo} from "../../store/Reducers/ToDoSlice";
import {AiFillHeart} from "react-icons/ai";
import ProductCard from "./ProductCard";

const Product = () => {
    const dispatch = useAppDispatch()
    const {todo, basket} = useAppSelector(s => s.ToDoSlice)
    const [product, setProduct] = useState({
        id: 0,
        title: "",
        price: "",
        image: "",
        count: 1
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product, [e.target.name]: e.target.value
        })
    }
    console.log(basket)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newTask = {
            id: Math.round(Math.random() * 1000),
            title: product.title,
            price: product.price,
            image: product.image,
            count: product.count
        }
        dispatch(addTodo(newTask))
        product.image = ""
        product.title = ""
        product.price = ""
        product.count = 1
    }
    return (
        <div className="bg-black">
            <div>
                <h1 className="text-white text-center text-2xl">Create Card</h1>
                <form onSubmit={handleSubmit} className="flex items-center flex-col pt-3">
                    <div className="relative w-[500px]">
                        <input onChange={handleChange} name="image" value={product.image} type="text" id="voice-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <div className="relative w-[500px] py-4">
                        <input onChange={handleChange} name="title" value={product.title} type="text" id="voice-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <div className="relative w-[500px]">
                        <input onChange={handleChange} name="price" value={product.price} type="text" id="voice-search"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required/>
                    </div>
                    <button
                        className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white  rounded-lg   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 mt-3">
                        Create
                    </button>
                </form>
            </div>
            <div className="container flex flex-wrap gap-7 py-20">
                {
                    todo.map(el => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;