import { Rnd } from "react-rnd";
import { EditText } from "react-edit-text";

//Chakra UI
import "../styles/Handler.css";
import { ChakraProvider, Button, Text } from "@chakra-ui/react";

//Icons
import { CgColorBucket } from "react-icons/cg";

//Components
import { useTextContext, useTextUpdateContext } from "../context/TextContext";
import { useEffect } from "react/cjs/react.development";

const TextHandler = () => {
  const { state } = useTextContext();
  const { handleEditText, handleTextColor } = useTextUpdateContext();

  // const getFocus = (id) => {
  //   document.getElementById(id).focus();
  //   document.querySelector(id).addEventListener("keypress", function (e) {
  //     if (e.key === "Enter") {
  //       document.getElementById(id).blur();
  //     }
  //   });
  // };

  if (state) {
    return state.map((text) => {
      return (
        <ChakraProvider key={text.id}>
          <Rnd
            id={text.id}
            bounds=".boundWindow"
            minWidth="10%"
            minHeight="10%"
            lockAspectRatio={false}
            cancel=".cancel"
            className="panningDisabled"
          >
            <EditText
              id={text.id}
              name="textbox1"
              defaultValue={text.content}
              style={{
                padding: "10px",
                fontSize: "36px",
                color: text.color.rgb,
              }}
              className="panningDisabled"
            />
            <Button
              position="absolute"
              bottom="5px"
              right="5px"
              size="50px"
              colorScheme="teal"
              variant="solid"
              onClick={() => handleTextColor(text)}
            >
              <CgColorBucket />
            </Button>
          </Rnd>
        </ChakraProvider>
      );
    });
  } else {
    return null;
  }
};

export default TextHandler;
