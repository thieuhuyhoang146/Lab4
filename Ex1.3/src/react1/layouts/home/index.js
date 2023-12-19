import { Link, Outlet } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div className="home-layout">
      <section>
        <Link to="/">
          <div className="item">Home</div>
        </Link>
        <Link to="/shop">
          <div className="item">Shop</div>
        </Link>
        <Link to="/contact">
          <div className="item">Contact</div>
        </Link>
      </section>
      <Outlet />
    </div>
  );
};

export default Home;
