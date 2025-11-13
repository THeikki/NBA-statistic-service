<template>
  <div class="content">
    <h3>Hae valitun NBA-joukkueen parhaan pistemiehen tilastot halutulta kaudelta</h3>
    <div class="input-form">
      <select title="season" id="season-select" v-model="season">
        <option value="">--Valitse kausi--</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
      </select>
      <select title="team" id="team-select" v-model="team">
        <option value="">--Valitse joukkue--</option>
        <option value="ATL">Atlanta Hawks</option>
        <option value="BOS">Boston Celtics</option>
        <option value="BRK">Brooklyn Nets</option>
        <option value="CHO">Charlotte Hornets</option>
        <option value="CHI">Chicago Bulls</option>
        <option value="CLE">Cleveland Cavaliers</option>
        <option value="DAL">Dallas Mavericks</option>
        <option value="DEN">Denver Nuggets</option>
        <option value="DET">Detroit Pistons</option>
        <option value="GSW">Golden State Warriors</option>
        <option value="HOU">Houston Rockets</option>
        <option value="IND">Indiana Pacers</option>
        <option value="LAC">Los Angeles Clippers</option>
        <option value="LAL">Los Angeles Lakers</option>
        <option value="MEM">Memphis Grizzlies</option>
        <option value="MIA">Miami Heat</option>
        <option value="MIL">Milwaukee Bucks</option>
        <option value="MIN">Minnesota Timberwolves</option>
        <option value="NOP">New Orleans Pelicans</option>
        <option value="NYK">New York Knicks</option>
        <option value="OKC">Oklahoma City Thunder</option>
        <option value="ORL">Orlando Magic</option>
        <option value="PHI">Philadelphia 76ers</option>
        <option value="PHO">Phoenix Suns</option>
        <option value="POR">Portland Trail Blazers</option>
        <option value="SAC">Sacramento Kings</option>
        <option value="SAS">San Antonio Spurs</option>
        <option value="TOR">Toronto Raptors</option>
        <option value="UTA">Utah Jazz</option>
        <option value="WAS">Washington Wizards</option>
      </select>
      <button :disabled="!buttonIsActive" @click="getStats">Hae</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInput',
  methods: {
    getStats() {
      this.$store.dispatch('getPlayerSeasonStats')
    },
  },
  computed: {
    season: {
      get() {
        return this.$store.state.season
      },
      set(season) {
        this.$store.commit('setSeason', season)
      },
    },
    team: {
      get() {
        return this.$store.state.team
      },
      set(team) {
        this.$store.commit('setTeam', team)
      },
    },
    buttonIsActive() {
      return this.$store.state.season && this.$store.state.team
    },
  },
}
</script>

<style scoped>
.content {
  position: fixed;
  text-align: center;
  top: 60px;
  width: 100%;
  height: fit-content;
  background-color: rgb(255, 255, 255);
}
.input-form {
  text-align: center;
  padding: 10px;
  float: bottom;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  border-radius: 5px;
}
select {
  width: 200px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
}
button {
  background-color: rgb(203, 209, 207);
  border: 1px solid transparent;
  width: 150px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 3px;
}
button:disabled {
  cursor: not-allowed;
}
</style>
