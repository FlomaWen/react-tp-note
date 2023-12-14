import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CocktailDetail from "../components/CocktailDetail";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCocktailDetaik - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCocktailDetail = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des détail d'un cocktail extraite des données de la réponse JSON.
  return responseData.drinks;
};

const CocktailDetailPage = () => {
  // On récupère dans l'url l'id du cocktail
  const { id } = useParams();
  // state cocktail + setteur
  const [cocktail, setCocktail] = useState(null);

  // Effet useEffect pour effectuer une action asynchrone lors du chargement de la page
  useEffect(() => {
    (async () => {
      const urlCocktailDetail =
        // Concaténation de l'url de filtre + de l'id récupéré
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
      const dataCocktailDetail = await fetchDataCocktailDetail(
        urlCocktailDetail
      );
      // on envoi les données dans le state une fois que la fonction fetchDataCocktailDetail a fini d'être éxécutée
      setCocktail(dataCocktailDetail[0]);
    })();
  }, []);

  return (
    <>
      <Header />
      {cocktail ? (
        // envoi du prop cocktail dans le composant CocktailDetail
        <CocktailDetail cocktail={cocktail} />
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};

export default CocktailDetailPage;
