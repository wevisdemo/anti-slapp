<template>
  <div>
    <WvNavbar :dark="true">
      <NuxtLink to="/" class="menu-link">
        <WvNavButton :dark="true" :active="true"> Home </WvNavButton></NuxtLink
      >
      <NuxtLink to="/about" class="menu-link">
        <WvNavButton :dark="true">About</WvNavButton></NuxtLink
      >
    </WvNavbar>
    <IntroSection />
    <PeopleDataSection />
    <QuoteSection />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
export default {
  components: {
    WvNavbar,
  },
};
</script>

<style lang="scss" scoped>
.menu-link {
  color: #fff;
  margin: 0 20px;
}
</style>

