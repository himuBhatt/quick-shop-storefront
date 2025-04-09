
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import GithubAuth from "@/components/auth/GithubAuth";

const Auth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign in to QuickShop</h1>
          <p className="text-muted-foreground mt-2">
            Choose your preferred sign in method
          </p>
        </div>

        <Alert className="bg-yellow-50 border-yellow-200">
          <InfoIcon className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-600">
            This page requires Supabase integration to fully work. Please connect your project to Supabase first.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <GithubAuth />
          {/* Add other auth providers here in the future */}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-shop-600 hover:underline">
              Sign up
            </Link>
          </p>
          <Link to="/" className="text-sm text-shop-600 hover:underline block mt-2">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
