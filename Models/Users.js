module.exports = (Seq, DataTypes) => {
    const User = Seq.define('User', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: DataTypes.STRING(1234),
            allowNull: false
        },
        Address: {
            type: DataTypes.STRING(1234),
            allowNull: false
        },
        Phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        Role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DOB: {
            type: DataTypes.DATE,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        }
    })

    return User;
}
