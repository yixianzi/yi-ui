<template>
  <div class="yi-scroll">
    <ul>
      <li class="scroll-li header">
        <span
          class="li-span"
          v-for="item in props.header"
          :style="{ minWidth: item.width ? item.width + 'px' : '' }"
          >{{ item.name }}</span
        >
      </li>
    </ul>
    <div
      class="yi-scoll-a"
      id="scoll1"
      :style="{ height: props.tableHeight + 'px' }"
    >
      <ul :style="{ marginTop: marginTop + 'px' }">
        <li
          v-for="item in props.data"
          :style="{ height: props.rowHeight + 'px' }"
          class="scroll-li"
        >
          <span
            v-for="value in props.header"
            :title="item[value.prop]"
            :class="['li-span', `span-${value.prop}`]"
            :style="{ minWidth: value.width ? value.width + 'px' : '' }"
            >{{ item[value.prop] }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { ScrollDataProps } from "./ScrollDataType";
defineOptions({
  name: "YiScrollData",
});

const props = withDefaults(defineProps<ScrollDataProps>(), {
  rowHeight: 30,
  tableHeight: 300,
});

const marginTop = ref(0);

onMounted(() => {
  const dom = document.getElementById("scoll1");
  nextTick(() => {
    scoll_a(dom);
  });
});
const scoll_a = (ele: any) => {
  var ele = ele;
  var scollTop = 0;
  const h1 = parseInt(ele.children[0].getBoundingClientRect().height);
  const h2 = parseInt(ele.getBoundingClientRect().height);
  // const listGo = function () {
  //   if (h2 - scollTop < h1 + h2 / 2) {
  //     scollTop = scollTop - 2;
  //     marginTop.value = scollTop;
  //   } else {
  //     scollTop = 0;
  //     marginTop.value = scollTop;
  //   }
  // };

  const listGo = function () {
    if (-scollTop < h1 - h2) {
      scollTop = scollTop - 1;
      marginTop.value = scollTop;
    } else {
      scollTop = 0;
      marginTop.value = scollTop;
    }
  };

  let myVar = setInterval(function () {
    listGo();
  }, 40);
  ele.onmouseover = function () {
    clearInterval(myVar);
  };
  ele.onmouseout = function () {
    myVar = setInterval(function () {
      listGo();
    }, 40);
  };
};

defineExpose({
  focus,
});
</script>
