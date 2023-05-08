import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsFilter } from 'redux/filter/selectors';
import { setContactFilter } from 'redux/filter/filterSlice';
import {FilterBlock} from 'components/Filter/Filter.styled'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <FilterBlock>
      <p>Find contacts</p>
      <input
        type="text"
        value={filter}
        name={'name'}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </FilterBlock>
  );
};

export default Filter;
