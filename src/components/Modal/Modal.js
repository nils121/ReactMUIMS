import React, { Dispatch, SetStateAction } from "react";
import { Button, Modal as RBModal } from "react-bootstrap";

// interface ModalProps {
//   children: JSX.Element;
//   modalTitle?: string;
//   shouldShow: boolean;
//   modalCloseHandler: Dispatch<SetStateAction<boolean>>;
//   hideFooter?: boolean;
// }

const Modal = ({
  modalTitle,
  shouldShow,
  modalCloseHandler,
  hideFooter,
  children,
}) => (
  <>
    <RBModal show={shouldShow} centered backdrop="static" size="lg">
      <RBModal.Header>
        <RBModal.Title>{modalTitle}</RBModal.Title>
      </RBModal.Header>
      <RBModal.Body>{children}</RBModal.Body>
      {!hideFooter && (
        <RBModal.Footer>
          <Button type="button" onClick={() => modalCloseHandler(false)}>
            Close
          </Button>
        </RBModal.Footer>
      )}
    </RBModal>
  </>
);

export default Modal;
