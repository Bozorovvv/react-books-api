import React, { useState } from 'react'

function Search({ getBooks }) {
  const [search, setSearch] = useState('')

  function handleKey(e) {
    if (e.key === 'Enter') {
      getBooks(search)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
                type="text"
                placeholder="search..."
                className="autocomplete"
              />

              <button className="btn" onClick={() => getBooks(search)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
