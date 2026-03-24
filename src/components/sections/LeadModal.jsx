"use client";

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { X, Loader2, LineChart, BellRing } from 'lucide-react';
import Link from 'next/link';

const LeadModal = ({ data, isOpen, onClose }) => {
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState("");

    const validationSchema = Yup.object({
        fullName: Yup.string().min(2, 'Too short').required('Required'),
        email: Yup.string().email("Invalid email").required("Required"),
        phoneNumber: Yup.string().min(10, 'Too short').required('Required'),
        message: Yup.string().min(10, "Please add a short message").required("Required"),
    });

    const formik = useFormik({
        initialValues: { fullName: '', email: '', phoneNumber: '', message: '' },
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitError("");
            setSubmitSuccess("");
            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        name: values.fullName,
                        email: values.email,
                        phone: values.phoneNumber,
                        message: values.message,
                    }),
                });
                const json = await res.json();
                if (!res.ok || !json?.ok) {
                    throw new Error(json?.message || "Failed to submit form.");
                }
                setSubmitSuccess("Thanks! Your message has been sent successfully.");
                formik.resetForm();
            } catch (err) {
                setSubmitError(err?.message || "Something went wrong. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    if (!isOpen) return null;

    return (
        <div onClick={(e) => {
            // Only close when clicking on the backdrop, not inside the modal card
            if (e.target === e.currentTarget) {
                onClose();
            }
        }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 font-lexend">
            {/* Added overflow-y-auto and max-height for mobile */}
            <div className="relative w-full max-w-4xl max-h-[82vh] overflow-y-auto rounded-[1.25rem] md:rounded-[2rem] bg-white shadow-2xl flex flex-col md:flex-row">

                <button onClick={onClose} className="absolute right-4 top-4 md:right-6 md:top-6 z-20 text-slate-400 hover:text-slate-600 cursor-pointer bg-white rounded-full p-1 shadow-sm">
                    <X size={20} />
                </button>

                {/* Left Side: Branding */}
                <div className="w-full md:w-[40%] bg-[#f8fafc] p-5 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-sans font-[700] leading-[32px] text-slate-900">{data.promoTitle}</h3>
                    <p className="mt-2 md:mt-3 font-sans font-[500] leading-[26px] text-[15px] text-slate-500">{data.promoText}</p>

                    <div className="mt-5 md:mt-6 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                            <Link
                                href="#services"
                                className="inline-flex items-center justify-center gap-2 rounded-xl btn-gradient px-4 py-2.5 text-[12px] md:text-[13px] font-black uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <LineChart className="h-4 w-4 md:h-5 md:w-5" />
                                Start Trading
                            </Link>
                            <Link
                                href="#lead-form"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[12px] md:text-[13px] font-black uppercase tracking-[0.12em] text-[var(--brand)] ring-2 ring-[var(--brand)]/25 shadow-sm transition-all duration-300 hover:text-[var(--accent)] hover:ring-[var(--accent)]/35 hover:-translate-y-0.5 active:scale-[0.98]"
                            >
                                <BellRing className="h-4 w-4 md:h-5 md:w-5" />
                                Get Signals
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-[60%] p-5 md:p-8 bg-white">
                    <h2 className="text-2xl md:text-[38px] font-bold text-slate-900 font-sans font-[700] leading-[1.2]">{data.formTitle}</h2>
                    <p className="mt-1 md:mt-2 font-sans font-[500] leading-[25px] text-[15px] text-slate-500">{data.formSubtitle}</p>

                    <form className="mt-5 md:mt-6 space-y-3 md:space-y-4" onSubmit={formik.handleSubmit}>
                        {submitError ? (
                            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                {submitError}
                            </div>
                        ) : null}
                        {submitSuccess ? (
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                {submitSuccess}
                            </div>
                        ) : null}
                        <div>
                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                            <input
                                name="fullName"
                                {...formik.getFieldProps('fullName')}
                                placeholder="John Doe"
                                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-[var(--brand)]'}`}
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5">Email</label>
                            <input
                                name="email"
                                type="email"
                                {...formik.getFieldProps('email')}
                                placeholder="you@example.com"
                                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${formik.touched.email && formik.errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-[var(--brand)]'}`}
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5">Phone Number</label>
                            <input
                                name="phoneNumber"
                                {...formik.getFieldProps('phoneNumber')}
                                placeholder="+1 (555) 000-0000"
                                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-[var(--brand)]'}`}
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-bold text-slate-700 mb-1.5">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                {...formik.getFieldProps('message')}
                                placeholder="Tell us what service you need (copy trading, indicator, EA development, EA rental)."
                                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all resize-y ${formik.touched.message && formik.errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-[var(--brand)]'}`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl   text-white btn-gradient btn-gradient-glow py-4 font-bold shadow-lg transition-all active:scale-95 disabled:opacity-60"
                        >
                            {formik.isSubmitting ? <Loader2 className="animate-spin" /> : 'Get in Touch'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LeadModal;