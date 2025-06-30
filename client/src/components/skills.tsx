import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const programmingSkills = [
  { name: "Python", level: 95, color: "bg-primary" },
  { name: "JavaScript", level: 80, color: "bg-accent" },
  { name: "C++", level: 70, color: "bg-green-500" },
  { name: "SQL", level: 85, color: "bg-purple-500" },
];

const mlSkills = [
  "scikit-learn",
  "TensorFlow",
  "PyTorch",
  "HuggingFace",
  "NLTK",
];

const tools = [
  { name: "Git", level: "Proficient", color: "bg-green-100 text-green-800" },
  { name: "Linux", level: "Advanced", color: "bg-blue-100 text-blue-800" },
  { name: "VS Code", level: "Expert", color: "bg-purple-100 text-purple-800" },
  { name: "Jupyter", level: "Expert", color: "bg-orange-100 text-orange-800" },
];

const cybersecuritySkills = [
  { name: "Penetration Testing", icon: "fas fa-bug" },
  { name: "Metasploit", icon: "fas fa-terminal" },
  { name: "Kali Linux", icon: "fas fa-dragon" },
  { name: "Ethical Hacking", icon: "fas fa-user-secret" },
];

const frameworks = [
  { name: "Django", level: 85 },
  { name: "BERT/Transformers", level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-code text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Programming Languages</h3>
              </div>
              <div className="space-y-4">
                {programmingSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">
                        {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ML & Data Science */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-brain text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">ML & Data Science</h3>
              </div>
              <div className="space-y-3">
                {mlSkills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">{skill}</span>
                    <i className="fas fa-star text-yellow-500"></i>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Platforms */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-tools text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Tools & Platforms</h3>
              </div>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                    <span className="text-slate-700">{tool.name}</span>
                    <Badge className={tool.color}>{tool.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cybersecurity */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-shield-alt text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Cybersecurity</h3>
              </div>
              <div className="space-y-3">
                {cybersecuritySkills.map((skill) => (
                  <div key={skill.name} className="flex items-center p-2 bg-red-50 rounded">
                    <i className={`${skill.icon} text-red-500 mr-3`}></i>
                    <span className="text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-layer-group text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Frameworks</h3>
              </div>
              <div className="space-y-4">
                {frameworks.map((framework) => (
                  <div key={framework.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700">{framework.name}</span>
                      <span className="text-sm text-slate-500">Advanced</span>
                    </div>
                    <Progress value={framework.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-certificate text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-primary">
                  <i className="fas fa-shield-alt text-primary mr-3"></i>
                  <div>
                    <p className="text-slate-700 font-medium">Fundamentals of Cybersecurity</p>
                    <p className="text-sm text-slate-500">EDU-102</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
