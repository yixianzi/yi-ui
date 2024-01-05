<template>
  <div>
    <yi-input v-model="state" ref="inputRef" />
    <yi-scroll-data :data="data" :header="scrollHeader"></yi-scroll-data>
    {{ state }}
    <button @click="onFocus">focus</button>
  </div>
</template>

<script setup lang="ts">
import type { InputInstance } from "@yixianzi/components";
import YiScrollData from "../../yi-ui/packages/components/src/ScrollData/ScrollData.vue";
import { ref, onMounted } from "vue";
import { mockScrollData } from "./mock/scroll";
const state = ref("");
const inputRef = ref<InputInstance>();
const data = ref<any[]>([]);
const scrollHeader = ref([
  { name: "id", prop: "id", width: 10 },
  { name: "事件ID", prop: "eventId", width: 10 },
  { name: "mainType", prop: "mainType", width: 10 },
  { name: "subType", prop: "subType", width: 10 },
  { name: "createdTime", prop: "createdTime", width: 10 },
  { name: "srcArea", prop: "srcArea", width: 10 },
  { name: "dstArea", prop: "dstArea", width: 10 },
]);
onMounted(() => {
  data.value = mockScrollData;
});

function onFocus() {
  inputRef.value?.focus();
}
</script>
<style>
@import url("../../yi-ui/packages/components/src/style.scss");
</style>
