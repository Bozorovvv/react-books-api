import React from 'react'
import { useState } from 'react'
import Loader from '../Loader'
import Search from '../Search'
import Books from './Books'

function Home() {
  const [books, setBooks] = useState([])
  const [loader, setLoader] = useState(false)

  function getBooks(str) {
    setLoader(true)
    setTimeout(() => {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${str}&key=AIzaSyCNNRt9Cu3JnhJlOz9eOUr6zVcY9ui6FIw`
      )
        .then((data) => data.json())
        .then((data) => setBooks(data.items))
      setLoader(false)
    }, 2000)
  }

  return (
    <>
      <div className="app container">
        <h2 className="center-align">Find your favourite book</h2>
        <Search getBooks={getBooks} />
        {loader ? <Loader /> : <Books books={books}/>}
      </div>
    </>
  )
}

export default Home
