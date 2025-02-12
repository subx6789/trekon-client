"use client";
import { Construction, ArrowLeft } from "lucide-react";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";

const BookNowTrek = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Construction Icon with Animation */}
      <div className="mb-8 relative">
        <div className="absolute -inset-4 bg-gray-100 rounded-full animate-spin-slow"></div>
        <Construction className="h-16 w-16 text-black relative animate-bounce-slow" />
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-bold text-black mb-4 text-center">
        Page Under Construction
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        We&apos;re working hard to bring you something amazing
      </p>

      {/* Navigation */}
      <div className="flex gap-4">
        <ButtonClient
          onClick={() => window.history.back()}
          size="lg"
          className="bg-black text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </ButtonClient>

        <ButtonClient
          href="/"
          size="lg"
          variant="bordered"
          className="text-black border-black"
        >
          Go Home
        </ButtonClient>
      </div>
    </div>
  );
};

export default BookNowTrek;
