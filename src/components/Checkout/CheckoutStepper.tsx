import { useState, useEffect } from 'react';
import { Stepper, Button, Group, Text, Container } from '@mantine/core';
import {
    IconCircleCheck,
    IconShoppingCart,
    IconUserCheck,
    IconShieldCheck,
} from '@tabler/icons';
import { useMantineTheme, createStyles, MediaQuery } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { CartStep } from "./Steps/CartStep";
import { Cus } from "./Steps/CartStep";
import {CustomerDetailsStep} from "@/components/Checkout/Steps/CustomerDetailsStep";
import {FinalStep} from "@/components/Checkout/Steps/FinalStep";
import {Completed} from "@/components/Checkout/Steps/Completed";

const useStyles = createStyles((theme) => ({
    wrapper: {
        flexDirection: "column",
        display: "flex",
        marginTop: "70px",


        [theme.fn.largerThan('lg')]: {
            margin: "0 auto",
            width: "800px",
            marginTop: "70px",
        },

        [theme.fn.smallerThan('lg')]: {
            margin: "0 auto",
            width: "700px",
            marginTop: "70px",
        },

        [theme.fn.smallerThan('md')]: {
            margin: "0 auto",
            width: "100%",
            marginTop: "70px",
        },

        [theme.fn.smallerThan('xs')]: {
            marginTop: "20px",
        },
    },

    stepper: {
        "::label": {
            display: "none",
        }
    },

    navButtons: {
        margin: "0 auto",
        [theme.fn.smallerThan('xs')]: {
            position: "sticky",
            // bottom: "10",
        },
    }
}))

export const CheckoutStepper = () => {
    const [showLabels, setShowLabels] = useState(true);
    const { width } = useViewportSize();
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const theme = useMantineTheme();
    const { classes } = useStyles();


    useEffect(() => {
        setShowLabels(width > 576);
    }, [width])


    return (
        <div className={classes.wrapper}>
            <Group position="center">
                    <Stepper active={active} mt="0" onStepClick={setActive} style={{margin: "0 auto", width: "100%"}} completedIcon={<IconCircleCheck /> }>
                        <Stepper.Step icon={<IconShoppingCart color={theme.colors.blue[7]}/>}
                                      label={showLabels ? "Krok 1" : ""}
                                      description={showLabels ? "Sprawdź swój koszyk" : ""}
                        >
                            {/* Step 1*/}
                            <CartStep/>
                        </Stepper.Step>
                        <Stepper.Step icon={<IconUserCheck color={theme.colors.blue[7]} />}
                                      label={showLabels ? "Krok 2" : ""}
                                      description={showLabels ? "Wprowadź dane" : ""}
                                      style={{float: "left"}}
                        >
                            {/*Step 2 */}
                            <CustomerDetailsStep/>
                        </Stepper.Step>
                        <Stepper.Step icon={<IconShieldCheck  color={theme.colors.blue[7]}/>}
                                      label={showLabels ? "Krok 3" : ""}
                                      description={showLabels ? "Finalizacja" : ""}
                        >
                            {/* Step 3 */}
                            <FinalStep/>
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Completed/>
                        </Stepper.Completed>
                    </Stepper>
            </Group>
            <Group className={classes.navButtons} mb={theme.spacing.xl}>
                <Button variant="light" size={"lg"} onClick={prevStep} style={{fontWeight: "300"}}>Wstecz</Button>
                <Button size={"lg"} onClick={nextStep} >Dalej</Button>
            </Group>
        </div>
    );
};