import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    season: '',
    team: '',
    showSeasonStatistics: false,
    showLoadingMessage: false,
    playerSeasonStats: {
      playerName: '',
      age: '',
      team: '',
      position: '',
      games: '',
      offensiveRb: '',
      defensiveRb: '',
      assists: '',
      steals: '',
      blocks: '',
      turnovers: '',
      personalFouls: '',
      points: '',
    },
  },
  mutations: {
    setSeason(state, value) {
      state.season = value
    },
    setTeam(state, value) {
      state.team = value
    },
    setPlayerStatsFromResponData(data) {
      new Object({
        playerName: data.playerName,
        age: data.age,
        team: this.state.team,
        position: data.position,
        games: data.games,
        offensiveRb: data.offensiveRb,
        defensiveRb: data.defensiveRb,
        assists: data.assists,
        steals: data.steals,
        blocks: data.blocks,
        turnovers: data.turnovers,
        personalFouls: data.personalFouls,
        points: data.points,
      })
    },
    setPlayerSeasonStats(state, data) {
      state.playerSeasonStats.playerName = data.playerName
      state.playerSeasonStats.age = data.age
      state.playerSeasonStats.team = this.state.team
      state.playerSeasonStats.position = data.position
      state.playerSeasonStats.games = data.games
      state.playerSeasonStats.offensiveRb = data.offensiveRb
      state.playerSeasonStats.defensiveRb = data.defensiveRb
      state.playerSeasonStats.assists = data.assists
      state.playerSeasonStats.steals = data.steals
      state.playerSeasonStats.blocks = data.blocks
      state.playerSeasonStats.turnovers = data.turnovers
      state.playerSeasonStats.personalFouls = data.personalFouls
      state.playerSeasonStats.points = data.points
    },
  },
  actions: {
    determineTeamNameFromAbbreviation() {
      switch (this.state.playerSeasonStats.team) {
        case 'ATL':
          this.state.playerSeasonStats.team = 'Atlanta Hawks'
          break
        case 'BOS':
          this.state.playerSeasonStats.team = 'Boston Celtics'
          break
        case 'BRK':
          this.state.playerSeasonStats.team = 'Brooklyn Nets'
          break
        case 'CHO':
          this.state.playerSeasonStats.team = 'Charlotte Hornets'
          break
        case 'CHI':
          this.state.playerSeasonStats.team = 'Chicago Bulls'
          break
        case 'CLE':
          this.state.playerSeasonStats.team = 'Cleveland Cavaliers'
          break
        case 'DAL':
          this.state.playerSeasonStats.team = 'Dallas Mavericks'
          break
        case 'DEN':
          this.state.playerSeasonStats.team = 'Denver Nuggets'
          break
        case 'DET':
          this.state.playerSeasonStats.team = 'Detroit Pistons'
          break
        case 'GSW':
          this.state.playerSeasonStats.team = 'Golden State Warriors'
          break
        case 'HOU':
          this.state.playerSeasonStats.team = 'Houston Rockets'
          break
        case 'IND':
          this.state.playerSeasonStats.team = 'Indiana Pacers'
          break
        case 'LAC':
          this.state.playerSeasonStats.team = 'Los Angeles Clippers'
          break
        case 'LAL':
          this.state.playerSeasonStats.team = 'Los Angeles Lakers'
          break
        case 'MEM':
          this.state.playerSeasonStats.team = 'Memphis Grizzlies'
          break
        case 'MIA':
          this.state.playerSeasonStats.team = 'Miami Heat'
          break
        case 'MIL':
          this.state.playerSeasonStats.team = 'Milwaukee Bucks'
          break
        case 'MIN':
          this.state.playerSeasonStats.team = 'Minnesota Timberwolves'
          break
        case 'NOP':
          this.state.playerSeasonStats.team = 'New Orleans Pelicans'
          break
        case 'NYK':
          this.state.playerSeasonStats.team = 'New York Knicks'
          break
        case 'OKC':
          this.state.playerSeasonStats.team = 'Oklahoma City Thunder'
          break
        case 'ORL':
          this.state.playerSeasonStats.team = 'Orlando Magic'
          break
        case 'PHI':
          this.state.playerSeasonStats.team = 'Philadelphia 76ers'
          break
        case 'PHO':
          this.state.playerSeasonStats.team = 'Phoenix Suns'
          break
        case 'POR':
          this.state.playerSeasonStats.team = 'Portland Trail Blazers'
          break
        case 'SAC':
          this.state.playerSeasonStats.team = 'Sacramento Kings'
          break
        case 'SAS':
          this.state.playerSeasonStats.team = 'San Antonio Spurs'
          break
        case 'TOR':
          this.state.playerSeasonStats.team = 'Toronto Raptors'
          break
        case 'UTA':
          this.state.playerSeasonStats.team = 'Utah Jazz'
          break
        case 'WAS':
          this.state.playerSeasonStats.team = 'Washington Wizards'
          break
        default:
          break
      }
    },
    determinePositionFromAbbreviation() {
      switch (this.state.playerSeasonStats.position) {
        case 'PG':
          this.state.playerSeasonStats.position = 'Pelintekijä'
          break
        case 'SG':
          this.state.playerSeasonStats.position = 'Heittävä takamies'
          break
        case 'SF':
          this.state.playerSeasonStats.position = 'Pieni laitahyökkääjä'
          break
        case 'PF':
          this.state.playerSeasonStats.position = 'Iso laitahyökkääjä'
          break
        case 'C':
          this.state.playerSeasonStats.position = 'Sentteri'
          break
        default:
          break
      }
    },
    async getPlayerSeasonStats({ commit, dispatch }) {
      this.state.showSeasonStatistics = false
      this.state.showLoadingMessage = true
      await axios({
        method: 'GET',
        url: `https://api.server.nbaapi.com/api/playertotals?season=${this.state.season}&team=${this.state.team}&page=1&pageSize=35&isPlayoff=False`,
      })
        .then((response) => {
          const data = response.data.data
          if (Array.isArray(data) && data.length > 0) {
            data.forEach((element) => {
              commit('setPlayerStatsFromResponData', element)
            })
            const playerWithMostPoints = data.reduce((prev, current) =>
              prev.points > current.points ? prev : current,
            )
            commit('setPlayerSeasonStats', playerWithMostPoints)
            dispatch('determineTeamNameFromAbbreviation')
            dispatch('determinePositionFromAbbreviation')
            this.state.showLoadingMessage = false
            this.state.showSeasonStatistics = true
          } else {
            this.state.showLoadingMessage = false
            alert('Tietoja ei löytynyt')
          }
        })
        .catch((error) => {
          this.state.showLoadingMessage = false
          alert('Tapahtui virhe: ', error)
        })
    },
  },
})
