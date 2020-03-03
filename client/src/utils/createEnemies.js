function createEnemies() {
    var imgArray = ['https://i.imgur.com/AMTxanU.png', 'https://i.imgur.com/zbKsJcn.png', 'https://i.imgur.com/0wFzwD7.png', 'https://i.imgur.com/w76bnWB.png', 'https://i.imgur.com/AcfglfP.png', 'https://i.imgur.com/Z8A9VWZ.png', 'https://i.imgur.com/AhBAU2S.png', 'https://i.imgur.com/0wFzwD7.png', 'https://i.imgur.com/c6fymS1.png', 'https://i.imgur.com/MjlNEct.png', 'https://i.imgur.com/9hpZaNG.png']

    var Names = ['Alfonso', 'Matilda', 'Olaf', 'Leona', 'Merek', 'Carac', 'Ulric', 'Tybalt', 'Borin', 'Sadon', 'Terrowin', 'Rowan']

    var enemyName = Names[Math.floor(Math.random() * Names.length)]



    var enemyPic = imgArray[Math.floor(Math.random() * imgArray.length)]

    var enemyHP = Math.floor(Math.random() * 20) + 40
    var enemyAttack = Math.floor(Math.random() * 6) + 10

    console.log('enemyHP', enemyHP)

    var enemyArray = []

    for (var i = 0; i < 3; i++) {
        var enemyPic = imgArray[Math.floor(Math.random() * imgArray.length)]
        var enemyHP = Math.floor(Math.random() * 20) + 40
        var enemyAttack = Math.floor(Math.random() * 6) + 10
        var enemyName = Names[Math.floor(Math.random() * Names.length)]
        var enemy = {
            enemySrc: enemyPic,
            enemyHP: enemyHP,
            enemyMaxHP: enemyHP,
            enemyAttack: enemyAttack,
            enemyName: enemyName
        }
        enemyArray.push(enemy)
    }
    return enemyArray
}


module.exports = createEnemies


console.log('this is the new array we made!!', createEnemies())