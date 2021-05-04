import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import PortfolioMy from 'src/components/portfolio/PortfolioMy';
import PortfolioDetails from 'src/components/portfolio/PortfolioDetails';

const Portfolio = () => (
  <>
    <Helmet>
      <title>Portfolio</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <PortfolioMy />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PortfolioDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Portfolio;
