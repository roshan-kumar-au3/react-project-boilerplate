import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productErrorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorLogo: {
    marginTop: '100px',
    marginBottom: '38px',
  },
  errorTitle: {
    width: '234px',
    height: '21px',
    objectFit: ' contain',
    fontFamily: 'Manrope-Bold',
    fontSize: '16px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.31',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  divider: {
    width: '320px',
    height: '1px',
    marginTop: '15.5px',
    border: 'solid 0.5px #808080',
  },
  errorSubTitle: {
    height: '21px',
    objectFit: ' contain',
    fontFamily: 'Manrope-Regular',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.31',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
    marginTop: '14px',
    marginBottom: '152px',
    width: '300px',
  },
  callButton: {
    width: '320px',
    height: '48px',
    fontFamily: 'Manrope-Regular',
    fontSize: '16px',
    marginTop: '40px',
    textTransform: 'capitalize',
  },
}));

export default useStyles;
