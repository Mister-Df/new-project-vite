import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, priceCart } from './products/cart';
import { TiShoppingCart } from "react-icons/ti";

export default function ModalContent() {
  const carts = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(carts);



  return (
    <div  className="fixed bg-lime-50 top-18 sm:w-full w-xs vh-100">
      {/* <div>I'm a modal dialog</div> */}
      {/* <button onClick={onClose} className='bg-success'>Close</button> */}
      <div onClick={(e) => e.stopPropagation()} className='bg-dark h-20'>
        <div className='famili pt-3 position-relative justify-between items-center mx-5 flex text-amber-400 text-3xl'>
          <span className=''>TOTAL:</span>
          <span className=''>{carts.itemCart.reduce((acc, add) => acc + add.price * add.quantity, 0).toFixed(2)}$ </span>
        </div>
      </div>
      <ul className='flex p-0 container-fluid flex-column gap-3'>
        <div className='container-fluid p-0 m-0 bg-secondary'>
          <div className='flex justify-content-between p-1 mt-1 align-items-center container'>
            <p>Produits</p>
            <p>Quantité</p>
            <p>Prix</p>
            <p>Supprimer de la liste</p>
          </div>
        </div>
        {carts.itemCart.length > 0 ? 
        <div className='flex flex-column gap-3 container-fluid'>
          {carts.itemCart && carts.itemCart.map(state => (
            <li className=' flex justify-content-between mx-2 align-items-center gap-3 ' key={state.id}>
              <img className='w-20  border border-warning' src={`/${state.img}.png`} alt="" />
              <p className='text-left ml-0'>{state.title}</p>
              {/* <select 
              value={state.quantity}
              onChange={(e) => dispatch(priceCart({value: e.target.value, id: state.id}))}
              className='col-2  bg-warning rounded h-8 container' name="quantity" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                </select> */}
              <input type="number"
              value={state.quantity}
              onChange={(e) => dispatch(priceCart({value: e.target.value, id: state.id}))}
              className='h-8 rounded bg-warning container col-2' min={'1'} max={'10'} />
              <p className='col-2 '>{state.price}$</p>
              <button 
              onClick={() => dispatch(deleteCart(state.id))}
              className='bg-dark text-light h-8 p-1 px-2 rounded'>Supprimer</button>
            </li>
          ))} 
        </div>
        : 
        <TiShoppingCart className='text-[30rem] mx-auto h-100  opacity-[.1]'/>
      }
        </ul>
        </div>
  );
}
