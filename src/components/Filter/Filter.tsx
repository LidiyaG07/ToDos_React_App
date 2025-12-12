import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { FilterPanel, FilterTitle, ClearButton, StyledFormControl } from './styled';
import { AppDispatch, RootState } from 'src/store';
import { setFilters, clearFilter } from 'src/store/todos/todoSlice';

export const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.todos.filters);

  const handleFilterChange = (filterType: 'isCompleted' | 'isImportant', value?: boolean) => {
    dispatch(
      setFilters({
        isCompleted: filterType === 'isCompleted' ? value : filters.isCompleted,
        isImportant: filterType === 'isImportant' ? value : filters.isImportant,
      })
    );
  };

  const handleClearFilters = () => {
    dispatch(clearFilter());
  };

  const hasActiveFilters = filters.isCompleted !== undefined || filters.isImportant !== undefined;

  return (
    <FilterPanel>
      <FilterTitle variant="h6">Filters</FilterTitle>
      <StyledFormControl variant="standard" fullWidth>
        <FormLabel component="legend">Status</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.isCompleted === true}
                onChange={(e) => handleFilterChange('isCompleted', e.target.checked || undefined)}
                name="completed"
                color="primary"
              />
            }
            label="Completed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.isCompleted === false}
                onChange={(e) => handleFilterChange('isCompleted', e.target.checked ? false : undefined)}
                name="not-completed"
                color="primary"
              />
            }
            label="Not Completed"
          />
        </FormGroup>
      </StyledFormControl>

      <StyledFormControl variant="standard" fullWidth>
        <FormLabel component="legend">Importance</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.isImportant === true}
                onChange={(e) => handleFilterChange('isImportant', e.target.checked || undefined)}
                name="important"
                color="primary"
              />
            }
            label="Important"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.isImportant === false}
                onChange={(e) => handleFilterChange('isImportant', e.target.checked ? false : undefined)}
                name="not-important"
                color="primary"
              />
            }
            label="Not Important"
          />
        </FormGroup>
      </StyledFormControl>

      {hasActiveFilters && (
        <ClearButton onClick={handleClearFilters} variant="outlined" color="secondary" size="small">
          Clear Filters
        </ClearButton>
      )}
    </FilterPanel>
  );
};
