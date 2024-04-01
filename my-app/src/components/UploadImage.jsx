import React, { useRef, useState } from "react";
import vitelogo from "../../public/vite.svg";

const UploadImage = () => {
  const [isImage, setIsImage] = useState("");
  const isclick = useRef(null)

  const onChangeHandler = (e) => {
    let file = e.target.files[0];
    // console.log("file: ", file);
    setIsImage(file);
  };

  const handleClick=() => {
    isclick.current.click()
  }

  //   console.log(isImage);
  return (
    <>
      <h1>Upload Image</h1>
      <div onClick={handleClick}>

      <input type="file" onChange={onChangeHandler} ref={isclick} style={ {display : "none"}}/>
      <img
        src={isImage ? URL.createObjectURL(isImage) : vitelogo}
        alt="not here"
        height="250px"
        />
        </div>
      {/* {isImage ? (
        <img src={URL.createObjectURL(isImage)} alt="not here" height="250px"/>
      ) : (
        "none"
      )} */}
    </>
  );
};

export default UploadImage;
