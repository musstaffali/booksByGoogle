import React from "react";

const SavedBooks = props => {
    return (
        <section className="shadow-sm savedBooks">
            <h2>Saved Books</h2>
            {props.children} 
        </section>
    )
}

export default SavedBooks;