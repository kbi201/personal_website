import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "kbiv23@outlook.com",
      href: "mailto:kbiv23@outlook.com",
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "(281) 677-1170",
      href: "tel:+12816771170",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Katy, TX",
      href: null,
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/kelly-irahola",
      href: "https://www.linkedin.com/in/kelly-irahola-775b53212/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's connect on LinkedIn, and have a chat! ☕️
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <i className={`${info.icon} text-primary text-xl mr-4`}></i>
                      <div>
                        <p className="font-medium text-slate-800">{info.title}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-slate-600 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
