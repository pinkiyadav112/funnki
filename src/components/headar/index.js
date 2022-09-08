
import Slidebar from "../../components/headar/Slidebar";
import Topbar from "../../components/headar/topbar";
import { Container } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Header = () => {
  
    return (
        <>
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                        <Slidebar />
                        </Grid>
                        <Grid item xs={8}>
                        <Topbar />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
export default Header;