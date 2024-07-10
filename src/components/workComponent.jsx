import React from "react";
import TopWork from "./works/topWork";
import LeftWork from "./works/leftWork";
import RightWork from "./works/rightWork";
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';

const WorkComponent = () => {
  return (
    <div>
      <TopWork />
      <div className="our-features">
        <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LeftWork />
              </Grid>
              <Grid item xs={12} md={6}>
                <RightWork />
              </Grid>
            </Grid>
        </ Container>
      </div>
    </div>
  );
};

export default WorkComponent;
