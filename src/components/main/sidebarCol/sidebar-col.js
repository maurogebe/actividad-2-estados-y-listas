import React from 'react';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button>
        </div>
    )
}

export default SidebarCol;