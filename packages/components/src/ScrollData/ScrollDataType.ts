import ScrollData from "./ScrollData.vue";

/**
 * 定义props类型
 */
export interface ScrollDataProps {
  data: Array<any>;
  header: Array<{ name: string; prop: string; width?: number }>;
}

// /**
//  * 定义emit类型
//  */
// export type InputEmits = {
//   'update:modelValue': [value: string]
// }

// /**
//  * 定义instance类型
//  */
// export type InputInstance = InstanceType<typeof Input>
