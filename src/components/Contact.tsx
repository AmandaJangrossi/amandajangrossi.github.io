
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to transform your data into actionable insights? Let's discuss how we can 
            work together to unlock the potential hidden in your datasets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 rounded-lg p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Professional Inquiries
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating on a project or discussing opportunities? 
                I'd love to hear about your data challenges.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                size="lg"
              >
                📧 Send Email
              </Button>
            </div>
            
            <div className="bg-card/50 rounded-lg p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Connect on LinkedIn
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's connect professionally and stay updated on the latest in data analytics, 
                insights, and industry trends.
              </p>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                size="lg"
              >
                💼 LinkedIn Profile
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Prefer a different way to connect?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                📱 Schedule a Call
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                💬 Discord
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                🐦 Twitter
              </Button>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-primary font-semibold">
              📍 Currently available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
