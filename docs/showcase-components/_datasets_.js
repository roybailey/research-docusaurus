

const asset = (it) => '/showcase/'+it;


const social = {
    twitter: "http://twitter.com",
    linkedin: "https://www.linkedin.com",
    stack: "https://stackoverflow.com",
    github: "https://github.com"
};

const profile = {
    image: asset("img/1.jpg"),
    title: "MAIN TITLE",
    description: "Description for company or person",
    social: social
};

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



const information = [
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
];


const ratings = {
    title: "Take a look at our <span>Amazing Skills!</span>",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim!",
    chartTitle: "The <span>Skills</span> we have",
    ratings: [
        { title: "Java", description: "Java Description", length: 10, value: 8 },
        { title: "JavaScript", description: "JavaScript Description", length: 10, value: 7 },
        { title: "HTML/css", description: "HTML/css Description", length: 10, value: 6 },
        { title: "Node", description: "Node Description", length: 10, value: 6 },
    ],
};

// ------------------------------------------------------------
// Articles
// ------------------------------------------------------------

const articles = {
    title: "Hot news from the <span>BLOG!</span>",
    articles: [
        {
            image: asset("img/1.jpg"),
            title: "First Article",
            author: "By FAHEM",
            date: "August 31th, 2014",
            summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
        },
        {
            image: asset("img/2.jpg"),
            title: "Second Article",
            author: "By FAHEM",
            date: "August 31th, 2015",
            summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
        },
        {
            image: asset("img/3.jpg"),
            title: "Third Article",
            author: "By FAHEM",
            date: "August 31th, 2016",
            summary: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially."
        },
    ]
};

// ------------------------------------------------------------
// Testimonials
// ------------------------------------------------------------

const testimonials = {
    title: "What our <span>client say!!</span>",
    testimonials: [
        {
            title: "----  kopa Samsu || Kopa Master",
            image: asset("img/photo-01.jpg"),
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo`
        },
        {
            title: "----  Rohima || Kamner Beti",
            image: asset("img/photo-02.jpg"),
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo`
        },
        {
            title: "----  Khairun sundori || Laika",
            image: asset("img/photo-03.jpg"),
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
                        nisi ut aliquip ex ea commodo`.replaceAll("\n"," ")
    }, {
        show: true,
        date: '2010-2012',
        title: 'Technical Lead',
        subtitle: 'Data Distribution',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`.replaceAll("\n"," ")
    }, {
        show: true,
        date: '2006-2010',
        title: 'Technical Lead',
        subtitle: 'Market Risk',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        nisi ut aliquip ex ea commodo`.replaceAll("\n"," ")
    }, {
        show: false,
        date: '2004-2006',
        title: 'Risk Management Calculation Engine',
        subtitle: 'LCH.Clearnet',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo`.replaceAll("\n"," ")
    }
];

const nonTechnicalSkills = [
    { show: true, percentage: 90, rating: "Exceptional", skill: "Technical Solutions" },
    { show: true, percentage: 70, rating: "Excellent",   skill: "Management & People" },
    { show: true, percentage: 50, rating: "Excellent",   skill: "Analysis & Design" },
    { show: true, percentage: 30, rating: "Strong",      skill: "Financial Markets & Multi-Asset Classes" },
    { show: true, percentage: 10, rating: "As Required", skill: "Low Level Technology & Infrastructure" }
];

const competencies = [
    { show: true, percentage: 95, skill: "Java Neo4j Cassandra" },
    { show: true, percentage: 80, skill: "Node Javascript HTML5" },
    { show: true, percentage: 70, skill: "Oracle Messaging Groovy"},
];

const employment = [
    { subtitle: "2002-2004", title: "BANK-C", description: "Technical Lead<br/>Market Risk" },
    { subtitle: "2004-2006", title: "BANK-B", description: "Technical Lead<br/>Data Management" },
    { subtitle: "2006-present", title: "BANK-A", description: "Solutions Architect<br/><a href='https://www.google.com'>Somewhere<br/>Go Searching</a>" },
];

const levels = [
    { level: 100, title: "Guru", className:"level-1" },
    { level: 75, title: "Advanced", className:"level-2" },
    { level: 50, title: "Significant", className:"level-3" },
    { level: 25, title: "Intermediate", className:"level-4" },
];

const tags = [
    {
        group: 'group 1 highest priority',
        items: [
            { size: 'xs', title:'Anna' },
            { size: 'l', title: 'BBC', href: 'https://www.bbc.co.uk', image: '/showcase/img/portfolios/logo/1.jpg' },
            { size: 'xs', title: 'Carl' },
            { size: 'xs', title: 'David', image: '/showcase/img/portfolios/logo/2.jpg' },
        ]
    },
    {
        group: 'group 2 something less important',
        items: [
            { size: 'l', title: 'Twitter', href: 'https://www.twitter.com', image: '/showcase/img/portfolios/logo/3.jpg' },
            { size: 's', title: 'Frank', href: 'https://www.google.com', image: '/showcase/img/portfolios/logo/4.jpg' },
            { size: 'm', title: 'Google', href: 'https://www.google.com', image: '/showcase/img/portfolios/logo/5.jpg' },
            { size: 's', title: 'GitHub', href: 'https://www.github.com', image: '/showcase/img/portfolios/logo/6.jpg' },
        ]
    },
];

const prices = {
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
        },
        // {
        //     title: "Sand",
        //     price: 10,
        //     frequency: "mon",
        //     details: [
        //         "1 Free Websites",
        //         "10 Gb Storage",
        //         "24 / 7 Full Support",
        //         "No Backup",
        //         "1 Admin Panels",
        //         "Free Trials"
        //     ],
        //     bonus: "n/a"
        // },
    ]
};

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

export {
    nonTechnicalSkills,
    testimonials,
    competencies,
    information,
    employment,
    solutions,
    portfolio,
    slideshow,
    articles,
    services,
    profile,
    ratings,
    social,
    levels,
    prices,
    tags,
};
