import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ubuntu-orange/10 to-ubuntu-purple/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Back to home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-ubuntu-orange transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Ubuntu Intelligence
        </Link>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your Ubuntu Intelligence dashboard
          </p>
        </div>

        {/* Clerk Sign In Component */}
        <div className="flex justify-center">
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "border-0 shadow-xl",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white",
                footerActionLink: "text-ubuntu-orange hover:text-ubuntu-orange/90"
              },
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Building Africa's ethical and inclusive digital future
          </p>
        </div>
      </div>
    </div>
  )
}
