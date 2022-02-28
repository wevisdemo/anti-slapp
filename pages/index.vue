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
          content: "ร่วมทดสอบว่าลิ้นของคุณด้านชาเเค่ไหน?",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "วัดระดับการทานเค็มของคุณ เค็มเเบบนี้เสี่ยงโชค ลุ้นรับโรคอะไร พร้อมเรียนรู้ว่าแท้จริงเเล้วลิ้นเปลี่ยนได้",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "ร่วมทดสอบว่าลิ้นของคุณด้านชาเเค่ไหน?",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "วัดระดับการทานเค็มของคุณ เค็มเเบบนี้เสี่ยงโชค ลุ้นรับโรคอะไร พร้อมเรียนรู้ว่าแท้จริงเเล้วลิ้นเปลี่ยนได้",
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
</style>