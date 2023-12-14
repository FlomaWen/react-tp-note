import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CategoriesList from "../components/CategoriesList";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataCategoriesList - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataCategoriesList = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des catégories de boissons (drinks) extraites des données de la réponse JSON.
  return responseData.drinks;
};

const CategoriesListPage = () => {
  // state categories + setteur
  const [categories, setCategories] = useState(null);

  // Effet useEffect pour effectuer une action asynchrone lors du chargement de la page
  useEffect(() => {
    (async () => {
      const urlCategoriesList =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const dataCategoriesList = await fetchDataCategoriesList(
        urlCategoriesList
      );
      // on envoi les données dans le state une fois que la fonction fetchDataCategoriesList a fini d'être éxécutée
      setCategories(dataCategoriesList);
    })();
  }, []);

  return (
    <>
      <Header />
      {categories ? (
        // envoi du prop categories dans le composant CategoriesList
        <CategoriesList categories={categories} />
      ) : (
        <LoadingSpinner />
      )}
      <Footer />
    </>
  );
};

export default CategoriesListPage;
