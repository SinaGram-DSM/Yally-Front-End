import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SuccessToast = (text) => {
  toast.success(text, {
    autoClose: 4000,
  });
};

export const ErrorToast = (text) => {
  toast.error(text, {
    autoClose: 4000,
  });
};

export const WarningToast = (text) => {
  toast.warning(text, {
    autoClose: 4000,
  });
};
