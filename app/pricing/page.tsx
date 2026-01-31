'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Heart } from 'lucide-react'

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)
  const router = useRouter()

  const handleSubscribe = async (plan: 'premium' | 'business') => {
    setLoading(plan)
    
    // Check if user is logged in
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    // Create Stripe checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan,
        userId: user.id,
        email: user.email,
      }),
    })

    const { url } = await response.json()
    if (url) {
      window.location.href = url
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="text-primary-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">Memorial Planner</span>
            </Link>
            <Link href="/dashboard">
              <button className="text-gray-600 hover:text-gray-900">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">Upgrade to unlock all features</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
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
            <Link href="/dashboard">
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                Current Plan
              </button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-600 relative">
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
            <button
              onClick={() => handleSubscribe('premium')}
              disabled={loading === 'premium'}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50"
            >
              {loading === 'premium' ? 'Loading...' : 'Subscribe Now'}
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
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
            <button
              onClick={() => handleSubscribe('business')}
              disabled={loading === 'business'}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50"
            >
              {loading === 'business' ? 'Loading...' : 'Subscribe Now'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}