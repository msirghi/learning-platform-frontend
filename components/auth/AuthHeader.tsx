import React from 'react';
import { AuthPage } from '../../common/enums';
import { useTranslation } from '../../i18n';
import styles from '../../styles/modules/Auth.module.scss';

/**
 * AuthHeader component props
 */
type Props = {
  /**
   * Function fired on tab change.
   */
  onTabChange: (tab: AuthPage) => void;
  /**
   * Currently active tab.
   */
  activeTab: AuthPage;
};

/**
 * Header from the auth page. Includes two tabs: Registration & Login.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
function AuthHeader({ onTabChange, activeTab }: Props) {
  const isRegisterTab = activeTab === AuthPage.REGISTER;
  const { t } = useTranslation();

  return (
    <div className={styles.authHeader}>
      <div
        className={`${!isRegisterTab && styles.inactiveTab} ${styles.tab} ${styles.registerTab}`}
        onClick={() => onTabChange(AuthPage.REGISTER)}
      >
        <span>{t('auth:registerTitle')}</span>
      </div>
      <div
        className={`${isRegisterTab && styles.inactiveTab} ${styles.tab} ${styles.loginTab}`}
        onClick={() => onTabChange(AuthPage.LOGIN)}
      >
        <span>{t('auth:loginTitle')}</span>
      </div>
    </div>
  );
}

AuthHeader.getInitialProps = async () => ({
  namespacesRequired: ['auth']
});

export default AuthHeader;
