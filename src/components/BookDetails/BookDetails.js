import React, { Component } from 'react'
import './BookDetails.css';

class BookDetails extends Component{
  constructor(props){
    super(props);
    this.mapBooks = this.mapBooks.bind(this);
    this.defaultBook = this.defaultBook.bind(this)
  }

  mapBooks(){
    const {books , addToWishlist} =this.props

    let titles = books.map(book =>{
      let srcLink;
      {book.volumeInfo.imageLinks ? srcLink = book.volumeInfo.imageLinks.thumbnail : srcLink = 'https://static.thenounproject.com/png/340719-200.png' }
      return  <div key={book.etag} className='book-details-container'>
                <img className ="book-cover" src={srcLink} alt="book cover"/>
                <div className='book-text-container'>
                  <div className='button-row'> 
                    <h2>{book.volumeInfo.title}</h2>
                    <button type="button" className="add-to-favorites" onClick={() => addToWishlist(book)}>+ Wishlist</button>
                  </div>
                  <h4>{book.volumeInfo.authors}</h4>
                  <h4>Description:</h4>
                  <p className='description'>{book.volumeInfo.description}</p>
                </div>
              </div>
    })

     return titles;

  }

  defaultBook(){
      return <div className='book-details-container'>
      <img className ="book-cover" src='https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg' alt="book cover"/>
      <div className='book-text-container'> 
        <h2>Children of Blood and Bone</h2>
        <h4>Tomi Adeyemi</h4>
        <h4>Description:</h4>
        <p>Tomi Adeyemi’s debut novel is the start of what promises to be an epic, addictive new series. The Children of Blood and Bone is influenced by Adeyemi’s West African heritage, and in it she bends religious deities (the Orïsha) and a diverse landscape into a refreshing new take on fantasy. The Children of Blood and Bone is told from multiple points of view, as Inan and Amari, children of the iron-fisted king, and Zélie and Tzain, siblings who have suffered greatly under the king’s regime, find themselves on a dark, magic-filled quest for power. Their journey is accompanied by violence and betrayal, but friendship and even star-crossed love also play a part. Enriched with themes that resonate in today’s social and political landscape, The Children of Blood and Bone takes on injustice, discrimination, and a struggle for change. The action and danger ramp up with each chapter, and I found myself racing through the final pages, holding my breath right up to the cliffhanger ending. -- Seira Wilson for the Amazon Book Review</p>
      </div>
    </div>

  }

  render(){ 
    return(
      <div>
        {this.props.books ? this.mapBooks() : this.defaultBook()}
      </div>
    )
  }
}

export default BookDetails