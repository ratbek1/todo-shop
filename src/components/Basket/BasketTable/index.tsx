import React from 'react';
import {addBasket, decBasket, delBasket} from "../../../store/Reducers/ToDoSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

const BasketTable = ({el}: any) => {
    const dispatch = useAppDispatch()
    return (
        <tr className="bg-white border-b dark:bg-black">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={el.image} width={150} alt="img"/>
            </th>
            <td className="px-6 py-4">
                {el.title}
            </td>
            <td className="px-6 py-4">
                <div className="flex">
                    <button onClick={() => dispatch(decBasket(el))}>-</button>
                    <p className="text-xl mx-2">{el.count}</p>
                    <button onClick={() => dispatch(addBasket(el))}>+</button>
                </div>
            </td>
            <td className="px-6 py-4">
               $ {el.price * el.count}
            </td>
            <td className="px-6 py-4">
                <button onClick={() => dispatch(delBasket(el))}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default BasketTable;