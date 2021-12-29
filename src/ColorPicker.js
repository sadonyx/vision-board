import { SketchPicker } from "react-color";
import { useEffect, useState } from "react/cjs/react.development";

//Styling
import { ChakraProvider, Box } from "@chakra-ui/react";

//Components
import { useColorContext, useColorUpdateContext } from "./ColorContext";

const ColorPicker = ({ eyedrop_rgb, eyedrop_hex }) => {
  const { selectedColor } = useColorContext();
  const { handleEyedropColor, handleSelectedColor } = useColorUpdateContext();

  const [state, setState] = useState({
    displayColorPicker: false,
    color: {
      rgb: "rgb(255, 255, 255)",
      hex: "#ffffff",
    },
  });

  const { displayColorPicker, color } = state;

  const handleClick = () => {
    setState((prev) => {
      return { ...prev, displayColorPicker: true };
    });
  };

  const handleClose = () => {
    setState((prev) => {
      return { ...prev, displayColorPicker: false };
    });
  };

  const handleChange = (color) => {
    let toString = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
    setState((prev) => {
      return { ...prev, color: { rgb: toString, hex: color.hex } };
    });
    handleSelectedColor(color);
  };

  useEffect(() => {
    if (color.rgb !== eyedrop_rgb) {
      setState((prev) => {
        return { ...prev, color: { rgb: eyedrop_rgb, hex: eyedrop_hex } };
      });
      handleEyedropColor(eyedrop_rgb, eyedrop_hex);
    }
  }, [eyedrop_rgb]);

  return (
    <ChakraProvider>
      <Box
        w={"40px"}
        h={"40px"}
        borderRadius={"10px"}
        padding={"3px"}
        bg={"gray"}
        alignContent={"center"}
      >
        <Box
          bg={selectedColor.rgb}
          borderRadius={"8px"}
          w={"34px"}
          h={"34px"}
          onClick={() => handleClick()}
        >
          {displayColorPicker ? (
            <Box
              style={{
                position: "relative",
                zIndex: "auto",
                bottom: "19.2rem",
                right: "13.5rem",
              }}
              onMouseLeave={handleClose}
            >
              <SketchPicker color={selectedColor} onChange={handleChange} />
            </Box>
          ) : null}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ColorPicker;
