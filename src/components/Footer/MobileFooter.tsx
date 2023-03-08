import {createStyles, ThemeIcon, SimpleGrid, MediaQuery} from '@mantine/core'
import {IconPhone, IconShoppingCart, IconMail, IconBuildingStore, IconHome} from '@tabler/icons';
import {Fragment} from 'react';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
    mobileFooter: {
        display: 'none',
        position: "sticky",
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: `solid 1px ${theme.colors[theme.primaryColor][3]}`,
        paddingTop: '5px',
        zIndex: 1,

        [theme.fn.smallerThan('sm')]: {
            display: 'block',
            height: '60px',
            width: '100%',
            backgroundColor: theme.colors[theme.primaryColor][9],
        },
    },

    grid: {
        // position: 'absolute',
        display: 'flex',
        top: '50%',
        margin: 0,
    },

    link: {
        display: "flex",
        textDecoration: "none",
        flexDirection: 'column',
        width: '100%',
    },

    icon: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'none',
        width: '100%',
        height: '100%',
        margin: '8px',
        marginTop: '0px',
        backgroundColor: 'transparent',

        svg: {
            strokeWidth: "1",
            width: "35px",
            height: "35px",
        },

        "@media not all and (min-width: 350px)": {
            margin: "0px",
            svg: {
                height: "30px",
                width: "30px",
            },
        },

    },

    svg: {
        strokeWidth: "1",
    },


}));

const MOCKDATA = [
    { title: 'Zadzwoń', icon: IconPhone, link: '/' },
    { title: 'Start', icon: IconHome, link: '/' },
    { title: 'Sklep', icon: IconBuildingStore, link: '/products' },
    { title: 'Koszyk', icon: IconShoppingCart, link: '/checkout'},
];

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: React.FC<any>;
    title: React.ReactNode;
    link: string;
}

interface ContactIconsListProps {
    data?: ContactIconProps[];
}

const FooterIcons = ({ icon: Icon, title, link} : ContactIconProps) => {
    const { classes } = useStyles();
    return (
        <Fragment>
            {/*<MediaQuery styles={{}}>*/}
                <Link href={link} legacyBehavior>
                    <a className={classes.link}>
                        <ThemeIcon className={classes.icon}>
                            <Icon className={classes.svg}/>
                            {title}
                        </ThemeIcon>
                    </a>
                </Link>
            {/*</MediaQuery>*/}
        </Fragment>
    );
}

export const MobileFooter = ({ data = MOCKDATA }: ContactIconsListProps) => {
    const { classes } = useStyles();
    const items = data.map((item, index) => <FooterIcons {...item} key={index}/>);

    return(

        <div className={classes.mobileFooter}>
            <SimpleGrid cols={4} className={classes.grid}>
                {items}
            </SimpleGrid>
        </div>
    )
};