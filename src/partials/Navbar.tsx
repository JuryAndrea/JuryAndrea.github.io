import {
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (

  <Section>
    <div className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-lg bg-gray-900 shadow-lg z-50">
    <div className="flex justify-between items-center mx-auto max-w-5xl px-4 py-3">
      {/* Menu di navigazione */}
      <NavMenu>
        <NavMenuItem href="#" className="text-white font-semibold hover:text-blue-400 transition relative">
          About Me
        </NavMenuItem>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
        <NavMenuItem href="#projects" className="text-white font-semibold hover:text-blue-400 transition relative">
          Projects
        </NavMenuItem>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
        <NavMenuItem href="#technologies" className="text-white font-semibold hover:text-blue-400 transition relative">
          Technologies
        </NavMenuItem>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
        
        <NavMenuItem href='#contact' className="text-white font-semibold hover:text-blue-400 transition relative">
          Contact Me
        </NavMenuItem>

      </NavMenu>

      {/* Bottone Download CV */}
      <a
        href="./src/pdf/Jury_Andrea_DOnofrio_CV.pdf" // Sostituisci con il percorso corretto al tuo CV
        className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
        download
      >
        {/* Icona Font Awesome */}
        <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
        <span>DOWNLOAD CV</span>
      </a>
    </div>
  </div>
  </Section>
);


export { Navbar };
