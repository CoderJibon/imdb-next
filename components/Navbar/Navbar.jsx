import NavbarItem from "./NavbarItem.jsx";

export default function Navbar() {
  return (
    <div className="bg-amber-100 p-4 dark:bg-gray-500">
      <div className="flex justify-center md:text-xl gap-4 ">
        <NavbarItem title="Trending" param="fetchTrending"></NavbarItem>
        <NavbarItem title="Top Rated" param="fetchTopRated"></NavbarItem>
      </div>
    </div>
  );
}
