<template>
  <div></div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "https://thaihealth-lesssodium.netlify.app/ogimage/result_0" + this.$route.params.variation + ".png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "https://thaihealth-lesssodium.netlify.app/ogimage/result_0" + this.$route.params.variation + ".png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: ogtitle,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "ร่วมค้นหาว่าลิ้นของคุณด้านชาเเค่ไหน? เค็มระดับใด...ใช่สำหรับคุณ",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: ogtitle,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "ร่วมค้นหาว่าลิ้นของคุณด้านชาเเค่ไหน? เค็มระดับใด...ใช่สำหรับคุณ",
        },
      ],
    };
  },
  mounted() {
    window.location.href = "https://thaihealth-lesssodium.netlify.app/";
  },
};
</script>