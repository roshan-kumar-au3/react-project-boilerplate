import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';
import { ReactComponent as RupeeIcon } from '../../../assets/icons2/planFeatures/rupee.svg';
import { ReactComponent as MemberIcon } from '../../../assets/icons2/planFeatures/member.svg';
import { ReactComponent as CakeIcon } from '../../../assets/icons2/planFeatures/cake.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/icons2/planFeatures/calendar.svg';

function PlanFeatures() {
  const classes = useStyles();
  return (
    <Box className={classes.planFeaturesContainer}>
      <Typography className={classes.planFeaturesTitle}>
        Plan Features
      </Typography>
      <Box className={classes.planFeaturesContent}>
        <Box className={classes.planFeaturesSubContent}>
          <RupeeIcon />
          <Box className={classes.planFeaturesTextContainer}>
            <Typography className={classes.planInitialText}>
              Sum Insured is
              <span className={classes.text}>₹ 1 Lakh</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.planFeaturesSubContent}>
          <MemberIcon />
          <Box className={classes.planFeaturesTextContainer}>
            <Typography className={classes.planInitialText}>
              Covers
              <span className={classes.text}>1 Adult</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.planFeaturesSubContent}>
          <CakeIcon />
          <Box className={classes.planFeaturesTextContainer}>
            <Typography className={classes.planInitialText}>
              Age Limit is
              <span className={classes.text}>18y to 60y</span>
            </Typography>
          </Box>
        </Box>
        <Box className={classes.planFeaturesSubContent}>
          <CalendarIcon />
          <Box className={classes.planFeaturesTextContainer}>
            <Typography className={classes.planInitialText}>
              Some feature
              <span className={classes.text}>1 year</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PlanFeatures;
