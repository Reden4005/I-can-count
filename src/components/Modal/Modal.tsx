import { Backdrop, Fade, Modal as MuiModal } from "@mui/material";
import * as Styled from "./style";

interface ModalProps {
  children?: React.ReactElement;
  open: boolean;
  handleClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, open, handleClose }) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Styled.Box>{children}</Styled.Box>
      </Fade>
    </MuiModal>
  );
};
