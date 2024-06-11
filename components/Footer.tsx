import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xl font-bold">MySaaS</h4>
            <p className="mt-2 text-gray-400">
              © 2024 MySaaS, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.49v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.245h-1.918c-1.504 0-1.796.715-1.796 1.764v2.307h3.59l-.468 3.622h-3.122v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.35c0-.73-.595-1.325-1.325-1.325z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.016-.608 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .385.044.761.127 1.122-4.087-.205-7.72-2.164-10.148-5.144-.423.726-.666 1.562-.666 2.457 0 1.693.863 3.186 2.173 4.065-.803-.026-1.56-.246-2.22-.616v.061c0 2.364 1.681 4.338 3.911 4.787-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.415-1.684 1.319-3.808 2.104-6.114 2.104-.398 0-.79-.023-1.175-.067 2.179 1.396 4.768 2.209 7.548 2.209 9.056 0 14.002-7.504 14.002-14.002 0-.213-.004-.426-.015-.637.961-.693 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0h-20.46c-.977 0-1.77.793-1.77 1.77v20.459c0 .977.793 1.771 1.77 1.771h20.459c.978 0 1.771-.794 1.771-1.771v-20.459c0-.977-.793-1.77-1.77-1.77zm-15.075 20.452h-3.914v-12.457h3.914v12.457zm-1.956-14.162c-1.268 0-2.294-1.027-2.294-2.295s1.027-2.294 2.294-2.294 2.295 1.026 2.295 2.294-1.027 2.295-2.295 2.295zm14.255 14.162h-3.913v-6.419c0-1.529-.031-3.5-2.134-3.5-2.134 0-2.462 1.668-2.462 3.393v6.526h-3.913v-12.457h3.756v1.699h.051c.524-.997 1.805-2.051 3.719-2.051 3.978 0 4.709 2.617 4.709 6.025v6.783z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
