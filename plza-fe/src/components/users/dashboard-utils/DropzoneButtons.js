import React from 'react'
import { Button } from 'semantic-ui-react'
import API from '../../../utils/API'
import { useDispatch } from 'react-redux'
import { uploadImage } from '../../../redux/actions/userActions'


const DropzoneButtons = ({setOpen, image}) => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        // Creating new instance of form-data
        const formData = new FormData()
        // Adding a key-value pair to the formData object
        formData.append('image-raw', image)
        // set header `Content-Type` to `multipart/form-data` 
        dispatch(uploadImage(formData, setOpen))
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

