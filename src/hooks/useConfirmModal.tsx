import { useCallback, useState } from "react";

export const useConfirmModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [promise, setPromise] = useState<null | {
    resolve: (val: boolean) => void;
  }>(null);

  const closeModal = () => {
    setIsOpen(false);
    promise?.resolve(false);
  };

  const confirmModal = () => {
    setIsOpen(false);
    promise?.resolve(true);
  };

  const openConfirmModal = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
      setIsOpen(true);
    });
  }, []);

  return {
    isOpen,
    confirmModal,
    openConfirmModal,
    closeConfirmModal: closeModal,
  };
};
