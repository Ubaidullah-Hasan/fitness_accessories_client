/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, message, Popconfirm, Select } from 'antd';
import { useCreateProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from '../../redux/features/products/productsApi';
import { IoMdAdd } from 'react-icons/io';
import { useGetAllCategoriesQuery } from '../../redux/features/categories/categoriesApi';
import { TProduct } from '../../types';


const ProductsManagement = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState<null | TProduct>(null);


    const { data: categories } = useGetAllCategoriesQuery(undefined);
    const { data: products, isLoading: productsLoading } = useGetAllProductsQuery();

    const [createProduct, { isLoading: creatingProduct }] = useCreateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();


    const categoryOptions = categories?.map(category => ({
        value: category?._id,
        label: category?.categoriName
    }))


    const productsOptions = products?.map((p: {
        _id: any; name: any; price: any; categoryId: {
            _id: any; categoriName: any;
        }; stock: any; image: any; description: any; brand: any;
    }) => ({
        key: p?._id,
        name: p?.name,
        price: p?.price,
        category: p?.categoryId?.categoriName,
        stock: p?.stock,
        image: p?.image,
        description: p?.description,
        brand: p?.brand,
        categoryId: p?.categoryId?._id
    }))

    // Columns for the product table
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => `$${price}`,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record: any) => (
                <>
                    <Button type="link" onClick={() => showUpdateModal(record)}>Update</Button>
                    <Popconfirm
                        title="Are you sure you want to delete this product?"
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" danger>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    // Show modal for adding or updating product
    const showModal = () => {
        setIsModalVisible(true);
    };

    const showUpdateModal = (product: any) => {
        setEditingProduct({ ...product, categoryId: product.categoryId });
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setEditingProduct(null);
        window.location.reload();
    };


    // Submit form for adding or updating product
    const onFinish = async (values: any) => {
        if (editingProduct) {
            const updatedData = { id: editingProduct.key, payload: values }
            updateProduct(updatedData);
            window.location.reload();
        } else {
            const res = await createProduct(values);
            if (res.data) {
                message.success('Product added successfully!');
                window.location.reload();
            }
            if (res.error) {
                message.error('Something went wrong!');
            }
        }
        setIsModalVisible(false);
        setEditingProduct(null);
    };

    // Handle deleting a product
    const handleDelete = (id: string) => {
        deleteProduct(id);
    };

    return (
        <div className='py-20 px-5'>
            <div className='flex justify-between items-center mb-8'>
                <h1 className=''>Product Management</h1>
                <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }} icon={<IoMdAdd />}>
                    Add New Product
                </Button>
            </div>
            <Table dataSource={productsOptions} columns={columns} rowKey="id" loading={productsLoading} />

            {/* Add/Update Product Modal */}
            <Modal
                title={editingProduct ? 'Update Product' : 'Add Product'}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={editingProduct || { name: '', price: 0, description: '', category: '', stock: 0 }}
                >
                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter product name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="categoryId"
                        rules={[{ required: true, message: 'Please enter product category' }]}
                    >
                        <Select
                            // onChange={handleChange}
                            options={categoryOptions}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Brand"
                        name="brand"
                        rules={[{ required: true, message: 'Please enter brand name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please enter product price' }]}

                    >
                        <InputNumber className='w-full' min={0} />
                    </Form.Item>


                    <Form.Item
                        label="Stock"
                        name="stock"
                        rules={[{ required: true, message: 'Please enter product stock' }]}
                    >
                        <InputNumber className='w-full' min={0} />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="image"
                        rules={[{ required: true, message: 'Please enter image url' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Description" name="description">
                        <Input.TextArea rows={3} />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" loading={creatingProduct || updating}>
                        {editingProduct ? 'Update' : 'Add'} Product
                    </Button>
                </Form>
            </Modal>
        </div>
    );
};

export default ProductsManagement;