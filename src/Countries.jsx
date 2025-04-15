import React, { useEffect } from 'react'

function Countries() {

    var [countries,setCountries]=React.useState([]);

    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{return res.json()})
        .then((data)=>{setCountries([...data])})
    },[])
    
    return (
        <div className='border border-info border-3 m-3 p-2'>
            <h2>Countries</h2>
            {
                countries.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            }
        </div>
    )

}

export default Countries