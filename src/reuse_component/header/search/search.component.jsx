import React from 'react';
import './search.styles.scss';
import {ReactComponent as SearchLogo} from '../../../asset/search.svg';


const Search = () => {
    return <div className="col-md-7 col-7 search">
            <div className='form-search'>
                 <input type='text'  name='search' className='input-search' placeholder='Search for food'  autoComplete="off"/>
                 <SearchLogo className='icon-search'/>
            </div>
    </div>
}

export default Search;