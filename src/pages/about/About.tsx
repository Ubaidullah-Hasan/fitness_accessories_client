import { motion } from 'framer-motion';
import { Card } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import FAPieChart from '../../components/ReactCharts/FAPieChart';
import CompanyBulletPoint from '../../components/CompanyBulletPoint';
import personImage from "../../assets/p1.png"

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        bio: 'John has over 10 years of experience in leadership and management.',
        image: personImage
    },
    {
        name: 'Jane Smith',
        role: 'CTO',
        bio: 'Jane is a tech enthusiast with a passion for innovation.',
        image: personImage
    },
    {
        name: 'Polok Smith',
        role: 'CO',
        bio: 'Jane is a tech enthusiast with a passion for innovation.',
        image: personImage
    }
];

const testimonials = [
    {
        name: 'Alice Brown',
        message: 'This company is amazing! Their services exceeded my expectations.'
    },
    {
        name: 'Michael Green',
        message: 'A reliable and professional team. I highly recommend them.'
    }
];


const About = () => {
    return (
        <div className="min-h-screen p-8">
            {/* Company Overview */}
            <div className=''>
                <motion.div
                    className="mb-16 "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-5">About Us</h1>
                    <div className='flex justify-between gap-20'>
                        <div className='flex-2'>
                            <p className="text-lg mb-5">
                                We started with a mission to deliver the best quality service. Our vision is to make the world a better place through innovation.We started with a mission to deliver the best quality service. Our vision is to make the world a better place through innovation.
                            </p>
                            <CompanyBulletPoint />
                        </div>
                        <div className='flex-1 text-end border'>
                            <FAPieChart />
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                                <div className="space-y-4 text-lg">
                                    <p><MailOutlined /> Email: contact@company.com</p>
                                    <p><PhoneOutlined /> Phone: +123 456 7890</p>
                                    <p><EnvironmentOutlined /> Address: 123 Main St, City, Country</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Team Introduction */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold mb-20 text-center">Meet Our Team</h2>
                <div className="flex justify-center space-x-8">
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={member.name} src={member.image} />}
                                className='bg-gradient-to-b from-[#FCE10E]  to-[#FAF4A7]'
                            >
                                <Meta title={member.name} description={member.role} />
                                <p className="mt-2 text-stone-800">{member.bio}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Customer Testimonials */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold mb-20 text-center">What Our Customers Say</h2>
                <div className="flex justify-center space-x-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <Card style={{ width: 300 }}>
                                <p>"{testimonial.message}"</p>
                                <p className="mt-4 text-right">- {testimonial.name}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;