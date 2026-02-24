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
            text: "Analyze the water and soil to figure out what's safe to drink and eat",
            weights: { chemistryMaterials: 3, healthBiomedical: 1 },
          },
          {
            id: "island-1b",
            text: "Catalog every plant and animal species you can find",
            weights: { lifeEcology: 3, earthEnergy: 1 },
          },
          {
            id: "island-1c",
            text: "Build a shelter using wreckage and natural materials",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "island-1d",
            text: "Rig up a radio signal from spare electronics in the wreckage",
            weights: { computing: 3, designBuild: 1 },
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
            text: "Rewire the circuits and solder broken connections to get it transmitting again",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "island-2b",
            text: "Test the battery chemicals and figure out how to recharge it using saltwater",
            weights: { chemistryMaterials: 3, earthEnergy: 1 },
          },
          {
            id: "island-2c",
            text: "Check if anyone on the crew is injured and set up a first-aid station first",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "island-2d",
            text: "Study the terrain from the cliff to understand the island's geography and weather patterns",
            weights: { earthEnergy: 3, lifeEcology: 1 },
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
            text: "Reinforce the shelter — calculate load-bearing limits and add waterproof layers",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "island-3b",
            text: "Move any plant samples and food stores to high ground so they survive the storm",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "island-3c",
            text: "Study the cloud formations and wind direction to predict the storm's exact path",
            weights: { earthEnergy: 3, computing: 1 },
          },
          {
            id: "island-3d",
            text: "Write an algorithm to ration food and water based on how long the storm could last",
            weights: { computing: 3, healthBiomedical: 1 },
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
            text: "A biomedical research hospital with cutting-edge gene therapy labs",
            weights: { healthBiomedical: 3, chemistryMaterials: 1 },
          },
          {
            id: "city-1b",
            text: "A massive solar farm and wind turbine array to power everything cleanly",
            weights: { earthEnergy: 3, designBuild: 1 },
          },
          {
            id: "city-1c",
            text: "A fiber-optic network backbone and smart-city data center",
            weights: { computing: 3, earthEnergy: 1 },
          },
          {
            id: "city-1d",
            text: "A wildlife corridor and botanical garden that weaves through the whole city",
            weights: { lifeEcology: 3, earthEnergy: 1 },
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
            text: "Only if they build a materials research lab that local universities can use too",
            weights: { chemistryMaterials: 3, designBuild: 1 },
          },
          {
            id: "city-2b",
            text: "Require an environmental impact study and zero-emission factory standards",
            weights: { earthEnergy: 3, lifeEcology: 1 },
          },
          {
            id: "city-2c",
            text: "Negotiate for a public coding academy and open-source software fund",
            weights: { computing: 3, healthBiomedical: 1 },
          },
          {
            id: "city-2d",
            text: "Design the campus with earthquake-resistant structures and green roofs",
            weights: { designBuild: 3, lifeEcology: 1 },
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
            text: "Self-driving electric pods networked by AI traffic management",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "city-3b",
            text: "An elevated magnetic-levitation train made from advanced lightweight alloys",
            weights: { designBuild: 3, chemistryMaterials: 1 },
          },
          {
            id: "city-3c",
            text: "Hydrogen fuel-cell buses with clean-energy refueling stations",
            weights: { chemistryMaterials: 3, earthEnergy: 1 },
          },
          {
            id: "city-3d",
            text: "Greenways and trails through parks that double as wildlife migration paths",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
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
            text: "A science fair where residents demo their biotech and health innovations",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "city-4b",
            text: "A hackathon where teams build apps to solve city problems in 24 hours",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "city-4c",
            text: "A nature festival celebrating the local ecosystem with guided wildlife tours",
            weights: { lifeEcology: 3, earthEnergy: 1 },
          },
          {
            id: "city-4d",
            text: "A geology and energy expo showing off the region's rocks, minerals, and renewable energy tech",
            weights: { earthEnergy: 3, chemistryMaterials: 1 },
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
            text: "Set up the base camp — assemble habitat modules and calibrate engineering systems",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
          {
            id: "space-1b",
            text: "Collect samples of the glowing plants and run biological analysis",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "space-1c",
            text: "Analyze the atmospheric composition and run geological scans of the surface",
            weights: { earthEnergy: 3, chemistryMaterials: 1 },
          },
          {
            id: "space-1d",
            text: "Deploy sensor drones and set up a data relay network with the ship",
            weights: { computing: 3, designBuild: 1 },
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
            text: "Run a pattern-recognition algorithm to decode the symbols",
            weights: { computing: 3, earthEnergy: 1 },
          },
          {
            id: "space-2b",
            text: "Analyze the chemical composition of the glowing substance in the carvings",
            weights: { chemistryMaterials: 3, healthBiomedical: 1 },
          },
          {
            id: "space-2c",
            text: "Collect microbe samples from the cave walls — something biological is making them glow",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
          },
          {
            id: "space-2d",
            text: "Map the cave system and study the rock formations around the symbols",
            weights: { earthEnergy: 3, designBuild: 1 },
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
            text: "Record its vocalizations and use machine learning to find patterns in its communication",
            weights: { computing: 3, lifeEcology: 1 },
          },
          {
            id: "space-3b",
            text: "Observe its behavior and classify it — what does it eat, how does it move?",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "space-3c",
            text: "Scan it for vital signs — temperature, heart rate, biochemistry",
            weights: { healthBiomedical: 3, chemistryMaterials: 1 },
          },
          {
            id: "space-3d",
            text: "Build a safe containment area to study it without harming it or your crew",
            weights: { designBuild: 3, lifeEcology: 1 },
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
            text: "The mineral deposits and energy sources that could be useful for future missions",
            weights: { earthEnergy: 3, chemistryMaterials: 1 },
          },
          {
            id: "space-4b",
            text: "Detailed blueprints for the structures the next crew should build here",
            weights: { designBuild: 3, computing: 1 },
          },
          {
            id: "space-4c",
            text: "The new biological species discovered and their potential medical applications",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
          },
          {
            id: "space-4d",
            text: "The novel chemical compounds found in the atmosphere and alien materials",
            weights: { chemistryMaterials: 3, earthEnergy: 1 },
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
            text: "Dust for trace chemicals — analyze residue on the frame, floor, and air vents",
            weights: { chemistryMaterials: 3, healthBiomedical: 1 },
          },
          {
            id: "mystery-1b",
            text: "Hack into the corrupted security footage and try to reconstruct the deleted data",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "mystery-1c",
            text: "Check the building's HVAC and structural blueprints for hidden entry points",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
          {
            id: "mystery-1d",
            text: "Look for biological evidence — skin cells, hair, pollen from an unusual location",
            weights: { lifeEcology: 3, healthBiomedical: 1 },
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
            text: "Run mass spectrometry to identify the exact pigment composition and manufacturing origin",
            weights: { chemistryMaterials: 3, healthBiomedical: 1 },
          },
          {
            id: "mystery-2b",
            text: "Cross-reference with a database of known art materials using pattern-matching software",
            weights: { computing: 3, chemistryMaterials: 1 },
          },
          {
            id: "mystery-2c",
            text: "Check if the pigment contains any organic compounds — pollen, plant oils, biological binders",
            weights: { lifeEcology: 3, chemistryMaterials: 1 },
          },
          {
            id: "mystery-2d",
            text: "Study the environmental conditions in the room — humidity, temperature, airflow patterns",
            weights: { earthEnergy: 3, designBuild: 1 },
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
            text: "Deploy thermal imaging drones and motion sensors to map everyone inside",
            weights: { computing: 3, designBuild: 1 },
          },
          {
            id: "mystery-3b",
            text: "Design an entry plan based on the warehouse blueprints and structural weak points",
            weights: { designBuild: 3, earthEnergy: 1 },
          },
          {
            id: "mystery-3c",
            text: "Analyze soil and dust near the warehouse to confirm the painting was transported here",
            weights: { earthEnergy: 3, chemistryMaterials: 1 },
          },
          {
            id: "mystery-3d",
            text: "Set up medical monitoring in case anyone is hurt during the recovery operation",
            weights: { healthBiomedical: 3, lifeEcology: 1 },
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
