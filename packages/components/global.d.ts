declare module "vue" {
  export interface GlobalComponents {
    YiInput: typeof import("@yixianzi/components")["YiInput"];
    YiScrollData: typeof import("@yixianzi/components")["YiScrollData"];
  }

  interface ComponentCustomProperties {}
}

export {};
