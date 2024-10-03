import React from 'react';
import * as Progress from '@radix-ui/react-progress';
import styles from './styles.module.css';

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root className={styles.Root} value={progress}>
      <Progress.Indicator
        className={styles.Indicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressDemo;
