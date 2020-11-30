import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  planFeaturesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '23px',
  },
  planFeaturesTitle: {
    width: '103px',
    height: '16px',
    fontFamily: 'Manrope',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.8px',
    textAlign: 'left',
    color: '#808080',
    marginTop: '22px',
    textTransform: 'uppercase',
  },
  planFeaturesContent: {
    marginTop: '13px',
  },
  planFeaturesSubContent: {
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  planFeaturesTextContainer: {
    marginLeft: '11.6px',
  },
  planInitialText: {
    height: '21px',
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'bold',
    lineHeight: 'normal',
    letterSpacing: '0.8px',
    textAlign: 'left',
    color: '#000000',
  },
  text: {
    height: '21px',
    fontFamily: 'Manrope',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.8px',
    textAlign: 'left',
    color: '#000000',
    marginLeft: '3px',
  },
}));

export default useStyles;
