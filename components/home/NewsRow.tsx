import React from "react";
import { News } from "../../common/types";
import styles from "../../styles/modules/Home.module.scss";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import IconButton from "@material-ui/core/IconButton";
import dateFormat from "dateformat";

type Props = {
  news: News;
};

export const NewsRow: React.FC<Props> = ({ news: { date, description, title } }) => {
  const formattedDescription =
    description.length > 80 ? `${description.substring(0, 100)}...` : description;

  return (
    <Grid container alignItems='center' spacing={1}>
      <Grid item xs={10}>
        <div>{title}</div>
        <div className={styles.cardNewsDescription}>{formattedDescription}</div>
        <div>{dateFormat(date, "mediumDate")}</div>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <ArrowRightAltIcon color='primary' />
        </IconButton>
      </Grid>
    </Grid>
  );
};
