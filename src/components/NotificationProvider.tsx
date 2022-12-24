import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
type NotificationType = "success" | "error" | "warning" | "info";

type NotificationActions = {
  postNotification: (message: string, type: NotificationType) => void;
  closeNotification: () => void;
};

const NotificationContext = createContext<NotificationActions>({
  postNotification: () => {},
  closeNotification: () => {},
});

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState<NotificationType>("success");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const postNotification = useCallback((message: string, type: NotificationType = "success") => {
    setNotification(message);
    setNotificationType(type);
    setIsOpen(true);
  }, []);

  const closeNotification = handleClose;

  return (
    <>
      <NotificationContext.Provider value={{ postNotification, closeNotification }}>
        {children}
      </NotificationContext.Provider>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notificationType} sx={{ width: "100%" }}>
          {notification}
        </Alert>
      </Snackbar>
    </>
  );
};

export default NotificationProvider;

export const useNotification = () => {
  return useContext(NotificationContext);
};
