
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './router/routes'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <>
  <AppRoutes />
  <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
  </>
)
