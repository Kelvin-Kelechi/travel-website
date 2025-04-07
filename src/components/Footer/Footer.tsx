export default function Footer() {
  return (
    <footer className="bg-white py-12 px-18">
      <div className="max-w-7xl  px-18  grid md:grid-cols-5 gap-8 text-sm  ">
        <div>
          <h4 className="font-bold mb-2">Need Travelsy Help?</h4>
          <p>Call us 24/7</p>
          <p>Call Us: +254 716909 815</p>
          <p>Email Us: info@travelsy.com </p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="text-[#4A4A4A]">
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms of Use</li>
            <li>Privacy Statement</li>
            <li>Give Us Feedback</li>
            <li>Partner With Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Other Services & Support</h4>
          <ul className="text-[#4A4A4A]">
            <li>Your Account</li>
            <li>Camping Locations</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Customer Service Help</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="text-[#4A4A4A]">
            <li>Your Account</li>
            <li>Camping Locations</li>
            <li>Activities</li>
            <li>Hire Equipment</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Mailing List</h4>
          <label
            className="block text-sm text-[#4A4A4A] mb-3"
            htmlFor="email-input"
          >
            Sign Up for our mailing lists and get the latest offers and
            promotions straight in your inbox.
          </label>
          <div className="flex flex-col sm:flex-row items-stretch  ">
            <input
              id="email-input"
              type="email"
              placeholder="Your Email"
              className="border border-[#E4E4E4] p-2 flex-1  "
            />
            <button className="bg-[#FF5200] w-[94px] h-[40px] text-white px-4 py-2  ">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Info:</h4>
          <ul className="text-[#4A4A4A]">
            <li>2nd Floor, Fedha Plaza, Westlands, Nairobi, Kenya.</li>
            <li>P.O Box 7231-00300 Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
