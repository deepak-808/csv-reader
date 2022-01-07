import React from "react";

const Search = ({ columns, search, setSearch, searchCol, setSearchCol }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            CVS File Reader
          </a>
          <div className="d-flex">
            <input
              className="form-control d-flex"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </nav>
      {columns &&
        columns.map((col) => (
          <label className="ml-4">
            <input
              type="checkbox"
              checked={searchCol.includes(col)}
              onChange={(e) => {
                const checked = searchCol.includes(col);
                setSearchCol((prev) =>
                  checked ? prev.filter((sc) => sc !== col) : [...prev, col]
                );
              }}
            />
            {col}
          </label>
        ))}
    </div>
  );
};

export default Search;
