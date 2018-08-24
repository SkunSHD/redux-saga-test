import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.css';
import { connect } from 'react-redux'
import {fetchBooksAction} from '../actions/books';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux Saga!</h1>
        </header>
        <ul className="App-books">
            { this.props.books.map((book, i) => (
                <li key={i}
                    className="books-item">
                    Author: {book.author}
                    <hr/>
                    <p>{book.description}</p>
                    <img src={book.book_image} alt={book.title + ' cover'}/>
                </li>
            ))}
        </ul>
          <button onClick={this.props.fetchData}>Fetch book</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
   return {
       books: state.books
   }
}
const mapDispatchToProps = dispatch => ({
    fetchData: ()=> {
        dispatch(fetchBooksAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
