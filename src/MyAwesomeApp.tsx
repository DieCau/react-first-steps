// Puedo tener las definiciones de mis variables por fuera del componente
const firstName = 'Diego';
const lastName = 'Caucota';
const favoriteGames = ['Fifa 2025', 'Roblox', 'Minecraft'];
const isActive = false;
const address = {
  zipCode: 'ABS-123',
  country: 'Argentina',
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      <p> {favoriteGames.join(', ')} </p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p>{JSON.stringify(address)}</p>
    </>
  );
};
