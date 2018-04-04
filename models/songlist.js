module.exports = function(sequelize, DataTypes) {
    let SongList = sequelize.define('songlist', {
        artist: DataTypes.STRING,
        songTitle: DataTypes.STRING
    })

    return SongList;
}