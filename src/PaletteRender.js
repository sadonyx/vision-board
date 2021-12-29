import { useState } from "react";
import { Gradient } from "react-gradient";

//Styling
import "./Handler.css";
import { ChakraProvider, Circle, Spacer, Flex, Box } from "@chakra-ui/react";

//Context
import { useColorUpdateContext } from "./ColorContext";

const PaletteHandler = ({ color_object, retrieveSwatch }) => {
  const [selectedSwatch, setSelectedSwatch] = useState({});

  const { handleSelectedColor } = useColorUpdateContext();

  const swatches = [
    color_object[0],
    color_object[1],
    color_object[2],
    color_object[3],
    color_object[4],
    color_object[5],
    color_object[6],
    color_object[7],
    color_object[8],
    color_object[9],
  ];

  const gradient = [
    [color_object[0], color_object[1]],
    [color_object[2], color_object[3]],
    [color_object[4], color_object[5]],
    [color_object[6], color_object[7]],
    [color_object[8], color_object[9]],
  ];

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const getSwatch = (hex) => {
    let swatch = { rgb: hexToRgb(hex), hex: hex };
    setSelectedSwatch(swatch);
  };

  const generateSwatches = (swatches) => {
    return swatches.map((color) => {
      return (
        <ChakraProvider key={color}>
          <Circle
            size="40px"
            bg={color}
            cursor="pointer"
            title={`Click to copy hex value to Color Picker. (${color})`}
            //onClick will copy the hexvalue of the swatch selected
            onMouseOver={() => getSwatch(color)}
            onClick={() => {
              retrieveSwatch(selectedSwatch);
              handleSelectedColor(selectedSwatch);
            }}
          />
          <Spacer />
        </ChakraProvider>
      );
    });
  };

  const generateGradient = (gradient) => {
    return (
      <Gradient
        gradients={gradient}
        property="background"
        gradientType="linear"
        element="div"
        angle="30deg"
        transitionType="sequential"
        duration="1500"
        className="gradient"
      ></Gradient>
    );
  };

  return (
    <ChakraProvider key={color_object.id}>
      <Box>
        <Flex
          direction={"column"}
          bg={"rgba(255, 255, 255, 0.25)"}
          padding={"10px"}
          borderRadius={"15px"}
        >
          <Flex direction={"row"}>{generateSwatches(swatches)}</Flex>
          <Box marginTop={"10px"} width={"100%"}>
            {generateGradient(gradient)}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default PaletteHandler;
