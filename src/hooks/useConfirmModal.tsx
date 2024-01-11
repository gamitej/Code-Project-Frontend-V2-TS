import { useCallback, useState } from "react";

export const useConfirmModal = () => {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // State to store the promise and its resolve function
  const [promise, setPromise] = useState<null | {
    resolve: (val: boolean) => void;
  }>(null);

  // Function to close the modal and resolve the promise with false
  const closeModal = () => {
    setIsOpen(false);
    promise?.resolve(false);
  };

  // Function to confirm the action, close the modal, and resolve the promise with true
  const confirmModal = () => {
    setIsOpen(false);
    promise?.resolve(true);
  };

  // Function to open the modal and return a promise that resolves with the user's choice (true/false)
  const openConfirmModal = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      // Store the resolve function in the state
      setPromise({ resolve });
      // Open the modal
      setIsOpen(true);
    });
  }, []);

  // Return the necessary functions and state to be used in the component
  return {
    isOpen,
    confirmModal,
    openConfirmModal,
    closeConfirmModal: closeModal,
  };
};

// const { openConfirmModal, closeConfirmModal, isOpen, confirmModal } =
//   useConfirmModal();

// const handleOpenConfirmModal = async () => {
//   const data = await openConfirmModal();
//   console.log(data);
// };

{
  /* <ConfirmModal
            children={
              <p className="text-xl">Are you sure you want to submit ?</p>
            }
            height="10rem"
            open={isOpen}
            title="Confirm"
            onClose={closeConfirmModal}
            handleConfirm={confirmModal}
          /> */
}
