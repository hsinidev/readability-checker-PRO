import React, { useState, ReactNode } from 'react';

const Modal: React.FC<{ title: string; children: ReactNode; onClose: () => void }> = ({ title, children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto transform transition-all scale-100" 
                onClick={e => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white/95 backdrop-blur z-10 px-6 py-4 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="p-6 sm:p-8 text-gray-600 prose prose-purple max-w-none">
                    {children}
                </div>
                <div className="p-4 border-t bg-gray-50 flex justify-end rounded-b-xl">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Close</button>
                </div>
            </div>
        </div>
    );
};

// Content Dictionaries for Modals
const modalContents: Record<string, ReactNode> = {
    'About': (
        <>
            <p>Welcome to <strong>Doodax</strong>, the premier online destination for perfecting your writing. Founded with a simple mission: to make clear communication accessible to everyone.</p>
            <p>At Doodax.com, we believe that complex ideas don't require complex language. Our tools are designed to strip away the clutter, leaving your message pure and impactful. Whether you are a student striving for better grades, a copywriter looking to boost conversions, or a novelist refining your manuscript, Doodax is built for you.</p>
            <h3>Our Technology</h3>
            <p>We leverage industry-standard algorithms like Flesch-Kincaid combined with state-of-the-art AI integration to provide feedback that is both statistically accurate and creatively helpful.</p>
        </>
    ),
    'Contact': (
        <>
            <p>We value your feedback and are here to assist you with any questions or support needs.</p>
            <p><strong>Email Us:</strong><br />
            <a href="mailto:hsini.web@gmail.com" className="text-custom-purple font-bold">hsini.web@gmail.com</a></p>
            <p><strong>Website:</strong><br />
            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer">doodax.com</a></p>
            <p>For business inquiries, partnerships, or technical support, please allow up to 24-48 hours for a response from our team.</p>
        </>
    ),
    'Guide': (
        <>
            <h3>How to Use Doodax</h3>
            <ol>
                <li><strong>Input Text:</strong> Type directly into the editor, paste from your clipboard, or upload a .txt/.md file.</li>
                <li><strong>Analyze:</strong> Watch the Grade Level score update in real-time on the right sidebar.</li>
                <li><strong>Review Highlights:</strong>
                    <ul>
                        <li><span className="bg-yellow-200 px-1">Yellow</span>: Hard to read sentences. Consider splitting them or removing unnecessary words.</li>
                        <li><span className="bg-red-200 px-1">Red</span>: Very hard to read. These are major friction points for your reader. Rewrite immediately.</li>
                    </ul>
                </li>
                <li><strong>AI Assist (Editor Plus):</strong> Click the "Learn about Editor Plus" button to see how AI can rewrite text for you automatically.</li>
            </ol>
        </>
    ),
    'Privacy Policy': (
        <>
            <p><strong>Last Updated: October 27, 2023</strong></p>
            <p>At Doodax (doodax.com), the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by Doodax and how it is used.</p>
            <h3>1. Data Processing</h3>
            <p>We are a client-side first application. When you use our readability checker, your text is processed directly within your web browser. We do not store, save, or transmit your analyzed text to our servers unless you explicitly use an AI feature that requires API transmission.</p>
            <h3>2. Log Files</h3>
            <p>Like many other Web sites, Doodax.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information.</p>
            <h3>3. Cookies</h3>
            <p>We use cookies to store information about visitors preferences, to record user-specific information on which pages the site visitor accesses or visits, and to customize our web page content based on visitors browser type or other information that the visitor sends via their browser.</p>
            <p>If you have questions, contact us at: <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a></p>
        </>
    ),
    'Terms of Service': (
        <>
            <p><strong>Acceptance of Terms</strong></p>
            <p>By accessing and using Doodax.com, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <h3>1. Use of Service</h3>
            <p>Doodax provides a text analysis tool for educational and professional use. You agree not to use the service for any unlawful purpose or to analyze content that is illegal, offensive, or infringing on others' rights.</p>
            <h3>2. Disclaimer of Warranties</h3>
            <p>The services are provided "as is". Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
            <h3>3. Limitation of Liability</h3>
            <p>In no event shall Doodax or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Doodax's Internet site.</p>
        </>
    ),
    'DMCA': (
        <>
            <p>Doodax respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights of any person or entity.</p>
            <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:hsini.web@gmail.com">hsini.web@gmail.com</a>.</p>
            <p>You must include in your email a detailed description of the alleged Infringement as detailed under the "DMCA Notice and Procedure for Copyright Infringement Claims".</p>
        </>
    )
};

const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);

    const openModal = (title: string) => {
        setModalContent({ title, content: modalContents[title] });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const navItems = ['About', 'Contact', 'Guide'];
    const footerItems = ['Privacy Policy', 'Terms of Service', 'DMCA'];
    
    return (
        <div className="relative min-h-screen font-sans overflow-x-hidden flex flex-col">
            {/* Animated Galaxy Background */}
            <div className="fixed inset-0 z-0 bg-deep-space">
                <style>{`
                    @keyframes drift {
                        0% { transform: translate(0, 0); }
                        50% { transform: translate(10px, 20px); }
                        100% { transform: translate(0, 0); }
                    }
                    .nebula {
                        filter: blur(80px);
                        opacity: 0.6;
                        animation: drift 20s infinite ease-in-out alternate;
                    }
                `}</style>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900 rounded-full mix-blend-screen nebula animate-blob"></div>
                    <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900 rounded-full mix-blend-screen nebula animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-900 rounded-full mix-blend-screen nebula animate-blob animation-delay-4000"></div>
                    <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-30">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-custom-purple to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/50">D</div>
                                <span className="text-white text-2xl font-bold tracking-tight">Doodax</span>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                 {navItems.map(item => (
                                    <button 
                                        key={item} 
                                        onClick={() => openModal(item)} 
                                        className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                                    >
                                        {item}
                                    </button>
                                ))}
                                 <a href="#" className="bg-white text-custom-purple px-5 py-2.5 rounded-full text-sm font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Try Editor Pro
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="flex-grow">
                    {children}
                </div>
                
                <footer className="bg-black/40 backdrop-blur-xl border-t border-white/5 text-gray-300 mt-auto">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                             <div>
                                <h3 className="text-white font-bold text-lg mb-4">Doodax</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Making the web clearer, one sentence at a time. The advanced readability checker for modern writers.
                                </p>
                             </div>
                             <div className="md:col-span-2 flex flex-wrap justify-end gap-6 md:gap-8">
                                {[...navItems, ...footerItems].map(link => (
                                    <button 
                                        key={link} 
                                        onClick={() => openModal(link)} 
                                        className="text-sm text-gray-400 hover:text-custom-gold transition-colors"
                                    >
                                        {link}
                                    </button>
                                ))}
                             </div>
                        </div>

                        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row items-center justify-between">
                            <p className="text-sm text-gray-500">&copy; 2024 Doodax. All rights reserved.</p>
                            
                            <div className="flex items-center mt-4 md:mt-0">
                                <span className="text-sm text-gray-400 mr-2">Powered by</span>
                                <a 
                                    href="https://github.com/hsinidev" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-purple to-pink-500 hover:text-white transition-all flex items-center gap-1"
                                >
                                    HSINI MOHAMED
                                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {modalContent && <Modal title={modalContent.title} onClose={closeModal}>{modalContent.content}</Modal>}
        </div>
    );
};

export default ThemeLayout;