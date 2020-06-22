import React from 'react';

function FilterBar() {
    console.log('FilterBar component is working');

    return (
        <section>
            <label className="print-type-label" htmlFor="print-type">Print Type:</label>
            <select type="text" name="print-type" id="print-type">
                <option value="#">All</option>
                <option value="#">Option1</option>
                <option value="#">Option2</option>
            </select>
            
            <label className="book-type-label" htmlFor="book-type">Book Type:</label>
            <select type="text" name="book-type" id="book-type">
                <option value="#">No Filter</option>
                <option value="#">Option1</option>
                <option value="#">Option2</option>
            </select>
            
        </section>
    )

}


export default FilterBar;