"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { toast } from "react-toastify";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const toastify = toast.loading("Sending...");

    const name = nameRef.current?.value ?? "name";
    const email = emailRef.current?.value ?? "email";
    const message = messageRef.current?.value ?? "message";

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!result.error) {
        toast.update(toastify, {
          render: "Email sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      } else {
        throw new Error("Failed to send email");
      }
    } catch () {
      toast.update(toastify, {
        render: "Failed to send the message. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full min-h-max font-asap">
        <div className="flex flex-col justify-center items-center w-full h-[80vh]">
          <form
            className="flex flex-col w-3/4 items-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:border-blue-500"
              required
              placeholder="name"
              id="name"
              ref={nameRef}
            />
            <input
              className="w-full p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:border-blue-500"
              type="email"
              required
              placeholder="email"
              id="email"
              ref={emailRef}
            />
            <textarea
              className="w-full min-h-48 p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:border-blue-500"
              required
              placeholder="message"
              id="message"
              ref={messageRef}
            ></textarea>
            <input
              className={`${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 cursor-pointer'} text-white p-2 max-w-max rounded-xl`}
              type="submit"
              disabled={isLoading}
              value={"Send Message"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
