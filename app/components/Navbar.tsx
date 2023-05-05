import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-background dark:bg-background_dark sticky top-0 z-10">
      <div className="h-14 w-11/12 mx-auto bg-background dark:bg-background_dark border-b-2 border-gray-300 dark:border-gray-600">
        <div className="flex justify-between items-center h-full w-full">
          <div className=""></div>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
