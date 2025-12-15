import {
  searchPlaces,
  saveCategoryName,
  saveCountryName,
} from '../../redux/AppRedux/operations';
import {selectCategoryName, selectCountryName} from '../../redux/AppRedux/selectors';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import 'flatpickr/dist/themes/material_blue.css';
import Brands from '../Options/brandsList';
import Countries from '../Options/countries_sorted_by_full_name';

export const ContactForm = ({lowerLimitSetter, upperLimitSetter, children }) => {
  const dispatch = useDispatch();
  const categoryName = useSelector(selectCategoryName);
  const countryName = useSelector(selectCountryName);

  const handleButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const brand = event.target[0].value;

    
    dispatch(searchPlaces({ brand: brand }));
    
    lowerLimitSetter(0);
    upperLimitSetter(4);
    
  };

  const handleCategoryChange = (evt) => {
    
    dispatch(saveCategoryName(evt.target.value));
  }

  return (
    <div className={css.taskBook}>
      <h2 className={css.formTitle}>Brand Services</h2>
      <form onSubmit={handleSubmit} className={css.formSection}>
        <label className={css.loginLabel}>
          <span className={css.formLabel}>Brands:</span>
          <select
            className={css.formInput}
            onChange={handleCategoryChange}
            value={categoryName}
            name="categoryName"
            required
            title="Choose a Category"
          >
            <option
              value=""
              disabled
              selected
              style={{
                fontFamily: 'Work Sans',
                fontWeight: 700,
                backgroundColor: 'grey',
                color: 'black',
              }}
            >
              Choose a Brand
            </option>
            {Brands.map(Brand => (
              <option value={Brand.val}>{Brand.label}</option>
            ))}
          </select>
        </label>
        
        <div className={css.buttonArea}>
          <button
            type="submit"
            name="button"
            className={css.button}
            onClick={handleButtonPress}
          >
            Search
          </button>
        </div>
      </form>
      {children}
    </div>
  );
};

ContactForm.propTypes = {
  children: PropTypes.node,
};
