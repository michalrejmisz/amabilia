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
} from "@mantine/core";
import {IconUser, IconBuildingSkyscraper, IconChevronUp, IconTrash, IconReceiptOff, IconReceipt, IconPackage, IconAlertCircle, IconCircleCheck} from "@tabler/icons";
import React, {useEffect, useState} from "react";
import {useViewportSize, useId} from "@mantine/hooks";
import { useForm } from '@mantine/form';


const customerStyles = createStyles((theme) => ({
    customerType: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        transition: 'background-color 150ms ease, border-color 150ms ease',
        border: `1px solid ${theme.colors.gray[3]}`,
        backgroundColor: theme.white,
        borderRadius: theme.radius.sm,
        padding: "10px",

        '&:active' :{
            border: `1px solid ${theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border}`,
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        }
    },

    body: {
        flex: 1,
        marginLeft: theme.spacing.md,
    },

}));

interface CustomerBoxProps{
    Icon: React.FC<any>;
    description: String;
}

const CustomerTypeSelectionBox = ({Icon, description} : CustomerBoxProps) => {
    const {classes} = customerStyles();
    const theme = useMantineTheme();

    return(
        <UnstyledButton className={classes.customerType}>
            <Group grow>
                <Icon size={70} stroke={1} color={theme.colors.blue[6]}/>
                <Text color={"dimmed"}>{description}</Text>
            </Group>
        </UnstyledButton>
    )
}

// export const CustomerTypeSelection = () => {
//     const {classes} = useStyles();
//     const theme = useMantineTheme();
//
//     return(
//         <>
//             <Grid style={{width: "100%"}}>
//                 {/*    /!*<ActionIcon>*!/*/}
//                 {/*        <Group className={classes.customerType}>*/}
//                 {/*            <IconUser size={70} stroke={1} color={theme.colors.blue[6]}/>*/}
//                 {/*            <Text color={"dimmed"}>Osoba fizyczna</Text>*/}
//                 {/*        </Group>*/}
//                 {/*    /!*</ActionIcon>*!/*/}
//                 {/*<Group>*/}
//                 {/*    /!*<ActionIcon>*!/*/}
//                 {/*        <IconBuildingSkyscraper size={70} stroke={1} color={theme.colors.blue[6]}/>*/}
//                 {/*    /!*</ActionIcon>*!/*/}
//                 {/*    <Text color={"dimmed"}>Firma</Text>*/}
//                 {/*</Group>*/}
//                 <Grid.Col xs={6} sm={4} span={12}><CustomerTypeSelectionBox Icon={IconUser} description={"Osoba fizyczna"}/></Grid.Col>
//                 <Grid.Col xs={6} sm={4} span={12}><CustomerTypeSelectionBox Icon={IconBuildingSkyscraper} description={"Firma"}/></Grid.Col>
//             </Grid>
//         </>
//     );
// }

const formStyles = createStyles((theme) => ({
    title: {
        margin: "0px 10px 15px 10px",
        float: "left",
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: "100",
        letterSpacing: "2.5px",
        color: theme.colors[theme.primaryColor][6],
        "&:not(:first-child)": {
            marginTop: theme.spacing.xl,
        }
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

    item: {
        flex: "1",
        // height: "auto",
        marginBottom: theme.spacing.xs,
        marginRight: theme.spacing.md,
        flexBasis: "45%",
        color: theme.colors[theme.primaryColor][6],
        '&:nth-child(2n)': {
            marginRight: 0,
        },

        [theme.fn.smallerThan('sm')]: {
            flexBasis: "100%",
            marginRight: 0,
        },

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

    inputsGroup: {
        display: "flex",
        height: "100%",
        flexDirection: 'row',
        alignItems: 'left',
        width: "100%",
        justifyContent: "space-between",
        flexFlow: "wrap",
        paddingTop: theme.spacing.xs,
        textAlign: "left",
        [theme.fn.smallerThan('sm')]: {
            // width: "95%",
            // minWidth: "1px",
            // width: "100%",
        }
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


const CustomerForm = () =>  {
    const id = useId();
    const theme = useMantineTheme();
    const form = useForm({
        initialValues: {
            firstName: '',
            secondName: '',
            email: '',
            phoneNumber: '',
        },
    });

    const {classes} = formStyles();
    const [value, setValue] = useState('');
    const [segmentControlReceipt, setSegmentControlReceipt] = useState("false");
    const [mountReceipt, setMountReceipt] = useState(segmentControlReceipt === "true")
    const [segmentControlDelivery, setSegmentControlDelivery] = useState("false");
    const [mountDelivery, setMountDelivery] = useState(segmentControlDelivery === "true")


    useEffect(() => {
        setMountReceipt(segmentControlReceipt === "true")
    }, [segmentControlReceipt])

    useEffect(() => {
        setMountDelivery(segmentControlDelivery === "true")
    }, [segmentControlDelivery])


    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength <= 3) {
            return phoneNumber;
        }

        if (phoneNumberLength <= 6) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }

        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
    };

    const handleValueChange = (event) => {
        setValue(formatPhoneNumber(event.target.value));
    };


    return(
        <div style={{float: "left"}}>
            <Title order={4} className={classes.title}>Dane odbiorcy</Title>
            <form className={classes.form}>
                <TextInput
                    label="Imię "
                    placeholder="Jan"
                    {...form.getInputProps('firstName')}
                    withAsterisk
                    className={classes.item}
                />

                <TextInput
                    color={"red"}
                    label="Nazwisko "
                    placeholder="Kowalski"
                    {...form.getInputProps('secondName')}
                    withAsterisk
                    className={classes.item}
                />

                <TextInput
                    label="Email "
                    placeholder="jankowalski@wp.pl"
                    withAsterisk
                    {...form.getInputProps('email')}
                    className={classes.item}
                />

                <TextInput
                    type="tel"
                    label="Numer telefonu"
                    withAsterisk
                    placeholder="777-666-555"
                    value={value}
                    onChange={handleValueChange}
                    {...form.getInputProps('phoneNumber')}
                    className={classes.item}
                />

            </form>

            <Title order={4} className={classes.title}>Faktura</Title>
            <form className={classes.form}>
                <Group className={classes.segmentControlGroup}>
                    <SegmentedControl
                        className={classes.segmentControl}
                        color="blue"
                        size="sm"
                        value={segmentControlReceipt}
                        onChange={setSegmentControlReceipt}
                        // onChange={(value) => receiptHandler(value)}
                        data={[
                            {
                                value: "false",
                                label: (
                                    <Center>
                                        <IconReceiptOff className={classes.icon}/>
                                        <Box my={theme.spacing.sm}>BEZ FAKTURY</Box>
                                    </Center>
                                ),
                            },
                            {
                                value: "true",
                                label: (
                                    <Center>
                                        <IconReceipt className={classes.icon}/>
                                        <Box my={theme.spacing.sm}>FAKTURA</Box>
                                    </Center>
                                ),
                            },
                        ]}
                    />
                </Group>

                <Transition mounted={mountReceipt} transition="scale-y" duration={400} timingFunction="ease">
                    {(styles) => (
                        <form className={classes.inputsGroup}>
                            <TextInput
                                className={classes.item}
                                style={{...styles}}
                                type="tel"
                                label="NIP"
                                withAsterisk
                                placeholder="777-666-555"
                                value={value}
                                onChange={handleValueChange}
                                {...form.getInputProps('phoneNumber')}
                            />

                            <TextInput
                                className={classes.item}
                                style={{...styles}}
                                type="text"
                                label="Nazwa Firmy (opcjonalnie)"
                                placeholder="777-666-555"
                                value={value}
                                onChange={handleValueChange}
                                {...form.getInputProps('phoneNumber')}
                            />
                        </form>
                    )}
                </Transition>
            </form>


            <Title order={4} className={classes.title}>Dostawa</Title>
            <form className={classes.form}>
                <form className={classes.segmentControlGroup}>
                    <SegmentedControl
                        className={classes.segmentControl}
                        color="blue"
                        size="sm"
                        value={segmentControlDelivery}
                        onChange={setSegmentControlDelivery}
                        // onChange={(value) => receiptHandler(value)}
                        data={[
                            {
                                value: "false",
                                label: (
                                    <Center>
                                        <IconUser className={classes.icon}/>
                                        <Box my={theme.spacing.sm}>ODBIÓR OSOBISTY</Box>
                                    </Center>
                                ),
                            },
                            {
                                value: "true",
                                label: (
                                    <Center>
                                        <IconPackage className={classes.icon}/>
                                        <Box my={theme.spacing.sm}>DOSTAWA</Box>
                                    </Center>
                                ),
                            },
                        ]}
                    />
                </form>

                <Transition mounted={mountDelivery} transition="scale-y" duration={400} timingFunction="ease">
                    {(styles) => (
                        <>
                            <Alert icon={<IconAlertCircle size={24}/>} title="Uwaga!" className={classes.alert} style={{...styles}}>

                                <p style={{color: theme.colors.blue[6]}}>Przy zakupach powyżej 1500 zł dowóz na terenie Poznania i okolic(w promieniu 5km) gratis!</p>
                                <p style={{color: theme.colors.blue[6]}}>W każdym innym przypadku nasz pracownik skontaktuje się z Tobą i przedstawi propozycję naszej wyceny.</p>
                                <p style={{color: theme.colors.blue[6]}}>W ramach dowozu zapewniamy wniesienie mebli.</p>

                            </Alert>
                            <form className={classes.inputsGroup}>
                                <TextInput
                                    style={{...styles}}
                                    type="text"
                                    label="Miejscowość"
                                    withAsterisk
                                    placeholder="Poznań"
                                    value={value}
                                    onChange={handleValueChange}
                                    {...form.getInputProps('phoneNumber')}
                                    className={classes.item}
                                />
                                <TextInput
                                    style={{...styles}}
                                    type="text"
                                    label="Kod Pocztowy"
                                    withAsterisk
                                    placeholder="60-123"
                                    value={value}
                                    onChange={handleValueChange}
                                    {...form.getInputProps('phoneNumber')}
                                    className={classes.item}
                                />

                                <TextInput
                                    style={{...styles}}
                                    type="text"
                                    label="Ulica/Osiedle"
                                    withAsterisk
                                    placeholder="60-123"
                                    value={value}
                                    onChange={handleValueChange}
                                    {...form.getInputProps('phoneNumber')}
                                    className={classes.item}
                                />

                                <TextInput
                                    style={{...styles}}
                                    type="text"
                                    label="Numer Domu/Nr Lokalu(opcjonalnie)"
                                    withAsterisk
                                    placeholder="171/12b"
                                    value={value}
                                    onChange={handleValueChange}
                                    {...form.getInputProps('phoneNumber')}
                                    className={classes.item}
                                />
                            </form>
                        </>
                    )}
                </Transition>
            </form>

        </div>
    )
}

export const CustomerDetailsStep = () => {
    // const {classes} = useStyles();
    return(
        <Flex direction="column" align={"center"} mt={"25px"}>
            {/*<CustomerTypeSelection/>*/}
            <CustomerForm/>
        </Flex>
    )
}