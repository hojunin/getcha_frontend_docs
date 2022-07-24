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
    title: "하하하 😆",
    description: "우리친해요 우리친해요 우리친해요 우리친해요 우리친해요",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "히히히 😎",
    description:
      "우리 실력 좋아요 우리 실력 좋아요 우리 실력 좋아요 우리 실력 좋아요 ",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "채신기술 사용함🚀",
    description:
      "채신기술만 취급합니다~ 채신기술만 취급합니다~ 채신기술만 취급합니다~",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "코어 서비스 팀",
    description: "코어팀 프론트엔드 개발자가 하는 일",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "그로스 스쿼드",
    description: "MAU 높이기 위한 스쿼드",
    image: "http://img.segye.com/content/image/2021/06/18/20210618504877.jpg",
  },
  {
    title: "머머머",
    description: "또 뭐가 있겠찌",
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
      <span className={styles.title}>겟차 프론트엔드 블로그</span>
      <div className={styles.rowContainer}>
        <Link className={styles.linkButton} to="/docs/intro">
          문서 보러가기
        </Link>
        <Link className={styles.linkButton} to="/blog">
          블로그 보러가기
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
