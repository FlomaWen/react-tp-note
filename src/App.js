import "./App.css";
import HomePage from "./pages/HomePage";
import CocktailsListPage from "./pages/CocktailsListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocktailDetailPage from "./pages/CocktailDetailPage";
import CategoriesListPage from "./pages/CategoriesListPage";
import CocktailsFilteredByCategoriesPage from "./pages/CocktailsFilteredByCategoriesPage";
import CocktailsFilteredByIngredientsPage from "./pages/CocktailsFilteredByIngredientsPage";
import GlassesListPage from "./pages/GlassesListPage";
import SearchResultPage from "./pages/SearchResultsPage";
import CocktailsFilteredByGlassesPage from "./pages/CocktailsFilteredByGlassesPage";
import IngredientsListPage from "./pages/IngredientsListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cocktails" element={<CocktailsListPage />} />
        <Route path="/Cocktails/Detail/:id" element={<CocktailDetailPage />} />
        <Route path="/Categories" element={<CategoriesListPage />} />
        <Route
          path="/Cocktails/FilteredCategories/:category"
          element={<CocktailsFilteredByCategoriesPage />}
        />
        <Route path="/Glasses" element={<GlassesListPage />} />
        <Route path="/Ingredients" element={<IngredientsListPage />} />
        <Route
          path="/Cocktails/FilteredIngredients/:ingredient"
          element={<CocktailsFilteredByIngredientsPage />}
        />
        <Route
          path="/Cocktails/FilteredGlasses/:glass"
          element={<CocktailsFilteredByGlassesPage />}
        />
        <Route path="/SearchResults/:research" element={<SearchResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
