import { useContext, useState, createContext } from "react";
import { useEffect } from "react";

const ColorContext = createContext();
const ColorUpdateContext = createContext();

export function useColorContext() {
  return useContext(ColorContext);
}

export function useColorUpdateContext() {
  return useContext(ColorUpdateContext);
}

const ColorProvider = ({ children }) => {
  const [state, setState] = useState({
    changeBackground: false,
    eyedropOnOff: false,
    backgroundColor: { rgb: "rgb(255, 255, 255)", hex: "#ffffff" },
    imageHover: {},
    selectedColor: { rgb: "rgb(255, 255, 255)", hex: "#ffffff" },
    eyedropColor: {},
  });

  const { changeBackground, selectedColor, eyedropColor } = state;

  const handleSelectedColor = (color) => {
    let toString = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
    setState((prev) => {
      return { ...prev, selectedColor: { rgb: toString, hex: color.hex } };
    });
  };

  const handleBackgroundColor = (selectedColor) => {
    setState((prev) => {
      return { ...prev, backgroundColor: selectedColor };
    });
  };

  const handleEyedropColor = (rgb, hex) => {
    setState((prev) => {
      return { ...prev, eyedropColor: { rgb, hex } };
    });
  };

  const handleChangeBackground = (boolean) => {
    setState((prev) => {
      return { ...prev, changeBackground: !boolean };
    });
  };

  useEffect(() => {
    if (changeBackground === true) {
      handleBackgroundColor(selectedColor);
    }
  }, [changeBackground, selectedColor]);

  useEffect(() => {
    if (Object.keys(eyedropColor).length > 0) {
      setState((prev) => {
        return { ...prev, selectedColor: eyedropColor };
      });
    }
  }, [eyedropColor]);

  return (
    <ColorContext.Provider value={state}>
      <ColorUpdateContext.Provider
        value={{
          handleBackgroundColor: handleBackgroundColor,
          handleEyedropColor: handleEyedropColor,
          handleChangeBackground: handleChangeBackground,
          handleSelectedColor: handleSelectedColor,
        }}
      >
        {children}
      </ColorUpdateContext.Provider>
    </ColorContext.Provider>
  );
};

export default ColorProvider;
