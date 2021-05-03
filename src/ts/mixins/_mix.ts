export default function mix(superclass: any = class {}) {
  return {
    with(...mixins: any[]) {
      return mixins.reduce((c, mixin) => mixin(c), superclass);
    }
  };
}
