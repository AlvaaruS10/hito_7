import React from 'react'

const Profile = () => {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Email: alvaro@desafiolatam.com</p>
      <button onClick={() => alert('Cerrar sesión')}>Cerrar sesión</button>
    </div>
  );
};

export default Profile
