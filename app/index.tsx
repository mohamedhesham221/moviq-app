import React from "react";
import { useUserSession } from "@/hooks/user/useUserSession";
import Loader from "@/components/Loader";

export default function Index() {
  const { activeSession } = useUserSession();

  // check if user still in login session if not redirect user to welcome screen
  React.useEffect(() => {
    activeSession();
  }, [activeSession]);
  return <Loader />;
}
