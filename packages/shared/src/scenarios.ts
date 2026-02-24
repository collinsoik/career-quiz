import { Scenario } from "./types";

export const SCENARIOS: Scenario[] = [
  // ── Scenario 1: Lost Island (3 decisions) ────────────
  {
    id: "lost-island",
    title: "Lost Island",
    icon: "🏝️",
    description: "Stranded on a mysterious island, every choice matters for survival.",
    narrative: "Your boat capsized during a storm and you've washed up on an uncharted island. There's dense jungle inland, a rocky cliff to the east, and wreckage from your boat scattered on the beach. You can hear strange animal calls from the trees. You need to figure out how to survive — and maybe find a way home.",
    decisions: [
      {
        id: "island-1",
        prompt: "It's your first morning on the island. What do you do first?",
        context: "The sun is rising. You're hungry, thirsty, and your clothes are still damp from the ocean.",
        choices: [
          {
            id: "island-1a",
            text: "Build a shelter from the wreckage and palm leaves",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "island-1b",
            text: "Explore the jungle to map out the island and find water",
            weights: { earthEnergy: 3, lifeEcology: 1 },
          },
          {
            id: "island-1c",
            text: "Create a giant SOS sign on the beach using rocks and branches",
            weights: { chemistryMaterials: 3, designBuild: 1 },
          },
          {
            id: "island-1d",
            text: "Search for other survivors who might need help",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
        ],
      },
      {
        id: "island-2",
        prompt: "You find a damaged radio in the wreckage. What's your approach?",
        context: "The radio is sparking and the casing is cracked, but some wires are still intact. There's also a faded instruction manual nearby.",
        choices: [
          {
            id: "island-2a",
            text: "Take it apart, study the components, and try to fix it",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "island-2b",
            text: "Read the manual carefully and create a step-by-step repair plan",
            weights: { chemistryMaterials: 3, computing: 1 },
          },
          {
            id: "island-2c",
            text: "Organize a team effort — assign people to find parts, tools, and batteries",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "island-2d",
            text: "Repurpose the parts creatively — maybe build a signal mirror or noise maker instead",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
        ],
      },
      {
        id: "island-3",
        prompt: "A storm is approaching fast. How do you prepare the group?",
        context: "Dark clouds are rolling in. You have about two hours before the storm hits. The group is getting nervous.",
        choices: [
          {
            id: "island-3a",
            text: "Reinforce the shelter — tie down everything and waterproof the roof",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "island-3b",
            text: "Calm everyone down and make sure the most scared people feel safe",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "island-3c",
            text: "Create a checklist: secure food, store water, protect the radio, assign watch shifts",
            weights: { computing: 3, earthEnergy: 1 },
          },
          {
            id: "island-3d",
            text: "Study the weather patterns — maybe you can predict when the storm will pass",
            weights: { earthEnergy: 3, computing: 1 },
          },
        ],
      },
    ],
  },

  // ── Scenario 2: Build a City (4 decisions) ──────────
  {
    id: "build-city",
    title: "Build a City",
    icon: "🏗️",
    description: "Design a new city from scratch in the year 2045.",
    narrative: "The year is 2045. The government has given you a blank piece of land and a massive budget to design and build a brand new city for 50,000 people. You're the lead planner. Every decision you make will shape how people live, work, and play here for generations.",
    decisions: [
      {
        id: "city-1",
        prompt: "What's the first thing you build in your new city?",
        context: "You have an empty plot of land and your first construction crew is ready to go. What's the priority?",
        choices: [
          {
            id: "city-1a",
            text: "A massive community center where people can meet, learn, and hang out",
            weights: { healthBiomedical: 3, designBuild: 1 },
          },
          {
            id: "city-1b",
            text: "A cutting-edge research lab to attract the world's smartest scientists",
            weights: { chemistryMaterials: 3, lifeEcology: 1 },
          },
          {
            id: "city-1c",
            text: "A sustainable power grid — solar panels, wind turbines, the works",
            weights: { earthEnergy: 3, designBuild: 1 },
          },
          {
            id: "city-1d",
            text: "An arts district with galleries, music studios, and public murals everywhere",
            weights: { lifeEcology: 3, computing: 1 },
          },
        ],
      },
      {
        id: "city-2",
        prompt: "A tech company wants to build their headquarters in your city. What's the deal?",
        context: "MegaCorp offers 10,000 jobs but wants tax breaks and a huge plot of prime land. Some residents are worried about the impact.",
        choices: [
          {
            id: "city-2a",
            text: "Negotiate hard — get them to fund a public park and local training programs",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "city-2b",
            text: "Run the numbers: analyze economic impact, traffic patterns, and environmental costs",
            weights: { computing: 2, earthEnergy: 2 },
          },
          {
            id: "city-2c",
            text: "Design the HQ to blend beautifully with the city's look and feel",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "city-2d",
            text: "Hold town halls so residents can voice concerns and vote on the decision",
            weights: { healthBiomedical: 3, computing: 1 },
          },
        ],
      },
      {
        id: "city-3",
        prompt: "How do people get around in your city?",
        context: "You're designing the transportation system. The city is about 15 miles across.",
        choices: [
          {
            id: "city-3a",
            text: "Electric self-driving pods that you summon with an app",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "city-3b",
            text: "A beautiful elevated train with amazing views and public art at every station",
            weights: { chemistryMaterials: 3, designBuild: 1 },
          },
          {
            id: "city-3c",
            text: "Bike paths and walkways everywhere — make it the healthiest city on earth",
            weights: { healthBiomedical: 2, lifeEcology: 2 },
          },
          {
            id: "city-3d",
            text: "A perfectly optimized bus system with guaranteed 5-minute waits",
            weights: { earthEnergy: 3, computing: 1 },
          },
        ],
      },
      {
        id: "city-4",
        prompt: "Your city's one-year anniversary is coming up. How do you celebrate?",
        context: "The city is thriving! Time to throw the biggest party this city has ever seen.",
        choices: [
          {
            id: "city-4a",
            text: "A massive festival with live music, art installations, and food from every culture",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "city-4b",
            text: "A science fair and innovation expo showcasing what residents have invented",
            weights: { chemistryMaterials: 3, computing: 1 },
          },
          {
            id: "city-4c",
            text: "A community service day where everyone works together to plant trees and build a park",
            weights: { earthEnergy: 3, lifeEcology: 1 },
          },
          {
            id: "city-4d",
            text: "A big ceremony with awards for the best businesses, teachers, and community leaders",
            weights: { designBuild: 3, computing: 1 },
          },
        ],
      },
    ],
  },

  // ── Scenario 3: Space Mission (4 decisions) ─────────
  {
    id: "space-mission",
    title: "Space Mission",
    icon: "🚀",
    description: "Lead humanity's first contact mission on an alien planet.",
    narrative: "You're part of humanity's first crew to land on Kepler-442b, a planet that might support life. As you step out of the ship, you see glowing plants, floating rock formations, and structures that look... intentional. Something intelligent lives here. Mission Control is 20 light-minutes away — you're mostly on your own.",
    decisions: [
      {
        id: "space-1",
        prompt: "You've just landed. What's your first move on this alien planet?",
        context: "The air is breathable. There are strange sounds in the distance. Your crew of 6 is looking to you for direction.",
        choices: [
          {
            id: "space-1a",
            text: "Set up the base camp — assemble the habitat modules, check all equipment",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
          {
            id: "space-1b",
            text: "Collect samples of the glowing plants and run immediate analysis",
            weights: { lifeEcology: 3, chemistryMaterials: 1 },
          },
          {
            id: "space-1c",
            text: "Sketch and photograph everything — document this historic moment beautifully",
            weights: { computing: 3, earthEnergy: 1 },
          },
          {
            id: "space-1d",
            text: "Check on the crew — make sure everyone is physically and mentally okay",
            weights: { healthBiomedical: 3, computing: 1 },
          },
        ],
      },
      {
        id: "space-2",
        prompt: "You discover alien symbols carved into a cave wall. What do you do?",
        context: "The symbols glow faintly when you get close. Some look like they could be a language. Others look like a map.",
        choices: [
          {
            id: "space-2a",
            text: "Systematically catalog every symbol and look for mathematical patterns",
            weights: { chemistryMaterials: 3, computing: 1 },
          },
          {
            id: "space-2b",
            text: "Try to create art in response — draw human symbols next to theirs",
            weights: { lifeEcology: 3, chemistryMaterials: 1 },
          },
          {
            id: "space-2c",
            text: "Brief the whole crew and develop a contact protocol before going further",
            weights: { earthEnergy: 3, healthBiomedical: 1 },
          },
          {
            id: "space-2d",
            text: "Build a device to detect if the symbols emit any signals or energy",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
        ],
      },
      {
        id: "space-3",
        prompt: "An alien creature appears! It seems curious, not aggressive. How do you respond?",
        context: "It's about the size of a dog, with six legs and large, expressive eyes. It's making soft chirping sounds.",
        choices: [
          {
            id: "space-3a",
            text: "Slowly approach and offer a piece of food — try to build trust",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "space-3b",
            text: "Observe from a distance and record its behavior patterns",
            weights: { computing: 3, lifeEcology: 1 },
          },
          {
            id: "space-3c",
            text: "Take charge — position the crew safely and establish an observation perimeter",
            weights: { earthEnergy: 3, designBuild: 1 },
          },
          {
            id: "space-3d",
            text: "Try mimicking its sounds and movements to communicate",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
        ],
      },
      {
        id: "space-4",
        prompt: "It's time to send a message back to Earth about what you've found. What do you focus on?",
        context: "You can send one detailed report. The whole world will hear this. What matters most?",
        choices: [
          {
            id: "space-4a",
            text: "The scientific data — atmospheric readings, biological samples, geological surveys",
            weights: { earthEnergy: 3, lifeEcology: 1 },
          },
          {
            id: "space-4b",
            text: "A heartfelt narrative about what it feels like to stand on another world",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "space-4c",
            text: "A practical plan for what humanity should do next — resources needed, risks, timeline",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "space-4d",
            text: "Instructions on how to build the structures needed for the next crew's arrival",
            weights: { chemistryMaterials: 3, designBuild: 1 },
          },
        ],
      },
    ],
  },

  // ── Scenario 4: The Missing Masterpiece (3 decisions) ─
  {
    id: "missing-masterpiece",
    title: "The Missing Masterpiece",
    icon: "🕵️",
    description: "Investigate a high-profile museum heist and crack the case.",
    narrative: "The city's most famous painting — 'The Starlight Garden' by artist Elena Voss — has vanished from the National Museum overnight. The security footage is corrupted, there are no fingerprints, and the museum director is panicking. The police are stumped. You've been called in as a special consultant. The clock is ticking — the thief could be selling it right now.",
    decisions: [
      {
        id: "mystery-1",
        prompt: "You arrive at the museum. Where do you start your investigation?",
        context: "The empty frame is still hanging on the wall. Security guards look nervous. A crowd of reporters is outside.",
        choices: [
          {
            id: "mystery-1a",
            text: "Examine the crime scene inch by inch — the frame, the wall, the floor for hidden clues",
            weights: { chemistryMaterials: 3, earthEnergy: 1 },
          },
          {
            id: "mystery-1b",
            text: "Interview every security guard and staff member who was there last night",
            weights: { healthBiomedical: 3, computing: 1 },
          },
          {
            id: "mystery-1c",
            text: "Hack into the security system to recover the corrupted footage",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "mystery-1d",
            text: "Hold a press conference to put pressure on the thief and rally public tips",
            weights: { lifeEcology: 3, earthEnergy: 1 },
          },
        ],
      },
      {
        id: "mystery-2",
        prompt: "You find a clue: a tiny paint chip that doesn't match the stolen painting. What's your next move?",
        context: "The paint chip is an unusual shade of cobalt blue. It could be from the thief's clothing, another painting, or something else entirely.",
        choices: [
          {
            id: "mystery-2a",
            text: "Run chemical analysis on the paint to identify its exact origin",
            weights: { chemistryMaterials: 3, healthBiomedical: 1 },
          },
          {
            id: "mystery-2b",
            text: "Cross-reference with every art supply store and artist studio in the city",
            weights: { computing: 3, earthEnergy: 1 },
          },
          {
            id: "mystery-2c",
            text: "Think like the thief — what would someone creative enough to steal art do next?",
            weights: { designBuild: 3, computing: 1 },
          },
          {
            id: "mystery-2d",
            text: "Visit the artist Elena Voss — she might know who would want her painting this badly",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
        ],
      },
      {
        id: "mystery-3",
        prompt: "You've narrowed it down to a suspect who's hiding in an abandoned warehouse. How do you close the case?",
        context: "The suspect is an ex-museum employee who felt they were fired unfairly. The painting is likely inside the warehouse.",
        choices: [
          {
            id: "mystery-3a",
            text: "Create a detailed tactical plan — entry points, backup positions, evidence preservation",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "mystery-3b",
            text: "Go in and talk to them — understand why they did it and convince them to return it",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "mystery-3c",
            text: "Build a surveillance setup to monitor the warehouse and catch them in the act",
            weights: { designBuild: 3, computing: 1 },
          },
          {
            id: "mystery-3d",
            text: "Set up an elaborate sting — pose as an art buyer to lure them out",
            weights: { earthEnergy: 3, chemistryMaterials: 1 },
          },
        ],
      },
    ],
  },
];

// Total decision count for progress tracking
export const TOTAL_DECISIONS = SCENARIOS.reduce(
  (sum, s) => sum + s.decisions.length,
  0
);
