'use client'; // Required for model-viewer in Next.js App Router

import React from 'react';
import Script from 'next/script';
import Viewer from '@/components/viewer';

// Deklarasi dipindah ke sini agar terisolasi hanya untuk komponen Viewer
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        'shadow-intensity'?: string;
        'exposure'?: string;
        'environment-image'?: string;
        'camera-orbit'?: string;
        [key: string]: any;
      };
    }
  }
}

interface ViewerProps {
  modelPath: string;
}


export default function PoncesProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-emerald-500/30 font-sans">
      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-8 md:pt-48 md:pb-12 max-w-5xl mx-auto flex flex-col items-start">
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
          Appropriate Technology Project
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
          PONCES-1
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-zinc-400 mb-8 max-w-3xl">
          Pedal-Operated Nutrient Circulation Ecosystem
        </h2>
        <p className="text-xl md:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed mb-6">
          Turning human effort into useful agricultural work.
        </p>
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          PONCES-1 is an appropriate technology prototype developed during the community service program (KKN) in Ponces Village, Girimulyo, Kulon Progo. The system is designed to assist in processing agricultural organic waste through human-powered manual circulation and agitation, without relying on electricity.
        </p>
        <p className="mt-8 text-sm font-medium text-emerald-500 uppercase tracking-widest">
          From a simple pedal mechanism to a field-deployed agricultural system.
        </p>
      </section>

      {/* 3D VIEWER CONTAINER */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="relative group w-full aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden rounded-xl shadow-2xl">
          <div className="absolute inset-0">
            <Viewer modelPath="/ponces-1.glb" />
          </div>
        </div>
      </section>

      <hr className="border-zinc-800 max-w-5xl mx-auto my-8" />

      {/* GENESIS: IT STARTED WITH A DRUM PEDAL */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6">It Started with a Drum Pedal</h3>
        <h4 className="text-xl font-medium text-emerald-400 mb-6">Not in a laboratory. Not from a proposal. Not from an engineering brief.</h4>
        <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
          <p>
            It all started while doomscrolling a video of a Lamb of God drum pedal. I saw a profoundly simple mechanism: foot → pedal → linkage → motion. Then came a random question:
          </p>
          <div className="p-6 mt-8 bg-zinc-900 border-l-4 border-emerald-500 rounded-r-lg">
            <p className="text-white font-medium text-xl italic">
              &quot;If leg power can drive a kick drum, can that same energy perform useful agricultural work?&quot;
            </p>
          </div>
          <p className="mt-6">
            At that moment, I didn&apos;t know the answer. I didn&apos;t even know what I was going to build. I only had one foundational idea: <strong className="text-white">Human energy can become mechanical work.</strong>
          </p>
        </div>
      </section>

      {/* THE INSIGHT: THEN CAME PONCES */}
      <section className="bg-zinc-900/50 py-24">
        <div className="px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Then Came Ponces</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-4">
              Later, I received confirmation from the head of the <strong className="text-white">Arum Farma Farmer Group</strong> about a local habit. Many residents found processing organic compost using EM4 too cumbersome. The most common point of failure was simple: they kept forgetting to stir it manually.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              My initial thought: <span className="text-zinc-300 italic">&quot;Okay. I&apos;ll build an automatic stirring machine.&quot;</span> Problem solved. Or so I thought...
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">But Then I Asked the Village Head</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-4">
              When I cross-checked this condition with the Village Head of Ponces, his answer revealed a much deeper issue. The residents weren&apos;t even familiar with EM4 fermented fertilizer in the first place.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              If I showed up with an &quot;automatic liquid fertilizer machine,&quot; I would be solving a problem the users didn&apos;t even know they had. At this point, I stopped asking <span className="text-zinc-300 italic">&quot;What machine should I build?&quot;</span> and started asking, <span className="text-emerald-400 font-medium">&quot;What are the actual conditions in Ponces?&quot;</span>
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH & ENVIRONMENT */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="relative group w-max mb-6">
          <h3 className="text-3xl font-bold text-white ">
            Research Before Design
          </h3>
        </div>

        <p className="text-lg text-zinc-400 leading-relaxed mb-12">
          I started digging into literature about Ponces and its surrounding environment. Not just about fertilizer, but agriculture, organic waste, soil, slope gradients, water availability, and regional characteristics. Research on banana trunk utilization proved that agricultural waste—often burned or ignored—could become a primary feedstock for organic processing.
        </p>

        <div className="relative group w-max mb-4">
  <h4 className="text-2xl font-bold text-white cursor-help border-b-2 border-dashed border-emerald-500/50 hover:text-emerald-400 transition-colors">
    The Land Changed the Design
  </h4>
  
  {/* BibTeX Pop-up */}
  <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[85vw] max-w-2xl bg-zinc-950/95 backdrop-blur-sm border border-emerald-900/50 rounded-xl shadow-2xl p-6 z-50 max-h-80 overflow-y-auto custom-scrollbar">
    <pre className="text-xs font-mono text-emerald-400/80 whitespace-pre-wrap break-words leading-relaxed selection:bg-emerald-500/30">
      {`@article{YandoMuhammadIqbal2024,
   abstract = {Indonesia is susceptible to landslide disasters due to its geographic location and geological characteristics, which are the main triggers for landslides. The villages of Girimulyo, Ponces, Purwosari, and Kulon Progo are situated close to the boundary separating Yogyakarta from Central Java. Situated 400 meters above sea level, the village is a hill area according to topographical data. In this period of approximately 7 years, there have been landslides at several points in Ponces Village, some of which caused material losses to victims. The study aims to map landslide susceptibility areas and landslide trigger factors. The methods used involve descriptive and quantitative, taking the form of location surveys, interviews, and the collection of multiple data sets. The collected data was then analyzed and processed into a landslide susceptibility map in Ponces Village using QGIS software. The results showed that the main cause of landslides at the survey point is the high intensity of rainfall in specific months, with precipitation ranging between 300-500 mm per month, and the inclination slope is more than 40%, so it is included in the moderately steep. The level of disaster susceptibility in Ponces Village is classified as a high susceptibility zone because of the potential and condition of the slopes, which have the potential to trigger landslides.},
   author = {Yando Muhammad Iqbal and Yuli Fajarwati and Izwa Nur Aditya and Grace Lucia Lambu},
   issn = {2962-2697},
   journal = {CE ReForm},
   keywords = {Landslide,Mapping QGIS,Susceptibility},
   title = {Identifikasi kerentanan gerakan tanah berdasarkan kemiringan lereng dan curah hujan (Studi kasus: Dusun Ponces, Ggirimulyo, Kulon Progo)},
   url = {https://girimulyo.kulonprogokab.go.id},
   year = {2024}
}`}
    </pre>
  </div>
</div>

<p className="text-lg text-zinc-400 leading-relaxed mb-8">
  Studies on Kulon Progo highlighted steep slopes, severe landslide risks, and hard-water areas. These seemingly unrelated geological constraints instantly dictated the mechanical design. I initially considered a biopore approach, but the hard rock and steep topography rendered underground biological absorption useless.
</p>
        <div className="inline-block bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
          <p className="text-emerald-400 font-medium text-lg">
            The environment was telling me: Don&apos;t design for an imaginary village. Design for this village.
          </p>
        </div>
      </section>

      {/* ENGINEERING EVOLUTION */}
      <section className="bg-zinc-900/50 py-24 border-y border-zinc-800">
        <div className="px-6 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Mechanical Evolution</h3>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h4 className="text-xl font-bold text-white mb-2">Iteration One: Rejected</h4>
                <div className="w-12 h-1 bg-zinc-700 mb-4"></div>
              </div>
              <div className="md:w-2/3 text-lg text-zinc-400 leading-relaxed">
                My first concrete design was essentially a human-powered cement mixer. A large rotating drum driven by a pedal utilizing a four-bar linkage mechanism. Mechanically, it was fascinating. Contextually, it was completely wrong. Placing a heavy, unstable rotating mechanism on a steep, landslide-prone slope was a logistical and safety nightmare. I threw the design out.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <h4 className="text-xl font-bold text-white mb-2">From Pedal to Pump</h4>
                <div className="w-12 h-1 bg-emerald-500 mb-4"></div>
              </div>
              <div className="md:w-2/3 text-lg text-zinc-400 leading-relaxed">
                <p className="mb-4">I went back to the original inspiration: the pedal. I found a twin-cylinder bicycle foot pump, and the architecture shifted. Why rotate an entire heavy drum when you only need to move the fluid inside it?</p>
                <div className="font-mono text-sm text-emerald-400 bg-zinc-950 p-4 rounded border border-zinc-800">
                  Pedal → Mechanical Actuation → Foot Pump → Pressure → Fluid Flow → Circulation → Organic Processing
                </div>
                <p className="mt-4">No electric motors. No external grid. Just human power creating pneumatic pressure to circulate fluid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE TESTING */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-6">Then the Prototype Fought Back</h3>
        <h4 className="text-xl font-medium text-emerald-400 mb-6">Engineering starts when the theory fails.</h4>
        <div className="space-y-4 text-zinc-400 leading-relaxed text-lg mb-12">
          <p>
            The first prototype leaked. Seals failed. Backflow and back pressure ruined the fluid dynamics. The airlock didn&apos;t behave as diagrammed. This is where real engineering began: <strong className="text-white">test, observe, diagnose, modify, test again.</strong>
          </p>
          <p>
            I integrated external check valves to force unidirectional flow and kill the backflow issue. The hardware stabilized.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">Testing More Than the Machine</h3>
        <p className="text-lg text-zinc-400 leading-relaxed mb-8">
          Once operational, I monitored the biochemical process in the field. I didn&apos;t use this data to claim I had created a perfect fertilizer. Instead, I learned that raw metrics require context.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <h5 className="text-white font-bold mb-4">Field observation metrics:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono">
            <div>
              <span className="block text-zinc-500 text-sm mb-1">pH TRACKING</span>
              <span className="text-emerald-400 font-semibold">6.70 → 4.92 → 4.72 → 5.31 → ~6.01</span>
            </div>
            <div>
              <span className="block text-zinc-500 text-sm mb-1">EC TRACKING</span>
              <span className="text-emerald-400 font-semibold">884 → ~1,529 → ~1,630 µS/cm</span>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-6 leading-relaxed">
            A pH reading taken before agitation differs from one taken after. The measurement system became a learning tool, proving the solution&apos;s characteristics were actively changing during circulation.
          </p>
        </div>
      </section>

      <hr className="border-zinc-800 max-w-5xl mx-auto" />

      {/* PLATFORM & DESIGN FOR PEOPLE */}
      <section className="px-6 py-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">The Machine Became a Platform</h3>
          <div className="w-8 h-1 bg-emerald-500 mb-6"></div>
          <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
            <p>As I understood the community better, framing this as a &quot;Liquid Fertilizer Machine&quot; felt too narrow. It evolved into a human-powered organic waste processing platform capable of utilizing whatever materials the village had on hand.</p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-zinc-300">
              <li><strong className="text-white">Livestock manure:</strong> Organic matter & nutrients (N, P).</li>
              <li><strong className="text-white">Banana trunks:</strong> Mineral content (Potassium) & biomass.</li>
              <li><strong className="text-white">Fruit & plant residue:</strong> Local organic feedstock.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">But Users Needed a Different Name</h3>
          <div className="w-8 h-1 bg-emerald-500 mb-6"></div>
          <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
            <p>The technical name is <strong className="text-white">PONCES-1</strong> (Pedal-Operated Nutrient Circulation Ecosystem, Version 1).</p>
            <p>But handing a farmer a &quot;Reactor Ecosystem&quot; creates an unnecessary barrier to entry. I simplified it for the community: <strong className="text-white">ROT (Reaktor Organik Tani)</strong>, or simply an &quot;organic waste processor.&quot;</p>
            <div className="mt-6 border-l-2 border-zinc-700 pl-4">
              <p className="text-emerald-400 font-medium">The engineering can be complicated.</p>
              <p className="text-emerald-400 font-medium">The user experience shouldn&apos;t be.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USER FEEDBACK MATTERS */}
      <section className="bg-emerald-950/20 py-24 border-y border-emerald-900/30">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">User Feedback Matters</h3>
          <h4 className="text-xl font-medium text-emerald-400 mb-8">Fall in love with the problem, not the solution.</h4>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            PONCES-1 was deployed and handed over to the Arum Farma Farmer Group, complete with pH meters and an active batch of processing materials.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto mt-4">
            It taught me that engineering isn&apos;t just <span className="font-mono text-sm">calculate → design → build</span>. It is <span className="font-mono text-sm">listen → research → define → design → build → fail → iterate → validate → deploy</span>.
          </p>
          <p className="mt-12 text-2xl font-bold text-emerald-400 leading-snug">
            A technically brilliant prototype on paper is useless <br className="hidden md:block" />
            if the community won&apos;t step on the pedal.
          </p>
        </div>
      </section>

      {/* PONCES-1 TODAY (SPECS) */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-12 text-center">Project Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Project Name", value: "PONCES-1" },
            { label: "User-Facing Name", value: "ROT (Reaktor Organik Tani)" },
            { label: "Location", value: "Dusun Ponces, Girimulyo, Kulon Progo" },
            { label: "Community Partner", value: "Kelompok Tani Arum Farma" },
            { label: "Power Source", value: "Human-powered" },
            { label: "Status", value: "Field-deployed Prototype — Version 1" }
          ].map((spec, idx) => (
            <div key={idx} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <div className="text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">{spec.label}</div>
              <div className="text-white text-base font-medium">{spec.value}</div>
            </div>
          ))}
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 md:col-span-2 lg:col-span-3">
            <div className="text-emerald-500 font-mono text-xs uppercase tracking-wider mb-2">Domain</div>
            <div className="text-white text-base font-medium">Appropriate Technology · Agricultural Engineering · Mechanical Design · Fluidics · Prototyping</div>
          </div>
        </div>
      </section>

      {/* WHAT I LEARNED & CONCLUSION */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center border-t border-zinc-800">
        <h3 className="text-3xl font-bold text-white mb-8">The Lesson</h3>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
          A good engineer doesn&apos;t just build solutions. <span className="text-white">They know when to change the solution entirely.</span>
        </p>

        <div className="inline-block text-left bg-zinc-900/50 p-8 rounded-2xl mb-16 border border-zinc-800/50">
          <p className="text-zinc-300 mb-4 font-medium">The real engineering challenge begins when the design leaves the workshop. It has to survive:</p>
          <ul className="space-y-2 font-mono text-emerald-400">
            <li>{'>'} real users.</li>
            <li>{'>'} real materials.</li>
            <li>{'>'} real environments.</li>
            <li>{'>'} real limitations.</li>
            <li>{'>'} and real expectations.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-extrabold text-white tracking-widest mb-4">PONCES-1</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Born from a drum pedal. Shaped by research. Changed by the landscape.<br />
            Built through failure. Tested in the field. And designed for people.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-zinc-500 mb-12">
            <span>[ Designed in the workshop ]</span>
            <span>[ Tested in the field ]</span>
            <span>[ Built for people ]</span>
          </div>
          <p className="text-emerald-500 font-medium">
            One pedal started the idea. The village gave it a purpose.
          </p>
        </div>
      </section>
    </main>
  );
}