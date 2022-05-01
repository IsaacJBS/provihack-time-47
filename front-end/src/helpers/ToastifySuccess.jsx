import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastifySuccess(text) {
  return toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export default ToastifySuccess;
