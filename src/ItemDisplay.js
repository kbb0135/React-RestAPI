import React, { useEffect, useState } from 'react'

export default function ItemDisplay() {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch("http://localhost/api/item", {
            method: 'POST'
        })
            .then(
                async (response) => {
                    if (response.ok) {
                        return await response.json
                    }
                    else {
                        console.log('Error fetching data')
                    }
                }
            )
            .then(
                async item => {
                    await setItem(item)
                    console.log(item)
                }
            )
            .catch(error => {
                console.log(error)
            }
            )
       
    },[])
    console.log(item)



    return (
        <div>ItemDisplay</div>
    )
}
