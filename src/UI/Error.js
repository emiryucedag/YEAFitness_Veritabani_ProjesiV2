import React, {useEffect, useState} from 'react';
import './App.css';

const ErrorAlert = ({ isVisible,message }) => {

    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
        setVisible(isVisible);
    }, [isVisible]);

    return (
        <>
            {visible &&
                <div className="modal-overlay">
                    <div className="error-alert modal">
                        <div className="errorIconWrapper">
                            <span className="close-btn">&times;</span>
                        </div>
                        <span className='error-text'>HATA</span>
                        <span className='error-message'>{message}</span>
                        <div className='okButton' onClick={() => setVisible(false)}>OK</div>
                    </div>
                </div>
            }
        </>
    );
};

export default ErrorAlert;