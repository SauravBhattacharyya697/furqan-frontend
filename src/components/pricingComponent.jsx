import React from "react";
import Plan from "./pricing/plan";
import ExpertPlan from "./pricing/expertPlan";
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';

const PricingComponent = () => {
  return (
    <div className="plan-price">
      <Container>
      <div className="main-header">
        <span className="roundText">Plan and Pricing</span>
        <h2>Flexible <span className="gradientText">Pricing Plans</span></h2>
        <p>
          Choose a plan that suits your needs and unlock the full potential of0
          Educationist.ai
        </p>
      </div>
      <div className="price-plan-main-items">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={4}>
          <Plan
            title="Free Plan"
            subText="Free for beginners"
            displayPrice="₹0.00"
            originalPrice=""
            textOne="Basic career recommendations"
            textTwo="Limited access to tools"
            upcoming={false}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Plan
            title="Pro Plan"
            subText="Most popular"
            displayPrice="₹1499"
            originalPrice="₹2000"
            textOne="Detailed career plans"
            textTwo="Skill mapping"
            upcoming={false}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Plan
            title="Premium Plan"
            subText="Pro Featured"
            displayPrice="₹2499"
            originalPrice="₹3000"
            textOne="All Pro features"
            textTwo="Comprehensive psychometric tests"
            upcoming={true}
          />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <ExpertPlan
            title="Expert Plan"
            subText="Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque."
            displayPrice="₹4499"
            originalPrice="₹5000"
            textOne="All Premium features"
            textTwo="one-on-one sessions with a human expert career coach"
            upcoming={true}
          />
        </Grid>
      </Grid>

        
        
        
      </div>
      
      </Container>
    </div>
  );
};

export default PricingComponent;
