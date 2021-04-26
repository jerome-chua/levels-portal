export default function jobModel(sequelize, DataTypes) {
  return sequelize.define('job', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    companyId: {
      references: {
        model: 'companies',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    link: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    yearsRequired: {
      type: DataTypes.INTEGER,
    },
    minSalary: {
      type: DataTypes.INTEGER,
    },
    maxSalary: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    closingAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, { underscored: true });
}
