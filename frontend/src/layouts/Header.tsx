import Toggle from "../components/Toggle";
import Search from "../components/Search";

const Header = () => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">Name</h1>
        <Search />
      </div>
      <div>
        <Toggle />
      </div>
    </>
  );
};

export default Header;
