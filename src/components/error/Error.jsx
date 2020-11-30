import React from 'react';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import useStyles from './style';
import ProductHeader from '../productList/productHeader/ProductHeader';
import errorLogo from '../../assets/icon-error.svg';

function Error() {
  const classes = useStyles();
  return (
    <>
      <ProductHeader />
      <Box className={classes.productErrorContainer}>
        <img src={errorLogo} className={classes.errorLogo} alt="logo" />
        <Typography className={classes.errorTitle}>
          Oops! Something’s wrong
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.errorSubTitle}>
          Kindly call Clinikk Helpline to speak with our support team by
          clicking below
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="tel:91-7813-811-811"
          className={classes.callButton}
        >
          Call Clinikk Helpline
        </Button>
      </Box>
    </>
  );
}

export default Error;
