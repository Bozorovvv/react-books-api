import React from 'react'
import { useState } from 'react'
import { Link, Route } from 'react-router-dom'
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
        {loader ? (
          <Loader />
        ) : (
          books.map((el) => (
            <div className="cards">
              <div className="card-image">
                <img src={el.volumeInfo.imageLinks.thumbnail} alt="" />
              </div>
              <div className="card-content">
                <h4 className="card-title">{el.volumeInfo.title}</h4>
                <p>Author: {el.volumeInfo.authors}</p>
                <p>Date: {el.volumeInfo.publishedDate}</p>
                <div className="card-action">
                  <Link className="btn" to={`books/${el.id}`}>
                    Read more
                  </Link>
                  <div>
                    <Route path="/books/:id" component={<Books />} />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Home
