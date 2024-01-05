<template>
  <div>
    <div class="yi-scoll-a" id="scoll1">
      <ul :style="{ marginTop: marginTop + 'px' }">
        <li v-for="item in props.data">
          <span v-for="value in Object.values(item)">{{ value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ScrollDataProps } from "./ScrollDataType";
defineOptions({
  name: "YiScrollData",
});

const props = withDefaults(defineProps<ScrollDataProps>(), {});

const marginTop = ref(0);

onMounted(() => {
  const dom = document.getElementById("scoll1");
  scoll_a(dom);
});
const scoll_a = (ele: any) => {
  var ele = ele;
  var scollTop = 0;
  var h1 = parseInt(ele.children[0].getBoundingClientRect().height);
  var h2 = parseInt(ele.getBoundingClientRect().height);
  const listGo = function () {
    if (h2 - scollTop < h1 + h2 / 2) {
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
    console.log(1);
    clearInterval(myVar);
  };
  ele.onmouseout = function () {
    console.log(2);
    myVar = setInterval(function () {
      listGo();
    }, 40);
  };
};

defineExpose({
  focus,
});
</script>
