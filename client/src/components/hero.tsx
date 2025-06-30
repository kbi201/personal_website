import { Button } from "@/components/ui/button";
import profileImage from "@assets/pfp.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    // In a real implementation, this would link to an actual CV file
    window.open("/cv-kelly-irahola.pdf", "_blank");
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <img 
              src={profileImage} 
              alt="Kelly Irahola" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Kelly B. Irahola Vallejos
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Computer Science MSci Graduate specializing in Machine Learning, NLP, and Cybersecurity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-slate-600">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Katy, TX</span>
            </div>
            <div className="flex items-center text-slate-600">
              <i className="fas fa-graduation-cap mr-2"></i>
              <span>University of Exeter</span>
            </div>
            <div className="flex items-center text-slate-600">
              <i className="fas fa-calendar mr-2"></i>
              <span>June 2025 Graduate</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={downloadCV}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
            >
              <i className="fas fa-download mr-2"></i>
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
