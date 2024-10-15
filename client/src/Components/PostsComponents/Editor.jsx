import "../../Style.css";
import React from "react";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ handleQuillChange }) => {
  const quillRef = useRef(null);
  const ReactQuillmodules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  return (
    <div
      style={{ backgroundColor: "#F0F1F8", border: "1px solid #ddd" }}
      className="editor-container w-full my-3 rounded-md min-h-8"
    >
      <ReactQuill
        theme="snow"
        onChange={handleQuillChange}
        placeholder="Write"
        modules={ReactQuillmodules}
        ref={quillRef}
      />
    </div>
  );
};

export default Editor;
