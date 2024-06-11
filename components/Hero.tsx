import Link from "next/link";
import Image from "next/image";
import image1 from "@public/image1.webp";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Bold & Powerful Heading</h1>
          <p className="text-xl mb-6">
            A Short Sentence is also enough,
            <br />
            It depends on your situation.
          </p>
          <Link
            href="/call-to-action"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Call to Action
          </Link>
        </div>
        <div className="max-w-lg">
          <Image
            src={image1} // A similar image of Keanu Reeves
            alt="Keanu Reeves"
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
