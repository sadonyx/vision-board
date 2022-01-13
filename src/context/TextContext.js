import { useContext, useState, createContext } from "react";
import { useColorContext } from "./ColorContext";
import { nanoid } from "nanoid";

const TextContext = createContext();
const TextUpdateContext = createContext();

export function useTextContext() {
  return useContext(TextContext);
}

export function useTextUpdateContext() {
  return useContext(TextUpdateContext);
}

const TextProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const { selectedColor } = useColorContext();

  const handleNewText = () => {
    setState((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          content: "text",
          fontSize: "11pt",
          readOnly: "false",
          changeTextColor: false,
          color: { rgb: "rgb(0,0,0)", hex: "#000000" },
        },
      ];
    });
  };

  const handleEditText = (text) => {
    let selectedText = text;

    setState((prev) => {
      return prev.filter((obj) => {
        return obj.id !== selectedText.id;
      });
    });

    setState((prev) => {
      return [
        ...prev,
        {
          id: selectedText.id,
          content: "yo",
          fontSize: selectedText.fontSize,
          readOnly: selectedText.readOnly,
          color: selectedText.color,
        },
      ];
    });
  };

  const handleChangeTextColor = (text_object) => {
    let selectedText = text_object;

    setState((prev) => {
      return [
        prev.filter((obj) => {
          return obj.id !== selectedText.id;
        }),
        {
          id: selectedText.id,
          content: selectedText.content,
          fontSize: selectedText.fontSize,
          readOnly: selectedText.readOnly,
          changeTextColor: !selectedText.changeTextColor,
          color: selectedText.color,
        },
      ];
    });
  };

  const handleTextColor = (text_object) => {
    let selectedText = text_object;

    console.log(selectedColor.rgb);

    setState((prev) => {
      return [
        prev.filter((obj) => {
          return obj.id !== selectedText.id;
        }),
        {
          id: selectedText.id,
          content: selectedText.content,
          fontSize: selectedText.fontSize,
          readOnly: selectedText.readOnly,
          changeTextColor: !selectedText.changeTextColor,
          color: selectedColor,
        },
      ];
    });
  };

  return (
    <TextContext.Provider value={{ state: state }}>
      <TextUpdateContext.Provider
        value={{
          handleNewText: handleNewText,
          handleEditText: handleEditText,
          handleTextColor: handleTextColor,
        }}
      >
        {children}
      </TextUpdateContext.Provider>
    </TextContext.Provider>
  );
};

export default TextProvider;
