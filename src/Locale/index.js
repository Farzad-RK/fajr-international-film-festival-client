import fa from './fa'
import en from './en'

const locale = "en";
export const getText = (key) =>{
    switch (locale) {
        case "fa":
            return fa[key];
        case "en":
            return en[key];

    }
}