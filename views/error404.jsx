const React = require('react')
const Default = require('./layouts/Default')

function error404 () {
    return (
      <Default>
        <h2>Oops, you've reached a page that doesn't exist!</h2>
        <button><a href="/breads">Back to index page</a></button>
        
      </Default>
    )
}

module.exports = error404