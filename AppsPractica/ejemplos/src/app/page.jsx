"use client";
import { useState } from "react";
import "./globals.css";

// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [pal1, setPal1] = useState("");
  const [pal2, setPal2] = useState("");

  // const users = await getUsers();

  return (
    // hacer una aplicacion web que muestre el texto en rojo
    <div className="rojo">
      texto en rojo
      {/* hacer un contador */}
      <div className="separar">
        <button
          onClick={() => setCount(count + 1)}
        >
          Contador: {count}
        </button>
      </div>
      {/* hacer una app que multiplique dos numeros ingresados por el usuario */}
      <div className="separar">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <h3>Resultado: {num1 * num2}</h3>
      </div>
      mas texto en rojo
      {/* Desarrolle una app que calcule el porcentaje que representa un valor por sobre otro (ingresado por el user) */}
      <div className="separar">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <h3>Porcentaje: {(num1 / num2) * 100}%</h3>
      </div>
      {/* Formulario de registro: Implementa un formulario con campos de nombre, correo y contraseña, y muestra una alerta con los datos ingresados al enviarlo. */}
      <div className="separar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              `Nombre: ${e.target[0].value}\nCorreo: ${e.target[1].value}\nContraseña: ${e.target[2].value}`
            );
          }}
        >
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Enviar</button>
        </form>
      </div>
      {/* Fetch de datos: Usa fetch o axios para consumir una API pública (como https://jsonplaceholder.typicode.com/users) y muestra los datos en una lista. */}
      {/* <div className="separar">
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div> */}
      {/* Hacer una app que muestre una imagen */}
      <div className="separar">
        <img
          src="https://via.placeholder.com/600/771796"
          alt="img"
          width="150"
          height="150"
        />
      </div>
      {/* concatenar dos palabras y mostrarlas en una vista */}
      <div className="separar">
        <input type="text" onChange={(e) => setPal1(e.target.value)} />
        <input type="text" onChange={(e) => setPal2(e.target.value)} />
        <h3>
          Palabras concatenadas: {pal1} {pal2}
        </h3>
      </div>
    </div>
  );
}
