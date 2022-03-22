<template>
  <div>
    <div class="main">
      <div
        id="tutorial"
        class="h-100vh tutorial text-white wv-font-anuphan wv-h9"
        v-if="isShowTutotial"
      >
        <div class="tutorial-box">
          <b-row>
            <b-col cols="3" sm="2"></b-col>
            <b-col cols="9" sm="10">
              <div class="wv-font-bold mb-3">วิธีดูข้อมูล</div>
              <div class="tutorial-desc">
                ส่วนนี้แสดงจำนวนผู้ถูกดำเนินคดีในช่วงเวลานั้น ๆ
              </div>
              <div class="tutorial-subdesc">
                ส่วนนี้แสดงจำนวนผู้ถูกดำเนินคดีด้วยกฎหมายต่าง ๆ<br />
                โดยคนหนึ่งคนสามารถถูกดำเนินคดีได้มากกว่า 1 ข้อหา
              </div>
              <div class="text-center tutorial-scroll">
                <img :src="icon_gonext" alt="" />
                <div class="wv-b5">
                  เลื่อนลง<br class="d-inline" />
                  เพื่อดูข้อมูล
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="main__graphic">
        <div class="h-100vh bg-black py-3">
          <div
            class="
              d-flex
              justify-content-center
              flex-wrap
              people-main-box
              chart-count
            "
          >
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
          <b-row class="pt-lg-4 pt-2 pb-0 text-white people-main-box chart-box">
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
                <h3 class="wv-font-black wv-h6">{{ month }}</h3>
              </div>
              <div class="dash-line"></div
            ></b-col>
            <b-col cols="9" sm="10">
              <div class="people-wrapper">
                <h3 class="wv-font-kondolar wv-font-black mb-1 mb-sm-3 wv-h6">
                  มีประชาชนถูกดำเนินคดี<u
                    >อย่างน้อย {{ total.toLocaleString() }} คน</u
                  >
                  <span class="wv-font-anuphan wv-b6 font-weight-normal"
                    >(หนึ่งคนถูกดำเนินคดีได้มากกว่า 1 ข้อหา)</span
                  >
                </h3>

                <div class="people flex-wrap d-flex">
                  <img loading="lazy" 
                    :class="{ blink_me: i >= blink_case_1 }"
                    :src="people_1"
                    v-for="(item, i) in data_list[0].count"
                    alt=""
                    :key="'case_1_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_2"
                    v-for="(item, i) in data_list[1].count"
                    alt=""
                    :key="'case_2_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_3"
                    v-for="(item, i) in data_list[2].count"
                    alt=""
                    :key="'case_3_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_4"
                    v-for="(item, i) in data_list[3].count"
                    alt=""
                    :key="'case_4_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_5"
                    :class="{ blink_me: i >= blink_case_5 }"
                    v-for="(item, i) in data_list[4].count"
                    alt=""
                    :key="'case_5_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_6"
                    v-for="(item, i) in data_list[5].count"
                    alt=""
                    :key="'case_6_' + i"
                  />
                  <img loading="lazy" 
                    :class="{ blink_me: i >= blink_case_7 }"
                    :src="people_7"
                    v-for="(item, i) in data_list[6].count"
                    alt=""
                    :key="'case_7_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_8"
                    v-for="(item, i) in data_list[7].count"
                    alt=""
                    :key="'case_8_' + i"
                  />
                  <img loading="lazy" 
                    :src="people_9"
                    v-for="(item, i) in data_list[8].count"
                    alt=""
                    :key="'case_9_' + i"
                  />
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <Scrollama @step-enter="handler" @step-exit="handlerExit">
        <div class="h-100vh"></div>
        <div
          class="h-100vh step"
          v-for="(item, i) in case_data"
          :key="'case_data_' + i"
        >
          <!-- <div class="d-flex justify-content-center align-items-center px-3"> -->
          <div
            class="timeline-desc wv-font-anuphan wv-b5"
            v-if="item.subdesc != ''"
            :style="{
              '--widthdescbox': widthdesc + 'px',
            }"
          >
            {{ item.subdesc }}
          </div>
          <!-- </div> -->
          <div class="d-flex justify-content-center align-items-center">
            <div class="timeline-header wv-h8 wv-font-black wv-font-kondolar">
              สถานการณ์
            </div>
            <div class="timeline-line"></div>
            <div
              class="timeline-content wv-font-anuphan wv-b5"
              id="timeline-content"
            >
              {{ item.desc }}
            </div>
          </div>
        </div>
      </Scrollama>
    </div>

    <div
      class="
        min-h-screen
        bg-black
        content-box
        text-white
        wv-font-kondolar
        text-center
      "
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
import * as all_case from "~/assets/data/case.json";

export default {
  components: {
    Lottie,
    Scrollama,
  },
  data() {
    return {
      cases: all_case.default,
      slapp_icon_01: slapp_icon_01.default,
      slapp_icon_02: slapp_icon_02.default,
      slapp_icon_03: slapp_icon_03.default,
      isShowTutotial: false,
      month: "",
      widthdesc: 0,
      index: 0,
      total: 0,
      blink_case_1: 0,
      blink_case_5: 0,
      blink_case_7: 0,
      hammer: require("~/assets/images/hammer.png"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      icon_gonext: require("~/assets/images/icon_next.gif"),
      pic_mob: require("~/assets/images/pic_mob.mp4"),
      people_1: require("~/assets/images/icon_people/01_people.svg"),
      people_2: require("~/assets/images/icon_people/02_people.svg"),
      people_3: require("~/assets/images/icon_people/03_people.svg"),
      people_4: require("~/assets/images/icon_people/04_people.svg"),
      people_5: require("~/assets/images/icon_people/05_people.svg"),
      people_6: require("~/assets/images/icon_people/06_people.svg"),
      people_7: require("~/assets/images/icon_people/07_people.svg"),
      people_8: require("~/assets/images/icon_people/08_people.svg"),
      people_9: require("~/assets/images/icon_people/09_people.svg"),
      data_list: [
        {
          id: 1,
          name: "ข้อหาหมิ่นประมาท กษัตริย์<br>(มาตรา 112)",
          count: 55,
          count_highlight: 0,
          color: "yellow",
        },
        {
          id: 2,
          name: "ข้อหายุยงปลุกปั่น<br>(มาตรา 116)",
          count: 64,
          count_highlight: 0,
          color: "orange",
        },
        {
          id: 3,
          name: "ข้อหาประทุษร้าย เสรีภาพพระราชินี<br>(มาตรา 110)",
          count: 5,
          count_highlight: 0,
          color: "purple",
        },
        {
          id: 4,
          name: "ข้อหามั่วสุมกันใช้กำลังประทุษร้ายให้เกิดการวุ่นวาย<br>(มาตรา 215)",
          count: 99,
          count_highlight: 0,
          color: "blue",
        },
        {
          id: 5,
          name: "ข้อหาฝ่าฝืน<br>พ.ร.ก.ฉุกเฉินฯ",
          count: 222,
          count_highlight: 0,
          color: "pink",
        },
        {
          id: 6,
          name: "ข้อหาฝ่าฝืน<br>พ.ร.บ.การชุมนุมสาธารณะฯ",
          count: 84,
          count_highlight: 0,
          color: "brown",
        },
        {
          id: 7,
          name: "ข้อหาฝ่าฝืนพ.ร.บ.คอมพิวเตอร์ฯ",
          count: 0,
          count_highlight: 0,
          color: "green",
        },
        {
          id: 8,
          name: "ข้อหาละเมิด อำนาจศาล<br>(มาตรา 30 - 33)",
          count: 0,
          count_highlight: 0,
          color: "blue-2",
        },
        {
          id: 9,
          name: "ข้อหาดูหมิ่นศาล<br>(มาตรา 30 - 33)",
          count: 0,
          count_highlight: 0,
          color: "red",
        },
      ],
      case_data: [
        {
          id: 1,
          desc: "ช่วงเดือนมกราคม 2564 เจ้าหน้าที่เข้าจับกุมผู้ชุมนุมค่อนข้างรุนแรง รวมถึงมีการตั้งข้อกล่าวหาย้อนหลังต่อการชุมนุมที่ผ่านไปหลายเดือน",
          subdesc:
            "ตั้งแต่ปลายเดือนพฤศจิกายน 2563 ที่ประยุทธ์ จันทร์โอชา ประกาศจะใช้กฎหมายทุกฉบับทุกมาตราจัดการกับผู้ชุมนุม สถิติผู้ถูกดำเนินคดีตามข้อหา “หมิ่นประมาทกษัตริย์” ช่วง 2 เดือนนี้ เพิ่มขึ้นถึงอย่างน้อย 55 คน",
        },
        {
          id: 2,
          desc: "ช่วงเดือนกุมภาพันธ์ 2564 การสลายการชุมนุมของเจ้าหน้าที่เพิ่มความรุนแรงขึ้น โดยเป็นการใช้กำลังที่เกินกว่าเหตุ และไม่เป็นไปตามหลักการสากล และยังคงมีการตั้งข้อกล่าวหาย้อนหลังต่อการชุมนุมที่ผ่านไปหลายเดือน",
          subdesc:
            "ตลอดเดือนกุมภาพันธ์ 2564 มีรายงานผู้ถูกดำเนินคดีตามข้อหา “หมิ่นประมาทกษัตริย์” เพิ่มขึ้นอีก 5 คน",
        },
        {
          id: 3,
          desc: "ตลอดเดือนมีนาคม 2564 มีรายงานผู้ถูกดำเนินคดีตามข้อหา “หมิ่นประมาทกษัตริย์” เพิ่มขึ้นถึง 22 คน",
          subdesc:
            "ช่วงเดือนมีนาคม 2564 มีการใช้ข้อกล่าวอ้างเรื่อง COVID-19 จับกุมดำเนินคดีผู้ชุมนุมทางการเมือง ทำให้จำนวนผู้ถูกดำเนินคดีฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ  เพิ่มขึ้นจากเดือนก่อนหน้าถึง 143 คน ",
        },
        {
          id: 4,
          desc: "ช่วงเดือนเมษายน 2564 ข้อกล่าวหาตาม พ.ร.ก.ฉุกเฉินฯ ยังถูกนำมาใช้กล่าวหาและดำเนินคดีต่อการจัดกิจกรรมทางการเมืองอย่างต่อเนื่อง",
          subdesc: "",
        },
        {
          id: 5,
          desc: "ช่วงเดือนพฤษภาคม 2564 คดีละเมิดอำนาจศาล และดูหมิ่นศาลเพิ่มขึ้น นับแต่คดีที่มีการแจ้งข้อกล่าวหาตั้งแต่ต้นปีเริ่มทยอยขึ้นสู่ศาล และเริ่มมีการเรียกร้องความยุติธรรมบริเวณหน้าศาลมากขึ้น โดยนับแต่เริ่มการชุมนุมเยาวชนปลดแอก มีผู้ถูกดำเนินคดีในข้อหาละเมิดอำนาจศาลอย่างน้อย 13 ราย และข้อหาดูหมิ่นศาลอย่างน้อย 20 ราย",
          subdesc:
            "ช่วงเดือนพฤษภาคม 2564 ผู้มีอำนาจใช้วิธีการแจ้งความดำเนินคดีบุคคลที่แสดงความคิดเห็นวิพากษ์วิจารณ์ประเด็นทางการเมืองหรือทางสังคมต่าง ๆ ด้วยข้อหาหมิ่นประมาท ดูหมิ่น รวมถึงข้อหาตาม “พ.ร.บ.คอมพิวเตอร์ฯ” มากขึ้น",
        },
        {
          id: 6,
          desc: "ช่วงเดือนมิถุนายน 2564 สถานการณ์การดำเนินคดีละเมิดอำนาจศาลยังเป็นไปอย่างเข้มข้น โดยนับแต่เริ่มการชุมนุมเยาวชนปลดแอก มีผู้ถูกดำเนินคดีในข้อหาละเมิดอำนาจศาลอย่างน้อย 18 ราย และในเดือนนี้มีผู้ถูกดำเนินคดีในข้อหาดูหมิ่นศาลเพิ่มเติมอีก 4 ราย",
          subdesc:
            "ช่วงเดือนมิถุนายน 2564 การประกาศสถานการณ์ฉุกเฉินเพื่อรับมือการแพร่ระบาด COVID-19 ยังคงมีอยู่ ข้อกล่าวหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ ยังคงถูกใช้เป็นเครื่องมือดำเนินคดีผู้ชุมนุมทางการเมืองอย่างต่อเนื่อง โดยพบผู้ถูกดำเนินคดีข้อหานี้ไม่น้อยกว่า 511 ราย",
        },
        {
          id: 7,
          desc: "ช่วงเดือนกรกฎาคม 2564 ยังมีแนวโน้มการดำเนินคดีต่อผู้วิพากษ์วิจารณ์บุคคลในรัฐบาล หรือข้าราชการผู้ใช้อำนาจรัฐอย่างต่อเนื่อง โดยการใช้ข้อหาหมิ่นประมาท ดูหมิ่นโดยการโฆษณา และดูหมิ่นเจ้าพนักงานซึ่งปฏิบัติตามหน้าที่",
          subdesc:
            "ช่วงเดือนกรกฎาคม 2564 ข้อกล่าวหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ ยังคงถูกใช้เป็นเครื่องมือในดำเนินคดีผู้ชุมนุมทางการเมืองอย่างต่อเนื่อง โดยพบผู้ถูกดำเนินคดีข้อหานี้ไม่น้อยกว่า 549 ราย",
        },
        {
          id: 8,
          desc: "ช่วงเดือนสิงหาคม 2564 เกิดการชุมนุมทางการเมืองรายวัน โดยเฉพาะพื้นที่สามเหลี่ยมดินแดง นำไปสู่การจับกุมดำเนินคดีอย่างต่อเนื่อง โดยพบผู้ถูกจับกุมจากเหตุการณ์ชุมนุมทางการเมืองไม่น้อยกว่า 298 ราย",
          subdesc:
            "ช่วงเดือนสิงหาคม 2564 มีผู้ถูกดำเนินคดีข้อหา พ.ร.ก.ฉุกเฉินฯ จากการชุมนุมทางการเมืองเพิ่มขึ้นกว่า 353 ราย รวมแล้วมีผู้ถูกดำเนินคดีข้อหา พ.ร.ก.ฉุกเฉินฯ ไม่น้อยกว่า 902 ราย เป็นยอดที่พุ่งขึ้นจากแต่ละเดือนก่อนหน้านี้หลายเท่า",
        },
        {
          id: 9,
          desc: "ช่วงเดือนกันยายน 2564 เกิดการจับกุมผู้ชุมนุมทางการเมืองรายวัน มีรายงานผู้ถูกจับกุมจากการชุมนุมทางการเมืองไม่น้อยกว่า 269 ราย และการดำเนินคดีต่อการชุมนุมทางการเมืองด้วยข้อหาตาม พ.ร.ก.ฉุกเฉินฯ เป็นไปอย่างเข้มข้น ผู้จัดและร่วมกิจกรรมคาร์ม็อบ (Car Mob) เพื่อขับไล่ พล.อ.ประยุทธ์ จันทร์โอชา หลายพื้นที่ ถูกดำเนินคดีอย่างต่อเนื่อง",
          subdesc:
            "ช่วงเดือนกันยายน 2564 มีรายงานผู้ถูกดำเนินคดีตามข้อหา “หมิ่นประมาทกษัตริย์” เพิ่มขึ้นจากเดือนก่อนหน้าอย่างน้อย 21 ราย",
        },
        {
          id: 10,
          desc: "ช่วงต้นเดือนตุลาคม 2564 การชุมนุมบริเวณดินแดงที่ยังดำเนินสืบเนื่อง ก่อนค่อย ๆ ลดระดับลงไปในช่วงหลังกลางเดือนเป็นต้นมา แต่ตลอดทั้งเดือนนี้มีรายงานผู้ถูกจับกุมไม่น้อยกว่า 155 ราย",
          subdesc:
            "การชุมนุมทางการเมืองยังคงถูกเจ้าหน้าที่รัฐดำเนินคดีด้วยข้อหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ อย่างต่อเนื่อง มีผู้ถูกกล่าวหาในข้อหานี้ตั้งแต่เริ่มประกาศสถานการณ์ฉุกเฉินไม่น้อยกว่า 1,337 คนแล้ว ",
        },
        {
          id: 11,
          desc: "ช่วงปลายเดือนพฤศจิกายน 2564 ประยุทธ์ จันทร์โอชา ยังต่ออายุการประกาศสถานการณ์ฉุกเฉินออกไปจนถึงช่วงสิ้นเดือนมกราคม 2565 ทำให้ข้อกำหนดตาม พ.ร.ก.ฉุกเฉินฯ ต่าง ๆ ยังคงถูกบังคับใช้ และสถานการณ์การดำเนินคดีในข้อหานี้ต่อการชุมนุมทางการเมืองก็ยังคงดำเนินต่อไป",
          subdesc: "",
        },
        {
          id: 12,
          desc: "ช่วงเดือนธันวาคม 2564 การจับกุมผู้ร่วมชุมนุมทางการเมืองในพื้นที่กรุงเทพฯ และการออกหมายเรียกผู้ชุมนุมกรณีต่าง ๆ ในข้อกล่าวหาตาม พ.ร.ก.ฉุกเฉินฯ ยังเกิดขึ้นอย่างต่อเนื่อง และแต่ละคดีมีผู้ถูกกล่าวหาเป็นจำนวนมาก",
          subdesc: "",
        },
      ],
    };
  },
  mounted() {
    var data = this.cases.filter((x) => x.id == 1);
    this.data_list.forEach((element, i) => {
      element.count = data[0].count[0]["case_" + (i + 1)];
    });
    this.month = data[0].month;
    this.total = 291;
    this.blink_case_1 = this.data_list[0].count;
    this.blink_case_5 = this.data_list[4].count;
    this.blink_case_7 = this.data_list[6].count;

    setTimeout(() => {
      this.onChangeResize();
    }, 500);
  },
  created() {
    if (process.client) window.addEventListener("resize", this.onChangeResize);
  },
  destroyed() {
    if (process.client)
      window.removeEventListener("resize", this.onChangeResize);
  },
  methods: {
    onChangeResize() {
      var h = 0;
      if (window.innerWidth > 600) h = 5;
      else h = 2.5;
      this.widthdesc =
        document.getElementById("timeline-content").clientWidth + h;
    },
    handler({ element, index, direction }) {
      if (direction == "down") {
        if (index == 0) {
          if (!this.isShowTutotial) {
            //document.getElementsByTagName("body")[0].style.overflow = "hidden";
            this.isShowTutotial = true;
          }
        } else {
          //document.getElementsByTagName("body")[0].style.overflow = "unset";
          if (this.isShowTutotial)
            document.getElementById("tutorial").classList.add("hide-tutorial");
        }
      }

      this.index = index;
      this.total = 0;

      if (index > 0) {
        var data = this.cases.filter((x) => x.id == index);
        this.month = data[0].month;
        this.data_list.forEach((element, i) => {
          element.count = data[0].count[0]["case_" + (i + 1)];
        });

        this.total = data[0].total;

        if (index == 1) {
          this.blink_case_1 = 0;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = this.data_list[6].count;
        } else if (index == 2) {
          this.blink_case_1 = 55;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = this.data_list[6].count;
        } else if (index == 3) {
          this.blink_case_1 = this.data_list[0].count;
          this.blink_case_5 = 301;
          this.blink_case_7 = this.data_list[6].count;
        } else if (index == 4) {
          this.blink_case_1 = this.data_list[0].count;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = this.data_list[6].count;
        } else if (index == 5) {
          this.blink_case_1 = this.data_list[0].count;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = 0;
        } else if (index == 6 || index == 7 || index == 8 || index == 10) {
          this.blink_case_1 = this.data_list[0].count;
          //this.blink_case_5 = this.data_list[4].count;

          //setTimeout(() => {
          this.blink_case_5 = 0;
          //}, 200);
          this.blink_case_7 = this.data_list[6].count;
        } else if (index == 9) {
          this.blink_case_1 = 124;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = this.data_list[6].count;
        } else {
          this.blink_case_1 = this.data_list[0].count;
          this.blink_case_5 = this.data_list[4].count;
          this.blink_case_7 = this.data_list[6].count;
        }
      } else {
        this.total = 291;
      }
    },
    handlerExit({ element, direction, index }) {
      if (direction == "up" && index == 0) {
        var isShowTutorial = document
          .getElementById("tutorial")
          .classList.contains("hide-tutorial");
        if (!isShowTutorial) this.isShowTutotial = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
br {
  @media #{$mq-mini-mobile} {
    display: none;
  }
}

.blink_me {
  background: #fff;
  //animation: blinker 3s linear infinite;
}

@keyframes blinker {
  50% {
    background: rgba(255, 255, 255, 0.3);
  }
}

.main__graphic {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  height: 100vh;
  transition: 1s;
  z-index: 10;
  @media #{$mq-mini-mobile} {
    //height: auto !important;
  }
}

.scrollama__steps {
  position: relative;
  z-index: 20;
}

.data-box {
  flex: 0 0 11.1%;
  padding: 0 13px;
  border-right: 1px solid #444444;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media #{$mq-tablet} {
    .name {
      font-size: 12px;
    }
  }

  @media #{$mq-lg} {
    flex: 0 0 33.33%;
    margin-bottom: 10px;
  }

  @media #{$mq-mini-mobile} {
    justify-content: space-evenly;
    padding: 0 5px;

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
  @media #{$mq-mini-mobile} {
    border-left: 2px dashed white;
  }
}

.timeline-date {
  z-index: 2;
  position: relative;
}

.people-wrapper {
  margin-top: 60px;

  @media #{$mq-lg} {
    margin-top: 0;

    h3 {
      font-size: 16px;
    }
  }
}

.people img {
  width: 15px;
  padding: 1px;

  @media #{$mq-small-laptop} {
    width: 10.5px;
    padding: 0;
    margin-right: 0;
  }

  @media #{$mq-mini-mobile} {
    width: 6px;
  }

  @media #{$mq-se} {
    width: 5px;
  }
}

.people-main-box {
  max-width: 1400px;
  margin: auto;
}

.timeline-date-box {
  @media #{$mq-lg} {
    padding: 0 5px;

    h3 {
      font-size: 21px;
    }
  }

  @media #{$mq-mini-mobile} {
    padding: 0;

    h3 {
      font-size: 16px;
    }
  }
}

.step {
  padding: 5vh 20px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  //align-items: center;
  justify-content: flex-end;
  z-index: 20;
  flex-direction: column;

  @media #{$mq-mini-mobile} {
    padding: 5vh 5px;
  }

  .timeline-header {
    padding: 6px 10px;
    background: #ffffff;
    border-radius: 2px;
    //flex: 0 0 10%;

    @media #{$mq-lg} {
      font-size: 21px;
    }

    @media #{$mq-mini-mobile} {
      padding: 4px 6px;
      font-size: 14px;
    }
  }

  .timeline-line {
    border-top: 2px solid #ffffff;
    height: 2px;
    width: 85px;
    //flex: 0 0 5%;

    @media #{$mq-lg} {
      width: 45px;
    }

    @media #{$mq-mini-mobile} {
      border: 1px solid #ffffff;
      height: 1px;
    }
  }

  .timeline-content {
    padding: 10px 14px;
    border: 2px solid #ffffff;
    color: #ffffff;
    background: #000;
    border-radius: 2px;
    //flex: 0 0 85%;
    width: 85%;

    @media #{$mq-mini-mobile} {
      border: 1px solid #ffffff;
      padding: 5px;
      font-size: 12px;
      flex: 0 0 71%;
    }
  }

  .timeline-desc {
    width: var(--widthdescbox);
    padding: 10px 14px;
    color: #000;
    background: #fff;
    margin-bottom: 10px;
    margin-left: auto;

    @media #{$mq-mini-mobile} {
      //margin-left: 5.8rem;
      padding: 5px;
      font-size: 12px;
    }
  }
}

.tutorial {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 140px;

  @media #{$mq-lg} {
    padding-top: 200px;
  }

  @media #{$mq-mini-mobile} {
    padding-top: 27vh;
  }

  .tutorial-desc {
    border: 2px dashed #ffffff;
    height: 60px;
    animation: blinkline 1s linear infinite;
    padding: 13px 25px;
    max-width: 1200px;
    @media #{$mq-mini-mobile} {
      padding: 14px 5px;
      border: 1px dashed #ffffff;
      font-size: 12px;
    }
  }

  .tutorial-subdesc {
    border: 2px dashed #ffffff;
    height: 150px;
    animation: blinkline 1s linear infinite;
    padding: 13px 25px;
    max-width: 1200px;
    @media #{$mq-mini-mobile} {
      padding: 14px 5px;
      border: 1px dashed #ffffff;
      font-size: 12px;
      height: 100px;
    }
  }

  .tutorial-scroll {
    @media #{$mq-mini-mobile} {
      div {
        font-size: 12px;
      }

      img {
        width: 30px;
      }
    }
  }
}

@keyframes blinkline {
  50% {
    border: 2px dashed transparent;
  }
}

.hide-tutorial {
  display: none;
}

.tutorial-box {
  max-width: 1400px;
  margin: auto;
}

.chart-count {
  //height: calc(100% - 50px);

  @media #{$mq-mini-mobile} {
    min-height: 25vh;
  }

  @media #{$mq-se} {
    min-height: 30vh;
  }
}

.chart-box {
  height: calc(100% - 70px);

  @media #{$mq-tablet} {
    //height: calc(100% - 100px);
  }

  @media #{$mq-lg} {
    height: calc(100% - 200px);
  }

  @media #{$mq-mini-mobile} {
    height: 73vh;
  }

  @media #{$mq-se} {
    //height: 70vh;
  }
}

.content-box {
  padding: 75px 0;
}
</style>