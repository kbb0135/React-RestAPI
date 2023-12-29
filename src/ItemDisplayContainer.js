import React from 'react'

const ItemDisplayContainer = ({item}) => {
    return(
        <div>
            <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <h4>{item.price}</h4>
            <h2>{item.category}</h2>
                <p>{item.description}</p>

                
            </div>
        </div>
    )
}
export default ItemDisplayContainer;    
