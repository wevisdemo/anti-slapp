<template>
  <div>
    <div class="main">
      <div class="main__graphic">
        <div class="h-100vh bg-black py-3">
          <div class="d-flex justify-content-center flex-wrap">
            <div
              v-for="(item, i) in data_list"
              :key="i"
              class="wv-font-anuphan text-center data-box"
            >
              <p class="m-0 text-white wv-b6 name" v-html="item.name"></p>
              <p :class="'m-0 wv-b4 wv-font-bold count ' + item.color">
                {{ item.count.toLocaleString() }} คน
              </p>
            </div>
          </div>
          <b-row class="py-sm-4 py-2 text-white people-main-box h-100">
            <b-col
              cols="3"
              sm="2"
              class="
                wv-font-kondolar wv-b2 wv-font-black
                text-center
                position-relative
                timeline-date-box
              "
              ><div class="bg-black timeline-date">
                <h3 class="wv-font-black mb-4 wv-h6">18 ก.ค. 63</h3>
              </div>
              <div class="bg-black timeline-date">
                <h3 class="wv-font-black wv-h6">31 ม.ค. 64</h3>
              </div>
              <div class="dash-line"></div
            ></b-col>
            <b-col cols="9" sm="10">
              <div class="people-wrapper">
                <h3 class="wv-font-kondolar wv-font-black mb-1 mb-sm-3 wv-h6">
                  มีประชาชนถูกดำเนินคดี<u>อย่างน้อย 291 คน</u>
                  <span class="wv-font-anuphan wv-b6 font-weight-normal"
                    >(หนึ่งคนถูกดำเนินคดีได้มากกว่า 1 กฎหมาย)</span
                  >
                </h3>

                <div class="people flex-wrap d-flex">
                  <img :src="people_1" v-for="item in 166" alt="" />
                  <img :src="people_2" v-for="item in 115" alt="" />
                  <img :src="people_3" v-for="item in 5" alt="" />
                  <img :src="people_4" v-for="item in 572" alt="" />
                  <img :src="people_5" v-for="item in 1415" alt="" />
                  <img :src="people_6" v-for="item in 107" alt="" />
                  <img :src="people_7" v-for="item in 112" alt="" />
                  <!-- <img :src="people_8" v-for="item in 115" alt=""> -->
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <Scrollama>
        <div class="h-100vh">1</div>
        <div class="h-100vh">2</div>
        <!-- <div class="h-100vh">3</div>
        <div class="h-100vh">4</div>
        <div class="h-100vh">5</div>
        <div class="h-100vh">6</div>
        <div class="h-100vh">7</div>
        <div class="h-100vh">8</div>
        <div class="h-100vh">9</div>
        <div class="h-100vh">10</div>
        <div class="h-100vh">11</div>
        <div class="h-100vh">11</div> -->
      </Scrollama>
    </div>

    <div
      class="min-h-screen bg-black py-5 text-white wv-font-kondolar text-center"
    >
      <h2 class="wv-h5 wv-font-bold mb-3 px-2">
        นี่คือเรื่องราวของคนไทยที่เพียงออกมาใช้สิทธิเสรีภาพ<br />
        แสดงความเห็นที่พวกเขาเชื่อ เรียกร้องความเป็นธรรมที่พวกเขาหวัง
      </h2>
      <h3 class="wv-h8 px-2">
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
          “ยุติธรรมทำลาย”<br class="d-inline" />
          เป็นอย่างไร ?
        </h2>
      </div>
      <div class="mt-5 lottie-section">
        <b-row class="d-flex justify-content-center m-0">
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
          “ยุติธรรมทำลาย”<br class="d-inline" />
          ทำร้าย “คนไทย”<br class="d-inline" />
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
import Scrollama from "vue-scrollama";

export default {
  components: {
    Lottie,
    Scrollama,
  },
  data() {
    return {
      slapp_icon_01: slapp_icon_01.default,
      slapp_icon_02: slapp_icon_02.default,
      slapp_icon_03: slapp_icon_03.default,
      hammer: require("~/assets/images/hammer.png"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      pic_mob: require("~/assets/images/pic_mob.mp4"),
      people_1: require("~/assets/images/icon_people/01_people_112.svg"),
      people_2: require("~/assets/images/icon_people/02_people_116.svg"),
      people_3: require("~/assets/images/icon_people/03_people_110.svg"),
      people_4: require("~/assets/images/icon_people/04_people_215.svg"),
      people_5: require("~/assets/images/icon_people/05_people.svg"),
      people_6: require("~/assets/images/icon_people/06_people.svg"),
      people_7: require("~/assets/images/icon_people/07_people.svg"),
      people_8: require("~/assets/images/icon_people/08_people.svg"),
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
br {
  @media #{$mq-mini-mobile} {
    display: none;
  }
}

.main__graphic {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 100vh;
  transition: 1s;
  @media #{$mq-mini-mobile} {
    //height: auto !important;
  }
}

.data-box {
  padding: 0 13px;
  border-right: 1px solid #444444;

  @media #{$mq-lg} {
    flex: 0 0 25%;
    margin-bottom: 10px;
  }

  @media #{$mq-mini-mobile} {
    //flex: 0 0 50%;
    padding: 0;

    .name {
      font-size: 10px;
    }

    .count {
      font-size: 12px;
    }
  }
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

  @media #{$mq-mini-mobile} {
    width: 200px;
    height: 200px;
  }
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

  @media #{$mq-mini-mobile} {
    width: 200px;
    height: 200px;
  }
}

.lottie-section {
  max-width: 992px;
  margin: auto;
}

.dash-line {
  border-left: 3px dashed white;
  width: 2px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
}

.timeline-date {
  z-index: 2;
  position: relative;
}

.people-wrapper {
  margin-top: 60px;

  @media #{$mq-mini-mobile} {
    margin-top: 0;

    h3 {
      font-size: 16px;
    }
  }
}

.people img {
  margin-right: 2px;

  @media #{$mq-mini-mobile} {
    margin-right: 0;
    width: 4.5px;
  }
}

.people-main-box {
  max-width: 1400px;
  margin: auto;
}

.timeline-date-box {
  @media #{$mq-mini-mobile} {
    padding: 0;

    h3 {
      font-size: 16px;
    }
  }
}
</style>