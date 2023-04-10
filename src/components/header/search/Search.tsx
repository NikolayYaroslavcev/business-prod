import React, {useState} from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {CloseButton, Label, SearchButton, SearchContainer, SearchInput} from "./search-style";

const Search: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        // Perform search
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Label onClick={handleToggle}>
                <AiOutlineSearch size={30} />
            </Label>
            <SearchContainer style={{width: isOpen ? '76%' : '0'}}>
                <SearchButton onClick={handleSearch}>
                    <AiOutlineSearch size={30} />
                </SearchButton>
                <SearchInput
                    placeholder="Enter search term..."
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <CloseButton onClick={handleClose}>x</CloseButton>
            </SearchContainer>
        </>
    );
};

export default Search;


