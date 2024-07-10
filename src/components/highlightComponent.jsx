import React from "react";
import LeftHighlight from "./highlight/leftHighlight";
import RightHighlight from "./highlight/rightHighlight";
import BottomHighlight from "./highlight/bottomHighlight";
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';

const HighlightComponent = () => {
  return (
    <div className="MainBannerPart">
      <div className="banner-main-part">
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <LeftHighlight />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightHighlight />
        </Grid>
      </Grid>

    <BottomHighlight />
      
      </Container>
        
      </div>
      
    </div>
  );
};

export default HighlightComponent;
