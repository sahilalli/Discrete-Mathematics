import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Discrete Mathematics Study Material
        </Heading>
        <p className="hero__subtitle">University-level study material on Discrete Mathematics.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/module-1-laplace-transforms/laplace-transforms-and-inverse-transforms">
            Start with Module 1: Laplace Transforms
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="University-level study material on Discrete Mathematics.">
      <HomepageHeader />
      <main>
        {/* Additional content can be added here if needed */}
      </main>
    </Layout>
  );
}
