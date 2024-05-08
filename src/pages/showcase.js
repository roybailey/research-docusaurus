import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
    MainHeader,
    CarouselContainer,
    HorizontalBar,
    ShoutOutPanel,
} from '../components/library'

import {
    profile,
    slideshow,
} from '../../docs/showcase-components/_datasets_'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <MainHeader
          menu={[
              { href: "#ABOUT", title: "About" },
              { href: "#SERVICE", title: "Service" },
              { href: "#WORK", title: "Work" },
              { href: "#BLOG", title: "Blog" },
              { href: "#CONTACT", title: "Contact" },
          ]}
          profile={profile}
          sticky='true'
      />
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
        <HomepageHeader />
        <main>
            <CarouselContainer slideshow={slideshow} />
            <HorizontalBar title="Shout Out" subtitle="Emphasizing quoted text" />
            <ShoutOutPanel quote={`
                 This text is quoted with the ShoutOutPanel.
                 The text is quoted and placed in a box
                 with highlight bar on the left and top right corner.
            `}/>

            <div className="panel about">
                <p>
                    Aliquip placeat salvia cillum iphone.
                    Seitan aliquip quis cardigan american apparel,
                    butcher voluptate nisi qui. Raw denim you probably
                    haven't heard of them jean shorts Austin.
                </p>
                <ShoutOutPanel quote={`
                     This text is quoted with the <code>quote</code> class style.
                     The text is placed in a box with a highlight bar on the right side.
                  `} display="normal" animate="animate__lightSpeedInLeft"
                />
                <p>
                    Aliquip placeat salvia cillum iphone.
                    Seitan aliquip quis cardigan american apparel,
                    butcher voluptate nisi qui. Raw denim you probably
                    haven't heard of them jean shorts Austin.
                </p>
            </div>

            <ShoutOutPanel quote={`
                 This text is quoted with the ShoutOutPanel.
                 The text is quoted and placed in a box
                 with highlight bar on the left and top right corner.
            `}/>

        </main>
    </>
  );
}
