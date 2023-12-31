import SignInBtns from "@/components/SignInBtns";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "@/app/Navbar";
export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <SignInBtns />
      </div>
    </>
  );
}
