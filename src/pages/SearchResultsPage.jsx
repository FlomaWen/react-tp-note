import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailSearched - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailSearched = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des cocktails filtrés extraite des données de la réponse JSON.
  return responseData.drinks;
};

const SearchResultPage = () => {
  // on récupère depuis l'url la recherche effectué
  const { research } = useParams();

  //state cocktailSearched + setteur
  const [cocktailSearched, setCocktailSearched] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailSearched =
        // concatenation url de recherche + recherche effectué par l'utilisateur
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + research;
      const dataCocktailSearched = await fetchDataCocktailSearched(
        urlCocktailSearched
      );
      // on envoi les données dans le state une fois que la fonction fetchDataCocktailSearched a fini d'être éxécutée
      setCocktailSearched(dataCocktailSearched);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktailSearched ? (
        //envoi du cocktailSearched dans le composant SearchResults
        <SearchResults cocktailSearched={cocktailSearched} />
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default SearchResultPage;
