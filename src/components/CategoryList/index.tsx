import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const worldmap_mapleworld = require('@site/static/img/worldmap_mapleworld.png').default;
const jobs = require('@site/static/img/jobs.png').default;

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  Png?: string;
  description: ReactNode;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '地域',
    // Svg: require('@site/static/img/worldmap_mapleworld.png').default,
    Png: worldmap_mapleworld,
    description: (
      <>
        メイプルストーリーの地域やイベントのストーリーについての説明です。
      </>
    ),
    url: "/region"
  },
  {
    title: 'NPC',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        NPCや敵キャラクターの説明です。
      </>
    ),
    url: "/npc"
  },
  {
    title: '職業',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Png: jobs,
    description: (
      <>
        プレイアブルキャラクターの職業ストーリーの説明です。
      </>
    ),
    url: "/jobs"
  },
];

function Feature({title, Svg, Png, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={url}>
        <div className="text--center">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
          <img src={Png}></img>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function CategoryList(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="center">
          このサイトはメイプルストーリーのネタバレを大量に含みますので注意してください。
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
