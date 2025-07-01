import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const techStackIcons = {
  "Python": { icon: "fab fa-python", color: "text-blue-500" },
  "JavaScript": { icon: "fab fa-js", color: "text-yellow-500" },
  "Django": { icon: "fas fa-globe", color: "text-green-600" },
  "SQL": { icon: "fas fa-database", color: "text-orange-500" },
  "Git": { icon: "fab fa-git-alt", color: "text-orange-600" },
  "Random Forest": { icon: "fas fa-tree", color: "text-green-500" },
  "PCA": { icon: "fas fa-compress-arrows-alt", color: "text-purple-500" },
  "SMOTE": { icon: "fas fa-balance-scale", color: "text-blue-600" },
  "Transformers": { icon: "fas fa-robot", color: "text-indigo-500" },
  "SVM": { icon: "fas fa-chart-line", color: "text-red-500" },
  "BERT": { icon: "fas fa-brain", color: "text-purple-600" },
  "HuggingFace": { icon: "fas fa-smile", color: "text-yellow-600" },
  "Network Analysis": { icon: "fas fa-network-wired", color: "text-cyan-500" },
  "ML Security": { icon: "fas fa-shield-alt", color: "text-red-600" },
};

const projects = [
  {
    id: 1,
    title: "Consumer Demographics Prediction",
    description: "Built a Random Forest model achieving 75% accuracy in predicting gender from consumer behavior. Applied PCA for dimensionality reduction and SMOTE for class balancing to address bias and interpretability.",
    longDescription: "This project involved analyzing consumer shopping data to predict demographic characteristics using advanced machine learning techniques. The Random Forest model was optimized using feature engineering and class balancing methods.",
    technologies: ["Python", "Random Forest", "PCA", "SMOTE"],
    category: "ML",
    categoryColor: "bg-green-100 text-green-800",
    iconClass: "fas fa-chart-line",
    gradientClass: "from-blue-500 to-purple-600",
    date: "Nov–Dec 2023",
    impact: "75% accuracy achieved",
    keyFeatures: ["Dimensionality reduction", "Class balancing", "Feature importance analysis"],
  },
  {
    id: 2,
    title: "Reddit Polarization Detection",
    description: "Developed a modular NLP inference pipeline to classify feminist vs. anti-feminist rhetoric using transformers, SVMs, and lexicon-based sentiment models.",
    longDescription: "Built a comprehensive NLP system focusing on scalability and ethical ML, exploring temporal dynamics, user behavior patterns, and moderation impact across social media platforms.",
    technologies: ["Python", "Transformers", "BERT", "HuggingFace"],
    category: "NLP",
    categoryColor: "bg-blue-100 text-blue-800",
    iconClass: "fas fa-comments",
    gradientClass: "from-green-500 to-teal-600",
    date: "Nov 2023–Apr 2024",
    impact: "Modular pipeline for deployment",
    keyFeatures: ["Transformer models", "Custom lexicons", "Ethical ML practices"],
  },
  {
    id: 3,
    title: "Sustainable Campus Web App",
    description: "Co-developed a full-stack web app using Django with QR location verification, virtual economy, and gamified user behavior features.",
    longDescription: "Created an interactive platform to promote sustainable behaviors on campus through gamification, featuring robust user authentication and real-time tracking systems.",
    technologies: ["Python", "Django", "JavaScript", "SQL"],
    category: "Web Dev",
    categoryColor: "bg-orange-100 text-orange-800",
    iconClass: "fas fa-globe",
    gradientClass: "from-orange-500 to-red-600",
    date: "Nov 2022–Mar 2023",
    impact: "Full-stack sustainable platform",
    keyFeatures: ["QR verification", "Virtual economy", "User gamification"],
  },
  {
    id: 4,
    title: "Phishing URL Detection",
    description: "Reproduced and validated a peer-reviewed ML-based phishing detection pipeline using URL graph-based features with formal evaluation.",
    longDescription: "Conducted thorough validation of existing research methodology, implementing network analysis techniques for cybersecurity applications with comprehensive evaluation metrics.",
    technologies: ["Python", "Network Analysis", "ML Security"],
    category: "Security",
    categoryColor: "bg-red-100 text-red-800",
    iconClass: "fas fa-shield-alt",
    gradientClass: "from-red-500 to-pink-600",
    date: "Oct–Nov 2024",
    impact: "Research validation & reproduction",
    keyFeatures: ["Graph-based features", "Security analysis", "Formal evaluation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in machine learning, 
            NLP, web development, and cybersecurity.
          </p>
        </div>
        
        {/* Project Highlight Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-1">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-1 md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`h-56 bg-gradient-to-br ${project.gradientClass} flex items-center justify-center relative`}>
                      <i className={`${project.iconClass} text-white text-6xl`}></i>
                      <div className="absolute top-4 right-4">
                        <Badge className={project.categoryColor}>{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                        <p className="text-slate-600 text-sm mb-3">{project.description}</p>
                        <div className="flex items-center text-sm text-primary font-medium mb-4">
                          <i className="fas fa-trophy mr-2"></i>
                          {project.impact}
                        </div>
                      </div>
                      
                      {/* Tech Stack with Icons */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => {
                            const techInfo = techStackIcons[tech];
                            return (
                              <div key={tech} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border hover:shadow-sm transition-shadow">
                                {techInfo ? (
                                  <i className={`${techInfo.icon} ${techInfo.color} text-lg`}></i>
                                ) : (
                                  <i className="fas fa-code text-slate-500 text-lg"></i>
                                )}
                                <span className="text-slate-700 text-sm font-medium">{tech}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Key Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.keyFeatures.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs bg-slate-50">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-slate-500 pt-2 border-t border-slate-100">
                        <span>{project.date}</span>
                        <div className="flex items-center">
                          <i className="fas fa-arrow-right text-primary mr-1"></i>
                          <span className="text-primary font-medium">View Details</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        {/* Project Grid Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">All Projects Overview</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card key={`overview-${project.id}`} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradientClass} rounded-lg flex items-center justify-center mb-3`}>
                    <i className={`${project.iconClass} text-white text-xl`}></i>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{project.title}</h4>
                  <Badge className={`${project.categoryColor} mb-2`}>{project.category}</Badge>
                  <p className="text-xs text-slate-600">{project.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
