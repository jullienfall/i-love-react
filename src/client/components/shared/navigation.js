import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul className="navigation">
      <li className="navigation__list"><Link to="/" className="navigation__link">Home</Link></li>
      <li className="navigation__list"><Link to="/form" className="navigation__link">Form</Link></li>
      <li className="navigation__list"><Link to="/contact" className="navigation__link">Contact</Link></li>
    </ul>
  </div>
);

export default Navigation;
