import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ubuntu-green/10 to-ubuntu-blue/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Back to home */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-ubuntu-green transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Ubuntu Intelligence
        </Link>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join Ubuntu Intelligence
          </h1>
          <p className="text-muted-foreground">
            Create your account to start building Africa's digital future
          </p>
        </div>

        {/* Clerk Sign Up Component */}
        <div className="flex justify-center">
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "border-0 shadow-xl",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-ubuntu-green hover:bg-ubuntu-green/90 text-white",
                footerActionLink: "text-ubuntu-green hover:text-ubuntu-green/90"
              },
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            By signing up, you agree to our commitment to ethical AI and data sovereignty
          </p>
        </div>
      </div>
    </div>
  )
}
