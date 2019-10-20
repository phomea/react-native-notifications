const boxed = {
  containerStyle: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333333dd',
    left: 0,
    right: 0,
    margin: 12,
    borderRadius: 15,
    flexDirection: 'column',
    elevation: 4,
  },
  headerStyle: {
    borderRadius: 15,
    backgroundColor: '#333333dd',
    flexDirection: 'row',
    padding: 12,
  },
  textStyle: {
    color: '#fff',
  },
  iconHolder: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const full = {
  ...boxed,
  containerStyle: {
    ...boxed.containerStyle,
    margin: 0,
    borderRadius: 0,
    elevation: 20,
  },
  headerStyle: {
    ...boxed.headerStyle,
    borderRadius: 0,
  },
};

export default {
  boxed: boxed,
  full: full,
};
