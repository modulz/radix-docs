import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import styles from './styles.module.css';

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className={styles.Trigger}>More info</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={styles.Content} sideOffset={5}>
        Some more info…
        <Popover.Arrow className={styles.Arrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
