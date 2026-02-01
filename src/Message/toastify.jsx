// toastify.jsx
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

// Toastify Container (use once in your App.jsx)
export const ToastifyContainer = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

// Toast functions with Font Awesome icons
export const showSuccess = (message) =>
  toast.success(message, {
    icon: <FontAwesomeIcon icon={faCircleCheck} />,
  });

export const showError = (message) =>
  toast.error(message, {
    icon: <FontAwesomeIcon icon={faCircleExclamation} />,
  });

export const showInfo = (message) =>
  toast.info(message, {
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
  });

export const showWarning = (message) =>
  toast.warn(message, {
    icon: <FontAwesomeIcon icon={faTriangleExclamation} />,
  });
