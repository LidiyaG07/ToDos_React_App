import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput } from './SearchInput';
import { selectSearchQuery } from 'src/store/selectors';
import { setSearchQuery } from 'src/store/todos/todoSlice';

export const SearchInputContainer: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);

  const handleSeasrchChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleReset = () => {
    dispatch(setSearchQuery(''));
  };

  return <SearchInput value={searchQuery} onChange={handleSeasrchChange} onReset={handleReset} />;
};
