import React from 'react'
import {useEffect,useState} from 'react'
import {useParams,useNavigate, Link} from 'react-router-dom'
import NotesForm from '../components/NotesForm'
function BookDetails({favorites,addMoreToFavorite,item}) {
    let params = useParams()
    let navigate = useNavigate()

    let[ bookdetails, setBookdetails] = useState({})
    useEffect(()=>{
        // const book = favorites.filter((b) => params.id === b.item)
        // if(book.length){
        //     setBookdetails(book[0])
        // } else{
        //     navigate('/')
        // }
    }, [favorites])

  return (
    <div>
        <h2>BookDetails</h2>
        <h3>{bookdetails.title}</h3>
      <img src={bookdetails.imgUrl} alt={bookdetails.title}/>
        <p>Author:{bookdetails.author}</p>
        <p>Rating:{bookdetails.rating}</p>
        <br /><br />
        {
            bookdetails.NotesForm 
            ?
            <div>
                <h4>Thoughts:</h4>
                <p>Personal Ratings:{bookdetails.rating}</p>
                <p> Notes:{bookdetails.notes}</p>
                <p></p>
            </div>
            :


        <NotesForm
        addMoreToFavorites={addMoreToFavorite}
        itemId={bookdetails.itemId}
        />
}

    </div>
  )
}

export default BookDetails