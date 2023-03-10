import {
    createStyles,
    useMantineTheme,
    ThemeIcon,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    Grid,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import image from './image.svg';
import {Fragment} from 'react';
import BottomContactArea from "./BottomContactArea";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
    },

    content: {
        maxWidth: 480,
        marginLeft: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            // marginRight: 0,
            marginLeft: 0,
        },
    },

    title: {
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][5],

        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,
        maxWidth: '40%',

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.colors[theme.primaryColor][8],
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

export function HeroBullets() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    return (
        <Fragment>
            <Container size={"lg"}>
                <div className={classes.inner}>
                    <Image src="/static/images/desk_main.png" className={classes.image} />
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            <span className={classes.highlight}>Amabilia</span> Nie??le <br /> Ci?? urz??dzimy
                        </Title>
                        <Text color="white" mt="md">
                            W ofercie znajd?? Pa??stwo nie tylko tanie meble u??ywane i poleasingowe, ale r??wnie?? ko??c??wki serii w bardzo dobrych cenach.
                        </Text>

                        <List
                            style={{textAlign: "left"}}
                            mt={30}
                            spacing="md"
                            size="md"
                            icon={
                                <ThemeIcon size={20} radius="xl" color={theme.colors[theme.primaryColor][4]}>
                                    <IconCheck size={18} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item style={{color: theme.colors[theme.primaryColor][2]}}>
                                <span className={classes.highlight}><b style={{color: "white"}}>Meble poleasingowe</b></span> ??? w naszej ofercie znajd?? Pa??stwo ko??c??wki serii oraz meble poleasingowe
                            </List.Item>
                            <List.Item style={{color: theme.colors[theme.primaryColor][2]}}>
                                <span className={classes.highlight}><b style={{color: "white"}}>Rabat</b></span>  ??? Z?????? zam??wienie z p??atno??ci?? przy odbiorze, a otrzymasz rabat!
                            </List.Item>
                            <List.Item style={{color: theme.colors[theme.primaryColor][2]}}>
                                <span className={classes.highlight}><b style={{color: "white"}}>Darmowa dostawa</b></span> ??? w zale??no??ci od wielko??ci zam??wienia oraz odleg??o??ci od klienta mo??liwa jest darmowa dostawa,<br /> zadzwo?? a napewno si?? dogadamy!
                            </List.Item>
                        </List>
                    </div>
                </div>
                <BottomContactArea/>
            </Container>
        </Fragment>
    );
}