<template>
  <footer>
    <div class="center">
      <p>Heikki Törmänen @2025</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  height: 30px;
  background-color: rgb(0, 0, 0);
  left: 0;
  right: 0;
  margin: 0;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
p {
  text-align: center;
  color: rgb(170, 163, 163);
}
</style>
