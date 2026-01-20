import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const NavBar = ({
  mode,
  changeMode,
}: {
  mode: string;
  changeMode: () => void;
}) => {
  return (
    <div className="dark:bg-d-Elements bg-l-Elements py-8 shadow-lg">
      <div className="flex justify-between container">
        <h1 className="font-bold  md:text-3xl lg:text-4xl">Where in the world?</h1>
        <button className="flex gap-2 items-center" onClick={changeMode}>
          <span>{mode === "light" ? <CiDark /> : <MdDarkMode />}</span>
          <span className="font-bold md:text-lg">{mode === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
