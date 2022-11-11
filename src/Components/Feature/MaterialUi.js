import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContentPopup from "./ContentPopup";

export const Custom = ({ name, onClose }) => {
  return (
    <DialogTitle>
      {name}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default function MaxWidthDialog({ data, IndexShow, handleClose, open }) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <Custom name={data[IndexShow].name} onClose={handleClose} />

        <DialogContent>
          <ContentPopup data={data[IndexShow]} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
