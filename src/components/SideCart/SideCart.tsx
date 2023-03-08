import React, { useState } from 'react';
import {
    createStyles,
    Transition,
    ActionIcon,
    Title,
    List,
    ThemeIcon,
    Image,
    Group,
    Avatar,
    Text,
    Button,
} from "@mantine/core";
import {
    IconChevronUp,
    IconChevronDown,
    IconChevronRight,
    IconX,
    IconTrash
} from '@tabler/icons';
import Link from 'next/link'


const useStyles = (createStyles(theme => ({
    cart: {
        position: "fixed",
        top: "80",
        right: "0",
        minWidth: "400px",
        maxWidth: "400px",
        minHeight: "calc(100vh - 80px)",
        backgroundColor: "white",
        borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,
        zIndex: "9999",
        boxShadow: `4px -4px 10px 0px ${theme.colors[theme.primaryColor][3]}`,
        flexDirection: "column",
    },

    title: {
        margin: "0px 30px 5px 30px",
        padding: "25px",
        borderBottom: `1px solid ${theme.colors[theme.primaryColor][3]}`,

        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: "100",
        letterSpacing: "2.5px",
        // backgroundColor: `${theme.colors.gray[1]}`,
        color: theme.colors[theme.primaryColor][6],
        // boxShadow: `0 4px 4px -4px ${theme.colors[theme.primaryColor][3]}`,
    },

    titleGroup: {
        margin: "0px 30px 5px 30px",
        padding: "25px",
        borderBottom: `1px solid ${theme.colors[theme.primaryColor][3]}`,
    },

    list: {
        height: "calc(100vh - 330px)",
        margin: "0px 10px 20px 20px",
        float:"left",
        overflowY: "scroll",
        overflowX: "hidden",
        width: "380px",
        scrollbarWidth: "thin",

        "::-webkit-scrollbar": {
            width: "4px",
            color: theme.colors[theme.primaryColor][6],
        },

        "::-webkit-scrollbar-track": {
            // "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
            borderRadius: "10px",
        },

        "::-webkit-scrollbar-thumb": {
            "borderRadius": "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.5)",
            // "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.5)",
        }
    },


    groupItem: {
        height: "100px",
        width: "370px",
    },

    checkoutButton: {
        width: "380px",
        height: "60px",
        margin: "10px",
    },

    amount: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
        margin: "10px 30px 10px 30px",
        padding: "20px 1px 20px 1px",
        fontFamily: 'Roboto, sans-serif',
        textTransform: 'uppercase',
        fontWeight: "400",
        letterSpacing: "2.5px",
    },

    amountItem: {
        color: theme.colors[theme.primaryColor][9],
    },

    closeButton: {
        position: "absolute",
        top: "25px",
        left: "25px",
        color: theme.colors[theme.primaryColor][6],
    }

})));

interface SideCartProps{
    opened: boolean;
}


export const Item = () => {
    const {classes} = useStyles();
    return(
        <Group className={classes.groupItem} position={"apart"}>
            <Image src="http://panel.amabilia-meble.pl/uploads/6_nature_biurko_0014_3d34ad5cdc.jpg"
                   radius="md"
                   height={75}
                   width={75}
                   fit="contain"
                   placeholder
            />

            <Group style={{ flexDirection: "column", alignItems: "flex-start" }} spacing={"0"} position={"left"}>
                <Text size="sm" weight={500} className={classes.amountItem} align={"left"}>
                    Biurko z wieloma zdjęciami
                </Text>

                <Text color="dimmed" size="xs" align={"left"}>
                    159.50zł x 1
                </Text>
            </Group>

            <Group style={{flexDirection: "column"}} position={"right"} spacing={"0"}>
                <ActionIcon>
                    <IconChevronUp size={20} stroke={1.2} />
                </ActionIcon>
                <Text color="dimmed">1</Text>
                <ActionIcon>
                    <IconChevronDown size={20} stroke={1.2} />
                </ActionIcon>
            </Group>

            {/*<IconChevronRight size={14} stroke={1.5} />*/}
            <ActionIcon>
                <IconTrash size={14} stroke={1.5}/>
            </ActionIcon>
        </Group>
    );
}

export const ItemList = () => {
    const {classes} = useStyles();

    return(
        <>
            <List className={classes.list}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </List>
        </>
    );
}

export const SideCart = ({opened} : SideCartProps) => {
    const [cartItems, setCartItems] = useState([]);
    const {classes} = useStyles();

    return (
        <Transition mounted={opened} transition={"slide-left"} duration={400} timingFunction="ease">
            {(styles) => (
                <div style={styles} className={classes.cart} >
                    <ActionIcon className={classes.closeButton}>
                        <IconX size={20} stroke={1.5} />
                    </ActionIcon>
                    <Title order={4} className={classes.title}>Twój koszyk</Title>
                    <ItemList/>

                    <Group className={classes.amount}>
                        <Text color="dimmed" size={"lg"} >Razem:</Text>
                        <Text color="dimmed" size={"lg"} fw={600}>150 zł</Text>
                    </Group>


                    <Link href="/checkout">
                        <Button
                            fullWidth={true}
                            uppercase={true}
                            height={"50px"}
                            className={classes.checkoutButton}
                        >
                            Przejdź do zamówienia
                        </Button>
                    </Link>

                </div>
            )}
        </Transition>
    );
}
