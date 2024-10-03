import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { getPositions } from "@/lib/careersService";
import {
  getColorFromPositionCategory,
  getColorFromPositionType,
} from "@/utils/utils";
import { Metadata } from "next";
import { InteriorContent } from "@/components/InteriorContent";
import { InteriorHero } from "@/components/InteriorHero";
import { Positions } from "@/types/types";
import MotionLink from "@/components/MotionLink";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team and help us build the future of the web.",
};

export default async function Careers() {
  const data: Positions[] = await getPositions();
  const positions = data.map((position) => position.metadata);

  return (
    <main>
      <InteriorHero>
        <div className="max-w-3xl mx-auto">
          <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Join the team
          </p>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4">
            We are hiring
          </h1>
          <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
            We are always looking for talented individuals passionate about
            building blockchain products that make a diference.
          </p>
        </div>
      </InteriorHero>
      <InteriorContent>
        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col gap-8 lg:gap-12">
            {positions.map((position, index) => (
              <MotionLink
                key={index}
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                }}
              >
                <Card
                  key={index}
                  color={getColorFromPositionCategory(position.category)}
                  buttonText="Apply Now"
                >
                  <div className="flex items-center gap-3">
                    {position.remote && <Tag>Remote</Tag>}
                    <Tag color={getColorFromPositionType(position.type)}>
                      {position.type}
                    </Tag>
                  </div>
                  <h2 className="font-heading font-black text-3xl mt-6">
                    {position.title}
                  </h2>
                  <p className="text-lg mt-4 text-zinc-400">
                    {position.description}
                  </p>
                </Card>
              </MotionLink>
            ))}
          </div>
        </div>
      </InteriorContent>
    </main>
  );
}
