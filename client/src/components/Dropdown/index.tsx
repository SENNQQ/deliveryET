import React, {FC, useRef, useState} from 'react';
import cn from 'classnames';
import {DropdownPropsType} from './types';
import styles from './Dropdown.module.scss';
import useCloseByRef from '../../hook/useCloseByRef';
import {motion} from 'framer-motion';

/**
 * `Dropdown` - компонент выпадающего списка
 * */

const Dropdown: FC<DropdownPropsType> = ({items, borderColor, selected, setSelected, className, ...props}) => {
    const [open, setOpen] = useState<boolean>(false); // стейт на открытие-закрытие
    const selectRef = useRef<HTMLDivElement>(null); // реф на блок выпадающего списка для закрытия
    useCloseByRef(selectRef, () => setOpen(false));
    return (
        <div ref={selectRef}
             className={cn(styles.selectBlock, className, {[styles.opened]: open})}
             style={{
                 borderTop: borderColor ? `1px solid ${borderColor}` : '1px solid  rgba(0,0,0,0)',
                 borderLeft: borderColor ? `1px solid ${borderColor}` : '1px solid rgba(0,0,0,0)',
                 borderRight: borderColor ? `1px solid ${borderColor}` : ' 1px solid rgba(0,0,0,0)',
             }}
             onClick={() => setOpen(!open)}
             {...props}>
            <div className={styles.selected}>
                <span>{selected}</span>
            </div>
            <motion.div className={styles.dropdownBlock}
                        initial={{
                            height: 0,
                            overflowY: items.length > 5 ? 'auto' : 'hidden',
                            left: -1,
                            width: 'calc(100% + 2px)',
                        }}
                        transition={{ease: 'easeInOut', duration: 0.2}}
                        animate={{
                            height: open ? items.length > 5 ? 37 * 5 : 'auto' : 0,
                            borderBottom: open ? `1px solid ${borderColor}` : '0px solid  rgba(0,0,0,0)',
                            borderLeft: open ? `1px solid ${borderColor}` : '0px solid  rgba(0,0,0,0)',
                            borderRight: open ? `1px solid ${borderColor}` : '0px solid  rgba(0,0,0,0)',
                        }}>
                {items.slice().sort((x, y) => x === selected ? -1 : y === selected ? 1 : 0).map(item => (
                    <div key={item} className={styles.dropdownItem} onClick={() => setSelected(item)}>{item}</div>
                ))}
            </motion.div>
        </div>
    );
};

export default Dropdown;