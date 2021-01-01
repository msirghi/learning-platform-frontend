import React from "react";
import Head from "next/head";
import { withTranslation } from "../i18n";
import Typography from "@material-ui/core/Typography";
import { SiteWrapper } from "../components/common/SiteWrapper";
import { HomeContent } from "../components/home/HomeContent";

function Home({ t }) {
  return (
    <div>
      <Head>
        <title>{t("home:title")}</title>
        <link rel='icon' href='../public/favicon.ico' />
      </Head>
      <SiteWrapper>
        <HomeContent />
      </SiteWrapper>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["home"],
});

export default withTranslation()(Home);
