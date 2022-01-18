function gameObject() {
    let gameInfo = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
                }
            },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 16,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
    return gameInfo
}

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored(playerName) {
    let game = gameObject()
    for (let teamHomeOrAway in game) {
        let playerList = game[teamHomeOrAway].players
        for (let player in playerList) {
            if (player === playerName) {
                return playerList[player].points
            }
        }
    }
    
}

// console.log(numPointsScored('Brendan Haywood'))

function shoeSize(playerName) {
    let game = gameObject()
    for (let teamHomeOrAway in game) {
        let playerList = game[teamHomeOrAway].players
        for (let player in playerList) {
            if (player === playerName) {
                return playerList[player].shoe
            }
        }
    }
    
}

// console.log(shoeSize('Jason Terry'))

function teamColors(teamName) {
    let game = gameObject()
    for (let teamHomeOrAway in game) {
        let team = game[teamHomeOrAway]
        if (team.teamName === teamName)
        return team.colors
    }
}

// console.log(teamColors('Brooklyn Nets'))

function teamNames() {
    let game = gameObject()
    let teamArray = []
    for (let teamHomeOrAway in game) {
        let team = game[teamHomeOrAway]
        teamArray.push(team.teamName)
    }   
    return teamArray
}

// console.log(teamNames())

function playerNumbers(teamName) {
    let game = gameObject()
    let homeTeam = game.home
    let awayTeam = game.away
    let teamPlayers = homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players
    let playerNumbersList = []
    for (let player in teamPlayers) {
        playerNumbersList.push(teamPlayers[player].number)
        // debugger
        }
        return playerNumbersList
    }

// console.log(playerNumbers('Charlotte Hornets'))

function playerStats(playerName) {
    let game = gameObject()
    let homeTeamPlayers = game.home.players
    let awayTeamPlayers = game.away.players
    let allPlayers = {...homeTeamPlayers, ...awayTeamPlayers}
    return allPlayers[playerName]
}

// console.log(playerStats('Ben Gordon'))

function bigShoeRebounds() {
    let game = gameObject()
    let allPLayersObj = {...game.home.players, ...game.away.players}
    let playersArray = []
    let shoeSizes = []
    let biggestShoeSize = []
    let playerWithBiggestShoeSize = []
    for (let player in allPLayersObj) {
        shoeSizes.push(allPLayersObj[player].shoe)
        playersArray.push(player)
        // debugger
    }
    biggestShoeSize = Math.max(...shoeSizes)
    playerWithBiggestShoeSize = playersArray[shoeSizes.indexOf(biggestShoeSize)]
    return allPLayersObj[playerWithBiggestShoeSize].rebounds
    // debugger
}

// console.log(bigShoeRebounds())

function mostPointsScored() {
    let game = gameObject()
    let allPlayersObj = {...game.home.players, ...game.away.players}
    let playersArray = []
    let pointsArray = []
    let mostPoints = []
    let playerWithMostPoints = []
    for (let player in allPlayersObj) {
        playersArray.push(player)
        pointsArray.push(allPlayersObj[player].points)
        debugger
    }
    mostPoints = Math.max(...pointsArray)
    playerWithMostPoints = playersArray[pointsArray.indexOf(mostPoints)]
    debugger
    return playerWithMostPoints
}

// console.log(mostPointsScored())

function winningTeam() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    let game = gameObject()
    let homeTeamPlayers = game.home.players
    let awayTeamPlayers = game.away.players
    let homeTeamPointsArray = []
    let awayTeamPointsArray = []
    let homeTeamPointTotal = []
    let awayTeamPointsTotal = []
    let teamWithMostPoints = []
    for (let player in homeTeamPlayers) {
        homeTeamPointsArray.push(homeTeamPlayers[player].points)
        // debugger
    }
    for (let player in awayTeamPlayers) {
        awayTeamPointsArray.push(awayTeamPlayers[player].points)
        // debugger
    }
    homeTeamPointTotal = homeTeamPointsArray.reduce(reducer)
    awayTeamPointsTotal = awayTeamPointsArray.reduce(reducer)
    teamWithMostPoints = homeTeamPointTotal > awayTeamPointsTotal ? game.home.teamName : game.away.teamName
    return teamWithMostPoints
    // debugger
}

// console.log(winningTeam())

function playerWithLongestName() {
    let game = gameObject()
    // debugger
    let allPlayersObj = {...game.home.players, ...game.away.players}
    // debugger
    let playerNames = Object.keys(allPlayersObj)
    // debugger
    let nameLengthArray = playerNames.map(player => player.length)
    // debugger
    let longestName = nameLengthArray.indexOf(Math.max(...nameLengthArray))
    // debugger
    return playerNames[longestName]
    // debugger
}

// console.log(playerWithLongestName())

function doesLongNameStealATon() {
    let game = gameObject()
    let allPlayersObj = {...game.home.players, ...game.away.players}
    let longestNamePlayer = playerWithLongestName()
    let stealsArray = []
    for (let player in allPlayersObj) {
        stealsArray.push(allPlayersObj[player].steals)
        debugger
    }
    let mostStealsValue = Math.max(...stealsArray)
    return allPlayersObj[longestNamePlayer].steals === mostStealsValue
}
debugger
console.log(doesLongNameStealATon())