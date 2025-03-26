import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  
import Producto from "./producto";
import Venta from "./venta";
import Cliente from "./cliente";

function App() {
    return (
        <div className="app-container">
            <h1 className="titulo">CRM DE ROPA</h1>
            <div className="grid">
                <Producto />
                <Venta />
                <Cliente />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

