import React from 'react'
import './ModalPhones.scss'

type ModalProps = {
    modalstatus: boolean
    // setModalActive: (modalstatus: boolean) => void
}

const ModalPhones = ({ modalstatus }: ModalProps) => {
    return (
        <div
            className="modal-phones-modal"
            // onClick={() => setModalActive(false)}
        >
            <div className="modal-phones-content">ModalPhones</div>
        </div>
    )
}

export default ModalPhones

// {Active, setActive}
