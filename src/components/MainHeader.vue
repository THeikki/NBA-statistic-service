<template>
  <header>
    <h1>NBA</h1>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style>
header {
  display: flex;
  align-items: center;
  position: fixed;
  background-color: rgb(53, 51, 51);
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  margin: 0;
}
h1 {
  margin-left: 20px;
  font-family: 'Segoe UI';
  color: white;
}
</style>
