import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';

const user = {
  avatar: '',
  address: '수원시 영통구 이의동',
  country: 'USA',
  jobTitle: 'Web Front-End 개발자',
  name: '인혜민',
  ename: 'In Hyemin',
  jobYear: '(경력 10년)'
};

const PortfolioMy = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.ename}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.address}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.jobTitle} ${user.jobYear}`}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default PortfolioMy;
