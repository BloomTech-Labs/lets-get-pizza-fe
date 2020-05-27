import React, { useState } from 'react'
import { Modal, Header, Image } from 'semantic-ui-react'
import DropzoneButtons from './DropzoneButtons.js'
import '../dropzone.css'
import Dropzone from './Dropzone'
import { LoadingLottie } from './LoadingLottie.js'
import { useSelector } from 'react-redux'

const DropzoneModal = ()  => {
    const [profile_image, error, isLoading] = useSelector(({user}) => [user.profile_image, user.error, user.isLoading])
    const [preview, setPreview] = useState(profile_image)
    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    return (
      <Modal 
      size='large' 
      open={open} 
      onClose={() => setOpen(false)}  
      closeOnDimmerClick={false}
      centered={false} 
      closeIcon
      trigger={<Image avatar size={'tiny'} src={`${profile_image}`} onClick={() => setOpen(true)}/>}
      >
        <Header>Upload Image</Header>
        <Modal.Content>
            {isLoading ? <LoadingLottie height={228} width={228}/> : <Dropzone error={error} preview={preview} setPreview={setPreview} setImage={setImage} setIsDelete={setIsDelete}/>}
        </Modal.Content>
        <Modal.Actions>
            <DropzoneButtons setIsDelete={setIsDelete} isDelete={isDelete} image={image} setOpen={setOpen}/>
        </Modal.Actions>
      </Modal>
    );
}
export default DropzoneModal