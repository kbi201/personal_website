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
              As a Computer Science MSci graduate from the University of Exeter with honors, I bring a strong 
              foundation in machine learning, natural language processing, and cybersecurity. My academic journey 
              has been enriched by hands-on projects ranging from consumer behavior prediction to polarization 
              detection using advanced NLP techniques.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Beyond technical skills, I'm passionate about education and community building. My experience as 
              Lead TA at Girls Who Code, teaching 40+ students Python programming, reflects my commitment to 
              making technology accessible and inclusive.
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
                    <p className="text-slate-600">MSci Computer Science with Honors</p>
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
