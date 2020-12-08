import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Divider } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

const EducationCard = ({ education = {}, onEdit, onRemove }) => {
	const handleEdit = () => onEdit(education);
	const handleRemove = () => onRemove(education.id);
	return (
		<>
			<Divider />
			<div className="exp-card-container">
				<div className="exp-card-details">
					<p className="profile-role">{education.Curso}</p>
					<p className="profile-company">{education.Instituto}</p>
					<p className="profile-period">{`${dayjs(
						education.FechaInicio,
						'MMMM YY'
					)
						.locale('es')
						.format('MMMM YY')} - ${dayjs(education.FechaFin, 'MMMM YY')
						.locale('es')
						.format('MMMM YY')} `}</p>
				</div>
				<div className="exp-card-actions">
					<EditOutlined onClick={handleEdit} />
					<CloseOutlined onClick={handleRemove} />
				</div>
			</div>
		</>
	);
};

export default EducationCard;
