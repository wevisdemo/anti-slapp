<template>
  <div>
    <div
      class="
        bg-white
        h-100vh
        text-black
        d-flex
        justify-content-center
        align-items-lg-center
        text-center
      "
    >
      <div>
        <p class="wv-font-kondolar wv-b2">
          “ยุติธรรมทำลาย” <br /><br />

          “ความอยุติธรรม” จากการใช้ “กฎหมาย”<br />
          เป็นเครื่องมือจำกัดสิทธิเสรีภาพของประชาชน<br /><br />

          สมควรต้อง “ถูกกำจัด” ไปให้หมดสิ้น
        </p>
        <img :src="broken_hammer" alt="broken_hammer" />
        <p class="wv-font-kondolar wv-b2">
          เพื่อ “ปกป้อง” สิทธิเสรีภาพของคนไทยทุกคน<br />
          ในการพูด แสดงความเห็น<br />
          และวิพากษ์วิจารณ์ในทางสาธารณะ
        </p>
      </div>
    </div>
    <div class="bg-white text-black pt-5">
      <h2 class="wv-font-kondolar wv-font-black text-center wv-h5 mb-5">
        ขอชวนร่วมเป็นส่วนหนึ่ง<br />
        เพื่อแสดงจุดยืนต่อต้าน “ยุติธรรมทำลาย”
      </h2>

      <VueSlickCarousel v-bind="slickOptions" class="company-slide-wrapper">
        <div class="company-slide" v-for="(item, i) in company_list" :key="i">
          <div class="box">
            <img :src="item.img" alt="" width="50%" class="mx-auto" />
            <hr />
            <p class="wv-font-anuphan wv-font-bold m-0">{{ item.name }}</p>
            <p class="wv-font-anuphan">{{ item.desc }}</p>
          </div>
        </div>
        <template #prevArrow="arrowOption">
          <img :src="button_left_default" alt="button_left_default" />
        </template>
        <template #nextArrow="arrowOption">
          <img :src="button_right_default" alt="button_right_default" />
        </template>
      </VueSlickCarousel>

      <div class="paper-box my-5 position-relative">
        <div class="text-wrapper">
          <h2 class="wv-font-kondolar wv-font-black text-center wv-h5">
            กำลังใจสู่ผู้ถูก “ยุติธรรมทำลาย”
          </h2>
          <hr />
          <p class="wv-font-kondolar text-center wv-b2 m-0">
            ถึง: ประชาชนผู้ทนทุกข์จาก “ยุติธรรมทำลาย”
          </p>
        </div>
        <img :src="desktop_paper" alt="desktop_paper" width="100%" />
      </div>

      <div class="text-center my-3">
        <WvButtonGroup :center="true">
          <WvButton color="black">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_314_173)">
                <path
                  d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <line
                  x1="10.667"
                  y1="0.5"
                  x2="10.667"
                  y2="13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_314_173">
                  <rect
                    width="20.8333"
                    height="20"
                    fill="white"
                    transform="translate(0.0834961 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>ดาวน์โหลด</span>
          </WvButton>
        </WvButtonGroup>

        <h2 class="wv-font-kondolar text-center wv-h5 my-5">
          ร่วมส่งเสียงเพื่อพวกเขา ผ่านการแชร์งานนี้<br />
          พร้อมติดแฮ็ชแท็ค
        </h2>

        <h1 class="wv-font-kondolar text-center wv-h1 wv-font-black">
          #ยุติธรรมทำลาย
        </h1>

        <WvSharer url="https://wevisdemo.github.io/slapp" center="true" />

        <hr class="w-50 my-5" />
        <p class="wv-font-kondolar text-center wv-b2 wv-font-black">
          สร้างสรรค์โดย
        </p>
        <img :src="logo_wevis" alt="logo_wevis" width="150" />
        <p class="wv-font-kondolar text-center wv-b2 wv-font-black mt-3">
          สนับสนุนข้อมูลหลักโดย
        </p>
        <img :src="logo_tlhr" alt="logo_tlhr" width="150" />
      </div>

      <img :src="pic_footer" alt="pic_footer" width="100%" />
    </div>
  </div>
</template>

<script>
import WvButtonGroup from "@wevisdemo/ui/components/button-group.vue";
import WvButton from "@wevisdemo/ui/components/button.vue";
import WvSharer from "@wevisdemo/ui/components/sharer.vue";

export default {
  components: {
    WvButton,
    WvButtonGroup,
    WvSharer,
  },
  data() {
    return {
      broken_hammer: require("~/assets/images/broken_hammer.svg"),
      pic_footer: require("~/assets/images/pic_footer.png"),
      desktop_paper: require("~/assets/images/desktop_paper.png"),
      icon_download: require("~/assets/images/icon_download.svg"),
      logo_wevis: require("~/assets/images/logo_wevis.svg"),
      logo_tlhr: require("~/assets/images/logo_tlhr.svg"),
      button_left_default: require("~/assets/images/button/button_left_default.svg"),
      button_right_default: require("~/assets/images/button/button_right_default.svg"),
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        dots: true,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      company_list: [
        {
          name: "ศูนย์ทนายความเพื่อสิทธิมนุษยชน (TLHR)",
          img: require("~/assets/images/label_company/logo_tlhr.png"),
          desc: "การรวมตัวของกลุ่มทนายความ นักกฎหมาย สิทธิมนุษยชน หลังการรัฐประหารของ คสช. มีวัตถุประสงค์เพื่อบันทึกข้อมูลการละเมิด สิทธิมนุษยชนในประเทศไทยภายหลังการ รัฐประหาร ดำเนินการให้ความช่วยเหลือ ทางกฎหมายแก่ผู้ได้รับผลกระทบ",
        },
        {
          name: "สมาคมนักกฎหมายสิทธิมนุษยชน (สนส.)",
          img: require("~/assets/images/label_company/logo_hrla.png"),
          desc: "การรวมตัวกันของกลุ่มนักกฎหมาย ทนายความและคนทำงานด้านสิทธิมนุษยชน ที่มีความมุ่งมั่นในการปฏิบัติงาน เพื่อส่งเสริม หลักนิติธรรม ความเป็นธรรมในสังคม และ คุ้มครองสิทธิมนุษยชน ทั้งในทางวิชาการ และการใช้มาตรฐานทางกฎหมาย",
        },
        {
          name: "โครงการอินเทอร์เน็ตเพื่อกฎหมาย ประชาชน (iLaw)",
          img: require("~/assets/images/label_company/logo_ilaw.png"),
          desc: "องค์กรซึ่งทำงานกับภาคประชาสังคมและ คนทั่วไปในสังคมมีเป้าหมายเพื่อไปให้ถึง หลักการประชาธิปไตยเสรีภาพในการ แสดงออกและระบบยุติธรรมที่เป็นธรรม และตรวจสอบได้กว่าที่เป็นอยู่ในปัจจุบัน",
        },
        {
          name: "ภาคีนักกฎหมายสิทธิมนุษยชน",
          img: require("~/assets/images/label_company/logo_legal_associate.png"),
          desc: "การรวมตัวของกลุ่มนักกฎหมายและ ทนายความ ที่ช่วยเหลือประชาชนให้เข้าถึง ความยุติธรรมตามนิติรัฐ นิติธรรมอย่างที่ควร จะเป็น เพื่อให้รัฐหยุดการคุกคามประชาชน ในนามของกฎหมาย",
        },
        {
          name: "กองทุนราษฎรประสงค์",
          img: require("~/assets/images/label_company/fund.png"),
          desc: "กองทุนเพื่อเงินวางประกันตัวและเงินค่าปรับ ในคดีที่เกี่ยวเนื่องกับการใช้สิทธิเสรีภาพ ในการแสดงออกทางการเมือง",
        },
        {
          name: "กองทุนดาตอร์ปิโด",
          img: require("~/assets/images/label_company/fund_2.png"),
          desc: "กองทุนเพื่อเพื่อช่วยเหลือผู้ถูกจับกุม ที่เกี่ยวข้องกับการชุมนุม หรือคดี ทางการเมืองอื่น ๆ",
        },
      ],
    };
  },
};
</script>

<style>
.slick-prev,
.slick-next {
  width: 50px;
  height: 50px;
}

/* .slick-track {
    display: table !important;
}

.slick-slide {
  height: auto;
}

.slide {
  display: table-cell !important;
  float: none !important;
} */
</style>

<style lang="scss" scoped>
.company-slide {
  .box {
    border: 1px solid #000000;
    padding: 20px;
    border-radius: 15px;
    margin: 0 10px;

    hr {
      border-top: 1px solid #000;
    }
  }
}

.company-slide-wrapper {
  max-width: 1200px;
  margin: auto;
}

.paper-box {
  max-width: 600px;
  margin: auto;
}

.text-wrapper {
  position: absolute;
  right: 0;
  left: 0;
  top: 25px;

  hr {
    border-top: 3px solid #000;
    width: 75%;
  }
}

hr {
  border-top: 3px solid #000;
  width: 75%;
}
</style>