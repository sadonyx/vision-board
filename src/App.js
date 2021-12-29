import "./App.css";
import ImgHandler from "./ImgHandler";
import ColorProvider from "./ColorContext";
import TextProvider from "./TextContext";

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
