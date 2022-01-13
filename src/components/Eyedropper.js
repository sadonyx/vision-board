import { EyeDropper } from "react-eyedrop";
import { useEffect, useState } from "react/cjs/react.development";

//Icons
import { CgColorPicker } from "react-icons/cg";

//Styling
import "../styles/Handler.css";
import { ChakraProvider, Box, Button, Flex, Spacer } from "@chakra-ui/react";

//Components
import ColorPicker from "./ColorPicker";
import { useColorUpdateContext } from "../context/ColorContext";

const EyeDrop = ({ imageHover }) => {
  const [eyedropState, setEyedropState] = useState({
    image: null,
    pickedColor: { rgb: "rgb(255, 255, 255)", hex: "#ffffff" },
    eyedropOnce: true,
  });

  const { handleEyedropColor } = useColorUpdateContext();

  const { eyedropOnce, image } = eyedropState;
  const { rgb, hex } = eyedropState.pickedColor;

  const handleChangeColor = ({ rgb, hex }) => {
    setEyedropState((prev) => {
      return { ...prev, pickedColor: { rgb, hex } };
    });
    handleEyedropColor(rgb, hex);
  };

  const toggleOnce = () => {
    setEyedropState((prev) => {
      return {
        ...prev,
        eyedropOnce: !eyedropState.eyedropOnce,
      };
    });
  };

  useEffect(() => {
    setEyedropState((prev) => {
      return { ...prev, imageHover };
    });
  }, [image]);

  return (
    <ChakraProvider>
      <Flex direction={"row"}>
        <ColorPicker eyedrop_rgb={rgb} eyedrop_hex={hex} />
        <Spacer />
        <Button colorScheme="teal" variant="solid">
          <Box fontSize={"16px"}>
            <CgColorPicker position={"fixed"} />
          </Box>
          <Box position={"absolute"} opacity={"0"} top={"0px"} left={"0px"}>
            <EyeDropper
              onChange={handleChangeColor}
              once={eyedropOnce}
              pickRadius={1}
              cursorActive="crosshair"
            />
          </Box>
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default EyeDrop;
