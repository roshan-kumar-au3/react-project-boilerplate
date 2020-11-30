import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productDetailsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 24px',
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

  productDetailsHeaderContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 24px',
  },
  productName: {
    width: '132px',
    height: '22px',
    margin: '24px 66px 27px 0',
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
  },
  subLogo: {
    height: '22px',
    width: '63px',
    marginTop: '28px',
    marginBottom: '16px',
  },
  productDetailsHeaderSubContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  callHelplineButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '12px',
    height: '48px',
  },
  callIcon: {
    width: '18px',
    height: '16px',
    paddingTop: '3px',
  },
  callHelplineButtonText: {
    height: '22px',
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#0033cc',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
