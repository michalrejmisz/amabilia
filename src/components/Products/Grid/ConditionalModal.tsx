import React from 'react';
import { useViewportSize } from '@mantine/hooks';
import Link from "next/link";

interface Props {
    to: string;
    openModal: () => void;
    children: React.ReactNode;
}

export const ConditionalModal: React.FC<Props> = ({ to, openModal, children }) => {
    const {width} = useViewportSize();

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        openModal();
    };

    return width > 1024 ? (
        <a href="#" onClick={handleClick} style={{height: '100%'}}>
            {children}
        </a>
    ) : (
        <Link href={{ pathname: `/product/${to}` }} legacyBehavior ><a style={{height: '100%'}}>{children}</a></Link>
    );
};