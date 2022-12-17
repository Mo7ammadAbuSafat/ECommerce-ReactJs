import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContentPopup from "./content/ContentPopup";

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

export default function MaxWidthDialog({ data, IdShow, handleClose, open }) {
  const index = data.findIndex((item) => item.id == IdShow);
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
      >
        <Custom name={data[index]?.name} onClose={handleClose} />

        <DialogContent>
          <ContentPopup data={data[index]} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
