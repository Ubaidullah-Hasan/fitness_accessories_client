import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const benefits = [
    {
        title: 'High-Quality Materials',
        description: 'Our products are made from the best materials, ensuring durability and comfort.',
        image: '/images/quality.png',
    },
    {
        title: 'Affordable Prices',
        description: 'We offer the best prices in the market without compromising on quality.',
        image: '/images/affordable.png',
    },
    {
        title: 'Fast Shipping',
        description: 'Get your products delivered to your doorstep quickly and efficiently.',
        image: '/images/shipping.png',
    },
];

const BenefitsSection = () => { // todo
    return (
        <div className='section' style={{ padding: '50px 0' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Benefits of Our Products</Title>
            <Row gutter={[24, 24]} justify="center" className='px-4'>
                {benefits.map((benefit, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <Card
                            cover={<img alt={benefit.title} src={"https://i.ibb.co/tQK5wtt/Kettlebells.jpg"} />}
                            bordered={false}
                        >
                            <Title level={4}>{benefit.title}</Title>
                            <Paragraph>{benefit.description}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BenefitsSection;
