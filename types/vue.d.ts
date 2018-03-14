import Vue from "vue";
import VueAnalytics from "./index";

declare module "vue/types/vue" {
  interface Vue {
    $ua: VueAnalytics;
    $analytics: VueAnalytics;
  }
}
