import i18n from "../plugins/i18n";

export default function(superclass: any) {
  return class extends superclass {
    visibility: number;

    constructor(rawData: any = {}) {
      super(rawData);
      this.visibility = rawData.visibility || 1;
      this.visibility_name = i18n.t('visibilities.'+this.visibility)
    };
  }
}
