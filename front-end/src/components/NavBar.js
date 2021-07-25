import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav bg-dark text-white justify-content-around flex-column flex-lg-row">
      <button className="btn btn-warning">
        <Link to="/" className="flex-sm-fill text-dark nav-link active">
          Home
        </Link>
      </button>

      <button className="btn btn-warning">
        <Link to="/products" className="flex-sm-fill text-dark nav-link active">
          Products
        </Link>
      </button>

      <button className="btn btn-warning">
        <Link to="/products/new" className="flex-sm-fill text-dark nav-link active">
          New Product
        </Link>
      </button>
    </nav>
  );
}
