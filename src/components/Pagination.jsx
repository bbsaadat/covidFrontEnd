import React from 'react';




const Pagination = (props) => {

    const pageNumbers = [];

    //calculating number of page buttons
    for(let i = 0; i < Math.ceil(props.totalPosts/props.postsPerPage); i++){
        pageNumbers.push(i+1);
    }

    return (
        <div>
            <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
                <ul class="pagination-list">
                    {pageNumbers.map(number => (
                        <li>
                            <a onClick={() => props.paginate(number)}  className={props.currentPage === number ? "pagination-link is-current" : "pagination-link" } aria-label="Goto page 1" href="#">{number}</a>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>
    );

}


export default Pagination;