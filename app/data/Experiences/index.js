import moment from 'moment';

const positions = [
  {
    company: 'Progress Digital (formerly ForeSite Technologies)',
    location: 'East Hartford, CT',
    title: 'Design & Development Intern',
    startDate: moment('2011-10-01'),
    endDate: moment('2014-04-01'),
    description: [
      'Assisted on the design for a diverse range of client and internal projects (e.g., websites, business cards, etc.) by participating in design reviews, and creating digital mockups and interactive prototypes.',
      [
        'Advocated for the user experience of client projects, beyond just the business needs of the client.',
      ],
      'Contributed to the implementation of several Drupal 6 and WordPress client websites (both front-end and back-end) using HTML, CSS, JavaScript, jQuery, PHP, and MySQL.',
      'Identified bugs on client websites during testing, and either fixed the issues or reported them to other developers.',
      'Launched multiple client websites hosted on Amazon Web Services that were ready for production.',
    ],
  },
  {
    company: 'Diebold',
    location: 'North Canton, OH',
    title: 'Computer Science Co-Op',
    startDate: moment('2012-05-01'),
    endDate: moment('2012-08-01'),
    description: [
      'Developed a core feature of an ATM Configuration Editor to efficiently import/export XML states and screens using C#, C++, and C.',
      [
        'Eliminated the need for field workers to manually perform this task by automating the process, saving field workers at least 2.5 hours of work.',
      ],
    ],
  },
  {
    company: 'University of Hartford',
    location: 'West Hartford, CT',
    title: 'Undergraduate Research Assistant',
    startDate: moment('2012-09-01'),
    endDate: moment('2015-08-01'),
    description: [
      'Designed and developed a web application to promote collaborative, asynchronous discussion of video content by incorporating a discussion space next to and within video lectures.',
      [
        'Implemented using HTML5, CSS3, JavaScript, jQuery, PHP, and MySQL.'
      ],
      'Empirically evaluated the system in several classes utilizing both quantitative log analysis and qualitative interviews.',
      'Created the infrastructure for analytics reporting and A/B testing in object-oriented PHP and JavaScript.',
      'Contributed to the design and development of several analytical reports used by instructors to monitor learners’ behaviors.',
      'Assisted with the writing of a successfully funded National Science Foundation grant (IIS-1318345: $448,698.00).',
    ],
  },
  {
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    title: 'Ph.D. Student',
    startDate: moment('2015-08-01'),
    endDate: moment('2017-07-01'),
    description: [
      'Developed a browser-based conversational turn detector for video conversations (i.e., Google Hangouts) using Python and JavaScript.',
      [
        'Wrote several Python and R scripts to analyze and visualize the conversational turn-taking data from 392 discussion groups consisting of 1,027 users (approximately 800,000 reported turns).',
        'Created a metric to measure and analyze dominant behavior in multi-party video conversations using the turn-taking data.',
      ],
      'Planned and carried out several experiments utilizing Amazon Mechanical Turk to learn about user behavior in giving advice to peers.',
      'Designed a prototype of an embeddable JavaScript library to enable peer-to-peer advice giving and receiving on third-party websites.',
    ],
  },
  {
    company: 'Ground Signal',
    location: 'Boston, MA',
    title: 'Software Engineer',
    startDate: moment('2017-07-01'),
    endDate: moment('2018-01-01'),
    description: [
      'Created several core, reusable, and configurable Ractive.js components used throughout the web application.',
      'Rebuilt homepage of web application with fuzzy search functionality, working closely with UX designer and product manager.',
      'Developed robust filtering tools for venues, including the ability to select categories, neighborhoods, etc.',
      'Added support for exporting/downloading venues data to CSV directly from the web application in the browser.',
      'Created worker scripts that run periodically to make sure audiences and profiles stay up to date as new data is fetched from Instagram.',
    ],
  },
  {
    company: 'edX',
    location: 'Cambridge, MA',
    title: 'Software Engineer',
    startDate: moment('2018-01-01'),
    description: [],
  },
  {
    company: 'Carbonite',
    location: 'Boston, MA',
    title: 'Web Engineer Intern',
    startDate: moment('2013-05-01'),
    endDate: moment('2013-08-01'),
    description: [
      'Redesigned the user interface and added new features to an internal web application used by the Quality Assurance team to create and configure test accounts with specific parameters (e.g., type of user account).',
      'Added new functionality and fixed bugs on the user interface of consumer-facing products, while coordinating with UX designers.',
      'Led the biweekly code release for the Web team for Carbonite’s 1.5 million customers using the Jenkins continuous integration service.',
    ],
  },
  {
    company: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    title: 'Visiting Undergraduate Researcher',
    startDate: moment('2014-06-01'),
    endDate: moment('2014-07-01'),
    description: [
      'Developed an algorithm for detecting conversational engagement with virtual agents using real-time gaze data from eye tracker.',
      [
        'Implemented the algorithm using C# into a program for demonstration purposes.',
      ],
    ],
  }
];

export default positions;
