import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounter }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a href="/" className="navbar-brand">
//           NavBar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounter}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
