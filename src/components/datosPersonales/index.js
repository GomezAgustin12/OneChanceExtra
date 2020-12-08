import { Card } from 'antd';
import React from 'react';

const DatosPersonales = ({ user, handleFotoModal }) => (
  <Card size='small' className='profile-data'>
    {console.log(user)}
    <img
      key={user.user.id}
      className='profile-image'
      src={`https://onechancebucket.s3-sa-east-1.amazonaws.com/FotoPerfil/${
        user.user.id
      }.jpg?v=${Date.now()}`}
      alt='fotoPerfil'
      onClick={handleFotoModal}
      style={{ width: 180, height: 180 }}
    />

    <div style={{ justifySelf: 'end' }} className='exp-card-actions'></div>
    <div className='profile-personal'>
      <h1>{`${user.user.nombre} ${user.user.apellido}`}</h1>

      <p>{user.Facultad}</p>
      <p>{user.user.Provincia}, Argentina</p>
    </div>
  </Card>
);

export default DatosPersonales;
