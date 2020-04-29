import React from 'react'
import { Button } from 'semantic-ui-react'
import API from '../../../utils/API'


const ModalButtons = ({setOpen, image}) => {
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image-raw', image)
        API.put('/users/images', formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
                setOpen(false)
                localStorage.setItem('curr_user', JSON.stringify(res.data))
            })
            .catch(err => console.log(err))
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

export default ModalButtons

