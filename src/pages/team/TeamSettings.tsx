import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '../../components/layout/AppLayout';
import { httpClient } from '../../api/httpClient';

export const TeamSettings: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!email) return;

        setIsLoading(true);
        try {
            await httpClient(`/projects/${projectId}/members`, {
                method: 'POST',
                body: JSON.stringify({ email }),
            });
            setSuccess('Member invited successfully!');
            setEmail('');
        } catch (err: any) {
            setError(err.message || 'Failed to invite member');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AppLayout>
            <div className="flex-1 flex flex-col h-full overflow-y-auto p-4 md:p-8 xl:p-12 relative ml-[240px]">
                <main className="w-full max-w-3xl bg-[#1E293B] shadow-[0_10px_25px_-5px_rgba(2,6,23,0.5)] rounded-xl p-6 md:p-8 border border-[#3e484f] mx-auto">
                    
                    {/* Header Section */}
                    <header className="mb-8 border-b border-[#3e484f] pb-6">
                        <h1 className="text-2xl font-semibold text-[#dee3e8] mb-2 tracking-tight">Team Settings</h1>
                        <p className="text-sm text-[#bdc8d1]">Manage your team members and their account permissions here.</p>
                    </header>

                    {/* Invite Section */}
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold text-[#dee3e8] mb-2">Invite Members</h2>
                        <p className="text-sm text-[#bdc8d1] mb-6">All invited members will have standard read and write permissions initially.</p>
                        
                        {error && <div className="mb-4 bg-[#93000a] text-[#ffb4ab] px-4 py-3 rounded-lg text-sm font-medium">{error}</div>}
                        {success && <div className="mb-4 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 px-4 py-3 rounded-lg text-sm font-medium">{success}</div>}
                        
                        <form onSubmit={handleInvite} className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-grow relative">
                                <span aria-hidden="true" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#87929a]">mail</span>
                                <input
                                    className="w-full bg-[#0F172A] border border-[#3e484f] rounded-lg text-[#dee3e8] pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-shadow placeholder-[#87929a]"
                                    placeholder="Email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    required
                                />
                            </div>
                            <button
                                className="bg-[#38bdf8] text-[#0f1418] text-sm font-semibold px-6 py-2.5 rounded-lg hover:brightness-110 transition-all whitespace-nowrap disabled:opacity-50 flex items-center justify-center min-w-[140px] shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Inviting...' : 'Invite Member'}
                            </button>
                        </form>
                    </section>

                    {/* Members List Section (Mock) */}
                    <section>
                        <h2 className="text-xl font-semibold text-[#dee3e8] mb-4">Project Members</h2>
                        <div className="flex flex-col gap-2">
                            
                            {/* Member 1 */}
                            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-[#3e495d]/50 transition-colors border border-transparent hover:border-[#3e484f] group cursor-default">
                                <div className="flex items-center gap-4">
                                    <img alt="Alice" className="w-10 h-10 rounded-full object-cover border border-[#3e484f]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-FFP395lMEsGFXoRTkPNAI4_sfAge_Zx5HWktPX7McGZJE9DcG1vLnyO957fh4kvJyyVIy3VWS1xeu5I2C4xcDPJ8YFvk6fqpx2xASOlG344bAd3iurUfWzWFQkSRnoQiuQbbtxH4mNeDeoZHCbJLYI-4yvgHm7PdLLf5BJVNR2yKj1KJcF2F_FE-eYJbzWnMivcMyCJ127dvVb_v3QDoQ3TKV6cuYp7X1etr52ZvgwUJsPldQleU0I9sAkmrL_1KmJnps80wVUI"/>
                                    <div>
                                        <p className="text-sm font-medium text-[#dee3e8]">Alice Johnson</p>
                                        <p className="text-xs text-[#87929a]">alice@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#38bdf8]/10 text-[#38bdf8] rounded-full text-xs font-medium border border-[#38bdf8]/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span> Active
                                    </span>
                                    <button aria-label="More options" className="text-[#87929a] hover:text-[#dee3e8] p-1 transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* Member 2 */}
                            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-[#3e495d]/50 transition-colors border border-transparent hover:border-[#3e484f] group cursor-default">
                                <div className="flex items-center gap-4">
                                    <img alt="Bob" className="w-10 h-10 rounded-full object-cover border border-[#3e484f]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc0tDgJp8xsvTfWj2EcukFTB2RZi4QnnrAbSQX0PkC_QFmSc45M0Pc8Vbno1zOGDQksy2zI59seM9Xu8LIBY4Xd3T-D-LVLgosykFCApa6CHPD9IWrO5QyDPl4W6oE412ZH-GCNlV7LsKBmjUyZbPAkVroJ3NzybuzJvrbX2nQ1pDPGg73kBbo1_Dbvfs5Hk6KnxlWaMqEcqpDGKYckW3H4MvVF9tAOCJHtirCFKISSJn9hHCg8lm_gLhA9QoWacamG2FX98auxEk"/>
                                    <div>
                                        <p className="text-sm font-medium text-[#dee3e8]">Bob Smith</p>
                                        <p className="text-xs text-[#87929a]">bob@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#38bdf8]/10 text-[#38bdf8] rounded-full text-xs font-medium border border-[#38bdf8]/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span> Active
                                    </span>
                                    <button aria-label="More options" className="text-[#87929a] hover:text-[#dee3e8] p-1 transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* Member 3 (Pending) */}
                            <div className="flex items-center justify-between p-4 rounded-lg hover:bg-[#3e495d]/50 transition-colors border border-transparent hover:border-[#3e484f] group cursor-default">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#303539] flex items-center justify-center border border-[#3e484f] text-[#dee3e8] text-sm font-medium">
                                        CE
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[#dee3e8]">Charlie Evans</p>
                                        <p className="text-xs text-[#87929a]">charlie@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="inline-flex items-center px-2.5 py-1 bg-[#303539] text-[#bdc8d1] rounded-full text-xs font-medium border border-[#3e484f]">
                                        Pending
                                    </span>
                                    <button aria-label="More options" className="text-[#87929a] hover:text-[#dee3e8] p-1 transition-colors">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </AppLayout>
    );
};
