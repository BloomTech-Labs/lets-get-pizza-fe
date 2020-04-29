import React, {useCallback} from 'react'
import ReactDropZone from 'react-dropzone'
import '../dropzone.css'

const DropzoneComp = ({preview, setPreview, setImage}) => {
    const onDrop = useCallback(files => {
        setImage(files[0])
        files.map(file => {
            const reader = new FileReader()
    
            reader.onload = (e) => {
                setPreview(e.target.result)
            }
            reader.readAsDataURL(file)
            return file
        })
    }, [])

    return(
        <ReactDropZone onDrop={onDrop} accept={"image/*"}>
        {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
            <div
            className={isDragActive ? "drag-active " : "" + "img-drop"}
            {...getRootProps()}
            >
            <input
                className="img-input"
                {...getInputProps()}
                style={{ display: "inline-block" }}
            />
            {preview && <img src={preview} />}
            </div>
            {isDragActive ? (
            <p className="drop-text">Release the image file here</p>
            ) : (
            <p className="drop-text">
                Drag 'n' drop an image here or select to upload an image
            </p>
            )}
        </section>
        )}
    </ReactDropZone>
    )
}

export default DropzoneComp