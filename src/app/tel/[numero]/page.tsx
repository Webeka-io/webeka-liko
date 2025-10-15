// app/tel/[numero]/page.tsx
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { numero: string } }) {
  const phone = params.numero.replace(/^0/, "+33");
  redirect(`tel:${phone}`);
}
