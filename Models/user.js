module.exports = (Seq, DataTypes) => {
    const user = Seq.define("User", {
        Name: {
            type:DataTypes.STRING(15), allowNull: false
        },
        Email: {
            type:DataTypes.STRING(50), allowNull: false
        },
        Password: {
            type:DataTypes.STRING(50), allowNull: false
        },
        PhoneNumber: {
            type:DataTypes.INTEGER(12), allowNull: false
        }
    });

    return user;
}
