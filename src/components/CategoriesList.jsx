import { Link } from "react-router-dom";
//Récupération des données dans le prop "categories" | parent : pages/CategoriesListPage.jsx"
const CategoriesList = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <article className="mb-6 p-6 rounded-md bg-white shadow-md transition-transform transform hover:scale-105 duration-300">
          <Link
            to={`/Cocktails/FilteredCategories/${encodeURIComponent(
              //encodeURIComponent permet de pas tenir compte des "/" dans le nom des catégories
              category.strCategory
            )}`}
          >
            <div className="flex items-center justify-center mb-4">
              <p className="text-lg font-semibold text-center text-gray-800">
                {category.strCategory}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default CategoriesList;
