"use client";
import { useState, useEffect } from "react";
import Nya from "@/components/nombreYApellido";

export default function HomePage() {
  const [users, setUsers] = useState([]); // Estado para la lista de usuarios

  // Obtener usuarios al cargar la página
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      id: form.id.value,
      nombre: form.nombre.value,
      apellido: form.apellido.value,
    };
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setUsers(result); // Actualizar la lista de usuarios en pantalla
    form.reset(); // Limpiar el formulario
  };

  return (
    <div key="540">
      <Nya nom="Benjamín" ape="Elizalde" />
      <form onSubmit={onSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" required />
        <label>Nombre</label>
        <input type="text" name="nombre" required />
        <label>Apellido</label>
        <input type="text" name="apellido" required />
        <button type="submit">Enviar</button>
      </form>

      <h2>Usuarios Registrados:</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nombre:</strong> {user.nombre}</p>
          <p><strong>Apellido:</strong> {user.apellido}</p>
        </div>
      ))}
    </div>
  );
}