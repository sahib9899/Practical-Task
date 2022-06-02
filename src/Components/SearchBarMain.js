import { Button } from "react-bootstrap";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const SearchBarMain = () => {
  return (
    <div className='searchbar-main'>
      <InputGroup className='search-input'>
        <FormControl
          className='search-form-control'
          placeholder='Search Movies'
        />
        <Button className='search-btn'>
          <BiSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBarMain;
