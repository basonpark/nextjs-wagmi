import Image from "next/image";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Profile />
    </div>
  );
}
