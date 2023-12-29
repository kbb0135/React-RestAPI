import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import "./style.css"
import Header from './Header';
import { FaShoppingCart } from 'react-icons/fa';

export default function Menu() {

  const [itemData, setItemData] = useState([])
  useEffect(() => {

    fetch("http://localhost:7000/api/getData", {
      method: 'GET'
    }
    )
      .then(
        async response => {
          if (response.ok) {
            return await response.json();
          }
          else {
            console.log('Error fetching data');
          }
        }
      )
      .then(
        async data => {
          await setItemData(data);
          //console.log(data);
        }
      )
      .catch(error => {
        console.log(error)
      }
      )
  })



  return (
    <div>
      <div className="shopping-cart">
                    <FaShoppingCart />
                </div>
      <Header />
      <div className="menu-list">
        {/* <button onClick={()=>getData()}>Click to get Data</button> */}
        {itemData.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
