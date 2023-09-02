import React from "react";

const Footer = () => {
    return (
        <div className="border-t pb-10 pt-10 border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                            <p className="transition hover:text-teal-400">Wish me Luck and give some some suggestion in my feedback.</p>
                        </div>
                        <p className="text-sm text-zinc-500">Ankit Mukhia</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
