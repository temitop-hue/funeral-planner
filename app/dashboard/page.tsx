'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Heart, LogOut, Plus } from 'lucide-react'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [checklists, setChecklists] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
    fetchChecklists()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
    } else {
      setUser(user)
    }
    setLoading(false)
  }

  const fetchChecklists = async () => {
    const { data, error } = await supabase
      .from('checklists')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setChecklists(data)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const createChecklist = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data, error } = await supabase
      .from('checklists')
      .insert([
        {
          user_id: user.id,
          title: 'New Funeral Planning Checklist',
          template_type: 'general'
        }
      ])
      .select()

    if (data) {
      setChecklists([data[0], ...checklists])
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Heart className="text-primary-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">Memorial Planner</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Checklists</h1>
          <p className="text-gray-600">Manage your funeral planning checklists</p>
        </div>

        <button
          onClick={createChecklist}
          className="mb-8 flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          <Plus size={20} />
          Create New Checklist
        </button>

        {checklists.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-12 text-center">
            <Heart className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No checklists yet</h3>
            <p className="text-gray-600 mb-6">Create your first funeral planning checklist to get started</p>
            <button
              onClick={createChecklist}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              <Plus size={20} />
              Create Your First Checklist
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklists.map((checklist) => (
              <div
                key={checklist.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{checklist.title}</h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                    {checklist.template_type}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Created {new Date(checklist.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}