<template>
  <div>
    <WvNavbar :dark="true">
      <NuxtLink to="/" class="menu-link">
        <WvNavButton :dark="true"> Home </WvNavButton></NuxtLink
      >
      <NuxtLink to="/about" class="menu-link">
        <WvNavButton :dark="true" :active="true">About</WvNavButton></NuxtLink
      >
    </WvNavbar>
    <WvContainer heading="เกี่ยวกับโครงการ">
      <WvParagraphGroup heading="เป้าหมาย" class="wv-b4 wv-font-baijamjuri">
        <p>
          ตลอดระยะเวลา 1 ปีกว่า
          จากจุดเริ่มต้นการชุมนุมแสดงพลังทางการเมืองช่วงกลางปี พ.ศ. 2563
          มีคนไทยถูกดำเนินคดีจากการชุมนุมและแสดงความคิดเห็นทางการเมืองอย่างมากมาย
          โดยกฎหมายและกระบวนการทางกฎหมายต่าง ๆ
          ถูกนำมาใช้เป็นอาวุธสำคัญเพื่อขจัดขัดขวางการใช้สิทธิเสรีภาพของประชาชนอย่างเห็นได้ชัด
          <br /><br />

          WeVis
          ได้รวบรวมข้อมูลจำนวนประชาชนผู้ถูกดำเนินคดีจากการชุมนุมและแสดงความคิดเห็นทางการเมือง
          ประเภทกฎหมายที่ถูกใช้ดำเนินคดีกับประชาชนเหล่านั้น
          รวมถึงเหตุการณ์สำคัญที่เกิดขึ้นในช่วงการดำเนินคดี
          เพื่อแสดงให้เห็นถึงเรื่องราวคนไทยที่เพียงออกมาใช้สิทธิเสรีภาพของตนเอง
          แต่กลับต้องพบเจอกับ “ยุติธรรมทำลาย” ระบบซึ่ง “กฎหมาย”<br /><br />

          พร้อมกับแสดงตัวอย่างเสียงสะท้อนของประชาชนผู้ต้องประสบกับ
          “ยุติธรรมทำลาย” รวมถึงกรณีทางประวัติศาสตร์ของ “ยุติธรรมทำลาย”
          ที่เกิดขึ้นมาเคยในอดีต
          เพื่อสะท้อนถึงความสำคัญของปัญหาดังกล่าวที่มีมาโดยตลอด
          และความจำเป็นที่ปัญหานี้ต้องถูกแก้ไขและยับยั้งอย่างจริงจัง
          <br /><br />

          นอกจากนั้น
          โปรเจกต์นี้ยังแสดงข้อมูลของหลายภาคส่วนซึ่งพยายามอย่างเต็มที่
          ในการหาทางแก้ไข “ยุติธรรมทำลาย” เพื่อปกป้องสิทธิเสรีภาพของคนไทย
          และเปิดโอกาสให้ทุกคนสามารถเป็นส่วนหนึ่งของการแก้ไขปัญหานี้
          โดยการติดตามหรือสนับสนุนหน่วยงานหรือกลุ่มคนทำงาน
          การส่งข้อความให้กำลังผู้ประสบปัญหา
          รวมถึงการแชร์โปรเจกต์เพื่อร่วมกันสร้างแคมเปญแสดงจุดยืน
        </p>
      </WvParagraphGroup>
      <WvParagraphGroup
        heading="ที่มาของข้อมูล"
        class="wv-b4 wv-font-baijamjuri"
      >
        <p>
          1. ในส่วนข้อมูลจำนวนผู้ถูกดำเนินคดี กฎหมายที่ถูกใช้ดำเนินคดี
          เหตุการณ์สำคัญที่เกิดขึ้นในช่วงการดำเนินคดี
          ตัวอย่างเสียงสะท้อนของประชาชนผู้ถูกดำเนินคดี
          และกรณีตัวอย่างทางประวัติศาสตร์ของ “ยุติธรรมทำลาย” ในอดีต ทาง WeVis
          ขอขอบคุณ<a
            href="https://tlhr2014.com/"
            target="_blank"
            rel="noopener noreferrer"
            >ศูนย์ทนายความเพื่อสิทธิมนุษยชน (TLHR)</a
          >
          สำหรับการสนับสนุนข้อมูลที่เป็นประโยชน์กับโปรเจกต์นี้อย่างละเอียด
          และครบถ้วนที่สุดเท่าที่จะเป็นไปได้ <br /><br />

          2. ในส่วนข้อมูลกรณีตัวอย่างทางประวัติศาสตร์ของ “ยุติธรรมทำลาย” ในอดีต
          และข้อมูลที่ใช้วางโครงสร้างของโปรเจกต์ ทาง WeVis ขอขอบคุณ<a
            href="https://naksit.net/"
            target="_blank"
            rel="noopener noreferrer"
            >สมาคมนักกฎหมายสิทธิมนุษยชน (สนส.)</a
          >
          สำหรับงานวิจัยและเอกสารทางวิชาการที่เป็นประโยชน์กับโปรเจกต์นี้อย่างมาก
          <br /><br />

          <b
            >อ้างอิงข้อมูลจาก :<br /><br />
            1. ข้อมูลจำนวนผู้ถูกดำเนินคดี กฎหมายที่ถูกใช้ดำเนินคดี
            และเหตุการณ์สำคัญที่เกิดขึ้นในช่วงการดำเนินคดี</b
          ><br /><br />
          <a
            href="https://tlhr2014.com/archives/25668"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/25668</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/26506"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/26506</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/27990"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/27990</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/29203"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/29203</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/30557"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/30557</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/31600"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/31600</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/33030"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/33030</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/34729"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/34729</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/36209"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/36209</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/37550"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/37550</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/38584"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/38584</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/39482"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/39482</a
          >

          <br /><br />
          <b>2. ข้อมูลตัวอย่างเสียงสะท้อนของประชาชนผู้ถูกดำเนินคดี</b>
          <br /><br />

          <a
            href="https://tlhr2014.com/archives/36435"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/36435</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/37275"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/37275</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/33319"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/33319</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/32483"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/32483</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/28556"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/28556</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/29994"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/29994</a
          ><br />
          <a
            href="https://tlhr2014.com/archives/26804"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/26804</a
          ><br />
          <a
            href="https://voicetv.co.th/read/LZnbL2Fh5"
            target="_blank"
            rel="noopener noreferrer"
            >https://voicetv.co.th/read/LZnbL2Fh5</a
          ><br />
          <a
            href="https://themomentum.co/interview-panusaya/"
            target="_blank"
            rel="noopener noreferrer"
            >https://themomentum.co/interview-panusaya/</a
          ><br />
          <a
            href="https://prachatai.com/journal/2021/09/95124"
            target="_blank"
            rel="noopener noreferrer"
            >https://prachatai.com/journal/2021/09/95124</a
          ><br />

          <br /><br />

          <b
            >3. ข้อมูลกรณีตัวอย่างทางประวัติศาสตร์ของ “ยุติธรรมทำลาย” ในอดีต<br /><br
          /></b>

          <a
            href="https://tlhr2014.com/archives/17788"
            target="_blank"
            rel="noopener noreferrer"
            >https://tlhr2014.com/archives/17788</a
          ><br />
          <a
            href="https://naksit.net/wp-content/uploads/2019/10/20190811-thai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >https://naksit.net/wp-content/uploads/2019/10/20190811-thai.pdf</a
          ><br /></p
      ></WvParagraphGroup>

      <WvParagraphGroup
        heading="นโยบายการนำข้อมูลไปใช้ต่อ"
        class="wv-b4 wv-font-baijamjuri"
      >
        <p>
          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน <br /><br />
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world
        </p>
      </WvParagraphGroup>

      <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
        <WvParagraphGroup
          :small="true"
          heading="เขียนโปรแกรม"
          class="wv-b4 wv-font-baijamjuri"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/mwlite/in/pimpatipan-angkharuengrattana-560898209"
            >พิมพ์ปฏิภาณ อังคเรืองรัตนา</a
          >
        </WvParagraphGroup>
        <WvParagraphGroup
          :small="true"
          heading="ออกแบบ"
          class="wv-b4 wv-font-baijamjuri"
        >
          <p>นัฐพล ไก่แก้ว</p>
        </WvParagraphGroup>
        <WvParagraphGroup
          :small="true"
          heading="สืบค้นและรวบรวมข้อมูล"
          class="wv-b4 wv-font-baijamjuri"
        >
          <p>สิทธิกานต์ ธีระวัฒนชัย</p>
        </WvParagraphGroup>
        <WvParagraphGroup
          :small="true"
          heading="บรรณาธิการ"
          class="wv-b4 wv-font-baijamjuri"
        >
          <a target="_blank" href="https://www.linkedin.com/in/thanisara-r/"
            >ธนิสรา เรืองเดช</a
          >
        </WvParagraphGroup>
        <WvParagraphGroup
          :small="true"
          heading="ประสานงานและจัดการอื่นๆ"
          class="wv-b4 wv-font-baijamjuri"
        >
          <p>
            <a target="_blank" href="https://punchup.world/">Punch Up</a
            ><br /><br />
            โปรเจกต์
            <b>“ยุติธรรมทำลาย เมื่อกฎหมาย คุกคาม ประชาชน”</b>
            ได้รับการสนับสนุนทุนในการดำเนินงานจาก
            <a Ftarget="_blank" href="https://www.ned.org"
              >National Endowment for Democracy (NED)</a
            >
            ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
            ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
          </p>
        </WvParagraphGroup>
      </WvParagraphGroup>

      <WvButtonGroup :center="true">
        <WvButton
          ><svg
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
          <div>ดาวน์โหลดข้อมูล</div>
        </WvButton>
        <a
          href="https://airtable.com/shryu4errnlj1LWsM"
          class="fb-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WvButton>
            <img
              width="30"
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Feedback</span>
          </WvButton></a
        >
      </WvButtonGroup>

      <WvSharer :center="true" url="PROJECT_MAIN_PAGE" />
    </WvContainer>
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
import WvContainer from "@wevisdemo/ui/components/container.vue";
import WvParagraphGroup from "@wevisdemo/ui/components/paragraph-group.vue";
export default {
  components: {
    WvNavbar,
    WvNavButton,
    WvFooter,
    WvSharer,
    WvButtonGroup,
    WvButton,
    WvContainer,
    WvParagraphGroup,
  },
};
</script>

<style lang="scss" scoped>
.menu-link {
  color: #fff;
  margin: 0 20px;
  text-decoration: none;
}

.about-box {
  max-width: 800px;
}

a {
  color: #000;
  text-decoration: underline;
}

.fb-btn {
  text-decoration: none;
}
</style>