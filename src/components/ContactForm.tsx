"use client";
import { CutCornerButton } from "@/components/CutCornerButton";
import { CutCornerInput } from "@/components/CutCornerInput";
import { CutCornerTextarea } from "@/components/CutCornerTextarea";
import { useForm, ValidationError } from "@formspree/react";

interface ContactFormProps {
  formId: string;
}

export default function ContactForm({ formId }: ContactFormProps) {
  const [state, handleSubmit, reset] = useForm(formId);

  const formHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      reset();
    }
  };

  return (
    <form className="flex flex-col mt-8" onSubmit={formHandler} method="POST">
      <label htmlFor="name">Name</label>
      <CutCornerInput
        type="text"
        name="name"
        id="name"
        className="mt-1"
        placeholder="Your name"
        required
      />
      <label htmlFor="email" className="mt-4">
        Email
      </label>
      <CutCornerInput
        type="email"
        name="email"
        id="email"
        className="mt-1"
        placeholder="Your email"
        required
      />
      <label htmlFor="message" className="mt-4">
        Message
      </label>
      <CutCornerTextarea
        name="message"
        id="message"
        className="mt-1"
        placeholder="Your message"
      />

      <ValidationError errors={state.errors} className="text-red-500 mt-2" />
      {state.succeeded && (
        <p className="text-green-500 mt-2">Thanks for your submission!</p>
      )}
      <CutCornerButton
        type="submit"
        disabled={state.submitting}
        className="mt-4"
      >
        Send Message
      </CutCornerButton>
    </form>
  );
}
