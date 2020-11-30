import React from 'react';
import { Box } from '@material-ui/core';
import clinikkLogo from '../../../assets/logo-clinikk.svg';
import languageLogo from '../../../assets/icons2/language.svg';
import useStyles from './style';

function ProductHeader() {
  const classes = useStyles();
  return (
    <header className={classes.productHeader}>
      <Box className={classes.logoContent}>
        <img src={clinikkLogo} className={classes.headerLogo} alt="logo" />
      </Box>
      <img src={languageLogo} className="languageLogo" alt="logo" />
    </header>
  );
}

export default ProductHeader;
