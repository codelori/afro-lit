import React, { Component } from 'react'
import './Home.css'
import Header from '../Header/Header'
import FilterBooks from '../FilterBooks/FilterBooks'
import BookDetails from '../BookDetails/BookDetails'

const googleBooksKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      books: null,
      searchTerm: 'elephant'
    }
    this.retrieveBooks = this.retrieveBooks.bind(this)
  }
  componentDidMount(){
    this.retrieveBooks()
  }
  retrieveBooks(){
    let Url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=books&key=${googleBooksKey}`
    fetch(Url)
      .then(response=>response.json())
      .then(data =>{
        console.log(data.items);
        this.setState({
          books: data.items
        })
      })
  }
  render(){
    return(
      <div className="component-container">
        <Header />
        <main>
          <FilterBooks />
          <BookDetails books={this.state.books}/>
        </main>
      </div>
    )
  }
}

export default Home