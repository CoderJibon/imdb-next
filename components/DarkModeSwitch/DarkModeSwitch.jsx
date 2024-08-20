"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:bg-amber-500 rounded-full p-[1px] "
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer rounded-full hover:bg-amber-500 p-[1px]"
        />
      )}
    </div>
  );
}
