<template>
  <page-header/>
  <router-view/>
</template>

<script>
import PageHeader from "./components/PageHeader";
export default {
  components: {PageHeader}
}
</script>

<style>
@import "assets/style/style.css";

</style>