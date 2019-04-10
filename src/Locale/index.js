import fa from './fa'
import en from './en'

export const locale = "fa";
export const getText = (key) =>{
    switch (locale) {
        case "fa":
            return fa[key];
        case "en":
            return en[key];

    }
}