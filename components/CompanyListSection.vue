<template>
  <div>
    <template v-for="(item, i) in people_list">
      <b-row class="company-list mb-5 px-3" :key="i" no-gutters>
        <b-col
          cols="12"
          sm="6"
          class="d-flex justify-content-center justify-content-sm-end"
          :class="{ 'align-items-center': i != 8 }"
        >
          <div class="img-box">
            <img
              class="company-img-1"
              v-if="i % 2 == 0"
              :src="item.img"
              width="100%"
              alt=""
            />
            <img
              class="company-img-2"
              v-else
              :src="item.img"
              width="100%"
              alt=""
            />
          </div>
        </b-col>
        <vue-aos animation-class="fadeInUp animated" :key="i">
          <b-col
            cols="12"
            sm="6"
            class="d-flex flex-column justify-content-center company-wrapper"
          >
            <h1
              class="wv-h8 wv-font-kondolar wv-font-black company-name"
              v-html="item.name"
              v-if="item.name != ''"
            ></h1>
            <div class="d-flex" :class="{ 'align-items-center': i != 8 }">
              <div class="line" :class="{ 'mt-5': i == 8 }"></div>
              <div class="company-data p-3 bg-black text-white">
                <h1
                  class="wv-b5 wv-font-anuphan text-uppercase"
                  v-html="item.desc"
                ></h1>
                <ol
                  class="pl-4 wv-b5 wv-font-anuphan text-uppercase mt-3"
                  v-if="item.name == 'การเสนอร่าง หรือแก้ไขเพิ่มเติมกฎหมาย'"
                >
                  <li>
                    ร่าง พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์
                    (ฉบับที่..) พ.ศ. ….
                  </li>
                  <li>
                    ร่าง พ.ร.บ. แก้ไขเพิ่มเติมประมวลกฎหมายวิธีพิจารณาความอาญา
                    (ฉบับที่..) พ.ศ. ….
                  </li>
                  <li>
                    ร่าง พ.ร.บ.แก้ไขเพิ่มเติมประมวลกฎหมายวิธีพิจารณาความแพ่ง
                    (ฉบับที่..) พ.ศ. ….
                    เพื่อสร้างกลไกคุ้มครองประชาชนจากการถูกฟ้อง ‘คดีปิดปาก’ หรือ
                    Anti-SLAPP (Strategic Lawsuit Against Public Participation)
                    Laws
                  </li>
                  <li>
                    ร่าง พ.ร.บ.แก้ไขเพิ่มเติมประมวลกฎหมายอาญา (ฉบับที่..) พ.ศ.
                    …. เพื่อเพิ่มบทลงโทษกรณีเจ้าพนักงานบิดเบือนกฎหมาย
                    ทำให้สามารถเอาผิดเจ้าพนักงานในกระบวนการยุติธรรมที่กระทำการบิดเบือนกฎหมายต่อประชาชนได้
                  </li>
                  <li>
                    ร่าง พ.ร.บ.แก้ไขเพิ่มเติมประมวลกฎหมายอาญา (ฉบับที่..) พ.ศ.
                    .…
                    ซึ่งเป็นการแก้ไขเกี่ยวกับความผิดฐานหมิ่นประมาททั้งหมดทั้งหมิ่นประมาทบุคคลทั่วไป
                    ดูหมิ่นเจ้าพนักงานดูหมิ่นศาล รวมทั้งความผิดฐานดูหมิ่น
                    หมิ่นประมาท แสดงความอาฆาตมาดร้ายต่อองค์พระมหากษัตริย์
                    เพื่อประกันเสรีภาพในการแสดงออกโดยได้สัดส่วนกับการเคารพในสิทธิหรือชื่อเสียงของประมุขของรัฐและบุคคลอื่น
                    สอดคล้องกับหลักสิทธิเสรีภาพในระบอบประชาธิปไตยสมัยใหม่
                    ไม่ว่าจะเป็นปฏิญญาสากลว่าด้วยสิทธิมนุษยชน
                    หรือกติการะหว่างประเทศว่าด้วยสิทธิพลเมืองและสิทธิทางการเมือง
                    (ICCPR)
                  </li>
                </ol>
              </div>
            </div>
          </b-col>
        </vue-aos>
      </b-row>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people_list: [
        {
          name: 'กิจกรรม "ยืน หยุด ขัง"',
          desc: "<span class='wv-font-bold'>การแสดงออกเชิงสัญลักษณ์จัดโดยกลุ่มพลเมืองโต้กลับ</span> ด้วยการยืนนิ่ง ๆ ชูสามนิ้วและถือป้ายข้อความเพื่อเรียกร้องให้ปล่อยตัวนักกิจกรรมทางการเมืองที่โดนจับกุม ซึ่งกิจกรรมนี้ถูกจัดต่อเนื่องติดต่อกันมากกว่า 30 วัน",
          img: require("~/assets/images/company/01_company.png"),
        },
        {
          name: "#ปล่อยเพื่อนเรา",
          desc: "<span class='wv-font-bold'>การติดแฮ็ชแท็คใน social media</span><br>เพื่อกระจายข่าวสารของการจับกุมและดำเนินคดีนักกิจกรรมทางการเมือง",
          img: require("~/assets/images/company/02_company.png"),
        },
        {
          name: "ความช่วยเหลือทางกฎหมาย",
          desc: "<span class='wv-font-bold'>ศูนย์ทนายความเพื่อสิทธิมนุษยชน (TLHR)</span><br>สนับสนุนทนายความช่วยเหลือทางกฎหมายจากสถานการณ์การชุมนุมและการแสดงออกทางการเมือง",
          img: require("~/assets/images/company/03_company.png"),
        },
        {
          name: "",
          desc: "<span class='wv-font-bold'>ภาคีนักกฎหมายสิทธิมนุษยชน</span><br>ร่วมจัดตั้งโดยสมาคมนักกฎหมายสิทธิมนุษยชน (สนส.) สนับสนุนความช่วยเหลือ #ราษฎรฟ้องกลับ เพื่อดำเนินคดีเอาผิดเจ้าหน้าที่รัฐซึ่งใช้อำนาจโดยมิชอบหรือละเมิดต่อสิทธิเสรีภาพของประชาชนที่ชุมนุมหรือแสดงออกทางการเมือง",
          img: require("~/assets/images/company/04_company.png"),
        },
        {
          name: "ความช่วยเหลือทางทุนทรัพย์",
          desc: "<span class='wv-font-bold'>กองทุนราษฎรประสงค์</span><br>สนับสนุนทุนทรัพย์เพื่อการประกันตัวในคดีที่เกี่ยว เนื่องกับการใช้สิทธิเสรีภาพในการแสดงออกทางการเมือง",
          img: require("~/assets/images/company/05_company.png"),
        },
        {
          name: "",
          desc: "<span class='wv-font-bold'>กองทุนดาตอร์ปิโด</span><br>สนับสนุนทุนทรัพย์เพื่อช่วยเหลือผู้ถูกคุมขังทางการเมืองและการประกันตัวในคดีจากการเคลื่อนไหวทางการเมือง",
          img: require("~/assets/images/company/06_company.png"),
        },
        {
          name: "การจัดทำข้อมูลและสร้างความตระหนักรู้",
          desc: '<span class="wv-font-bold">โครงการอินเทอร์เน็ตเพื่อกฎหมายประชาชน (iLaw)</span><br><br>จัดทำศูนย์ข้อมูลกฎหมายและคดีเสรีภาพเพื่อทำหน้าที่ติดตามและบันทึกข้อมูลการใช้กฎหมายและอำนาจรัฐปิดกั้นเสรีภาพการแสดงออก <a href="http://www.freedom.ilaw.or.th" class="yellow company-data-link" target="_blank" rel="noopener noreferrer">www.freedom.ilaw.or.th</a><br><br>พัฒนาเว็บไซต์ม็อบดาต้าไทยแลนด์ร่วมกับ Amnesty International Thailand เพื่อเป็นฐานข้อมูลเก็บรวบรวมเหตุการณ์การชุมนุมสาธารณะที่เกิดขึ้นและการใช้อำนาจกำกับดูแล คุกคามหรือขัดขวางโดยเจ้าหน้าที่รัฐ <a href="http://www.mobdatathailand.org" class="yellow company-data-link" target="_blank" rel="noopener noreferrer">www.mobdatathailand.org</a>',
          img: require("~/assets/images/company/07_company.png"),
        },
        {
          name: "",
          desc: '<span class="wv-font-bold">สมาคมนักกฎหมายสิทธิมนุษยชน (สนส.)</span><br><br>จัดทำฐานข้อมูลคดีฟ้องปิดปากในประเทศไทยเพื่อรวบรวมคดีที่เข้าข่ายการดำเนินคดีเชิงยุทธศาสตร์เพื่อระงับการมีส่วนร่วมของประชาชนในกิจการสาธารณะให้เป็นพื้นที่สำหรับการติดตามและค้นคว้าศึกษา<br><a href="http://www.naksit.net" class="yellow company-data-link" target="_blank" rel="noopener noreferrer">www.naksit.net</a><br><br>จัดทำสื่อและกิจกรรมต่าง ๆ เพื่อสร้างความตระหนักรู้ เช่น<ul class="pl-4 wv-b7"><li>คู่มือ SLAPPS สำหรับประชาชน</li><li>เวที ANTI-SLAPP HACKATHON</li><li>เวทีเสวนา "SLAPP : เมื่อกระบวนการยุติธรรมถูกใช้ปิดปากประชาชน"</li></ul>',
          img: require("~/assets/images/company/08_company.png"),
        },
        {
          name: "การเสนอร่าง หรือแก้ไขเพิ่มเติมกฎหมาย",
          desc: "สมาชิกสภาผู้แทนราษฎรพรรคก้าวไกลเสนอชุดร่างกฎหมายคุ้มครองเสรีภาพในการแสดงออกและสิทธิในกระบวนการยุติธรรมของประชาชน จำนวน 5 ฉบับ เข้าสภา ได้แก่",
          img: require("~/assets/images/company/09_company.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.company-img-1 {
  transform: rotate(4deg);
  max-width: 420px;

  @media #{$mq-mini-mobile} {
    max-width: 90%;
  }
}

.company-img-2 {
  transform: rotate(-4deg);
  max-width: 420px;

  @media #{$mq-mini-mobile} {
    max-width: 90%;
  }
}

.line {
  width: 50px;
  height: 5px;
  background: black;

  @media #{$mq-mini-mobile} {
    display: none;
  }
}

.company-data {
  max-width: 340px;

  @media #{$mq-mini-mobile} {
    max-width: 95%;
    margin: auto;
  }
}

.company-name {
  margin-left: 50px;
  max-width: 340px;

  @media #{$mq-mini-mobile} {
    max-width: 95%;
    margin-left: 2.5%;
    margin-top: 30px;
    background: black;
    color: #fff;
    padding-left: 15px;
    padding-top: 15px;
  }
}

.company-wrapper {
  @media #{$mq-mini-mobile} {
    margin: 20px auto;
  }
}

.img-box {
  @media #{$mq-mini-mobile} {
    text-align: center;
  }
}
</style>