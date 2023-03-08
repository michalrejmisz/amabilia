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
    Title
} from "@mantine/core";
import {IconChevronDown, IconChevronUp, IconTrash} from "@tabler/icons";
import React, {useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";

// @ts-ignore
const useStyles = createStyles((theme) => ({
    // titleGroup: {
    //     margin: "0px 30px 5px 30px",
    //     padding: "25px",
    //     borderBottom: `1px solid ${theme.colors[theme.primaryColor][3]}`,
    // },

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

    list: {
        height: "calc(100vh - 430px)",
        // minHeight: "500px",
        // margin: "20px 10px 20px 20px",
        margin: "5px 20px 0px 20px",
        float: "left",
        overflowY: "auto",
        overflowX: "hidden",
        width: "95%",
        scrollbarWidth: "thin",
        paddingBottom: "20px",
        borderTop: `1px solid ${theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border}`,
        borderBottom: `1px solid ${theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border}`,

        [theme.fn.smallerThan('sm')]: {
            width: "100%",
            margin: "10px 5px 0px 5px",
            height: "calc(100vh - 80px - 66px - 200px - 80px)",
        },

        "::-webkit-scrollbar": {
            width: "4px",
            color: theme.colors[theme.primaryColor][6],
        },

        "::-webkit-scrollbar-track": {
            borderRadius: "10px",
        },

        "::-webkit-scrollbar-thumb": {
            "borderRadius": "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.5)",
        },

        "@media not all and (min-width: 350px)": {
            paddingRight: "10px",
        }
    },



    entireItem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",

        "@media not all and (min-width: 350px)": {
            marginRight: "5px",
            height: "auto",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: "20px",
            border: `1px solid ${theme.colors[theme.primaryColor][3]}`,
            padding: "3px"
        }
    },

    img: {
        display: "flex",
        // "@media not all and (max-width: 350px)": {
        //     height: "100px",
        //     // display: "none",
        //     flexBasis: "100%",
        //     width: "100%",
        // },
        flexBasis: "30%",
        "@media not all and (min-width: 350px)": {
            marginTop: "10px",
            height: "100px",
            flex: 1,
            justifyContent: "center",
            // minWidth: "250px",
            alignItems: "center",
            flexBasis: "100%",
        }
    },


    description: {
        flex: 1,
        // height: "300px",
        // height: "100px",
        flexBasis: "50%",
        "@media not all and (min-width: 350px)": {
            height: "auto",
            flexBasis: "70%",
        }
    },

    counter: {
        flex: 1,
        // height: "300px",
        // height: "100px",
        flexBasis: "10%",
        "@media not all and (min-width: 350px)": {
            flexBasis: "10%",
        }
    },

    bin: {
        flex: 1,
        alignSelf: "center",
        // height: "300px",
        // height: "100px",
        flexBasis: "10%",
        "@media not all and (min-width: 350px)": {
            flexBasis: "10%",
        }
    },

    amount: {
        flexDirection: "row",
        justifyContent: "flex-end",
        // borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
        margin: "10px 10px 10px 20px",
        padding: "10px 1px 10px 1px",
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: "400",
        letterSpacing: "2.5px",
    },

    amountItem: {
        color: theme.colors[theme.primaryColor][9],
    },

}));

export const Item = () => {
    const {classes} = useStyles()
    const theme = useMantineTheme();
    const [imageSize, setImageSize] = useState(50);
    const [iconSize, setIconSize] = useState(25);
    const { width }: {width: number} = useViewportSize();

    useEffect(() => {
        imageSizeByWidth(width);
    }, [width])

    const imageSizeByWidth = (width : number) => {
        if(width < 350){
            setImageSize(150)
            setIconSize(15)
        } else if(width < 576){
            setImageSize(50)
            setIconSize(20)
        }else if(width < 768){
            setImageSize(75)
            setIconSize(20)
        } else{
            setImageSize(100)
            setIconSize(25)
        }
    };

    return(
        <div className={classes.entireItem}>

                <Image src="http://panel.amabilia-meble.pl/uploads/6_nature_biurko_0014_3d34ad5cdc.jpg"
                       radius="md"
                       fit="contain"
                       placeholder
                       width={imageSize}
                       height={imageSize}
                       className={classes.img}
                />

                <div className={classes.description}>
                {/*<Group style={{ flexDirection: "column", alignItems: "flex-start" }} spacing={"0"} position={"left"} className={classes.item}>*/}
                {/*    <div style={{ flexDirection: "column", alignItems: "flex-start" }} spacing={"0"} position={"left"}>*/}
                        <Text size="sm" weight={500} className={classes.amountItem} align={"left"}>
                            Biurko z wieloma zdjęciami
                        </Text>

                        <Text color="dimmed" size="xs" align={"left"}>
                            159.50zł x 1
                        </Text>
                    {/*</div>*/}
                </div>

                <div position={"right"} spacing={"0"} className={classes.counter}>
                {/*<Group style={{flexDirection: "column"}} position={"right"} spacing={"0"} className={classes.item}>*/}
                    <Flex direction="column" align="center">
                        <ActionIcon>
                            <IconChevronUp size={iconSize} stroke={1.2} />
                        </ActionIcon>
                        <Text color="dimmed">1</Text>
                        <ActionIcon>
                            <IconChevronDown size={iconSize} stroke={1.2} />
                        </ActionIcon>
                    </Flex>
                </div>

                {/*<IconChevronRight size={14} stroke={1.5} />*/}
                <ActionIcon className={classes.bin}>
                    <IconTrash size={iconSize} stroke={1.5} color={theme.colors.red[4]}/>
                </ActionIcon>
        </div>
    );
}

export const ItemList = () => {
    const {classes} = useStyles();

    return(
        <div style={{float: "left"}}>
            <Title order={4} className={classes.title}>Koszyk</Title>
            <List className={classes.list}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
                {/*<Item/>*/}
            </List>
        </div>
    );
}


export const CartStep = () => {
    const {classes} = useStyles();
    return(
            <Flex direction="column">
                <ItemList/>
                <Group className={classes.amount} >
                    <Text color="dimmed" size={"lg"} >Razem:</Text>
                    <Text color="dimmed" size={"lg"} fw={600}>150 zł</Text>
                </Group>
            </Flex>
    )
}