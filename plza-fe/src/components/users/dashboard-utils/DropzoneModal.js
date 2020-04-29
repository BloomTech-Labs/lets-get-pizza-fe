import React, { useState } from 'react'
import { Modal, Header, Image } from 'semantic-ui-react'
import ModalButtons from './DropzoneButtons.js'
import '../dropzone.css'
import DropzoneComp from './Dropzone'

const DropzoneModal = ()  => {
    const user = JSON.parse(localStorage.getItem('curr_user'))
    const [preview, setPreview] = useState(user.profile_image)
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)
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
            <DropzoneComp 
                preview={preview}
                setPreview={setPreview}
                setImage={setImage}
            />
        </Modal.Content>
        <Modal.Actions>
            <ModalButtons 
                image={image}
                setOpen={setOpen}
            />
        </Modal.Actions>
      </Modal>
    );
}

export default DropzoneModal