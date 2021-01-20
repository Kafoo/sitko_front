import i18n from '@/ts/plugins/i18n'
import { capitalize } from '@/ts/functions/vueFilters'

  export const useInputRules = () => {
  
    const email = [
      (v: string) =>
        /.+@.+\..+/.test(v) ||
        capitalize(
          i18n.t("form.unvalid", { item: i18n.t("e-mail") })
        )
    ]

    const image = [
      (v: File) =>
        !v ||
        v.size < 3000000 ||
        capitalize(
          i18n.t("media.max_size", { max: "3 MB" })
        )
    ]

    const required = [
      (v: string) =>
        !!v || capitalize(i18n.t("form.required")),
    ]

    const min = (n:number) => { return [
      (v: string) => (v && v.length >= n || v.length == 0) ||
        capitalize(i18n.t("form.min_carac", { n: n }))
      ]
    }
  
    const match = (item1:string = "", item2:string = "") => { return [
      item1 === item2 ||
        capitalize(i18n.t("form.differents", { items: i18n.tc("password", 2) }))
      ]
    }

    return {
      email,
      required,
      image,
      match,
      min
    }
  
  }
