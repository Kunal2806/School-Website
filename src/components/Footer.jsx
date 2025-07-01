import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold">Vivekanand Shikshan Sansthan</h2>
          <p className="text-sm mt-2">We Help You Help Others</p>
          <p className="text-sm mt-4">Affiliated to CBSE</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">🗺 Near Power House,<br /> Pindwara, Dist-Sirohi (Rajasthan)</p>
          <p className="text-sm mt-1">PIN: 307022</p>
          <p className="text-sm mt-2">📞 9982109201, 9414448254</p>
          <p className="text-sm">✉️ vsspindwara@gmail.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/project" className="hover:underline">Projects</Link></li>
            <li><Link to="/" className="hover:underline">Our Team</Link></li>
            <li><Link to="/support" className="hover:underline">Support Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Donation Details</h3>
          <p className="text-sm">Bank: Bank Of Baroda</p>
          <p className="text-sm">A/C No: 55310100000211</p>
          <p className="text-sm">IFSC Code: BARB0PINSIR</p>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
