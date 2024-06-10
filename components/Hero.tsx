import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Bold & Powerful Heading</h1>
          <p className="text-xl mb-6">
            A Short Sentence is also enough,
            <br />
            It depends on your situation.
          </p>
          <Link href="/call-to-action">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Call to Action
            </a>
          </Link>
        </div>
        <div className="max-w-lg">
          <Image
            src="/path/to/your/image.jpg" // Update this path to the correct one
            alt="Hero Image"
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
