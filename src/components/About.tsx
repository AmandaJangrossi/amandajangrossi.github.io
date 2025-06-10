
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-secondary rounded-lg p-8 text-foreground">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate data analyst with a love for uncovering stories hidden 
                    within complex datasets. My background combines statistical rigor with 
                    creative problem-solving, allowing me to transform raw data into 
                    compelling narratives that drive business decisions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not diving deep into data, you'll find me exploring new 
                    visualization techniques, contributing to open-source projects, or 
                    sharing insights with the data community.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    🎯 My Approach
                  </h4>
                  <p className="text-card-foreground">
                    I believe great analysis starts with asking the right questions. 
                    Every project begins with understanding the business context and 
                    ends with actionable recommendations.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    💡 Philosophy
                  </h4>
                  <p className="text-card-foreground">
                    Data without context is just noise. My goal is to bridge the gap 
                    between complex analytics and clear, compelling storytelling that 
                    resonates with stakeholders.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                  <h4 className="text-xl font-semibold mb-3 text-primary">
                    🚀 What Drives Me
                  </h4>
                  <p className="text-card-foreground">
                    The moment when a pattern emerges from chaos, when insights click 
                    into place, and when data transforms into decisions that create 
                    real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
