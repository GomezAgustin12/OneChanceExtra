import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Divider } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';

const ExperienceCard = ({ experience = {}, onEdit, onRemove }) => {
	const handleEdit = () => onEdit(experience);
	const handleRemove = () => onRemove(experience.id);
	return (
		<>
			<Divider />
			<div className="exp-card-container">
				<div className="exp-card-details">
					<p className="profile-role">{experience.Puesto}</p>
					<p className="profile-company">{experience.Empresa}</p>
					<p className="profile-period">{`${dayjs(
						experience.FechaInicio,
						'MMMM YY'
					)
						.locale('es')
						.format('MMMM YY')} - ${dayjs(experience.FechaFin, 'MMMM YY')
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

export default ExperienceCard;
