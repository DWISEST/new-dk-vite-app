import React, { useState } from 'react';
import type { Product } from '../../types';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';

interface ProductManagementProps {
  products: Product[];
  onAdd: (product: Product) => void;
  onUpdate: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const EMPTY_PRODUCT: Product = {
    id: '',
    name: '',
    brand: '',
    category: 'Routers',
    description: '',
    features: [],
    imageUrl: '',
};

const ProductForm: React.FC<{
    product: Product;
    onSave: (product: Product) => void;
    onCancel: () => void;
}> = ({ product, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Product>(product);
    const [featuresStr, setFeaturesStr] = useState(product.features.join('\n'));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'features') {
            setFeaturesStr(value);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalProduct: Product = {
            ...formData,
            id: formData.id || `prod_${Date.now()}`,
            features: featuresStr.split('\n').filter(f => f.trim() !== ''),
        };
        onSave(finalProduct);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-slate-300">Product Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-300">Brand</label>
                    <Input name="brand" value={formData.brand} onChange={handleChange} required />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-slate-300">Category</label>
                    <Select name="category" value={formData.category} onChange={handleChange}>
                        <option>Routers</option>
                        <option>Access Points</option>
                        <option>CCTV</option>
                    </Select>
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-300">Image URL</label>
                    <Input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://..." />
                </div>
            </div>
            <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea name="description" value={formData.description} onChange={handleTextareaChange} rows={3} required />
            </div>
            <div>
                <label className="text-sm font-medium text-slate-300">Features (one per line)</label>
                <Textarea name="features" value={featuresStr} onChange={handleTextareaChange} rows={5} required />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
                <Button type="submit" variant="primary">Save Product</Button>
            </div>
        </form>
    );
};

const ProductManagement: React.FC<ProductManagementProps> = ({ products, onAdd, onUpdate, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);
    const [productToDelete, setProductToDelete] = useState<Product | null>(null);

    const handleAddNew = () => {
        setProductToEdit(EMPTY_PRODUCT);
        setIsModalOpen(true);
    };

    const handleEdit = (product: Product) => {
        setProductToEdit(product);
        setIsModalOpen(true);
    };

    const handleSave = (product: Product) => {
        if (productToEdit && productToEdit.id) {
            onUpdate(product);
        } else {
            onAdd(product);
        }
        closeModal();
    };

    const handleDeleteConfirm = () => {
        if (productToDelete) {
            onDelete(productToDelete.id);
            setProductToDelete(null);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setProductToEdit(null);
    };

    return (
        <Card className="bg-slate-800/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Manage Products</h2>
                <Button onClick={handleAddNew}>Add New Product</Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Brand</th>
                            <th scope="col" className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b border-slate-700 hover:bg-slate-800/30">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{product.name}</th>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.brand}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button onClick={() => handleEdit(product)} className="font-medium text-primary hover:underline">Edit</button>
                                    <button onClick={() => setProductToDelete(product)} className="font-medium text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && productToEdit && (
                <Modal isOpen={isModalOpen} onClose={closeModal} title={productToEdit.id ? 'Edit Product' : 'Add New Product'}>
                    <ProductForm product={productToEdit} onSave={handleSave} onCancel={closeModal} />
                </Modal>
            )}

            {productToDelete && (
                 <Modal isOpen={!!productToDelete} onClose={() => setProductToDelete(null)} title="Confirm Deletion">
                    <p>Are you sure you want to delete the product: <strong className="font-bold text-white">{productToDelete.name}</strong>? This action cannot be undone.</p>
                    <div className="flex justify-end space-x-3 mt-6">
                        <Button variant="outline" onClick={() => setProductToDelete(null)}>Cancel</Button>
                        <Button variant="secondary" className="bg-red-600 hover:bg-red-700" onClick={handleDeleteConfirm}>Delete</Button>
                    </div>
                </Modal>
            )}
        </Card>
    );
};

export default ProductManagement;
