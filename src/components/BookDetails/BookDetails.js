import React, { Component } from 'react'
import './BookDetails.css';

class BookDetails extends Component{
  render(){
    const { books } = this.props
    console.log({books})
    return(
      <div className='book-details-container'>
        <img className ="book-cover" src="https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL.jpg" alt="book cover"/>
        <div className='book-text-container'> 
          <h2>Children of Blood and Bone</h2>
          <h4>Tomi Adeyemi</h4>
          <h4>Description:</h4>
          <p>Warren argues, quite bluntly, that “African American literature” has outlived its relevance as the dominant category for poetry, fiction, and plays written by African Americans. Contradicting an influential portion of the field, which regards this literature as an emanation of vernacular expression going back to slavery, and even to Africa, Warren asserts that African American literature was the body of literature and criticism written by black Americans within and against the strictures of Jim Crow America. In arguing against the continued relevance of the category of African American literature, Warren is certainly not claiming that racism has ceased to exist. </p>
        </div>
      </div>
    )
  }
}

export default BookDetails