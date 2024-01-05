declare module 'vue' {
  export interface GlobalComponents {
    GieInput: typeof import('@yixianzi/components')['YiInput']
  }

  interface ComponentCustomProperties {
  }
}

export {}
