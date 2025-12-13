import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import { getCartItem } from './products/cart';


export default function MenuCommand() {
  const products = useSelector(state => state.product)
  const inputValue = useParams()
  const dispatch = useDispatch()
  // console.log(products);


  return (
    <div className=' container-fluid mt-4 '>
      {/* <h4>Bonjour et bienvenue {inputValue.id} </h4> */}
      <ul className='flex justify-center gap-3 flex-wrap'>
        {/* public\data\inventory.json */}
        {products.item && products.item.map(prod => (
          <li className='card shadow-xl' style={{ width: '15rem' }} key={prod.id}>
            <img src={`/${prod.img}.png`} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <div className='flex justify-content-between items-center'>
                <p className="card-text mt-3">{prod.price}$</p>
                <button 
                onClick={() => dispatch(getCartItem(prod.id))}
                className="bg-amber-500 p-1 px-2 text-amber-50 rounded-2">Ajouter</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


