import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CommonDialog = ({
  open,
  onClose,
  dialogTitle,
  dialogContent,
  dialogActions,
  maxWidth = "md",
  fullWidth = true,
  showCloseButton = true,
  showActions = true,
  primaryAction,
  secondaryAction,
  primaryActionText = "Save",
  secondaryActionText = "Cancel",
  primaryActionColor = "primary",
  secondaryActionColor = "inherit",
  primaryActionVariant = "contained",
  secondaryActionVariant = "outlined",
  onPrimaryAction,
  onSecondaryAction,
  isPrimaryActionLoading = false,
  isSecondaryActionLoading = false,
  primaryActionDisabled = false,
  secondaryActionDisabled = false
}) => {
  const handlePrimaryAction = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    }
  };

  const handleSecondaryAction = () => {
    if (onSecondaryAction) {
      onSecondaryAction();
    } else {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      aria-labelledby="common-dialog-title"
      aria-describedby="common-dialog-description"
    >
      {open && (
        <DialogTitle 
          id="common-dialog-title" 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "1.5rem 1.5rem 0 1.5rem",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#1e293b"
          }}
        >
          {dialogTitle}
          {showCloseButton && (
            <IconButton 
              onClick={onClose} 
              sx={{ 
                color: "#6b7280",
                "&:hover": {
                  backgroundColor: "#f3f4f6"
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      {open && (
        <DialogContent sx={{ padding: "1.5rem" }}>
          {dialogContent}
        </DialogContent>
      )}

      {showActions && open && (
        <DialogActions sx={{ padding: "0 1.5rem 1.5rem 1.5rem", display: "flex", justifyContent: "flex-end", width: "100%" }}>
          {dialogActions ? (
            dialogActions
          ) : (
            <Stack direction="row" spacing={2} sx={{ width: "100%",display: "flex", justifyContent: "flex-end", width: "100%" }}>
              <Button
                variant={secondaryActionVariant}
                onClick={handleSecondaryAction}
                disabled={isSecondaryActionLoading || secondaryActionDisabled}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  borderColor: "#d1d5db",
                  color: "#374151",
                  "&:hover": {
                    borderColor: "#9ca3af",
                    backgroundColor: "#f9fafb"
                  }
                }}
              >
                {isSecondaryActionLoading ? "Loading..." : secondaryActionText}
              </Button>
              {primaryAction && (
                <Button
                  variant={primaryActionVariant}
                  color={primaryActionColor}
                  onClick={handlePrimaryAction}
                  disabled={isPrimaryActionLoading || primaryActionDisabled}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    backgroundColor: primaryActionColor === "error" ? "#ef4444" : "#3b82f6",
                    "&:hover": {
                      backgroundColor: primaryActionColor === "error" ? "#dc2626" : "#2563eb"
                    }
                  }}
                >
                  {isPrimaryActionLoading ? "Loading..." : primaryActionText}
                </Button>
              )}
            </Stack>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CommonDialog;
