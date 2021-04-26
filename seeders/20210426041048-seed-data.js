const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const companiesList = [];

    for (let i = 0; i < 20; i += 1) {
      companiesList.push({
        name: faker.company.companyName(),
        description: faker.company.catchPhraseDescriptor(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    const candidatesList = [
      {
        name: 'Jerome',
        email: 'jerome@test.com',
        password: '7ef6d7c225edda57aa6aef8c3ebf70b7b7822a9d9d18060b326985b0b64f26bd082e9529c5dd2fadc17fd98bf82662293f8d35dd78dbc53d07a213badf1ccf8f',
        contact_no: 91234567,
        links: 'https://www.linkedin.com/in/jeromechua/',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    const jobCompanyIds = [
      1,1,1,1,1,2,2,2,2,2,
      3,3,3,4,4,5,5,5,6,6,
      7,7,8,8,8,9,9,9,10,10,
      11,11,11,11,11,12,12,13,14,14,
      15,15,15,16,16,17,17,17,17,18,
      19,19,19,19,20,20,20,20,20,20
    ];

    const jobTitle = [
      'Software Engineer (Frontend)', 'Software Engineer (Frontend)', 'Full Stack Engineer', 'Backend Engineer', 'Data Engineer', 
      'Data Analyst', 'Data Scientist', 'Software Engineer', 'Software Engineer Intern', 'QA Automation Engineer',
      'Web Applications Engineer', 'Full Stack Engineer', 'Embedded Software Engineer',
      'Data Engineer', 'Backend Engineer',
      'Backend Developer', 'Frontend Developer', 'Fullstack Developer',
      'Software Engineer - Privacy', 'Software Engineer - Automation',
      'Data Engineer', 'Backend Engineer #SGUnited',
      'Backend Developer', 'Frontend Developer Intern', 'Fullstack Developer',
      'Software Developer', 'Software Developer', 'Software Developer',
      'Cyber Security Software Developer', 'Junior Developer',
      'Junior Software Engineer', 'Senior Software Engineer', 'Tech Lead', 'Software Engineer (Internship)', 'Data Engineer',
      'Front End Devleoper', 'Junior Developer',
      'Data Scientist',
      'Software Engineer - Backend', '#SGUnitedJobs Junior Software Engineer',
      'Backend Developer', 'Frontend Developer', 'Fullstack Developer',
      'Frontend Developer', 'Fullstack Developer',
      'Cloud Architect', 'Research Fellow', 'Machine Learning Engineer', 'Backend Engineer',
      'Senior Implementation Consultant',
      'Cloud Consultant', 'Data Analyst', 'Integration Consultant', 'Data Engineer',
      'CTO', 'Software Engineer', 'QA Engineer', 'Data Scientist', 'Cyber Security Engineer', 'Frontend Engineer'
    ];

    const salaries = [
      {
        minSal: 2800,
        maxSal: 3400,
      },
      {
        minSal: 2900,
        maxSal: 5000,
      },
      {
        minSal: 3600,
        maxSal: 4500,
      },
      {
        minSal: 3900,
        maxSal: 5200,
      },
      {
        minSal: 4000,
        maxSal: 6500,
      },
      {
        minSal: 5000,
        maxSal: 6500,
      },
      {
        minSal: 5500,
        maxSal: 8500,
      },
      {
        minSal: 6000,
        maxSal: 9000,
      },
      {
        minSal: 7500,
        maxSal: 9000,
      },
      {
        minSal: 9000,
        maxSal: 12000,
      },
      {
        minSal: 12000,
        maxSal: 18000,
      },
    ]

    const jobsList = [];

    for (let i = 0; i < jobCompanyIds.length - 1; i += 1) {
      const randomInt = Math.floor(Math.random() * 9);

      jobsList.push({
        companyId: skillNames[i],
        title: jobTitle[i],
        link: 'https://www.facebook.com/careers/jobs/',
        description: faker.name.jobDescriptor(),
        years_required: randomInt, 
        min_salary: salaries[randomInt].minSal,
        max_salary: salaries[randomInt].maxSal,
        created_at: new Date(),
        closing_at: new Date(),
        updated_at: new Date(),
      });

    const skillNames = ['JavaScript', 'HTML', 'Python', 'SQL', 'Software Engineering', 'CSS', 'Bootstrap', 'C', 'C++', 'C#', 'Objective C', 'PHP', '.NET', 'XML', 'MySQL', 'MongoDB', 'SQLite', 'React', 'React Native', 'TypeScript', 'Java', 'Eclipse', 'Web Services', 'Linux', 'MySQL', 'PostgreSQL', 'BigQuery', 'TensorFlow', 'Keras', 'PyTorch', 'Kafka', 'Django', 'Haskell', 'Swift', 'Flask', 'Spring', 'Kotlin', 'Rust', 'Go', 'Ruby', 'Ruby on Rails', 'AWS', 'Assembly', 'VBA', 'Dart', 'Flutter', 'Julia', 'R', 'Perl', 'jQuery', 'Angular', 'ASP.NET', 'Laravel', 'Hadoop', 'Puppet'];

    const skillsList = [];

    for (let i = 0; i < skillNames.length - 1; i += 1) {
      skillsList.push({
        name: skillNames[i],
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const skillsResult = await queryInterface.bulkInsert('skills', skillsList);
      const candidateResult = await queryInterface.bulkInsert('candidates', candidatesList);
      const companiesResult = await queryInterface.bulkInsert('companies', companiesList);

      console.log(companiesResult);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('candidates', null, {});
    await queryInterface.bulkDelete('skills', null, {});
    await queryInterface.bulkDelete('jobs', null, {});
    await queryInterface.bulkDelete('companies', null, {});
  },
};
