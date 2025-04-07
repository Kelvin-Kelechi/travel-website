export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm text-gray-700">
        <div>
          <h4 className="font-semibold mb-2">Need Travelsy Help?</h4>
          <p>Call us 24/7</p>
          <p>Tel: +254 716809158</p>
          <p>Email: info@travelsy.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Other Services</h4>
          <ul>
            <li>Rewards Program</li>
            <li>Partners</li>
            <li>Customer Service Help</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>Your Account</li>
            <li>Camping Locations</li>
            <li>Activities</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Mailing List</h4>
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full mb-2"
          />
          <button className="bg-[#FF5200] text-white px-4 py-2 w-full rounded">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10">
        © 2019 Travelsy Ltd. All rights reserved • Made in Kenya by Risalik
      </div>
    </footer>
  );
}
