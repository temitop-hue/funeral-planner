'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, FileText, Download, Heart, Clock, DollarSign } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thanks for your interest! We'll contact ${email} soon.`)
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="text-primary-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">Memorial Planner</span>
            </div>
            <div className="flex gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <Link href="/auth/login">
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Plan a Meaningful Farewell with Clarity and Care
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our guided checklist helps you organize every detail of a funeral or memorial service, 
              so you can focus on what matters most—honoring your loved one.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth/signup">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition">
                  Get Started Free
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition">
                  Sign In
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-3">No credit card required. Get access instantly.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to guide you through every step of funeral planning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="text-primary-600" size={40} />}
              title="Customizable Templates"
              description="Choose from templates for burial, cremation, religious, or secular services. Customize every detail to match your needs."
            />
            <FeatureCard
              icon={<CheckCircle className="text-primary-600" size={40} />}
              title="Step-by-Step Guidance"
              description="Never miss an important detail. Our checklist breaks down complex tasks into manageable steps with helpful tips."
            />
            <FeatureCard
              icon={<Download className="text-primary-600" size={40} />}
              title="Export & Share PDFs"
              description="Download professional PDFs to share with family members, funeral directors, or keep for your records."
            />
            <FeatureCard
              icon={<DollarSign className="text-primary-600" size={40} />}
              title="Budget Tracker"
              description="Keep funeral costs under control with our built-in budget tracking tool. See expenses in real-time."
            />
            <FeatureCard
              icon={<Clock className="text-primary-600" size={40} />}
              title="Timeline Planning"
              description="Organize tasks by timeline—what to do immediately, within 24 hours, one week, and beyond."
            />
            <FeatureCard
              icon={<Heart className="text-primary-600" size={40} />}
              title="Thoughtful Resources"
              description="Access grief support resources, writing prompts for eulogies, and memorial service ideas."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Template</h3>
              <p className="text-gray-600">
                Select a template that matches the type of service you're planning or start from scratch.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize Your Checklist</h3>
              <p className="text-gray-600">
                Add, remove, or modify tasks. Set priorities, assign responsibilities, and track your progress.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download & Share</h3>
              <p className="text-gray-600">
                Export your checklist as a PDF to print, email, or share with family and funeral directors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $0<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">1 checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Basic templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">PDF export (with watermark)</span>
                </li>
              </ul>
              <Link href="/auth/signup">
                <button className="w-full border-2 border-primary-600 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="border-2 border-primary-600 rounded-xl p-8 relative bg-primary-50">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $9.99<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Unlimited checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">All premium templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">No watermarks on PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Budget tracking tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Priority email support</span>
                </li>
              </ul>
              <Link href="/auth/signup">
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                  Start Free Trial
                </button>
              </Link>
            </div>

            {/* Business Plan */}
            <div className="border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $149<span className="text-lg font-normal text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">White-label solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Unlimited client accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Custom branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Dedicated support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-primary-600 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Planning with Compassion Today
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands who've used our platform to create meaningful, organized farewells
          </p>
          <Link href="/auth/signup">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
              Create Your Free Checklist
            </button>
          </Link>
        </div>
      </section>

            {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-primary-400" size={24} />
                <span className="text-white font-bold text-lg">Memorial Planner</span>
              </div>
              <p className="text-sm">
                Helping families plan meaningful farewells with dignity and care.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2026 Memorial Planner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}