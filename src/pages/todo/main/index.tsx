import React, { memo } from 'react';
import styles from './index.module.scss';

interface Props {}

const Index: React.FC<Props> = () => {
  return <div className={styles['todo']}>todo</div>;
};

export default memo(Index);
