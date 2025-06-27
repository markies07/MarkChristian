import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import close from '../assets/close.svg'
import send from '../assets/send.svg'
import loading from '../assets/loading.svg'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Message({onClose}) {

    const [isSending, setIsSending] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace with your actual EmailJS info
        const SERVICE_ID = 'service_yii1sji';
        const TEMPLATE_ID = 'template_tbq0xuh';
        const PUBLIC_KEY = 'JT0EGxZqCSR3-9IIa';

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }, PUBLIC_KEY)
        .then((result) => {
            console.log('Email sent:', result.text);
            toast.success("Message sent!", {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
                theme: "colored", 
            });
            setFormData({ name: '', email: '', message: '' });
            setIsSending(false);
            onClose(); // close modal if you want
        }, (error) => {
            console.error('Error sending email:', error.text);
            setIsSending(false);
            toast.error("Failed to send message.", {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: true,
                theme: "colored",
            });
        });
    };

    return (
        <div className="fixed font-poppins z-50 top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
            <motion.div
            className="fixed z-50 top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            >
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#fafafa] p-5 sm:p-6 max-w-lg w-full h-auto text-center relative shadow-xl"
                >
                    <img src={close} onClick={onClose} className="absolute top-3 right-3 w-8 cursor-pointer p-1 border-2 border-transparent duration-150 hover:border-gray" />

                    {/* FORM */}
                    <form className='pt-5 flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div className='flex flex-col justify-start'>
                            <p className='text-start font-bold text-title'>Name*</p>
                            <input name='name' value={formData.name} onChange={handleChange} required className='border-2 text-black border-black placeholder:text-[#B2B2B2] py-1 px-2' type="text" placeholder='Enter your name...' />
                        </div>

                        <div className='flex flex-col justify-start'>
                            <p className='text-start font-bold text-title'>Email Address*</p>
                            <input name='email' value={formData.email} onChange={handleChange} required className='border-2 text-black border-black placeholder:text-[#B2B2B2] py-1 px-2' type="email" placeholder='Enter your email address...' />
                        </div>

                        <div className='flex flex-col justify-start'>
                            <p className='text-start font-bold text-title'>Message*</p>
                            <textarea name='message' value={formData.message} onChange={handleChange} required className='border-2 h-32 text-black border-black placeholder:text-[#B2B2B2] py-1 px-2' type="text" placeholder='Enter your message...' />
                        </div>

                        <button type='submit' disabled={isSending} className='flex bg-gray hover:brightness-125 duration-200 border-gray cursor-pointer py-2 px-3 gap-2 font-poppins justify-center text-sm text-[#fafafa] font-semibold'>
                            {isSending ? 'SENDING' : 'SEND'}
                            <img className={isSending ? 'w-4 animate-spin' : 'w-3'} src={isSending ? loading : send} alt="" />
                        </button>
                    </form>
                    
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Message