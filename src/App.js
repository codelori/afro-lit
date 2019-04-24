import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import { Route } from "react-router-dom";
import Header from './components/Header/Header'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Wishlist from './components/Wishlist/Wishlist'

const googleBooksKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY2;


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books: null,
      searchTerm: 'fantasy',
      genreList:[
        'Art', 'Biography', 'Fantasy', 'Fiction', 'Futurism','History', 'Manga', 'Romance', 'Young Adult'
      ],
      wishlistBooks: []
    }
     this.retrieveBooks = this.retrieveBooks.bind(this)
     this.handleOnChange = this.handleOnChange.bind(this)
     this.handleOnSubmit = this.handleOnSubmit.bind(this)
     this.selectGenre = this.selectGenre.bind(this)
     this.addToWishlist = this.addToWishlist.bind(this)
     this.removeWishlist = this.removeWishlist.bind(this)
  }

  componentDidMount(){
    this.retrieveBooks()
  }
  retrieveBooks(){
    let Url = `https://www.googleapis.com/books/v1/volumes?q=afro-${this.state.searchTerm}&printType=books&key=${googleBooksKey}`
    fetch(Url)
      .then(response=>response.json())
      .then(data =>{
        this.setState({
          books: data.items
        })
      })
  }
  handleOnChange(evt){
    evt.preventDefault();
    this.setState({
      searchTerm: evt.target.value
    })
  }
  handleOnSubmit(evt){
    evt.preventDefault();
    let Url = `https://www.googleapis.com/books/v1/volumes?q=afro-${this.state.searchTerm}&printType=books&key=${googleBooksKey}`
    fetch(Url)
      .then(response=>response.json())
      .then(data =>{
        this.setState({
          books: data.items
        })
      })
  }
  selectGenre(evt){
    let Url = `https://www.googleapis.com/books/v1/volumes?q=afro-${evt.target.value}&printType=books&key=${googleBooksKey}`
    fetch(Url)
      .then(response=>response.json())
      .then(data =>{
        this.setState({
          books: data.items
        })
      })

  }
  addToWishlist(book){
    this.state.wishlistBooks.push(book)
    localStorage.setItem('book', JSON.stringify(this.state.wishlistBooks))
  //  localStorage.removeItem('book')
  }

  removeWishlist(index){
    this.state.wishlistBooks.splice(index, 1) 
    localStorage.setItem('book', JSON.stringify(this.state.wishlistBooks))
  }

  render() {
    return (
      <div className='App'>
      <Header />
      <main className='main-container'>
        <Route exact path="/" render={()=><Home
          searchBook={this.handleOnChange} 
          getNewBooks={this.handleOnSubmit} 
          books={this.state.books}
          selectGenre={this.selectGenre}
          genreList={this.state.genreList}
          favoritedBooks={this.state.favoritedBooks}
          addToWishlist={this.addToWishlist}
        />}/>
        <Route path="/wishlist" render={()=><Wishlist wishlistBooks={this.state.wishlistBooks} removeWishlist={this.removeWishlist}/>}/>
      </main>
    </div>
    );
  }
}

export default App;
