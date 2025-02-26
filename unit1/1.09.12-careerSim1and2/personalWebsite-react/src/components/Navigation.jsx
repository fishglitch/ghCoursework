import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div id="navbar">
        <Link to={"/portfolio"}>
          <h2>Portfolio</h2>
        </Link>
        <Link to={"/home"}>
          <h2>Home</h2>
        </Link>
      </div>
    </>
  );
}
export default Navigation;