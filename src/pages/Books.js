import React from 'react'
import { Link } from 'react-router-dom'
import { Animate } from 'react-simple-animate'

function Books({ books }) {
  return (
    <div>
      <div className="cards">
        {books.map((el) => (
          <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  class="activator"
                  src={el.volumeInfo.imageLinks.thumbnail}
                  alt={el.volumeInfo}
                />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  {el.volumeInfo.title}
                </span>
                <p>Author: {el.volumeInfo.authors}</p>
                <p>Date: {el.volumeInfo.publishedDate}</p>
                <Link
                  style={{ marginTop: '40px' }}
                  className="btn"
                  to={{
                    pathname: `/book/${el.id}`,
                    state: { book: el.volumeInfo },
                  }}
                >
                  Read
                </Link>
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  )
}

export default Books
