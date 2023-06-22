import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket, IFavorite, IToDo} from "../../types/IToDo";
import favorite from "../../components/Favorite";
const local1: any = localStorage.getItem("product")
// const localFav: any = localStorage.getItem("favorite")
const localBas: any = localStorage.getItem("basket")
interface ToDoState {
    todo: IToDo[],
    basket: IBasket[],
    favorite: IFavorite[]
}
const initialState: ToDoState = {
    todo: JSON.parse(local1) || [],
    basket: JSON.parse(localBas) || [],
    favorite:  []
}
export const ToDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<IToDo>){
            localStorage.setItem("product", JSON.stringify(state.todo = [...state.todo, {...action.payload}]))
        },
        delTodo(state, action: PayloadAction<IToDo>){
            localStorage.setItem("product", JSON.stringify(state.todo = state.todo.filter(el => el.id !== action.payload.id)))
        },
        addBasket(state, action: PayloadAction<IBasket>){
            let bas = state.basket.find(el => el.id === action.payload.id)
            localStorage.setItem("basket", JSON.stringify([...state.basket, {...action.payload}]))
            if (bas) {
              return {...state, basket: state.basket.map(el => el.id === action.payload.id ? {...el, count: el.count + 1}: el)}
            }else {
              return {...state, basket: [...state.basket, {...action.payload, count: 1}]}
            }
        },
        delBasket(state, action: PayloadAction<IBasket>){
           localStorage.setItem("basket", JSON.stringify(state.basket = state.basket.filter(el => el.id !== action.payload.id)))
        },
        decBasket(state, action: PayloadAction<IBasket>){
            return {...state, basket: state.basket.map(el => {
                if (el.id === action.payload.id && el.count > 1){
                    return {...el, count: el.count - 1}
                }else {
                    return el
                }
                })}
        },
        addFavorite(state, action: PayloadAction<IFavorite>){
            let fav = state.favorite.find(el => el.id === action.payload.id)
            if (fav){
                return {...state, favorite: [...state.favorite.filter(el => el.id !== action.payload.id)]}
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload}]}
            }
        },
    }
})
export default ToDoSlice.reducer
export const {addTodo, delTodo, addBasket, delBasket, decBasket, addFavorite} = ToDoSlice.actions