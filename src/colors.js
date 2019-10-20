const dark = {
  containerStyle: {
    backgroundColor: '#333333dd',
  },
  headerStyle: {
    backgroundColor: '#333333dd',
  },
  textStyle: {
    color: '#fff',
  },
  iconHolder: {},
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
};

const white = {
  ...dark,
  containerStyle: {
    ...dark.dark,
    backgroundColor: '#fff',
  },
  headerStyle: {
    ...dark.headerStyle,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#000',
  },
  icon: {
    ...dark.icon,
    tintColor: '#222',
  },
};

export default {
  dark,
  white,
};
