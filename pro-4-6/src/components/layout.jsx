import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-[#42b883] p-4 text-white">
        <ul className="flex justify-around">
        <li className="m-2">
            <Link to="/" className="bg-[#35495e] text-white hover:bg-[#2c6d51] px-4 py-2 rounded">Home</Link>
            <Link to="/create" className="bg-[#35495e] text-white hover:bg-[#2c6d51] px-4 py-2 rounded ml-4">Create listing</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;