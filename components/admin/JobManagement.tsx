import React, { useState } from 'react';
import type { Job } from '../../types';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';

interface JobManagementProps {
  jobs: Job[];
  onAdd: (job: Job) => void;
  onUpdate: (job: Job) => void;
  onDelete: (jobId: string) => void;
}

const EMPTY_JOB: Job = {
    id: '',
    title: '',
    department: '',
    location: 'Serekunda',
    type: 'Full-time',
    description: '',
    responsibilities: [],
    qualifications: [],
};

const JobForm: React.FC<{
    job: Job;
    onSave: (job: Job) => void;
    onCancel: () => void;
}> = ({ job, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Job>(job);
    const [responsibilitiesStr, setResponsibilitiesStr] = useState(job.responsibilities.join('\n'));
    const [qualificationsStr, setQualificationsStr] = useState(job.qualifications.join('\n'));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'responsibilities') setResponsibilitiesStr(value);
        else if (name === 'qualifications') setQualificationsStr(value);
        else handleChange(e);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalJob: Job = {
            ...formData,
            id: formData.id || `job_${Date.now()}`,
            responsibilities: responsibilitiesStr.split('\n').filter(f => f.trim() !== ''),
            qualifications: qualificationsStr.split('\n').filter(f => f.trim() !== ''),
        };
        onSave(finalJob);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-slate-300">Job Title</label>
                    <Input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-300">Department</label>
                    <Input name="department" value={formData.department} onChange={handleChange} required />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-slate-300">Location</label>
                    <Select name="location" value={formData.location} onChange={handleChange}>
                        <option>Serekunda</option>
                        <option>Brikama</option>
                        <option>Remote</option>
                    </Select>
                </div>
                 <div>
                    <label className="text-sm font-medium text-slate-300">Job Type</label>
                    <Select name="type" value={formData.type} onChange={handleChange}>
                        <option>Full-time</option>
                        <option>Contract</option>
                    </Select>
                </div>
            </div>
            <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea name="description" value={formData.description} onChange={handleChange} rows={3} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="text-sm font-medium text-slate-300">Responsibilities (one per line)</label>
                    <Textarea name="responsibilities" value={responsibilitiesStr} onChange={handleTextareaChange} rows={5} required />
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-300">Qualifications (one per line)</label>
                    <Textarea name="qualifications" value={qualificationsStr} onChange={handleTextareaChange} rows={5} required />
                </div>
            </div>
           
            <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
                <Button type="submit" variant="primary">Save Job</Button>
            </div>
        </form>
    );
};

const JobManagement: React.FC<JobManagementProps> = ({ jobs, onAdd, onUpdate, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobToEdit, setJobToEdit] = useState<Job | null>(null);
    const [jobToDelete, setJobToDelete] = useState<Job | null>(null);

    const handleAddNew = () => {
        setJobToEdit(EMPTY_JOB);
        setIsModalOpen(true);
    };

    const handleEdit = (job: Job) => {
        setJobToEdit(job);
        setIsModalOpen(true);
    };

    const handleSave = (job: Job) => {
        if (jobToEdit && jobToEdit.id) {
            onUpdate(job);
        } else {
            onAdd(job);
        }
        closeModal();
    };

    const handleDeleteConfirm = () => {
        if (jobToDelete) {
            onDelete(jobToDelete.id);
            setJobToDelete(null);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setJobToEdit(null);
    };

    return (
        <Card className="bg-slate-800/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Manage Careers</h2>
                <Button onClick={handleAddNew}>Post New Job</Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-400">
                    <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Department</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id} className="border-b border-slate-700 hover:bg-slate-800/30">
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">{job.title}</th>
                                <td className="px-6 py-4">{job.department}</td>
                                <td className="px-6 py-4">{job.location}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <button onClick={() => handleEdit(job)} className="font-medium text-primary hover:underline">Edit</button>
                                    <button onClick={() => setJobToDelete(job)} className="font-medium text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && jobToEdit && (
                <Modal isOpen={isModalOpen} onClose={closeModal} title={jobToEdit.id ? 'Edit Job' : 'Post New Job'}>
                    <JobForm job={jobToEdit} onSave={handleSave} onCancel={closeModal} />
                </Modal>
            )}

            {jobToDelete && (
                 <Modal isOpen={!!jobToDelete} onClose={() => setJobToDelete(null)} title="Confirm Deletion">
                    <p>Are you sure you want to delete the job posting: <strong className="font-bold text-white">{jobToDelete.title}</strong>? This action cannot be undone.</p>
                    <div className="flex justify-end space-x-3 mt-6">
                        <Button variant="outline" onClick={() => setJobToDelete(null)}>Cancel</Button>
                        <Button variant="secondary" className="bg-red-600 hover:bg-red-700" onClick={handleDeleteConfirm}>Delete</Button>
                    </div>
                </Modal>
            )}
        </Card>
    );
};

export default JobManagement;
