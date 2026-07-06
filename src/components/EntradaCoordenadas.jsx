import React from "react";

export default function EntradaCoordenadas({ titulo, x, setX, y, setY}) {
    return (
        <div>
            <h3>{titulo}</h3>
            <label>
                X: <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
            </label>
            <br />
            <label>
                Y: <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
            </label>
        </div>
    );
}