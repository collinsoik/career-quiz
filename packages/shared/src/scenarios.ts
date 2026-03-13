import { Scenario } from "./types";

export const SCENARIOS: Scenario[] = [
  // ── Scenario 1: Lost Island (3 decisions) ────────────
  {
    id: "lost-island",
    title: "Lost Island",
    icon: "🏝️",
    description: "You're stranded on a mysterious island. Every choice matters.",
    narrative: "Your boat capsized in a storm and you washed up on an uncharted island. There's jungle inland, cliffs to the east, and wreckage on the beach. Strange animal calls echo from the trees. You need to survive and find a way home.",
    decisions: [
      {
        id: "island-1",
        prompt: "It's your first morning on the island. What do you do first?",
        context: "The sun is rising. You're hungry, thirsty, and your clothes are still damp.",
        choices: [
          {
            id: "island-1a",
            text: "Build a shelter from the wreckage and palm leaves",
            weights: { buildingMaking: 3, engineeringDesign: 1 },
          },
          {
            id: "island-1b",
            text: "Explore the jungle to map the island and find water",
            weights: { scienceDiscovery: 3, justiceCommunity: 1 },
          },
          {
            id: "island-1c",
            text: "Create a giant SOS sign on the beach with rocks and branches",
            weights: { engineeringDesign: 3, buildingMaking: 1 },
          },
          {
            id: "island-1d",
            text: "Search for other survivors who might need help",
            weights: { healthHelping: 3, justiceCommunity: 1 },
          },
        ],
      },
      {
        id: "island-2",
        prompt: "You find a damaged radio in the wreckage. What's your approach?",
        context: "The radio is sparking and cracked, but some wires are still intact. There's a faded instruction manual nearby.",
        choices: [
          {
            id: "island-2a",
            text: "Take it apart, study the components, and try to fix it",
            weights: { techComputing: 3, engineeringDesign: 1 },
          },
          {
            id: "island-2b",
            text: "Read the manual and create a step-by-step repair plan",
            weights: { scienceDiscovery: 3, techComputing: 1 },
          },
          {
            id: "island-2c",
            text: "Organize the group and assign people to find parts, tools, and batteries",
            weights: { businessLeadership: 3, healthHelping: 1 },
          },
          {
            id: "island-2d",
            text: "Get creative and repurpose the parts into a signal mirror or noise maker",
            weights: { creativeExpression: 3, buildingMaking: 1 },
          },
        ],
      },
      {
        id: "island-3",
        prompt: "A storm is approaching fast. How do you prepare the group?",
        context: "Dark clouds are rolling in. You have about two hours. The group is getting nervous.",
        choices: [
          {
            id: "island-3a",
            text: "Reinforce the shelter, tie everything down, and waterproof the roof",
            weights: { buildingMaking: 3, engineeringDesign: 1 },
          },
          {
            id: "island-3b",
            text: "Calm everyone down and make sure the scared people feel safe",
            weights: { healthHelping: 3, justiceCommunity: 1 },
          },
          {
            id: "island-3c",
            text: "Make a checklist: secure food, store water, protect the radio, assign watch shifts",
            weights: { businessLeadership: 3, techComputing: 1 },
          },
          {
            id: "island-3d",
            text: "Study the weather patterns to predict when the storm will pass",
            weights: { scienceDiscovery: 3, techComputing: 1 },
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
    description: "Design a brand new city from scratch in the year 2045.",
    narrative: "It's 2045. You've been given a blank piece of land and a huge budget to build a new city for 50,000 people. You're the lead planner. Every decision shapes how people will live, work, and play here for generations.",
    decisions: [
      {
        id: "city-1",
        prompt: "What's the first thing you build in your new city?",
        context: "You have empty land and your first construction crew is ready. What's the priority?",
        choices: [
          {
            id: "city-1a",
            text: "A big community center where people can meet, learn, and hang out",
            weights: { healthHelping: 3, businessLeadership: 1 },
          },
          {
            id: "city-1b",
            text: "A high-tech research lab to attract the world's smartest scientists",
            weights: { scienceDiscovery: 3, engineeringDesign: 1 },
          },
          {
            id: "city-1c",
            text: "A clean power grid with solar panels and wind turbines",
            weights: { engineeringDesign: 3, buildingMaking: 1 },
          },
          {
            id: "city-1d",
            text: "An arts district with galleries, music studios, and murals everywhere",
            weights: { creativeExpression: 3, businessLeadership: 1 },
          },
        ],
      },
      {
        id: "city-2",
        prompt: "A tech company wants to build their headquarters in your city. What do you do?",
        context: "MegaCorp offers 10,000 jobs but wants tax breaks and prime land. Some residents are worried.",
        choices: [
          {
            id: "city-2a",
            text: "Negotiate hard and get them to fund a public park and local training programs",
            weights: { justiceCommunity: 3, businessLeadership: 1 },
          },
          {
            id: "city-2b",
            text: "Analyze the numbers: economic impact, traffic, and environmental costs",
            weights: { techComputing: 2, scienceDiscovery: 2 },
          },
          {
            id: "city-2c",
            text: "Design the HQ to blend beautifully with the city's look and feel",
            weights: { engineeringDesign: 3, creativeExpression: 1 },
          },
          {
            id: "city-2d",
            text: "Hold town halls so residents can voice concerns and vote on it",
            weights: { healthHelping: 3, justiceCommunity: 1 },
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
            text: "Electric self-driving pods you summon with an app",
            weights: { techComputing: 3, engineeringDesign: 1 },
          },
          {
            id: "city-3b",
            text: "A beautiful elevated train with amazing views and art at every station",
            weights: { creativeExpression: 3, engineeringDesign: 1 },
          },
          {
            id: "city-3c",
            text: "Bike paths and walkways everywhere to make it the healthiest city on earth",
            weights: { healthHelping: 2, justiceCommunity: 2 },
          },
          {
            id: "city-3d",
            text: "A perfectly optimized bus system with guaranteed 5-minute waits",
            weights: { businessLeadership: 3, techComputing: 1 },
          },
        ],
      },
      {
        id: "city-4",
        prompt: "Your city's one-year anniversary is coming up. How do you celebrate?",
        context: "The city is thriving! Time to throw the biggest party ever.",
        choices: [
          {
            id: "city-4a",
            text: "A huge festival with live music, art, and food from every culture",
            weights: { creativeExpression: 3, healthHelping: 1 },
          },
          {
            id: "city-4b",
            text: "A science fair and invention expo showing what residents have created",
            weights: { scienceDiscovery: 3, techComputing: 1 },
          },
          {
            id: "city-4c",
            text: "A community service day where everyone plants trees and builds a park together",
            weights: { justiceCommunity: 3, healthHelping: 1 },
          },
          {
            id: "city-4d",
            text: "A ceremony with awards for the best businesses, teachers, and leaders",
            weights: { businessLeadership: 3, justiceCommunity: 1 },
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
    description: "Lead humanity's first mission to an alien planet.",
    narrative: "You're part of the first crew to land on Kepler-442b, a planet that might support life. Stepping out of the ship, you see glowing plants, floating rocks, and structures that look intentional. Something intelligent lives here. Mission Control is 20 light-minutes away, so you're mostly on your own.",
    decisions: [
      {
        id: "space-1",
        prompt: "You've just landed. What's your first move on this alien planet?",
        context: "The air is breathable. Strange sounds echo in the distance. Your crew of 6 is looking to you.",
        choices: [
          {
            id: "space-1a",
            text: "Set up base camp: assemble the habitat modules and check all equipment",
            weights: { engineeringDesign: 3, buildingMaking: 1 },
          },
          {
            id: "space-1b",
            text: "Collect samples of the glowing plants and run immediate analysis",
            weights: { scienceDiscovery: 3, healthHelping: 1 },
          },
          {
            id: "space-1c",
            text: "Sketch and photograph everything to document this historic moment",
            weights: { creativeExpression: 3, techComputing: 1 },
          },
          {
            id: "space-1d",
            text: "Check on the crew and make sure everyone is okay physically and mentally",
            weights: { healthHelping: 3, justiceCommunity: 1 },
          },
        ],
      },
      {
        id: "space-2",
        prompt: "You discover alien symbols carved into a cave wall. What do you do?",
        context: "The symbols glow faintly when you get close. Some look like a language, others like a map.",
        choices: [
          {
            id: "space-2a",
            text: "Catalog every symbol and look for mathematical patterns",
            weights: { scienceDiscovery: 3, techComputing: 1 },
          },
          {
            id: "space-2b",
            text: "Draw human symbols next to theirs as a creative response",
            weights: { creativeExpression: 3, scienceDiscovery: 1 },
          },
          {
            id: "space-2c",
            text: "Brief the whole crew and develop a contact plan before going further",
            weights: { businessLeadership: 3, justiceCommunity: 1 },
          },
          {
            id: "space-2d",
            text: "Build a device to detect if the symbols emit any signals or energy",
            weights: { engineeringDesign: 3, techComputing: 1 },
          },
        ],
      },
      {
        id: "space-3",
        prompt: "An alien creature appears! It seems curious, not aggressive. How do you respond?",
        context: "It's about the size of a dog, with six legs and big expressive eyes. It's making soft chirping sounds.",
        choices: [
          {
            id: "space-3a",
            text: "Slowly approach and offer food to try to build trust",
            weights: { healthHelping: 3, scienceDiscovery: 1 },
          },
          {
            id: "space-3b",
            text: "Observe from a distance and record its behavior patterns",
            weights: { techComputing: 3, scienceDiscovery: 1 },
          },
          {
            id: "space-3c",
            text: "Position the crew safely and set up an observation perimeter",
            weights: { justiceCommunity: 3, buildingMaking: 1 },
          },
          {
            id: "space-3d",
            text: "Try mimicking its sounds and movements to communicate",
            weights: { creativeExpression: 3, healthHelping: 1 },
          },
        ],
      },
      {
        id: "space-4",
        prompt: "Time to send a message back to Earth. What do you focus on?",
        context: "You can send one detailed report. The whole world will hear it. What matters most?",
        choices: [
          {
            id: "space-4a",
            text: "The scientific data: atmosphere readings, biological samples, geological surveys",
            weights: { scienceDiscovery: 3, engineeringDesign: 1 },
          },
          {
            id: "space-4b",
            text: "A personal story about what it feels like to stand on another world",
            weights: { creativeExpression: 3, healthHelping: 1 },
          },
          {
            id: "space-4c",
            text: "A practical plan for what humanity should do next: resources, risks, and timeline",
            weights: { businessLeadership: 3, techComputing: 1 },
          },
          {
            id: "space-4d",
            text: "Building instructions for the structures the next crew will need",
            weights: { buildingMaking: 3, engineeringDesign: 1 },
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
    description: "Investigate a museum heist and crack the case.",
    narrative: "The city's most famous painting, 'The Starlight Garden' by Elena Voss, vanished from the National Museum overnight. The security footage is corrupted, there are no fingerprints, and the police are stumped. You've been called in as a special consultant. The thief could be selling it right now.",
    decisions: [
      {
        id: "mystery-1",
        prompt: "You arrive at the museum. Where do you start?",
        context: "The empty frame is still on the wall. Security guards look nervous. Reporters are gathered outside.",
        choices: [
          {
            id: "mystery-1a",
            text: "Examine the crime scene inch by inch for hidden clues",
            weights: { scienceDiscovery: 3, justiceCommunity: 1 },
          },
          {
            id: "mystery-1b",
            text: "Interview every guard and staff member who was there last night",
            weights: { healthHelping: 3, justiceCommunity: 1 },
          },
          {
            id: "mystery-1c",
            text: "Hack into the security system to recover the corrupted footage",
            weights: { techComputing: 3, engineeringDesign: 1 },
          },
          {
            id: "mystery-1d",
            text: "Hold a press conference to pressure the thief and get public tips",
            weights: { businessLeadership: 3, creativeExpression: 1 },
          },
        ],
      },
      {
        id: "mystery-2",
        prompt: "You find a tiny paint chip that doesn't match the stolen painting. What next?",
        context: "It's an unusual cobalt blue. It could be from the thief's clothing, another painting, or something else.",
        choices: [
          {
            id: "mystery-2a",
            text: "Run chemical analysis on the paint to find its exact origin",
            weights: { scienceDiscovery: 3, engineeringDesign: 1 },
          },
          {
            id: "mystery-2b",
            text: "Search every art supply store and studio in the city for a match",
            weights: { techComputing: 3, justiceCommunity: 1 },
          },
          {
            id: "mystery-2c",
            text: "Think like the thief: what would someone creative enough to steal art do next?",
            weights: { creativeExpression: 3, justiceCommunity: 1 },
          },
          {
            id: "mystery-2d",
            text: "Visit the artist Elena Voss, she might know who'd want her painting",
            weights: { healthHelping: 3, creativeExpression: 1 },
          },
        ],
      },
      {
        id: "mystery-3",
        prompt: "You've tracked the suspect to an abandoned warehouse. How do you close the case?",
        context: "The suspect is an ex-museum employee who was fired unfairly. The painting is probably inside.",
        choices: [
          {
            id: "mystery-3a",
            text: "Create a tactical plan: entry points, backup positions, evidence handling",
            weights: { businessLeadership: 3, techComputing: 1 },
          },
          {
            id: "mystery-3b",
            text: "Go in and talk to them, understand why they did it, and convince them to return it",
            weights: { healthHelping: 3, justiceCommunity: 1 },
          },
          {
            id: "mystery-3c",
            text: "Build a surveillance setup to monitor the warehouse and catch them",
            weights: { engineeringDesign: 3, techComputing: 1 },
          },
          {
            id: "mystery-3d",
            text: "Set up a sting operation and pose as an art buyer to lure them out",
            weights: { justiceCommunity: 3, buildingMaking: 1 },
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
