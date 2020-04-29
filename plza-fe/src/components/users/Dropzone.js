import React, {useCallback, useState} from 'react'
import { Modal, Header, Button, Image } from 'semantic-ui-react'
import ReactDropZone from 'react-dropzone'
import './dropzone.css'
import API from '../../utils/API'

const DropZone = ()  => {
    const user = JSON.parse(localStorage.getItem('curr_user'))
    const [preview, setPreview] = useState(user.profile_image)
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)
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
    const handleSubmit = e => {
        const formData = new FormData()
        formData.append('image-raw', image)
        API.put('/users/images', formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                setOpen(false)
                localStorage.setItem('curr_user', JSON.stringify(res.data))
            })
            .catch(err => console.log(err))
    }
    return (
      <Modal 
      size='large' 
      open={open} 
      onClose={() => setOpen(false)}  
      closeOnDimmerClick={false}
      centered={false} 
      closeIcon
      trigger={<Image avatar size={'tiny'} src={`${user.profile_image}`} onClick={() => setOpen(true)}/>}
      >
        <Header>Upload Image</Header>
        <Modal.Content>
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
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
                Close
            </Button>
            <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Submit'
            onClick={handleSubmit}
            />
        </Modal.Actions>
      </Modal>
    );
}

export default DropZone