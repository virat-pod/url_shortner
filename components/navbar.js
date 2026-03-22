import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-400 flex items-center text-white h-14 justify-between px-3">
      <div className="logo text-xl font-bold">
        <Link href={"/"}>Bitlinks</Link>
      </div>
      <ul className="flex items-center gap-4 text-lg font-medium">
        <Link href={"/"}>
          <li className="hidden md:flex">Home</li>
        </Link>
        <Link href={"/shorten"}>
          <li className="hidden md:flex">Shorten</li>
        </Link>
        <li className="flex gap-4">
         <Link href={"/shorten"}> <button className="p-2 md:p-4 md:py-1 rounded-lg cursor-pointer bg-purple-500">
            Try now
          </button></Link>
             <a href="https://github.com/virat-pod" target="_blank"> <button className="p-2 md:p-4 md:py-1 rounded-lg cursor-pointer bg-purple-500">
            Github
          </button></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
