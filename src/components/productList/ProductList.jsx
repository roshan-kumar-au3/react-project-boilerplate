import React, { Component } from 'react';
import {
  Box,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  Typography,
  withStyles,
  Button,
} from '@material-ui/core';

import useStyles from './style';
import ProductHeader from './productHeader';
import downArrow from '../../assets/icon-chevron-straight.svg';
import ProductCard from './productCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBusinesses: false,
      selectedClient: {
        name: 'Maya Health',
        id: '1a',
      },
      clientArray: [
        { name: 'Maya Health', id: '1a' },
        { name: 'Pay1', id: '2a' },
        { name: 'Clinikk Healthcare', id: '3a' },
      ],
    };
  }

  render() {
    const { classes } = this.props;
    const { showBusinesses, selectedClient, clientArray } = this.state;
    return (
      <>
        <ProductHeader />
        <Box className={classes.productListHeader}>
          <Typography className={classes.productListTitle}>
            Product List
          </Typography>
          <Box
            className={classes.selectBusiness}
            onClick={() => this.setState({ showBusinesses: true })}
            role="button"
            tabIndex="0"
          >
            <Typography className={classes.clientName} noWrap>
              {selectedClient.name}
            </Typography>
            <img src={downArrow} className={classes.arrowLogo} alt="logo" />
          </Box>
        </Box>
        <Box className={classes.productCardContainer}>
          <ProductCard
            name="Teleconsultation"
            productColor="#e2e7f3"
            productId="1aa"
          />
          <ProductCard
            name="Health Insurance & Teleconsultation"
            productColor="#dbf1d8"
            productId="2aa"
          />
          <ProductCard
            name="Hospicash & Teleconsultation"
            productColor="#f1deeb"
            productId="3aa"
          />
        </Box>
        <Drawer
          anchor="bottom"
          open={showBusinesses}
          PaperProps={{
            style: { borderRadius: '21px 21px 0 0', marginTop: '50px' },
          }}
          onClose={() => this.setState({ showBusinesses: false })}
        >
          <Box className={classes.chooseBusinessContainer}>
            <Typography className={classes.chooseBusinessTitle}>
              Change your business
            </Typography>
            <Divider className={classes.divider} />
            <Box style={{ marginBottom: '24px' }}>
              {clientArray.map((client) => (
                <Box
                  className={
                    client.id === selectedClient.id
                      ? classes.clientBorder
                      : classes.clientItem
                  }
                  key={client.name}
                  onClick={() => this.setState({ selectedClient: client })}
                >
                  <FormControlLabel
                    className={classes.formControlLabel}
                    control={
                      <Checkbox
                        color="primary"
                        checked={client.id === selectedClient.id}
                        className={classes.clientCheckbox}
                        checkedIcon={
                          <span
                            className={`${classes.icon} ${classes.checkedIcon}`}
                          />
                        }
                        icon={<span className={classes.icon} />}
                      />
                    }
                    label={
                      <span
                        style={{
                          fontFamily: `${
                            client.id === selectedClient.id
                              ? 'Manrope'
                              : 'Manrope'
                          }`,
                          fontWeight: `${
                            client.id === selectedClient.id ? 'bold' : 'normal'
                          }`,
                        }}
                      >
                        {client.name}
                      </span>
                    }
                  />
                </Box>
              ))}
            </Box>
            <Box>
              <Divider className={classes.dividerTwo} />
              <Box className={classes.addBusinessBox}>
                <Typography className={classes.addBusinessTitle}>
                  Want to add a new business?
                </Typography>
              </Box>
            </Box>
            <Box style={{ marginBottom: '30px' }}>
              <Button
                variant="outlined"
                color="primary"
                href="tel:91-7813-811-811"
                className={classes.clientSubmit}
              >
                Call Clinikk Helpline
              </Button>
            </Box>
          </Box>
        </Drawer>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(ProductList);
