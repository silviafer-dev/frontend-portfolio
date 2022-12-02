import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import '../CSS/footer.css'

export  function Footer() {
  return (
    <div className='footer'>
      <div className="icons-link-footer">
        <a
          href="https://www.linkedin.com/in/silvia-ferrai/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/silviafer-dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
      <p>Made with 🖤 by Silvia Ferrai</p>
      <address>Email: silviaferdeveloper@gmail.com </address>
    </div>
  );
}
