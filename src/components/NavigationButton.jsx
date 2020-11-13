import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import more from '../assets/icons/more.svg';
import search from '../assets/icons/search.svg';
import credit from '../assets/icons/credit_card.svg';
import help from '../assets/icons/help.svg';

import styles from '../css/navigationButton.module.css';

function NavigationButton(props) {
  const [active, setActive] = useState(false);
  const { handlePopup } = props;

  /* Popup temporaire en attendant d'avoir la 2ème page */

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${active && styles.containerActive}`}
      >
        <div
          className={`${styles.nav} ${
            active ? styles.navActive : styles.navDisabled
          }`}
        >
          <img
            onClick={handlePopup}
            className={styles.icon}
            src={help}
            alt="icon help"
          />
          <Link to="/prices">
            <img className={styles.icon} src={credit} alt="icon credit" />
          </Link>

          <img className={styles.icon} src={search} alt="icon search" />
        </div>
        <button
          className={`${styles.btn} ${
            active ? styles.btnActive : styles.btnDisabled
          }`}
          onClick={() => setActive(!active)}
          type="button"
        >
          <img className={styles.icon} src={more} alt="icon more" />
        </button>
      </div>
    </div>
  );
}

NavigationButton.propTypes = {
  handlePopup: PropTypes.func.isRequired,
};

export default NavigationButton;
