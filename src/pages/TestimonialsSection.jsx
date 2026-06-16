import FadeIn from '../components/FadeIn';

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Client Testimonials</h2>
            <p className="mt-4 text-foreground-muted text-lg max-w-2xl mx-auto">
              What others say about my work.
            </p>
          </div>
        </FadeIn>
        <div className="flex justify-center items-center h-48 glass-card">
          <p className="text-foreground-muted italic">"An exceptional developer who delivers high-quality, scalable solutions." - Startup Founder</p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
