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
    "Express JS", "MongoDB", "Java", "Prompt Engineering", 
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
      <div className="bg-gradient-to-br from-primary to-primary-glow text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <User size={64} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Anmol Sharma</h1>
          <p className="text-xl mb-6 text-white/90">Full Stack Developer & Software Engineer</p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Kairi, Shamli</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 95575759626</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        
        {/* Education Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
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
              <p className="text-muted-foreground">
                Mansarovar Public School, Babri
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
              <Code className="h-6 w-6" />
              Skills & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="justify-center py-2 px-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 
                             border border-primary/20 hover:border-primary/40 transition-all duration-200
                             shadow-[var(--shadow-skill)] hover:shadow-md"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-primary">
              <Folder className="h-6 w-6" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-6 bg-gradient-to-br from-card to-muted/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.tech}
                    </Badge>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                </div>
                
                <ul className="space-y-2">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-muted-foreground">
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
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">
              Let's Connect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Mail size={20} />
                <span>anmol.sharma@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </div>
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