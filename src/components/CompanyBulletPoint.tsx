import { Card, List } from 'antd';
import React from 'react';

const companyBenefits = [
    {
        title: 'Innovative Solutions',
        description: 'Providing cutting-edge solutions that meet modern business challenges.',
    },
    {
        title: 'Customer-Centric Approach',
        description: 'Our company places the customer at the heart of everything we do.',
    },
    {
        title: 'Sustainable Practices',
        description: 'Committed to eco-friendly practices in every aspect of operations.',
    },
    {
        title: 'Diverse Expertise',
        description: 'Experts from various industries bring a wealth of experience to every project.',
    },
    {
        title: 'Tailored Services',
        description: 'Customized services that adapt to the unique needs of each client.',
    },
    {
        title: 'Continuous Improvement',
        description: 'We constantly evolve with innovation and technology to stay ahead.',
    }
];


const CompanyBulletPoint = () => {

    
    return (
        <div className='py-4'>
            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={companyBenefits}
                renderItem={(item) => (
                    <List.Item className='shadow-md'>
                        <Card title={item.title} bordered={false}>
                            {item.description}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CompanyBulletPoint;