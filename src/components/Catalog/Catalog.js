import React from 'react';
import './Catalog.css';
import categories from './categories.json';

const Catalog = () => {
    return (
        <React.Fragment>
            <div className='maincontainer' id="catalog">
                {categories.map((el) =>
                    <div class='drinktype'>
                        <img src={el.imgUrl} alt={el.alt} id="image" Link={el.href} />
                        <p>{el.title}</p>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Catalog;