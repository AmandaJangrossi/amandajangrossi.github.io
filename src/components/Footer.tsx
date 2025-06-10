
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-4">
            &lt;DataAnalyst /&gt;
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Transforming data into insights, one analysis at a time. 
            Built with passion for data and powered by curiosity.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Email
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Resume
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Data Analyst Portfolio. Crafted with ❤️ and lots of ☕
            </p>
            <p className="text-muted-foreground/70 text-xs mt-2">
              Ready for GitHub Pages deployment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
