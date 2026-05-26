import aiToolsImage from '../assets/ai_tools_course.png';
import pythonImage from '../assets/python_course.png';
import fullStackImage from '../assets/full_stack_web_dev.png';
import reactImage from '../assets/recat_course.png';

export const coursesData = {
  'ai-tools': {
    id: 'ai-tools',
    title: 'AI Tools Mastery',
    icon: '🤖',
    image: aiToolsImage,
    shortDescription: 'Master the latest AI tools and transform your productivity',
    description: 'Learn to leverage cutting-edge AI tools to boost productivity, automate workflows, and stay competitive in the AI-driven future.',
    duration: '8-12 weeks',
    level: 'Beginner to Advanced',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tracks: [
      {
        name: 'Student Track',
        duration: '12 Weeks',
        price: '₹4,999',
        features: [
          'Introduction to AI & Its Impact',
          'ChatGPT & Advanced Prompting',
          'AI Image Generation (Midjourney, DALL-E)',
          'AI Coding Assistants',
          'AI for Research & Learning',
          'AI Video & Audio Tools',
          'AI Productivity & Automation',
          'AI for Design & Creativity',
          'AI for Career Development',
          'Capstone Project'
        ]
      },
      {
        name: 'Professional Track',
        duration: '8 Weeks',
        price: '₹9,999',
        popular: true,
        features: [
          'AI Strategy for Professionals',
          'Advanced ChatGPT & LLM Mastery',
          'AI-Powered Productivity Suite',
          'AI for Business Intelligence',
          'AI Development & Coding Tools',
          'AI Marketing & Content Creation',
          'AI Workflow Automation',
          'AI for Sales & Customer Success',
          'AI for HR & Team Management',
          'AI Security & Compliance',
          'Industry-Specific Applications',
          'AI Transformation Project'
        ]
      }
    ],
    tools: ['ChatGPT', 'Midjourney', 'GitHub Copilot', 'DALL-E', 'Notion AI', 'Runway ML', 'Claude', 'Zapier', 'Perplexity', 'ElevenLabs'],
    highlights: [
      'Hands-on Projects',
      'Lifetime Access',
      'Certificate of Completion',
      'Community Support',
      'Weekly Live Sessions',
      'Resource Library'
    ]
  },
  'python': {
    id: 'python',
    title: 'Python Programming',
    icon: '🐍',
    image: pythonImage,
    shortDescription: 'Master Python from basics to advanced concepts',
    description: 'Learn Python programming from scratch and build real-world applications. Perfect for beginners and those looking to strengthen their programming foundation.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tracks: [
      {
        name: 'Complete Python',
        duration: '10 Weeks',
        price: '₹5,999',
        features: [
          'Python Fundamentals',
          'Data Structures & Algorithms',
          'Object-Oriented Programming',
          'File Handling & Database',
          'Web Scraping',
          'API Development with Flask/FastAPI',
          'Data Analysis with Pandas',
          'Automation Scripts',
          'Testing & Debugging',
          'Final Project'
        ]
      }
    ],
    tools: ['Python', 'VS Code', 'Jupyter Notebook', 'Git', 'Flask', 'FastAPI', 'Pandas', 'NumPy'],
    highlights: [
      '50+ Coding Exercises',
      'Real-world Projects',
      'Interview Preparation',
      'Code Review Sessions',
      'Lifetime Access',
      'Certificate'
    ]
  },
  'fullstack': {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    icon: '💻',
    image: fullStackImage,
    shortDescription: 'Build complete web applications from frontend to backend',
    description: 'Master the complete web development stack including frontend, backend, databases, and deployment. Build production-ready applications.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tracks: [
      {
        name: 'MERN Stack',
        duration: '16 Weeks',
        price: '₹12,999',
        popular: true,
        features: [
          'HTML, CSS, JavaScript Mastery',
          'React.js & Modern Frontend',
          'Node.js & Express.js',
          'MongoDB & Database Design',
          'RESTful API Development',
          'Authentication & Authorization',
          'State Management (Redux)',
          'Deployment & DevOps',
          'Testing & Best Practices',
          'Capstone Project'
        ]
      }
    ],
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Docker', 'AWS', 'Postman'],
    highlights: [
      '5+ Full Stack Projects',
      'Portfolio Website',
      'Job-Ready Skills',
      'Interview Preparation',
      'Lifetime Access',
      'Industry Certificate'
    ]
  },
  'react': {
    id: 'react',
    title: 'React Development',
    icon: '⚛️',
    image: reactImage,
    shortDescription: 'Master modern React and build dynamic web applications',
    description: 'Deep dive into React ecosystem including hooks, context, routing, state management, and modern best practices. Build scalable applications.',
    duration: '8 weeks',
    level: 'Intermediate',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tracks: [
      {
        name: 'React Mastery',
        duration: '8 Weeks',
        price: '₹6,999',
        features: [
          'React Fundamentals',
          'Hooks & Custom Hooks',
          'Context API & State Management',
          'React Router',
          'Redux Toolkit',
          'API Integration',
          'Performance Optimization',
          'Testing with Jest & RTL',
          'Next.js Basics',
          'Production Deployment'
        ]
      }
    ],
    tools: ['React', 'Redux', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Jest'],
    highlights: [
      '10+ React Projects',
      'Modern Best Practices',
      'Performance Optimization',
      'Real-world Patterns',
      'Lifetime Access',
      'Certificate'
    ]
  }
};

export const getCourseById = (id) => coursesData[id];

export const getAllCourses = () => Object.values(coursesData);

// Made with Bob
