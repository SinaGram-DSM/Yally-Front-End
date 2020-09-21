import React from 'react';
import {useEffect} from 'react'
import * as M from '../../assets/style/Global/ModalStyle'
import ModalBackground from './ModalBackground'

const ModalTemplate = ({className, onClose, maskClosable, closable, visible, children}) => {
    
    const onMaskClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose(e)
      }
    }
    
    const close = (e) => {
      if (onClose) {
        onClose(e)
      }
    }

    useEffect(() => {
      document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
      return () => {
        const scrollY = document.body.style.top
        document.body.style.cssText = `position: ""; top: "";`
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
          }
      }, [])

    return (
        <div>
          <M.modalOverlay visible={visible} />
            <M.modalWrapper className={className} onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
              <M.modalInner tabIndex="0" className="modal-inner">
                {closable && <div><M.closeButton className="modal-close" onClick={close}>X</M.closeButton></div>}
                {children}
              <ModalBackground modal></ModalBackground>
              </M.modalInner>
          </M.modalWrapper>
        </div>
    );
};

export default ModalTemplate;