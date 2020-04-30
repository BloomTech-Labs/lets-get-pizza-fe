import React from 'react'
import { Button } from 'semantic-ui-react'
import API from '../../../utils/API'


const DropzoneButtons = ({setOpen, image, setIsLoading, setError}) => {
    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)
        
        // Creating new instance of form-data
        const formData = new FormData()
        // Adding a key-value pair to the formData object
        formData.append('image-raw', image)
        // set header `Content-Type` to `multipart/form-data` 
        API.put('/users/images', formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                localStorage.setItem('curr_user', JSON.stringify(res.data))
                setOpen(false)
                setIsLoading(false)
                setError(false)
            })
            .catch(err => {
                setError(true)
                setIsLoading(false)
            })
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

