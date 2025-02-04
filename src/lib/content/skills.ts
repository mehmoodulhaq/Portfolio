import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Front End Development',
      // animation lottie file: c
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'Grid Layout', icon: 'mage:layout-grid-fill' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'NextJs', icon: 'logos:nextjs-icon' },
        { name: 'Angular (1-14) & AngularJs', icon: 'logos:angular-icon' },
        { name: 'vuejs', icon: 'logos:vue' }, // Added Vue.js
        { name: 'polymerjs', icon: 'logos:polymer' }, // Added PolymerJS
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'ReactNative', icon: 'skill-icons:react-light' },
        { name: 'ChakraUi', icon: 'simple-icons:chakraui' },
        { name: 'MantineUi', icon: 'logos:mantine-icon' },
        { name: 'MaterialUi', icon: 'skill-icons:materialui-light' },
        { name: 'BootStrap 5', icon: 'devicon:bootstrap-wordmark' },
        { name: 'Angular-Material', icon: 'devicon:angularmaterial' },
        { name: 'Figma/PSD to React, Figma/PSD to ReactNative, Figma/PSD to HTML', icon: 'skill-icons:figma-dark' },
        { name: "Hooks & Context API's", icon: 'mynaui:api' },
        { name: 'D3.js', icon: 'logos:d3' }, // Added D3.js
        { name: 'Web3.js', icon: 'logos:web3js' } // Added Web3.js (used for blockchain interactions on frontend)
      ]

    },
    {
      id: getId(),
      title: 'Back End Development',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in developing backend solutions using Python, Node.js, NestJS, Express.js, and GraphQL',
        'Experience in architecting scalable and efficient backend systems',
        'Providing robust and maintainable backend solutions',
      ],
      softwareSkills: [
        { name: 'NodeJs', icon: 'skill-icons:nodejs-dark' },
        { name: 'NestJs', icon: 'logos:nestjs' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-dark' },
        { name: 'Graphql, Graphql with Neo4J', icon: 'logos:graphql' },
        { name: 'Apollo Graphql', icon: 'simple-icons:apollographql' },
        { name: 'Mikro-orm, Typeorm', icon: 'logos:typeorm' },
        { name: 'Stripe Payment Gateway', icon: 'logos:stripe' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'Redis Cache', icon: 'logos:redis' },
        { name: 'Helm Chart', icon: 'simple-icons:helm' },
        { name: 'Argocd', icon: 'devicon:argocd' },
        { name: 'Jenkins', icon: 'skill-icons:jenkins-light' },
        { name: 'GitOps, DevOps', icon: 'devicon:azuredevops' },
        { name: 'Kubernetes', icon: 'devicon:kubernetes' },
        { name: '( GitHub, GitLab ) CI/CD', icon: 'devicon:githubactions' },
        { name: 'PodMan', icon: 'simple-icons:podman' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' }, // Added Java
        { name: 'Spring Boot, Spring MVC, Spring Data', icon: 'simple-icons:springboot' }, // Added Spring Boot
        { name: 'Session Implementation', icon: 'simple-icons:session' }, // Added Session Implementation
        { name: 'JWT Implementation', icon: 'simple-icons:jsonwebtokens' }, // Added JWT Implementation
        { name: 'Mocha', icon: 'logos:mocha' }, // Added Mocha
        { name: 'Chai', icon: 'logos:chai' }, // Added Chai
        { name: 'Gulp', icon: 'logos:gulp' }, // Added Gulp
        { name: 'Webpack', icon: 'logos:webpack' }, // Added Webpack
        { name: 'Grunt', icon: 'logos:grunt' }, // Added Grunt
        { name: 'Microservices, Micro Front-end', icon: 'carbon:microservices-1' }, // Added Microservices
        { name: 'Heroku', icon: 'skill-icons:heroku' }, // Added Heroku
        { name: 'AWS Lambda', icon: 'logos:aws-lambda' }, // Added AWS Lambda
        { name: 'AWS SQS', icon: 'logos:aws-sqs' }, // Added AWS SQS
        { name: 'AWS S3', icon: 'logos:aws-s3' }, // Added AWS S3
        { name: 'Sequelize', icon: 'logos:sequelize' }, // Added Sequelize
        { name: 'Knex.js', icon: 'logos:knex' }, // Added Knex.js
        { name: 'Hibernate', icon: 'logos:hibernate' }, // Added Hibernate
        { name: 'Django', icon: 'skill-icons:django' }, // Added Django under Back End
        { name: 'Flask', icon: 'logos:flask' }, // Added Flask under Back End
        { name: 'Blockchain', icon: 'eos-icons:blockchain' }, // Added Blockchain
        { name: 'Solidity', icon: 'logos:solidity' }, // Added Solidity
        { name: 'Ethereum', icon: 'logos:ethereum' }, // Added Ethereum
        { name: 'NFTs (Smart Contracts)', icon: 'mdi:nfc' }, // Added NFTs Smart Contracts
        { name: 'Crypto Currency', icon: 'mdi:currency-btc' } // Added Cryptocurrency
      ]

    },
    {
      id: getId(),
      title: 'Databases',
      lottie: {
        light: '/lotties/database-light.json',
        dark: '/lotties/database-light.json',
      },
      points: [
        'Experience in developing backend solutions using Neo4j, PostgreSQL, SQLite, PHPMyAdmin, MongoDB, and MySQL',
        'Experience in architecting scalable and efficient backend systems',
        'Providing robust and maintainable backend solutions',
      ],
      softwareSkills: [
        { name: 'PostgresQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql' },
        { name: 'SQlite', icon: 'skill-icons:sqlite' },
        { name: 'Neo4J', icon: 'devicon:neo4j' },
        { name: 'MongoDB', icon: 'skill-icons:mongodb' },
        { name: 'MariaDB', icon: 'logos:mariadb-icon' }
    ]
    
    },
  ],
};
