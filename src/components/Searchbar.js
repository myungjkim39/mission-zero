import "./Searchbar.css";

function Searchbar() {
  return (
      <div className="search-pic">
        <input
          className="search-wrapper"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="search">Search</button>
      </div>
  );
}

export default Searchbar;
