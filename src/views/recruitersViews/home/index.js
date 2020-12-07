import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../../../api';
import './styles.css';

const RecruiterHome = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents().then(res => setStudents(res));
  }, []);

  return (
    <>
      {students.map(student => (
        <div className='student-container'>
          <Card className='student-card'>
            <p>
              <strong>{`${student.user.nombre} ${student.user.apellido}`}</strong>
            </p>
            <p>{student.user.email}</p>
            <p>{student.Facultad}</p>
            <p>{student.Resumen}</p>
          </Card>
        </div>
      ))}
    </>
  );
};

export default RecruiterHome;
