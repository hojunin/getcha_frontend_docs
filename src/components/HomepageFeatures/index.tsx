import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

interface BoxProps {
  title: string;
  description: string;
  image: string;
}

const contents: BoxProps[] = [
  {
    title: "ํํํ ๐",
    description: "์ฐ๋ฆฌ์นํด์ ์ฐ๋ฆฌ์นํด์ ์ฐ๋ฆฌ์นํด์ ์ฐ๋ฆฌ์นํด์ ์ฐ๋ฆฌ์นํด์",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "ํํํ ๐",
    description:
      "์ฐ๋ฆฌ ์ค๋ ฅ ์ข์์ ์ฐ๋ฆฌ ์ค๋ ฅ ์ข์์ ์ฐ๋ฆฌ ์ค๋ ฅ ์ข์์ ์ฐ๋ฆฌ ์ค๋ ฅ ์ข์์ ",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "์ฑ์ ๊ธฐ์  ์ฌ์ฉํจ๐",
    description:
      "์ฑ์ ๊ธฐ์ ๋ง ์ทจ๊ธํฉ๋๋ค~ ์ฑ์ ๊ธฐ์ ๋ง ์ทจ๊ธํฉ๋๋ค~ ์ฑ์ ๊ธฐ์ ๋ง ์ทจ๊ธํฉ๋๋ค~",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "์ฝ์ด ์๋น์ค ํ",
    description: "์ฝ์ดํ ํ๋ก ํธ์๋ ๊ฐ๋ฐ์๊ฐ ํ๋ ์ผ",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "๊ทธ๋ก์ค ์ค์ฟผ๋",
    description: "MAU ๋์ด๊ธฐ ์ํ ์ค์ฟผ๋",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "๋จธ๋จธ๋จธ",
    description: "๋ ๋ญ๊ฐ ์๊ฒ ์ฐ",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
];

const Box = ({ title, description, image }: BoxProps) => {
  return (
    <div className={styles.box}>
      <p className={styles.boxTitle}>{title}</p>
      <p className={styles.boxDescription}>{description}</p>
      <img className={styles.image} src={image} />
    </div>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <span className={styles.title}>๊ฒ์ฐจ ํ๋ก ํธ์๋ ๋ธ๋ก๊ทธ</span>
      <div className={styles.rowContainer}>
        <Link className={styles.linkButton} to="/docs/intro">
          ๋ฌธ์ ๋ณด๋ฌ๊ฐ๊ธฐ
        </Link>
        <Link className={styles.linkButton} to="/blog">
          ๋ธ๋ก๊ทธ ๋ณด๋ฌ๊ฐ๊ธฐ
        </Link>
      </div>
      <div className={styles.featureBox}>
        <div className={styles.boxRow}>
          {contents.slice(0, 3).map((content) => (
            <Box
              key={content.title}
              title={content.title}
              description={content.description}
              image={content.image}
            />
          ))}
        </div>
        <div className={styles.boxRow}>
          {contents.slice(3, 6).map((content) => (
            <Box
              key={content.title}
              title={content.title}
              description={content.description}
              image={content.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
