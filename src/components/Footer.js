import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item style={{border:"none",boxShadow:"none"}}><img src="https://res.cloudinary.com/dgdnpkfun/image/upload/v1667700415/fade-logo_dnkylf.svg" alt="Fade" style={{width:150}}/>
</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item sx={{boxShadow:"none",border:"none"}}>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}
              >
                Our Product
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2, listStyle: "none" }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item sx={{boxShadow:"none",border:"none"}}>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}
              >
                Accounts
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2, listStyle: "none" }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item sx={{boxShadow:"none",border:"none"}}>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}
              >
                Resources
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2, listStyle: "none" }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item sx={{boxShadow:"none",border:"none"}}>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 700 }}
              >
                Contact
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2, listStyle: "none" }}>
                <li>Address: 123 Main Street</li>
                <li>San Francisco, CA 94013</li>
                <li>Email: support@fade.pool</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item sx={{boxShadow:"none", border:"none", pl: 10}}>© 2022 by <a href="https://oscarluna.dev">Oscar Armando Luna</a></Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item sx={{boxShadow:"none",border:"none"}}>Careers</Item>
            </Grid>
            <Grid>
              <Item sx={{boxShadow:"none",border:"none"}}>Privacy Policy</Item>
            </Grid>
            <Grid>
              <Item sx={{boxShadow:"none",border:"none"}}>Support</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;