
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Sales Analytics Dashboard",
      description: "Comprehensive analysis of sales patterns, customer behavior, and market trends using advanced statistical methods.",
      methodology: "Time series analysis, customer segmentation, cohort analysis",
      tools: "Power BI, SQL, Python",
      impact: "Identified 23% increase opportunity in customer retention",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn with 85% accuracy, enabling proactive retention strategies.",
      methodology: "Logistic regression, feature engineering, cross-validation",
      tools: "Python, Scikit-learn, Tableau",
      impact: "Reduced churn rate by 15% through targeted interventions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Supply Chain Optimization Analysis",
      description: "End-to-end analysis of supply chain inefficiencies with data-driven recommendations for cost reduction.",
      methodology: "Network analysis, optimization algorithms, Monte Carlo simulation",
      tools: "R, Power BI, Excel",
      impact: "Projected $2M annual savings through route optimization",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Deep dives into real-world problems with data-driven solutions
          </p>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-primary">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                          Methodology
                        </h4>
                        <p className="text-muted-foreground">{project.methodology}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                          Tools Used
                        </h4>
                        <p className="text-muted-foreground">{project.tools}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                          Impact
                        </h4>
                        <p className="text-primary font-semibold">{project.impact}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        View Dashboard
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        size="lg"
                      >
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
