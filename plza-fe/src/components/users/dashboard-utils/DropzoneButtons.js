import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { uploadImage, deleteImage } from '../../../redux/actions/userActions'


const DropzoneButtons = ({setOpen, image, isDelete, setIsDelete}) => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        // Creating new instance of form-data
        const formData = new FormData()
        // Adding a key-value pair to the formData object
        formData.append('image-raw', image)
        // dispatch `deleteImage` if isDelete is true, else dispatch uploadImage
        isDelete ? dispatch(deleteImage(setOpen)) : dispatch(uploadImage(formData, setOpen))
        setIsDelete(false)
    }
    return(
    <>
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
    </>
    )
}

export default DropzoneButtons