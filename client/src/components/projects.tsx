import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Consumer Demographics Prediction",
    description: "Built a Random Forest model achieving 75% accuracy in predicting gender from consumer behavior. Applied PCA for dimensionality reduction and SMOTE for class balancing.",
    technologies: ["Python", "Random Forest", "PCA", "SMOTE"],
    category: "ML",
    categoryColor: "bg-green-100 text-green-800",
    iconClass: "fas fa-chart-line",
    gradientClass: "from-blue-500 to-purple-600",
    date: "Nov–Dec 2023",
  },
  {
    id: 2,
    title: "Reddit Polarization Detection",
    description: "Developed a modular NLP pipeline to classify feminist vs. anti-feminist rhetoric using transformers, SVMs, and lexicon-based sentiment models.",
    technologies: ["Transformers", "SVM", "BERT", "HuggingFace"],
    category: "NLP",
    categoryColor: "bg-blue-100 text-blue-800",
    iconClass: "fas fa-comments",
    gradientClass: "from-green-500 to-teal-600",
    date: "Nov 2023–Apr 2024",
  },
  {
    id: 3,
    title: "Sustainable Campus Web App",
    description: "Co-developed a full-stack web app using Django with QR location verification, virtual economy, and gamified user behavior features.",
    technologies: ["Django", "JavaScript", "SQL", "Git"],
    category: "Web Dev",
    categoryColor: "bg-orange-100 text-orange-800",
    iconClass: "fas fa-globe",
    gradientClass: "from-orange-500 to-red-600",
    date: "Nov 2022–Mar 2023",
  },
  {
    id: 4,
    title: "Phishing URL Detection",
    description: "Reproduced and validated a peer-reviewed ML-based phishing detection pipeline using URL graph-based features with formal evaluation.",
    technologies: ["Network Analysis", "ML Security", "Python"],
    category: "Security",
    categoryColor: "bg-red-100 text-red-800",
    iconClass: "fas fa-shield-alt",
    gradientClass: "from-red-500 to-pink-600",
    date: "Oct–Nov 2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in machine learning, 
            NLP, web development, and cybersecurity.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-48 bg-gradient-to-br ${project.gradientClass} flex items-center justify-center`}>
                <i className={`${project.iconClass} text-white text-6xl`}></i>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  <Badge className={project.categoryColor}>{project.category}</Badge>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-slate-500">{project.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
