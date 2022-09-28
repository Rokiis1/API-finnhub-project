import { useTheme } from "../utils/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// export function Toggle() {
//   const { theme, setTheme } = useTheme();

//   function handleToggleTheme() {
//     //reverse the theme value every time that "handleToggleTheme" is called
//     setTheme(!theme);
//   }

//   return (
//     // <button
//     //   onClick={handleToggleTheme}
//     //   className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 ${
//     //     theme ? "shadow-gray-800" : null
//     //   }`}
//     // >
//     //   <MoonIcon
//     //     className={`h-8 w-8 cursor-pointer stroke-1 ${
//     //       theme
//     //         ? "fill-yellow-400 stroke-yellow-400"
//     //         : "fill-none stroke-neutral-400"
//     //     }`}
//     //   />
//     // </button>

//     <div>
//       {theme ? (
//         <MoonIcon className="cursor-pointer" onClick={handleToggleTheme} />
//       ) : (
//         <SunIcon
//           className="cursor-pointer"
//           color="white"
//           onClick={handleToggleTheme}
//         />
//       )}
//     </div>
//   );
// }

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    //reverse the theme value every time that "handleToggleTheme" is called
    setTheme(!theme);
  }
  return (
    <div>
      {theme ? (
        <MoonIcon className="cursor-pointer" onClick={handleToggleTheme} />
      ) : (
        <SunIcon
          className="cursor-pointer"
          color="white"
          onClick={handleToggleTheme}
        />
      )}
    </div>
  );
};

export default Toggle;
