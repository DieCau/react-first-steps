// Importar para mis estilos las CSSProperties
import type { CSSProperties } from 'react';
// import { test } from 'vitest';

// Debo tener las definiciones de mis variables por fuera del componente
const firstName = 'Diego';
const lastName = 'Caucota';
const favoriteGames = ['Fifa 2025', 'Roblox', 'Minecraft'];
const isActive = false;
const address = {
  zipCode: 'ABS-123',
  country: 'Argentina',
};
const myStyles: CSSProperties = {
  backgroundColor: '#ebb6b6ff',
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop: 50,
};

// Testear componente
export const MyAwesomeApp = () => {
  return (
    <>
      <h1 data-testid='first-name-title'> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(', ')} </p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};
