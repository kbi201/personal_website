import { Card, CardContent } from "@/components/ui/card";

const programmingSkills = [
  { name: "Python", icon: "fab fa-python", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
  { name: "C++", icon: "fas fa-code", color: "text-blue-600" },
  { name: "SQL", icon: "fas fa-database", color: "text-orange-500" },
  { name: "Java", icon: "fab fa-java", color: "text-red-500" },
  { name: "Haskell", icon: "fas fa-lambda", color: "text-purple-500" },
  { name: "Prolog", icon: "fas fa-brain", color: "text-green-600" },
];

const mlSkills = [
  { name: "scikit-learn", icon: "fas fa-chart-line" },
  { name: "TensorFlow", icon: "fas fa-network-wired" },
  { name: "PyTorch", icon: "fas fa-fire" },
  { name: "HuggingFace", icon: "fas fa-robot" },
  { name: "NLTK", icon: "fas fa-language" },
];

const tools = [
  { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
  { name: "Linux", icon: "fab fa-linux", color: "text-black" },
  { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
  { name: "Jupyter", icon: "fas fa-book", color: "text-orange-500" },
  { name: "Zoom", icon: "fas fa-video", color: "text-blue-400" },
];

const cybersecuritySkills = [
  { name: "Penetration Testing", icon: "fas fa-bug" },
  { name: "Metasploit", icon: "fas fa-terminal" },
  { name: "Kali Linux", icon: "fas fa-dragon" },
  { name: "Ethical Hacking", icon: "fas fa-user-secret" },
];

const frameworks = [
  { name: "Django", icon: "fas fa-globe" },
  { name: "BERT/Transformers", icon: "fas fa-language" },
];

const concepts = [
  { name: "Machine Learning", icon: "fas fa-brain" },
  { name: "Sentiment Analysis", icon: "fas fa-heart" },
  { name: "Data Preprocessing", icon: "fas fa-filter" },
  { name: "Model Evaluation", icon: "fas fa-chart-bar" },
  { name: "Optimization", icon: "fas fa-cogs" },
  { name: "Ensemble Methods", icon: "fas fa-layer-group" },
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
              <div className="grid grid-cols-2 gap-3">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <i className={`${skill.icon} ${skill.color} text-xl mr-3`}></i>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
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
                  <div key={skill.name} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <i className={`${skill.icon} text-primary text-lg mr-3`}></i>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
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
                  <div key={tool.name} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <i className={`${tool.icon} ${tool.color} text-lg mr-3`}></i>
                    <span className="text-slate-700 font-medium">{tool.name}</span>
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
                  <div key={skill.name} className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <i className={`${skill.icon} text-red-500 text-lg mr-3`}></i>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
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
              <div className="space-y-3">
                {frameworks.map((framework) => (
                  <div key={framework.name} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <i className={`${framework.icon} text-primary text-lg mr-3`}></i>
                    <span className="text-slate-700 font-medium">{framework.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Concepts & Methods */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-lightbulb text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Concepts & Methods</h3>
              </div>
              <div className="space-y-3">
                {concepts.map((concept) => (
                  <div key={concept.name} className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <i className={`${concept.icon} text-primary text-lg mr-3`}></i>
                    <span className="text-slate-700 font-medium">{concept.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <i className="fas fa-certificate text-primary text-2xl mr-4"></i>
                <h3 className="text-xl font-semibold text-slate-800">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-primary">
                  <i className="fas fa-shield-alt text-primary text-lg mr-3"></i>
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