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
              <div class="text-center">
              <img :src="icon_gonext" alt="">
              </div>
              </b-col
            >
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
                    >(หนึ่งคนถูกดำเนินคดีได้มากกว่า 1 กฎหมาย)</span
                  >
                </h3>

                <div class="people flex-wrap d-flex">
                  <img
                    :class="{ blink_me: i >= blink_case_1 }"
                    :src="people_1"
                    v-for="(item, i) in data_list[0].count"
                    alt=""
                    :key="'case_1_' + i"
                  />
                  <img
                    :src="people_2"
                    v-for="(item, i) in data_list[1].count"
                    alt=""
                    :key="'case_2_' + i"
                  />
                  <img
                    :src="people_3"
                    v-for="(item, i) in data_list[2].count"
                    alt=""
                    :key="'case_3_' + i"
                  />
                  <img
                    :src="people_4"
                    v-for="(item, i) in data_list[3].count"
                    alt=""
                    :key="'case_4_' + i"
                  />
                  <img
                    :src="people_5"
                    :class="{ blink_me: i >= blink_case_5 }"
                    v-for="(item, i) in data_list[4].count"
                    alt=""
                    :key="'case_5_' + i"
                  />
                  <img
                    :src="people_6"
                    v-for="(item, i) in data_list[5].count"
                    alt=""
                    :key="'case_6_' + i"
                  />
                  <img
                    :class="{ blink_me: i >= blink_case_7 }"
                    :src="people_7"
                    v-for="(item, i) in data_list[6].count"
                    alt=""
                    :key="'case_7_' + i"
                  />
                  <img
                    :src="people_8"
                    v-for="(item, i) in data_list[7].count"
                    alt=""
                    :key="'case_8_' + i"
                  />
                  <img
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
      <Scrollama @step-enter="handler" @step-progress="handleProgress">
        <div class="h-100vh"></div>
        <div
          class="h-100vh step"
          v-for="(item, i) in case_data"
          :key="'case_data_' + i"
        >
          <div
            class="timeline-desc wv-font-anuphan wv-b5"
            v-if="item.subdesc != ''"
          >
            {{ item.subdesc }}
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="timeline-header wv-h8 wv-font-black wv-font-kondolar">
              สถานการณ์
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-content wv-font-anuphan wv-b5">
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
      index: 0,
      total: 0,
      blink_case_1: 0,
      blink_case_5: 0,
      blink_case_7: 0,
      hammer: require("~/assets/images/hammer.png"),
      arrow_circle: require("~/assets/images/arrow-circle.svg"),
      icon_gonext: require("~/assets/images/icon_gonext.gif"),
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
          name: "ข้อหาประทุษร้าย เสรีภาพพระราชินี<br>(มาตรา 110)",
          count: 99,
          count_highlight: 0,
          color: "blue",
        },
        {
          id: 5,
          name: "ข้อหามั่วสุมกัน ให้เกิดการวุ่นวาย<br>(มาตรา 215)",
          count: 222,
          count_highlight: 0,
          color: "pink",
        },
        {
          id: 6,
          name: "ข้อหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ",
          count: 84,
          count_highlight: 0,
          color: "brown",
        },
        {
          id: 7,
          name: "ข้อหาฝ่าฝืน พ.ร.บ. คอมพิวเตอร์ฯ",
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
          desc: "เจ้าหน้าที่เข้าจับกุมผู้แสดงออกทั้งทางการเมืองและเศรษฐกิจในที่สาธารณะอย่างค่อนข้างรุนแรง การตั้งข้อหาแกนนำและผู้ร่วมชุมนุมทางการเมืองที่สืบเนื่องจากปี 2563 ดำเนินต่อไป โดยมีการตั้งข้อกล่าวหาย้อนหลังต่อการชุมนุมที่ผ่านไปหลายเดือนแล้ว",
          subdesc:
            "หลังเริ่มกลับมาบังคับใช้ข้อหา “หมิ่นประมาทกษัตริย์” อีกครั้งช่วงปลายเดือนพฤศจิกายน 2563 เป็นต้นมา พบว่าเพียง 2 เดือน สถิติผู้ถูกดำเนินคดีเพิ่มขึ้นอย่างรวดเร็วถึงอย่างน้อย 55 คน",
        },
        {
          id: 2,
          desc: "การสลายการชุมนุมของเจ้าหน้าที่เพิ่มความรุนแรงขึ้น โดยเป็นการใช้กำลังที่เกินกว่าเหตุ และไม่เป็นไปตามหลักการสากล การตั้งข้อหา แกนนำ และผู้ร่วมชุมนุมทางการเมืองที่สืบเนื่องจากปี 2563 ดำเนินต่อไป ยังคงมีการตั้งข้อกล่าวหาย้อนหลังต่อการชุมนุมที่ผ่านไป หลายเดือน และมีการกล่าวหาผู้ชุมนุมจำนวนมาก",
          subdesc:
            "หลังเริ่มกลับมาบังคับใช้ข้อหา “หมิ่นประมาทกษัตริย์” อีกครั้งช่วงปลายเดือนพฤศจิกายน 2563 เป็นต้นมา พบว่าคดียังพุ่งสูงต่อเนื่อง ตลอดเดือนกุมภาพันธ์ มีรายงานการดำเนินคดีใหม่เพิ่มขึ้นอีก 5 คน ใน 5 คดี",
        },
        {
          id: 3,
          desc: "การบังคับใช้ข้อหา “หมิ่นประมาทกษัตริย์” ที่เปิดโอกาสให้ใครก็ได้เข้าร้องทุกข์กล่าวโทษ ส่งผลให้มีประชาชนถูกดำเนินคดีใหม่เพิ่มขึ้นมากถึง 22 คน ใน 27 คดี",
          subdesc:
            "การใช้ข้อกล่าวอ้างเรื่องการระบาดของโควิด-19 จับกุมดำเนินคดีผู้ชุมนุมทางการเมืองจำนวนมาก ทำให้จำนวนผู้ถูกดำเนินคดีฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ เพิ่มขึ้นจากเดือนก่อนหน้าถึง 143 คน ใน 27 คดี",
        },
        {
          id: 4,
          desc: "การดำเนินคดีต่อการจัดกิจกรรมทางการเมืองยังคงมีอยู่อย่างต่อเนื่อง โดยเฉพาะข้อกล่าวหาตาม พ.ร.ก.ฉุกเฉินฯ ที่ถูกนำมาใช้กล่าวหาผู้จัด และผู้ร่วมการชุมนุมต่าง ๆ อย่างต่อเนื่อง",
          subdesc: "",
        },
        {
          id: 5,
          desc: "คดีละเมิดอำนาจศาล และดูหมิ่นศาลเพิ่มขึ้นอย่างรวดเร็ว นับแต่เริ่มการชุมนุมเยาวชนปลดแอกถึงสิ้นเดือน มีผู้ถูกกล่าวหาในข้อหาละเมิด อำนาจศาลอย่างน้อย 13 ราย ใน 13 คดี และข้อหาดูหมิ่นศาลอย่างน้อย 20 ราย ใน 3 คดี",
          subdesc:
            "ผู้มีอำนาจใช้วิธีการแจ้งความดำเนินคดีบุคคลที่แสดงความคิดเห็นวิพากษ์วิจารณ์ในประเด็นทางการเมืองหรือประเด็น ทางสังคมต่าง ๆ ด้วยข้อหาหมิ่นประมาท ดูหมิ่น หรือข้อหาตาม พ.ร.บ.คอมพิวเตอร์ฯ เพิ่มมากขึ้น",
        },
        {
          id: 6,
          desc: "สถานการณ์การดำเนินคดีละเมิดอำนาจศาลยังเป็นไปอย่างเข้มข้น โดยนับแต่เริ่มการชุมนุมเยาวชนปลดแอกถึงสิ้นเดือน มีผู้ถูกกล่าวหาในข้อหาละเมิดอำนาจศาลอย่างน้อย 18 ราย ใน 14 คดี และข้อหาดูหมิ่นศาลเพิ่มเติมอีก 4 ราย",
          subdesc:
            "กว่า 15 เดือน ที่มีการประกาศสถานการณ์ฉุกเฉินเพื่อรับมือการแพร่ระบาดของโควิด-19 ข้อกล่าวหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ ยังคงถูกใช้เป็นเครื่องมือในการกล่าวหาดำเนินคดีแกนนำและผู้เข้าร่วมชุมนุมทางการเมืองอย่างต่อเนื่อง โดยพบผู้ถูกดำเนินคดี ข้อหานี้จากการเข้าร่วมการชุมนุมทางการเมืองจำนวนไม่น้อยกว่า 511 ราย จาก 161 คดี",
        },
        {
          id: 7,
          desc: "ยังมีแนวโน้มการดำเนินคดีต่อผู้วิพากษ์วิจารณ์บุคคลในรัฐบาล หรือข้าราชการผู้ใช้อำนาจรัฐอย่างต่อเนื่อง โดยการใช้ข้อหาหมิ่นประมาทหรือดูหมิ่นโดยการโฆษณา",
          subdesc:
            "รัฐบาลยังคงใช้กฎหมายสถานการณ์ฉุกเฉินต่อเนื่องเป็นเดือนที่ 16 และข้อกล่าวหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ ก็ยังคงถูกใช้เป็นเครื่องมือ ในการกล่าวหาดำเนินคดีแกนนำและผู้เข้าร่วมชุมนุมทางการเมืองอย่างต่อเนื่อง โดยพบผู้ถูกดำเนินคดีข้อหานี้จากการเข้าร่วมการชุมนุม ทางการเมืองจำนวนไม่น้อยกว่า 549 ราย คิดเป็น 178 คดี",
        },
        {
          id: 8,
          desc: "เกิดการชุมนุมทางการเมืองรายวัน ทั้งการชุมนุมโดยสงบในพื้นที่ต่าง ๆ และการชุมนุมที่มีเหตุปะทะระหว่างผู้ชุมนุมกับเจ้าหน้าที่รัฐ โดยเฉพาะ พื้นที่สามเหลี่ยมดินแดง นำไปสู่การจับกุมดำเนินคดีอย่างต่อเนื่อง โดยพบผู้ถูกจับกุมจากเหตุการณ์ชุมนุมทางการเมืองไม่น้อยกว่า 298 ราย",
          subdesc:
            "มีผู้ถูกดำเนินคดี พ.ร.ก.ฉุกเฉินฯ จากการชุมนุมทางการเมืองเพิ่มขึ้นไปกว่า 353 ราย ทำให้รวมแล้วมีผู้ถูกดำเนินคดี ข้อหา พ.ร.ก.ฉุกเฉินฯ จากการชุมนุม ไม่น้อยกว่า 902 ราย เป็นยอดที่พุ่งขึ้นจากแต่ละเดือนก่อนหน้านี้หลายเท่า",
        },
        {
          id: 9,
          desc: "เกิดการจับกุมผู้ชุมนุมทางการเมืองรายวัน มีรายงานผู้ถูกจับกุมจากการชุมนุมทางการเมืองไม่น้อยกว่า 269 ราย และการดำเนินคดีต่อการชุมนุม ทางการเมือง โดยเฉพาะข้อหาตาม พ.ร.ก.ฉุกเฉินฯ เป็นไปอย่างเข้มข้น",
          subdesc:
            "สถิติผู้ถูกดำเนินคดีข้อหา “หมิ่นประมาทกษัตริย์” เพิ่มขึ้นจากเดือนก่อนหน้าอย่างน้อย 21 ราย เป็นคดีใหม่ 19 คดี",
        },
        {
          id: 10,
          desc: "การชุมนุมบริเวณดินแดงที่ยังดำเนินสืบเนื่อง ก่อนค่อย ๆ ลดระดับลงไปในช่วงหลังกลางเดือนเป็นต้นมา แต่ตลอดทั้งเดือนนี้มีรายงาน ผู้ถูกจับกุมไม่น้อยกว่า 155 ราย",
          subdesc:
            "การชุมนุมทางการเมืองโดยสงบยังคงถูกเจ้าหน้าที่รัฐกล่าวหาดำเนินคดีในข้อหาฝ่าฝืน พ.ร.ก.ฉุกเฉินฯ อย่างต่อเนื่อง มีผู้ถูกกล่าวหาในข้อหานี้ตั้งแต่เริ่มประกาศสถานการณ์ฉุกเฉินไม่น้อยกว่า 1,337 คน ใน 553 คดีแล้ว",
        },
        {
          id: 11,
          desc: "พล.อ.ประยุทธ์ จันทร์โอชา ยังคงต่ออายุการประกาศสถานการณ์ฉุกเฉินออกไปจนถึงช่วงสิ้นเดือนมกราคม 2565 ทำให้ข้อกำหนดตาม พ.ร.ก.ฉุกเฉินฯ ต่าง ๆ ยังบังคับใช้ต่อไป ขณะเดียวกันสถานการณ์การดำเนินคดีในข้อหานี้ต่อการชุมนุมทางการเมืองก็ยังคงดำเนินต่อไป",
          subdesc: "",
        },
        {
          id: 12,
          desc: "การจับกุมผู้ร่วมชุมนุมสาธารณะในพื้นที่กรุงเทพฯ และการออกหมายเรียกผู้ชุมนุมกรณีต่าง ๆ ในข้อกล่าวหาตาม พ.ร.ก.ฉุกเฉินฯ ยังเกิดขึ้น อย่างต่อเนื่อง รวมทั้งแต่ละคดียังมีผู้ถูกกล่าวหาเป็นจำนวนมากด้วย",
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
    this.total = 529;
    this.blink_case_1 = this.data_list[0].count;
    this.blink_case_5 = this.data_list[4].count;
    this.blink_case_7 = this.data_list[6].count;
  },
  methods: {
    handler({ element, index, direction }) {
      if (direction == "down") {
        if (index == 0) {
          if (!this.isShowTutotial) {
            //document.getElementsByTagName("body")[0].style.overflow = "hidden";
            this.isShowTutotial = true;
          }
        } else {
          //document.getElementsByTagName("body")[0].style.overflow = "unset";
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
          this.total += element.count;
        });

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
          this.blink_case_5 = this.data_list[4].count;

          setTimeout(() => {
            this.blink_case_5 = 0;
          }, 200);
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
      }
    },
    handleProgress({ element, progress, index }) {
      // if (!this.isShowTutotial) {
      //   if (progress == 0 && index == 0) {
      //     document.getElementsByTagName("body")[0].style.overflow = "hidden";
      //     this.isShowTutotial = true;
      //   }
      // }
      // setTimeout(() => {
      //   document.getElementsByTagName("body")[0].style.overflow = "unset";
      //   document.getElementById("tutorial").classList.add("hide-tutorial");
      // }, 3000);
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
  animation: blinker 3s linear infinite;
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
  }

  @media #{$mq-mini-mobile} {
    margin-right: 0;
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
  max-width: 1300px;
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
    @media #{$mq-mini-mobile} {
      padding: 4px 6px;
      font-size: 14px;
    }
  }

  .timeline-line {
    border-top: 2px solid #ffffff;
    height: 2px;
    width: 85px;
    @media #{$mq-mini-mobile} {
      border: 1px solid #ffffff;
      height: 1px;
      width: 45px;
    }
  }

  .timeline-content {
    padding: 10px 14px;
    border: 2px solid #ffffff;
    color: #ffffff;
    background: #000;
    border-radius: 2px;
    flex: 0 0 85%;

    @media #{$mq-mini-mobile} {
      border: 1px solid #ffffff;
      padding: 5px 3px;
      font-size: 10px;
      flex: 0 0 71%;
    }
  }

  .timeline-desc {
    //max-width: 50%;
    padding: 7px 14px;
    color: #000;
    background: #fff;
    margin-bottom: 10px;
    margin-left: 15%;

    @media #{$mq-mini-mobile} {
      margin-left: 5.8rem;
      font-size: 10px;
    }
  }
}

.tutorial {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 120px;

  @media #{$mq-lg} {
    padding-top: 200px;
  }

  @media #{$mq-mini-mobile} {
    padding-top: 23vh;
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
      font-size: 13px;
      height: 100px;
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
    height: 25vh;
  }

  @media #{$mq-se} {
    height: 30vh;
  }
}

.chart-box {
  height: calc(100% - 60px);

  @media #{$mq-tablet} {
    //height: calc(100% - 100px);
  }

  @media #{$mq-lg} {
    height: calc(100% - 200px);
  }

  @media #{$mq-mini-mobile} {
    height: 75vh;
  }

  @media #{$mq-se} {
    height: 70vh;
  }
}

.content-box {
  padding: 75px 0;
}
</style>