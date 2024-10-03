import { Metadata } from "next";
import { InteriorContent } from "@/components/InteriorContent";
import { InteriorHero } from "@/components/InteriorHero";
import { CutCornerButton } from "@/components/CutCornerButton";
import { CutCornerInput } from "@/components/CutCornerInput";
import { CutCornerTextarea } from "@/components/CutCornerTextarea";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact us to learn more about our products and services.",
};

export default async function Contact() {
  return (
    <main>
      <InteriorHero>
        <div className="max-w-3xl mx-auto">
          <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Let&apos;s TALK
          </p>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
            Contact Us
          </h1>
          <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
            We&apos;re here to help and answer any questions you may have. Reach
            out to us to learn more about our services, get support, or to apply
            for positions.
          </p>
        </div>
      </InteriorHero>
      <InteriorContent>
        <div className="max-w-xl mx-auto">
          <h2 className="font-heading font-black text-3xl">
            What can we help you with?
          </h2>
          <form className="flex flex-col mt-8">
            <label htmlFor="name">Name</label>
            <CutCornerInput
              type="text"
              name="name"
              id="name"
              className="mt-1"
            />

            <label htmlFor="email" className="mt-4">
              Email
            </label>
            <CutCornerInput
              type="email"
              name="email"
              id="email"
              className="mt-1"
            />

            <label htmlFor="message" className="mt-4">
              Message
            </label>
            <CutCornerTextarea name="message" id="message" className="mt-1" />
            <CutCornerButton className="mt-4">Send Message</CutCornerButton>
          </form>
        </div>
      </InteriorContent>
    </main>
  );
}
