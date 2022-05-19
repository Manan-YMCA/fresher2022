import React, { useState, useEffect, useRef } from "react";
import { BiCloudUpload } from "react-icons/bi";
import "./style.css";

function removeItems(arr, item) {
  for (var i = 0; i < item; i++) {
    arr.pop();
  }
}

function useFiles({ initialState = [], maxFiles }) {
  const [state, setstate] = useState(initialState);
  function withBlobs(files) {
    const destructured = [...files];
    if (destructured.length > maxFiles) {
      const difference = destructured.length - maxFiles;
      removeItems(destructured, difference);
    }
    const blobs = destructured
      .map((file) => {
        if (file.type.includes("image")) {
          console.log("image");
          file.preview = URL.createObjectURL(file);
          return file;
        }
        console.log("not image");
        return null;
      })
      .filter((elem) => elem !== null);

    setstate(blobs);
  }
  return [state, withBlobs];
}

const ImageUploadBox = ({ fileURL, onDrop, maxFiles = 1 }) => {
  const [over, setover] = useState(false);
  const [files, setfiles] = useFiles({ maxFiles });
  const $input = useRef(null);
  useEffect(() => {
    if (onDrop) {
      onDrop(files);
    }
  }, [files]);
  return (
    <>
      <div className="grid grid-cols-1 gap-6   mx-4">
        <div
          onClick={() => {
            $input.current.click();
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.persist();
            setfiles(e.dataTransfer.files);
            setover(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setover(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setover(false);
          }}
          className={over ? "upload-container over" : "upload-container"}
        >
          <div className="flex items-center justify-center gap-2 h-full text-[15px] md:text-[24px]">
            <BiCloudUpload className="text-[22px] md:text-[32px]" />
            <h2>Drop/Select picture here!</h2>
          </div>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            ref={$input}
            onChange={(e) => {
              setfiles(e.target.files);
            }}
            multiple={maxFiles > 1}
          />
        </div>
        {files.length !== 0 && (
          <div className="h-[10rem] object-cover overflow-hidden w-full">
            {files.map((file) => (
              <img
                className="h-full rounded-lg"
                key={file.name + "file"}
                src={file.preview}
                alt="your file"
              />
            ))}
          </div>
        )}
        {fileURL && (
          <div className="h-[10rem] object-cover overflow-hidden w-full">
            <img
              className="h-full rounded-lg"
              src={fileURL}
              alt="your file"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploadBox;
