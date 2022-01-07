import React, { useState } from "react";
import SortUpIcon from "./UI/Icons/AsendingIcon";
import SortDnIcon from "./UI/Icons/DesendingIcon";

const Posts = ({ posts, sorting, loading }) => {
  const [showIcon, setShowIcon] = useState(true);
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div>
      {posts.length > 0 ? (
        <>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr className="ml-2">
                <th scope="col" onClick={() => sorting("street")}>
                  <div onClick={() => setShowIcon(!showIcon)}>
                    Street {showIcon ? <SortUpIcon /> : <SortDnIcon />}
                  </div>
                </th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Beds</th>
                <th scope="col">Baths</th>
                <th scope="col">Type</th>
                <th scope="col">Sale Date</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.street}</td>
                  <td>{post.city}</td>
                  <td>{post.state}</td>
                  <td>{post.beds}</td>
                  <td>{post.baths}</td>
                  <td>{post.type}</td>
                  <td>{post.sale_date}</td>
                  <td>{post.price}</td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

export default Posts;
