import React from 'react'


function FavoriteBook({favorite,removeFromFavorites}) {
  console.log(favorite)
  return (
    <div className='favorite'>
      
      {favorite.map((item)=>{
        return(
        <div key={item.id}>
          {item.title}
          <img src={item.imgUrl} alt={item.title}></img>

        </div>
        )
      })}
    </div>
    
  )
}

export default FavoriteBook