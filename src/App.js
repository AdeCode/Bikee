import Routers from "./routes";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <Routers/>
      <ToastContainer/>
    </AuthContextProvider>
  );
}

export default App;
