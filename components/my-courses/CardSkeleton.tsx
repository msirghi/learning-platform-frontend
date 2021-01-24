import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: 400
    },
    media: {
      height: 190
    },
    [theme.breakpoints.between(0, 500)]: {
      card: {
        width: 300
      }
    }
  })
);

export const CardSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Skeleton animation='wave' variant='circle' width={40} height={40} />}
        title={<Skeleton animation='wave' height={10} width='80%' style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation='wave' height={10} width='40%' />}
      />
      <Skeleton animation='wave' variant='rect' className={classes.media} />
      <CardContent>
        <>
          <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation='wave' height={10} width='80%' />
        </>
      </CardContent>
    </Card>
  );
};
