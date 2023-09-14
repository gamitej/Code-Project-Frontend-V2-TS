import React from "react";
// comp
import MenuModal from "@/components/Modal/MenuModal";
// utils
import { colorLists } from "@/utils/componentData";
// mui icons
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface HeaderColorPaletteProps {
  colorShades: string;
  darkMode: boolean;
  setDarkMode: () => void;
  setColorShades: (color: string) => void;
}

const HeaderColorPalette = (props: HeaderColorPaletteProps) => {
  /**
   * TSX
   */
  return (
    <div>
      <MenuModal component={<ColorOptions {...props} />} horizontal="center">
        <ColorLensOutlinedIcon
          style={{
            color: props.colorShades,
            fontSize: "1.8rem",
            cursor: "pointer",
          }}
        />
      </MenuModal>
    </div>
  );
};

function ColorOptions({
  colorShades,
  setColorShades,
  darkMode,
  setDarkMode,
}: HeaderColorPaletteProps) {
  return (
    <div>
      {/* dark mode / light mode toggle button */}
      <div
        onClick={setDarkMode}
        className="font-semibold text-lg px-2 p-1 dark:text-white
        text-darkText cursor-pointer dark:hover:bg-slate-400 hover:bg-slate-200"
      >
        {darkMode ? (
          <React.Fragment>
            <DarkModeIcon className="mr-2 ml-2" />
            Dark Mode
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LightModeIcon className="mr-2 ml-2" />
            Light Mode
          </React.Fragment>
        )}
      </div>
      <hr className="mb-4 mt-2" />
      {/* color palette options */}
      <div className="text-white w-[10rem] px-3 grid grid-cols-3  gap-2">
        {Object.entries(colorLists).map(([key, value]) => (
          <div
            key={key}
            style={{ backgroundColor: value }}
            onClick={() => setColorShades(value)}
            className="w-8 h-8 rounded-full cursor-pointer border-2 hover:border-black border-slate-600 dark:border-white"
          >
            {colorShades === value && (
              <DoneOutlinedIcon
                className="ml-1"
                style={{ fontSize: "19px", color: darkMode ? "" : "black" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderColorPalette;
