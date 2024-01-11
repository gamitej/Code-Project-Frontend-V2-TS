import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

interface ModalProps {
  open: boolean;
  title: string;
  width?: string;
  height?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  open,
  onClose,
  children,
  title = "Title",
  width = "30rem",
  height = "20rem",
}: ModalProps) => {
  if (!open) return null;

  // react portal
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  const handleClose = () => {
    console.log("handleClose");
    onClose();
  };

  /**
   * TSX
   */
  return createPortal(
    <div
      onClick={handleClose}
      className="fixed inset-0 z-[999] flex justify-center items-center bg-slate-800/70 backdrop-blur-sm"
    >
      <div
        className="relative bg-white rounded-md shadow-md"
        style={{ width, height }}
      >
        <div
          onClick={handleClose}
          className="hover:bg-slate-300 p-1 rounded-full cursor-pointer absolute top-1 right-1"
        >
          <MdOutlineClose size={28} />
        </div>
        <div className="px-4 py-3 text-center text-2xl font-semibold text-slate-700">
          <p>{title}</p>
        </div>
        <div className="w-[100%] flex flex-col justify-between">
          <div style={{ height }}>{children}</div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
