import React from "react";
import NavBar from "../NavBar/NavBar";
import { Container } from 'reactstrap';
import "./Header.css";

const Header = () => {
    return (
        <header>
            
            <NavBar />

            <Container fluid={true}> 
            <div className="banner">
                <div className="row">
                    <div className="col-4">
                    <img src="https://openbookphilly.com/wp-content/uploads/2016/11/bookstack.png" />
                    </div>
                <section className="col-8 headText">
                    <h1>GOOGLE BOOK SEARCH</h1>
                    <h5>Make searches for books you like and save them in your database!</h5>
                </section>
                </div>
                </div>
            </Container>

        </header>
    )
}

export default Header;