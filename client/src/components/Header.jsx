import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#c7d2fe] shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
      <Link to="/">       
        <h1 className="font-bold text-xl sm:text-xl flex flex-wrap">
          <span className="text-[#4f46e5]">Sahand</span>
          <span className="text-[#3730a3]">Estate</span>
        </h1>
        </Link>
        <form className="bg-[#e0e7ff] p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <Search className="text-indigo-500" />
        </form>
        <ul className="flex gap-4 text-indigo-600">
          <Link to ="/"><li className="hidden sm:inline hover:underline cursor-pointer">Home</li></Link>
          <Link to = "/about"><li className="hover:underline cursor-pointer">About</li></Link>
          <Link to="/sign-in"><li className="hover:underline cursor-pointer">Sign In</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;