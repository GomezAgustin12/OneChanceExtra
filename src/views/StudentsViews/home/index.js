import { Card } from 'antd';

import React, { useEffect, useState } from 'react';
import { fetchOfertas } from '../../../api';

const StudentHome = () => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    fetchOfertas().then(res => setOfertas(res));
  }, []);

  return (
    <>
      {ofertas.map(oferta => (
        <div className='student-container'>
          <Card className='student-card'>
            <p>
              <strong>{oferta.Titulo}</strong>
            </p>
            <p>
              <strong>Fecha de Publicacion: </strong>
              {oferta.FechaPublicacion}
            </p>
            <p>
              <strong>Descripcion</strong>
            </p>
            <p>{oferta.Descripcion}</p>
            <p>
              <strong>Requisitos</strong>
            </p>
            <p>{oferta.Requisitos}</p>
          </Card>
        </div>
      ))}
    </>
  );
};

export default StudentHome;
