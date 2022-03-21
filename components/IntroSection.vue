<template>
  <div class="wv-font-kondolar">
    <div
      class="
        min-h-screen
        bg-black
        text-center
        intro
        w-100
        d-flex
        align-items-center
        justify-content-center
        overflow-hidden
        flex-column
      "
    >
      <div class="position-relative head-intro">
        <h1 class="text-white wv-font-black head-1" :class="[{ fade: isFade }]">
          ยุติธรรม
        </h1>
        <h1 class="text-white wv-font-black head-2" :class="[{ fade: isFade }]">
          ทำ <span class="sub-1">ล</span><span class="sub-2">า</span
          ><span class="sub-3">ย</span>
        </h1>
        <h2
          class="text-white wv-font-black mb-5 wv-h6 head-3"
          :class="[{ fade: isFade }]"
        >
          เมื่อกฎหมาย คุกคาม ประชาชน
        </h2>
        <img
          :src="hammer"
          alt="hammer"
          :class="[{ rotate: isFade }, 'hammer']"
        />
        <img :src="star" alt="star" :class="[{ fade: isFade }, 'star']" />
        <div>
          <img :src="arrow_circle" alt="arrow_circle" />
        </div>
      </div>
      <div class="position-relative text-white">
        <div class="intro-sub">
          <div class="text">
            <div class="box wv-h8 mb-5">
              เมื่อระบบยุติธรรม<br />ที่ควรใช้คุ้มครองสิทธิเสรีภาพประชาชน<br />
              แปรเปลี่ยนเป็นสภาพตรงข้าม<br />
              <span class="wv-font-black">นั่นคือ “ยุติธรรมทำลาย”</span>
            </div>

            <div class="box wv-h8 mb-5">
              ระบบซึ่ง “กฎหมาย”<br />
              คุกคาม “ประชาชน”
            </div>
            <div class="box wv-h8 mb-5">
              “ยุติธรรมทำลาย” ทำร้ายคนไทยอย่างไร ?<br />
              หาคำตอบและส่งเสียงเพื่อพวกเขาได้ที่นี่
            </div>
          </div>
          <div class="text-center">
            <h2 class="wv-h2 wv-font-black">“พวกเขา ผิดอะไร ?”</h2>
            <p class="wv-font-anuphan wv-h9 mb-2">
              ตั้งแต่ช่วงกลางปี 2563 เป็นต้นมา<br />
              ประชาชนถูกดำเนินคดีจากสถานการณ์ชุมนุมทางการเมือง<br />
              และการแสดงความคิดเห็นทางการเมือง
            </p>
            <h2 class="wv-h4">กว่า 1,750 คน ++</h2>
            <p class="wv-font-anuphan wv-b6 mb-2">
              * ข้อมูลช่วงวันที่ 18 ก.ค. 2563 - 27 ม.ค. 2565
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hammer: require("~/assets/images/hammer.png"),
      star: require("~/assets/images/star.svg"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      isFade: false,
    };
  },
  mounted() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
      if (window.scrollY > 0) {
        this.isFade = true;
      } else {
        this.isFade = false;
      }
    }
  },
  destroyed() {
    if (process.client) window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (process.client) {
        if (window.scrollY > 0) {
          this.isFade = true;
        } else {
          this.isFade = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.intro {
  h1 {
    font-size: 240px;

    @media #{$mq-small-laptop} {
      font-size: 200px;
    }

    @media #{$mq-mini-mobile} {
      font-size: 80px;
    }
  }

  .head-1 {
    transition: 1s;
    transform: rotate(2.02deg);
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    line-height: 100%;
  }

  .head-2 {
    transition: 1s;
    transform: rotate(-4.91deg);
    position: relative;
    z-index: 3;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);

    .sub-1 {
      display: inline-block;
      transform: rotate(8.92deg) !important ;
      position: relative;
      left: 10%;
    }

    .sub-2 {
      display: inline-block;
      transform: rotate(-15.53deg) !important ;
      position: relative;
      left: 10%;
      bottom: 15%;
    }

    .sub-3 {
      display: inline-block;
      transform: rotate(14.23deg) !important ;
      position: relative;
      left: 10%;
    }
  }

  .head-3 {
    position: relative;
    z-index: 30;
  }
}

.hammer {
  position: absolute;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
  transform: rotate(-56.76deg);
  transition: 1s;
  width: 400px;
  left: 0;
  top: 1100px;
  right: 25%;
  margin: auto;
  bottom: 0;
  transform-origin: top;
  z-index: 2;

  @media #{$mq-mini-mobile} {
    width: 175px;
    top: 420px;
  }
}

.intro-sub {
  z-index: 5;
  position: relative;
  .box {
    max-width: 450px;
    padding: 20px;
    text-align: center;
    color: #fff;
    background: #000;
    margin: auto;

    @media #{$mq-mini-mobile} {
      padding: 10px;
    }
  }
  .text {
    padding-bottom: 25%;
    // position: relative;
    // bottom: 225px;
  }
}

.rotate {
  right: 0;
  transform: rotate(0deg);
}

.fade {
  opacity: 0;
}

.head-intro {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.star {
  position: absolute;
  left: 15%;
  top: 35%;
  z-index: 1;
  @media #{$mq-tablet} {
    top: 40%;
  }
  @media #{$mq-mini-mobile} {
    width: 200px;
    top: 38%;
  }
}
</style>