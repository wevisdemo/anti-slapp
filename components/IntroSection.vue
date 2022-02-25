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
      <div class="position-relative">
        <h1 class="text-white wv-font-black head-1">ยุติธรรม</h1>
        <h1 class="text-white wv-font-black head-2">ทำ ลาย</h1>
        <h2 class="text-white wv-font-black mb-5 wv-h6">
          เมื่อกฎหมาย คุกคาม ประชาชน
        </h2>
        <img :src="hammer" alt="hammer" class="hammer" />
        <img :src="arrow_circle" alt="arrow_circle" />
      </div>
    </div>
    <div class="py-5 bg-black text-white">
      <div class="intro-sub">
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
          ยุติธรรมทำลาย” ทำร้ายคนไทยอย่างไร ?<br />
          หาคำตอบและส่งเสียงเพื่อพวกเขาได้ที่นี่
        </div>
        <div class="text-center">
          <h2 class="wv-h2 wv-font-black">“พวกเขา ผิดอะไร ?”</h2>
          <p class="wv-font-anuphan wv-h9 mb-2">
            ตั้งแต่ช่วงกลางปี 2563 เป็นต้นมา<br />
            ประชาชนถูกดำเนินคดีจากสถานการณ์ชุมนุมทางการเมือง<br />
            และการแสดงความคิดเห็นทางการเมือง
          </p>
          <h2 class="wv-h4">กว่า 1,750 คน ++</h2>
          <p class="wv-font-anuphan wv-b6 mb-2">* ข้อมูล ณ วันที่ 27 ม.ค. 2565</p>
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
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.intro {
  h1 {
    font-size: 240px;
  }

  .head-1 {
    transform: rotate(2.02deg);
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
  }

  .head-2 {
    transform: rotate(-4.91deg);
    position: relative;
    z-index: 1;
    text-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);

    .subh-1 {
      transform: rotate(8.92deg) !important ;
    }
  }
}

.hammer {
  position: absolute;
  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
  transform: rotate(-56.76deg);
  transition: 0.5s;
  width: 400px;
  left: 75%;
  top: 70%;
  right: 0;
  margin: auto;
  bottom: 0;
}

.intro-sub {
  .box {
    max-width: 450px;
    padding: 20px;
    text-align: center;
    color: #fff;
    margin: auto;
  }
}
</style>