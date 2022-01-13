import "./styles/App.css";
import ImgHandler from "./components/ImgHandler";
import ColorProvider from "./context/ColorContext";
import TextProvider from "./context/TextContext";

function App() {
  return (
    <ColorProvider>
      <TextProvider>
        <ImgHandler />
      </TextProvider>
    </ColorProvider>
  );
}

export default App;
