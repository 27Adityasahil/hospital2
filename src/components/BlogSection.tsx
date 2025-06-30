import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogs = [
    {
      title: 'Heart Health: Prevention and Early Detection',
      excerpt: 'Learn about the importance of cardiovascular health and how to maintain a healthy heart through lifestyle changes and regular check-ups.',
      image: 'https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 15, 2024',
      author: 'Dr. Rajesh Kumar',
      category: 'Cardiology'
    },
    {
      title: 'Mental Health Awareness: Breaking the Stigma',
      excerpt: 'Understanding mental health issues and the importance of seeking professional help when needed. Learn about our mental health services.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 10, 2024',
      author: 'Dr. Priya Sharma',
      category: 'Mental Health'
    },
    {
      title: 'Pediatric Care: Keeping Children Healthy',
      excerpt: 'Essential tips for parents on maintaining their children\'s health, vaccination schedules, and when to seek medical attention.',
      image: 'https://images.pexels.com/photos/7089390/pexels-photo-7089390.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 5, 2024',
      author: 'Dr. Sunita Verma',
      category: 'Pediatrics'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OUR LATEST BLOGS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice from our medical experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{blog.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Blogs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;