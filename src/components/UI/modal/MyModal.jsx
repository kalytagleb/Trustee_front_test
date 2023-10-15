import React from 'react';
import cl from './MyModal.module.scss'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.modal];

    if (visible === true) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;