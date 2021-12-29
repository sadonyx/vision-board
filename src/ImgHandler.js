import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { nanoid } from "nanoid";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { usePalette } from "color-thief-react";

//Styling
import "./Handler.css";
import { ChakraProvider, Box, Button } from "@chakra-ui/react";

//Icons
import { RiImageAddFill, RiCheckFill } from "react-icons/ri";
import { BsBoxArrowDownRight } from "react-icons/bs";
import { IoText } from "react-icons/io5";
import { CgColorBucket } from "react-icons/cg";

//Components
import RenderImages from "./ImgRender";
import PaletteHandler from "./PaletteRender";
import EyeDrop from "./Eyedropper";
import { useColorContext, useColorUpdateContext } from "./ColorContext";
import TextHandler from "./TextHandler";
import { useTextUpdateContext } from "./TextContext";

const ImgHandler = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const { backgroundColor, changeBackground } = useColorContext();
  const { handleChangeBackground } = useColorUpdateContext();

  const { handleNewText } = useTextUpdateContext();

  //Determines which color swatches should be shown
  const [chosenImage, setChosenImage] = useState();
  const getChosenImage = (chosenImage) => {
    setChosenImage(chosenImage);
  };

  //State used for eyedrop color picker
  const [imageHover, setImageHover] = useState();
  const getHoveredImage = (hoveredImage) => {
    setImageHover(hoveredImage);
  };

  //Get swatch from palette on-click
  const [selectedSwatch, setSelectedSwatch] = useState({});
  const retrieveSwatch = (selectedSwatch) => {
    setSelectedSwatch(selectedSwatch);
  };

  //Get color data from loaded image
  const { data } = usePalette(dataPlacementHolder(), 10, "hex");

  //Window dimensions
  const { height, width } = useWindowDimensions();

  //Data Handeling Functions
  function dataPlacementHolder() {
    return selectedImages.length === 0
      ? 0
      : selectedImages[selectedImages.length - 1].blob;
  }
  function filterArray(source, data) {
    let color_array = (source[source.length - 1].color_data = data);
    if (typeof color_array === "object") {
      return color_array;
    }
  }
  useEffect(() => {
    console.log("render");
    if (data) {
      setSelectedImages((prevImages) => [
        ...prevImages,
        filterArray(prevImages, data),
      ]);
      setSelectedImages((prevImages) =>
        prevImages.filter((object) => object.id)
      );
    }
    return () => {
      console.log("unmount");
    };
  }, [data]);

  const imageHandleChange = (e) => {
    //if file is selected...
    if (e.target.files) {
      //create an array out of the list of files, convert to blob and form new list of them
      const fileArray = Array.from(e.target.files).map((file) => {
        return { blob: URL.createObjectURL(file), id: nanoid() };
      });

      setSelectedImages((prevImages) => prevImages.concat(fileArray));

      //This is useful for refreshing the page and removing all previously uploaded files
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  return (
    <ChakraProvider>
      <TransformWrapper
        //initialization
        initialScale={0.5}
        minScale={0.5}
        maxScale={1}
        initialPositionX={width * 0.25}
        initialPositionY={height * 0.25}
        centerOnInit={true}
        centerZoomedOut={true}
        limitToBounds={true}
        //panning
        panning={{ excluded: ["panningDisabled", "wheelDisabled"] }}
        //scroll-wheel
        wheel={{ step: 0.1 }}
      >
        {({ resetTransform }) => (
          <React.Fragment>
            <Box
              bg="gray"
              className="panningDisabled wheelDisabled"
              overflow="hidden"
              w={width}
              h={height}
            >
              <TransformComponent>
                <Box
                  key="canvas"
                  flexDirection="row"
                  bg={backgroundColor.rgb}
                  h="56.25vmax"
                  w="100vmax"
                  className="boundWindow"
                >
                  <TextHandler />
                  <RenderImages
                    source={selectedImages}
                    getChosenImage={getChosenImage}
                    getHoveredImage={getHoveredImage}
                  />
                </Box>
              </TransformComponent>
              <Box position="fixed" bottom="20px" left="25px">
                {selectedImages.length > 0 && chosenImage ? (
                  <PaletteHandler
                    color_object={
                      selectedImages.find((object) => object.id === chosenImage)
                        .color_data
                    }
                    retrieveSwatch={retrieveSwatch}
                  />
                ) : null}
              </Box>
              <Box position={"fixed"} bottom={"220px"} right={"25px"}>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => {
                    handleChangeBackground(changeBackground);
                  }}
                >
                  {changeBackground ? <RiCheckFill /> : <CgColorBucket />}
                </Button>
              </Box>
              <Box position={"fixed"} bottom={"170px"} right={"25px"}>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => handleNewText()}
                >
                  <IoText />
                </Button>
              </Box>
              <Box
                position={"fixed"}
                bottom={"120px"}
                right={"25px"}
                w={"103px"}
              >
                <EyeDrop
                  imageHover={imageHover}
                  selectedSwatch={selectedSwatch}
                />
              </Box>
              <Box position="fixed" bottom="70px" right="25px">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => resetTransform()}
                >
                  <BsBoxArrowDownRight />
                </Button>
              </Box>
              <Box position="fixed" bottom="20px" right="25px">
                <Button
                  leftIcon={<RiImageAddFill />}
                  colorScheme="teal"
                  variant="solid"
                  fontSize="11pt"
                  className="hide_4_print"
                >
                  Upload
                  <input
                    type="file"
                    multiple
                    id="file"
                    accept="image/png, image/jpeg, image/gif"
                    onChange={imageHandleChange}
                    style={{
                      opacity: "0%",
                      position: "absolute",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </TransformWrapper>
    </ChakraProvider>
  );
};

export default ImgHandler;
