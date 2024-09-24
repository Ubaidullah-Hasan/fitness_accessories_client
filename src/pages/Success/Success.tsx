import { Button, Result } from 'antd';

const Success = () => {
    return (
        <div className='h-[calc(100vh-200px)] flex justify-center items-center'>
            <Result
                status="success"
                title="Successfully Purchased!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Button href='/' type="primary" key="console">
                        Go Home
                    </Button>,
                    <Button href='/products' key="buy">Buy Again</Button>,
                ]}
            />
        </div>
    );
};

export default Success;