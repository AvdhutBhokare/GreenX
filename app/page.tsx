"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const LeafIcon = () => (
  null
)

const UsersIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const AwardIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const TreeIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l3.09 6.26L22 9l-5 4.74L18.18 22 12 18.77 5.82 22 7 13.74 2 9l6.91-.74L12 2z"
    />
  </svg>
)

const DropletsIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547A1.934 1.934 0 004 17.5a3.5 3.5 0 003.5 3.5h9a3.5 3.5 0 003.5-3.5 1.934 1.934 0 00-.244-1.757z"
    />
  </svg>
)

const RecycleIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)

const NavigationIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const TargetIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const TrophyIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138-3.138z"
    />
  </svg>
)

const GiftIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
    />
  </svg>
)

// Added SunIcon component
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="m12 2 0 2" />
      <path d="m12 20 0 2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="m2 12 2 0" />
      <path d="m20 12 2 0" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

// Added SeedIcon component
function SeedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20" />
      <path d="M8 6c-1.5 0-3 1.5-3 3s1.5 3 3 3h8c1.5 0 3-1.5 3-3s-1.5-3-3-3" />
      <path d="M8 14v6" />
      <path d="M16 14v6" />
    </svg>
  )
}

// Added EditIcon component
function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  )
}

// Added UserIcon component
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export default function HomePage() {
  const [userRole, setUserRole] = useState<"student" | "teacher" | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (role: "student" | "teacher") => {
    setUserRole(role)
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  if (userRole === "student") {
    return <StudentDashboard />
  }

  if (userRole === "teacher") {
    return <TeacherDashboard />
  }

  return null
}

function LoginScreen({ onLogin }: { onLogin: (role: "student" | "teacher") => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          
          <h1 className="text-3xl font-bold text-primary mb-2">GreenX</h1>
          <p className="text-muted-foreground">Join the environmental awareness movement</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to continue your environmental journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student-email">Email</Label>
                  <Input
                    className="opacity-100 shadow bg-background"
                    id="student-email"
                    type="email"
                    placeholder="student@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input
                    className="shadow text-white bg-white"
                    id="student-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => onLogin("student")}>
                  Sign In as Student
                </Button>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teacher-email">Email</Label>
                  <Input
                    className="text-background bg-background shadow"
                    id="teacher-email"
                    type="email"
                    placeholder="teacher@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teacher-password">Password</Label>
                  <Input
                    className="shadow text-background bg-white"
                    id="teacher-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={() => onLogin("teacher")}>
                  Sign In as Teacher
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StudentDashboard() {
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [currentView, setCurrentView] = useState<"map" | "tasks" | "rewards" | "leaderboard" | "profile">("map")
  const [showProfileSetup, setShowProfileSetup] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedQuizTask, setSelectedQuizTask] = useState<any>(null)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")

  const [studentProfile, setStudentProfile] = useState({
    name: "Avdhut Bhokare",
    college: "MIT College of Engineering, Pune",
    verified: true,
    studentId: "MIT2024001",
    ecoPoints: 1250,
    tasksCompleted: 12,
    rank: 3,
  })

  const availableTasks = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      description: "Plant 5 saplings in the designated area near Shivajinagar",
      points: 100,
      difficulty: "Easy",
      location: "Shivajinagar Garden, Pune",
      type: "plantation",
      status: "available",
      coordinates: { lat: 18.5314, lng: 73.8447 },
      icon: TreeIcon,
      hasQuiz: true,
      quizQuestions: [
        {
          question: "What is the best time to plant saplings?",
          options: ["Summer", "Monsoon", "Winter", "Any time"],
          correct: 1,
        },
        {
          question: "How much water should a newly planted sapling get daily?",
          options: ["1 liter", "2-3 liters", "5 liters", "No water needed"],
          correct: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Mula River Bank Cleanup",
      description: "Join the community cleanup drive at Mula River banks",
      points: 150,
      difficulty: "Medium",
      location: "Mula River, Aundh, Pune",
      type: "cleanup",
      status: "available",
      coordinates: { lat: 18.5679, lng: 73.8143 },
      icon: DropletsIcon,
      hasQuiz: true,
      quizQuestions: [
        {
          question: "What type of waste is most harmful to river ecosystems?",
          options: ["Organic waste", "Plastic waste", "Paper waste", "Glass waste"],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Waste Segregation Workshop",
      description: "Conduct awareness program in Kothrud residential area",
      points: 80,
      difficulty: "Easy",
      location: "Kothrud, Pune",
      type: "education",
      status: "available",
      coordinates: { lat: 18.5074, lng: 73.8077 },
      icon: RecycleIcon,
      hasQuiz: true,
      quizQuestions: [
        {
          question: "How many types of waste segregation are recommended?",
          options: ["2 types", "3 types", "4 types", "5 types"],
          correct: 1,
        },
      ],
    },
    {
      id: 4,
      title: "Organic Farming Workshop",
      description: "Learn and teach organic farming techniques in Hadapsar",
      points: 120,
      difficulty: "Medium",
      location: "Hadapsar Agricultural Area, Pune",
      type: "agriculture",
      status: "available",
      coordinates: { lat: 18.5089, lng: 73.926 },
      icon: SeedIcon,
      hasQuiz: true,
      quizQuestions: [
        {
          question: "Which is NOT an organic farming practice?",
          options: ["Composting", "Crop rotation", "Chemical pesticides", "Natural fertilizers"],
          correct: 2,
        },
      ],
    },
  ]

  const handleViewChange = (newView: string) => {
    const views = ["map", "tasks", "leaderboard", "rewards", "profile"]
    const currentIndex = views.indexOf(currentView)
    const newIndex = views.indexOf(newView)
    setSlideDirection(newIndex > currentIndex ? "right" : "left")
    setCurrentView(newView as any)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="animate-float">
              <LeafIcon />
            </div>
            <h1 className="text-xl font-bold tracking-wide">GreenX</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <AwardIcon />
              <span className="ml-1 font-bold">{studentProfile.ecoPoints} Points</span>
            </Badge>
            <div
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover-lift border-2 border-white/30"
              onClick={() => setShowProfileSetup(true)}
            >
              <span className="text-white font-bold text-sm">
                {studentProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-b-2 border-orange-200 p-2">
        <div className="grid grid-cols-3 gap-1 max-w-md mx-auto">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 hover-lift ${
              currentView === "map"
                ? "bg-primary text-primary-foreground shadow-lg animate-bounce-in"
                : "hover:bg-orange-100"
            }`}
            onClick={() => handleViewChange("map")}
          >
            <MapPinIcon />
            <span className="text-xs font-medium">Map</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 hover-lift ${
              currentView === "tasks"
                ? "bg-primary text-primary-foreground shadow-lg animate-bounce-in"
                : "hover:bg-orange-100"
            }`}
            onClick={() => handleViewChange("tasks")}
          >
            <UsersIcon />
            <span className="text-xs font-medium">Tasks</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 hover-lift ${
              currentView === "leaderboard"
                ? "bg-primary text-primary-foreground shadow-lg animate-bounce-in"
                : "hover:bg-orange-100"
            }`}
            onClick={() => handleViewChange("leaderboard")}
          >
            <TrophyIcon />
            <span className="text-xs font-medium">Leaders</span>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-1 max-w-xs mx-auto mt-1">
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 hover-lift ${
              currentView === "rewards"
                ? "bg-primary text-primary-foreground shadow-lg animate-bounce-in"
                : "hover:bg-orange-100"
            }`}
            onClick={() => handleViewChange("rewards")}
          >
            <AwardIcon />
            <span className="text-xs font-medium">Rewards</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 hover-lift ${
              currentView === "profile"
                ? "bg-primary text-primary-foreground shadow-lg animate-bounce-in"
                : "hover:bg-orange-100"
            }`}
            onClick={() => handleViewChange("profile")}
          >
            <UserIcon />
            <span className="text-xs font-medium">Profile</span>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className={`p-4 space-y-4 transition-all duration-500 ease-out ${
            slideDirection === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
          }`}
        >
          {currentView === "map" && <PuneMapView tasks={availableTasks} onTaskSelect={setSelectedTask} />}
          {currentView === "tasks" && (
            <TasksView
              tasks={availableTasks}
              onQuizStart={(task) => {
                setSelectedQuizTask(task)
                setShowQuiz(true)
              }}
            />
          )}
          {currentView === "leaderboard" && <LeaderboardView />}
          {currentView === "rewards" && <RewardsView />}
          {currentView === "profile" && (
            <ProfileView profile={studentProfile} onEdit={() => setShowProfileSetup(true)} />
          )}
        </div>
      </div>

      {/* Modals */}
      {selectedTask && <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />}
      {showProfileSetup && (
        <ProfileSetupModal
          profile={studentProfile}
          onSave={setStudentProfile}
          onClose={() => setShowProfileSetup(false)}
        />
      )}
      {showQuiz && selectedQuizTask && (
        <QuizModal
          task={selectedQuizTask}
          onClose={() => {
            setShowQuiz(false)
            setSelectedQuizTask(null)
          }}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-in-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-in-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }
        .hover-lift:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-glow {
          0% { opacity: 0.7; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { opacity: 0; box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { opacity: 0; box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  )
}

function PuneMapView({ tasks, onTaskSelect }: { tasks: any[]; onTaskSelect: (task: any) => void }) {
  const [userLocation] = useState({ lat: 18.5204, lng: 73.8567 }) // Pune center

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tasks Nearby</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <NavigationIcon />
            <span className="ml-1">My Location</span>
          </Button>
          <Button variant="outline" size="sm">
            <TargetIcon />
            <span className="ml-1">Find Tasks</span>
          </Button>
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden" style={{ width: "100%", height: "450px" }}>
        <iframe
          width="100%"
          height="450px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=pune&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="w-full h-full rounded-lg"
        />

        {tasks.map((task, index) => {
          const IconComponent = task.icon
          const positions = [
            { x: 45, y: 40 }, // Shivajinagar
            { x: 30, y: 35 }, // Aundh
            { x: 40, y: 60 }, // Kothrud
            { x: 55, y: 45 }, // Fergusson College
            { x: 70, y: 55 }, // Hadapsar
          ]
          const position = positions[index] || { x: 50, y: 50 }

          return (
            <div
              key={task.id}
              // Removed hover scale effect and improved positioning stability
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                pointerEvents: "auto",
                position: "absolute",
              }}
              onClick={() => onTaskSelect(task)}
            >
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center ${
                    task.type === "plantation"
                      ? "bg-green-500"
                      : task.type === "cleanup"
                        ? "bg-blue-500"
                        : task.type === "energy"
                          ? "bg-yellow-500"
                          : task.type === "agriculture"
                            ? "bg-amber-600"
                            : "bg-orange-500"
                  }`}
                >
                  <IconComponent />
                </div>

                {/* Points Badge */}
                <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs font-bold">
                  {task.points}
                </div>
              </div>
            </div>
          )
        })}

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
          <h3 className="text-sm font-semibold mb-2">Pune Environmental Tasks</h3>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Plantation</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Cleanup</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Energy</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Education</span>
            </div>
          </div>
        </div>

        {/* Current Location Info */}
        <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">You are here</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Pune, Maharashtra</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="transition-transform hover:scale-105">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-primary">{tasks.length}</p>
            <p className="text-xs text-muted-foreground">Tasks in Pune</p>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-secondary">3</p>
            <p className="text-xs text-muted-foreground">Tasks Nearby</p>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600">650</p>
            <p className="text-xs text-muted-foreground">Total Points</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TasksView({ tasks, onQuizStart }: { tasks: any[]; onQuizStart: (task: any) => void }) {
  const [acceptedTasks, setAcceptedTasks] = useState<string[]>([])

  const handleAcceptTask = (taskId: string) => {
    setAcceptedTasks((prev) => [...prev, taskId])
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🌱 Environmental Tasks</h2>
        <p className="text-muted-foreground">Complete tasks to earn eco points and help the environment!</p>
      </div>

      <div className="grid gap-4">
        {tasks.map((task, index) => {
          const IconComponent = task.icon
          const isAccepted = acceptedTasks.includes(task.id)

          return (
            <div
              key={task.id}
              className="bg-card rounded-2xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all duration-300 hover-lift animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 flex-col">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ${
                    task.type === "plantation"
                      ? "bg-green-500"
                      : task.type === "cleanup"
                        ? "bg-blue-500"
                        : task.type === "energy"
                          ? "bg-yellow-500"
                          : task.type === "agriculture"
                            ? "bg-amber-600"
                            : "bg-orange-500"
                  }`}
                >
                  <IconComponent />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        +{task.points} points
                      </Badge>
                      <Badge variant="outline">{task.difficulty}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-3">{task.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPinIcon />
                    <span className="text-sm text-muted-foreground">{task.location}</span>
                    <span className="text-sm text-muted-foreground">• {task.duration}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    {!isAccepted ? (
                      <>
                        <Button
                          onClick={() => onQuizStart(task)}
                          className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-1.5 px-3 rounded-lg transition-all duration-300"
                        >
                          <span className="text-xs sm:text-sm">Take Quiz</span>
                        </Button>
                        <Button
                          onClick={() => handleAcceptTask(task.id)}
                          variant="outline"
                          className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-1.5 px-3 rounded-lg transition-all duration-300"
                        >
                          <span className="text-xs sm:text-sm">Accept Task</span>
                        </Button>
                      </>
                    ) : (
                      <div className="flex-1 bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-xl text-center">
                        ✅ Task Accepted!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProfileView({ profile, onEdit }: { profile: any; onEdit: () => void }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Student Profile</h2>
        <Button variant="outline" size="sm" onClick={onEdit}>
          <EditIcon />
          <span className="ml-1">Edit Profile</span>
        </Button>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
              {profile.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{profile.name}</h3>
              <p className="text-muted-foreground">{profile.college}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant={profile.verified ? "default" : "secondary"}>
                  {profile.verified ? "✓ Verified" : "⚠ Unverified"}
                </Badge>
                <span className="text-sm text-muted-foreground">ID: {profile.studentId}</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-2xl font-bold text-primary">{profile.ecoPoints}</p>
              <p className="text-sm text-muted-foreground">Eco Points</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-secondary">{profile.tasksCompleted}</p>
              <p className="text-sm text-muted-foreground">Tasks Done</p>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <p className="text-2xl font-bold text-green-600">#{profile.rank}</p>
              <p className="text-sm text-muted-foreground">College Rank</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <TreeIcon />
              </div>
              <div>
                <p className="font-semibold">Tree Planter</p>
                <p className="text-sm text-muted-foreground">Planted 25+ trees</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <DropletsIcon />
              </div>
              <div>
                <p className="font-semibold">Water Guardian</p>
                <p className="text-sm text-muted-foreground">Cleaned 5+ water bodies</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProfileSetupModal({
  profile,
  onSave,
  onClose,
}: { profile: any; onSave: (profile: any) => void; onClose: () => void }) {
  const [formData, setFormData] = useState(profile)

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">College/School</label>
            <select
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              className="w-full p-2 border rounded-md mt-1"
            >
              <option>MIT College of Engineering, Pune</option>
              <option>Fergusson College, Pune</option>
              <option>Symbiosis Institute, Pune</option>
              <option>COEP Technological University, Pune</option>
              <option>VIT Pune</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Student ID</label>
            <input
              type="text"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              className="w-full p-2 border rounded-md mt-1"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.verified}
              onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
              className="rounded"
            />
            <label className="text-sm">Profile verified by institution</label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className="flex-1">
              Save Profile
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function QuizModal({ task, onClose }: { task: any; onClose: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < task.quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    task.quizQuestions.forEach((q: any, index: number) => {
      if (selectedAnswers[index] === q.correct) correct++
    })
    return correct
  }

  const score = calculateScore()
  const passed = score >= Math.ceil(task.quizQuestions.length * 0.7)

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className={`text-6xl ${passed ? "text-green-500" : "text-red-500"}`}>{passed ? "🎉" : "😔"}</div>
            <div>
              <p className="text-2xl font-bold">
                {score}/{task.quizQuestions.length}
              </p>
              <p className="text-muted-foreground">
                {passed ? "Congratulations! You passed!" : "You need 70% to pass. Try again!"}
              </p>
            </div>
            {passed && (
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 font-semibold">Task Unlocked!</p>
                <p className="text-sm text-green-600">You can now accept "{task.title}"</p>
              </div>
            )}
            <div className="flex gap-2">
              {passed ? (
                <Button onClick={onClose} className="flex-1">
                  Accept Task
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setSelectedAnswers([])
                    setShowResults(false)
                  }}
                  className="flex-1"
                >
                  Try Again
                </Button>
              )}
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = task.quizQuestions[currentQuestion]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Quiz: {task.title}</CardTitle>
            <Badge variant="outline">
              {currentQuestion + 1}/{task.quizQuestions.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / task.quizQuestions.length) * 100}%` }}
            ></div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{question.question}</h3>
            <div className="space-y-2">
              {question.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-3 text-left border rounded-lg transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-primary bg-primary/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined} className="flex-1">
              {currentQuestion < task.quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MapView({ tasks, onTaskSelect }: { tasks: any[]; onTaskSelect: (task: any) => void }) {
  const [userLocation, setUserLocation] = useState({ x: 50, y: 50 })

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Environmental Tasks Near You</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <NavigationIcon />
            <span className="ml-1">Center Map</span>
          </Button>
          <Button variant="outline" size="sm">
            <TargetIcon />
            <span className="ml-1">Find Tasks</span>
          </Button>
        </div>
      </div>

      {/* Interactive Map */}
      <div
        className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden"
        style={{ height: "400px" }}
      >
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* User Location */}
        <div
          className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse z-10"
          style={{
            left: `${userLocation.x}%`,
            top: `${userLocation.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
        </div>

        {/* Task Markers */}
        {tasks.map((task) => {
          const IconComponent = task.icon
          const distance = Math.sqrt(
            Math.pow(task.coordinates.x - userLocation.x, 2) + Math.pow(task.coordinates.y - userLocation.y, 2),
          )

          return (
            <div
              key={task.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                left: `${task.coordinates.x}%`,
                top: `${task.coordinates.y}%`,
              }}
              onClick={() => onTaskSelect(task)}
            >
              {/* Task Marker */}
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 ${
                    task.type === "plantation"
                      ? "bg-green-500"
                      : task.type === "cleanup"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                  }`}
                >
                  <IconComponent />
                </div>

                {/* Distance Badge */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 text-xs font-semibold shadow-md">
                  {Math.round(distance * 0.1)}km
                </div>

                {/* Pulse Animation for Nearby Tasks */}
                {distance < 20 && (
                  <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-75"></div>
                )}
              </div>
            </div>
          )
        })}

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
          <h3 className="text-sm font-semibold mb-2">Task Types</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Tree Plantation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Water Cleanup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Education</span>
            </div>
          </div>
        </div>

        {/* User Location Info */}
        <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="font-semibold">Your Location</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">College Campus Area</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-primary">{tasks.length}</p>
            <p className="text-xs text-muted-foreground">Tasks Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-secondary">2</p>
            <p className="text-xs text-muted-foreground">Tasks Nearby</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600">330</p>
            <p className="text-xs text-muted-foreground">Total Points</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const RewardsView = () => {
  const giftVouchers = [
    { brand: "Amazon", points: 100, value: "₹500", icon: "🛒", color: "from-orange-400 to-yellow-400" },
    { brand: "Flipkart", points: 120, value: "₹600", icon: "🛍️", color: "from-blue-400 to-purple-400" },
    { brand: "BookMyShow", points: 80, value: "₹400", icon: "🎬", color: "from-red-400 to-pink-400" },
    { brand: "Zomato", points: 90, value: "₹450", icon: "🍕", color: "from-red-500 to-orange-500" },
    { brand: "Uber", points: 110, value: "₹550", icon: "🚗", color: "from-gray-600 to-black" },
    { brand: "Myntra", points: 130, value: "₹650", icon: "👕", color: "from-pink-400 to-purple-500" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🎁 Amazing Rewards!</h2>
        <p className="text-muted-foreground">Exchange your eco points for awesome gifts!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {giftVouchers.map((voucher, index) => (
          <div
            key={voucher.brand}
            className="bg-card rounded-2xl p-6 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all duration-300 hover-lift animate-bounce-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`bg-gradient-to-r ${voucher.color} rounded-xl p-4 mb-4`}>
              <div className="text-center">
                <div className="text-4xl mb-2 animate-wiggle" style={{ animationDelay: `${index * 0.2}s` }}>
                  {voucher.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{voucher.brand}</h3>
                <p className="text-white/90 text-lg font-semibold">{voucher.value} Voucher</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{voucher.points} Points</div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                🎯 Redeem Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-2 border-green-200">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-float">🌟</div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Keep Going, Eco Warrior!</h3>
          <p className="text-green-600">Complete more environmental tasks to unlock even better rewards!</p>
        </div>
      </div>
    </div>
  )
}

function TaskDetailModal({ task, onClose }: { task: any; onClose: () => void }) {
  const IconComponent = task.icon

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  task.type === "plantation"
                    ? "bg-green-500"
                    : task.type === "cleanup"
                      ? "bg-blue-500"
                      : "bg-orange-500"
                }`}
              >
                <IconComponent />
              </div>
              <div>
                <CardTitle className="text-lg">{task.title}</CardTitle>
                <Badge variant="outline" className="text-xs mt-1">
                  {task.difficulty}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{task.description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <MapPinIcon />
              <span>{task.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <AwardIcon />
              <span>{task.points} points reward</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1">Accept Task</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TeacherDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tree Plantation Drive",
      assignedStudents: 15,
      completed: 8,
      pending: 7,
      status: "active",
    },
    {
      id: 2,
      title: "River Cleanup Initiative",
      assignedStudents: 12,
      completed: 12,
      pending: 0,
      status: "completed",
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LeafIcon />
            <h1 className="text-xl font-bold">GreenX - Teacher Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              <UsersIcon />
              <span className="ml-1">25 Students</span>
            </Badge>
            <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">TP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Tasks</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <MapPinIcon />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Students Enrolled</p>
                  <p className="text-2xl font-bold">25</p>
                </div>
                <UsersIcon />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Tasks Completed</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
                <AwardIcon />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Task Management</CardTitle>
              <Button>Create New Task</Button>
            </div>
            <CardDescription>Monitor and manage environmental tasks for your students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {task.assignedStudents} students assigned • {task.completed} completed • {task.pending} pending
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={task.status === "completed" ? "default" : "secondary"}>{task.status}</Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const LeaderboardView = () => {
  const colleges = [
    { name: "🏫 Fergusson College", points: 2450, rank: 1, students: 156 },
    { name: "🎓 COEP Pune", points: 2380, rank: 2, students: 142 },
    { name: "🏛️ Pune University", points: 2290, rank: 3, students: 198 },
    { name: "🎯 MIT Pune", points: 2150, rank: 4, students: 134 },
    { name: "📚 Symbiosis College", points: 2050, rank: 5, students: 167 },
  ]

  const topStudents = [
    { name: "Arjun Sharma", points: 450, college: "Fergusson College", avatar: "🦸‍♂️" },
    { name: "Priya Patel", points: 420, college: "COEP Pune", avatar: "🦸‍♀️" },
    { name: "Rahul Kumar", points: 390, college: "MIT Pune", avatar: "🧑‍🎓" },
    { name: "Sneha Joshi", points: 380, college: "Pune University", avatar: "👩‍🎓" },
    { name: "Vikram Singh", points: 360, college: "Symbiosis College", avatar: "🧑‍💻" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🏆 Eco Champions!</h2>
        <p className="text-muted-foreground">See who's leading the fight for our planet!</p>
      </div>

      {/* College Leaderboard */}
      <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-orange-200">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">🏫 College Rankings</h3>
        <div className="space-y-3">
          {colleges.map((college, index) => (
            <div
              key={college.name}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover-lift animate-bounce-in ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300"
                  : "bg-muted/50 hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`text-2xl font-bold ${
                  index === 0
                    ? "text-yellow-600 animate-wiggle"
                    : index === 1
                      ? "text-gray-500"
                      : index === 2
                        ? "text-orange-600"
                        : "text-muted-foreground"
                }`}
              >
                {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${college.rank}`}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg">{college.name}</h4>
                <p className="text-sm text-muted-foreground">👥 {college.students} active students</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">{college.points}</div>
                <div className="text-xs text-muted-foreground">eco points</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Leaderboard */}
      <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-orange-200">
        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">⭐ Top Students</h3>
        <div className="space-y-3">
          {topStudents.map((student, index) => (
            <div
              key={student.name}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover-lift animate-bounce-in ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300"
                  : "bg-muted/50 hover:bg-muted"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              <div className="flex-1">
                <h4 className="font-bold text-lg">{student.name}</h4>
                <p className="text-sm text-muted-foreground">{student.college}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">{student.points}</div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
