<template>
  <div>
    <div class="min-h-screen bg-black py-5 text-white wv-font-kondolar">
      <h2 class="wv-h4 wv-font-black mb-5 text-center">
        เสียงจากประชาชน<br />
        ผู้ประสบ <span class="yellow">“ยุติธรรมทำลาย”</span>
      </h2>

      <template v-for="(item, i) in people_list">
        <vue-aos animation-class="fadeInUp animated" :key="i">
          <b-row v-if="i % 2 == 0" class="people_list">
            <b-col cols="12" sm="3"
              ><img :src="item.img" width="100%" alt="" />
              <p
                class="text-uppercase gray mb-5 px-2 wv-font-anuphan"
              >
                {{ item.credit }}
              </p></b-col
            >
            <b-col cols="12" sm="9">
              <span class="wv-h4 wv-font-black">"</span>
              <h1 class="wv-h5">{{ item.quote }}"</h1>
              <div>
                <font-awesome-icon
                  :icon="['fas', 'caret-left']"
                  class="text-white"
                />
                <span class="yellow wv-b3 wv-font-black wv-font-anuphan">{{
                  item.name
                }}</span>
                <p
                  class="yellow wv-b6 m-0 wv-font-anuphan"
                  v-html="item.desc"
                ></p>
              </div>
            </b-col>
            <b-col><hr /></b-col>
          </b-row>

          <b-row v-else class="people_list">
            <b-col cols="12" sm="9" class="text-right order-ppl-1">
              <span class="wv-h4 wv-font-black">"</span>
              <h1 class="wv-h5">{{ item.quote }}"</h1>
              <div>
                <span class="yellow wv-b3 wv-font-black wv-font-anuphan">{{
                  item.name
                }}</span>
                <font-awesome-icon
                  :icon="['fas', 'caret-right']"
                  class="text-white"
                />
                <p
                  class="yellow wv-b6 m-0 wv-font-anuphan"
                  v-html="item.desc"
                ></p></div
            ></b-col>
            <b-col cols="12" sm="3" class="order-ppl-0"
              ><img :src="item.img" width="100%" alt=""
            />  <p
                class="text-uppercase text-right gray mb-5 px-2 wv-font-anuphan"
              >
                {{ item.credit }}
              </p></b-col>
            <b-col class="order-ppl-2"><hr v-if="i != 9"/></b-col>
          </b-row>
        </vue-aos>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hammer: require("~/assets/images/hammer.png"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      pic_mob: require("~/assets/images/pic_mob.mp4"),
      people_list: [
        {
          name: "พริษฐ์ ชิวารักษ์ (เพนกวิน)",
          desc: "ถูกดำเนินคดีมาตรา 112, 116, พรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...การต้องเห็นคนที่รักพลอยเดือดร้อนไปด้วย ทำให้รู้สึกปวดใจเป็นอย่างยิ่ง ด้วยไม่รู้ว่าครอบครัวต้องเผชิญกับอะไรบ้างและไม่สามารถเข้าไปบรรเทาความทุกข์ได้เลย...",
          isRelease: false,
          img: require("~/assets/images/quote/01_quote.png"),
          credit: "Cr.iLaw",
        },
        {
          name: "อานนท์ นำภา",
          desc: "ถูกดำเนินคดีมาตรา 112, 116, พรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...ถ้าไปถึงเส้นชัยแล้วไม่เจอผมก็คิดถึง ผมหน่อยแล้วกัน หรือถ้าผมไปถึงเส้นชัยแล้ว ไม่เห็นคุณผมก็จะคิดถึงคุณเหมือนกัน...",
          isRelease: false,
          img: require("~/assets/images/quote/02_quote.png"),
          credit: "Cr.iLaw",
        },
        {
          name: "ปนัสยา สิทธิจิรวัฒนกุล (รุ้ง)",
          desc: "ถูกดำเนินคดีมาตรา 112, 116, พรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...มันอาจจะมีแวบหนึ่งที่เคยคิดเหมือนกันว่า อยากเลิกแล้ว แต่เราก็รู้สึกผิดทั้งต่อตัวเอง และต่อคนอื่นมาก...",
          isRelease: true,
          img: require("~/assets/images/quote/03_quote.png"),
          credit: "Cr.iLaw",
        },
        {
          name: "เบนจา อะปัญ",
          desc: "ถูกดำเนินคดีมาตรา 112, พรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "หนูไม่ได้กลัวคุกนะพี่ แต่หนูแค่สิ้นหวัง สิ้นหวังในกระบวนการยุติธรรม",
          isRelease: true,
          img: require("~/assets/images/quote/04_quote.png"),
          credit: "Cr.iLaw",
        },
        {
          name: "ปนัดดา ศิริมาศกูล (ต๋ง ทะลุฟ้า)",
          desc: "ถูกดำเนินคดีพรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...ยิ่งถูกจับ หนูยิ่งอยากจะสู้ เพราะไม่อยากให้ใคร ต้องมาเจอแบบนี้ ไม่อยากให้ใครเข้าเรือนจำ หรือ ถูกเรียกว่านักโทษ..",
          isRelease: true,
          img: require("~/assets/images/quote/05_quote.png"),
          credit: "Cr.iLaw",
        },
        {
          name: "สุพิชฌาย์ ชัยล้อม (เมนู)",
          desc: "ถูกดำเนินคดีมาตรา 112, พรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...เราไม่ได้รู้สึกเสียกำลังใจ ไม่ได้รู้สึกว่า สิ่งที่เราทำมันผิด... สิ่งที่เราจะทำ ต่อไปนี้คือเราจะพูดต่อไปเรื่อย ๆ...",
          isRelease: true,
          img: require("~/assets/images/quote/06_quote.png"),
          credit: "Cr.way magazine",
        },
        {
          name: "ขนุน (ภาคีนักเรียน KKC)",
          desc: "ถูกดำเนินคดีพรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "นอกจากรอว่าเวลาจะอยู่ข้างเราแล้ว ควรทำทุกอย่าง แม้ไม่เห็นปลายทางว่าจะเป็นเช่นไรก็ตาม",
          isRelease: true,
          img: require("~/assets/images/quote/07_quote.png"),
          credit: "Cr.prachatai",
        },
        {
          name: "แซม สาแมท (คนไร้สัญชาติ)",
          desc: "ถูกดำเนินคดีพรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "ผมออกมาเพราะว่าเห็นความไม่เท่าเทียม ผมเกิดเป็นคนไทยแต่ไม่มีความเท่าเทียม ผมอยากให้ประเทศไทยเป็นประชาธิปไตย กว่านี้...",
          isRelease: true,
          img: require("~/assets/images/quote/08_quote.png"),
          credit: "Cr.mobdatathailand",
        },
        {
          name: "แซน (นามสมมติ) นักเรียนภูเขียว",
          desc: "ถูกดำเนินคดีพรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "...ไม่รู้จะเปลี่ยนแปลงได้ช้าได้เร็วเท่าไหร่... เราอาจไปตั้งหลักที่อื่นค่อยกลับมาเคลื่อนไหวหรือจะเลือกสู้อยู่ที่นี่ไปเรื่อย ๆ อันนี้ก็ยังตัดสินใจไม่ได้",
          isRelease: true,
          img: require("~/assets/images/quote/09_quote.png"),
          credit: "Cr.TLHR",
        },
        {
          name: "พัชรพล (สงวนนามสกุล)",
          desc: "ถูกดำเนินคดีพรก.ฉุกเฉิน และกฎหมายอื่น ๆ",
          quote:
            "ผมจำไม่ได้ว่าโดนกระทืบไปกี่ครั้ง แต่ที่แน่ ๆ โดนทั้งไม้และรองเท้าคอมแบท",
          isRelease: true,
          img: require("~/assets/images/quote/10_quote.png"),
          credit: "Cr.TLHR",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.people_list {
  max-width: 992px;
  margin: auto;

  hr {
    border-top: 2px dashed #3f3f3f;
  }
}

.order-ppl-0 {
  @media #{$mq-mini-mobile} {
    order: 0;
  }
}

.order-ppl-1 {
  @media #{$mq-mini-mobile} {
    order: 1;
  }
}

.order-ppl-2 {
  @media #{$mq-mini-mobile} {
    order: 2;
  }
}
</style>