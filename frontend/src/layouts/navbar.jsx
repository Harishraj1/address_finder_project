function Navbar() {
  return (
    <>
      <nav className="w-full fixed border-gray-200 bg-black dark:bg-black dark:border-gray-700 caret-transparent">
        <div className="flex flex-wrap items-center justify-between mx-auto px-20 py-4">
          {/* Logo aligned to the left */}
          <a href="/" className="flex items-center space-x-3 cursor-pointer">
            <h1 className="text-black text-xl font-bold bg-white px-6 py-2 border rounded-md border-none cursor-pointer">Logo</h1>
          </a>

          {/* Links aligned to the right */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col md:flex-row text-center md:space-x-10 items-center justify-center font-medium text-lg p-4 md:p-0 mt-4 md:mt-0 bg-black md:bg-black">
              <li>
                <a href="#" className="block py-2 px-3 text-white relative group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white relative group">
                  About Us
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white relative group">
                  Contact Us
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
