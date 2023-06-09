import React, { useState } from 'react';
import "../mensaje.css"

const Message = ({text }) => {
    const [showMessage, setShowMessage] = useState(false);

const handleClick = () => { 
    setShowMessage(!showMessage);
};

return (
    <div>
        <button onClick={handleClick}>¿ Que es ?</button> 
        {showMessage && <p className='mensaje'>{text}</p>}
    </div>
);
}   
    export default Message;
