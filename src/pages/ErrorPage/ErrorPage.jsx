import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-5">
      <h1 className="text-7xl font-bold">Oops!</h1>
      <p className="text-3xl">404-Page not found</p>
      <Link to={'/'} className="bg-blue-500 p-2 rounded-lg">Back To Home</Link>
    </div>
  );
};

export default ErrorPage;