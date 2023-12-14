import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  //state searchQuery + setteur
  const [searchQuery, setSearchQuery] = useState("");
  //state isMenuOpen + setteur
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction toggleMenu - Cette fonction permet de faire dérouler le menu de la page mobile si le bouton est pressé
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Fonction Search - Cette fonction permet de diriger l'utilisateur sur une page avec la valeur de sa recherche dans l'url
  const Search = () => {
    window.location.href = `/SearchResults/${searchQuery}`;
  };
  // Fonction KeyDown - Cette fonction permet de lancer la fonction Search() si la touche entrée est appuyée
  const KeyDown = (event) => {
    if (event.key === "Enter") {
      Search();
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            FlockTails 🍸
          </Link>
        </div>
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-grow justify-center space-x-4 md:flex md:space-x-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Cocktails"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Cocktails
              </Link>
            </li>
            <li>
              <Link
                to="/Categories"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/Glasses"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Glasses
              </Link>
            </li>
            <li>
              <Link
                to="/Ingredients"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Ingredients
              </Link>
            </li>
          </ul>
          <div className="flex items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Rechercher Cocktail"
              className="px-3 py-2 rounded-md text-gray-800 border-2 border-white focus:outline-none"
              value={searchQuery}
              // attribution au state de la valeur de l'entrée
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={KeyDown}
            />
            <button
              className="ml-5 px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-600 focus:outline-none"
              // lancement de la fonction search au click
              onClick={Search}
            >
              Rechercher
            </button>
          </div>
        </div>
        <button
          className="ml-2 px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-600 focus:outline-none md:hidden"
          // dépliage menu ou pliage
          onClick={toggleMenu}
        >
          {/* Fermer si menu ouvert / Menu si menu fermé */}
          {isMenuOpen ? "Fermer" : "Menu"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
