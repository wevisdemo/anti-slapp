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
        py-5
      "
    >
      <div class="w-100 broken-hammer-section">
        <p class="wv-font-kondolar wv-b2">
          “ยุติธรรมทำลาย” <br class="d-inline" /><br class="d-inline" />

          “ความอยุติธรรม” จากการใช้ “กฎหมาย”<br />
          เป็นเครื่องมือจำกัดสิทธิเสรีภาพของประชาชน<br class="d-inline" /><br
            class="d-inline"
          />

          สมควรต้อง “ถูกกำจัด” ไปให้หมดสิ้น
        </p>
        <img :src="broken_hammer" alt="broken_hammer" class="mb-5 mb-sm-0" />
        <p class="wv-font-kondolar wv-b2">
          เพื่อ “ปกป้อง” สิทธิเสรีภาพของคนไทยทุกคน<br />
          ในการพูด แสดงความเห็น<br />
          และวิพากษ์วิจารณ์ในทางสาธารณะ
        </p>
      </div>
    </div>
    <div class="bg-white text-black pt-5">
      <h2 class="wv-font-kondolar wv-font-black text-center wv-h5 mb-5">
        ติดตามและสนับสนุนคนทำงาน<br />
        เพื่อต่อต้าน “ยุติธรรมทำลาย”
      </h2>

      <VueSlickCarousel v-bind="slickOptions" class="company-slide-wrapper">
        <div class="company-slide" v-for="(item, i) in company_list" :key="i">
          <div class="box">
            <div class="h-auto">
              <img :src="item.img" alt="" width="50%" class="mx-auto" />
              <hr />
              <p class="wv-font-anuphan wv-font-bold m-0">{{ item.name }}</p>
              <p class="wv-font-anuphan">{{ item.desc }}</p>
            </div>

            <b-row
              class="d-flex wv-font-anuphan h-auto"
              v-if="item.hasQrcode"
              no-gutters
            >
              <!-- <b-col cols="5">
                <img :src="item.img_qrcode" alt="" width="75%" />
              </b-col> -->
              <b-col cols="12" class="">
                <div v-if="item.id == 5">
                  <p class="font-weight-bold mb-1">
                    ชลิตา บัณฑุวงศ์ และ ไอดา อรุณวงศ์ฯ
                  </p>
                  <p class="m-0">086-2-70434-7</p>
                  <p class="m-0">ธนาคารกสิกรไทย</p>
                  <p class="m-0">สาขาศาลยุติธรรม</p>
                </div>
                <div v-if="item.id == 6">
                  <p class="font-weight-bold">อัจฉรา และ มุทิตา</p>
                  <p class="m-0">093-8-92403-1</p>
                  <p class="m-0">ธนาคารกสิกรไทย</p>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="d-flex justify-content-center h-auto link-web">
            <div v-for="(item2, j) in item.web" :key="j" class="mx-1">
              <a :href="item2.link" target="_blank" rel="noopener noreferrer"
                ><img :src="item2.logo" alt=""
              /></a>
            </div>
          </div>
        </div>
        <template #prevArrow="arrowOption">
          <img :src="button_left_default" alt="button_left_default" />
        </template>
        <template #nextArrow="arrowOption">
          <img :src="button_right_default" alt="button_right_default" />
        </template>
      </VueSlickCarousel>

      <div class="paper-box my-5 position-relative px-1" id="paper">
        <div class="text-wrapper">
          <h2 class="wv-font-kondolar wv-font-black text-center wv-h5">
            กำลังใจสู่ผู้ถูก “ยุติธรรมทำลาย”
          </h2>
          <hr />
          <p class="wv-font-kondolar text-center wv-b2 m-0">
            ถึง: ประชาชนผู้ทนทุกข์จาก “ยุติธรรมทำลาย”
          </p>
        </div>
        <img
          :src="notecolor == 'pink' ? paper_pink : paper_white"
          alt="desktop_paper"
          width="100%"
        />
        <!-- <img
          :src="mobile_paper"
          alt="desktop_paper"
          class="d-block d-sm-none"
          width="100%"
        /> -->

        <textarea
          id="text-area"
          class="textarea wv-font-kondolar wv-b2"
          name="poll-description"
          v-model="encourage_text"
          maxlength="120"
          @keyup="textareaLengthCheck"
          @keydown="textareaLengthCheck"
        ></textarea>
        <span class="wv-font-anuphan wv-b4 charactersLeft" v-if="isShow"
          >({{ charactersLeft }}/120)</span
        >
      </div>

      <div class="d-flex justify-content-center mb-5 align-items-center">
        <span class="wv-font-kondolar text-center wv-b2 m-0">เลือกสี :</span>
        <div class="pinknote note mx-1" @click="test('pink')"></div>
        <div class="whitenote note mx-1" @click="test('white')"></div>
      </div>

      <div class="text-center my-3 px-2">
        <WvButtonGroup :center="true">
          <WvButton color="black" :onClick="downloadImageAndSendMsg">
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.9707 11H1V22H20V11C20 11 15.3963 11 14.0293 11"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M5.42578 7.30322L10.7291 1.99992L16.0324 7.30322"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <line
                x1="10.791"
                y1="15.4585"
                x2="10.791"
                y2="2.9585"
                stroke="black"
                stroke-width="2"
              />
            </svg>

            <span>ส่งข้อความ</span>
          </WvButton>
          <WvButton color="black" :onClick="downloadImage">
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
        <a href="https://wevis.info/" target="_blank" rel="noopener noreferrer">
          <img :src="logo_wevis" alt="logo_wevis" width="150"
        /></a>
        <p class="wv-font-kondolar text-center wv-b2 wv-font-black mt-3">
          สนับสนุนข้อมูลหลักโดย
        </p>
        <a
          href="https://tlhr2014.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="logo_tlhr" alt="logo_wevis" width="150"
        /></a>
      </div>

      <img :src="pic_footer" alt="pic_footer" width="100%" />
    </div>

    <b-modal
      id="note-modal"
      ref="note-modal"
      hide-footer
      hide-header
      hide-backdrop
      centered
    >
      <div class="p-4 bg-white text-center">
        <template v-if="notetype == 1">
          <img :src="icon_correct" width="70" alt="" />
          <p class="wv-font-kondolar text-center wv-b2 m-0 wv-font-black">
            ส่งข้อความเรียบร้อย
          </p>
          <p class="wv-font-anuphan text-center wv-b3 m-0">
            ขอบคุณทุกกำลังใจ<br />
            ที่มีต่อประชาชนผู้ถูก<br />"ยุติธรรมทำลาย"
          </p>
        </template>
        <template v-else-if="notetype == 2">
          <img :src="icon_correct" width="70" alt="" />
          <p class="wv-font-kondolar text-center wv-b2 m-0 wv-font-black">
            ดาวน์โหลดเรียบร้อย
          </p>
          <p class="wv-font-anuphan text-center wv-b3 m-0">
            อย่าลืมแชร์ลงโซเซียลของคุณ<br />
            เพื่อให้กำลังใจกับเหล่าประชาชน<br />
            ที่โดน “ยุติธรรมทำลาย”
          </p></template
        >
        <template v-else-if="notetype == 3">
          <img :src="icon_failed" width="70" alt="" />
          <p class="wv-font-kondolar text-center wv-b2 m-0 wv-font-black">
            ไม่สำเร็จ!
          </p>
          <p class="wv-font-anuphan text-center wv-b3 m-0">
            โปรดกรอกข้อความ<br />
            ก่อนกดปุ่มดาวน์โหลด หรือส่งข้อความ
          </p></template
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import WvButtonGroup from "@wevisdemo/ui/components/button-group.vue";
import WvButton from "@wevisdemo/ui/components/button.vue";
import WvSharer from "@wevisdemo/ui/components/sharer.vue";
import html2canvas from "html2canvas";
import { uuid } from "vue-uuid";

const encourage_slapp =
  "https://spreadsheet.punchup.world/nc/slapp_am8d/api/v1/encourage-slapp";

let config = {
  headers: {
    "xc-auth":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpbXBhdGlwYW5AcHVuY2h1cC53b3JsZCIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoyLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE2NDQ0NzI1ODl9.jwq4PH2VA3mjhfXR0hzaJRz4h7x02s4ZOcEZB9UGMh8",
    "Content-Type": "application/json",
  },
};

export default {
  components: {
    WvButton,
    WvButtonGroup,
    WvSharer,
    html2canvas,
  },
  data() {
    return {
      uuid: uuid.v1(),
      charactersLeft: 120,
      isShow: true,
      notecolor: "pink",
      notetype: 0,
      encourage_text: "",
      broken_hammer: require("~/assets/images/broken_hammer.svg"),
      pic_footer: require("~/assets/images/pic_footer.png"),
      paper_pink: require("~/assets/images/paper_pink.png"),
      paper_white: require("~/assets/images/paper_white.png"),
      desktop_paper: require("~/assets/images/desktop_paper.png"),
      mobile_paper: require("~/assets/images/mobile_paper.png"),
      icon_download: require("~/assets/images/icon_download.svg"),
      icon_correct: require("~/assets/images/icon_correct.svg"),
      icon_failed: require("~/assets/images/icon_failed.svg"),
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
              slidesToScroll: 1,
            },
          },
        ],
      },
      company_list: [
        {
          id: 1,
          name: "ศูนย์ทนายความเพื่อสิทธิมนุษยชน (TLHR)",
          img: require("~/assets/images/label_company/logo_tlhr.png"),
          desc: "การรวมตัวของกลุ่มทนายความ นักกฎหมาย สิทธิมนุษยชน หลังการรัฐประหารของ คสช. มีวัตถุประสงค์เพื่อบันทึกข้อมูลการละเมิด สิทธิมนุษยชนในประเทศไทยภายหลังการ รัฐประหาร ดำเนินการให้ความช่วยเหลือ ทางกฎหมายแก่ผู้ได้รับผลกระทบ",
          hasQrcode: false,
          img_qrcode: "",
          web: [
            {
              link: "https://www.facebook.com/lawyercenter2014",
              logo: require("~/assets/images/logo_fb.svg"),
            },
            {
              link: "https://twitter.com/TLHR2014?s=20",
              logo: require("~/assets/images/logo_twitter.svg"),
            },
            {
              link: "https://tlhr2014.com/ ",
              logo: require("~/assets/images/logo_web.svg"),
            },
          ],
        },
        {
          id: 2,
          name: "สมาคมนักกฎหมายสิทธิมนุษยชน (สนส.)",
          img: require("~/assets/images/label_company/logo_hrla.png"),
          desc: "การรวมตัวกันของกลุ่มนักกฎหมาย ทนายความและคนทำงานด้านสิทธิมนุษยชน ที่มีความมุ่งมั่นในการปฏิบัติงาน เพื่อส่งเสริม หลักนิติธรรม ความเป็นธรรมในสังคม และ คุ้มครองสิทธิมนุษยชน ทั้งในทางวิชาการ และการใช้มาตรฐานทางกฎหมาย",
          hasQrcode: false,
          img_qrcode: "",
          web: [
            {
              link: "https://www.facebook.com/naksit.org/",
              logo: require("~/assets/images/logo_fb.svg"),
            },
            {
              link: "https://naksit.net/",
              logo: require("~/assets/images/logo_web.svg"),
            },
          ],
        },
        {
          id: 3,
          name: "โครงการอินเทอร์เน็ตเพื่อกฎหมาย ประชาชน (iLaw)",
          img: require("~/assets/images/label_company/logo_ilaw.png"),
          desc: "องค์กรซึ่งทำงานกับภาคประชาสังคมและ คนทั่วไปในสังคมมีเป้าหมายเพื่อไปให้ถึง หลักการประชาธิปไตยเสรีภาพในการ แสดงออกและระบบยุติธรรมที่เป็นธรรม และตรวจสอบได้กว่าที่เป็นอยู่ในปัจจุบัน",
          hasQrcode: false,
          img_qrcode: "",
          web: [
            {
              link: "https://www.facebook.com/iLawClub",
              logo: require("~/assets/images/logo_fb.svg"),
            },
            {
              link: "https://twitter.com/iLawFX?s=20",
              logo: require("~/assets/images/logo_twitter.svg"),
            },
            {
              link: "https://twitter.com/iLawclub?s=20",
              logo: require("~/assets/images/logo_twitter.svg"),
            },
            {
              link: "https://www.ilaw.or.th/",
              logo: require("~/assets/images/logo_web.svg"),
            },
          ],
        },
        {
          id: 4,
          name: "ภาคีนักกฎหมายสิทธิมนุษยชน",
          img: require("~/assets/images/label_company/logo_legal_associate.png"),
          desc: "การรวมตัวของกลุ่มนักกฎหมายและ ทนายความ ที่ช่วยเหลือประชาชนให้เข้าถึง ความยุติธรรมตามนิติรัฐ นิติธรรมอย่างที่ควร จะเป็น เพื่อให้รัฐหยุดการคุกคามประชาชน ในนามของกฎหมาย",
          hasQrcode: false,
          img_qrcode: "",
          web: [
            {
              link: "https://www.facebook.com/HRLawyersAlliance/",
              logo: require("~/assets/images/logo_fb.svg"),
            },
            {
              link: "https://twitter.com/HRLawyersTH?s=20",
              logo: require("~/assets/images/logo_twitter.svg"),
            },
          ],
        },
        {
          id: 5,
          name: "กองทุนราษฎรประสงค์",
          img: require("~/assets/images/label_company/fund.png"),
          desc: "กองทุนเพื่อเงินวางประกันตัวและเงินค่าปรับ ในคดีที่เกี่ยวเนื่องกับการใช้สิทธิเสรีภาพ ในการแสดงออกทางการเมือง",
          hasQrcode: true,
          img_qrcode: require("~/assets/images/willofthepeoplefund-qr.jpg"),
          web: [
            {
              link: "https://www.facebook.com/willofthepeoplefund/",
              logo: require("~/assets/images/logo_fb.svg"),
            },
          ],
        },
        {
          id: 6,
          name: "กองทุนดาตอร์ปิโด",
          img: require("~/assets/images/label_company/fund_2.png"),
          desc: "กองทุนเพื่อเพื่อช่วยเหลือผู้ถูกจับกุม ที่เกี่ยวข้องกับการชุมนุม หรือคดี ทางการเมืองอื่น ๆ",
          hasQrcode: true,
          img_qrcode: require("~/assets/images/FOTOofSilence-qr.jpg"),
          web: [
            {
              link: "https://www.facebook.com/FOTOofSilence/",
              logo: require("~/assets/images/logo_fb.svg"),
            },
            {
              link: "https://twitter.com/FOTOofSilence?s=20",
              logo: require("~/assets/images/logo_twitter.svg"),
            },
          ],
        },
      ],
    };
  },
  methods: {
    test(color) {
      this.notecolor = color;
    },
    textareaLengthCheck() {
      var textarea = document.getElementById("text-area");
      var textArea = textarea.value.length;
      var charactersLeft = 120 - textArea;
      this.charactersLeft = charactersLeft;
    },
    async downloadImageAndSendMsg() {
      if (this.encourage_text != "") {
        this.notetype = 1;
        if (process.client)
          document.getElementById("text-area").classList.add("italic_notetext");

        await this.$axios
          .$post(
            encourage_slapp,
            {
              text: this.encourage_text,
              date: this.$moment().format("DD/MM/YYYY HH:mm"),
            },
            config
          )
          .then((response) => {
            console.log("send !");
            this.downloadImg();
          })
          .catch((error) => {
            console.log(error);
          });

        this.$refs["note-modal"].show();
      } else {
        this.notetype = 3;
        this.$refs["note-modal"].show();
      }
    },
    downloadImage() {
      if (this.encourage_text != "") {
        if (process.client)
          document.getElementById("text-area").classList.add("italic_notetext");
        this.notetype = 2;
        this.$refs["note-modal"].show();

        this.downloadImg();
      } else {
        this.notetype = 3;
        this.$refs["note-modal"].show();
      }
    },
    downloadImg() {
      this.isShow = false;
      setTimeout(() => {
        if (process.client) {
          html2canvas(document.querySelector("#paper")).then((canvas) => {
            var a = document.createElement("a");
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas
              .toDataURL("image/jpeg")
              .replace("image/jpeg", "image/octet-stream");
            a.download =
              this.uuid + "_" + this.$moment().format("DDMMYYYY") + ".jpg";
            a.click();
          });
        }
      }, 1000);

      setTimeout(() => {
        this.isShow = true;
        this.$refs["note-modal"].hide();
        if (process.client)
          document
            .getElementById("text-area")
            .classList.remove("italic_notetext");
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.slick-prev,
.slick-next {
  width: 40px;
  height: 40px;
}

.slick-disabled {
  display: none;
}

.slick-prev {
  @media #{$mq-small-laptop} {
    left: 0;
    z-index: 1;
  }
}

.slick-dots li button:before {
  font-size: 16px;
  opacity: 1 !important;
  -webkit-text-stroke: 1px black;
  color: #fff;
}

.slick-dots li.slick-active button:before {
  opacity: 1;
}

.slick-next {
  @media #{$mq-small-laptop} {
    right: 0;
    z-index: 1;
  }
}

.company-slide-wrapper .slick-track {
  display: flex !important;
}

.company-slide-wrapper .slick-slide {
  height: inherit !important;
}

.company-slide-wrapper .slick-slide div {
  height: 100%;
}

.slide {
  display: table-cell !important;
  float: none !important;
}
</style>

<style lang="scss" scoped>
.link-web {
  position: relative;
  bottom: 25px;
  z-index: 20;

  img {
    background: white;
    border-radius: 50%;
  }
}

.company-slide {
  height: 100%;
  .box {
    border: 1px solid #000000;
    padding: 20px 30px;
    border-radius: 15px;
    margin: 0 10px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 10;

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

  @media #{$mq-mini-mobile} {
    top: 15px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  hr {
    border-top: 3px solid #000;
    width: 75%;
  }
}

hr {
  border-top: 3px solid #000;
  width: 75%;
}

.broken-hammer-section {
  br {
    @media #{$mq-mini-mobile} {
      display: none;
    }
  }

  img {
    @media #{$mq-mini-mobile} {
      max-width: 100%;
    }
  }
}

.textarea {
  width: 80%;
  height: 60%;
  position: absolute;
  top: 27%;
  left: 12%;
  background: none;
  border: none;
}

.textarea:hover {
  border: none;
  outline: none;
}

.charactersLeft {
  position: absolute;
  bottom: 5%;
  left: 50%;
}

.note {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid #535349;
  cursor: pointer;
}

.pinknote {
  background: #fbb3bf;
}

.whitenote {
  background: #f6f6f6;
}

.italic_notetext {
  transform: rotate(-3deg);
}
</style>