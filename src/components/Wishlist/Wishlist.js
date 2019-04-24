import React, { Component } from 'react'
import './Wishlist.css';

class Wishlist extends Component{

  mapBooks(){
    const { removeWishlist } = this.props
    const favoriteBooks = JSON.parse(localStorage.getItem('book'))
    // console.log('wishlist:', favoriteBooks)
   
    let books = favoriteBooks.map((book, index) => {
      console.log(book.volumeInfo.title)
      let srcLink;
      {book.volumeInfo.imageLinks ? srcLink = book.volumeInfo.imageLinks.thumbnail : srcLink = 'https://static.thenounproject.com/png/340719-200.png' }
      return  <div key={book.etag} className='book-details-container'>
                <img className ="book-cover" src={srcLink} alt="book cover"/>
                <div className='book-text-container'> 
                  <h2>{book.volumeInfo.title}</h2>
                  <h4>{book.volumeInfo.authors}</h4>
                  <h4>Description:</h4>
                  <p className='description'>{book.volumeInfo.description}</p>
                </div>
                <button type="button" className="remove-from-favorites" onClick={() => removeWishlist(book[index])}>- Remove</button>
              </div>
    })

     return books;

  }
  render(){
    return(
      <div>
        {this.props.wishlistBooks? this.mapBooks() : <h1>Add some books to your wishlist!</h1>}
        
      </div> 
    )
  }
}

export default Wishlist