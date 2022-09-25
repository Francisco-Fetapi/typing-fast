import { useState } from "react";

export default function useBoolean(defaultOpen?: boolean) {
  const [open, setOpen] = useState(defaultOpen || false);

  return {
    open,
    handleOpen: () => {
      setOpen(true);
    },
    handleClose: () => {
      setOpen(false);
    },
  };
}
