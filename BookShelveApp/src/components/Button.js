import React from 'react'
import { useState } from 'react'

function Button({item,addToFavorites}) {

    return (
        <div>

            <button onClick={() => addToFavorites(item)}>Add to Favorites</button>
        </div>
    )
}

export default Button