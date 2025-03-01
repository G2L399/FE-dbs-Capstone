import { Button } from "@shadcn/button";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className="max-w-7xl mx-auto border-t border-purple-800 mt-10 pt-6 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold mb-4">LifeTrip</h3>
          <p className="text-sm text-gray-300">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
        </div>

        <nav>
          <h3 className="text-sm font-bold mb-4 uppercase">Company</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <h3 className="text-sm font-bold mb-4 uppercase">Support</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold mb-4 uppercase">Stay connected</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-purple-800/30 rounded-l-lg px-4 py-2 outline-none flex-1"
            />
            <Button className="bg-purple-600 font-normal rounded-none size-full rounded-r-lg px-4 py-2 hover:bg-purple-600/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400">
        &copy; 2025 YuDeGo. All rights reserved.
      </div>
    </footer>
  );
}
