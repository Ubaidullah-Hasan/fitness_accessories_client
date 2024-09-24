/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Row, Col, notification } from 'antd';
import SectionTitle from '../../components/SectionTitle';
import CheckOutCart from '../../components/CheckOutCart';
import { TCartItem } from '../../types';
import { paymentApi } from '../../redux/features/payment/paymentApi';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const cartsInfo = JSON.parse(localStorage.getItem('carts') || "{}");
    const carts = (cartsInfo?.carts);
    const [createPayment, { isSuccess: orderSuccessfull }] = paymentApi.useCreatePaymentMutation();

    const onFinish = async(values: any) => {
        
        const paymentInfo = {
            productId: carts?.map((cart: TCartItem) => ({
                id: cart.productId._id,
                quantaty: cart.quantity
            })),
            name: values.name,
            email: values.email,
            phone: values.phone,
            address: values.address,
            totalPrice: cartsInfo?.total,
        }
        const res = await createPayment(paymentInfo);console.log(res)
        if (res.data.error) {
            notification.error({
                message: res.data.error,
                placement: "top",
            })
        }else{
            navigate("/checkout/success");
            localStorage.setItem("carts", "null");
        }
        console.log(orderSuccessfull)
    }; 

    return (
        <div className='py-[40px]'>
            <SectionTitle title='Checkout' className='mb-[40px]' />
            <div className='px-5'>
                <Row gutter={30}>
                    <Col span={8}>
                        {carts?.map((item: TCartItem) => (
                            <CheckOutCart key={item?._id} cart={item} />
                        ))}

                        <div className="w-full rounded-lg border bg-white p-6 shadow-md">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700 font-bold">{cartsInfo?.total} ৳</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700 font-bold">0 ৳</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between ">
                                <p className="text-lg font-bold">Total</p>
                                <div className='text-end'>
                                    <p className="text-gray-700 font-bold">{cartsInfo?.total} ৳</p>
                                    <p className="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                        </div>


                    </Col>
                    <Col span={16}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{ remember: true }}
                            className='border p-5'
                        >
                            <Row gutter={20}>
                                <Col span={12}>
                                    {/* Name Field */}
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{ required: true, message: 'Please enter your name' }]}
                                    >
                                        <Input placeholder="Enter your name" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    {/* Email Field */}
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please enter your email' },
                                            { type: 'email', message: 'Please enter a valid email' },
                                        ]}
                                    >
                                        <Input placeholder="Enter your email" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={20}>
                                <Col span={12}>
                                    {/* Phone Number Field */}
                                    <Form.Item
                                        label="Phone Number"
                                        name="phone"
                                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                                    >
                                        <Input placeholder="Enter your phone number" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    {/* Delivery Address Field */}
                                    <Form.Item
                                        label="Delivery Address"
                                        name="address"
                                        rules={[{ required: true, message: 'Please enter your address' }]}
                                    >
                                        <Input placeholder="Enter your delivery address" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <Form.Item className='text-center '>
                                <Button block type="primary" htmlType="submit">
                                    Place Order
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div >

        </div >
    );
};

export default CheckOut;