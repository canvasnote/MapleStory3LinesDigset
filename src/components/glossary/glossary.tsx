import { ReactNode } from "react";
import { CategoryDefine, GlossaryDefine, SubCategoryDefine, WordDefine } from "./GlossaryDefine";

import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import Glossary from '../components/glossary/glossary';
import Heading from '@theme/Heading';

import styles from '../../css/common.module.css'
// import styles from './index.module.css';

function Category(category: CategoryDefine): ReactNode {
    return <>
        <h1 id={category.categoryName}>{category.categoryName}</h1>
        {
            category.subCategories.map(subCategory => <>
                {SubCategory(subCategory)}
            </>)
        }
    </>
}

function SubCategory(subCategory: SubCategoryDefine): ReactNode {
    return <>
        <h2>{subCategory.subCategoryName}</h2>
        {subCategory.words.map(word => <>
            {Word(word)}
            </>
        )}
    </>
}

function Word(word: WordDefine): ReactNode {
    return <>
        <div className="card margin--lg">
            <div className="card__header">
                <div className="avatar">
                    <img
                        className="avatar__photo"
                        src="https://avatars1.githubusercontent.com/u/4060187?s=460&v=4" />
                    <div className="avatar__name">{word.name}</div>
                </div>
            </div>
            <div className="card__body">{word.description}</div>
        </div>
    </>
}

export function Glossary({glossaryDefine} : {glossaryDefine: GlossaryDefine}): ReactNode{
    const tabs = glossaryDefine.categories.map((category) => <>
        <a className="tabs__item shadow--lw" href={"#" + category.categoryName}><li>{category.categoryName}</li></a>
    </>)
    const result = glossaryDefine.categories.map((category) => <>
        {Category(category)}
    </>)

    return(<>
        <div className="container">
            <ul className="tabs tabs--block shadow--md">
                {tabs}
            </ul>
            {result}
        </div>
    </>)
}


export type GlossaryPageSettings = {
  title: string,
  glossary: GlossaryDefine,
  description: string
}

function HomepageHeader({pageSettings}: {pageSettings: GlossaryPageSettings}) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {pageSettings.title}
        </Heading>
      </div>
    </header>
  );
}

export default function GlossaryPage({pageSettings} : {pageSettings: GlossaryPageSettings}): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={pageSettings.description}>
      <HomepageHeader pageSettings={pageSettings} />
      <main>
        <Glossary glossaryDefine={pageSettings.glossary} />
      </main>
    </Layout>
  );
}
