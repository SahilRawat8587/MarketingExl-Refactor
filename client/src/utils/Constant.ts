// export const gifURL = "https://s3-alpha-sig.figma.com/img/5274/e3e0/90c383e36b4eb562c8ef8a4e8fcd5137?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hobpyyoO~J3O2p3nCgyua5wIVYoy0EyzsVFbPqF5vrmmHRcIp9vV5Zvt5bi3Iz~I3ZOOFMeTJEfP-~QPcMTXeIr-3n9PvBpWYQNS3wwbiufS3uAIO2hRi7yPMN~j-hk1E3flIQJWfJxuRH~19-fAM0vS4Jxp~~0glQHtK7Z9dil2f5a15g4rN6VPnyeVtEZHuToCxuPKiYpjetqN841nt4I8qO6Ci7N7BJMbvHlIPhvFlZvLUMO7lxjQDsRe3MlUMjIOOuei~-yodYu-q-~FpVyhTAbJTH9LkRkev1wxD-LExswYiO-mExQn47haI-ce0LC8SaosC3DnqQpXmTI6vg__";

export  const services = [
    { id: 'social-media', vector: 'v1', image: 'i1', text: 'Social Media Management' },
    { id: 'seo-sem', vector: 'v2', image: 'i2', text: 'SEO & SEM' },
    { id: 'email-whatsapp', vector: 'v3', image: 'i3', text: 'Email & Whatsapp Marketing' },
    { id: 'web-dev-uiux', vector: 'v3', image: 'i3', text: 'Web Development & UIUX' },
    { id: 'conversion-rate', vector: 'v2', image: 'i2', text: 'Conversion Rate Optimisation' },
    { id: 'e-commerce', vector: 'v1', image: 'i1', text: 'E Commerce Development' },
    { id: 'influencer-marketing', vector: 'v1', image: 'i1', text: 'Influencer Marketing' },
    { id: 'content-marketing', vector: 'v2', image: 'i2', text: 'Content Marketing' },
    { id: 'pr-reputation', vector: 'v3', image: 'i3', text: 'PR & Online Reputation Management' },
    { id: 'brand-guidelines', vector: 'v1', image: 'i1', text: 'Brand Guidelines' },
    { id: 'logo-design', vector: 'v2', image: 'i2', text: 'Logo Design' },
    { id: 'motion-design', vector: 'v3', image: 'i3', text: 'Motion design & Video Editing' },
];

export const serviceDetails = {
    'social-media': {
        title: 'Social Media Management',
        description: ' we connect your brand with potential customers through comprehensive social media management. Our expert team leverages the power of social platforms to build your brand, engage your audience, and drive conversions. Our services include:',
        imgSrc: '/images/cards/i1.png',
        vecSrc: '/images/cards/v1.png',
        accordionTitleArr: ['Content Creation', 'Community Management', 'Social Media Strategy', 'Analytics and Reporting', 'Ad Campaigns', 'Influencer Collaboration', 'Platform Management'],
        accordionDescArr: ['Crafting engaging and high-quality posts, stories, videos, and infographics that resonate with your audience.', 'Building and nurturing your online community by responding to comments, messages, and engaging with followers.', 'Developing tailored strategies that align with your business goals, ensuring consistent and effective brand messaging.', 'Providing detailed insights and performance tracking to measure success and optimize strategies.', 'Managing and optimizing paid social media advertising to maximize reach and ROI.', 'Partnering with relevant influencers to amplify your brand’s reach and credibility.', 'Expertise across various social media platforms including Facebook, Instagram, Twitter, LinkedIn, and more.'],
        photoUrl: '/images/cards/c1.png',
    },
    'seo-sem': {
        title: 'SEO & SEM',
        description: ' our Search Engine Optimization (SEO) services are designed to enhance your online visibility and drive organic traffic to your website. Our expert SEO team employs a comprehensive approach that include: Keyword Research, On-Page Optimization, Off-Page Optimization, Technical SEO, Local SEO, E-Commerce SEO, SEO Reporting. Our Search Engine Marketing (SEM) services are designed to help you reach your target audience through paid search advertising. Our SEM services include:',
        imgSrc: '/images/cards/i2.png',
        vecSrc: '/images/cards/v2.png',
        accordionTitleArr: ['Keyword Research and Strategy', 'On-Page Optimization', 'Technical SEO', 'Content Creation and Optimization', 'link Building', 'Local SEO'],
        accordionDescArr: ['We identify high-impact keywords that your target audience is searching for and develop a tailored strategy to rank for these terms.', 'Our team optimizes your website’s content, meta tags, headers, and images to ensure they are search-engine friendly and relevant to your target keywords.', "We conduct thorough audits to fix any technical issues that could hinder your website's performance, including site speed, mobile-friendliness, and crawlability.", "We create high-quality, engaging content that resonates with your audience and drives organic traffic. Our content strategy includes blog posts, articles, infographics, and more.", "Our link-building strategies focus on acquiring high-quality backlinks from reputable sites to boost your website's authority and rankings.", "We optimize your online presence for local searches, ensuring your business appears in local listings, Google My Business, and map searches."],
        photoUrl: '/images/cards/c2.png',
    },
    'email-whatsapp': {
        title: 'Email & Whatsapp Marketing',
        description: ' We enhance your brand’s communication through targeted Email and WhatsApp Marketing. Our expert team crafts personalized and timely messages that resonate with your audience, driving engagement and conversions. Our services include:',
        imgSrc: '/images/cards/i3.png',
        vecSrc: '/images/cards/v3.png',
        accordionTitleArr: ['Email Campaigns', 'Segmentation and Personalization', 'Automated Workflows', 'Performance Tracking', 'WhatsApp Marketing', 'Interactive Messaging', 'Compliance'],
        accordionDescArr: ['Designing and executing engaging email campaigns that capture attention and drive action.', 'Utilizing data to segment your audience and personalize messages for maximum impact.', 'Setting up automated email sequences to nurture leads and guide them through the sales funnel.', 'Analyzing campaign performance with detailed reports to refine strategies and improve results.', 'Creating and managing WhatsApp campaigns that deliver your messages directly to customers’ mobile devices.', 'Implementing interactive elements like polls, surveys, and direct calls to action to boost engagement.', 'Ensuring all communications comply with relevant regulations and best practices.'],
        photoUrl: '/images/cards/c3.png',
    },
    'web-dev-uiux': {
        title: 'Web Development & UIUX',
        description: ' We specialize in creating stunning, user-friendly websites that captivate your audience and drive business growth. Our comprehensive Web Development and UI/UX Design services ensure your digital presence is both visually appealing and highly functional. Our offerings include:',
        imgSrc: '/images/cards/i3.png',
        vecSrc: '/images/cards/v3.png',
        accordionTitleArr: ['Custom Web Development', 'Responsive Design', 'UI/UX Design', 'E-commerce Solutions', 'Content Management Systems (CMS)', 'Performance Optimization', 'Maintenance and Support'],
        accordionDescArr: ['Building tailored websites that meet your specific business needs and goals, utilizing the latest technologies.', 'Ensuring your website looks and performs flawlessly across all devices, from desktops to smart Phones.', 'Crafting intuitive and engaging user interfaces that provide a seamless user experience, enhancing customer satisfaction and retention.', 'Developing secure, scalable, and user-friendly e-commerce platforms that drive sales and enhance the shopping experience.', 'Implementing easy-to-use CMS solutions like WordPress, Shopify, and Magento, empowering you to manage your website content effortlessly.', 'Enhancing website speed, security, and overall performance to ensure a smooth and enjoyable user experience.', 'Providing ongoing support and updates to keep your website running smoothly and securely.'],
        photoUrl: '/images/cards/c4.png',
    },
    'conversion-rate': {
        title: 'Conversion Rate Optimisation',
        description: ' our Conversion Rate Optimization (CRO) services are designed to transform your website traffic into tangible business results. We utilize data-driven strategies to enhance user experience, reduce friction, and boost conversion rates. Our CRO offerings include:',
        imgSrc: '/images/cards/i2.png',
        vecSrc: '/images/cards/v2.png',
        accordionTitleArr: ['Website Analysis', 'A/B Testing', 'User Behavior Insights', 'Landing Page Optimization', 'Conversion Funnel Optimization', 'Content and Messaging', 'Continuous Improvement'],
        accordionDescArr: ['Conducting comprehensive audits to identify barriers to conversion and areas for improvement.', 'Implementing rigorous A/B tests to determine the most effective design, content, and layout variations.', 'Analyzing user behavior through heatmaps, session recordings, and analytics to understand how visitors interact with your site.', 'Designing and optimizing landing pages to ensure they are compelling and conversion-focused.', 'Streamlining the customer journey from entry point to conversion, minimizing drop-offs and maximizing completions.', 'Crafting persuasive and clear content that resonates with your audience and drives action.', 'Continuously monitoring performance and making data-driven adjustments to maintain and improve conversion rates.'],
        photoUrl: '/images/cards/c5.png',
    },
    'e-commerce': {
        title: 'E Commerce Development',
        description: 'We specialize in creating robust, scalable, and user-friendly e-commerce platforms that drive sales and enhance the shopping experience. Our E-Commerce Development services are tailored to meet your unique business needs, ensuring your online store stands out in a competitive market. Our offerings include:',
        imgSrc: '/images/cards/i1.png',
        vecSrc: '/images/cards/v1.png',
        accordionTitleArr: ['Custom E-commerce Solutions', 'Platform Expertise', 'Responsive Design', 'Secure Payment Integration', 'Product Management', 'Performance Optimization', 'SEO and Marketing Integration'],
        accordionDescArr: ['Developing bespoke e-commerce websites that reflect your brand and cater to your specific business requirements.', 'Utilizing leading platforms like Shopify, Magento, WooCommerce, and more to build reliable and scalable online stores.', 'Ensuring your e-commerce site is fully responsive, providing an optimal shopping experience on all devices.', 'Implementing secure and seamless payment gateways to provide your customers with a safe and smooth transaction process.', 'Designing intuitive product management systems that make it easy to add, update, and organize your product offerings.', 'Enhancing site speed, performance, and security to ensure a smooth and enjoyable shopping experience.', 'Integrating SEO best practices and marketing tools to drive traffic, improve search rankings, and boost sales.'],
        photoUrl: '/images/cards/c6.png',
    },
    'influencer-marketing': {
        title: 'Influencer Marketing',
        description: ' we harness the power of Influencer Marketing to elevate your brand’s visibility and credibility. By partnering with the right influencers, we create authentic and engaging content that resonates with your target audience and drives meaningful engagement. Our Influencer Marketing services include: ',
        imgSrc: '/images/cards/i1.png',
        vecSrc: '/images/cards/v1.png',
        accordionTitleArr: ['Influencer Identification', 'Campaign Strategy', 'Content Creation',  'Relationship Management', 'Performance Tracking', 'Compliance and Transparency'],
        accordionDescArr: ['Identifying and connecting you with influencers who align with your brand values and audience demographics.', 'Developing tailored influencer marketing strategies that align with your business goals and drive maximum impact.', 'Collaborating with influencers to create compelling and authentic content that showcases your brand.', 'Managing relationships with influencers to ensure smooth collaboration and long-term partnerships.', 'Monitoring and analyzing campaign performance to measure success and optimize future strategies.', 'Ensuring all influencer partnerships adhere to relevant regulations and maintain transparency with your audience.'],
        photoUrl: '/images/cards/c7.png',
    },
    'content-marketing': {
        title: 'Content Marketing',
        description: ' We fuel your brand’s growth with strategic Content Marketing that captivates and engages your audience. Our expert team crafts high-quality, relevant content that drives traffic, builds trust, and boosts conversions. Our Content Marketing services include:',
        imgSrc: '/images/cards/i2.png',
        vecSrc: '/images/cards/v2.png',
        accordionTitleArr: ['Content Strategy', 'Blog Posts and Articles', 'Social Media Content', 'Visual Content', 'SEO Optimization', 'Content Distribution', 'Performance Analysis'],
        accordionDescArr: ['Developing a comprehensive content strategy tailored to your business goals and target audience.', 'Creating informative and engaging blog posts and articles that position your brand as an industry leader.', 'Designing captivating social media content that encourages engagement and shares.', 'Producing eye-catching infographics, videos, and images that enhance your brand’s message.', 'Integrating SEO best practices to ensure your content ranks highly in search engine results and attracts organic traffic.', 'Leveraging various channels to distribute your content effectively and reach a wider audience.', 'Monitoring and analyzing content performance to refine strategies and maximize impact.'],
        photoUrl: '/images/cards/c8.png',
    },
    'pr-reputation': {
        title: 'PR & Online Reputation Management',
        description: 'We specialize in shaping and safeguarding your brand’s reputation through strategic PR and Online Reputation Management. Our expert team ensures your brand is presented positively and consistently across all channels. Our services include:',
        imgSrc: '/images/cards/i3.png',
        vecSrc: '/images/cards/v3.png',
        accordionTitleArr: ['Media Relations', 'Press Releases', 'Crisis Management', 'Online Monitoring', 'Reputation Repair', 'Content Creation', 'Social Media Management'],
        accordionDescArr: ['Building and maintaining strong relationships with key media outlets to secure positive coverage for your brand.', 'Crafting and distributing compelling press releases that highlight your brand’s news and achievements.', 'Developing proactive strategies to handle potential crises, protecting your brand’s image during challenging times.', 'Continuously monitoring online mentions and reviews to stay ahead of potential issues and capitalize on positive feedback.', 'Addressing negative reviews and feedback effectively to rebuild and maintain a positive online reputation.', 'Producing high-quality content that reinforces your brand’s message and values.', 'Managing your social media presence to ensure consistent and positive engagement with your audience.'],
        photoUrl: '/images/cards/c9.png',
    },
    'brand-guidelines': {
        title: 'Brand Guidelines',
        description: ' we help you create comprehensive Brand Guidelines that ensure consistency and coherence across all your brand’s touchpoints. Our expert team crafts detailed guidelines that reflect your brand’s unique identity and values. Our Brand Guidelines services include:',
        imgSrc: '/images/cards/i1.png',
        vecSrc: '/images/cards/v1.png',
        accordionTitleArr: ['Logo Usage', 'Color Palette', 'Typography', 'Imagery and Graphics', 'Voice and Tone', 'Brand Values and Mission', 'Application Guidelines'],
        accordionDescArr: ['Defining proper usage, variations, and placement to maintain visual consistency.', 'Establishing a cohesive color scheme that represents your brand and ensures uniformity across all media.', 'Selecting and specifying typefaces and styles that align with your brand’s personality.', 'Setting standards for the use of images, icons, and graphics to create a consistent visual language.', 'Outlining the brand’s voice and messaging style to ensure consistent communication.', 'Clearly articulating your brand’s core values, mission, and vision to align your team and audience.', 'Providing practical examples and templates for applying the brand elements across various platforms and materials.'],
        photoUrl: '/images/cards/c10.png',
    },
    'logo-design': {
        title: 'Logo Design',
        description: ' we help you create comprehensive Brand Guidelines that ensure consistency and coherence across all your brand’s touchpoints. Our expert team crafts detailed guidelines that reflect your brand’s unique identity and values. Our Brand Guidelines services include:',
        imgSrc: '/images/cards/i2.png',
        vecSrc: '/images/cards/v2.png',
        accordionTitleArr: ['Brand Discovery', 'Concept Development', 'Design Refinement', 'Versatile Formats', 'Color Variations', 'Typography', 'Revisions and Refinement'],
        accordionDescArr: ['Understanding your brand’s vision, values, and target audience to create a logo that truly represents your business.', 'Generating a variety of logo concepts and design directions for you to choose from.', 'Crafting a distinctive and memorable logo tailored specifically to your brand’s identity.', 'Providing your logo in multiple formats and sizes for use across various platforms and materials.', 'Creating color variations to ensure your logo looks great in different contexts, including black-and-white and full color.', 'Selecting and integrating complementary typography that enhances your logo and brand message.', 'Working closely with you to refine and perfect the final design to your satisfaction.'],
        photoUrl: '/images/cards/c11.png',
    },
    'motion-design': {
        title: 'Motion Design & Video Editing',
        description: ' We bring your brand to life through captivating and engaging video design. Our expert team combines creativity and technical skills to produce high-quality videos that tell your story and drive action. Our Video Design services include:',
        imgSrc: '/images/cards/i3.png',
        vecSrc: '/images/cards/v3.png',
        accordionTitleArr: ['Concept Development', 'Storyboarding', 'Animation and Effects', 'Video Editing', 'Sound Design', 'Voiceover and Music', 'Color Grading'],
        accordionDescArr: ['Developing creative concepts and ideas that align with your brand’s message and goals.', 'Creating visual storyboards that outline the video’s structure, scenes, and transitions.', 'Producing animations and effects that enhance the visual appeal and storytelling of your video.', 'Editing and assembling video footage, graphics, and effects to create a cohesive and engaging final product.', 'Enhancing the video with high-quality sound design, music, and voiceovers that elevate the viewer’s experience.', 'Selecting and integrating music and voiceovers that complement your brand’s tone and message.', 'Adjusting and enhancing the color and visual elements of the video to achieve the desired look and feel.'],
        photoUrl: '/images/cards/c12.png',
    },
};

export const blogItems = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/internet-business-seo-strategy_23-2147494779.jpg",
      title: "Mastering SEO Strategies for 2025",
      date: "Mar 28, 2025",
      author: "By Marketing EXL",
      description:
        "SEO has evolved significantly, and staying ahead is crucial for businesses aiming to dominate search rankings in 2025. This blog dives deep into advanced SEO strategies like keyword research focusing on user intent, voice search optimization, and ethical link-building. We also discuss mobile-first indexing and the role of AI in reshaping search engine algorithms. By applying these techniques, you can future-proof your SEO strategy and ensure visibility in a competitive digital world. SEO will continue to evolve, so businesses must continuously improve their strategies to maintain strong online presence and stay ahead of competitors in the ever-changing digital landscape.",
      likes: 450,
      comments: 60,
      shares: 180,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/ui-ux-differences-concept-illustration_114360-11700.jpg",
      title: "Top UI/UX Design Trends to Follow",
      date: "Feb 20, 2025",
      author: "By Marketing EXL",
      description:
        "Explore the latest UI/UX design trends that enhance user experience and digital interactions. The blog discusses principles like minimalism, accessibility, mobile-first designs, and intuitive interfaces. As users demand seamless experiences, it’s essential for designers to stay updated with evolving trends. This post highlights how modern design practices can make your product more user-friendly and visually engaging. By following these trends, you can create designs that not only attract users but also retain them, improving conversion rates, customer loyalty, and overall satisfaction. Stay ahead in the competitive digital world by adopting the most effective design strategies and enhancing user experiences on every platform.",
      likes: 370,
      comments: 45,
      shares: 140,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg",
      title: "Social Media Marketing Mastery",
      date: "Jan 12, 2025",
      author: "By Marketing EXL",
      description:
        "Learn effective social media marketing techniques to enhance brand awareness and engage with customers across platforms. This blog provides strategies for creating compelling content, building a strong presence, and leveraging various platform features. It covers organic growth, paid advertisements, and influencer collaborations that help businesses thrive. By mastering social media marketing, you can extend your reach, create meaningful interactions, and build long-term relationships with your audience. Whether you're looking to increase your following or improve engagement, this blog offers essential tips and insights to boost your marketing efforts, strengthen your brand's online presence, and drive business growth.",
      likes: 520,
      comments: 75,
      shares: 210,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg",
      title: "How UI/UX Enhances Conversion Rates",
      date: "Dec 15, 2024",
      author: "By Marketing EXL",
      description:
        "Discover how a well-designed UI/UX can significantly boost your conversion rates. This blog explores how optimizing the user interface and experience leads to higher engagement, better retention, and more sales. Focused on clear navigation, intuitive layouts, and seamless user journeys, the blog highlights ways to enhance customer satisfaction. By improving the design and usability of your website or app, you can ensure users stay longer, explore more, and ultimately take desired actions. A good UI/UX design plays a crucial role in turning visitors into loyal customers, which directly impacts your revenue and strengthens your brand’s position in the market.",
      likes: 430,
      comments: 55,
      shares: 160,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-vector/digital-marketing-concept-with-online-advertising-media-symbols-flat_1284-31958.jpg",
      title: "Digital Marketing Trends to Watch",
      date: "Nov 25, 2024",
      author: "By Marketing EXL",
      description:
        "Stay ahead of the competition by embracing the latest digital marketing strategies. This blog highlights essential trends such as AI-powered marketing, content personalization, video marketing, and voice search optimization. As digital marketing evolves, businesses must adapt to new tools and methods to reach their audience effectively. From automation to interactive content, this guide offers insights into the most effective strategies for 2025. By staying updated with these trends, businesses can improve engagement, increase visibility, and ensure that their marketing efforts resonate with customers across different digital channels, ensuring sustained growth and success.",
      likes: 490,
      comments: 68,
      shares: 190,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/business-colleagues-together-teamwork-working-office_53876-16024.jpg",
      title: "Building Brand Trust Through Authenticity",
      date: "Oct 05, 2024",
      author: "By Marketing EXL",
      description:
        "Learn how to build brand trust through authenticity in this insightful blog. It explores the key principles of transparency, honesty, and consistent messaging, which are vital for businesses to establish credibility. Customers today value authenticity and prefer brands that align with their values. By creating an authentic brand identity and being transparent in communications, businesses can foster long-term relationships with customers. Trust is a powerful factor in customer retention and loyalty, so focusing on authenticity can strengthen your brand’s reputation and help you build a loyal customer base that will stay with you for the long run.",
      likes: 380,
      comments: 40,
      shares: 125,
    },
];

export const phoneNumber = "+919310588976"