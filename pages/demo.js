import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ShowcaseDemos from '@site/src/panels/ShowcaseDemos';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (<ShowcaseDemos />);
}
