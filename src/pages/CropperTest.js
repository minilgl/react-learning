import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';

import CropperImage from 'src/components/croppertest//CropperImage';
import CropperPreview from 'src/components/croppertest//CropperPreview';
import LabelingList from 'src/components/croppertest//LabelingList';

const CropperTest = () => (
  <>
    <Helmet>
      <title>Auto Labeling</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <CropperImage />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
              <Grid
                  item
                  xs={12}
                  mb={2}
              >
                  <CropperPreview sx={{ width: '100%' }} />
              </Grid>

              <Grid
                  item
                  xs={12}
              >
                  <LabelingList sx={{ height: '100%' }} />
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default CropperTest;
