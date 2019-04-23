import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import { Route, Link } from "react-router-dom";
import Header from './components/Header/Header'
import Bestsellers from './components/Bestsellers/Bestsellers'
import Wishlist from './components/Wishlist/Wishlist'

const googleBooksKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY2;

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books: null,
      searchTerm: 'biography',
      genre: '',
      favoritedBooks: []
    }
     this.retrieveBooks = this.retrieveBooks.bind(this)
     this.handleOnChange = this.handleOnChange.bind(this)
     this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  componentDidMount(){
    this.retrieveBooks()
  }
  retrieveBooks(){
    let Url = `https://www.googleapis.com/books/v1/volumes?q=afro-${this.state.searchTerm}&printType=books&key=${googleBooksKey}`
    fetch(Url)
      .then(response=>response.json())
      .then(data =>{
        console.log(data.items);
        this.setState({
          books: data.items
        })
      })
  }

  handleOnChange(evt){
    evt.preventDefault();
    console.log(evt.target.value)
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
        console.log(data.items);
        this.setState({
          books: data.items
        })
      })
  }

  render() {
    return (
      <div className='App'>
      <Header />
      <main>
        <Route exact path="/" render={()=><Home
          searchBook={this.handleOnChange} 
          getNewBooks={this.handleOnSubmit} 
          books={this.state.books}
          favoritedBooks={this.state.favoritedBooks}
        />}/>
        <Route path="/bestsellers" render={()=><Bestsellers />}/>
        <Route path="/wishlist" render={()=><Wishlist/>}/>
      </main>
    </div>
    );
  }
}

export default App;
