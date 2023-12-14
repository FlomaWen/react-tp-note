import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import LastCocktails from "../components/LastCocktails";
import RandomCategorie from "../components/RandomCategorie";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchData - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchData = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie une liste extraite des données de la réponse JSON.
  return responseData.drinks;
};

const HomePage = () => {
  //state cocktails + setteur
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCocktailsList =
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
      const dataCocktailsList = await fetchData(urlCocktailsList);
      // on envoi les données dans le state une fois que la fonction fetchData a fini d'être éxécutée
      setCocktails(dataCocktailsList);
    })();
  }, []);

  //state categories + setteur
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const urlCategoriesList =
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const dataCategoriesList = await fetchData(urlCategoriesList);
      // on envoi les données dans le state une fois que la fonction fetchData a fini d'être éxécutée
      setCategories(dataCategoriesList);
    })();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Bienvenue sur notre site de cocktails !
        </h1>
        <p className="text-lg text-gray-600">
          Ici vous retrouvez tout les cocktails alcoolisés ou non !
        </p>
      </div>
      {cocktails && categories ? ( // si les deux states ont des données
        <>
          {/*envoi du prop cocktails dans le composant LastCocktails*/}
          <LastCocktails cocktails={cocktails} />
          {/*envoi du prop categories dans le composant RandomCategorie*/}
          <RandomCategorie categories={categories} />
        </>
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default HomePage;
