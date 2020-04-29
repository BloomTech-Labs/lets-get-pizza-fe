import React from 'react'
import { Button } from 'semantic-ui-react'
import API from '../../../utils/API'


const DropzoneButtons = ({setOpen, image, setIsLoading}) => {
    const handleSubmit = e => {
        setIsLoading(true)
        e.preventDefault()
        const formData = new FormData()
        formData.append('image-raw', image)
        API.put('/users/images', formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                localStorage.setItem('curr_user', JSON.stringify(res.data))
                setOpen(false)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
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

