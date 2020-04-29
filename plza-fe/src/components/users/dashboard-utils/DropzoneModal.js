import React, { useState } from 'react'
import { Modal, Header, Image } from 'semantic-ui-react'
import DropzoneButtons from './DropzoneButtons.js'
import '../dropzone.css'
import DropzoneComp from './Dropzone'
import { LoadingLottie } from './LoadingLottie.js'

const DropzoneModal = ()  => {
    const user = JSON.parse(localStorage.getItem('curr_user'))
    const [preview, setPreview] = useState(user.profile_image)
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
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
            {isLoading ? <LoadingLottie /> : <DropzoneComp preview={preview} setPreview={setPreview} setImage={setImage}/>}
        </Modal.Content>
        <Modal.Actions>
            <DropzoneButtons image={image} setOpen={setOpen} setIsLoading={setIsLoading}/>
        </Modal.Actions>
      </Modal>
    );
}
export default DropzoneModal