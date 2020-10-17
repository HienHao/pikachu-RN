import {StyleSheet} from 'react-native';

const footerStyle = StyleSheet.create({
  footer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },

  footer__changeBlock: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'normal',
  },

  footer__replay: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'normal',
  },
  buttonPosition: {
    alignItems: 'center',
    backgroundColor: '#B0E2FF',
    borderRadius: 12,
    padding: 7,
  },
  buttonReplay: {
    alignItems: 'center',
    backgroundColor: '#FF6A6A',
    borderRadius: 12,
    padding: 7,
  },
});

export default footerStyle;
