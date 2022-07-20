import React from 'react';
import styles from './styles.module.css';

interface BoxProps {
    title: string;
    description: string;
}

const contents: BoxProps[] = [
    {
        title: '하하하 😆',
        description: '우리친해요 우리친해요 우리친해요 우리친해요 우리친해요',
    },
    {
        title: '히히히 😎',
        description: '우리 실력 좋아요 우리 실력 좋아요 우리 실력 좋아요 우리 실력 좋아요 ',
    },
    {
        title: '채신기술 사용함🚀',
        description: '채신기술만 취급합니다~ 채신기술만 취급합니다~ 채신기술만 취급합니다~',
    },
    {
        title: '타이틀 1',
        description: '설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,',
    },
    {
        title: '타이틀 1',
        description: '설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,',
    },
    {
        title: '타이틀 1',
        description: '설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,설명 1,',
    },
];

const Box = ({ title, description }: BoxProps) => {
    return (
        <div className={styles.box}>
            <p className={styles.boxTitle}>{title}</p>
            <p className={styles.boxDescription}>{description}</p>
        </div>
    );
};

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <span className={styles.title}>겟차 프론트엔드 블로그</span>
            <div className={styles.featureBox}>
                <div className={styles.boxRow}>
                    {contents.slice(0, 3).map((content) => (
                        <Box key={content.title} title={content.title} description={content.description} />
                    ))}
                </div>
                <div className={styles.boxRow}>
                    {contents.slice(3, 6).map((content) => (
                        <Box key={content.title} title={content.title} description={content.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}
