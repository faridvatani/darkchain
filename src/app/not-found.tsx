import { Hexagon } from "@/components/Hexagon";

export default function NotFound() {
  return (
    <section className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} duration={50} reverse />
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            <span className="block text-8xl mb-4">404</span>
            Page Not Found
          </h2>
          <p className="text-base lg:text-lg text-zinc-400 text-center mt-6 max-w-base mx-auto">
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    </section>
  );
}
