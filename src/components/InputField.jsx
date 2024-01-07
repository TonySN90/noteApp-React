import { useState } from "react";
import Button from "./button";
import InputTitle from "./InputTitle";
import InputTextarea from "./inputTextarea";
import InputColor from "./InputColor";

export default function InputField({
  openInputField,
  onOpenInputField,
  titleInput,
  onTitleInput,
  textInput,
  onTextInput,
  colorInput,
  onColorInput,
}) {
  return (
    <section id="inputField" style={{ width: openInputField + "%" }}>
      <InputTitle titleInput={titleInput} onTitleInput={onTitleInput} />
      <InputTextarea textInput={textInput} onTextInput={onTextInput} />
      <div className="button__area">
        <Button buttonTyp="arrow-left" handler={onOpenInputField}></Button>
        <Button buttonTyp="download"></Button>
        <Button buttonTyp="trash"></Button>
        <InputColor colorInput={colorInput} onColorInput={onColorInput} />
      </div>
    </section>
  );
}
