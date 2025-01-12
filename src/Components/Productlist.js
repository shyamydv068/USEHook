
import React from 'react'


const dummyProduct = ["Product1","product2","Product3"];
 function Productlist({name,city}) {
    
     
  return (
    <div>
        <h1>{this.state.name}</h1>
      <h3 style={{color:"black"}}>E Commerce Project</h3>
      <ul>
        {dummyProduct.map((item,index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Name of student is {name} and he is belong to {city}</h2>
    </div>
  )
}
export default Productlist;