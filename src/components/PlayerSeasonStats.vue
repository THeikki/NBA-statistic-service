<template>
  <div v-if="showSeasonStatistics" class="table-container">
    <table>
      <tbody>
        <tr>
          <th>Nimi</th>
          <td>
            {{ playerSeasonStats?.playerName }}
          </td>
        </tr>
        <tr>
          <th>Ikä</th>
          <td>
            {{ playerSeasonStats?.age }}
          </td>
        </tr>
        <tr>
          <th>Joukkue</th>
          <td>
            {{ playerSeasonStats?.team }}
          </td>
        </tr>
        <tr>
          <th>Pelipaikka</th>
          <td>
            {{ playerSeasonStats?.position }}
          </td>
        </tr>
        <tr>
          <th>Ottelut</th>
          <td>
            {{ playerSeasonStats?.games }}
          </td>
        </tr>
        <tr>
          <th>Hyökkäyslevypallot</th>
          <td>
            {{ playerSeasonStats?.offensiveRb }}
          </td>
        </tr>
        <tr>
          <th>Puolustuslevypallot</th>
          <td>
            {{ playerSeasonStats?.defensiveRb }}
          </td>
        </tr>
        <tr>
          <th>Syötöt</th>
          <td>
            {{ playerSeasonStats?.assists }}
          </td>
        </tr>
        <tr>
          <th>Pallon riistot</th>
          <td>
            {{ playerSeasonStats?.steals }}
          </td>
        </tr>
        <tr>
          <th>Blokkaukset</th>
          <td>
            {{ playerSeasonStats?.blocks }}
          </td>
        </tr>
        <tr>
          <th>Pallon menetykset</th>
          <td>
            {{ playerSeasonStats?.turnovers }}
          </td>
        </tr>
        <tr>
          <th>Virheet</th>
          <td>
            {{ playerSeasonStats?.personalFouls }}
          </td>
        </tr>
        <tr>
          <th>Pisteet</th>
          <td>
            {{ playerSeasonStats?.points }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="showLoadingMessage" class="message-container">
    <p>Haetaan tietoja...</p>
  </div>
</template>

<script>
export default {
  name: 'PlayerSeasonStats',
  computed: {
    showSeasonStatistics() {
      return this.$store.state.showSeasonStatistics
    },
    showLoadingMessage() {
      return this.$store.state.showLoadingMessage
    },
  },
  props: {
    playerSeasonStats: Object,
  },
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: 20px;
  color: black;
}
th,
td {
  border: 1px solid black;
  background: rgb(255, 255, 255);
  padding: 10px;
}
table {
  text-align: left;
  margin: auto;
  border-collapse: collapse;
  width: fit-content;
}
.table-container {
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: fit-content;
  margin-top: 5%;
  padding: 20px;
  background-color: rgb(209, 163, 65);
}
.message-container {
  margin-top: 0;
}
</style>
