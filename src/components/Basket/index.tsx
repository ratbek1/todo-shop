import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import BasketTable from "./BasketTable";

const Basket = () => {
    const {basket} = useAppSelector(s => s.ToDoSlice)
    const total = basket.reduce((acc, el) => {
        return acc + el.count * el.price
    }, 0)
    return (
            <div className="relative overflow-x-auto flex justify-center py-2">
                {total === 0 ? <h1 className="text-red-600 text-2xl">NO LIST!!</h1> :
                <table className="w-4/5 text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        basket.map(el => (
                            <BasketTable el={el}/>
                        ))
                    }
                    </tbody>
                    {total === 0 ? null : <h1 className="text-2xl text-black">$ {total}</h1>}
                </table>
                }
            </div>
    );
};

export default Basket;