import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    // console.log("after", this.searchInputRef.current);
    this.searchInputRef.current.focus();
  }
  
  render() {
    console.log("before", this.searchInputRef.current);
    return (
      <div>
        <h1>Search</h1>
        <input ref={this.searchInputRef} type="text" name="searchQuery" placeholder="Search..." />
      </div>
    );
  }
}

export default Search;
