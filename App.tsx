import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import ReadabilityChecker from './components/ReadabilityChecker';
import SeoArticle from './utils/SeoArticle';
import { FaBolt, FaInfinity, FaHighlighter, FaChartLine, FaRocket, FaPenNib, FaSearch, FaUsers } from 'react-icons/fa';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
        <div className="flex items-center text-custom-purple mb-4">
            <div className="p-3 bg-purple-50 rounded-2xl mr-4">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 leading-tight">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);

const Step: React.FC<{ num: number; title: string; children: React.ReactNode }> = ({ num, title, children }) => (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-purple-200 transition-colors">
        <div className="absolute -right-4 -top-4 text-9xl font-black text-gray-50 opacity-50 group-hover:text-purple-50 transition-colors pointer-events-none select-none">{num}</div>
        <div className="relative z-10">
            <div className="text-sm font-bold text-custom-purple uppercase tracking-wider mb-2">Step {num}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
        </div>
    </div>
);

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full flex justify-between items-center text-left py-5 focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-800 font-bold group-hover:text-custom-purple transition-colors text-lg pr-4">{question}</span>
                <span className={`transform transition-transform duration-300 text-custom-purple ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="text-gray-600 leading-relaxed pr-8">{children}</div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <ThemeLayout>
            <main>
                {/* Hero / Tool Section - Floating Card Effect */}
                <section className="pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                            <ReadabilityChecker />
                        </div>
                    </div>
                </section>

                {/* Why you need Section */}
                <section className="py-20 bg-gray-50 relative">
                     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">Why you need Doodax</h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Readability is the metric that matters. High grade levels create cognitive strain, causing readers to bounce. Doodax simplifies the complex, ensuring your message lands.
                        </p>
                    </div>
                </section>

                {/* Feature Grid Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                             <span className="text-custom-purple font-semibold tracking-wider uppercase text-sm">Features</span>
                             <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">The Best in Class</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <FeatureCard icon={<FaBolt size={24} />} title="Instant Scoring">
                                Zero latency. Unlike Microsoft Word or other heavy editors, Doodax updates your Flesch-Kincaid score with every keystroke. See how minor edits impact clarity instantly.
                            </FeatureCard>
                             <FeatureCard icon={<FaInfinity size={24} />} title="Unlimited Analysis">
                                Scan 100 words or 100,000. Our engine runs in your browser, removing the arbitrary word count limits found in other free tools.
                            </FeatureCard>
                             <FeatureCard icon={<FaHighlighter size={24} />} title="Smart Highlighting">
                                An overall score is useful, but actionable feedback is better. We pinpoint the exact sentences (Yellow for hard, Red for very hard) that are hurting your score.
                            </FeatureCard>
                             <FeatureCard icon={<FaChartLine size={24} />} title="Actionable Metrics">
                                Don't just get a number. Get a grade level that corresponds to US education standards, giving you a concrete target for your specific audience.
                            </FeatureCard>
                        </div>
                    </div>
                </section>

                {/* Upsell CTA Block */}
                <section className="relative overflow-hidden bg-gradient-to-br from-custom-purple to-indigo-700 py-20 px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6">
                            Improve readability automatically
                        </h2>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Upgrade to <strong>Editor Plus</strong> and let AI do the heavy lifting. Rewrite complex paragraphs into crystal-clear prose with a single click.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-custom-purple bg-white hover:bg-gray-50 hover:scale-105 transition-all shadow-xl"
                        >
                            Try Editor Plus for free
                        </a>
                    </div>
                </section>
                
                 {/* Use Cases Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Who uses Doodax?</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                             <div className="text-center p-6">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><FaRocket size={32} /></div>
                                <h3 className="font-bold text-lg mb-2">Marketers</h3>
                                <p className="text-gray-600 text-sm">Boost email open rates and landing page conversions by writing copy a 5th grader can read.</p>
                             </div>
                             <div className="text-center p-6">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><FaSearch size={32} /></div>
                                <h3 className="font-bold text-lg mb-2">SEO Experts</h3>
                                <p className="text-gray-600 text-sm">Reduce bounce rates and improve dwell time. Readable content is ranked higher by Google.</p>
                             </div>
                             <div className="text-center p-6">
                                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><FaPenNib size={32} /></div>
                                <h3 className="font-bold text-lg mb-2">Students</h3>
                                <p className="text-gray-600 text-sm">Clearer essays get better grades. Remove the fluff and let your arguments shine.</p>
                             </div>
                             <div className="text-center p-6">
                                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><FaUsers size={32} /></div>
                                <h3 className="font-bold text-lg mb-2">AI Users</h3>
                                <p className="text-gray-600 text-sm">Humanize ChatGPT output. Remove the robotic tone by varying sentence structure.</p>
                             </div>
                        </div>
                    </div>
                </section>


                {/* How-to Guide Section */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">How it works</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Step num={1} title="Input Text">
                                Paste your draft or import a document directly into the editor.
                            </Step>
                            <Step num={2} title="Analyze">
                                Watch the readability score calculate instantly in the sidebar.
                            </Step>
                            <Step num={3} title="Edit">
                                Identify and fix the red and yellow highlighted sentences.
                            </Step>
                            <Step num={4} title="Perfect">
                                Export your polished, crystal-clear content for the world to see.
                            </Step>
                        </div>
                    </div>
                </section>
                
                {/* FAQs Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                            <FaqItem question="What is a readability checker?">A readability checker is a tool that analyzes your writing to determine how easy it is to read and understand. It typically uses algorithms like the Flesch-Kincaid Grade Level to assign a score, helping you identify complex sentences and vocabulary.</FaqItem>
                            <FaqItem question="How does the score calculation work?">It works by counting the total number of words, sentences, and syllables in your text. These numbers are then plugged into a mathematical formula to calculate a score, which often corresponds to a grade level. A lower grade level means the text is easier to read.</FaqItem>
                            <FaqItem question="Is Doodax free to use?">Yes, the core Doodax Readability Checker is 100% free with unlimited word counts. We offer a premium AI version for users who want automated rewriting capabilities.</FaqItem>
                            <FaqItem question="Does this work for Word documents?">Yes. While we don't plug directly into Word, you can simply copy/paste your text or use our "Import File" button to load your .docx content instantly.</FaqItem>
                             <FaqItem question="Is my text private?">Absolutely. Doodax processes your text locally in your browser. We do not store or claim ownership of any content you analyze.</FaqItem>
                        </div>
                    </div>
                </section>
                
                {/* SEO Article Section - Now with Read More */}
                <SeoArticle />

            </main>
        </ThemeLayout>
    );
};

export default App;