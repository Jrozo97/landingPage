import { makeStyles } from '@mui/styles';
import { lineHeight } from '@mui/system';

export const useStyles = makeStyles(() => ({

    boxContainer:{
        width: "100vw",
        height: "46.55vh",
        backgroundColor: "#C7EEFF",
        paddingLeft: "9.722vw",
        paddingTop: "170px",
    },
    boxContainerInfo:{
        display: "flex",
        flexDirection: "row"
    },
    textTitleBox:{
        fontSize: "30px !important",
        color: "#1D242B",
        marginTop: "24px !important",
        marginBottom: "25px !important",
        marginRight: "156px !important",
        fontFamily: "Poppins !important",
        lineHeight: "46px"
    },
    textSubTitleBox:{
        fontSize: "20px !important",
        color: "#1D242B",
        marginBottom: "49px !important",
        fontFamily: "Poppins !important",
        lineHeight: "30px"
    },
    buttonBox:{
        width: "15.27vw",
        height: "4.09vw",
        borderRadius: "30px !important",
        backgroundColor: "#1D242B !important",
        color: "#FAFAFA !important",
        fontFamily: "Poppins !important",
        fontSize: "25px !important",
        textTransform: "none !important"
    },

}))

export default useStyles;