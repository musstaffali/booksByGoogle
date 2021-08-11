import React from "react";

const Results = props => {
    return (
        <section className="results">
            <h2>Results</h2> 
            {props.children}
        </section>
    )
}

export default Results;