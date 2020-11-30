import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 24px',
    height: '64px',
  },
  logoContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTitle: {
    fontFamily: 'Manrope',
    fontSize: '22px',
    marginLeft: '3px',
    height: '24px',
  },
  headerLogo: {
    height: '48px',
    width: '98px',
  },
}));

export default useStyles;
