import React from 'react';


const SearchFilter = (props) => {

    

    return (
                <div class="level-item has-text-centered">
                    <div class="container" >
                        <p class="control has-icons-left">
                            <input onChange={search => {props.setSearchCountry(search.target.value)}} class="input is-danger is-rounded is-focused" type="text" name="search" placeholder="Search Country"></input>
                            <span class="icon is-small is-left">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                        </p>
                    </div>
                </div>
    );

}

export default SearchFilter;