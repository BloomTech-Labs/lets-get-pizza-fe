import React, {useCallback} from 'react'
import ReactDropZone from 'react-dropzone'
import '../dropzone.css'

const DropzoneComp = ({preview, setPreview, setImage, error}) => {
    
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
            className={isDragActive ? `drag-active img-drop` : `img-drop`}
            {...getRootProps()}
            >
            <input
                className="img-input"
                {...getInputProps()}
                style={{ display: "inline-block" }}
            />
            {preview && <img src={preview} alt='user profile'/>}
            </div>
            {isDragActive ? (
            <p className="drop-text">Release the image file here</p>
            ) : (
            <p className="drop-text">
                Drag 'n' drop an image here or click to select an image
            </p>
            )}
            {error ? <p className='error'>There was an error uploading your image</p> : null}
        </section>
        )}
    </ReactDropZone>
    )
}

export default DropzoneComp