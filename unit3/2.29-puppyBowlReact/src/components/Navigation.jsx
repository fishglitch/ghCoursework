// 5. Pass Props to Child Components

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/add-player">Add New Player</Link>
      </div>
    </nav>
  );
}
