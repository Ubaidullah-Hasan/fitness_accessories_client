import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const MainFooter = () => {
    return (
        <Footer style={{ textAlign: 'center', padding: '50px 20px 0px', background: '#001529', color: '#fff' }}>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                    <h3 className='text-xl mb-4'>Contact Information</h3>
                    <p><MailOutlined /> email@example.com</p>
                    <p><PhoneOutlined /> +123 456 7890</p>
                </Col>
                <Col xs={24} md={8}>
                    <h3 className='text-xl mb-4'>Follow Us</h3>
                    <div>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
                            <FacebookOutlined />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
                            <TwitterOutlined />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 10px' }}>
                            <InstagramOutlined />
                        </a>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <h3 className='text-xl mb-4'>Relevant Links</h3>
                    <p><a href="/about" style={{ color: '#fff' }}>About Us</a></p>
                    <p><a href="/privacy" style={{ color: '#fff' }}>Privacy Policy</a></p>
                    <p><a href="/terms" style={{ color: '#fff' }}>Terms of Service</a></p>
                </Col>
            </Row>
            <div style={{ marginTop: '20px'}} className='border-t py-5'>
                Ant Design ©{new Date().getFullYear()} Created by GYMIX
            </div>
        </Footer>
    );
};

export default MainFooter;
