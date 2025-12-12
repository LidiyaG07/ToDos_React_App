import React, { ChangeEventHandler, MouseEvent } from 'react';
import { Close } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { SearchInputProps } from './SearchInput.types';

export const SearchInput: React.FC<SearchInputProps> = ({ onChange, value, onReset }) => {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <TextField
      fullWidth
      placeholder="Search..."
      value={value}
      onChange={onSearchInputChange}
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton onClick={onResetBtnClick} edge="end" size="small" aria-label="clear search">
              <Close fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
