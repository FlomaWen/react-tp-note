import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import GlassesList from "../components/GlassesList";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction fetchDataGlassesList - Cette fonction permet de récupérer les données de l'API en fonction de l'URL spécifiée.
const fetchDataGlassesList = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  // Renvoie la liste des verres  extraite des données de la réponse JSON.
  return responseData.drinks;
};

const GlassesListPage = () => {
  //state glasses et setteur
  const [glasses, setGlasses] = useState(null);

  useEffect(() => {
    (async () => {
      const urlGlassesList =
        // url permettant de récupérer la liste des verres
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";
      const dataGlassesList = await fetchDataGlassesList(urlGlassesList);
      // on envoi les données dans le state une fois que la fonction fetchDataGlassesList a fini d'être éxécutée
      setGlasses(dataGlassesList);
    })();
  }, []);

  return (
    <>
      <Header />
      {glasses ? (
        // envoi du prop glasses dans le composant GlassesList
        <GlassesList glasses={glasses} />
      ) : (
        <LoadingSpinner />
      )}

      <Footer />
    </>
  );
};

export default GlassesListPage;
