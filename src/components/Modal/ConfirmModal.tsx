import Modal from "./Modal";

interface ConfirmModalProps {
  open: boolean;
  title: string;
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
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      title={title}
      width="30rem"
      height="20rem"
      onClose={onClose}
    >
      <div className="flex flex-col justify-between gap-2">
        <div>{children}</div>
        <div className="flex flex-end">
          <button
            onClick={handleConfirm}
            className="border-none rounded-md px-2 py-1 text-[16px] bg-slate-800 text-white hover:bg-slate-600"
          >
            I Accept
          </button>
          <button
            onClick={onClose}
            className="border-none rounded-md px-2 py-1 text-[16px] bg-red-500 text-white hover:bg-red-400"
          >
            Reject
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
