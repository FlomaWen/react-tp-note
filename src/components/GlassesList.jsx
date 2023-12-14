import { Link } from "react-router-dom";

// Récupération des données dans le prop "glasses" | parent: GlassesListPage.jsx
const GlassesList = ({ glasses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {glasses.map((glass) => (
        <article className="mb-6 p-6 rounded-md bg-white shadow-md transition-transform transform hover:scale-105 duration-300">
          <Link to={`/Cocktails/FilteredGlasses/${glass.strGlass}`}>
            <div className="flex items-center justify-center mb-4">
              <p className="text-lg font-semibold text-center text-gray-800">
                {glass.strGlass}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default GlassesList;
