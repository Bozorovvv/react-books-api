import React from 'react'
import { Link } from 'react-router-dom'

class Book extends React.Component {
  render() {
    const book = this.props.location.state.book
    return (
      <div className="container">
        <div className="row">
          <h1>{book.title}</h1>
          <h5>{book.description}</h5>
          <span className="grey-text">author:</span>
          <p className="black-text">{book.authors}</p>
          <span className="grey-text">date:</span>
          <p className="black-text">{book.publishedDate}</p>
          <Link to="/" className="btn">
            Home page
          </Link>
        </div>
      </div>
    )
  }
}

export default Book
