import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create a test company
  const company = await prisma.company.upsert({
    where: { name: 'Tech Solutions Inc.' },
    update: {},
    create: {
      name: 'Tech Solutions Inc.',
      description: 'A leading technology company focused on innovative software solutions',
      website: 'https://techsolutions.com',
      industry: 'Technology',
      size: 'MEDIUM',
      location: 'Madrid, Spain',
    },
  });

  console.log('✅ Created company:', company.name);

  // Create test jobs
  const jobs = await Promise.all([
    prisma.job.upsert({
      where: { id: 'job1' },
      update: {},
      create: {
        id: 'job1',
        title: 'Senior Full Stack Developer',
        description: 'We are looking for an experienced Full Stack Developer to join our team...',
        requirements: JSON.stringify([
          'Bachelor\'s degree in Computer Science or related field',
          '5+ years of experience in web development',
          'Proficiency in React, Node.js, and TypeScript',
          'Experience with databases (PostgreSQL, MongoDB)',
          'Knowledge of cloud platforms (AWS, GCP, or Azure)',
        ]),
        responsibilities: JSON.stringify([
          'Develop and maintain web applications',
          'Collaborate with cross-functional teams',
          'Write clean, maintainable code',
          'Participate in code reviews',
          'Mentor junior developers',
        ]),
        benefits: 'Competitive salary, health insurance, flexible working hours, professional development budget',
        location: 'Madrid, Spain',
        remoteWork: true,
        salaryMin: 50000,
        salaryMax: 70000,
        salaryCurrency: 'EUR',
        employmentType: 'FULL_TIME',
        experienceLevel: 'SENIOR',
        status: 'ACTIVE',
        companyId: company.id,
        createdBy: 'admin',
        deadline: new Date('2024-12-31'),
      },
    }),
    prisma.job.upsert({
      where: { id: 'job2' },
      update: {},
      create: {
        id: 'job2',
        title: 'Frontend Developer',
        description: 'Join our frontend team to create amazing user experiences...',
        requirements: JSON.stringify([
          '3+ years of frontend development experience',
          'Expert knowledge of React and TypeScript',
          'Experience with modern CSS frameworks',
          'Knowledge of testing frameworks (Jest, Cypress)',
        ]),
        responsibilities: JSON.stringify([
          'Develop responsive user interfaces',
          'Optimize application performance',
          'Collaborate with UX/UI designers',
          'Implement automated tests',
        ]),
        benefits: 'Health insurance, remote work, learning budget',
        location: 'Barcelona, Spain',
        remoteWork: true,
        salaryMin: 35000,
        salaryMax: 50000,
        salaryCurrency: 'EUR',
        employmentType: 'FULL_TIME',
        experienceLevel: 'MID',
        status: 'ACTIVE',
        companyId: company.id,
        createdBy: 'admin',
        deadline: new Date('2025-01-15'),
      },
    }),
    prisma.job.upsert({
      where: { id: 'job3' },
      update: {},
      create: {
        id: 'job3',
        title: 'DevOps Engineer',
        description: 'We need a DevOps Engineer to help us scale our infrastructure...',
        requirements: JSON.stringify([
          '4+ years of DevOps experience',
          'Experience with Docker and Kubernetes',
          'Knowledge of CI/CD pipelines',
          'AWS or GCP certification preferred',
          'Scripting skills (Bash, Python)',
        ]),
        responsibilities: JSON.stringify([
          'Manage cloud infrastructure',
          'Implement CI/CD pipelines',
          'Monitor system performance',
          'Automate deployment processes',
          'Ensure security best practices',
        ]),
        benefits: 'Competitive salary, stock options, professional certifications',
        location: 'Valencia, Spain',
        remoteWork: false,
        salaryMin: 45000,
        salaryMax: 65000,
        salaryCurrency: 'EUR',
        employmentType: 'FULL_TIME',
        experienceLevel: 'SENIOR',
        status: 'DRAFT',
        companyId: company.id,
        createdBy: 'admin',
        deadline: new Date('2024-12-20'),
      },
    }),
  ]);

  console.log('✅ Created jobs:', jobs.map(job => job.title));

  // Create test candidates
  const candidates = await Promise.all([
    prisma.person.upsert({
      where: { email: 'juan.perez@email.com' },
      update: {},
      create: {
        email: 'juan.perez@email.com',
        firstName: 'Juan',
        lastName: 'Pérez',
        phone: '+34 600 123 456',
        linkedinUrl: 'https://linkedin.com/in/juanperez',
        githubUrl: 'https://github.com/juanperez',
        currentTitle: 'Senior Software Developer',
        currentCompany: 'Previous Tech Co.',
        location: 'Madrid, Spain',
        skills: JSON.stringify(['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']),
        experience: JSON.stringify([
          {
            company: 'Previous Tech Co.',
            title: 'Senior Software Developer',
            duration: '2020-2024',
            description: 'Led development of web applications using React and Node.js',
          },
          {
            company: 'Startup Inc.',
            title: 'Full Stack Developer',
            duration: '2018-2020',
            description: 'Developed and maintained multiple web applications',
          },
        ]),
        education: JSON.stringify([
          {
            institution: 'Universidad Politécnica de Madrid',
            degree: 'Computer Science Engineering',
            year: '2018',
          },
        ]),
      },
    }),
    prisma.person.upsert({
      where: { email: 'maria.gonzalez@email.com' },
      update: {},
      create: {
        email: 'maria.gonzalez@email.com',
        firstName: 'María',
        lastName: 'González',
        phone: '+34 600 789 012',
        linkedinUrl: 'https://linkedin.com/in/mariagonzalez',
        currentTitle: 'Frontend Developer',
        currentCompany: 'Design Studio',
        location: 'Barcelona, Spain',
        skills: JSON.stringify(['React', 'Vue.js', 'CSS', 'JavaScript', 'Figma']),
        experience: JSON.stringify([
          {
            company: 'Design Studio',
            title: 'Frontend Developer',
            duration: '2021-2024',
            description: 'Created responsive user interfaces and improved UX',
          },
        ]),
        education: JSON.stringify([
          {
            institution: 'Universidad de Barcelona',
            degree: 'Computer Engineering',
            year: '2021',
          },
        ]),
      },
    }),
    prisma.person.upsert({
      where: { email: 'carlos.rodriguez@email.com' },
      update: {},
      create: {
        email: 'carlos.rodriguez@email.com',
        firstName: 'Carlos',
        lastName: 'Rodríguez',
        phone: '+34 600 345 678',
        githubUrl: 'https://github.com/carlosrodriguez',
        currentTitle: 'DevOps Engineer',
        currentCompany: 'Cloud Solutions Ltd.',
        location: 'Valencia, Spain',
        skills: JSON.stringify(['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Python', 'Linux']),
        experience: JSON.stringify([
          {
            company: 'Cloud Solutions Ltd.',
            title: 'DevOps Engineer',
            duration: '2019-2024',
            description: 'Managed cloud infrastructure and automated deployments',
          },
          {
            company: 'Infrastructure Co.',
            title: 'System Administrator',
            duration: '2017-2019',
            description: 'Maintained servers and network infrastructure',
          },
        ]),
        education: JSON.stringify([
          {
            institution: 'Universidad Politécnica de Valencia',
            degree: 'Systems Engineering',
            year: '2017',
          },
        ]),
      },
    }),
  ]);

  console.log('✅ Created candidates:', candidates.map(c => `${c.firstName} ${c.lastName}`));

  // Create test applications
  const applications = await Promise.all([
    prisma.application.create({
      data: {
        jobId: jobs[0].id, // Senior Full Stack Developer
        candidateId: candidates[0].id, // Juan Pérez
        status: 'UNDER_REVIEW',
        score: 85,
        notes: 'Strong candidate with excellent technical skills. Experience matches requirements perfectly.',
        appliedAt: new Date('2024-10-15'),
      },
    }),
    prisma.application.create({
      data: {
        jobId: jobs[1].id, // Frontend Developer
        candidateId: candidates[1].id, // María González
        status: 'SHORTLISTED',
        score: 78,
        notes: 'Good frontend skills, needs to improve backend knowledge for full-stack roles.',
        appliedAt: new Date('2024-10-20'),
      },
    }),
    prisma.application.create({
      data: {
        jobId: jobs[2].id, // DevOps Engineer
        candidateId: candidates[2].id, // Carlos Rodríguez
        status: 'PENDING',
        score: 92,
        notes: 'Excellent DevOps experience, perfect match for the role.',
        appliedAt: new Date('2024-10-25'),
      },
    }),
  ]);

  console.log('✅ Created applications:', applications.length);

  // Create some sample interviews
  const interviews = await Promise.all([
    prisma.interview.create({
      data: {
        applicationId: applications[0].id,
        candidateId: candidates[0].id,
        type: 'TECHNICAL',
        status: 'COMPLETED',
        scheduledAt: new Date('2024-10-22T10:00:00Z'),
        duration: 90,
        location: 'Video call - Google Meet',
        interviewers: JSON.stringify(['interviewer1', 'interviewer2']),
        feedback: 'Candidate demonstrated strong technical knowledge and problem-solving skills.',
        score: 4,
        notes: 'Recommended to proceed to next round.',
      },
    }),
    prisma.interview.create({
      data: {
        applicationId: applications[1].id,
        candidateId: candidates[1].id,
        type: 'HR',
        status: 'SCHEDULED',
        scheduledAt: new Date('2024-11-15T14:00:00Z'),
        duration: 60,
        location: 'Office - Conference Room A',
        interviewers: JSON.stringify(['hr_manager']),
      },
    }),
  ]);

  console.log('✅ Created interviews:', interviews.length);

  console.log('🎉 Database seeding completed successfully!');
  console.log('\n📊 Summary:');
  console.log(`- Companies: 1`);
  console.log(`- Jobs: ${jobs.length}`);
  console.log(`- Candidates: ${candidates.length}`);
  console.log(`- Applications: ${applications.length}`);
  console.log(`- Interviews: ${interviews.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });