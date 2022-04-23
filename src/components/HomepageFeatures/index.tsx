import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: require("@site/static/img/react.svg").default,
  },
  {
    Svg: require("@site/static/img/react_native.svg").default,
  },
  {
    Svg: require("@site/static/img/redux.svg").default,
  },
  {
    Svg: require("@site/static/img/typeScript.svg").default,
  },
  {
    Svg: require("@site/static/img/styled.svg").default,
  },
  {
    Svg: require("@site/static/img/github.svg").default,
  },
];

function Feature({ Svg }: FeatureItem) {
  return (
    <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
