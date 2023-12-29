import React, { useState } from "react";
import "./style.css"
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
    const [data, setData] = useState([])
    const AddToCart = async () => {

        try {
            item.itemCount = data.length;
            setData(prevArray => [...prevArray, item])
            // console.log(item);

            fetch("http://localhost:7000/api/sendData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(async response => {
                    if (response.ok) {
                        console.log("here")
                        return await response.json();
                    }
                    // throw new Error("Network error123")
                })
                .then(async data => {
                    console.log("Server Response: ", await data)
                })
                .catch((error) => console.log(error))
        }
        catch (error) {
            console.log(error)
        }


    }
    const getItem = async () => {
        try {
            fetch("http://localhost:7000/api/item", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            })
                .then(async response => {
                    if (response.ok) {
                        return await response.json();
                    }
                    throw new Error('HTTP-Error: ' + response.status);
                })
                .then(async data => {
                    console.log("Server Response: ", await data)
                })
                .catch(e => console.log(e));
        }
        catch (error) {

        }

    }

    const sendData = async () => {
        const postData = { message: 'Hello' };

        fetch('http://localhost:7000/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then(async response => {
                if (response.ok) {
                    return await response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(async data => {
                console.log('Server Response:', await data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }






    return (
        <div>
            <button onClick={async() => getItem()}>Get Item</button>
            <div className="menu-box">
                <img src={item.image} alt="txt" className="menu-img" />
                <Link to={`/products/${item.title}/${item.id}`}>
                    <div className="menu-container-detail">
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                </Link>
                <div className="menu-cart-button">
                    <button className="cart-button" onClick={() => AddToCart()}>Add to Cart</button>
                </div>
            </div>
            <button onClick={() => sendData()}>Click Here</button>
        </div>
    )
}
export default MenuItem;