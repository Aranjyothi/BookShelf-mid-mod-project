import React from 'react'
import Button from './Button'
import {Link, useLocation } from 'react-router-dom'

function DisplayBooks({data,addToFavorites,removeFromFavorite,favorite,item}) {
  let location = useLocation()

  const alreadyFavorited = () => {
    let check = favorite?.find((i)=> i.id === item.id)
    if(check){
      return true
    } else{
      return false
    }
  }
  const loaded = () =>{
    if(location.pathname === "/favorite"){
      return(
        <div>
          <Link to={`/favorite/${item.id}`}>
          <img src={item.imgUrl} alt={item.title}/>
          </Link><br />
          <button onClick={() => removeFromFavorite(item)}>Remove from Favorite</button>

        </div>
      )
    } else{
      return(
        <div>
          <h1>{item.title}</h1>
          <img src={item.imgUrl} alt={item.title}/>
          <br />
          {
            alreadyFavorited()
              ?
              "Favorited"
            :
            <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
          }

        </div>
      )
    }
    
  }

console.log(data)
  return (
    <div className='container'>
<ul>
  {data?.Books?.map((item)=>{
  
    return(
      <li key={item.id}>
       <h1>{item.title} </h1>
        <img src={item.imgUrl} alt={item.title}/>
      <h3> Author:{item.author}</h3>

      <Button item={item} addToFavorites={addToFavorites}/><br></br>
      </li>
    )
  })}
</ul>
    </div>
  )
}

export default DisplayBooks