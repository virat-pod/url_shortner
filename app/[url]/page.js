import { redirect } from "next/navigation";
import { RedirectUrl } from "@/lib/actions/links";

const linkDirect = async ({ params }) => {
  const { url } = await params;
  console.log("giving url", url);
  const link = await RedirectUrl(url);
  if (!link.success) {
    redirect("/");
  }
  redirect(link.data.url);
};

export default linkDirect;
