import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import BookCardSaved from "../components/BookCard/BookCardSaved";

const SavedPage = () => {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        loadBooks();
    }, [])


    const loadBooks = () => {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data.reverse())
            )
            .catch(err => console.log(err));
    };


    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <>
            {savedBooks.length ? (
                <SavedBooks>
                    {savedBooks.map((item) =>
                        <BookCardSaved
                            id={item._id}
                            key={item._id}
                            title={item.title}
                            authors={item.authors}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            deleteBook={deleteBook}
                        />
                    )}
                </SavedBooks>
            ) : (
                    <p></p>
                )}
        </>
    )
}

export default SavedPage;