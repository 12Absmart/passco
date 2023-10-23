import { scale } from '../../utils/scaling'
import { StyleSheet } from 'react-native'
import { alignment } from '../../utils/alignment'
import { theme } from '../../utils/themeColors'

const styles = (props = null) =>
  StyleSheet.create({
    flex: {
      flex: 1
    },
    formContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: props !== null ? props.themeBackground : 'transparent'
    },
    containerInfo: {
      width: '100%',
      ...alignment.MTmedium
    },
    formSubContainer: {
      borderRadius: scale(18),
      width: '95%',
      backgroundColor: theme.Pink.white,
      alignSelf: 'center',
      shadowOffset: { width: 2, height: 4 },
      shadowColor: props !== null ? props.shadowColor : 'transparent',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 15,
      borderWidth:
        props !== null && props.themeBackground !== '#FAFAFA' ? 2 : 0,
      borderColor: props !== null ? props.shadowColor : 'transparent',
      ...alignment.MTsmall,
      ...alignment.Pmedium
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    containerHeading: {
      flexDirection: 'row',
      alignContent: 'space-between'
    },
    headingTitle: {
      width: '50%'
    },
    headingLink: {
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    headingButton: {
      justifyContent: 'center',
      ...alignment.PLmedium
    },
    saveContainer: {
      backgroundColor: theme.Pink.main,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: scale(6),
      padding: scale(5),
      paddingLeft: scale(20),
      paddingRight: scale(20),
      width: '28%'
    },
    bacKButton: {
      backgroundColor: 'white',
      borderRadius: scale(50),
      marginLeft: scale(10),
      width: scale(55),
      alignItems: 'center'
    },
    verifiedButton: {
      padding: scale(5),
      paddingLeft: scale(20),
      paddingRight: scale(20),
      borderRadius: scale(6),
      width: '28%',
      height: scale(30),
      marginTop: scale(10)
    },
    // Model for password changing
    modalContainer: {
      backgroundColor: props !== null ? props.cartContainer : '#FFF',
      borderRadius: scale(14),
      justifyContent: 'center',
      alignItems: 'center',
      ...alignment.PTmedium,
      ...alignment.PBsmall
    },
    modalContent: {
      width: '90%'
    },
    titleContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    btnContainer: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      ...alignment.MTlarge,
      ...alignment.PTxSmall,
      ...alignment.PBxSmall
    },
    titleContainer: {
      padding: scale(25),
      fontSize: scale(20),
      fontWeight: '600'
    },
    phoneDetailsContainer: {
      display: 'flex',
      flexDirection: 'row'
    }
  })
export default styles