import { Rnd } from "react-rnd";
import { useState } from "react";
import { RiGradienterFill } from "react-icons/ri";

//Chakra UI
import "../styles/Handler.css";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";

const RenderImages = ({ source, getChosenImage, getHoveredImage }) => {
  const [showButton, setShowButton] = useState(false);

  return source.map((image, index) => {
    return (
      <ChakraProvider key={image.id}>
        <Rnd
          key={image.id}
          id={image.id}
          bounds=".boundWindow"
          minWidth="10%"
          minHeight="10%"
          lockAspectRatio={true}
          cancel=".cancel"
          className="panningDisabled"
          style={{
            background: `url(${image.blob})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onMouseEnter={() => {
            setShowButton({ condition: true, id: image.id });
            getHoveredImage(image.blob);
          }}
          onMouseLeave={() => {
            setShowButton({ condition: false, id: image.id });
            getHoveredImage(null);
          }}
        >
          <img src={image.blob} alt={image.id} className="selector" />
          <Button
            id={index}
            colorScheme="teal"
            variant="solid"
            fontSize="15pt"
            size="xs"
            position="absolute"
            top="5px"
            left="5px"
            onClick={() => {
              getChosenImage(image.id);
            }}
            className={
              showButton.condition && showButton.id === image.id
                ? "visible"
                : "invisible"
            }
          >
            <RiGradienterFill />
          </Button>
        </Rnd>
        <Box position="fixed" bottom="30px" left="25px"></Box>
      </ChakraProvider>
    );
  });
};

export default RenderImages;
