import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Results from "../components/Results/Results";
import BookCardSearched from "../components/BookCard/BookCardSearched";
import API from "../utils/API";

const SearchPage = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])


    const handleInputChange = event => {
        setSearch(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
      

        API.getBook(search)
            .then(res => {
                console.log(res.data.items);

                const bookFields = res.data.items.map(item => {
                    let thumbnail = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : "";

                    return {
                        id: item.id,
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        image: thumbnail,
                        link: item.volumeInfo.infoLink
                    }
                })

                console.log(bookFields);

                setResults(bookFields)
            })

            setSearch("")
    }

    // Makes the API call to save a book to our db
    const saveBook = async (event) => {
        event.preventDefault();

        let newBook = {
            apiId: event.target.dataset.id,
            title: event.target.dataset.title,
            authors: event.target.dataset.authors,
            description: event.target.dataset.description,
            image: event.target.dataset.image,
            link: event.target.dataset.link
        }

        console.log(newBook)

        const bookList = await getSavedBooks();

        // Checks to see if book is already saved and alerts the user if so
        console.log(`Book count: ${bookList.length}`)
        for (let i = 0; i < bookList.length; i++) {
            console.log(bookList[i].apiId)
            if (bookList[i].apiId === newBook.apiId) {
                alert("Book is already saved!")
                return;
            }
        }

        API.saveBook(newBook)
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err));;
    }

    const getSavedBooks = async () => {
        try {
            const res = await API.getBooks()
            return res.data;
        } catch (err) {
            console.log(err);
            return;
        }
    };

    return (
        <>
            <SearchBar
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                searchInput={search}
            />

            {results.length ? (
                <Results>
                    {results.map((item) => {
                       
                        let authors = (item.authors) ? item.authors.join(", ") : "";

                        return <BookCardSearched
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            authors={authors}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            saveBook={saveBook}
                        />
                    }
                    )}
                </Results>
            ) : (
                   <p></p>
                )}
        </>
    )
}

export default SearchPage;