import { colors } from "../../Theme/colors";
import { typography } from "../../Theme/typography";



//common text style 
const Base = {
    fontFamily:typography.primary,
    fontSize:16,
    color:colors.white,
}

const Bold = {
    fontFamily:typography.curvey,
    fontSize:16,
    color:colors.white,
}

const Small = {
    fontFamily:typography.primary,
    color:colors.white,
}

export const presets ={
    default: Base,
    bold: Bold,
    small:Small,
    h1:{
        ...Small,
        fontSize: 32,
    },
    h2:{
        ...Small,
        fontSize: 28
    },
    h3:{
        ...Base,
        fontSize: 24
    },
}