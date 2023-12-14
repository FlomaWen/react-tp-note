import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import CocktailsFilteredByGlasses from "../components/CocktailsFilteredByGlasses";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailsFilteredByGlasses - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailsFilteredByGlasses = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des cocktails utilisant le verre selectionné extraite des données de la réponse JSON.
  return responseData.drinks;
};

const CocktailsFilteredByGlassesPage = () => {
  // Récupération du verre selectionné dans l'url
  const { glass } = useParams();
  // state cocktailsFiltered + setteur
  const [cocktailsFiltered, setCocktailsFiltered] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsFilteredByGlasses =
        // Concaténation de l'url de filtre + du verre récupérée
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass;

      const dataCocktailsFilteredByGlasses =
        await fetchDataCocktailsFilteredByGlasses(
          urlCocktailsFilteredByGlasses
        );
      // on envoi les données dans le state une fois que la fonction fetchDataCocktailsFilteredByGlasses a fini d'être éxécutée
      setCocktailsFiltered(dataCocktailsFilteredByGlasses);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktailsFiltered ? (
        // envoi du prop cocktailsFiltered dans le composant CocktailsFilteredByGlasses
        <CocktailsFilteredByGlasses cocktailsFiltered={cocktailsFiltered} />
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};

export default CocktailsFilteredByGlassesPage;
