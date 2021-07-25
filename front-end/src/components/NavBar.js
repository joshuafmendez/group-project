import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav bg-info text-white justify-content-center flex-column flex-sm-row">
      <button className="">
        <Link to="/" className="flex-sm-fill text-dark nav-link active">
          Home
        </Link>
      </button>

      <button className="">
        <Link to="/products" className="flex-sm-fill text-dark nav-link active">
          Products
        </Link>
      </button>

      <button className="">
        <Link to="/products/new" className="flex-sm-fill text-dark nav-link active">
          New Product
        </Link>
      </button>
    </nav>
  );
}
