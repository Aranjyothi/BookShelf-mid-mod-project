import React from 'react'


function FavoriteBook({favorite,removeFromFavorites}) {
  console.log(favorite)
  return (
    <div className='favorite'>
      
      {favorite.map((item)=>{
        return(
        <div key={item.id}>
          removeFromFavorites={removeFromFavorites}
          {item.title} <br />
          <img src={item.imgUrl} alt={item.title}></img><br></br>
          Review:{item.review} <br /> Description:{item.description}

        </div>
        )
      })}
    </div>
    
  )
}

export default FavoriteBook