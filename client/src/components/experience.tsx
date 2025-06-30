const experiences = [
  {
    id: 1,
    title: "Lead Teaching Assistant",
    company: "Girls Who Code",
    period: "June 2025 – Present",
    description: [
      "Currently leading instructional sessions for 70+ students in Python programming",
      "Expanded program reach with significantly increased class sizes",
      "Continuing collaboration with industry partners for STEM outreach",
    ],
    iconClass: "fas fa-code",
    iconColor: "text-primary",
    bgColor: "bg-primary",
    companyColor: "text-primary",
    side: "left",
  },
  {
    id: 2,
    title: "Events Assistant",
    company: "University of Exeter Student Guild",
    period: "Sep 2024 – June 2025",
    description: [
      "Facilitated various events to enhance student community engagement",
      "Strengthened public speaking and organizational skills",
    ],
    iconClass: "fas fa-calendar-alt",
    iconColor: "text-green-500",
    bgColor: "bg-green-500",
    companyColor: "text-green-500",
    side: "right",
  },
  {
    id: 3,
    title: "Lead Teaching Assistant",
    company: "Girls Who Code",
    period: "May 2024 – July 2024",
    description: [
      "Led instructional sessions for 40+ students in Python programming",
      "Collaborated with Bank of America and Synchrony for impactful outreach",
      "Provided live debugging support and managed breakout rooms",
    ],
    iconClass: "fas fa-code",
    iconColor: "text-accent",
    bgColor: "bg-accent",
    companyColor: "text-accent",
    side: "left",
  },
  {
    id: 4,
    title: "Workshop Leader",
    company: "ExCode Exeter Entrepreneurs",
    period: "Oct 2022 – Dec 2022",
    description: [
      "Led 8-week Python training using Google Colab for 25 students",
      "Tailored learning for beginners and supported diverse skill levels",
    ],
    iconClass: "fas fa-chalkboard-teacher",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500",
    companyColor: "text-orange-500",
    side: "right",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey through various roles showcasing leadership, teaching, and technical expertise.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${exp.side === 'right' ? 'md:justify-end' : ''}`}>
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.bgColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  <i className={`${exp.iconClass} text-white text-sm`}></i>
                </div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${exp.side === 'right' ? 'md:pl-8' : 'md:pr-8'} bg-slate-50 p-6 rounded-xl`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <span className="text-sm text-slate-500">{exp.period}</span>
                  </div>
                  <p className={`font-medium mb-3 ${exp.companyColor}`}>{exp.company}</p>
                  <ul className="text-slate-600 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2 text-sm"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
