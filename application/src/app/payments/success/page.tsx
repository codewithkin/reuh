import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful",
};

export default function PaymentSuccess() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful! Your plan has been upgraded.
      </h1>
    </section>
  );
}
