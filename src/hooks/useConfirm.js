import { useState, useCallback } from 'react';

const useConfirm = (ConfirmationComponent) => {
  const [promiseCallbacks, setPromiseCallbacks] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationProps, setConfirmationProps] = useState({});

  const confirm = useCallback((props = {}) => {
    return new Promise((resolve, reject) => {
      setConfirmationProps(props);
      setPromiseCallbacks({ resolve, reject });
      setIsOpen(true);
    });
  }, []);

  const handleConfirm = useCallback(() => {
    promiseCallbacks?.resolve();
    setIsOpen(false);
  }, [promiseCallbacks]);

  const handleCancel = useCallback(() => {
    promiseCallbacks?.reject();
    setIsOpen(false);
  }, [promiseCallbacks]);

  const ConfirmationDialog = useCallback(() => {
    if (!isOpen) return null;
    
    return ConfirmationComponent({
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      ...confirmationProps
    });
  }, [ConfirmationComponent, handleConfirm, handleCancel, isOpen, confirmationProps]);

  return [confirm, ConfirmationDialog];
};

export default useConfirm;
