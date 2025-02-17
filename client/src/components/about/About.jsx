
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email , LinkedIn} from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 30px;
    }
`;

const Text = styled(Typography)`
    color: black;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Code for Interview</Typography>
                <Text variant="h5">I'm a Software Engineer based in India. 
                    I've built websites, desktop applications <br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/DhruvPatel307" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat <span> </span>
                </Text>
                <Text variant="h5">Here is my LinkedIn profile
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/dhruv-patel-35209325a/" color="inherit" target="_blank"><LinkedIn /></Link>
                    </Box> to see my acheivements
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;