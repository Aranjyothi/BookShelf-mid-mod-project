import React from 'react'
import Button from './Button'

function DisplayBooks({data,addToFavorites}) {
 
console.log(data)
  return (
    <div className='container'>
<ul>
  {data?.Books?.map((item)=>{
  
    return(
      <li key={item.id}>
        {item.title} <img src={item.imgUrl} alt={item.title}/>
      <Button item={item} addToFavorites={addToFavorites}/>
      </li>
    )
  })}
</ul>
    </div>
  )
}

export default DisplayBooks