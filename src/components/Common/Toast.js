import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export { toast };

export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="colored"
      style={{
        width: "300px",  // Reduce width
        fontSize: "14px", // Reduce font size
      }}
      toastStyle={{
        margin: "4px 0",  // Reduce margin between toasts
        padding: "8px",   // Reduce padding inside toast
        minHeight: "40px" // Reduce minimum height
      }}
    />
  );
};