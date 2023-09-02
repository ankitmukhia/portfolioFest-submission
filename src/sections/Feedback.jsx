import React from "react";

// alert 
import { useAlert } from "react-alert";

// react form
import { useForm } from "react-hook-form";

// api
import { messageapi } from "./api";

const Feedback = () => {
    const alert = useAlert();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const dataStatus = await messageapi(data);
        if (dataStatus) {
            alert.success(dataStatus.success);
        } else {
            alert.error(dataStatus.error);
        }
    };

    return (
        <div className="relative mt-20">
            <div className="mx-auto px-4 max-w-2xl lg:max-w-5xl">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded-2xl border p-6 border-zinc-700/40"
                >
                    <span>Share Your Thought's</span>
                    <p className="mt-2 text-sm text-zinc-400">Please suggest something that can help me improve and achieve even more.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    {...register('name', { required: 'Name is required' })}
                                    type="text"
                                    className="input"
                                    placeholder="Name"
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-300">{errors.name.message}</p>}
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input
                                    {...register('email', { required: 'Email is required' })}
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />{errors.email && <p className="mt-2 text-sm text-red-300">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="mt-2">
                                <textarea
                                    {...register('message', { required: 'At least give some advice and suggestion' })}
                                    type="text"
                                    rows={10}
                                    className="input"
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-300">{errors.message.message}</p>}
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences.</p>
                        </div>
                    </div>
                    <button className="button" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
};

export default Feedback;