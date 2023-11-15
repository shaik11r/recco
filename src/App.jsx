import HomePage from "./components/HomePage";
import { ModalProvider } from "styled-react-modal";
const App = () => {
  return (
    <>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </>
  );
};
export default App;
