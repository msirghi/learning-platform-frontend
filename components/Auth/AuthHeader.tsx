import React from 'react';
import { useTranslation } from '../../i18n';
import styles from '../../styles/modules/Auth.module.scss';

type Props = {
  onTabChange: (tab: number) => void;
  activeTab: number;
};

function AuthHeader({ onTabChange, activeTab }: Props) {
  const isRegisterTab = activeTab === 1;
  const { t } = useTranslation();
  
  return (
    <div className={styles.authHeader}>
      <div
        className={`${isRegisterTab && styles.inactiveTab} ${styles.tab} ${styles.registerTab}`}
        onClick={() => onTabChange(0)}
      >
        <span>{t('auth:registerTitle')}</span>
      </div>
      <div
        className={`${!isRegisterTab && styles.inactiveTab} ${styles.tab} ${styles.loginTab}`}
        onClick={() => onTabChange(1)}
      >
        <span>{t('auth:loginTitle')}</span>
      </div>
    </div>
  );
}

AuthHeader.getInitialProps = async () => ({
  namespacesRequired: ['auth'],
});

export default AuthHeader;
