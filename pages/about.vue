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
    <div class="py-5 bg-white text-black about-box px-2 mx-auto">
      <h1 class="wv-font-kondolar wv-h4 wv-font-black text-center">
        เกี่ยวกับโครงการ
      </h1>
      <div class="py-5">
        <h1 class="wv-font-kondolar wv-h5 wv-font-black">เป้าหมาย</h1>
        <span class="wv-font-baijamjuri wv-b4"
          >dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.</span
        >
      </div>
      <div class="py-5">
        <h1 class="wv-font-kondolar wv-h5 wv-font-black">
          ที่มาของข้อมูล & ข้อจำกัด
        </h1>
        <span class="wv-font-baijamjuri wv-b4"
          >dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.</span
        >
      </div>
      <div class="py-5">
        <h1 class="wv-font-kondolar wv-h5 wv-font-black mb-3">
          อาสาสมัครร่วมพัฒนา
        </h1>
        <p class="wv-font-baijamjuri wv-b4 wv-font-bold mb-1">เขียนโปรแกรม</p>
        <p class="wv-font-baijamjuri wv-b4 mb-3">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>

        <p class="wv-font-baijamjuri wv-b4 wv-font-bold mb-1">ออกแบบ</p>
        <p class="wv-font-baijamjuri wv-b4 mb-3">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>

        <p class="wv-font-baijamjuri wv-b4 wv-font-bold mb-1">
          สืบค้นและรวบรวมข้อมูล
        </p>
        <p class="wv-font-baijamjuri wv-b4 mb-3">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>

        <p class="wv-font-baijamjuri wv-b4 wv-font-bold mb-1">บรรณาธิการ</p>
        <p class="wv-font-baijamjuri wv-b4 mb-3">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>

        <p class="wv-font-baijamjuri wv-b4 wv-font-bold mb-1">
          ประสานงานและจัดการอื่นๆ
        </p>
        <p class="wv-font-baijamjuri wv-b4 mb-3">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>

        <WvButtonGroup center="true" class="py-5">
          <WvButton>ดาวน์โหลดข้อมูล</WvButton>
          <WvButton>Feedback</WvButton>
        </WvButtonGroup>
      </div>
      <WvSharer url="https://wevis.info" center="true" />
    </div>
    <WvFooter :dark="true" />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvNavButton from "@wevisdemo/ui/components/nav-button.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";
import WvSharer from "@wevisdemo/ui/components/sharer.vue";
import WvButtonGroup from "@wevisdemo/ui/components/button-group.vue";
import WvButton from "@wevisdemo/ui/components/button.vue";
export default {
  components: {
    WvNavbar,
    WvNavButton,
    WvFooter,
    WvSharer,
    WvButtonGroup,
    WvButton,
  },
};
</script>

<style lang="scss" scoped>
.menu-link {
  color: #fff;
  margin: 0 20px;
}

.about-box {
  max-width: 800px;
}
</style>