module.exports = function (sequelize, DataTypes) {
    const Lecturer = sequelize.define(
        "courses",
        {
            lecturerName: DataTypes.STRING
        },
        {
            tableName: "lecturers",
            timestamps: false
        }
    );

    Lecturer.associate = function (models) {
        Lecturer.hasOne(models.courses, {
            foreignKey: "lecturerId",
            as: "courses"
        });
    };

    return Lecturer;
};