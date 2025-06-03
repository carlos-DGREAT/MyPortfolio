export default function Navbar() {
  return (
<div className="fixed top-0 left-0 navbar bg-transparent text-black px-10 md:px-14 py-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
        <li><a>Services</a></li>
        <li><a>About</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Resume</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CARLOS.DGREAT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg ">
        <li><a className="hover:text-[#932929] ">Services</a></li>
        <li><a className="hover:text-[#932929]">About</a></li>
        <li><a className="hover:text-[#932929]">Portfolio</a></li>
        <li><a className="hover:text-[#932929]">Resume</a></li>
        <li><a className="hover:text-[#932929]">Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn px-10 py-7 rounded-full">Hire Me</a>
  </div>
</div>
  );
}