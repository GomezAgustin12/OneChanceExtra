import React from 'react';
import { Button, Card, Divider } from 'antd';
import './style.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(state => state.user);
  console.log(user);

  return (
    <>
      <Card size='small' className='profile-data'>
        <img
          className='profile-image'
          width={200}
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          alt='profile'
        />
        <div className='profile-personal'>
          <h1>{`${user.user.nombre} ${user.user.apellido}`}</h1>
          <p>{user.Facultad}</p>
          <p>Corrientes, Argentina</p>
        </div>
      </Card>
      <Card className='profile-resume'>
        <h1>RESUMEN</h1>
        <Divider />
        <p>
          I'm an Systems Analist, and an Information System Engineer student,
          working on web development, especially with MERN (MongoDB, Node js and
          React js) stack. Always studing and trying to keep learning something
          new every day, and continuously improve.
        </p>
      </Card>
      <Card className='profile-resume'>
        <h1>Experiencias</h1>
        <Divider />
        <p className='profile-role'>Desarrollador</p>
        <p className='profile-company'>Devlights</p>
        <p className='profile-period'>Enero 2020 - Actualidad</p>
        <Divider />
        <p className='profile-role'>Administrador de Redes</p>
        <p className='profile-company'>Comytel</p>
        <p className='profile-period'>Enero 2018 - Diciembre 2020</p>
        <Divider />
        <Button icon={<PlusCircleOutlined />}>Agregar Experiencia</Button>
      </Card>
      <Card size='small' className='profile-resume'>
        <h1>Educacion</h1>
        <Divider />
        <p>
          I'm an Systems Analist, and an Information System Engineer student,
          working on web development, especially with MERN (MongoDB, Node js and
          React js) stack. Always studing and trying to keep learning something
          new every day, and continuously improve.
        </p>
        <Divider />
        <Button icon={<PlusCircleOutlined />}>Agregar Experiencia</Button>
      </Card>
    </>
  );
};

export default Profile;
