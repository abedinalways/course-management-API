const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

const sampleCourses = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Learn JavaScript from scratch with hands-on examples',
    price: 49.99,
    instructor: 'John Smith',
    category: 'Programming',
    level: 'Beginner',
    duration: '10 hours',
  },
  {
    title: 'React.js Advanced',
    description: 'Master React with hooks, context, and advanced patterns',
    price: 99.99,
    instructor: 'Jane Doe',
    category: 'Web Development',
    level: 'Advanced',
    duration: '20 hours',
  },
  {
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js',
    price: 79.99,
    instructor: 'Mike Johnson',
    category: 'Backend',
    level: 'Intermediate',
    duration: '15 hours',
  },
  {
    title: 'MongoDB Database Design',
    description: 'Learn NoSQL database design and optimization',
    price: 59.99,
    instructor: 'Sarah Wilson',
    category: 'Database',
    level: 'Intermediate',
    duration: '12 hours',
  },
  {
    title: 'Python for Data Science',
    description: 'Analyze data using Python, Pandas, and NumPy',
    price: 89.99,
    instructor: 'David Brown',
    category: 'Data Science',
    level: 'Beginner',
    duration: '18 hours',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('🗑️ Cleared existing courses');

    // Insert sample courses
    const courses = await Course.insertMany(sampleCourses);
    console.log(`✅ Added ${courses.length} sample courses`);

    console.log('\nSample Courses Added:');
    courses.forEach((course, index) => {
      console.log(`${index + 1}. ${course.title} - ${course.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
