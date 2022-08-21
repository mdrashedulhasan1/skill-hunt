const allCourse = [
    {
        id:0,
        name:'Web Design',
        Fee:'$140',
        catagory:'Web & Software',
        img:'https://www.webdesign.org/img_articles/23546/previewImage',
        describtion:'Web design refers to the design of websites that are displayed on the internet'
    },
    {
        id:1,
        name:'Web Wevelopment',
        Fee:'$200',
        catagory:'Web & Software',
        img:'https://www.chiangraitimes.com/wp-content/uploads/2022/01/5.webp',
        describtion:'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).'
    },
    {
        id:2,
        name:'MERN Stack',
        Fee:'$350',
        catagory:'Web & Software',
        img:'https://miro.medium.com/max/1400/1*k0SazfSJ-tPSBbt2WDYIyw.png',
        describtion:'MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only.'
    },
    {
        id:3,
        name:'C',
        Fee:'$130',
        catagory:'Programming',
        img:'https://setscholars.net/wp-content/uploads/2020/07/C-Programming.jpg',
        describtion:'C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.'
    },
    {
        id:4,
        name:'JavaScript',
        Fee:'$180',
        catagory:'Programming',
        img:'https://miro.medium.com/max/1024/1*YQgaKfVzK-YpxyT3NYqJAg.png',
        describtion:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web."
    },
    {
        id:5,
        name:'Python',
        Fee:'$200',
        catagory:'Programming',
        img:'https://i.pinimg.com/736x/4d/13/d5/4d13d55d6d0b38b7a4e85fcf97ff6279.jpg',
        describtion:'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
    },
    {
        id:6,
        name:'Adobe Photoshop',
        Fee:'$240',
        catagory:'Graphic Design',
        img:'https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2022/05/Getting_Started_with_Adobe_Photoshop-BlogHeader.png',
        describtion:'Adobe Photoshop CC is a powerful, reliable, and advanced image editor for Windows PCs. The program lets you work with basic designs, complex 3D artwork etc.'
    },
    {
        id:7,
        name:'Adobe Illustrator',
        Fee:'$250',
        catagory:'Graphic Design',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RMXtK5dvJbR7POSUnDRed8LSO8SxsbwPf4nOYE7r4b2byT9oWqO2jZHpbeRS8zz7z6Q&usqp=CAU',
        describtion:"Adobe Illustrator's the industry standard when it comes to creating vector artwork. It's used by artists, illustrators, designers and many more."
    },
    {
        id:8,
        name:'Adobe InDesign',
        Fee:'$130',
        catagory:'Graphic Design',
        img:'https://fixthephoto.com/blog/UserFiles/Image/222/10/9/1/adobe-indesign-for-windows-main.jpg',
        describtion:'Adobe InDesign is the industry-leading layout and page design software for print and digital media. Create beautiful graphic designs with Typography.'
    },
    {
        id:9,
        name:'After Effects',
        Fee:'$150',
        catagory:'Video Editing',
        img:'https://www.macitynet.it/wp-content/uploads/2018/09/aftereffects-stt18-2.jpg',
        describtion:'With Adobe After Effects, the industry-standard motion graphics and visual effects software, you can take any idea and make it move. Design for film, TV.'
    },
    {
        id:10,
        name:'Premiere Pro',
        Fee:'$160',
        catagory:'Video Editing',
        img:'https://www.dpreview.com/files/p/articles/7174541699/Pr_Essentials-workspace.jpg.img.jpeg',
        describtion:'Use Adobe Premiere Pro, the industry-leading video editor. Edit visually stunning videos and create professional productions for social sharing, TV.'
    },
    {
        id:11,
        name:'Autodesk Smoke',
        Fee:'$280',
        catagory:'Video Editing',
        img:'https://img.directindustry.com/images_di/photo-mg/14521-8997290.jpg',
        describtion:'Autodesk Smoke software is professional video effects software that links editing and VFX tools.'
    },
    {
        id:12,
        Fee:'$180',
        name:'Digital Marketing',
        catagory:'Digital Marketing',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGKf-qIpI5_g0LJ-CZgh2akLDxuvLpR3F2U95ipkrvdeYtwl0fqTE_Beox9lnw5Gu9dY&usqp=CAU',
        describtion:'Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.'
    },
    {
        id:13,
        name:'Socal Media Marketing',
        Fee:'$170',
        catagory:'Digital Marketing',
        img:'https://www.wordstream.com/wp-content/uploads/2022/02/social-media-marketing-fundamentals-wordstream.png',
        describtion:'To drive their capacity to change, businesses need to rethink their common language. Ability to thrive in the digital economy depends on how adaptable the business is. Browse Industries.'
    },
    {
        id:14,
        name:'Google Adsense',
        Fee:'$150',
        catagory:'Digital Marketing',
        img:'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2016/10/google-adsense-logo1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
        describtion:'Ads are screened to ensure they are high quality and relevant to your content or audience. Make the most of your ad space with smart ad sizing that adapts to your users.'
    },
    {
        id:15,
        name:'Excel for Professionals',
        Fee:'$120',
        catagory:'Corporate Course',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDa7B7OmfUAhqU-DDSm05vYGJMDHuvVfVR3GwzCh0IBVJhP8Ygv4u7cUd9Yse76KOrlk&usqp=CAU',
        describtion:'Microsoft Excel is the most used tool in the professional world. In every sector including sales, finance, marketing, engineering, supply chain.'
    },
    {
        id:16,
        name:'International Export',
        Fee:'$140',
        catagory:'Corporate Course',
        img:'https://wp-public-fs.s3.ap-south-1.amazonaws.com/tasks/15e1335c23b9d1bc901cc2ae2d46555883a022dcf8f232/images/international-trade-conce-5e1b66578c50a.jpg',
        describtion:'From importing exotic fashions to exporting light fixtures, the international trade business will take you all over the world and into all product niches.'
    },
    {
        id:17,
        name:'Time & Stress Management',
        Fee:'$115',
        catagory:'Corporate Course',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGc89J4okRiKmpi_0DQK8Uh4rZh1h8hDcuHvc9csRu2X_0VxjZHsN3rf6Vrboi5SPlxDY&usqp=CAU',
        describtion:'A stress management guide with practical skills to help cope with stress during COVID-19. A few minutes daily to practice self-help techniques. Download free guide & audio now.'
    },
]