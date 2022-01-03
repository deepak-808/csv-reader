import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    <h2>Loading...</h2>;
  }
  return (
    <div>
      {posts.length > 0 ? (
        <>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Beds</th>
                <th scope="col">Baths</th>
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
