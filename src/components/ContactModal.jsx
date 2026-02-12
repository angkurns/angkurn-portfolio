
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const ContactModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Reset states when opening
            setIsSubmitted(false);
            setErrorMessage('');
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            // Basic validation
            if (!formData.fullName || !formData.email || !formData.message) {
                throw new Error('Please fill in all required fields.');
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address.');
            }

            // Call Supabase Edge Function (Email Only)
            const { error } = await supabase.functions.invoke('contact', {
                body: {
                    full_name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                }
            });

            if (error) {
                throw new Error('Something went wrong. Please try again.');
            }

            setIsSubmitted(true);
            setFormData({ fullName: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-charcoal-dark/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-2xl bg-[#2a2a2a] border border-warm-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-warm-white/30 hover:text-orange-accent hover:bg-warm-white/5 rounded-full transition-all"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-10">
                                    <h2 className="text-3xl md:text-5xl font-bold text-warm-white mb-4">Let’s Talk</h2>
                                    <p className="text-warm-white/60 text-lg leading-relaxed">
                                        If your product involves complexity, edge cases, or unclear logic, I’d love to understand what you’re building.
                                    </p>
                                </div>

                                {errorMessage && (
                                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="text-xs uppercase tracking-widest text-warm-white/40 font-semibold block ml-1">
                                                Full Name <span className="text-orange-accent">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full bg-charcoal-dark/50 border border-warm-white/5 rounded-2xl px-5 py-4 text-warm-white placeholder:text-warm-white/20 focus:outline-none focus:border-orange-accent/50 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-warm-white/40 font-semibold block ml-1">
                                                Email <span className="text-orange-accent">*</span>
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-charcoal-dark/50 border border-warm-white/5 rounded-2xl px-5 py-4 text-warm-white placeholder:text-warm-white/20 focus:outline-none focus:border-orange-accent/50 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs uppercase tracking-widest text-warm-white/40 font-semibold block ml-1">
                                            Mobile Phone <span className="text-warm-white/20">(Optional)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-charcoal-dark/50 border border-warm-white/5 rounded-2xl px-5 py-4 text-warm-white placeholder:text-warm-white/20 focus:outline-none focus:border-orange-accent/50 transition-colors"
                                            placeholder="+62 ..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-warm-white/40 font-semibold block ml-1">
                                            Message <span className="text-orange-accent">*</span>
                                        </label>
                                        <textarea
                                            required
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-charcoal-dark/50 border border-warm-white/5 rounded-2xl px-5 py-4 text-warm-white placeholder:text-warm-white/20 focus:outline-none focus:border-orange-accent/50 transition-colors resize-none"
                                            placeholder="Share a short overview of your product, the complexity you're dealing with, and the outcome you want to reach."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-orange-accent text-charcoal-dark py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 mt-4"
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                className="w-6 h-6 border-2 border-charcoal-dark/30 border-t-charcoal-dark rounded-full"
                                            />
                                        ) : (
                                            'Start the Conversation'
                                        )}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12 md:py-20"
                            >
                                <div className="flex justify-center mb-8">
                                    <div className="w-20 h-20 bg-orange-accent/10 rounded-full flex items-center justify-center text-orange-accent">
                                        <CheckCircle2 size={48} />
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-warm-white mb-6">Message Sent</h2>
                                <p className="text-warm-white/60 text-xl leading-relaxed max-w-md mx-auto">
                                    Thanks. I’ll review your message and get back to you shortly.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-12 text-warm-white/40 hover:text-orange-accent transition-colors underline underline-offset-8 decoration-warm-white/10 hover:decoration-orange-accent/30 font-medium"
                                >
                                    Back to browsing
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
