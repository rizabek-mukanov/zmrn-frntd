import Modal from 'react-modal';

import { ModalProps } from '@/types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
};

export const ModalCmp = ({ closeModal, show, children }: ModalProps) => (
  <Modal
    ariaHideApp={false}
    shouldCloseOnOverlayClick={false}
    isOpen={show}
    onRequestClose={closeModal}
    style={customStyles}
  >
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-primary p-6 md:h-96 md:w-96">
      {children}
    </div>
  </Modal>
);
