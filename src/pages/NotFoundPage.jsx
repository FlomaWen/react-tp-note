import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
