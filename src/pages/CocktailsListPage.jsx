import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CocktailsList from "../components/CocktailsList";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailsList - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailsList = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des cocktails  extraite des données de la réponse JSON.
  return responseData.drinks;
};

const CocktailsListPage = () => {
  //state cocktails et setteur
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsList =
        // url permettant de récupérer la liste des cocktails
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
      const dataCocktailsList = await fetchDataCocktailsList(urlCocktailsList);

      // on envoi les données dans le state une fois que la fonction fetchDataCocktailsList a fini d'être éxécutée
      setCocktails(dataCocktailsList);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktails ? (
        // envoi du prop cocktails dans le composant CocktailsList
        <CocktailsList cocktails={cocktails} />
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default CocktailsListPage;
