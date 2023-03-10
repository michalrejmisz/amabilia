import {Container, createStyles, Text} from "@mantine/core";
import {ThemeColor} from "./ThemeColor";

const useStyles = createStyles((theme) => ({
    footer: {
        // backgroundColor: theme.colors[theme.primaryColor][9],
        backgroundColor: theme.colors[theme.primaryColor][3],
        padding: '10px',
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            // minHeight: '20vh',
        }
    }
}));


const Footer = () => {
    const { classes } = useStyles();

    return(
        <footer className={classes.footer}>
            <Container>
               Copyright © Amabilia 2023
            </Container>
        </footer>
    )
}

export default Footer;