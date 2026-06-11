import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/profile");
  }

  return (
    <div>
      <h1>Your Profil</h1>
    </div>
  );
}
