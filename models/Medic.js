import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Medic = sequelize.define(
  'medics',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    services: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    certifications: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'activo'
    }
  },
  {
    timestamps: false
  }
);
