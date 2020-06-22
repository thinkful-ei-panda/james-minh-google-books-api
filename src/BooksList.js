import React from 'react';

function BooksList() {
    console.log('BooksList component is working');

    return (
        <section>
            <header>
                <h2>BooksList</h2>
            </header>
            
            <ul>
                <li>Book</li>
                <li>Book</li>
                <li>Book</li>
            </ul>
        </section>
    )

}

export default BooksList;