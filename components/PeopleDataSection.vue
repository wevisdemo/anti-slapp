<template>
  <div>
    <div class="h-100vh bg-black py-3">
      <div class="d-flex justify-content-center">
        <div
          v-for="(item, i) in data_list"
          :key="i"
          class="wv-font-anuphan text-center data-box"
        >
          <p class="m-0 text-white wv-b6" v-html="item.name"></p>
          <p :class="'m-0 wv-b4 wv-font-bold ' + item.color">
            {{ item.count }} คน
          </p>
        </div>
      </div>
    </div>
    <div
      class="min-h-screen bg-black py-5 text-white wv-font-kondolar text-center"
    >
      <h2 class="wv-h5 wv-font-bold mb-3">
        นี่คือเรื่องราวของคนไทยที่เพียงออกมาใช้สิทธิเสรีภาพ<br />
        แสดงความเห็นที่พวกเขาเชื่อ เรียกร้องความเป็นธรรมที่พวกเขาหวัง
      </h2>
      <h3 class="wv-h8">
        แต่กลับพบเจอกับ “ยุติธรรมทำลาย”<br />
        ระบบซึ่ง “กฎหมาย” กลั่นแกล้ง รังแก และคุกคามชีวิตพวกเขา
      </h3>
      <video
        width="100%"
        height="100%"
        autoplay
        loop
        muted
        id="vid"
        playsinline
        class="mt-5 px-2"
      >
        <source :src="pic_mob" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p class="text-uppercase gray mb-5 text-right px-2 wv-font-anuphan">
        @gun_sangtong & iLaw
      </p>
      <h2 class="wv-h5 mb-3">
        เมื่อ <span class="yellow wv-font-bold">“กฎหมาย”</span> และ
        <span class="yellow wv-font-bold">“กระบวนการยุติธรรม”</span><br />
        ถูกใช้เพื่อปิดกั้น หรือกดดันให้ประชาชนหยุดพูด<br />
        หรือมีส่วนร่วมในเรื่องสาธารณะ<br /><br />

        <span class="yellow wv-font-bold">นั่นคือ “ยุติธรรมทำลาย”</span><br />
        ระบบและกลไกที่คุกคามและปิดปากประชาชน
      </h2>
    </div>
    <div class="min-h-screen bg-black py-5 wv-font-kondolar text-center">
      <div class="position-relative mb-5">
        <div class="circle"></div>
        <h2 class="wv-h5 wv-font-black circle-text">
          “ยุติธรรมทำลาย”<br />
          เป็นอย่างไร ?
        </h2>
      </div>
      <div class="mt-5 lottie-section">
        <b-row class="d-flex justify-content-center">
          <b-col cols="12" sm="4" class="wv-b2">
            <p class="m-0 text-white">เกิดกับ</p>
            <p class="m-0 yellow wv-font-black">
              “ประชาชนที่ชุมนุมและแสดงความเห็นทางการเมือง”
            </p>
            <div>
              <lottie
                :options="{
                  animationData: slapp_icon_01,
                  animationSpeed: 1,
                  loop: true,
                  autoplay: true,
                }"
              />
            </div>
          </b-col>
          <b-col cols="12" sm="4" class="wv-b2">
            <p class="m-0 text-white">มีการใช้</p>
            <p class="m-0 yellow wv-font-black">
              “กฎหมายเป็นเครื่องมือ<br />เพื่อลิดรอนสิทธิเสรีภาพ”
            </p>
            <div>
              <lottie
                :options="{
                  animationData: slapp_icon_02,
                  animationSpeed: 1,
                  loop: true,
                  autoplay: true,
                }"
              />
            </div>
          </b-col>
          <b-col cols="12" sm="4" class="wv-b2">
            <p class="m-0 text-white">มาพร้อม</p>
            <p class="m-0 yellow wv-font-black">
              “กระบวนการยุติธรรมที่ไม่เป็นธรรม”
            </p>
            <div>
              <lottie
                :options="{
                  animationData: slapp_icon_03,
                  animationSpeed: 1,
                  loop: true,
                  autoplay: true,
                }"
              />
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="position-relative">
        <div class="circle"></div>
        <h2 class="wv-h5 wv-font-black circle-text">
          “ยุติธรรมทำลาย”<br />
          ทำร้าย “คนไทย”<br />
          อย่างมากมาย
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from "vue-lottie/src/lottie.vue";
import * as slapp_icon_01 from "~/assets/lottie/slapp_icon_01.json";
import * as slapp_icon_02 from "~/assets/lottie/slapp_icon_02.json";
import * as slapp_icon_03 from "~/assets/lottie/slapp_icon_03.json";

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      slapp_icon_01: slapp_icon_01.default,
      slapp_icon_02: slapp_icon_02.default,
      slapp_icon_03: slapp_icon_03.default,
      hammer: require("~/assets/images/hammer.png"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      pic_mob: require("~/assets/images/pic_mob.mp4"),
      data_list: [
        {
          name: "ข้อหาหมิ่นประมาท กษัตริย์<br>(มาตรา 112)",
          count: 166,
          color: "yellow",
        },
        {
          name: "ข้อหายุยงปลุกปั่น<br>(มาตรา 116)",
          count: 115,
          color: "orange",
        },
        {
          name: "ข้อหาหมิ่นประมาท กษัตริย์<br>(มาตรา 112)",
          count: 5,
          color: "purple",
        },
        {
          name: "ข้อหาประทุษร้าย เสรีภาพพระราชินี<br>(มาตรา 110)",
          count: 572,
          color: "blue",
        },
        {
          name: "ข้อหามั่วสุมกัน ให้เกิดการวุ่นวาย<br>(มาตรา 215)",
          count: 1415,
          color: "pink",
        },
        {
          name: "ข้อหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ",
          count: 107,
          color: "brown",
        },
        {
          name: "ข้อหาฝ่าฝืน พ.ร.บ. คอมพิวเตอร์ฯ",
          count: 112,
          color: "green",
        },
        {
          name: "ข้อหาละเมิด อำนาจศาล<br>(มาตรา 30 - 33)",
          count: 0,
          color: "blue-2",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.data-box {
  padding: 0 13px;
  border-right: 1px solid #444444;
}

.data-box:last-child {
  border: none;
}

.circle {
  width: 400px;
  height: 400px;
  margin: 30vh auto;
  background: #ffffff;
  filter: blur(29px);
  border-radius: 50%;
}

.circle-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lottie-section {
  max-width: 992px;
  margin: auto;
}
</style>