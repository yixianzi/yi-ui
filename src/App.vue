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
  { name: "id", prop: "id" },
  { name: "事件ID", prop: "eventId", width: 200 },
  { name: "mainType", prop: "mainType" },
  { name: "subType", prop: "subType" },
  { name: "createdTime", prop: "createdTime" },
  { name: "srcArea", prop: "srcArea" },
  { name: "dstArea", prop: "dstArea" },
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
