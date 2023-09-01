import MenuModal from "@/components/Modal/MenuModal";
import { colorLists } from "@/utils/componentData";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

interface HeaderColorPaletteProps {
  colorShades: string;
  setColorShades: (color: string) => void;
}

const HeaderColorPalette = ({
  colorShades,
  setColorShades,
}: HeaderColorPaletteProps) => {
  /**
   * TSX
   */
  return (
    <div>
      <MenuModal
        component={
          <ColorOptions
            colorShades={colorShades}
            setColorShades={setColorShades}
          />
        }
        horizontal="center"
      >
        <ColorLensOutlinedIcon
          style={{ color: colorShades, fontSize: "1.8rem", cursor: "pointer" }}
        />
      </MenuModal>
    </div>
  );
};

function ColorOptions({
  colorShades,
  setColorShades,
}: HeaderColorPaletteProps) {
  return (
    <div className="text-white w-[8rem] px-2 grid grid-cols-3 gap-2">
      {Object.entries(colorLists).map(([key, value]) => (
        <div
          key={key}
          style={{ backgroundColor: value }}
          onClick={() => setColorShades(value)}
          className="w-8 h-8 rounded-full cursor-pointer border-2 hover:border-black"
        >
          {colorShades === value && (
            <DoneOutlinedIcon className="ml-1" style={{ fontSize: "19px" }} />
          )}
        </div>
      ))}
    </div>
  );
}

export default HeaderColorPalette;
