import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import AppProvider from "./hooks";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />

      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
