'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Submit to our API
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Thank you! You\'ve been added to our waitlist.');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block leading-tight">Instant AI Transcriptions,</span>
            <span className="block text-indigo-600 leading-tight mt-2">
              Optimized for India 🇮🇳
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            Fast, accurate, affordable transcriptions in Hindi and Indian-accented English 
            for content creators and businesses.
          </p>
          
          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <button 
              onClick={() => {
                document.getElementById('email-signup')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-indigo-600 border-2 border-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
            >
              Join Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Powerful Features for Content Creators
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 max-w-3xl mx-auto sm:text-lg sm:leading-8">
              Everything you need to create professional content with perfect transcriptions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-8">
            {/* Feature 1 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 h-full border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8">
                <div className="text-3xl mb-4 sm:text-4xl">🎙</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 sm:text-xl">
                  Accurate AI Transcriptions
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Optimized for Hindi & Indian accents with industry-leading accuracy rates.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 h-full border border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8">
                <div className="text-3xl mb-4 sm:text-4xl">⚡</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 sm:text-xl">
                  Instant Subtitles
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Download in SRT or TXT format within minutes of uploading your content.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 h-full border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8">
                <div className="text-3xl mb-4 sm:text-4xl">📱</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 sm:text-xl">
                  Social Media Ready
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Perfect for Instagram Reels, YouTube Shorts, and Moj with optimized formatting.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 h-full border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 sm:p-8">
                <div className="text-3xl mb-4 sm:text-4xl">🇮🇳</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 sm:text-xl">
                  India Focused
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  Specifically trained on Indian regional languages and cultural context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section id="email-signup" className="py-16 bg-slate-50 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Join the Waitlist
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Be the first to know when we launch. Get early access and exclusive updates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 text-base text-slate-900 placeholder-slate-500 bg-white border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 sm:text-base"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 text-base font-semibold text-white bg-indigo-600 border-2 border-indigo-600 rounded-xl hover:bg-indigo-700 hover:border-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 sm:px-8 whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            
            {message && (
              <div className={`mt-4 text-center text-sm font-medium ${
                message.includes('Thank you') 
                  ? 'text-emerald-600' 
                  : 'text-red-600'
              }`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </section>
      
      {/* Secondary CTA Section */}
      <section className="bg-indigo-600 px-4 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to transform your content creation?
          </h2>
          <p className="mt-4 text-base leading-7 text-indigo-100 sm:text-lg sm:leading-8">
            Join thousands of creators who are already using our AI transcription service
          </p>
          <div className="mt-8 sm:mt-10">
            <button 
              onClick={() => {
                document.getElementById('email-signup')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-indigo-600 bg-white border-2 border-white rounded-xl shadow-lg hover:bg-slate-50 hover:border-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 sm:px-8 sm:py-4 sm:text-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-400">
                © 2025 Regional AI Transcript Generator
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:justify-end">
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.875-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
