import React, { useRef } from 'react'
// import useOutsideAlerter from '../../hooks/useOutsideModal'
import { ModalContainer, ModalSection } from './Modal.styles'

const MyModal = ({ handleClose, show, children }) => {
  const wrapperRef = useRef(null)
  // useOutsideAlerter(wrapperRef)

  // const [showModal] = useOutsideAlerter(wrapperRef)

  return (
    <ModalContainer show={show} ref={wrapperRef}>
      <ModalSection>
        {children}
        <button className="close" onClick={handleClose}>
          X
        </button>
      </ModalSection>
    </ModalContainer>
  )
}

export default MyModal
