import React, { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador +1);
    };

    return (
        <div>
            <p>Você clicou: {contador}</p>
            <button onClick={incrementarContador}>Adicionar</button>
        </div>
    );
};

export default Contador;