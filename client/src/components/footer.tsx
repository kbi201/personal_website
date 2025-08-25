export default function Footer() {
  const socialLinks = [
    {
      href: "mailto:kellyblancairahola@hotmail.com",
      icon: "fas fa-envelope",
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/kelly-irahola-775b53212/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
    },
    {
      href: "tel:+12816771170",
      icon: "fas fa-phone",
      label: "Phone",
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Kelly B. Irahola Vallejos</h3>
          <p className="text-slate-300 mb-6">
            Computer Science Graduate | Adept in Machine Learning | Tech Educator
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-slate-300 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-600 pt-8">
            <p className="text-slate-400">&copy; 2025 Kelly Irahola. All rights reserved.</p>
            <p className="text-slate-400 text-sm mt-2">
              Designed with modern web technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
