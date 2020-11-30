import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import clinikkLogo from '../../../assets/logo-clinikk.svg';
import languageLogo from '../../../assets/icons2/language.svg';
import iconCall from '../../../assets/icon-call.svg';
import useStyles from './style';

function ProductDetailsHeader(props) {
  const { productColor, name = 'Teleconsultation' } = props;
  const classes = useStyles();
  const color = `#${productColor}`;
  return (
    <Box style={{ backgroundColor: `${color}` }}>
      <header
        className={classes.productDetailsHeader}
        style={{ backgroundColor: `${color}` }}
      >
        <Box className={classes.logoContent}>
          <img src={clinikkLogo} className={classes.headerLogo} alt="logo" />
        </Box>
        <img src={languageLogo} className="languageLogo" alt="logo" />
      </header>
      <Box
        className={classes.productDetailsHeaderContent}
        style={{ backgroundColor: `${color}` }}
      >
        <Typography className={classes.productName}>{name}</Typography>
        <Box className={classes.productDetailsHeaderSubContent}>
          <img src={clinikkLogo} className={classes.subLogo} alt="logo" />
          <Button className={classes.callHelplineButton}>
            <img src={iconCall} className={classes.callIcon} alt="logo" />
            <Typography className={classes.callHelplineButtonText}>
              Call Helpline
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetailsHeader;
