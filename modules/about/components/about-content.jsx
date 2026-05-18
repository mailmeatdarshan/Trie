import React from 'react'
import { Rocket, Target, ShieldCheck, Code, Sparkles, Globe, Brain, Zap, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const AboutContent = () => {
    const coreValues = [
        {
            icon: <Brain className="w-6 h-6 text-amber-500" />,
            title: "Intellectual Growth",
            description: "We believe in the continuous expansion of knowledge and logic through persistent practice and challenge."
        },
        {
            icon: <Zap className="w-6 h-6 text-indigo-500" />,
            title: "Efficiency",
            description: "Just like the Trie data structure, we aim for optimal performance in every solution and every learning path."
        },
        {
            icon: <Users className="w-6 h-6 text-amber-500" />,
            title: "Community First",
            description: "Growth is faster together. We foster a supportive environment for developers of all skill levels."
        }
    ]

    const features = [
        {
            title: "Next-Gen Judge System",
            description: "Execute code in real-time across 25+ programming languages with precise feedback.",
            icon: <Code className="w-5 h-5" />
        },
        {
            title: "Global Benchmarking",
            description: "Compare your solutions with top-tier developers and optimize for speed and memory.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Curated Learning",
            description: "Structured problem sets designed to take you from basic syntax to advanced algorithms.",
            icon: <Target className="w-5 h-5" />
        }
    ]

    return (
        <div className="space-y-24 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <Badge variant="outline" className="px-4 py-1 border-amber-200 text-amber-600 dark:border-amber-800 dark:text-amber-400">
                    Our Story
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Every problem is worth a <span className="text-amber-500 italic">Trie</span>.
                </h1>
                <p className="max-w-3xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Trie is more than just a coding platform; it&apos;s a sanctuary for problem solvers. 
                    Built by developers for developers, we provide the tools and challenges needed to sharpen 
                    your algorithmic thinking and master the art of programming.
                </p>
            </section>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800">
                    <CardHeader>
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4">
                            <Rocket className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <CardTitle className="text-2xl">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-600 dark:text-zinc-400 text-lg">
                        To democratize high-level algorithmic training and provide a seamless environment where 
                        curiosity meets execution. We strive to make complex concepts accessible through 
                        interactive learning and immediate feedback.
                    </CardContent>
                </Card>

                <Card className="bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800">
                    <CardHeader>
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-600 dark:text-zinc-400 text-lg">
                        To become the global standard for technical interview preparation and competitive 
                        programming, fostering a new generation of engineers who don&apos;t just write code, 
                        but solve problems elegantly.
                    </CardContent>
                </Card>
            </div>

            {/* Core Values */}
            <section className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">The Values That Drive Us</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">Founded on the principles of efficiency, clarity, and growth.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {coreValues.map((value, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
                            <div className="mb-4">{value.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Trie? */}
            <section className="bg-amber-500 dark:bg-amber-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Why the name <br />
                            <span className="text-zinc-900">Trie?</span>
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed">
                            In computer science, a <strong>Trie</strong> (prefix tree) is a specialized set-based 
                            data structure used to store an associative array. It&apos;s known for its incredible 
                            efficiency in retrieval.
                        </p>
                        <p className="text-lg text-white/90 leading-relaxed">
                            We chose this name because it represents the core of what we do: helping you 
                            navigate through the complexities of code with speed and precision. 
                            Plus, every great solution starts with a <strong>Trie</strong>.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                <div className="mb-2">{f.icon}</div>
                                <h4 className="font-bold mb-1">{f.title}</h4>
                                <p className="text-sm text-white/80">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </section>

            {/* CTA */}
            <section className="text-center py-12">
                <h2 className="text-3xl font-bold mb-6">Ready to challenge yourself?</h2>
                <div className="flex justify-center gap-4">
                    <div className="p-[1px] bg-gradient-to-r from-amber-500 to-indigo-500 rounded-lg">
                        <button className="px-8 py-3 bg-white dark:bg-zinc-950 rounded-[7px] font-semibold hover:bg-transparent hover:text-white transition-all">
                            Browse Problems
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutContent
