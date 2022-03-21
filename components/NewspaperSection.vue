<template>
  <div>
    <div
      class="
        bg-black
        min-h-screen
        h-auto-mobile
        py-5
        d-flex
        flex-column
        justify-content-around
      "
    >
      <div>
        <h2
          class="
            wv-font-kondolar wv-font-black
            text-center
            wv-h5
            text-white
            mb-3
          "
        >
          ประเทศไทย กับ “ยุติธรรมทำลาย”<br />เป็น “ของคู่กัน”
        </h2>
        <p class="wv-font-anuphan wv-b6 text-white text-center">
          (คลิกที่หนังสือพิมพ์เพื่ออ่านรายละเอียด)
        </p>
      </div>

      <div class="text-center">
        <div class="my-4">
          <img :src="timeline_newspaper" alt="timeline_newspaper" />
        </div>
        <p class="wv-font-anuphan wv-b3 text-white text-center m-0">
          ยังคงอยู่เสมอมา
        </p>
      </div>

      <div class="text-center my-5">
        <b-row class="text-white newspaper-box" no-gutters>
          <b-col cols="12" sm="3">
            <p class="wv-font-anuphan wv-b3 mb-3">
              ช่วงรัฐบาล<br />จอมพลสฤษดิ์ ธนะรัชต์
            </p>
            <div>
              <div class="long-arrow"></div>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="text-white"
              />
            </div>
            <img
              :src="newspaper_1"
              class="newspaper_1 mt-5 newspaper"
              alt=""
              width="100%"
              @click="showNewspaperText(0)"
            />
          </b-col>
          <b-col cols="12" sm="3">
            <p class="wv-font-anuphan wv-b3 mb-3">
              ช่วงหลังเหตุการณ์<br />6 ตุลาคม 2519
            </p>
            <div>
              <div class="short-arrow"></div>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="text-white"
              />
            </div>
            <img
              :src="newspaper_2"
              class="newspaper_2 mt-5 newspaper"
              alt=""
              width="100%"
              @click="showNewspaperText(1)"
            />
          </b-col>
          <b-col cols="12" sm="3">
            <p class="wv-font-anuphan wv-b3 mb-3">
              ช่วงรัฐบาลประยุทธ์<br />ที่มาจากการรัฐประหาร
            </p>
            <div>
              <div class="short-arrow"></div>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="text-white"
              />
            </div>
            <img
              :src="newspaper_3"
              class="newspaper_3 mt-5 newspaper"
              alt=""
              width="100%"
              @click="showNewspaperText(2)"
            />
          </b-col>
          <b-col cols="12" sm="3">
            <p class="wv-font-anuphan wv-b3 mb-3">
              ช่วงรัฐบาลประยุทธ์ที่มาจากการเลือกตั้งด้วยกติกาไม่เป็นธรรม
            </p>
            <div>
              <div class="long-arrow"></div>
              <font-awesome-icon
                :icon="['fas', 'chevron-down']"
                class="text-white"
              />
            </div>
            <img
              :src="newspaper_4"
              class="newspaper_4 mt-5 newspaper"
              alt=""
              width="100%"
              @click="showNewspaperText(3)"
            />
          </b-col>
        </b-row>
        <img :src="click" alt="click" />
      </div>
    </div>
    <div class="bg-black h-100vh overflow-hidden circle-scale">
      <div class="position-relative mb-5">
        <div class="circle" :class="{ scaled: isFade }"></div>
        <h2
          class="wv-b2 circle-text wv-font-kondolar text-center flex-column"
          :class="{ fade: isFade }"
        >
          หากจะกล่าวว่า<br />
          <span class="wv-font-black">“ประเทศนี้เป็นประชาธิปไตย”</span><br />
          <span class="wv-font-black">“ยุติธรรมทำลาย”</span>
          ต้องถูกแก้ไขและยับยั้งอย่างจริงจัง<br /><br />

          เพื่อไม่ให้เรื่องราวเหล่านี้<br />เกิดกับคนไทยคนใดอีกต่อไป
        </h2>
        <h2
          class="
            wv-h5
            circle-text circle-text-2
            wv-font-kondolar wv-font-black
            text-center
            flex-column
          "
          :class="{ fadeIn: isFade }"
        >
          การต่อต้าน และยับยั้ง<br />
          “ยุติธรรมทำลาย”<br />
          เพื่อปกป้อง “สิทธิเสรีภาพ”<br />
          ของประชาชนไทย
        </h2>
      </div>
    </div>
    <Scrollama @step-enter="handler"           :offset="0.9">
      <div class="h-100vh">1</div>
      <div class="h-100vh">1</div>
      <div class="h-100vh">1</div>
    </Scrollama>
    <b-modal
      id="newspaper-modal"
      ref="newspaper-modal"
      hide-footer
      hide-header
      no-fade
      centered
       @hide="onHandleCloseModal()"
    >
    <div class="wrap-modal-slider" id="wrap-modal-slider">
      <VueSlickCarousel
        v-bind="slickOptions"
        ref="newspaper"
        id="newspaper-slick"
        class="newspaper-slick"
      >
        <div
          class="p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"
        >
          <p class="yellow mb-1 wv-font-black">
            ช่วงรัฐบาลจอมพลสฤษดิ์ ธนะรัชต์
          </p>
          <p class="m-0">
            มีการใช้พระราชบัญญัติว่าด้วยการกระทำอันเป็น คอมมิวนิสต์ พ.ศ.2495
            เป็นเครื่องมือในการจัดการ นักการเมือง อดีตรัฐมนตรี
            นักหนังสือพิมพ์หรือ นักเขียน ทนายความ ครูอาจารย์ นิสิตนักศึกษา
            ปัญญาชน รวมทั้งกรรมการสหภาพแรงงาน
            ทำให้มีผู้ถูกจับด้วยข้อหาดังกล่าวจำนวน 190 คน
          </p>
        </div>
        <div
          class="p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"
        >
          <p class="yellow mb-1 wv-font-black">
            ช่วงหลังเหตุการณ์ 6 ตุลาคม 2519
          </p>
          <p class="m-0">
            มีการใช้กฎหมายดำเนินคดีกับนักศึกษาและประชาชน จำนวนมาก
            มีผู้ถูกจับไม่น้อยกว่า 3,094 คน มีผู้ถูกดำเนินคดีทั้งสิ้น 106 คน
            ภายใต้ข้อหาต่าง ๆ เช่น การกระทำอันเป็นคอมมิวนิสต์ กบฏ มั่วสุมกัน
            ตั้งแต่สิบคนขึ้นไป มั่วสุมสมคบกันตั้งแต่ห้าคนขึ้นไป เป็นซ่องโจร
          </p>
        </div>
        <div
          class="p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"
        >
          <p class="yellow mb-1 wv-font-black">
            ช่วงรัฐบาลประยุทธ์ที่มาจากการรัฐประหาร
          </p>
          <p class="m-0">
            มีการใช้ข้อหา “ฝ่าฝืนคำสั่งห้ามมั่วสุ่มหรือชุมนุมทางการเมืองตั้งแต่
            5 คน ขึ้นไป” ตามประกาศ คสช. ที่ 7/2557 และคำสั่งหัวหน้า คสช. ที่
            3/2558 ดำเนินคดีกับผู้เคลื่อนไหวแสดงออกทางการเมือง อย่างน้อย 428 คน
            และใช้ พ.ร.บ.การชุมนุมสาธารณะฯ ดำเนินคดีควบคู่ไปกับคำสั่งหัวหน้า
            คสช. อย่างน้อย 276 คน<br /><br />
            มีการใช้ข้อหา “ยุยงปลุกปั่น” ตามประมวลกฎหมายอาญา มาตรา 116
            ดำเนินคดีกับผู้แสดงความคิดเห็นหรือเผยแพร่ข้อมูลวิพากษ์วิจารณ์ คสช.
            หรือเป็นผู้นำปราศรัยในการชุมนุมต่าง ๆ อย่างน้อย 124 คน<br /><br />
            มีการใช้ พ.ร.บ.คอมพิวเตอร์ฯ
            ดำเนินคดีกับผู้แสดงความคิดเห็นทางการเมืองบนโลกออนไลน์ อย่างน้อย 197
            คน
          </p>
        </div>
        <div
          class="p-3 text-white bg-black wv-font-anuphan wv-b3 newspaper-text"
        >
          <p class="yellow mb-1 wv-font-black">
            ช่วงรัฐบาลประยุทธ์ที่มาจากการเลือกตั้ง ด้วยกติกาไม่เป็นธรรม
          </p>
          <p class="m-0">
            มีการใช้ พ.ร.บ.การชุมนุมสาธารณะฯ ดำเนินคดีกับ
            ประชาชนที่ออกมาชุมนุมทางการเมือง อย่างน้อย 28 คน<br /><br />

            มีการใช้ พ.ร.บ.คอมพิวเตอร์ฯ
            ดำเนินคดีกับผู้แสดงความคิดเห็นทางการเมืองบนโลกออนไลน์ อย่างน้อย 42
            คน
          </p>
        </div>
        <template #prevArrow="arrowOption">
          <img :src="button_left_newspaper" alt="button_left_default" />
        </template>
        <template #nextArrow="arrowOption">
          <img :src="button_right_newspaper" alt="button_right_default" />
        </template>
      </VueSlickCarousel>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Scrollama from "vue-scrollama";
export default {
  components: {
    Scrollama,
  },
  data() {
    return {
      newspaper_1: require("~/assets/images/newspaper/01_newspaper.png"),
      newspaper_2: require("~/assets/images/newspaper/02_newspaper.png"),
      newspaper_3: require("~/assets/images/newspaper/03_newspaper.png"),
      newspaper_4: require("~/assets/images/newspaper/04_newspaper.png"),
      click: require("~/assets/images/click.svg"),
      timeline_newspaper: require("~/assets/images/timeline_newspaper.svg"),
      button_left_newspaper: require("~/assets/images/button_left_newspaper.svg"),
      button_right_newspaper: require("~/assets/images/button_right_newspaper.svg"),
      isFade: false,
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    showNewspaperText(slide) {
      this.$refs["newspaper-modal"].show();
      this.$nextTick(() => {
        this.$refs.newspaper.goTo(slide);
      });
      setTimeout(() => {
        
        document.getElementById("wrap-modal-slider").classList.add('open');
      }, 500);
    },
    handler({ element, index, direction }) {
      if (index >= 1) this.isFade = true;
      else this.isFade = false;
    },
    onHandleCloseModal() {
      document.getElementById("wrap-modal-slider").classList.remove('open');
    }
  },
};
</script>

<style scoped>
.newspaper-slick .slick-next {
  width: 33px;
  right: -50px;
}

.newspaper-slick .slick-prev {
  width: 33px;
  left: -50px;
}
</style>

<style lang="scss" scoped>
.newspaper-box {
  max-width: 1280px;
  margin: auto;
}

.newspaper_1 {
  transform: rotate(-13.28deg);
  position: relative;
  left: 10%;
  top: 5%;
  cursor: pointer;

  @media #{$mq-mini-mobile} {
    left: unset;
    top: unset;
    transform: rotate(5deg);
    max-width: 95%;
  }
}

.newspaper_2 {
  transform: rotate(-7.68deg);
  cursor: pointer;

  @media #{$mq-mini-mobile} {
    transform: rotate(5deg);
    max-width: 95%;
  }
}

.newspaper_3 {
  transform: rotate(7.68deg);
  position: relative;
  right: 5%;
  cursor: pointer;

  @media #{$mq-mini-mobile} {
    right: unset;
    transform: rotate(5deg);
    max-width: 95%;
  }
}

.newspaper_4 {
  transform: rotate(13.28deg);
  position: relative;
  right: 10%;
  top: 5%;
  cursor: pointer;

  @media #{$mq-mini-mobile} {
    right: unset;
    top: unset;
    transform: rotate(5deg);
    max-width: 95%;
  }
}

.long-arrow {
  height: 80px;
  border-left: 3px dashed #ffffff;
  width: 2px;
  margin: auto;

  @media #{$mq-mini-mobile} {
    height: 40px;
  }
}

.short-arrow {
  height: 40px;
  border-left: 3px dashed #ffffff;
  width: 2px;
  margin: auto;
}

.newspaper-text {
  max-width: 470px;
  margin: auto;
}

.circle {
  width: 50vh;
  height: 50vh;
  margin: 25vh auto;
  transition: 0.5s;
  background: #ffffff;
  filter: blur(29px);
  border-radius: 50%;

  @media #{$mq-mini-mobile} {
    width: 180px;
    height: 180px;
    margin: 40vh auto;
    filter: blur(15px);
    transform: scale(2);
  }
}

.scaled {
  transform: scale(10);
  filter: unset;
}

.circle-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50vh;
  height: 50vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  // @media #{$mq-tablet} {
  //   width: 75vh;
  //   height: 75vh;
  //   margin: 15vh auto;
  // }

  @media #{$mq-mini-mobile} {
    width: 300px;
    height: 300px;
  }
}

.circle-text-2 {
  opacity: 0;
}

.fade {
  opacity: 0;
}

.fadeIn {
  opacity: 1;
}

.circle-scale {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

img {
  @media #{$mq-mini-mobile} {
    max-width: 95%;
  }
}

.newspaper:hover {
  opacity: 0.5;
}

.wrap-modal-slider {
  opacity: 0;
  transition: all 0.3s;
}

.wrap-modal-slider.open {
  opacity: 1;
}
</style>