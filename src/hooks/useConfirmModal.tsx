import { useState } from "react";
import Modal from "@/components/Modal/Modal";

const useConfirmModal = ({
  message = "hi",
}): [() => JSX.Element, () => Promise<boolean>] => {
  const [promise, setPromise] = useState<null | {
    resolve: (val: boolean) => void;
  }>(null);

  const confirm = (): Promise<boolean> =>
    new Promise((resolve) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <Modal open={promise !== null} title="confirm" onClose={handleClose}>
      <div>{message}</div>
      <div>
        <button onClick={handleConfirm}>I Accept</button>
        <button onClick={handleCancel}>Reject</button>
      </div>
    </Modal>
  );

  return [ConfirmationDialog, confirm];
};

export default useConfirmModal;
