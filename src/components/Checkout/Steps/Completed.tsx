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
        // display: "flex",
        // flexBasis: "100%",
        // flexDirection: 'row',
        margin: 0,
        marginBottom: theme.spacing.xl,
        colors: theme.colors.blue[6],
    },
}));

export const Completed = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();



    return(
        <>

            <Alert className={classes.alert} mt={theme.spacing.xl}>

                <Title order={1} style={{color: theme.colors.blue[6]}}>Gratulacje!</Title>
                <Text size={"xl"} style={{color: theme.colors.blue[6]}}>Wkrótce skontakuje się z Tobą nasz pracownik.</Text>
                <Text size={"xl"} style={{color: theme.colors.blue[6]}}>Na mailu znajdziesz potwierdzenie zamówienia.</Text>
                <Text size={"xl"} style={{color: theme.colors.blue[6]}}>Zapraszamy ponownie!</Text>

            </Alert>
        </>
    );
}