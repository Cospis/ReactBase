// import node module libraries
import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const CustomSearch = ({ text, setFilter, placeholder }) => {
  const [value, setValue] = useState(text);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <input
      type="search"
      className="form-control"
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};

export default CustomSearch;
