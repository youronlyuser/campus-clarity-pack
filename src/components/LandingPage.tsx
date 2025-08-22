import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroMockup from "@/assets/hero-mockup.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import templateGrid from "@/assets/template-grid.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-hero font-bold tracking-tight text-foreground mb-8 leading-tight">
            Get Organized. Stress Less.<br />
            Crush This Semester.
          </h1>
          
          <p className="text-body text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            A ready-to-use digital template pack for students who want to start strong — 
            in university, personal life, and career prep.
          </p>
          
          <Button size="lg" className="mb-16 px-8 py-4 text-lg font-semibold">
            ➡️ Download Your Pack Now
          </Button>
          
          <div className="relative">
            <img 
              src={heroMockup} 
              alt="MacBook, iPad, and iPhone displaying university templates"
              className="w-full max-w-5xl mx-auto shadow-large rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display font-bold text-center mb-16">
            Messy notes. Missed deadlines. Stress that builds up fast.
          </h2>
          
          <p className="text-body text-muted-foreground mb-12 leading-relaxed">
            Most students waste hours just trying to get organized. Between balancing classes, 
            personal life, and preparing for jobs, things slip through the cracks:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📚</span>
                <span className="text-body">Unorganized study notes</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">🏠</span>
                <span className="text-body">Forgotten essentials for apartment or shopping</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💸</span>
                <span className="text-body">Budgeting confusion</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🎓</span>
                <span className="text-body">Lost track of thesis research</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💼</span>
                <span className="text-body">Missed job opportunities</span>
              </div>
            </div>
          </div>
          
          <img 
            src={beforeAfter} 
            alt="Cluttered desk vs organized digital workspace"
            className="w-full rounded-2xl shadow-medium"
          />
        </div>
      </section>

      {/* Imagine If */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-16">Imagine If…</h2>
          
          <p className="text-body text-muted-foreground mb-12 leading-relaxed">
            Imagine opening your laptop on the first day back and already having:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body">A study planner mapped out</p>
            </Card>
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body">A budget sheet that tracks your spending</p>
            </Card>
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body">A habit tracker that keeps you motivated</p>
            </Card>
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body">A networking log ready for career fairs</p>
            </Card>
          </div>
          
          <p className="text-heading font-semibold mt-16 text-foreground">
            No stress. No guesswork. Just clarity.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-display font-bold text-center mb-8">
            Introducing the Back-to-University Digital Template Pack
          </h2>
          
          <p className="text-heading text-center text-muted-foreground mb-16">What's Inside:</p>
          
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Personal Templates */}
            <div>
              <h3 className="text-heading font-bold mb-6 text-center">[P] Personal Templates</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>🏠</span>
                  <span>Apartment Essentials (Google Docs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🛒</span>
                  <span>Supermarket Shopping List (Google Docs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🔑</span>
                  <span>Password Manager (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Habit Tracker (Google Sheets)</span>
                </div>
              </div>
            </div>
            
            {/* University Templates */}
            <div>
              <h3 className="text-heading font-bold mb-6 text-center">[UNI] University Templates</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>📅</span>
                  <span>Weekly Study Planner (Google Docs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📝</span>
                  <span>Lecture Notes (Google Docs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📚</span>
                  <span>Thesis Literature Review Tracker (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🎓</span>
                  <span>University Bucket List (Google Docs)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>💸</span>
                  <span>Student Monthly Budget (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>✅</span>
                  <span>Back-to-University Checklist 2025 (PDF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🔍</span>
                  <span>The Ultimate Google Search Guide for Students (PDF)</span>
                </div>
              </div>
            </div>
            
            {/* Job Search Templates */}
            <div>
              <h3 className="text-heading font-bold mb-6 text-center">[J] Job Search Templates</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span>🌐</span>
                  <span>Networking Log (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📑</span>
                  <span>Job Application Tracker (Google Sheets)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>🎤</span>
                  <span>Common Interview Questions (Google Docs)</span>
                </div>
              </div>
            </div>
          </div>
          
          <img 
            src={templateGrid} 
            alt="Grid of template previews"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-medium"
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body italic mb-4">
                "Honestly, I started the semester with so much less stress. 
                The budget + study planner combo saved me."
              </p>
              <p className="font-semibold">— Emma, 3rd-Year Student</p>
            </Card>
            
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body italic mb-4">
                "These templates kept my thesis research on track — I didn't realize 
                how much time I was wasting before."
              </p>
              <p className="font-semibold">— Liam, Master's Student</p>
            </Card>
            
            <Card className="p-8 bg-gradient-card shadow-soft border-0">
              <p className="text-body italic mb-4">
                "I landed two interviews because I finally tracked my applications properly. 
                Worth every cent."
              </p>
              <p className="font-semibold">— Sophia, Graduate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-16">Why It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-heading font-semibold mb-4">No more starting from scratch</h3>
              <p className="text-muted-foreground">Every template is ready to use on Day 1</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-heading font-semibold mb-4">Flexible & customizable</h3>
              <p className="text-muted-foreground">Edit in Google Docs or Sheets instantly</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-heading font-semibold mb-4">Student-tested & proven</h3>
              <p className="text-muted-foreground">Built for real university needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-8">
            All your semester templates for just $19
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>Free updates</span>
            </div>
          </div>
          
          <div className="inline-block bg-accent px-6 py-3 rounded-full mb-8">
            <span className="font-semibold">30-Day Money-Back Guarantee</span>
          </div>
          
          <div>
            <Button size="lg" className="px-12 py-4 text-lg font-semibold">
              ➡️ Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-heading font-bold mb-8">
            The first weeks of the semester set the tone. Don't wait until deadlines pile up.
          </h2>
          
          <p className="text-body font-semibold text-primary">
            Start strong before it's too late.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display font-bold mb-12">
            Ready to Stress Less This Semester?
          </h2>
          
          <Button size="lg" className="px-12 py-4 text-lg font-semibold mb-16">
            ✅ Get Your Back-to-Uni Pack Now
          </Button>
          
          <img 
            src={heroMockup} 
            alt="MacBook and iPad displaying templates"
            className="w-full max-w-4xl mx-auto shadow-large rounded-2xl opacity-90"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;