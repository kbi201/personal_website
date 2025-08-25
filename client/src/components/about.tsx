import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = ["Machine Learning", "NLP", "Cybersecurity", "Python", "Teaching"];
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Fluent" },
    { name: "Chinese", level: "Limited" },
    { name: "French", level: "Elementary" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate computer scientist with expertise in machine learning, NLP, and cybersecurity, 
            committed to creating impactful solutions and fostering inclusive tech education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              As a Computer Science Masters of Science graduate from the University of Exeter, England, with honors, I bring a strong 
              foundation in machine learning, natural language processing (NLP), and cybersecurity. My academic journey 
              has been enriched by hands-on projects ranging from consumer behavior prediction and data visualization, to polarization 
              detection and lexicon creation using NLP techniques.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
            I am adaptable to different environments, have a global perspective, and intercultural networking skills. During and 
            before my school years I lived in 7 countries, such as Venezuela, Argentina, Thailand, Indonesia, Malaysia, the United Kingdom, and 
            graduated in Mexico with my International Baccalaureate. I lived in South East Asia for 16 years. Additionally, 
            I have done community work with both Habitat for Humanity and my schools in different countries including Indonesia, Sri 
            Lanka, Myanmar, and the Philippines. I have cultivated cultural sensitivity and adaptability, which I believe are crucial in today's 
            interconnected, globalized world.
              </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Beyond technical skills, I'm passionate about making technology accessible. My experience as a
              Lead Teaching Assistant with Girls Who Code (GWC) for two consecutive summers, teaching a total of 100+ students 
              JavaScript programming and game design principles, reflects my commitment to making technology not only accessible, but also inclusive--
              addressing the current gender gap in technology.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-graduation-cap text-primary text-2xl mr-4"></i>
                  <div>
                    <h4 className="font-semibold text-slate-800">Education</h4>
                    <p className="text-slate-600">Masters of Science in Computer Science with Honors</p>
                  </div>
                </div>
                <p className="text-slate-600">University of Exeter, United Kingdom</p>
                <p className="text-sm text-slate-500">June 2025</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className="fas fa-globe text-primary text-2xl mr-4"></i>
                  <div>
                    <h4 className="font-semibold text-slate-800">Languages</h4>
                    <p className="text-slate-600">Multilingual Communication</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex justify-between">
                      <span className="text-slate-600">{lang.name}</span>
                      <span className="text-sm text-slate-500">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
