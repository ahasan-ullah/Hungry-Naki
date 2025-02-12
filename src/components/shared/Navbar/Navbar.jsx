import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../layout/Auth/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // logout function
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Logout success",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Logout failed",
          icon: "error",
        });
      });
  };

  const links = (
    <>
      <li className="bg-white rounded-xl">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="bg-white rounded-xl">
        <NavLink to={"/all-foods"}>All Foods</NavLink>
      </li>
      <li className="bg-white rounded-xl">
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
    </>
  );
  return (
    <div className={"navbar bg-neutral fixed top-0 z-10 shadow-sm px-2 lg:px-8"}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="md:text-2xl font-bold text-white">Hungry Naki!</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-stretch space-x-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="border border-blue-500 rounded-full"
              >
                <img className="w-12 rounded-full" src={user.photoURL} alt="user image" />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={`/myFood/${user.email}`}>My Foods</NavLink>
                </li>
                <li>
                  <NavLink to={"/addFood"}>Add Food</NavLink>
                </li>
                <li>
                  <NavLink to={`/myOrders/${user.email}`}>My Orders</NavLink>
                </li>
              </ul>
            </div>
            <button onClick={handleLogout} className="btn btn-error text-white">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={"/login"} className="btn btn-accent text-white">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
