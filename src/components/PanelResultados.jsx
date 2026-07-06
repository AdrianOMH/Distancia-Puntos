import React from "react";

export default function PanelResultados({ distancia, puntoIntermedioX, puntoIntermedioY, pendiente }) {
    return (
        <div>
            <h3>Resultados</h3>
            <p><strong>Distancia:</strong> {distancia}</p>
            <p><strong>Punto Intermedio:</strong> ({puntoIntermedioX}, {puntoIntermedioY})</p>
            <p><strong>Pendiente:</strong> {pendiente}</p>
        </div>
    );
}