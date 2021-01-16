import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import styles from '../../styles/modules/Shared.module.scss';
import { useTranslation } from '../../i18n';

const Copyright: React.FC<{ siteName: string }> = ({ siteName }) => {
  return (
    <Typography variant='body2'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        {siteName}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles<Theme, { drawerOpened: boolean }>((theme) => ({
  footer: {
    padding: theme.spacing(4, 3),
    marginTop: 'auto',
    backgroundColor: '#202020',
    color: '#fff'
  },
  wrapper: ({ drawerOpened }) => ({
    '@media (min-width: 400px)': {
      marginLeft: 0
    },
    '@media (min-width: 600px)': {
      marginLeft: drawerOpened ? '35%' : '20%'
    },
    '@media (min-width: 1000px)': {
      marginLeft: drawerOpened ? '35%' : '15%'
    }
  })
}));

type Props = {
  drawerOpened: boolean;
};

export const SiteFooter: React.FC<Props> = ({ drawerOpened }) => {
  const classes = useStyles({ drawerOpened });
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <div className={`${styles.footerWrapper} ${classes.wrapper}`}>
        <div className={styles.footerAboutUs}>
          <div>{t('common:footer.aboutUs')}</div>
          <div className={styles.footerUsefulLinksEvenLink}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit numquam, omnis
            adipisci ex aperiam ipsum consectetur assumenda cupiditate debitis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Optio, nemo.
          </div>
        </div>
        <div className={styles.footerUsefulLinks}>
          <div>{t('common:footer.usefulLinks')}</div>
          <div className={styles.footerUsefulLinksContent}>
            <div>
              <Link color='inherit' href='https://material-ui.com/'>
                Link 1
              </Link>
              <div className={styles.footerUsefulLinksEvenLink}>
                <Link color='inherit' href='https://material-ui.com/'>
                  Link 2
                </Link>
              </div>
            </div>
            <div className={styles.footerUsefulLinksSecondCol}>
              <Link color='inherit' href='https://material-ui.com/'>
                Link 4
              </Link>
              <div className={styles.footerUsefulLinksEvenLink}>
                <Link color='inherit' href='https://material-ui.com/'>
                  Link 3
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>{t('common:footer.contacts')}</div>
          <div className={styles.footerIconText}>
            <MailIcon /> <span>support@site.com</span>
          </div>
          <div className={styles.footerIconText}>
            <HomeIcon /> <span>Chisinau, str.Cilene Bune 69</span>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <Copyright siteName={t('common:siteName')} />
        </div>
      </div>
    </footer>
  );
};
