import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import DATA from "../data/datapost.csv";
import Pagination from "./Pagination";
import Search from "./UI/Searchfield/Search";

const CsvFileReader = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(40);
  const [search, setSearch] = useState("");
  const [searchCol, setSearchCol] = useState(["street", "city", "beds"]);
  const [order, setorder] = useState("asc");

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
      reader.readAsDataURL(file);
    };
    fetchPosts();
  }, []);

  const pageVisited = currentPage * postsPerPage;
  const currentPosts = posts.slice(pageVisited, pageVisited + postsPerPage);

  const paginate = ({ selected }) => {
    setCurrentPage(selected);
  };
  const onSearch = (rows) => {
    return rows.filter((row) =>
      searchCol.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >
          -1
      )
    );
  };

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setorder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...posts].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPosts(sorted);
      setorder("asc");
    }
  };
  const columns = posts[0] && Object.keys(posts[0]);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        columns={columns}
        searchCol={searchCol}
        setSearchCol={setSearchCol}
      />
      <Posts
        sorting={sorting}
        posts={onSearch(currentPosts)}
        loading={loading}
      />
      <Pagination
        postPerpage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CsvFileReader;
