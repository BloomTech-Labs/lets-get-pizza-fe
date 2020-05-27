import React, { useCallback } from "react";
import ReactDropZone from "react-dropzone";
import "../dropzone.css";
import { Icon } from "semantic-ui-react";

const DropzoneComp = ({
  preview,
  setPreview,
  setImage,
  error,
  setIsDelete,
}) => {
  const removeImage = (e) => {
    // stop propagation here to prevent file chooser from opening
    e.stopPropagation();
    // set the preview image to default image
    setPreview(
      "https://res.cloudinary.com/plza/image/upload/v1588043869/qxhdqbj4sthf57bdgltz.jpg"
    );
    //set isDelete to true
    setIsDelete(true);
  };

  const onDrop = useCallback((files) => {
    // Saving the image file to state
    setImage(files[0]);
    setIsDelete(false);

    files.map((file) => {
      // Reading the files and converting to datauri
      const reader = new FileReader();

      reader.onload = (e) => {
        // setting the converted image to state to allow for previews
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  return (
    <ReactDropZone onDrop={onDrop} accept={"image/*"}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            className={isDragActive ? `drag-active img-drop` : `img-drop`}
            {...getRootProps()}
          >
            <Icon
              onClick={removeImage}
              size="big"
              color="red"
              name="close"
              className="icon-position"
            />
            <input
              className="img-input"
              {...getInputProps()}
              style={{ display: "inline-block" }}
            />
            {preview && <img className='dropzone-image' src={preview} alt="user profile" />}
          </div>
          {isDragActive ? (
            <p className="drop-text">Release the image file here</p>
          ) : (
            <p className="drop-text">
              Drag 'n' drop an image here or click to select an image
            </p>
          )}
          {error ? (
            <p className="show-error">
              There was an error uploading your image
            </p>
          ) : null}
        </section>
      )}
    </ReactDropZone>
  );
};

export default DropzoneComp;
