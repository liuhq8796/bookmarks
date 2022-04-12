// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/vue-next/pull/3399

// 看 Issues 说 GlobalComponents 在 "@vue/runtime-core" 下才有效，但我这里不行，改回 "vue"
// https://github.com/antfu/unplugin-vue-components/issues/343
declare module "vue" {
  export interface GlobalComponents {
    IconBomb: typeof import("./src/components/icons/IconBomb.vue")["default"];
    IconFlag: typeof import("./src/components/icons/IconFlag.vue")["default"];
    IconRoundChevronLeft: typeof import("./src/components/icons/IconRoundChevronLeft.vue")["default"];
    MineBlock: typeof import("./src/components/MineBlock.vue")["default"];
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
  }
}

export {};
