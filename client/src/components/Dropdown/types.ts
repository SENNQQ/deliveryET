import {DetailedHTMLProps, HTMLAttributes} from 'react';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

export interface DropdownPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: string[],
    borderColor?: RGB | RGBA,
    selected: string,
    setSelected: (selected: string) => void
}