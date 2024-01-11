import Modal from "./Modal";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  width?: string;
  height?: string;
  onClose: () => void;
  children: React.ReactNode;
  handleConfirm: () => void;
}

const ConfirmModal = ({
  open,
  title,
  onClose,
  children,
  handleConfirm,
  width = "30rem",
  height = "20rem",
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      title={title}
      width={width}
      height={height}
      onClose={onClose}
    >
      <div
        className="flex flex-col justify-between gap-2 py-2 px-6"
        style={{ height: `calc(${height} - 4rem)` }}
      >
        <div>{children}</div>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={handleConfirm}
            className="border-none rounded-md px-2 py-1 text-[16px] bg-slate-800 text-white hover:bg-slate-600 font-semibold"
          >
            I Accept
          </button>
          <button
            onClick={onClose}
            className="border-none rounded-md px-2 py-1 text-[16px] bg-red-500 text-white font-semibold hover:bg-red-400"
          >
            Reject
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
