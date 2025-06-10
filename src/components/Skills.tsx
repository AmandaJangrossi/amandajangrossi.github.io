
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Analytics & Statistics",
      skills: [
        { name: "Statistical Analysis", level: 95 },
        { name: "Hypothesis Testing", level: 90 },
        { name: "Regression Analysis", level: 88 },
        { name: "Time Series Analysis", level: 85 },
        { name: "A/B Testing", level: 92 }
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 95 },
        { name: "R", level: 85 },
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 88 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Predictive Modeling", level: 85 },
        { name: "Classification", level: 88 },
        { name: "Clustering", level: 80 },
        { name: "Feature Engineering", level: 90 },
        { name: "Model Validation", level: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            A comprehensive toolkit for extracting insights from data
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-secondary rounded-lg p-8 text-foreground hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-card rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent-blue h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Always Learning
              </h3>
              <p className="text-card-foreground text-lg leading-relaxed">
                The data landscape evolves rapidly, and so do I. Currently exploring advanced deep learning 
                techniques, real-time analytics platforms, and the latest in data visualization trends. 
                I believe in continuous learning and staying ahead of the curve in this dynamic field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
