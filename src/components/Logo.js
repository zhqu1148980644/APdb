import PropTypes from 'prop-types';
// material
import { Box, Typography, Link } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <Typography variant="h2" sx={{ width: 40, height: 40, ...sx }} color="#00AB55">
      APdb
    </Typography>
  );
  // return <Typography  variant="h1">asd</Typography>;
  // return (<Box component={Link} sx={{ width: 40, height: 40, ...sx }}>apdb</Box>);
}
