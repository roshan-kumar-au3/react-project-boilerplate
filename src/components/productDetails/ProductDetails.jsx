import React, { Component } from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { ReactComponent as VideoIcon } from '../../assets/icons2/video.svg';
import PlanFeatures from './planFeatures';
import ProductDetailsHeader from './productDetailsHeader';
import clinikkSpecialImage from '../../assets/icons2/mostLikedFeatures/clinikkSpecialImage.png';
import useStyles from './style';
import { ReactComponent as CloseBlue } from '../../assets/icons2/common/close-blue.svg';
import teleconsultationIcon from '../../assets/icons2/mostLikedFeatures/teleconsultation.png';
import { ReactComponent as DocumentBlue } from '../../assets/icons2/document-blue.svg';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreDetails: false,
    };
  }

  openShowMoreDetailsDrawer = () => {
    this.setState({ showMoreDetails: true });
  };

  renderMoreDetailsDrawerContent = () => {
    const { classes } = this.props;
    return (
      <Paper className={classes.moreDetailsDrawerBox}>
        <div
          className={classes.closeBox}
          onClick={this.closeShowMoreDetailsDrawer}
          role="button"
          tabIndex="0"
        >
          <CloseBlue />
          <Typography className={classes.closeButtonText}>Close</Typography>
        </div>
        <div className={classes.scrollableContent}>
          <Typography className={classes.drawerTitle}>More Details</Typography>
          <div className={classes.allMoreDetails}>
            <div className={classes.moreDetailLineBox}>
              <CheckCircleOutlineIcon className={classes.greenTick} />
              <Typography className={classes.moreDetailLine}>
                description
              </Typography>
            </div>
          </div>

          <Typography className={classes.drawerTitle}>
            Need Help Understanding The Plan?
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.blueOutlinedButton}
            href="tel:91-7813-811-811"
            edge="start"
          >
            Call Clinikk Helpline
          </Button>
        </div>
      </Paper>
    );
  };

  render() {
    const { match, classes } = this.props;
    const { showMoreDetails } = this.state;
    const { params } = match;
    return (
      <>
        <ProductDetailsHeader productColor={params.productColor} />
        <PlanFeatures />
        <Box className={classes.clinikkSpecialBox}>
          <img
            src={clinikkSpecialImage}
            className={classes.clinikkSpecialBoxImage}
            alt="doctor"
          />
          <Box
            className={classes.clinikkSpecialBoxContent}
            onClick={this.showVideo}
          >
            <Typography className={classes.clinikkSpecialBoxContentHeading}>
              Doctor support on-call
            </Typography>
            <Typography className={classes.clinikkSpecialBoxContentSubHeading}>
              9 Languages • Available 24x7
            </Typography>
            <Box className={classes.clinikkSpecialSubBox}>
              <VideoIcon />
              <Typography className={classes.clinikkSpecialSubBoxContent}>
                Watch Video
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider className={classes.greyDivider} />
        <Box className={classes.mostLikedFeaturesBox}>
          <Typography className={classes.greyTitleText}>
            most liked features
          </Typography>
          <Box className={classes.mostLikedFeaturesItem}>
            <img
              src={teleconsultationIcon}
              alt="teleconsultation"
              className={classes.mostLikedFeatureIcon}
            />
            <Typography className={classes.mostLikedFeatureName}>
              benefit value
            </Typography>
          </Box>
        </Box>
        <Divider className={classes.greyDivider} />
        <Box
          className={classes.moreDetailsButton}
          onClick={this.openShowMoreDetailsDrawer}
        >
          <DocumentBlue />
          <Typography className={classes.moreDetailsName}>
            More Details
          </Typography>
        </Box>
        <Divider className={classes.greyDivider} />
        <Box style={{ height: '100px' }} />
        <Drawer
          onClose={this.closeShowMoreDetailsDrawer}
          anchor="bottom"
          open={showMoreDetails}
          PaperProps={{
            elevation: 0,
            style: { backgroundColor: 'transparent' },
          }}
        >
          {this.renderMoreDetailsDrawerContent()}
        </Drawer>
      </>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(ProductDetails);
