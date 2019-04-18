import React from 'react'
import {Platform , Dimensions} from 'react-native'
export const Bold = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile_Bold';
export const Regular = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile';
export const FaNum = Platform.OS === 'ios' ? 'IRANSansMobile' : 'IRANSansMobile(FaNum)_UltraLight';

export const EnRegualr = 'sans-serif-condensed';
export const EnBold = 'sans-serif-condensed';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const getFont = (font)=>{
    const locale = 'fa'
    if(locale==='fa'){
        switch (font) {
            case "regular":
                return Regular;
            case "bold":
                return Bold;
            case "number":
                return FaNum
        }
    }else {
        switch (font) {
            case "regular":
                return EnRegualr;
            case "bold":
                return EnBold;
            case "number":
                return EnRegualr
        }
    }
}
export const getTypo = (font,language)=>{

    if(language==='fa'){
        switch (font) {
            case "regular":
                return Regular;
            case "bold":
                return Bold;
            case "number":
                return FaNum
        }
    }else {
        switch (font) {
            case "regular":
                return EnRegualr;
            case "bold":
                return EnBold;
            case "number":
                return EnRegualr
        }
    }
}
