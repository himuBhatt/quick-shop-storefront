
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/use-auth";

interface GithubAuthProps {
  redirectTo?: string;
}

const GithubAuth = ({ redirectTo = window.location.origin }: GithubAuthProps) => {
  const { toast } = useToast();
  const { signInWithGithub } = useAuth();

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      toast({
        title: "Supabase Required",
        description: "Please connect to Supabase to enable GitHub authentication.",
        variant: "destructive",
      });
    } catch (error) {
      console.error("GitHub login error:", error);
      toast({
        title: "Authentication Failed",
        description: "There was an error logging in with GitHub. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button 
      onClick={handleGithubLogin}
      variant="outline" 
      className="w-full flex items-center gap-2"
    >
      <Github className="h-5 w-5" />
      <span>Continue with GitHub</span>
    </Button>
  );
};

export default GithubAuth;
