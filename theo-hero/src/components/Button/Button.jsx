import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = props => <button onClick={props.clicked} className={styles.button}>{props.icon}{props.label}</button>;

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default Button;
