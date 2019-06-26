const resets = theme => ({
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  address: { fontStyle: 'normal' },
  fieldset: {
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

const alignment = {
  '.align-middle': { verticalAlign: 'middle' },
  '.text-center': { textAlign: 'center' },
};

const borders = theme => ({
  '.border-light': {
    borderColor: theme.palette.primary.light,
  },
  '.border-none': { borderStyle: 'none' },
  '.border-solid': { borderStyle: 'solid' },
  '.border': { borderWidth: 1, borderStyle: 'solid' },
  '.rounded': { borderRadius: theme.shape.borderRadius },
  '.shadow': { boxShadow: theme.shadows[2] },
  '.shadow-md': { boxShadow: theme.shadows[5] },
});

const colors = theme => ({
  '.text-light': {
    color: theme.palette.primary.light,
  },
  '.text-primary': {
    color: theme.palette.text.primary,
  },
  '.text-white': { color: 'white' },
  '.bg-pri': {
    backgroundColor: theme.palette.primary.main,
  },
  '.bg-pri-dark': {
    backgroundColor: theme.palette.primary.dark,
  },
  '.bg-sec': {
    backgroundColor: theme.palette.secondary.main,
  },
  '.bg-err-light': {
    backgroundColor: theme.palette.error.light,
  },
  '.bg-white': {
    backgroundColor: 'white',
  },
});

const decoration = {
  '.uppercase': { textTransform: 'uppercase' },
};

const display = {
  '.block': { display: 'block' },
  '.hidden': { display: 'none' },
  '.inline': { display: 'inline' },
};

const flex = theme => ({
  '.flex': { display: 'flex' },
  '.flex-col': { flexDirection: 'column' },
  '.flex-row': { flexDirection: 'row' },
  '.sm-flex-col': {
    [theme.breakpoints.up('sm')]: { flexDirection: 'column' },
  },
  '.flex-wrap': { flexWrap: 'wrap' },

  '.justify-start': { justifyContent: 'flex-start' },
  '.justify-center': { justifyContent: 'center' },
  '.justify-end': { justifyContent: 'flex-end' },
  '.justify-between': { justifyContent: 'space-between' },
  '.justify-around': { justifyContent: 'space-around' },
  '.items-stretch': { alignItems: 'stretch' },
  '.items-start': { alignItems: 'flex-start' },
  '.items-center': { alignItems: 'center' },
  '.items-end': { alignItems: 'flex-end' },
  '.items-baseline': { alignItems: 'baseline' },
  '.content-center': { alignContent: 'center' },
  '.self-end': { alignSelf: 'flex-end' },

  '.flex-grow': { flexGrow: 1 },

  '.basis-50': { flexBasis: '50%' },
  '.basis-100': { flexBasis: '100%' },
  '.sm-basis-auto': {
    [theme.breakpoints.up('sm')]: { flexBasis: 'auto' },
  },
  '.sm-basis-33': {
    [theme.breakpoints.up('sm')]: { flexBasis: '33%' },
  },
  '.sm-basis-50': {
    [theme.breakpoints.up('sm')]: { flexBasis: '50%' },
  },
  '.sm-basis-100': {
    [theme.breakpoints.up('sm')]: { flexBasis: '100%' },
  },
  '.md-basis-20': {
    [theme.breakpoints.up('md')]: { flexBasis: '20%' },
  },
  '.md-basis-40': {
    [theme.breakpoints.up('md')]: { flexBasis: '40%' },
  },
  '.md-basis-60': {
    [theme.breakpoints.up('md')]: { flexBasis: '60%' },
  },
});

const flexOrder = theme => {
  const obj = {};
  const breakpoints = ['', 'sm', 'md'];
  const orders = [...Array(8).keys()];

  breakpoints.forEach(bp =>
    orders.forEach(
      order =>
        (obj[`.${bp ? `${bp}-` : ''}order-${order}`] = bp
          ? {
              [theme.breakpoints.up(bp)]: obj[`.order-${order}`],
            }
          : { order })
    )
  );

  return obj;
};

const position = {
  '.absolute': { position: 'absolute' },
  '.relative': { position: 'relative' },
  '.sticky': { position: 'sticky' },
  '.pin-b': { bottom: 0 },
  '.pin-l': { left: 0 },
  '.pin-r': { right: 0 },
  '.pin-t': { top: 0 },
};

const typography = {
  '.icon-small': { fontSize: 18 },
};

const dimensions = {
  '.w-full': { width: '100%' },
  '.w-screen': { width: '100vw' },
  '.h-full': { height: '100%' },
};

const styles = theme => {
  return {
    '@global': Object.assign(
      {},
      resets(theme),
      alignment,
      borders(theme),
      colors(theme),
      decoration,
      display,
      flex(theme),
      flexOrder(theme),
      position,
      typography,
      dimensions
    ),
  };
};

export default styles;