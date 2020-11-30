import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  productCard: {
    width: '100%',
    minHeight: '108px',
    marginTop: '14px',
    marginBottom: '24px',
    padding: '0 0 6px',
    borderRadius: '8px',
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.15)',
    backgroundColor: ' #ffffff',
  },
  productCardContent: {
    height: '78px',
    padding: '16px 16px 8px',
  },
  productName: {
    height: '22px',
    fontFamily: 'Manrope',
    marginBottom: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: ' normal',
    textAlign: 'left',
    color: '#000000',
    textTransform: 'capitalize',
  },
  clinikkLogo: {
    width: '63px',
    height: '22px',
    marginTop: '10px',
    objectFit: 'contain',
  },
  productCardSubContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  productCardCoverContent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
  },
  coverText: {
    color: '#0033cc',
    fontFamily: 'Manrope',
  },
  productCardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    width: '99px',
    height: '16px',
    marginLeft: '16px',
    fontFamily: ' Manrope',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#0033cc',
  },
}));

export default useStyles;
