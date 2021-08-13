import React from "react";
import { Button, Form, Input } from 'reactstrap';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <section className="searchBar">

            <Form className="row searchGroup">
                <Input onChange={props.handleInputChange} type="text" name="booksearch" placeholder="Please enter a book title to search!" className="searchBox col-6" value={props.searchInput} />
               
                <Button onClick={props.handleFormSubmit} className="searchBtn searching">Search</Button>

            </Form>
        </section>
    )
}

export default SearchBar;