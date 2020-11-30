import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './style';
import clinikkLogo from '../../../assets/logo-clinikk.svg';
import memberLogo from '../../../assets/icon-members.svg';
import iconNextBlue from '../../../assets/icon-next-blue.svg';

function ProductCard(props) {
  const { productColor, name, productId } = props;
  const classes = useStyles();
  return (
    <Box className={classes.productCard}>
      <Box
        className={classes.productCardContent}
        style={{ backgroundColor: `${productColor}` }}
      >
        <Typography className={classes.productName}>{name}</Typography>
        <Box className={classes.productCardSubContent}>
          <img src={clinikkLogo} className={classes.clinikkLogo} alt="logo" />
          <Box className={classes.productCardCoverContent}>
            <img src={memberLogo} className={classes.memberLogo} alt="logo" />
            <Typography className={classes.coverText}>1</Typography>
          </Box>
        </Box>
      </Box>
      <Link
        to={`/products/${productId}/${productColor.substring(1)}`}
        style={{ textDecoration: 'none' }}
      >
        <Box className={classes.productCardFooter}>
          <Typography className={classes.productPrice}>
            Starts at 299/mo
          </Typography>
          <img src={iconNextBlue} className={classes.clinikkLogo} alt="logo" />
        </Box>
      </Link>
    </Box>
  );
}

export default ProductCard;
