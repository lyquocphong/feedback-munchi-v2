import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";

// Custom hook to redirect to the previous page if the user is authenticated
const useRedirectIfAuthenticated = () => {
  const { user } = useUser();

  if (user) {
    // Redirect to the previous page using the Next.js router
    return redirect("/dashboard");
  }
};

export default useRedirectIfAuthenticated;
