import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { FaFileUpload, FaPaste, FaMagic } from 'react-icons/fa';

const sampleText = "Good writing is characterized by its simplicity and directness. Avoid complicated syntax and prefer short, declarative sentences. This approach to writing makes your prose both accessible and powerful. While some complex ideas require nuanced phrasing, aiming for clarity is never a bad goal. The influence of clear writing on modern communication is undeniable and profoundly significant.";

// Helper to count syllables (heuristic-based)
const countSyllables = (word: string): number => {
    word = word.toLowerCase().trim();
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
};

interface AnalysisResult {
    words: number;
    sentences: number;
    syllables: number;
    gradeLevel: number;
}

const ReadabilityChecker: React.FC = () => {
    const [text, setText] = useState<string>(sampleText);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const analysis = useMemo((): AnalysisResult => {
        if (!text.trim()) {
            return { words: 0, sentences: 0, syllables: 0, gradeLevel: 0 };
        }

        const words = text.trim().split(/\s+/).filter(Boolean);
        const sentences = text.trim().match(/[^.!?]+[.!?]+/g) || [text];
        const syllables = words.reduce((acc, word) => acc + countSyllables(word), 0);

        const wordCount = words.length;
        const sentenceCount = sentences.length;

        if (wordCount === 0 || sentenceCount === 0) {
            return { words: 0, sentences: 0, syllables: 0, gradeLevel: 0 };
        }

        const gradeLevel = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllables / wordCount) - 15.59;
        
        return {
            words: wordCount,
            sentences: sentenceCount,
            syllables: syllables,
            gradeLevel: Math.round(gradeLevel * 10) / 10,
        };
    }, [text]);

    const getHighlightedText = useCallback(() => {
        if (!text.trim()) {
            return <p className="text-gray-400">Start typing or paste your text here...</p>;
        }
        
        const sentences = text.split(/(\s*[^.!?]+[.!?]+)/g).filter(Boolean);

        return sentences.map((sentence, index) => {
            const wordCount = sentence.trim().split(/\s+/).filter(Boolean).length;
            let highlightClass = '';
            if (wordCount >= 20) {
                highlightClass = 'bg-red-200/80'; // Very hard
            } else if (wordCount >= 15) {
                highlightClass = 'bg-yellow-200/80'; // Hard
            }
            return <span key={index} className={highlightClass}>{sentence}</span>;
        });
    }, [text]);

    const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                setText(content);
            };
            reader.readAsText(file);
        }
    };
    
    const handlePaste = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setText(clipboardText);
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
            alert('Could not paste text. Please check browser permissions.');
        }
    };
    
    const handleUseSample = () => {
        setText(sampleText);
    };

    const handleAiRewrite = async () => {
        if (!process.env.API_KEY) {
            alert("API_KEY environment variable is not set. This is a placeholder for the AI feature.");
            return;
        }
        setIsLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Rewrite the following text to be simpler, clearer, and have a readability score of around grade 8. Original text: "${text}"`,
            });
            setText(response.text);
        } catch (error) {
            console.error("AI Rewrite Error:", error);
            alert("Failed to rewrite text. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Free online readability checker</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Use our free online readability checker to learn more about your text. It instantly shows the grade level of your writing and highlights sentences that are hard to read.
            </p>
            
            <div className="mt-12 max-w-6xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                     <label className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                        <FaFileUpload className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                        Import file
                        <input type="file" className="hidden" onChange={handleFileImport} accept=".txt,.md,.doc,.docx" />
                    </label>
                    <button onClick={handlePaste} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <FaPaste className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                        Paste
                    </button>
                    <button onClick={handleUseSample} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <FaMagic className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                        Use sample text
                    </button>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow-sm p-2 relative">
                        <div 
                            contentEditable
                            onInput={e => setText(e.currentTarget.innerText)}
                            suppressContentEditableWarning={true}
                            className="w-full h-96 min-h-[24rem] p-4 text-left bg-gray-50/50 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-purple overflow-y-auto leading-relaxed"
                        >
                            {getHighlightedText()}
                        </div>
                         <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                            className="hidden" // Hidden textarea to hold the state, editable div for UI
                            aria-hidden="true"
                        />
                    </div>

                    <div className="lg:col-span-1 bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 text-left flex flex-col">
                        <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">Readability</h3>
                        <div className="flex items-baseline mb-4">
                            <span className="text-5xl font-extrabold text-custom-purple">{analysis.gradeLevel || '...'}</span>
                            <span className="ml-2 text-gray-500 font-medium">Grade Level</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">Aimed for Grade 8 or lower for broad audiences.</p>
                        
                        <div className="text-sm space-y-2 text-gray-700">
                            <div className="flex justify-between"><span>Words:</span> <span className="font-semibold">{analysis.words}</span></div>
                            <div className="flex justify-between"><span>Sentences:</span> <span className="font-semibold">{analysis.sentences}</span></div>
                            <div className="flex justify-between"><span>Syllables:</span> <span className="font-semibold">{analysis.syllables}</span></div>
                        </div>

                        <div className="mt-auto pt-6 border-t">
                             <p className="text-sm text-gray-600 mb-3">Spot more errors and fix them with AI.</p>
                             <button
                                onClick={handleAiRewrite}
                                disabled={isLoading}
                                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-custom-purple hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-purple disabled:bg-purple-300"
                            >
                                {isLoading ? 'Rewriting...' : 'Learn about Editor Plus'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadabilityChecker;