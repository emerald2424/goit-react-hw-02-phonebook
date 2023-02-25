import {Label} from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onSearch, onBlur }) => {
  return (
      <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onSearch}
        onBlur={onBlur}
      />
      </Label> 
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}
