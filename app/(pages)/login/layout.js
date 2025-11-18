import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = await cookieStore.get("token")?.value;

  if (token) {
    return redirect("/");
  }

  return <>{children}</>;
}
