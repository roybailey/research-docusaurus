'use strict'
// react
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import {
    HorizontalBar,
    Section,
    Panel,
    MainLogo,
    MainHeader,
    CarouselContainer,
    ServiceModule,
    TabPanel,
    BarChartRating,
    InformationBootstrap,
    ArticleCard,
    PriceModule,
    ProjectionBar,
    TimeBar,
    BarChart,
    ShoutOutPanel,
    TestimonialModule,
    ContactModule,
    BulletList,
    TagMap,
} from '../../components/library';
import styles from "../HomepageFeatures/styles.module.css";


export default function ShowcaseDemos(props) {

  const asset = (it) => 'showcase/'+it;

  // ------------------------------------------------------------
  // MainMenu
  // ------------------------------------------------------------

  const social = {
      twitter: "http://twitter.com",
      linkedin: "https://www.linkedin.com",
      google: "https://plus.google.com",
      github: "https://github.com"
  };

  const profile = {
    image: asset("img/1.jpg"),
    title: "MAIN TITLE",
    description: "Description for company or person",
    social: social
  };

  const DemoMainMenu = (props) =>
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

  const DemoContactModule = (props) =>
      <Panel>
          <ContactModule contact={{
              title: "Contact us!!",
              description: "OUR TEAM INCLUDES GREAT THINKERS, TECHNOLOGISTS AND BUSINESS MINDS.",
              footnote: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo`,
              address: [
                "info@fahem.me",
                "south baluadanga, UK",
                "+880174120000,+880174120000,",
              ],
              social: social
          }} />
      </Panel>

  // ------------------------------------------------------------
  // Carousel
  // ------------------------------------------------------------

    const slideshow = {
        images: [
            {
                image: asset("img/photo-01.jpg"),
                title: "We Are <span>Creative!</span>",
                subtitle: "yes we are creative",
                button: {
                    href: '#SERVICES',
                    title: 'Services'
                }
            },
            {
                image: asset("img/photo-02.jpg"),
                title: "We Are <span>Smart!</span>",
                subtitle: "yes we are smart",
                button: {
                    href: '#BLOG',
                    title: 'Blogs'
                }
            },
            {
                image: asset("img/photo-03.jpg"),
                title: "We Are <span>Amazing!</span>",
                subtitle: "yes we are amazing",
                button: {
                    href: '#CONTACT',
                    title: 'Contact'
                }
            }
        ]
    };

  // ------------------------------------------------------------
  // Shout Outs
  // ------------------------------------------------------------

  const DemoShoutOut = (props) =>
      <Section id="demo-intro">
          <Panel title="Showcase of React Components!">
              <ShoutOutPanel quote={`
                  Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                  Mustache cliche tempor, williamsburg carles vegan helvetica.
                  Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                `}/>

              <div className="panel about">
                  <p>
                    Aliquip placeat salvia cillum iphone.
                    Seitan aliquip quis cardigan american apparel,
                    butcher voluptate nisi qui. Raw denim you probably
                    haven't heard of them jean shorts Austin.
                  </p>
                  <p className="quote">
                    Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                    Mustache cliche tempor, williamsburg carles vegan helvetica.
                    Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                  </p>
                  <p>
                    Aliquip placeat salvia cillum iphone.
                    Seitan aliquip quis cardigan american apparel,
                    butcher voluptate nisi qui. Raw denim you probably
                    haven't heard of them jean shorts Austin.
                  </p>
              </div>

              <ShoutOutPanel quote={`
                  Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                  Mustache cliche tempor, williamsburg carles vegan helvetica.
                  Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                `}/>
            </Panel>
        </Section>;


  // ------------------------------------------------------------
  // Services
  // ------------------------------------------------------------

  const services = [
    {
      title: "Users", icon: "fa fa-user", description:
      `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`
    },
    {
      title: "Coding", icon: "fa fa-code", description:
      `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`
    },
    {
      title: "Quality", icon: "fa fa-thumbs-up", description:
      `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`
    },
    {
      title: "Responsive", icon: "fa fa-comments", description:
      `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`
    }
  ];

  // ------------------------------------------------------------
  // Services
  // ------------------------------------------------------------

  const DemoWorkArea = (props) =>
    <TabPanel title="Functional <span>WORK PROCESS!</span>" tabs={[
      {
        id: "sectionA", title: "React Strategy", icon: "fa fa-lightbulb-o", description:
        `Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel,
        butcher voluptate nisi qui. Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
        williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.`
      },
      {
        id: "sectionB", title: "Plan", icon: "fa fa-compass", description:
        `Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
        Vivamus nibh urna, ornare id gravida ut, mollis a magna.
        Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut.
        Nam hendrerit bibendum turpis, sed molestie mi fermentum id.
        Aenean volutpat velit sem. Sed consequat ante in rutrum convallis.
        Nunc facilisis leo at faucibus adipiscing.`
      },
      {
        id: "sectionC", title: "Mechanism", icon: "fa fa-cogs", description:
        `Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
        Vivamus nibh urna, ornare id gravida ut, mollis a magna.
        Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut.
        Nam hendrerit bibendum turpis, sed molestie mi fermentum id.
        Aenean volutpat velit sem. Sed consequat ante in rutrum convallis.
        Nunc facilisis leo at faucibus adipiscing.`
      },
      {
        id: "sectionD", title: "Trajectory", icon: "fa fa-paper-plane", description:
        `Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
        Vivamus nibh urna, ornare id gravida ut, mollis a magna.
        Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut.
        Nam hendrerit bibendum turpis, sed molestie mi fermentum id.
        Aenean volutpat velit sem. Sed consequat ante in rutrum convallis.
        Nunc facilisis leo at faucibus adipiscing.`
      },
      {
        id: "sectionE", title: "Workflow", icon: "fa fa-line-chart", description:
        `Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.
        Vivamus nibh urna, ornare id gravida ut, mollis a magna.
        Aliquam porttitor condimentum nisi, eu viverra ipsum porta ut.
        Nam hendrerit bibendum turpis, sed molestie mi fermentum id.
        Aenean volutpat velit sem. Sed consequat ante in rutrum convallis.
        Nunc facilisis leo at faucibus adipiscing.`
      },
    ].map((data) => {
        data.href = "#" + data.id;
        return data;
    })}/>


  // ------------------------------------------------------------
  // Portfolio
  // ------------------------------------------------------------

  const portfolio = {
    title: "Portfolio!",
    subtitle: "OUR TEAM INCLUDES GREAT THINKERS. YOU WOULD LOVE TO WORK WITH THEM AS THEY ARE JUST AMAZING PEOPLE!!",
    portfolios: [
      {
        id: "app",
        category: "App",
        title: "Visual Infography",
        image: asset("img/portfolios/app/1.jpg"),
      },
      {
        id: "card",
        category: "Card",
        title: "Typography Company",
        image: asset("img/portfolios/card/1.jpg"),
      },
      {
        id: "web",
        category: "Web",
        title: "Bird Document",
        image: asset("img/portfolios/logo/5.jpg"),
      },
      {
        id: "web",
        category: "Web",
        title: "Sonor's Design",
        image: asset("img/portfolios/web/4.jpg"),
      },
      {
        id: "app",
        category: "App",
        title: "Weatherette",
        image: asset("img/portfolios/app/3.jpg"),
      },
      {
        id: "card",
        category: "Card",
        title: "BMF",
        image: asset("img/portfolios/card/4.jpg"),
      },
      {
        id: "card",
        category: "Card",
        title: "Techlion",
        image: asset("img/portfolios/card/5.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "KittyPic",
        image: asset("img/portfolios/logo/1.jpg"),
      },
      {
        id: "app",
        category: "App",
        title: "Graph Plotting",
        image: asset("img/portfolios/app/2.jpg"),
      },
      {
        id: "card",
        category: "Card",
        title: "QR Quick Response",
        image: asset("img/portfolios/card/2.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "Mobi Sock",
        image: asset("img/portfolios/logo/6.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "Village Community Church",
        image: asset("img/portfolios/logo/7.jpg"),
      },
      {
        id: "icon",
        category: "Icon",
        title: "Domino's Pizza",
        image: asset("img/portfolios/icon/4.jpg"),
      },
      {
        id: "web",
        category: "Web",
        title: "Backend Admin",
        image: asset("img/portfolios/web/3.jpg"),
      },
      {
        id: "icon",
        category: "Icon",
        title: "Instagram",
        image: asset("img/portfolios/icon/1.jpg"),
      },
      {
        id: "web",
        category: "Web",
        title: "Student Guide",
        image: asset("img/portfolios/web/2.jpg"),
      },
      {
        id: "icon",
        category: "Icon",
        title: "Scoccer",
        image: asset("img/portfolios/icon/2.jpg"),
      },
      {
        id: "icon",
        category: "Icon",
        title: "3D Map",
        image: asset("img/portfolios/icon/5.jpg"),
      },
      {
        id: "web",
        category: "Web",
        title: "Note",
        image: asset("img/portfolios/web/1.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "Native Designers",
        image: asset("img/portfolios/logo/3.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "Bookworm",
        image: asset("img/portfolios/logo/4.jpg"),
      },
      {
        id: "icon",
        category: "Icon",
        title: "Sandwich",
        image: asset("img/portfolios/icon/3.jpg"),
      },
      {
        id: "card",
        category: "Card",
        title: "Reality",
        image: asset("img/portfolios/card/3.jpg"),
      },
      {
        id: "logos",
        category: "Logo",
        title: "Speciallisterne",
        image: asset("img/portfolios/logo/2.jpg"),
      },
    ]
  };

  // ------------------------------------------------------------
  // Skills
  // ------------------------------------------------------------

  const DemoTagMap = (props) =>
      <TagMap title="Demo Tag Map" dataset={[
          {
            group: 'group 1 highest priority',
            items: [
              { size: 'xs', title:'Anna' },
              { size: 'l', title: 'BBC', href: 'http://www.bbc.co.uk', image: 'showcase/img/portfolios/logo/1.jpg' },
              { size: 'xs', title: 'Carl' },
              { size: 'xs', title: 'David', image: 'showcase/img/portfolios/logo/2.jpg' },
            ]
          },
          {
            group: 'group 2 something less important',
            items: [
              { size: 'l', title: 'Twitter', href: 'http://www.twitter.com', image: 'showcase/img/portfolios/logo/3.jpg' },
              { size: 's', title: 'Frank', href: 'http://www.google.com', image: 'showcase/img/portfolios/logo/4.jpg' },
              { size: 'm', title: 'Google', href: 'http://www.google.com', image: 'showcase/img/portfolios/logo/5.jpg' },
              { size: 's', title: 'GitHub', href: 'http://www.github.com', image: 'showcase/img/portfolios/logo/6.jpg' },
            ]
          },
        ]} />;

  const skills = {
    title: "Take a look at our <span>Amazing Skills!</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim!",
    chartTitle: "The <span>Skills</span> we have",
    ratings: [
      { title: "Java", description: "Java Description", length: 10, value: 8 },
      { title: "JavaScript", description: "JavaScript Description", length: 10, value: 7 },
      { title: "HTML/css", description: "HTML/css Description", length: 10, value: 6 },
      { title: "Node", description: "Node Description", length: 10, value: 6 },
    ],
    profile: [
      {
        title: "Why choose us?",
        description: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.<br/><br/> 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et.<br/><br/> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS!
        `
      },
      {
        title: "Our History!",
        description: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS!
        `
      },
      {
        title: "Behind Us!",
        description: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS!
        `
      },
      {
        title: "Yet More Interesting Points!",
        description: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
          on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS!
        `
      },
    ]
  };

  // ------------------------------------------------------------
  // Articles
  // ------------------------------------------------------------

  const articles = {
    title: "Hot news from the <span>BLOG!</span>",
    articles: [
      {
        imageSource: asset("img/1.jpg"),
        title: "First Article",
        author: "By FAHEM",
        date: "August 31th, 2014",
        summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
      },
      {
        imageSource: asset("img/2.jpg"),
        title: "Second Article",
        author: "By FAHEM",
        date: "August 31th, 2015",
        summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
      },
      {
        imageSource: asset("img/3.jpg"),
        title: "Third Article",
        author: "By FAHEM",
        date: "August 31th, 2016",
        summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
      },
    ]
  };

  // ------------------------------------------------------------
  // Prices
  // ------------------------------------------------------------

  const DemoPriceModule = (props) =>
    <PriceModule prices={{
      title: "Price Selection!!",
      plans: [
        {
          title: "Bronze",
          price: 50,
          frequency: "mon",
          details: [
            "5 Free Websites",
            "100 Gb Storage",
            "24 / 7 Full Support",
            "Cloud Backup",
            "5 Admin Panels",
            "Free Trials"
          ],
          bonus: "No Bonus Points!!"
        },
        {
          title: "Gold",
          price: 80,
          frequency: "mon",
          className: "featured",
          details: [
            "5 Free Websites",
            "100 Gb Storage",
            "24 / 7 Full Support",
            "Cloud Backup",
            "5 Admin Panels",
            "Free Trials"
          ],
          bonus: "All Bonus Points!!"
        },
        {
          title: "Diamond",
          price: 90,
          frequency: "mon",
          details: [
            "5 Free Websites",
            "100 Gb Storage",
            "24 / 7 Full Support",
            "Cloud Backup",
            "5 Admin Panels",
            "Free Trials"
          ],
          bonus: "All Bonus Points!!"
        }
      ]
    }} />;

  // ------------------------------------------------------------
  // Testimonials
  // ------------------------------------------------------------

  const testimonials = {
    title: "What our <span>client say!!</span>",
    testimonials: [
      {
        title: "----  kopa Samsu || Kopa Master",
        image: asset("img/tm1.png"),
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo`
      },
      {
        title: "----  Rohima || Kamner Beti",
        image: asset("img/tm1.png"),
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo`
      },
      {
        title: "----  Khairun sundori || Laika",
        image: asset("img/tm1.png"),
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo`
      },
    ]
  };

  // ------------------------------------------------------------
  // Original
  // ------------------------------------------------------------

  const quotes = [
      {title:"Integrity, Intelligence, Energy", source:"Warren Buffet"},
      {title:"Focus, Simplicity, Desire to be the Best", source:"Apple"},
      {title:"Success is a journey, not a Destination", source:"Unknown", reset:true},
      {title:"Hire for Passion", source:"Unknown"},
      {title:"Success is a journey, not a Destination", source:"Unknown", reset:true}
  ];

  const solutions = [
      {
          show: true,
          date: '2012-2016',
          title: 'Delivery Manager',
          subtitle: 'Investment Bank',
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`
      }, {
          show: true,
          date: '2010-2012',
          title: 'Technical Lead',
          subtitle: 'Data Distribution',
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`
      }, {
          show: true,
          date: '2006-2010',
          title: 'Technical Lead',
          subtitle: 'Market Risk',
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`
      }, {
          show: false,
          date: '2004-2006',
          title: 'Risk Management Calculation Engine',
          subtitle: 'LCH.Clearnet',
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`
      }
  ];

  const nonTechnicalSkills = [
      { show: true, percentage: 90, rating: "Exceptional", skill: "Technical Solutions" },
      { show: true, percentage: 88, rating: "Excellent",   skill: "Management & People" },
      { show: true, percentage: 88, rating: "Excellent",   skill: "Analysis & Design" },
      { show: true, percentage: 70, rating: "Strong",      skill: "Financial Markets & Multi-Asset Classes" },
      { show: true, percentage: 68, rating: "As Required", skill: "Low Level Technology & Infrastructure" }
  ];

  const competencies = [
      { show: true, percentage: 95, skill: "Java Neo4j Cassandra" },
      { show: true, percentage: 80, skill: "Node Javascript HTML5" },
      { show: true, percentage: 70, skill: "Oracle Messaging Groovy"},
  ];

  const employment = [
      { subtitle: "2002-2004", title: "BANK-C", description: "Technical Lead<br/>Market Risk" },
      { subtitle: "2004-2006", title: "BANK-B", description: "Technical Lead<br/>Data Management" },
      { subtitle: "2006-present", title: "BANK-A", description: "Solutions Architect<br/><a href='http://www.google.com'>Somewhere<br/>Go Searching</a>" },
  ];

  const levels = [
    { level: 100, title: "Guru", className:"level-1" },
    { level: 75, title: "Advanced", className:"level-2" },
    { level: 50, title: "Significant", className:"level-3" },
    { level: 25, title: "Intermediate", className:"level-4" },
  ];


  // ------------------------------------------------------------
  // exported website partials
  // ------------------------------------------------------------

  return(
    <div>

        <DemoMainMenu />
        <CarouselContainer slideshow={slideshow} />


        <HorizontalBar anchor="SHOUT-OUT" title="Shout Out" subtitle="More interesting simple textual content"/>
        <DemoShoutOut />


        <HorizontalBar anchor="SERVICE" title="Services" subtitle="Accordion for sectioned content" />
        <Section id="demo-services">
            <ServiceModule services={services}/>
        </Section>


        <HorizontalBar anchor="WORK" title="Work Area" subtitle="Tab bar of information" />
        <Section id="demo-work">
            <DemoWorkArea />
        </Section>


        <HorizontalBar anchor="PORTFOLIO" title="Portfolio" subtitle="Portfolio of relevent subject matter" />
        <Section id="demo-portfolio">
            NA
        </Section>


        <HorizontalBar anchor="SKILLS" title="Skills" subtitle="A career doing your hobby is the best recipe for success" />
        <Section id="demo-skillset">
            <DemoTagMap/>
            <div className="row">
                <div className="col col--4">
                    <InformationBootstrap information={skills.profile}/>
                </div>
                <div className="col col--8">
                    <BarChartRating dataset={skills}/>
                </div>
            </div>
        </Section>


        <HorizontalBar anchor="CHARTS" title="Charts" subtitle="Handy charts to improve the visuals"/>
        <Section id="demo-charts">

            <BarChart
              display="horz"
              sectionClass="skills_section"
              title="Horizontal Bar"
              subtitle="another view"
              dataset={nonTechnicalSkills}
              levels={levels}/>

            <BarChart
              display="vert"
              sectionClass="skills_section"
              title="Vertical Bar"
              subtitle="and again"
              dataset={competencies}
              levels={levels}/>
        </Section>


        <HorizontalBar anchor="LISTS" title="Lists" subtitle="Want to show an ordered list" />
        <Section id="demo-lists">
            <ProjectionBar
                sectionClass="employment_section"
                title="Projection List"
                projection={employment}/>

            <TimeBar
                sectionClass="employment_section"
                title="Time Bar"
                dataset={solutions}/>

            <BulletList
                title="Bullet List"
                dataset={solutions}
                namespace="demo-bullet"/>
        </Section>


        <HorizontalBar anchor="TESTIMONIALS" title="Testimonials" subtitle="What my clients are saying" />
        <Section id="demo-testimonials">
            <TestimonialModule testimonials={testimonials.testimonials}/>
        </Section>


        <HorizontalBar anchor="BLOG" title="Blog" subtitle="Want to know about my most recent blog posts" />
        <Section id="demo-articles">
            <ArticleCard articles={articles}/>
        </Section>


        <HorizontalBar anchor="TICKETS" title="Tickets" />
        <Section id="demo-tickets">
            <DemoPriceModule />
        </Section>


        <HorizontalBar anchor="CONTACT" title="Contact" />
        <Section id="demo-contact">
            <DemoContactModule />
        </Section>


        <HorizontalBar>
            <MainLogo profile={profile} />
            <p>Paragraph Footnote</p>
            <p>Copyright (c) Notice</p>
        </HorizontalBar>
    </div>
  );

}

// export default function ShowcaseDemos() {
//     return (
//         <ShowcaseDemos />
//     );
// }
