import React from 'react'
const Pagination = ({postPerpage, totalPosts, paginate}) => {
    const pageNumber =[];
    for(let i=1; i<= Math.ceil(totalPosts/ postPerpage); i++){
        pageNumber.push(i);
    }
    return (
        <nav className="display-block">
            <ul className="pagination d-block">
                {pageNumber.map(ind => (
                    <button key={ind} style={{width:"35px",height:"30px"}} className="page-item">
                        <a href="!#" onClick={()=> paginate(ind)}>
                            {ind}
                        </a>
                    </button>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
