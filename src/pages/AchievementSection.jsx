import FadeIn from '../components/FadeIn';

function AchievementSection() {
  const stats = [
    { label: 'Projects Built', value: '30+' },
    { label: 'GitHub Commits', value: '1,200+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Years Experience', value: '3+' }
  ];

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground-muted font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementSection;
