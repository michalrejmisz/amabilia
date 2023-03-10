import {
    ActionIcon,
    createStyles,
    Group,
    Image,
    List,
    MediaQuery,
    Text,
    useMantineTheme,
    Flex,
    UnstyledButton,
    SimpleGrid,
    Grid, TextInput, Input,
    Title,
    Button,
    Transition,
    SegmentedControl,
    Box,
    Center,
    Alert,
    ThemeIcon,
    Textarea
} from "@mantine/core";
import {IconMail, IconCreditCard, IconBusinessplan, IconPlus, IconPhone, IconUser, IconBuildingSkyscraper, IconChevronUp, IconTrash, IconReceiptOff, IconReceipt, IconPackage, IconAlertCircle, IconCircleCheck} from "@tabler/icons";
import React, {useEffect, useState} from "react";
import {useViewportSize, useId} from "@mantine/hooks";
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
    title: {
        margin: "0px 10px 15px 10px",
        float: "left",
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: "100",
        letterSpacing: "2.5px",
        color: theme.colors[theme.primaryColor][6],
        marginTop: theme.spacing.sm,
        marginLeft: theme.spacing.xl,
        marginBottom: theme.spacing.xs,
        // marginBottom: theme.spacing.xs,
        // "&:not(:first-child)": {
        //     marginTop: theme.spacing.xl,
        // }
        [theme.fn.smallerThan('sm')]: {
            marginLeft: theme.spacing.xs,
            marginBottom: 0,
        },
    },


    form: {
        borderTop: `1px solid ${theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border}`,
        display: "flex",
        height: "100%",
        flexDirection: 'row',
        alignItems: 'left',
        width: "100%",
        justifyContent: "space-between",
        flexFlow: "wrap",
        paddingTop: theme.spacing.lg,
        textAlign: "left",
    },

    segmentControlGroup: {
        flexBasis: "100%",
        zIndex: "1",
        marginBottom: theme.spacing.xl,

        [theme.fn.smallerThan('sm')]: {
            width: "100%",
        },
    },

    segmentControl: {
        minWidth: "400px",
        [theme.fn.smallerThan('sm')]: {
            minWidth: "1px",
            width: "95%",
        },
    },

    icon: {
        "@media not all and (min-width: 365px)": {
            display: "none",
        }
    },

    alert: {
        display: "flex",
        flexBasis: "100%",
        flexDirection: 'row',
        margin: 0,
        marginBottom: theme.spacing.xl,
        colors: theme.colors.blue[6],
    },
}));

export const FinalStep = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [contactOption, setContactOption] = useState("phone")
    const [paymentOption, setPaymentOption] = useState("cash")
    const [privacyAgreement , setPrivacyAgreement] = useState("nie")
    const [newsletterAgreement , setNewsletterAgreement] = useState("nie")
    const [isComment, setIsComment] = useState(false)

    const handleShowCommentArea = () => {
        setIsComment(true)
    }


    return(
        <>
            <Title order={4} className={classes.title}>Kontakt</Title>
            <form className={classes.form}>
            <Alert className={classes.alert}>

                <p style={{color: theme.colors.blue[6]}}>Wybierz w jaki spos??b ma si?? z Tob?? skontaktowa?? nasz pracownik w celu finalizacji zakupu.</p>

            </Alert>
                <SegmentedControl
                    className={classes.segmentControl}
                    color="blue"
                    size="sm"
                    value={contactOption}
                    onChange={setContactOption}
                    // onChange={(value) => receiptHandler(value)}
                    data={[
                        {
                            value: "phone",
                            label: (
                                <Center>
                                    <IconMail className={classes.icon}/>
                                    <Box my={theme.spacing.sm} ml={theme.spacing.xs}>TELEFON</Box>
                                </Center>
                            ),
                        },
                        {
                            value: "mail",
                            label: (
                                <Center>
                                    <IconMail className={classes.icon}/>
                                    <Box my={theme.spacing.sm} ml={theme.spacing.xs}>MAIL</Box>
                                </Center>
                            ),
                        },
                    ]}
                />
            </form>

            <Title order={4} className={classes.title}>P??atno????</Title>
            <form className={classes.form}>
                <Alert className={classes.alert}>

                    <p style={{color: theme.colors.blue[6]}}>Wybierz metod?? p??atno??ci.</p>

                </Alert>
                <SegmentedControl
                    className={classes.segmentControl}
                    color="blue"
                    size="sm"
                    value={paymentOption}
                    onChange={setPaymentOption}
                    // onChange={(value) => receiptHandler(value)}
                    data={[
                        {
                            value: "cash",
                            label: (
                                <Center>
                                    <IconBusinessplan className={classes.icon}/>
                                    <Box my={theme.spacing.sm} ml={theme.spacing.xs}>GOT??WKA</Box>
                                </Center>
                            ),
                        },
                        {
                            value: "transfer",
                            label: (
                                <Center>
                                    <IconCreditCard className={classes.icon}/>
                                    <Box my={theme.spacing.sm} ml={theme.spacing.xs}>PRZELEW</Box>
                                </Center>
                            ),
                        },
                    ]}
                />
            </form>

            <Title order={4} className={classes.title}>Zgody</Title>
            <form className={classes.form}>
                <Alert className={classes.alert} title="Wymagana akceptacja regulamin??w.">

                    <p style={{color: theme.colors.blue[6]}}>O??wiadczam, i?? zapozna??em si?? z  <u>regulaminem serwisu</u> amabilia-meble.pl, <u>Polityk?? Cookies </u>oraz  <u>Polityk?? Prywatno??ci</u> i je akceptuj??.
                    </p>

                </Alert>
                <SegmentedControl
                    className={classes.segmentControl}
                    style={{marginBottom: theme.spacing.xl}}
                    color="blue"
                    size="sm"
                    value={privacyAgreement}
                    onChange={setPrivacyAgreement}
                    // onChange={(value) => receiptHandler(value)}
                    data={[
                        {
                            value: "nie",
                            label: (
                                <Center>
                                    {/*<IconMail className={classes.icon}/>*/}
                                    <Box my={theme.spacing.sm}>NIE</Box>
                                </Center>
                            ),
                        },
                        {
                            value: "tak",
                            label: (
                                <Center>
                                    {/*<IconMail className={classes.icon}/>*/}
                                    <Box my={theme.spacing.sm}>TAK</Box>
                                </Center>
                            ),
                        },
                    ]}
                />

                <Alert className={classes.alert} title="Zgoda na newsletter(opcjonalnie).">

                    <p style={{color: theme.colors.blue[6]}}>
                        Wyra??am zgod?? na przesy??anie mi za pomoc?? ??rodk??w komunikacji elektronicznej informacji handlowej w postaci Newslettera przez lub na zlecenie Castorama Polska Sp. z o.o., z siedzib?? w Warszawie (02-255), przy ul. Krakowiak??w 78, wpisan?? do rejestru przedsi??biorc??w Krajowego Rejestru S??dowego prowadzonego przez S??d Rejonowy dla m. st. Warszawy w Warszawie, XIII Wydzia?? Gospodarczy Krajowego Rejestru S??dowego, pod numerem KRS 0000024785, w rozumieniu ustawy z dnia 18 lipca 2002 r. o ??wiadczeniu us??ug drog?? elektroniczn??.
                    </p>

                </Alert>
                <SegmentedControl
                    className={classes.segmentControl}
                    style={{marginBottom: theme.spacing.xl}}
                    color="blue"
                    size="sm"
                    value={newsletterAgreement}
                    onChange={setNewsletterAgreement}
                    // onChange={(value) => receiptHandler(value)}
                    data={[
                        {
                            value: "nie",
                            label: (
                                <Center>
                                    {/*<IconMail className={classes.icon}/>*/}
                                    <Box my={theme.spacing.sm}>NIE</Box>
                                </Center>
                            ),
                        },
                        {
                            value: "tak",
                            label: (
                                <Center>
                                    {/*<IconMail className={classes.icon}/>*/}
                                    <Box my={theme.spacing.sm}>TAK</Box>
                                </Center>
                            ),
                        },
                    ]}
                />
            </form>

            <Title order={4} className={classes.title}>Uwagi</Title>
            <form className={classes.form} >
                <Group mb={theme.spacing.xl} style={{width: "100%", color: theme.colors.blue[6]}}>

                    {!isComment && (
                        <UnstyledButton onClick={handleShowCommentArea}>
                            <Group style={{color: theme.colors.blue[6]}}>
                                <IconPlus/><Title order={6}>Dodaj uwagi do zam??wienia(opcjonalnie)</Title>
                            </Group>
                        </UnstyledButton>
                    )}


                    {isComment && (
                        <Textarea
                            className={classes.item}
                            style={{color: theme.colors.blue[6], flexBasis: "100%"}}
                            size="md"
                            placeholder="Uwagi oraz pytania do zam??wienia"
                            label="Uwagi oraz pytania do zam??wienia (opcjonalnie)"
                            autosize
                            minRows={4}
                        />
                    )}
                </Group>

            </form>
        </>
    );
}