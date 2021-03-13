import React from "react";
import { SearchBox } from "../../components/SearchBox/SearchBox";

function Search({ onSubmit, ...props }) {
  const handleOnChange = (e) => {
    const { value } = e.target;
  };

  const onSearch = (e) => {};
  return (
    <SearchBox
      onEnter={onSearch}
      onChange={handleOnChange}
      value=""
      name="search"
      placeholder="Search your products from here"
      categoryType="bakery"
      buttonText="Search"
      {...props}
    />
  );
}

export default Search;
