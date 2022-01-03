import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import DATA from "../data/datapost.csv";
import Pagination from "./Pagination";

const CsvFileReader = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setPosts(newArray);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const reader = new FileReader();
      setloading(true);
      const file = (reader.onload = await fetch(DATA)
        .then((response) => response.text())
        .then((text) => {
          processCSV(text);
          setloading(false);
        }));

      reader.readAsText(file);
    };
    fetchPosts();
  }, []);

  const indexofLastPost =currentPage * postsPerPage;
  const indexofFirstPost =indexofLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost,indexofLastPost);
  
  const paginate = (page) => {
      setCurrentPage(page)
  };

  return (
    <div className="container">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postPerpage={postsPerPage} totalPosts={posts.length}
      paginate={paginate}/>
    </div>
  );
};

export default CsvFileReader;