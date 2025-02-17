
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on<span> </span>
                    <Link href="https://www.instagram.com/_dhruv.ig/?hl=en" color="inherit" target="_blank">
                        <Instagram />
                    </Link>
                    <span> </span> or send me an Email <span> </span>
                    <Link href="https://mail.google.com/mail/u/0/#inbox" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;