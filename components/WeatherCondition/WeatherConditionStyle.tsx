import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    gap: 15, // adds spacing between children
    paddingHorizontal: 16, // 👈 moves the whole row inward
  },
  wind: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    aspectRatio: 1.2, // this changes the height not "padding"
    backgroundColor: '#C2E9FB',
  },
  text: {
    fontFamily: 'RadioCanada-Regular',
    color: 'black',
  },
});
