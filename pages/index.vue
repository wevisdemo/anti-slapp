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
    <NewspaperSection /> 
    <CompanyListSection />
    <Conclusion />
    <WvFooter :dark="true" />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvNavButton from "@wevisdemo/ui/components/nav-button.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";
export default {
  components: {
    WvNavbar,
    WvNavButton,
    WvFooter,
  },
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "https://wevisdemo.github.io/slapp/og_image.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "https://wevisdemo.github.io/slapp/og_image.png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "ยุติธรรมทำลาย",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "เมื่อกฎหมาย คุกคาม ประชาชน",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "ยุติธรรมทำลาย",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "เมื่อกฎหมาย คุกคาม ประชาชน",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-link {
  color: #fff;
  margin: 0 20px;
}

.menu-link:hover {
  text-decoration: none;
}
</style>