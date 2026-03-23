import React from "react";
import { useUserSession } from "@/hooks/user/useUserSession";
import Loader from "@/components/Loader";

export default function Index() {
  const { activeSession } = useUserSession();

  React.useEffect(() => {
    activeSession();
  }, [activeSession]);
  return <Loader />;
}
