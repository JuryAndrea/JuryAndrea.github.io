import {
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (

  <Section>
    <div className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-lg bg-gray-900 shadow-lg z-50">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-5xl px-4 py-3">

        {/* Menu di navigazione */}
        <NavMenu className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <NavMenuItem href="#" className="text-white font-semibold hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400">
            About Me
          </NavMenuItem>
          <NavMenuItem href="#projects" className="text-white font-semibold hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400">
            Projects
          </NavMenuItem>
          <NavMenuItem href="#technologies" className="text-white font-semibold hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400">
            Technologies
          </NavMenuItem>
          <NavMenuItem href="#contact" className="text-white font-semibold hover:text-blue-400 transition border-b-2 border-transparent hover:border-blue-400">
            Contact Me
          </NavMenuItem>
        </NavMenu>

        {/* Bottone Download CV */}
        <a
          href="./Jury_Andrea_DOnofrio_CV.pdf"
          className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 mt-2 md:mt-0"
          download
        >
          <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
          <span>DOWNLOAD CV</span>
        </a>
      </div>
    </div>
  </Section>
);


export { Navbar };
