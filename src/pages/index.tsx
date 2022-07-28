import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Getcha FrontEnd Team"}
      description="겟차 프론트엔드 팀입니다"
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
