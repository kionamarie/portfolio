import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Oops!</h1>
        <p className="text-3xl mb-8">Error 404.. Page not found :(</p>
        <Link to="" className="btn btn-blue rounded-full">
          <FaHome className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
