import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'thanarut.rung@gmail.com', link: '#contact' },
    { icon: Phone, title: 'Phone', value: '+66 99-254-7017', link: 'tel:+66992547017' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ChokD', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/thanarut-rungruangwisetchai-285465328/',
      label: 'LinkedIn',
    },
  ];

  return (
    <section
      id="contact"
      className={`transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-slate-50'
      } py-12`} // ลด padding บน/ล่าง
    >
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mb-4"></div>
          <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Get In Touch
            </h4>
        </div>

        {/* Get In Touch + Social Links Centered */}
        <div className="flex flex-col items-center space-y-6">
          {/* Get In Touch */}
          <div className="w-full max-w-md">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 group ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Follow Me */}
          <div className="w-full max-w-md text-center">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg ${
                    isDarkMode
                      ? 'bg-gray-900 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600'
                      : 'bg-white text-slate-600 hover:text-white hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-600'
                  }`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
