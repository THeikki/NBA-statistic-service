<template>
  <div>
    <UserInput />
    <div class="center-content">
      <div class="background-image">
        <PlayerSeasonStats :playerSeasonStats="playerSeasonStats" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayerSeasonStats from './PlayerSeasonStats.vue'
import UserInput from './UserInput.vue'

export default {
  name: 'MainContent',
  components: {
    UserInput,
    PlayerSeasonStats,
  },
  computed: {
    playerSeasonStats() {
      return this.$store.state.playerSeasonStats
    },
  },
}
</script>

<style scoped>
.background-image {
  top: 250px;
  background-image: url('@/assets/teline.png');
  position: fixed;
  width: 60%;
  height: 60%;
  background-repeat: no-repeat;
  background-size: contain;
}
.center-content {
  display: flex;
  justify-content: center;
}
</style>
