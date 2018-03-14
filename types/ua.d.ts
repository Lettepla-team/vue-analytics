import VueRouter from 'vue-router'

export declare class VueAnalytics {
  constructor (options?: VueAnalyticsOptions);

  trackView (name: String, trackPage?: boolean): void;
  trackEvent (category: String, action?: String, label?: String, value?: any): void;
  trackException (description: String, isFatal?: boolean);
  trackTiming (timingCategory: String, timingVar: String, timingValue: number, timingLabel?: String): void;
  injectGlobalDimension (dimensionNumber: number, value: String|number): void;
  injectGlobalMetric (metricNumber: number, value: String|number): void;
  changeSessionLanguage (code: String): void;

  static install: PluginFunction<never>;
}

export declare class VueAnalyticsOptions {
  appName: String;
  appVersion: String;
  trackingId: String;
  vueRouter: VueRouter;
  ignoredViews: String[];
  trackPage: boolean;
  globalDimensions?: Dimension[];
  globalMetrics?: Metric[];
}

export type Dimension = {
  dimension: number;
  value: String;
}

export type Metric = {
  metric: number;
  value: String;
}
