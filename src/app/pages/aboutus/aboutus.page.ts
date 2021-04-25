import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-aboutus",
  templateUrl: "./aboutus.page.html",
  styleUrls: ["./aboutus.page.scss"]
})
export class AboutusPage implements OnInit {
  aboutUsProfiles: {
    serialNo: number;
    name: string;
    imageLink: string;
    bio: string;
    socialLink?: string;
  }[] = [
    {
      serialNo: 1,
      name: "Kuldeep Singh",
      imageLink: "../../../assets/profiles/kuldeep_singh.jpg",
      bio:
        "Kuldeep Singh is focused, enthusiastic and passionate individual responsible for testing, managing the website homepage, a few blogs, maintaining quality and ensuring smooth functioning of all information security aspects of WIOF. Due to his diverse international experience, association with various social organisations, he could provide valuable insights in every stage of the website building right from the very inception ensuring WIOF to achieve its vision and mission statement. Kuldeep always tries to practice 3 key principles of Sikhism: 1) Nam japna: (Chant!! Keeping God in mind always) 2) Kirt Karna: (Earning an honest living) 3) Vand Chhakna: (Literally, sharing one's earnings with needy/ giving to charity.)",
      socialLink: "https://www.linkedin.com/in/kuldeepsinghjuneja/"
    },
    {
      serialNo: 2,
      name: "Prerana Sharma",
      imageLink: "../../../assets/profiles/prerana_sharma.jpg",
      bio:
        'Prerana Sharma is our Product Owner and the owner of our "Earth" Page. She helps drive the WIOF Team to define a clear product vision and bring it to realization. Having worked with some of the world\'s biggest agri input manufacturers, she is a domain expert in digital farming and has helped thousands of farmers derive benefits from precision agriculture. In her free time she loves to grow her own vegetables in her apartment. She has done her Bachelors in Information Technology from Meerut University and her Masters in Marketing Management and International Business from Birla Institute of Management Technology. She is a Certified Scrum Product Owner and proficient in German upto B1 Level from Stuttgart University.',
      socialLink: "https://www.linkedin.com/in/prerana-sharma-cspo/"
    },
    {
      serialNo: 3,
      name: "Abhishek Sharma",
      imageLink: "../../../assets/profiles/abhishek_sharma.jpg",
      bio:
        'Abhishek Sharma, the owner of our "Energy" page, is a SAP Analytics Architect by profession and eco-enthusiast by heart loves to be part of all nature embibed endeavours towards sustainability and its preservation. Energy sciences especially in the Renewable Energy sector has been consistent stream of study with him and that even led him to pursue further studies in TERI or the The Energy Resources Institute, New Delhi. He has been associated with CII while attending various seminars and expos meant for Renewable Energies in India.',
      socialLink: "https://www.linkedin.com/in/abhishek-sharma-4b93508/"
    },
    {
      serialNo: 4,
      name: "Shivkumar Krishnamoorthy",
      imageLink: "../../../assets/profiles/shivkumar_krishnamoorthy.jpg",
      bio:
        'Shivkumar Krishnamoorthy is the Founder of WIOF and the owner of our "Air" Page.  He has been associated with Environmental causes for the past 9 years ever since he founded a socio-environmental Group ROOTS in Facebook in 2011. He also has been heading the Eco Club in Infosys Pune since 2015. He is currently a Sector Lead of the EHS and Sustainability Business Consulting Unit in Infosys. He has a Bachelors in Electronics and Telecommunication from Mumbai University and a Masters in Human Resources from XLRI Jamshedpur. He has led anti-pollution marches in Hinjewadi Pune for the last 3 years to promote public transport over personal vehicles. He is also a certified PSM from Scrum.org',
      socialLink:
        "https://www.linkedin.com/in/shivkumar-krishnamoorthy-cspo%C2%AEpsm%C2%AE-0922965/"
    },
    {
      serialNo: 5,
      name: "Mahesh Kakade",
      imageLink: "../../../assets/profiles/mahesh_kakade.jpg",
      bio:
        'Mahesh Kakade, the owner of our "Water" page, is into IT profession,  however he is more passionate on working for water conservation, waste minimization and other environmental issues. As time permits, he delves into problems and works relentlessly to come up with simple and practical solutions. He has undertaken projects to implement Rain Water Harvesting and installation of spray aerators on every single wash basin of the society he lives in. He believes in smart solutions via small investments that lead to huge savings of this precious natural resource. Our endeavor is to connect many like minded people and leverage each other\'s expertise to bring an awareness on Water conservation, Water Pollution and take action to come up with solutions to challenges related to Water.'
    },
    {
      serialNo: 6,
      name: "Ketki Anand",
      imageLink: "../../../assets/profiles/ketki_anand.jpg",
      bio:
        'Ketki Anand is the owner of our "Spirit" Page. She has a degree in MBA from Symbiosis International University and Computer Science engineering from BMS Institute of Technology, Bangalore. Her passion for imparting knowledge to groom people professionally led her to enter the Learning and Development industry as a Communication and Behavioral Skills Trainer. A highly motivated professional, her creativity and ability to adapt to new and challenging industries make her trainings more relevant, adding a different perspective on regular topics. She is also a certified NLP Practitioner and guides people on Emotional Intelligence.  She is currently a Professor in MIT Pune School of Corporate Innovation and Leadership (SCIL).',
      socialLink: "https://www.linkedin.com/in/ketkianand/"
    },
    {
      serialNo: 16,
      name: "Sneha Bijlani",
      imageLink: "../../../assets/profiles/sneha_bijlani.jpg",
      bio:
        "Sneha Bijlani is a Digital Marketing Professional and the Co-Founder of WIOF. She has been responsible for doing the initial mind-mapping of the website structure and content. She is also the reviewer of most of the blogs and ensures that they are meeting SEO standards. She is a Certified Digital Marketer from Lavenir Institute of Professional Studies. Her interests also include Content Writing, Psychology, Consumer Behavior, NLP, Social Etiquttes, Soft Skills and Public Speaking.",
      socialLink: "https://www.linkedin.com/in/snehabijlani29/"
    },
    {
      serialNo: 7,
      name: "Priti Thankar",
      imageLink: "../../../assets/profiles/priti_thankar.jpg",
      bio:
        "Priti Thankar is a User Experience and Product Designer. She has contributed to the overall user experience and some key features of the WIOF, worked on defining the navigation, information architecture, menu structure, Interaction and few other important aspects of the experience. She has focused on making the website usable and user friendly. WIOFs clear, defined vision and mission statement has been a guiding light throughout the UX journey. Associating with WIOF has given her and opportunity  to contribute to her passion about caring for environment, sustainable living and well-being of the community.",
      socialLink: "https://www.linkedin.com/in/priti-thankar-9976789/"
    },
    {
      serialNo: 8,
      name: "Amrita",
      imageLink: "../../../assets/profiles/amrita.jpg",
      bio:
        "Amrita is a software engineer by profession and has contributed to the UX of WIOF. She is passionate about animal welfare and is ready to help out dogs in distress. She has rescued many strays, ensuring that they end up in good homes. She participates in a lot of environmental events and volunteers for animal shelters. She is a naturally creative person who believes in finding environmentally sustainable solutions for everyday living. In her free time, she creates artful jewellery with her family at PrettyKnotts to fund her various animal rescues."
    },
    {
      serialNo: 9,
      name: "Naved",
      imageLink: "../../../assets/profiles/naved.jpg",
      bio:
        "Naved Maulavi is a social, cheerful, and enthusiastic person with strong technical experience in IT and contributed to the development of the website with other crew members. He actively participated in National Service Scheme during college days and looking for opportunities to contribute to social causes. He has been part of Vasundhara Abhiyaan for mass tree plantation and nurturing at Baner hills. The experience of Naved with other developers helped the website to build up with better practices at the development level and get behind the scene work done.",
      socialLink: "https://www.linkedin.com/in/naved-maulavi"
    },
    {
      serialNo: 10,
      name: "Eeshan",
      imageLink: "../../../assets/profiles/eeshan_jaiswal.jpg",
      bio:
        "Eeshan is a Tech enthusiast and believes in sustainable development. At WIOF he has contributed towards the development of the website and various widgets. He has a keen interest in technology and he is always looking forward to developing solutions that can add more value to people's life. He wants to work towards the emerging issues in the world with help of technology, like the use of IoT in water tanks monitoring to preserve water, the use of Air Quality Monitoring System to aware people of increasing pollution, and more.",
      socialLink: "https://www.linkedin.com/in/eeshan-jaiswal-114737101/"
    },
    {
      serialNo: 11,
      name: "Devraj",
      imageLink: "../../../assets/profiles/devraj_soni.jpg",
      bio:
        "Devraj is responsible for developing the pH and Energy Widgets and few content videos of WIOF. His deep interest lies in developing sustainable business enterprises that meet not only today's needs but also promise a sustainable tomorrow. Apart from WIOF, Devraj has a family business of Embossed idols and Silver Jewellery. He also manages his own venture ThriveGreen in the Sustainability area.",
      socialLink: "https://www.linkedin.com/in/devraj-soni-07101995/"
    },
    {
      serialNo: 12,
      name: "Divya Chawla",
      imageLink: "../../../assets/profiles/divya_chawla.jpg",
      bio:
        "Divya Chawla is an HR professional turned content creator and trainer who shares her passion with the WIOF team for making profound changes in saving the planet. She is deeply interested in spirituality , healing sciences , Sustainability and environmental issues which further makes her committed towards creating persuasive content for the community to partake in this vital movement. She has contributed to the research and blog content contribution of the Earth Page.",
      socialLink: "https://www.linkedin.com/in/divya-chawla-56a5253b/"
    },

    {
      serialNo: 13,
      name: "Shailendra Deshmukh",
      imageLink: "../../../assets/profiles/shailendra_deshmukh.jpg",
      bio:
        "Shailendra Deshmukh is an IIT graduate and IT professional currently working as a project manager. He is an active Yoga practitioner and a Certified Yoga Teacher. Since childhood he has been a seeker and started practicing meditation at an early age while still in school. He has attended multiple Yoga workshops and training to deepen his practices. He has spent hundreds of hours doing meditation and practicing yoga. He has been through multiple experiences throughout this period. He keeps studying several classical books and commentaries from modern day Gurus in order to enhance his knowledge on Yoga and Spirituality.",
      socialLink: "https://www.linkedin.com/in/shailendra-deshmukh-51848833/"
    },
    // {
    //   serialNo: 14,
    //   name: "Preeti",
    //   imageLink: "../../../assets/profiles/preeti.jpg",
    //   bio:
    //     "Preeti is a dynamic and energetic person who has expertise in prioritizing things in her life. She possesses a strong mindset, unlimited courage, excellent communication skills to have an enduring first impression and everlasting relationship with people. With almost 5 years of experience in the IT industry, she has the proficiency to grasp various technical aspects of a project and is also comfortable in managing as well as mentoring other people. When it comes to knowledge she always craves more and her decision to pursue a master's degree from an international university is just another example of the same. She is an environmental enthusiast who always advocates and is concerned with the protection of the environment.",
    //   socialLink: "https://www.linkedin.com/in/mehtapreeti09/"
    // },
    {
      serialNo: 15,
      name: "Rahul Banerjee",
      imageLink: "../../../assets/profiles/rahul_banerjee.jpg",
      bio:
        "Rahul Banerjee, an IT professional with keen interest in latest technology trends, is also very much grounded with our Socio-economic Issues, specifically very much alert about the environmental challenges but more enthusiastic on the solutions, however small they are. An amateur storyteller, mainly on human relations, with a passion to bring them to a wider reach of common people. Dreams of becoming an honest political adminstrator to serve the country.",
      socialLink: "https://www.linkedin.com/in/rahul-banerjee-35714921/"
    },
    {
      serialNo: 17,
      name: "Neelu Tiwari",
      imageLink: "../../../assets/profiles/neelu_tiwari.jpg",
      bio:
        "Neelu Tiwari has contributed in initial technical analysis and feasibility of technical options to choose from to build the website with architectural design diagrams and PLM slection tool to setup the website program flow. She also has contributed in few blogs on vegan diet inspired from Sadhguru and yogic science. She is also a Certified Scrum Master from Scrum Alliance who has worked technically on several agile projects. She has done her Masters in Computer Applications from Pune University.",
      socialLink: "https://www.linkedin.com/in/neelu-tiwari-45502617/"
    },
    {
      serialNo: 18,
      name: "Prachi Khurana",
      imageLink: "../../../assets/profiles/prachi_khurana.jpg",
      bio:
        "Prachi Khurana is an IT professional  and has worked with multiple clients across industries. She is an open minded person which helps her experience new thoughts and ideas, this has strengthened her and her beliefs. She has volunteered with non profit events organisations involving children and their education. She is concerned with the way humans interact with the environment and affect it. She is a firm believer that each one of us with an extra step can make this world a better place to live in - together we can and we will.  She is ISTQB certified and has tested WIOF website for us as an independent tester.  She has done her BTech in Computer Science from Maharishi Dayanand University.",
      socialLink: "https://www.linkedin.com/in/prachi-testautomation"
    },
    {
      serialNo: 19,
      name: "Madhura Hambarde",
      imageLink: "../../../assets/profiles/madhura_hambarde.jpg",
      bio:
        "Madhura Hambarde is a Senior Systems Engineer by profession.  She has interest in the Air Pollution area and has written blogs pertaining to it on the Air Page of WIOF. She has also worked with the Eco Club of Infosys Pune in collaboration with Indian Institute of Tropical Meteorology, Pune (makers of the SAFAR AQI Monitoring App) to help monitor pollution in the Hinjewadi area by getting Air Monitoring Device from IITM to the Infosys Campus last year.  She has done her Bachelors in Electrical, Electronics and Communication Engineering from Pune University and is an Internet of Things (IOT) Enthusiast.",
      socialLink: "https://www.linkedin.com/in/madhura-hambarde-166718155/"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
