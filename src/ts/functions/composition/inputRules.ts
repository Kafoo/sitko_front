import i18n from "@/ts/plugins/i18n";
import { capitalize } from "@/ts/functions/vueFilters";

export const useInputRules = () => {
  const email = [
    (v: string) =>
      /.+@.+\..+/.test(v) ||
      !v ||
      capitalize(i18n.t("form.unvalid", { item: i18n.t("e-mail") }))
  ];

  var url_pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  const url = [
    (v: string) =>
      url_pattern.test(v) ||
      !v ||
      capitalize(i18n.t("form.unvalid", { item: i18n.t("url") }))
  ];

  const image = [
    (v: File) =>
      !v ||
      v.size < 4000000 ||
      capitalize(i18n.t("media.max_size", { max: "4 MB" }))
  ];

  const required = [(v: string) => !!v || capitalize(i18n.t("form.required"))];

  const min = (n: number) => {
    return [
      (v: string) =>
        (v && v.length >= n) ||
        v.length == 0 ||
        capitalize(i18n.t("form.min_carac", { n: n }))
    ];
  };

  const match = (item1: string = "", item2: string = "") => {
    return [
      item1 === item2 ||
        capitalize(i18n.t("form.differents", { items: i18n.tc("password", 2) }))
    ];
  };

  return {
    email,
    url,
    required,
    image,
    match,
    min
  };
};
