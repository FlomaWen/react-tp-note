import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IngredientsList from "../components/IngredientsList";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataIngredientsList - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataIngredientsList = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des ingrédients extraite des données de la réponse JSON.
  return responseData.drinks;
};

const IngredientsListPage = () => {
  //state ingredients + setteur
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    (async () => {
      const urlIngredientsList =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
      const dataIngredientsList = await fetchDataIngredientsList(
        urlIngredientsList
      );
      // on envoi les données dans le state une fois que la fonction fetchDataIngredientsList a fini d'être éxécutée

      setIngredients(dataIngredientsList);
    })();
  }, []);

  return (
    <>
      <Header />
      {ingredients ? (
        //envoi du prop ingredients dans le composant IngredientsList
        <IngredientsList ingredients={ingredients} />
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default IngredientsListPage;
