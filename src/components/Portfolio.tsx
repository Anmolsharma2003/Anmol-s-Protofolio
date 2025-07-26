import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Code, 
  Folder, 
  ExternalLink,
  Mail,
  Github,
  Linkedin
} from "lucide-react";

const Portfolio = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", 
    "Express JS", "MongoDB", "Java", "Python", "Git",
    "OOPS (Object Oriented Programming)", "Prompt Engineering", 
    "Data Structures", "Operating System"
  ];

  const projects = [
    {
      title: "Food Delivery Website",
      tech: "MERN Stack",
      description: [
        "Built a full-stack food delivery platform using MongoDB, Express, React, and Node.js",
        "Implemented user authentication and authorization system",
        "Created responsive UI with dynamic menu display and cart functionality",
        "Integrated payment gateway for secure transactions",
        "Developed admin panel for restaurant and order management",
        "Implemented real-time order tracking and notifications"
      ]
    },
    {
      title: "BMI Calculator",
      tech: "React JS",
      description: [
        "Developed an interactive BMI calculator using React hooks and state management",
        "Created responsive design with modern UI components",
        "Implemented real-time calculation with input validation",
        "Added BMI category classification with color-coded results",
        "Included health tips and recommendations based on BMI ranges",
        "Deployed application with optimized performance"
      ]
    },
    {
      title: "Newspaper Website",
      tech: "HTML, CSS, JavaScript",
      description: [
        "Designed and developed a responsive newspaper website from scratch",
        "Implemented dynamic content loading with JavaScript",
        "Created news categorization and search functionality",
        "Added interactive navigation and smooth scrolling effects",
        "Optimized for cross-browser compatibility and mobile responsiveness",
        "Integrated news API for real-time content updates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-purple-600"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 py-16 sm:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center border border-white/30 shadow-2xl overflow-hidden animate-scale-in hover-scale">
              <img 
                src="/lovable-uploads/0b4be5ea-b1c1-4f1d-a0b8-b8662ea996df.png" 
                alt="Anmol Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl animate-fade-in">Anmol Sharma</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/95 drop-shadow-lg animate-fade-in">Full Stack Developer & Software Engineer</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-white/90 animate-fade-in">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover-scale transition-all duration-300">
                <MapPin size={18} />
                <span className="font-medium text-sm sm:text-base">Kairi, Shamli</span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover-scale transition-all duration-300">
                <Phone size={18} />
                <span className="font-medium text-sm sm:text-base">+91 95575759626</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        
        {/* Education Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
              <GraduationCap className="h-6 w-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-muted-foreground mb-1">
                Shri Ram Group of Colleges, Muzaffarnagar
              </p>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                78.5% CGPA
              </Badge>
            </div>
            
            <div className="border-l-4 border-primary-glow pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Class 12th
              </h3>
              <p className="text-muted-foreground mb-1">
                Mansarovar Public School, Babri
              </p>
              <Badge variant="secondary" className="bg-primary-glow/10 text-primary-glow">
                81.2%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
              <Code className="h-6 w-6" />
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="justify-center py-2 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 
                             border border-primary/20 hover:border-primary/40 transition-all duration-200
                             shadow-[var(--shadow-skill)] hover:shadow-md hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
              <Folder className="h-6 w-6" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-4 sm:p-6 bg-gradient-to-br from-card to-muted/30 hover-scale transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.tech}
                    </Badge>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer hover-scale transition-all duration-200" />
                </div>
                
                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">
              Let's Connect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:anmolsharma222003@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover-scale story-link"
              >
                <Mail size={20} />
                <span>anmolsharma222003@gmail.com</span>
              </a>
              <a 
                href="https://github.com/Anmolsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover-scale story-link"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/anmolsharma2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-all duration-300 hover-scale story-link"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-primary/5 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 Anmol Sharma. Crafted with passion for technology and innovation.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;