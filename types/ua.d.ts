import VueRouter from 'vue-router'

export declare class VueAnalytics {
  constructor (initConf?: VueAnalyticsOptions);
  trackView (name: string, trackPage?: boolean): void;
  trackEvent (
    category: string, action?: string,
    label?: string, value?: any
  ): void;
  trackException (description: string, isFatal?: boolean);
  trackTiming (
    timingCategory: string, timingVar: string, 
    timingValue: number, timingLabel?: string
  ): void;
  injectGlobalDimension (
    dimensionNumber: number,
    value: string|number
  ): void;
  injectGlobalMetric (
    metricNumber: number, 
    value: string|number
  ): void;
  changeSessionLanguage (code: string): void;
}

export declare class VueAnalyticsOptions {
  appName: string;
  appVersion: string;
  trackingId: string;
  vueRouter: VueRouter;
  ignoredViews: string[];
  trackPage: boolean;
  globalDimensions?: Dimension[];
  globalMetrics?: Metric[];
}

export type Dimension = {
  dimension: number;
  value: string;
}

export type Metric = {
  metric: number;
  value: string;
}
