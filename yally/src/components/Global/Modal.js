import React from 'react';
import ModalView from './ModalTemplate'
import {useState, useEffect} from 'react';

const Modal = () => {

        const [modalVisible, setModalVisible] = useState(false)
        const openModal = () => {
          setModalVisible(true)
        }
        const closeModal = () => {
          setModalVisible(false)
        }

        return (
          <div>
            <button onClick={openModal}>Open Modal</button>
            {
              modalVisible && <ModalView
                visible={true}
                closable={true}
                maskClosable={true}
                onClose={closeModal}>로그아웃되었습니다.
                또 만나요!</ModalView>
            }
          </div>
        );
};

export default Modal;