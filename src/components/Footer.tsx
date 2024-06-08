import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <p>
        Copyright © 2024 All Rights Reserved, Crafted by Saksham Kapadnis
        <a href="https://www.linkedin.com/in/kapadnis-saksham-821213289/" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/SakshamK404" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:sakshamkaps411@gmail.com" className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
