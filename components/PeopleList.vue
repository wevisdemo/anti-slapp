<template>
  <div class="people flex-wrap d-flex" v-if="step == 0">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 55"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 64"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 99"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 222"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 84"
      alt=""
      :key="'case_6_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 1">
    <img
      loading="lazy"
      class="bg-white"
      :src="people_1"
      v-for="(item, i) in 55"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 64"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 99"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 222"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 84"
      alt=""
      :key="'case_6_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 2">
    <img
      loading="lazy"
      class="bg-white"
      :src="people_1"
      v-for="(item, i) in 60"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 99"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 152"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 301"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 84"
      alt=""
      :key="'case_6_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 3">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 82"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 103"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 171"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :class="{ 'bg-white': i >= 301 }"
      :src="people_5"
      v-for="(item, i) in 457"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 87"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 35"
      alt=""
      :key="'case_7_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 4">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 88"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 103"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 184"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 492"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 99"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 43"
      alt=""
      :key="'case_7_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 5">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 97"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 103"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 199"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 510"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 100"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      class="bg-white"
      v-for="(item, i) in 52"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 13"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 20"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 6">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 103"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 103"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 206"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      class="bg-white"
      v-for="(item, i) in 511"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 100"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 59"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 7">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 113"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 225"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      class="bg-white"
      v-for="(item, i) in 549"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 100"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 72"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 8">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 124"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 320"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      class="bg-white"
      v-for="(item, i) in 902"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 106"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 74"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 9">
    <img
      loading="lazy"
      :class="{ 'bg-white': i >= 124 }"
      :src="people_1"
      v-for="(item, i) in 145"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 111"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 453"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 1171"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 90"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 10">
    <img
      loading="lazy"
      :src="people_1"
      v-for="(item, i) in 154"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 112"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 549"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      class="bg-white"
      v-for="(item, i) in 1337"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 97"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 11">
    <img
      loading="lazy"
      class="bg-white"
      :src="people_1"
      v-for="(item, i) in 162"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 115"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 572"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 1367"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 109"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 18"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
  <div class="people flex-wrap d-flex" v-else-if="step == 12">
    <img
      loading="lazy"
      class="bg-white"
      :src="people_1"
      v-for="(item, i) in 166"
      alt=""
      :key="'case_1_' + i"
    />
    <img
      loading="lazy"
      :src="people_2"
      v-for="(item, i) in 115"
      alt=""
      :key="'case_2_' + i"
    />
    <img
      loading="lazy"
      :src="people_3"
      v-for="(item, i) in 5"
      alt=""
      :key="'case_3_' + i"
    />
    <img
      loading="lazy"
      :src="people_4"
      v-for="(item, i) in 572"
      alt=""
      :key="'case_4_' + i"
    />
    <img
      loading="lazy"
      :src="people_5"
      v-for="(item, i) in 1415"
      alt=""
      :key="'case_5_' + i"
    />
    <img
      loading="lazy"
      :src="people_6"
      v-for="(item, i) in 107"
      alt=""
      :key="'case_6_' + i"
    />
    <img
      loading="lazy"
      :src="people_7"
      v-for="(item, i) in 112"
      alt=""
      :key="'case_7_' + i"
    />
    <img
      loading="lazy"
      :src="people_8"
      v-for="(item, i) in 26"
      alt=""
      :key="'case_8_' + i"
    />
    <img
      loading="lazy"
      :src="people_9"
      v-for="(item, i) in 24"
      alt=""
      :key="'case_9_' + i"
    />
  </div>
</template>


<script>
export default {
  props: {
    step: Number,
  },
  data() {
    return {
      people_1: require("~/assets/images/icon_people/01_people.svg"),
      people_2: require("~/assets/images/icon_people/02_people.svg"),
      people_3: require("~/assets/images/icon_people/03_people.svg"),
      people_4: require("~/assets/images/icon_people/04_people.svg"),
      people_5: require("~/assets/images/icon_people/05_people.svg"),
      people_6: require("~/assets/images/icon_people/06_people.svg"),
      people_7: require("~/assets/images/icon_people/07_people.svg"),
      people_8: require("~/assets/images/icon_people/08_people.svg"),
      people_9: require("~/assets/images/icon_people/09_people.svg"),
      blink_case_1: 0,
      blink_case_5: 0,
      blink_case_7: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.people {
  //transition: all 0.3s;
  //opacity: 1;
}
img {
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
</style>