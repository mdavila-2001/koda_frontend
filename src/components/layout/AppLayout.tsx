import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { logout } = useAuth();
    const { projectId } = useParams<{ projectId: string }>();
    return (
        <div className="bg-background text-on-background font-body-md min-h-screen flex antialiased relative">
            {/* Background pattern */}
            <div 
                className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
                style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3jHLrCR6lHJG1X19bhOzOxsyx8uG1JaCS4OO7IZN76EY3nBNmnWaQEasrMCQzMpJ4XfoEQ8XuqIHnfXBaW4rv6NEgLXE6YEjRO8rByZWULS7jvaiwVfaoy1MPsjsho-gpQcRgDvBLkbOFjUq3mAT12oOkwLgKWSYjxu7FYA0pxhbJeTWGuXD2ibeXLzAJIrMDgpYXKdvC_34qrZAiGDcH5dUzZoUKK8KkXJo62CS72sQDC70sjX4PmRlrr5HnUT-71cjf_jpn3ug')", 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            />

            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-slate-800/50 bg-slate-900 dark:bg-[#111827] flex flex-col py-8 px-4 gap-2 z-10 shadow-2xl shadow-black/20">
                <div className="mb-8 px-4 flex items-center gap-3">
                    <img alt="User Avatar" className="w-10 h-10 rounded-full border border-slate-700 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt-18H4ESuuQFkmwq1mLcgctDJ_HV0dbcJKze1qaY2_tNhzmTXxMwE1spRnxH9BZwANqz__2f9JwAUieJw1YnB2tEoNsznUoHa3i-kqzJgQFV49wjDY7hEyiMrbNLY5h4kEqLMBF3uEECvTyAFjXXQ4lca2VR_ABmsuuTLulP2Lha7S-3MXhoZC9EvmXFqnz1pVDevndlaAukYqkNEtGx7rAn069W5yMBtPDcPjBTSRDGKZrzOq9olokBvytuP6FucALWfiuhN26I" />
                    <div>
                        <div className="text-2xl font-black tracking-tighter text-sky-400 font-h2 text-h2 leading-none">KODA</div>
                        <div className="font-label-md text-label-md text-slate-400 mt-1">Technical workspace</div>
                    </div>
                </div>
                <nav className="flex flex-col gap-1 w-full">
                    <Link className="flex items-center gap-3 px-4 py-3 text-sky-400 font-semibold bg-sky-400/5 rounded-lg group transition-transform duration-150 ease-out active:scale-[0.98]" to="/">
                        <span className="material-symbols-outlined text-xl">dashboard</span>
                        <span className="font-body-md text-body-md">Dashboard</span>
                    </Link>
                    {projectId && (
                        <>
                            <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" to={`/projects/${projectId}/board`}>
                                <span className="material-symbols-outlined text-xl">view_kanban</span>
                                <span className="font-body-md text-body-md">Board</span>
                            </Link>
                            <Link className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" to={`/projects/${projectId}/team`}>
                                <span className="material-symbols-outlined text-xl">groups</span>
                                <span className="font-body-md text-body-md">Team</span>
                            </Link>
                        </>
                    )}
                    {/* 
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined text-xl">monitoring</span>
                        <span className="font-body-md text-body-md">Analytics</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined text-xl">settings</span>
                        <span className="font-body-md text-body-md">Settings</span>
                    </a> 
                    */}
                </nav>
                <div className="mt-auto flex flex-col gap-1 w-full pt-4 border-t border-slate-800/50">
                    <button onClick={logout} className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg group transition-all duration-150 ease-out active:scale-[0.98] w-full text-left">
                        <span className="material-symbols-outlined text-xl">logout</span>
                        <span className="font-body-md text-body-md">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            {children}
        </div>
    );
};
