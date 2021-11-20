import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.module.scss';
import {formatPrice} from '../../../utils/formatPrice';


export const OrderOptionNumber = ({limits, price, currentValue, setOptionValue}) => (
<div className={styles.number}>
  <input className={styles.inputSmall} 
  type='number' 
  value={currentValue} 
  min={limits.min} 
  max={limits.max} 
  onChange={event => setOptionValue(event.currentTarget.value)}>
  </input>
  ({formatPrice(price)})
</div>

);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;
