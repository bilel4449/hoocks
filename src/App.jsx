import { useState } from 'react'

import './App.css'
import { moviesData } from './data'
import MovieList from './Components/MovieList'
import AddNewMovie from './Components/AddNewMovie'
import Search from './Components/Search'

function App() {
const [list, setList] = useState(moviesData) 
// console.log(list)
const [searchText, setSearchText] = useState("")
const [rating, setRating] = useState(1)
const handleSearchText=(x)=>setSearchText(x)
const handleRating=(y)=>setRating(y)
// delete function
const handleDelete=(theId)=>setList(list.filter(el=>el.id!==theId))
const handleAdd=(newMovie)=>setList([...list,newMovie])
const handleEdit=(editedMovie)=>setList(list.map(el=>el.id===editedMovie.id?editedMovie:el))
 return (
    <>
    <Search  searchText={searchText} rating={rating} handleSearchText={handleSearchText }  handleRating={handleRating}/>
   <MovieList movies={list.filter(el=>el.name.toLowerCase().includes(searchText.toLowerCase())&&el.rating>=rating)} deleteFunction={handleDelete} handleEdit={handleEdit}  />
   <AddNewMovie handleAdd={handleAdd}  />
    </>
  )
}

export default App
