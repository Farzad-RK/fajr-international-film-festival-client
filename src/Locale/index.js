import fa from './fa'
import en from './en'


const locale ='fa'
export const getText = (key) =>{
    switch ( locale) {
        case "fa":
            return fa[key];
        case "en":
            return en[key];

    }
};
export const getAlignment = () => {
    switch ( locale) {
        case "fa":
            return "left";
        case "en":
            return "right";
    }
};