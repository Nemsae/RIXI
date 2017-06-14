import { StyleSheet } from 'react-native'

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    // width: undefined,
    // height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF5E5',
    // flexDirection: 'column',
  },
  modalContainer: {
    flex: 1,
    // width: undefined,
    // height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF5E5',
    // flexDirection: 'column',
  },
  welcomeText: {
    fontFamily: 'LobsterTwo-Bold',
    fontSize: 40,
  },
  button: {
    height: 60,
    width: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFEE'
  },
  buttonText: {
    fontFamily: 'LobsterTwo-Italic',
    color: 'white',
    fontSize: 24
  },
})

export default splashStyles
