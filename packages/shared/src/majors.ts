// ─── STEM Field Definitions ─────────────────────────────────────────────────

export interface StemField {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
}

export const STEM_FIELDS: StemField[] = [
  {
    id: "health-biomedical",
    name: "Health & Biomedical",
    color: "#EC4899",
    icon: "🫀",
    description: "Health-tech, genetics & molecular biology",
  },
  {
    id: "life-ecology",
    name: "Life & Ecology",
    color: "#22C55E",
    icon: "🌿",
    description: "Living systems, fieldwork & wildlife",
  },
  {
    id: "computing",
    name: "Computing & Software",
    color: "#3B82F6",
    icon: "💻",
    description: "Code, data & digital systems",
  },
  {
    id: "chemistry-materials",
    name: "Chemistry & Materials",
    color: "#F97316",
    icon: "🧪",
    description: "Matter, molecules & materials",
  },
  {
    id: "design-build",
    name: "Design & Build",
    color: "#A855F7",
    icon: "⚙️",
    description: "Designing & building physical things",
  },
  {
    id: "earth-energy",
    name: "Earth & Energy",
    color: "#EAB308",
    icon: "🌍",
    description: "Planet-scale systems, energy & climate",
  },
];

// ─── Major Article Definitions ──────────────────────────────────────────────

export interface MajorArticle {
  id: string;
  title: string;
  fieldId: string;
  icon: string;
  hook: string;
  whatYoudStudy: string[];
  typicalDay: string;
  realWorldImpact: string;
  skills: { technical: string[]; soft: string[] };
  whereYoudWork: string[];
  salary: { entry: string; mid: string; experienced: string };
  growthOutlook: {
    percentage: string;
    description: string;
    trend: "high" | "moderate" | "stable";
  };
}

export const MAJOR_ARTICLES: MajorArticle[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // Health & Biomedical
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "biomedical-engineering",
    title: "Biomedical Engineering",
    fieldId: "health-biomedical",
    icon: "🫀",
    hook: "What if you could 3D-print a replacement heart valve or build a robotic arm controlled by thought alone? Biomedical engineers live at the intersection of medicine and technology, designing the devices that save and improve millions of lives every year.",
    whatYoudStudy: [
      "Human Anatomy & Physiology",
      "Biomechanics",
      "Medical Device Design",
      "Biomaterials",
      "Signal Processing for Biomedical Systems",
      "Tissue Engineering",
      "Regulatory Affairs & FDA Compliance",
      "Circuits & Electronics",
      "Computational Modeling of Biological Systems",
      "Clinical Immersion & Hospital Rotations",
    ],
    typicalDay:
      "Your morning starts in a design lab, running stress simulations on a new titanium hip implant using finite element analysis software. After lunch you meet with a team of surgeons to gather feedback on a prototype catheter you helped develop, sketching modifications on a whiteboard. The afternoon is spent in a cleanroom assembling sensor arrays for a wearable glucose monitor, then writing up test results so the quality team can submit them to the FDA.",
    realWorldImpact:
      "Biomedical engineers have given us MRI machines, artificial organs, prosthetic limbs with sensory feedback, and CRISPR gene-editing delivery systems. Their work directly extends and improves human life -- from cochlear implants that restore hearing, to biodegradable stents that keep arteries open without permanent hardware. As the population ages and personalized medicine grows, the demand for smarter, smaller, and more affordable medical technology only accelerates.",
    skills: {
      technical: [
        "CAD/CAM (SolidWorks, Fusion 360)",
        "MATLAB & Python for modeling",
        "3D printing & rapid prototyping",
        "Biocompatibility testing",
        "Signal & image processing",
        "Statistical design of experiments",
      ],
      soft: [
        "Cross-disciplinary communication",
        "Empathy for patient needs",
        "Attention to regulatory detail",
        "Team collaboration",
        "Technical writing",
      ],
    },
    whereYoudWork: [
      "Medical device companies (Medtronic, Boston Scientific)",
      "Hospital R&D departments",
      "Pharmaceutical firms",
      "University research labs",
      "Startups developing wearable health tech",
      "Government agencies (FDA, NIH)",
    ],
    salary: {
      entry: "$68,000",
      mid: "$97,000",
      experienced: "$135,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Steady growth driven by an aging population, advances in personalized medicine, and expanding demand for wearable and implantable health technology.",
      trend: "moderate",
    },
  },

  {
    id: "genetics",
    title: "Genetics",
    fieldId: "health-biomedical",
    icon: "🧬",
    hook: "Your DNA contains about 3 billion letters of code -- and a single typo can cause disease. Geneticists are learning to read, interpret, and even rewrite that code, opening the door to curing inherited conditions and engineering crops that can feed the world.",
    whatYoudStudy: [
      "Molecular Genetics",
      "Genomics & Bioinformatics",
      "Population & Evolutionary Genetics",
      "CRISPR & Gene Editing Technologies",
      "Epigenetics",
      "Human Heredity & Genetic Disorders",
      "Biostatistics",
      "Cell Biology",
      "Genetic Counseling Ethics",
      "Laboratory Techniques (PCR, gel electrophoresis, sequencing)",
    ],
    typicalDay:
      "You begin your day pipetting DNA samples into a sequencing machine, queuing up dozens of patient genomes for analysis. Mid-morning is spent at your computer, writing Python scripts to sift through terabytes of sequencing data looking for mutations linked to a rare childhood disease. After lunch you join a journal club where your lab discusses a new CRISPR breakthrough paper, then spend the late afternoon culturing cell lines to test whether a candidate gene therapy actually corrects the faulty protein.",
    realWorldImpact:
      "Genetics research has mapped the entire human genome, identified thousands of disease-causing mutations, and given us gene therapies like Luxturna that can restore sight in people born blind. Agricultural genetics has produced drought-resistant crops that sustain communities facing climate change. With at-home DNA kits making genetic information more accessible and gene editing growing more precise each year, geneticists are shaping a future where diseases can be predicted, prevented, or cured at the molecular level.",
    skills: {
      technical: [
        "DNA/RNA extraction & sequencing",
        "Bioinformatics (Python, R, BLAST)",
        "CRISPR/Cas9 gene editing",
        "Statistical genetics & GWAS analysis",
        "Cell & tissue culture",
        "Next-generation sequencing platforms",
      ],
      soft: [
        "Analytical thinking",
        "Scientific communication",
        "Ethical reasoning",
        "Patience & persistence",
        "Collaboration across disciplines",
      ],
    },
    whereYoudWork: [
      "Genomics companies (Illumina, 23andMe)",
      "Pharmaceutical & biotech firms",
      "University research laboratories",
      "Hospitals & genetic counseling clinics",
      "Agricultural biotech companies",
      "Government research agencies (NIH, CDC)",
    ],
    salary: {
      entry: "$52,000",
      mid: "$82,000",
      experienced: "$120,000",
    },
    growthOutlook: {
      percentage: "7%",
      description:
        "Growing demand fueled by expansion of precision medicine, direct-to-consumer genetic testing, and gene therapy clinical trials.",
      trend: "high",
    },
  },

  {
    id: "biochemistry",
    title: "Biochemistry",
    fieldId: "health-biomedical",
    icon: "⚗️",
    hook: "Every breath you take, every thought you have, and every bite of food you digest runs on chemistry. Biochemists zoom in on the molecular machinery inside living cells to understand disease, develop drugs, and even brew biofuels from algae.",
    whatYoudStudy: [
      "Organic Chemistry I & II",
      "Protein Structure & Function",
      "Enzyme Kinetics & Catalysis",
      "Metabolic Pathways",
      "Molecular Biology of the Cell",
      "Structural Biology (X-ray crystallography, cryo-EM)",
      "Pharmacology",
      "Analytical Instrumentation (mass spectrometry, NMR)",
      "Biostatistics",
      "Advanced Biochemistry Lab",
    ],
    typicalDay:
      "Your morning begins by purifying a protein you have been expressing in bacterial cells all week, running it through chromatography columns to get a clean sample. After lunch you sit down with a structural biologist to analyze cryo-EM images of the protein, trying to understand how a drug candidate binds to its active site. Late afternoon is lab meeting time, where you present your kinetics data to the group and brainstorm next experiments over coffee.",
    realWorldImpact:
      "Biochemistry is the backbone of modern drug development. Biochemists figured out the 3D shape of the SARS-CoV-2 spike protein, which enabled the rapid creation of mRNA vaccines. The field has given us cancer-fighting antibody therapies, industrial enzymes that make laundry detergent work in cold water, and biosensors that detect toxins in drinking water. Whenever scientists need to understand how a molecule behaves inside a living system, biochemistry provides the answers.",
    skills: {
      technical: [
        "Protein purification & characterization",
        "Chromatography (HPLC, FPLC)",
        "Spectroscopy (UV-Vis, fluorescence, NMR)",
        "Molecular cloning & gene expression",
        "Data analysis (GraphPad, Python)",
        "Assay development & validation",
      ],
      soft: [
        "Meticulous lab technique",
        "Critical thinking",
        "Scientific writing & publication",
        "Time management",
        "Collaborative problem-solving",
      ],
    },
    whereYoudWork: [
      "Pharmaceutical companies (Pfizer, Roche, Merck)",
      "Biotech startups",
      "University & medical school research labs",
      "Food & beverage industry R&D",
      "Government labs (NIH, USDA)",
      "Clinical diagnostics companies",
    ],
    salary: {
      entry: "$50,000",
      mid: "$78,000",
      experienced: "$115,000",
    },
    growthOutlook: {
      percentage: "7%",
      description:
        "Growth propelled by pharmaceutical R&D expansion, increasing investment in biologics, and growing demand for biochemists in agricultural and industrial biotech.",
      trend: "moderate",
    },
  },

  {
    id: "microbiology",
    title: "Microbiology",
    fieldId: "health-biomedical",
    icon: "🦠",
    hook: "There are more bacteria in your gut than stars in the Milky Way, and viruses outnumber every other living thing on Earth combined. Microbiologists study these tiny organisms that can either save your life or threaten it -- and the line between the two is surprisingly thin.",
    whatYoudStudy: [
      "General & Medical Microbiology",
      "Virology",
      "Immunology",
      "Bacteriology & Mycology",
      "Microbial Genetics",
      "Epidemiology",
      "Antimicrobial Agents & Resistance",
      "Environmental Microbiology",
      "Fermentation Technology",
      "Clinical & Diagnostic Microbiology Lab",
    ],
    typicalDay:
      "You start the day in a biosafety cabinet, streaking bacterial cultures onto agar plates and setting up antibiotic sensitivity tests. By mid-morning you are behind a microscope, examining stained tissue samples to identify a mystery pathogen from a hospital outbreak. After lunch you meet with the epidemiology team to map how the infection is spreading through the ward, then spend the afternoon running PCR tests to confirm the pathogen's identity and writing up your findings for the clinical team.",
    realWorldImpact:
      "Microbiologists were at the frontline of the COVID-19 response, identifying the virus, developing diagnostic tests, and helping create vaccines in record time. Beyond pandemics, the field gives us probiotics that improve gut health, bioremediation techniques that clean up oil spills using bacteria, and fermentation processes behind everything from beer to insulin production. As antibiotic resistance grows into a global crisis, microbiologists are among the most important scientists working to protect public health.",
    skills: {
      technical: [
        "Aseptic technique & biosafety protocols",
        "Microscopy (light, fluorescence, electron)",
        "PCR & molecular diagnostics",
        "Bacterial & viral culture methods",
        "Bioinformatics for pathogen genomics",
        "Flow cytometry",
      ],
      soft: [
        "Attention to detail & safety awareness",
        "Analytical reasoning",
        "Clear scientific communication",
        "Adaptability under pressure",
        "Teamwork in clinical settings",
      ],
    },
    whereYoudWork: [
      "Hospitals & clinical laboratories",
      "Centers for Disease Control (CDC)",
      "Pharmaceutical companies",
      "Food safety & quality assurance labs",
      "Environmental testing firms",
      "University research departments",
    ],
    salary: {
      entry: "$49,000",
      mid: "$75,000",
      experienced: "$110,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Consistent demand supported by ongoing infectious disease threats, antibiotic resistance research, and expanding roles in food safety and environmental monitoring.",
      trend: "moderate",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Life & Ecology
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "biology",
    title: "Biology",
    fieldId: "life-ecology",
    icon: "🌿",
    hook: "From the bacteria living in boiling volcanic vents to the whales singing across entire oceans, biology is the study of every living thing on Earth -- and maybe beyond. It is the broadest life science, and one of the most versatile degrees you can earn.",
    whatYoudStudy: [
      "Cell & Molecular Biology",
      "Ecology & Evolution",
      "Genetics & Heredity",
      "Anatomy & Physiology",
      "Botany & Plant Biology",
      "Biostatistics",
      "Conservation Biology",
      "Developmental Biology",
      "Neuroscience Foundations",
      "Field Biology & Ecological Sampling",
      "Bioinformatics Basics",
    ],
    typicalDay:
      "As a wildlife biologist, your morning might start before dawn setting camera traps along a forest trail to monitor endangered species. By mid-morning you are back at a field station, entering data into a GIS mapping system and running population models. After lunch you switch gears entirely, reviewing tissue samples under a microscope for a conservation genetics project. The variety is the point -- biology careers can look completely different depending on your specialty, from hospital labs to rainforest canopies.",
    realWorldImpact:
      "Biology underpins nearly every major advance in health, agriculture, and environmental protection. Biologists discovered how cells divide (and how to stop cancer), mapped ecosystems to establish national parks, and developed the theory of evolution that unites all life sciences. Today, biologists are using environmental DNA to detect invasive species in lakes, engineering bacteria to produce sustainable plastics, and building the foundational knowledge that other STEM fields depend on.",
    skills: {
      technical: [
        "Laboratory techniques (microscopy, dissection, staining)",
        "Statistical analysis (R, SPSS)",
        "Field sampling & data collection",
        "Molecular biology protocols (PCR, gel electrophoresis)",
        "GIS & spatial data analysis",
        "Scientific illustration & documentation",
      ],
      soft: [
        "Curiosity & observation skills",
        "Scientific writing",
        "Adaptability to fieldwork conditions",
        "Collaboration on research teams",
        "Presentation & teaching ability",
      ],
    },
    whereYoudWork: [
      "National parks & wildlife agencies (US Fish & Wildlife Service)",
      "University research labs",
      "Pharmaceutical & biotech companies",
      "Environmental consulting firms",
      "Museums & botanical gardens",
      "K-12 and higher education teaching",
    ],
    salary: {
      entry: "$45,000",
      mid: "$68,000",
      experienced: "$100,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Stable growth across diverse biology careers, with the strongest demand in biotechnology, environmental consulting, and bioinformatics.",
      trend: "moderate",
    },
  },

  {
    id: "zoology",
    title: "Zoology",
    fieldId: "life-ecology",
    icon: "🐾",
    hook: "Ever wondered how a cheetah can accelerate faster than a sports car, or why octopuses can change color in milliseconds? Zoologists spend their careers answering questions like these -- and using that knowledge to protect the animal kingdom from extinction.",
    whatYoudStudy: [
      "Vertebrate & Invertebrate Zoology",
      "Animal Behavior & Ethology",
      "Comparative Anatomy",
      "Wildlife Ecology & Management",
      "Conservation Genetics",
      "Marine Biology",
      "Evolutionary Biology",
      "Parasitology",
      "Animal Physiology",
      "Field Research Methods",
    ],
    typicalDay:
      "Your day begins at a wildlife rehabilitation center, performing health checks on a red-tailed hawk recovering from a wing injury. By late morning you head into the field to observe wolf pack behavior from a distance, recording data on social interactions with a spotting scope and GPS tracker. After a quick lunch in the truck, you analyze movement data back at the lab, overlaying it on habitat maps to recommend corridor protections to the state wildlife agency. Your report could determine whether a highway bypass gets built.",
    realWorldImpact:
      "Zoologists are on the front lines of the biodiversity crisis, working to save species before they disappear forever. Their research has led to breeding programs that brought California condors back from the brink, marine protected areas that revived collapsed fish populations, and veterinary breakthroughs used in zoos and wildlife sanctuaries worldwide. Understanding animal behavior also drives innovations in robotics, where engineers mimic how animals move, sense, and communicate.",
    skills: {
      technical: [
        "Wildlife tracking & telemetry (GPS, radio collars)",
        "Animal handling & restraint",
        "Population modeling software",
        "GIS & habitat mapping",
        "Taxonomy & species identification",
        "Statistical ecology (R, MARK)",
      ],
      soft: [
        "Patience for long-term observation",
        "Physical fitness for fieldwork",
        "Ethical decision-making",
        "Public outreach & education",
        "Grant writing",
      ],
    },
    whereYoudWork: [
      "Zoos & aquariums (San Diego Zoo, Monterey Bay Aquarium)",
      "State & federal wildlife agencies",
      "Conservation NGOs (WWF, Nature Conservancy)",
      "University research departments",
      "Environmental consulting firms",
      "Documentary & science media production",
    ],
    salary: {
      entry: "$42,000",
      mid: "$65,000",
      experienced: "$95,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Steady demand as biodiversity loss accelerates worldwide, creating need for wildlife managers, conservation biologists, and ecological researchers.",
      trend: "moderate",
    },
  },

  {
    id: "marine-sciences",
    title: "Marine Sciences",
    fieldId: "life-ecology",
    icon: "🌊",
    hook: "We have mapped more of the surface of Mars than we have of our own ocean floor. Marine scientists explore the last great frontier on Earth -- a world of bioluminescent creatures, underwater volcanoes, and ecosystems that produce over half the oxygen we breathe.",
    whatYoudStudy: [
      "Biological Oceanography",
      "Physical Oceanography (currents, waves, tides)",
      "Marine Ecology & Coral Reef Systems",
      "Marine Chemistry",
      "Fisheries Science & Aquaculture",
      "Coastal Geology & Sedimentology",
      "Remote Sensing & Ocean Technology",
      "Marine Policy & Conservation",
      "Scuba Diving Certification & Underwater Research Methods",
      "Climate Science & Ocean-Atmosphere Interactions",
    ],
    typicalDay:
      "Your alarm goes off at 5 AM aboard a research vessel in the Gulf of Mexico. Before breakfast you help deploy a CTD sensor array to measure temperature, salinity, and depth. By mid-morning you are in a wet lab processing plankton samples towed up overnight. After lunch the dive team gears up to survey a coral reef restoration site, and you spend two hours underwater photographing regrowth and collecting tissue samples. Back on deck, you enter data and call your PI onshore via satellite to discuss preliminary findings.",
    realWorldImpact:
      "Marine scientists discovered hydrothermal vent ecosystems that rewrote our understanding of where life can exist. Their research informs policies on overfishing, offshore drilling, and marine protected areas that cover millions of square miles of ocean. Coral reef restoration projects led by marine biologists are rebuilding ecosystems that protect coastlines from storms and support the livelihoods of hundreds of millions of people. As oceans absorb more CO2 and sea levels rise, marine science is more critical than ever.",
    skills: {
      technical: [
        "Scuba diving & underwater data collection",
        "Oceanographic instrument operation (CTD, sonar, ROVs)",
        "Water chemistry analysis",
        "Species identification & taxonomy",
        "GIS & remote sensing (satellite imagery)",
        "Statistical modeling (R, MATLAB)",
      ],
      soft: [
        "Comfort working in remote and harsh environments",
        "Teamwork on research vessels",
        "Science communication & public outreach",
        "Adaptability",
        "Environmental advocacy",
      ],
    },
    whereYoudWork: [
      "NOAA & national marine sanctuaries",
      "University oceanography programs (Woods Hole, Scripps)",
      "Aquariums & marine parks",
      "Environmental consulting firms",
      "Offshore energy & resource companies",
      "International conservation organizations",
    ],
    salary: {
      entry: "$44,000",
      mid: "$68,000",
      experienced: "$100,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Growing focus on climate change, ocean health, and sustainable fisheries is expanding opportunities for marine scientists in government and private sectors.",
      trend: "moderate",
    },
  },

  {
    id: "environmental-science",
    title: "Environmental Science",
    fieldId: "life-ecology",
    icon: "🌍",
    hook: "Climate change, deforestation, plastic pollution, wildfires -- the planet is under pressure from every direction. Environmental scientists are the detectives who diagnose these problems and the architects who design the solutions, using everything from satellite data to soil samples.",
    whatYoudStudy: [
      "Ecology & Ecosystems",
      "Climate Science & Global Change",
      "Environmental Chemistry",
      "Hydrology & Water Resources",
      "Soil Science",
      "Environmental Policy & Law",
      "Geographic Information Systems (GIS)",
      "Air Quality & Atmospheric Science",
      "Sustainability & Resource Management",
      "Environmental Impact Assessment",
      "Remote Sensing & Spatial Analysis",
    ],
    typicalDay:
      "You start the morning collecting water samples from a stream near an old industrial site, testing for heavy metals and pH on the spot with a portable kit. Back at the office, you upload the data into a GIS platform and overlay it with land use maps to trace potential contamination sources. After lunch you join a conference call with city planners to present your environmental impact assessment for a proposed housing development, recommending changes to protect a nearby wetland. The afternoon wraps up writing a section of a remediation plan for a brownfield cleanup project.",
    realWorldImpact:
      "Environmental scientists helped identify the hole in the ozone layer, leading to the Montreal Protocol that banned CFCs and allowed the ozone to heal. They design the monitoring systems that track air and water quality in every major city, lead wildfire risk assessments that save communities, and advise governments on climate adaptation strategies. The field is central to the global transition toward sustainability, from restoring degraded forests to designing circular economies that minimize waste.",
    skills: {
      technical: [
        "GIS & spatial analysis (ArcGIS, QGIS)",
        "Water & soil sampling and lab analysis",
        "Environmental modeling software",
        "Remote sensing & drone surveys",
        "Statistical analysis (R, Python)",
        "Regulatory compliance (EPA standards, NEPA)",
      ],
      soft: [
        "Systems thinking",
        "Policy communication & advocacy",
        "Report writing for diverse audiences",
        "Project management",
        "Interdisciplinary collaboration",
      ],
    },
    whereYoudWork: [
      "Environmental consulting firms (AECOM, Arcadis)",
      "EPA & state environmental agencies",
      "Nonprofit conservation organizations",
      "Energy companies (sustainability divisions)",
      "City & regional planning departments",
      "University research programs",
    ],
    salary: {
      entry: "$48,000",
      mid: "$73,000",
      experienced: "$105,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Increasing regulatory requirements and corporate sustainability commitments are driving strong demand for environmental scientists across the public and private sectors.",
      trend: "moderate",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Computing & Software
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "computer-science",
    title: "Computer Science",
    fieldId: "computing",
    icon: "💻",
    hook: "Every app on your phone, every search engine result, every recommendation on your streaming service -- all of it runs on algorithms written by computer scientists. This is the field that built the modern world, and it is still accelerating.",
    whatYoudStudy: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java, C++, Python)",
      "Operating Systems",
      "Computer Architecture",
      "Database Systems",
      "Software Engineering & Design Patterns",
      "Artificial Intelligence & Machine Learning",
      "Web & Mobile Application Development",
      "Computer Networks",
      "Theory of Computation",
      "Human-Computer Interaction",
    ],
    typicalDay:
      "As a software engineer at a tech company, your morning starts with a stand-up meeting where the team reviews progress on a new feature. You spend a couple hours writing and testing code, refactoring an API endpoint to handle ten times the traffic. After lunch a pull request you submitted gets reviewed by a senior engineer, and you pair-program to resolve a tricky concurrency bug. The late afternoon is heads-down time on a side project -- training a small machine learning model to auto-tag customer support tickets.",
    realWorldImpact:
      "Computer science gave us the internet, smartphones, social media, GPS navigation, streaming video, and AI assistants. It powers the algorithms that route emergency vehicles, match organ donors to patients, and detect fraud in banking. CS breakthroughs in machine learning are now accelerating drug discovery, translating languages in real time, and generating art and music. It is hard to name an industry that computer science has not fundamentally transformed.",
    skills: {
      technical: [
        "Programming in multiple languages (Python, JavaScript, C++, Java)",
        "Version control (Git, GitHub)",
        "Cloud platforms (AWS, GCP, Azure)",
        "Database design (SQL, NoSQL)",
        "Algorithm design & optimization",
        "Testing & CI/CD pipelines",
      ],
      soft: [
        "Logical and abstract thinking",
        "Debugging persistence",
        "Team collaboration (Agile/Scrum)",
        "Clear technical communication",
        "Continuous learning mindset",
      ],
    },
    whereYoudWork: [
      "Big Tech (Google, Apple, Microsoft, Meta, Amazon)",
      "Startups and scale-ups",
      "Finance & fintech (Goldman Sachs, Stripe)",
      "Healthcare technology companies",
      "Government & defense (NSA, DARPA)",
      "Freelance & remote consulting",
    ],
    salary: {
      entry: "$78,000",
      mid: "$120,000",
      experienced: "$170,000",
    },
    growthOutlook: {
      percentage: "25%",
      description:
        "Exceptional growth driven by AI/ML adoption, cloud computing expansion, and the digitization of virtually every industry on the planet.",
      trend: "high",
    },
  },

  {
    id: "computer-engineering",
    title: "Computer Engineering",
    fieldId: "computing",
    icon: "🔌",
    hook: "Someone has to design the actual chips and circuits that make software possible. Computer engineers build the physical brains inside your phone, your car, your game console, and even satellites orbiting Mars -- bridging the gap between code and silicon.",
    whatYoudStudy: [
      "Digital Logic Design",
      "Computer Architecture & Processor Design",
      "Embedded Systems & Microcontrollers",
      "VLSI (Very Large-Scale Integration) Design",
      "Signals & Systems",
      "Operating Systems & Real-Time Computing",
      "Programming (C, C++, Verilog/VHDL)",
      "Computer Networks & Protocols",
      "Hardware-Software Co-Design",
      "Robotics & IoT Systems",
    ],
    typicalDay:
      "Your morning is spent in a hardware lab, using an oscilloscope to debug timing issues on a custom circuit board for an IoT sensor node. Mid-morning you switch to your workstation to write firmware in C that will run on the board's microcontroller, optimizing it to use as little power as possible. After lunch you join a cross-team review where hardware and software engineers align on the interface between a new chip design and the driver code. The afternoon wraps up with simulation runs in Cadence tools, verifying your FPGA logic before sending the design for fabrication.",
    realWorldImpact:
      "Computer engineers designed the chips that made smartphones pocket-sized supercomputers, the GPUs that power modern AI training, and the embedded systems inside pacemakers, car airbags, and Mars rovers. The global semiconductor industry they support is worth over $500 billion and underpins everything from cloud data centers to the smart grid. As AI hardware demand explodes and the Internet of Things connects billions of devices, computer engineers are more essential than ever.",
    skills: {
      technical: [
        "HDL programming (Verilog, VHDL)",
        "Embedded C/C++ programming",
        "PCB design (Altium, KiCad)",
        "FPGA development",
        "Signal analysis (oscilloscopes, logic analyzers)",
        "Linux kernel & driver development",
      ],
      soft: [
        "Detail-oriented debugging",
        "Cross-disciplinary teamwork (hardware + software)",
        "Project management",
        "Technical documentation",
        "Creative problem-solving",
      ],
    },
    whereYoudWork: [
      "Semiconductor companies (Intel, AMD, NVIDIA, Qualcomm)",
      "Consumer electronics (Apple, Samsung)",
      "Automotive (Tesla, Waymo)",
      "Aerospace & defense (Lockheed Martin, Raytheon)",
      "IoT & robotics startups",
      "Cloud infrastructure providers",
    ],
    salary: {
      entry: "$75,000",
      mid: "$112,000",
      experienced: "$155,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Steady growth as demand for custom AI accelerators, IoT devices, and advanced semiconductor designs continues to rise.",
      trend: "moderate",
    },
  },

  {
    id: "data-science",
    title: "Data Science",
    fieldId: "computing",
    icon: "📊",
    hook: "Netflix knows what you want to watch before you do. Spotify builds you a personal playlist every week. Behind every eerily accurate recommendation is a data scientist who taught a machine to find patterns in mountains of information.",
    whatYoudStudy: [
      "Probability & Statistics",
      "Machine Learning & Deep Learning",
      "Data Wrangling & Cleaning (Python, pandas)",
      "Data Visualization (Tableau, matplotlib, D3.js)",
      "SQL & Database Management",
      "Natural Language Processing",
      "Big Data Technologies (Spark, Hadoop)",
      "Experimental Design & A/B Testing",
      "Linear Algebra & Calculus for ML",
      "Ethics in Data Science & AI",
    ],
    typicalDay:
      "Your morning starts by pulling overnight A/B test results from a product experiment, writing SQL queries to segment users and measure conversion rates. You build a quick dashboard in Tableau for the product manager, then dive into a Jupyter notebook to fine-tune a recommendation model using TensorFlow. After lunch, you present your findings to the marketing team, translating complex statistical results into plain-English insights. The afternoon is spent cleaning a messy new dataset from a third-party vendor, writing Python scripts to handle missing values and inconsistent formats before it can be used for training.",
    realWorldImpact:
      "Data science has transformed how decisions are made in virtually every field. In healthcare, predictive models identify patients at risk of sepsis hours before symptoms appear. In climate science, data models forecast extreme weather events. In criminal justice, data scientists are auditing algorithms for bias to promote fairness. The field is also at the heart of the AI revolution, building the models that power chatbots, autonomous vehicles, and real-time language translation.",
    skills: {
      technical: [
        "Python (pandas, scikit-learn, TensorFlow/PyTorch)",
        "SQL & database querying",
        "Statistical modeling & hypothesis testing",
        "Data visualization tools (Tableau, Power BI)",
        "Cloud ML platforms (AWS SageMaker, GCP Vertex AI)",
        "Version control & reproducible research (Git, Docker)",
      ],
      soft: [
        "Storytelling with data",
        "Business acumen",
        "Intellectual curiosity",
        "Communication with non-technical stakeholders",
        "Ethical judgment",
      ],
    },
    whereYoudWork: [
      "Tech companies (Google, Meta, Netflix, Spotify)",
      "Finance & insurance (JPMorgan, Capital One)",
      "Healthcare analytics firms",
      "E-commerce (Amazon, Shopify)",
      "Government agencies (Census Bureau, NASA)",
      "Sports analytics teams",
    ],
    salary: {
      entry: "$75,000",
      mid: "$115,000",
      experienced: "$160,000",
    },
    growthOutlook: {
      percentage: "36%",
      description:
        "One of the fastest-growing fields in STEM, fueled by the explosion of data generation, AI adoption, and the need for data-driven decision making across all industries.",
      trend: "high",
    },
  },

  {
    id: "cybersecurity",
    title: "Cybersecurity",
    fieldId: "computing",
    icon: "🛡️",
    hook: "A single data breach can cost a company hundreds of millions of dollars. A ransomware attack can shut down a hospital. Cybersecurity professionals are the digital defenders standing between hackers and the systems that society depends on -- and there are nowhere near enough of them.",
    whatYoudStudy: [
      "Network Security & Firewalls",
      "Ethical Hacking & Penetration Testing",
      "Cryptography",
      "Operating System Security (Linux, Windows)",
      "Malware Analysis & Reverse Engineering",
      "Incident Response & Digital Forensics",
      "Cloud Security",
      "Risk Assessment & Compliance (NIST, ISO 27001)",
      "Secure Software Development",
      "Identity & Access Management",
    ],
    typicalDay:
      "Your morning begins with a review of overnight security alerts from the SIEM dashboard, triaging potential threats and filtering out false positives. A suspicious login pattern from Eastern Europe catches your eye, and you dig into the logs to determine if it is a genuine intrusion or a compromised VPN credential. After lunch you lead a red team exercise, attempting to breach your own company's new web application before it launches, documenting every vulnerability you find. Late afternoon is spent writing up your findings and briefing the development team on patches they need to apply before the go-live date.",
    realWorldImpact:
      "Cybersecurity professionals protected critical infrastructure during the Colonial Pipeline ransomware attack, defend hospital networks from attacks that could endanger patients, and safeguard elections from foreign interference. The field has exposed state-sponsored espionage campaigns, taken down criminal botnets, and developed the encryption standards that keep your banking and messaging private. With cybercrime damages projected to exceed $10 trillion annually, cybersecurity is no longer optional -- it is existential.",
    skills: {
      technical: [
        "Penetration testing tools (Kali Linux, Metasploit, Burp Suite)",
        "Network protocol analysis (Wireshark, tcpdump)",
        "SIEM platforms (Splunk, Sentinel)",
        "Scripting (Python, Bash, PowerShell)",
        "Cloud security (AWS Security Hub, Azure Sentinel)",
        "Cryptographic protocols (TLS, PKI, AES)",
      ],
      soft: [
        "Adversarial thinking",
        "Calm under pressure",
        "Continuous learning (threats evolve daily)",
        "Clear incident reporting",
        "Ethical integrity",
      ],
    },
    whereYoudWork: [
      "Cybersecurity firms (CrowdStrike, Palo Alto Networks, Mandiant)",
      "Financial institutions (banks, insurance companies)",
      "Government & intelligence agencies (NSA, FBI, CISA)",
      "Healthcare systems",
      "Cloud & tech companies (Microsoft, AWS)",
      "Independent consulting & bug bounty hunting",
    ],
    salary: {
      entry: "$72,000",
      mid: "$107,000",
      experienced: "$150,000",
    },
    growthOutlook: {
      percentage: "33%",
      description:
        "Explosive growth with a massive global talent shortage -- over 3.5 million cybersecurity jobs remain unfilled worldwide, making this one of the most in-demand fields in tech.",
      trend: "high",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Chemistry & Materials
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "chemistry",
    title: "Chemistry",
    fieldId: "chemistry-materials",
    icon: "🧪",
    hook: "Chemistry is the science of transformation -- turning sand into computer chips, crude oil into lifesaving medicines, and sunlight into storable energy. If you have ever been fascinated by how one substance can become something entirely different, this field is calling your name.",
    whatYoudStudy: [
      "General Chemistry I & II",
      "Organic Chemistry I & II",
      "Physical Chemistry (Thermodynamics & Quantum)",
      "Analytical Chemistry",
      "Inorganic Chemistry",
      "Instrumental Analysis (mass spec, NMR, IR)",
      "Computational Chemistry",
      "Polymer Chemistry",
      "Environmental Chemistry",
      "Advanced Laboratory Synthesis",
    ],
    typicalDay:
      "Your morning in an R&D lab starts by setting up a multi-step organic synthesis, carefully measuring reagents and monitoring a reflux reaction. While it runs, you hop over to the NMR spectrometer to analyze yesterday's product, checking that the molecule you built has the right structure. After lunch you troubleshoot a reaction that gave an unexpected byproduct, consulting the literature for alternative catalysts. Late afternoon is writing time -- documenting your procedures in a lab notebook and drafting a section of a paper describing a new green chemistry approach that eliminates toxic solvents.",
    realWorldImpact:
      "Chemists developed the lithium-ion batteries powering electric vehicles, the polymers that make modern medicine possible (from surgical sutures to drug delivery capsules), and the catalysts that remove pollutants from car exhaust. Green chemistry initiatives are redesigning industrial processes to eliminate hazardous waste. Analytical chemists test drinking water for contaminants, verify the authenticity of pharmaceuticals, and even solve crimes through forensic analysis. Chemistry is woven into every material thing in your life.",
    skills: {
      technical: [
        "Synthetic organic & inorganic chemistry",
        "Analytical instrumentation (NMR, mass spec, HPLC, GC)",
        "Computational chemistry software (Gaussian, ORCA)",
        "Lab safety & chemical handling",
        "Data analysis & statistical methods",
        "Technical writing & literature research (SciFinder)",
      ],
      soft: [
        "Meticulous record-keeping",
        "Problem-solving & troubleshooting",
        "Patience with iterative experimentation",
        "Collaboration in research teams",
        "Presentation skills",
      ],
    },
    whereYoudWork: [
      "Pharmaceutical companies (Johnson & Johnson, AbbVie)",
      "Chemical manufacturers (Dow, BASF, DuPont)",
      "Consumer products companies (P&G, Unilever)",
      "Government labs (NIST, national laboratories)",
      "Forensic science laboratories",
      "University research & teaching",
    ],
    salary: {
      entry: "$50,000",
      mid: "$80,000",
      experienced: "$115,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Moderate growth with particularly strong demand in pharmaceutical development, battery technology, and green chemistry innovations.",
      trend: "moderate",
    },
  },

  {
    id: "chemical-engineering",
    title: "Chemical Engineering",
    fieldId: "chemistry-materials",
    icon: "🏭",
    hook: "A chemist can make a miracle drug in a beaker. A chemical engineer figures out how to make a million doses of it safely, affordably, and on schedule. If you like the idea of scaling up science from the lab bench to the factory floor, chemical engineering is where the magic happens.",
    whatYoudStudy: [
      "Chemical Process Design",
      "Thermodynamics & Heat Transfer",
      "Fluid Mechanics",
      "Mass Transfer & Separation Processes",
      "Reaction Engineering & Reactor Design",
      "Process Control & Instrumentation",
      "Materials & Corrosion Engineering",
      "Biochemical Engineering",
      "Plant Design & Safety Engineering",
      "Process Simulation (Aspen Plus, HYSYS)",
    ],
    typicalDay:
      "Your morning at a refinery starts with a control room walkthrough, checking process parameters on a distillation column that separates crude oil into usable fractions. You notice a heat exchanger running below efficiency and schedule maintenance. Mid-morning you sit down with process simulation software to model a proposed plant modification that could cut energy use by 15%. After lunch you lead a Process Hazard Analysis meeting with the safety team, reviewing what-if scenarios for a new reactor vessel. The day ends by reviewing lab results on a pilot-scale biofuel production run.",
    realWorldImpact:
      "Chemical engineers make possible nearly everything produced at industrial scale: gasoline, plastics, fertilizers, semiconductors, beer, paper, pharmaceuticals, and clean water. They designed the processes behind mRNA vaccine mass production that delivered billions of COVID doses. Today chemical engineers are at the forefront of sustainability -- developing carbon capture systems, biodegradable packaging, green hydrogen production, and processes that turn agricultural waste into biofuels.",
    skills: {
      technical: [
        "Process simulation (Aspen Plus, HYSYS, COMSOL)",
        "Process safety analysis (HAZOP, PHA)",
        "Piping & instrumentation diagram (P&ID) reading",
        "Statistical process control",
        "Programming for process automation (Python, MATLAB)",
        "Material & energy balance calculations",
      ],
      soft: [
        "Systems-level thinking",
        "Safety-first mindset",
        "Leadership & project management",
        "Clear communication with plant operators",
        "Decision-making under uncertainty",
      ],
    },
    whereYoudWork: [
      "Oil & gas companies (ExxonMobil, Shell, Chevron)",
      "Pharmaceutical manufacturers (Pfizer, Eli Lilly)",
      "Semiconductor fabrication plants (TSMC, Intel)",
      "Food & beverage companies (Coca-Cola, Nestle)",
      "Clean energy & battery companies",
      "Engineering consulting firms (Bechtel, Jacobs)",
    ],
    salary: {
      entry: "$72,000",
      mid: "$105,000",
      experienced: "$145,000",
    },
    growthOutlook: {
      percentage: "8%",
      description:
        "Strong growth fueled by the energy transition, semiconductor manufacturing expansion, and pharmaceutical scale-up demands.",
      trend: "high",
    },
  },

  {
    id: "materials-science",
    title: "Materials Science & Engineering",
    fieldId: "chemistry-materials",
    icon: "🔬",
    hook: "The Stone Age, the Bronze Age, the Iron Age -- every era of human civilization is named after the material that defined it. We are now in the age of silicon, carbon fiber, and graphene. Materials scientists invent the stuff that makes the impossible possible.",
    whatYoudStudy: [
      "Structure of Materials (crystallography, bonding)",
      "Thermodynamics of Materials",
      "Mechanical Behavior of Materials",
      "Electronic & Magnetic Properties",
      "Polymer Science & Engineering",
      "Ceramics & Composites",
      "Nanomaterials & Nanotechnology",
      "Materials Characterization (SEM, TEM, XRD)",
      "Corrosion & Degradation",
      "Computational Materials Science",
      "Biomaterials",
    ],
    typicalDay:
      "Your morning starts at a scanning electron microscope, imaging the fracture surface of a failed turbine blade to understand why it cracked. By mid-morning you are in a cleanroom, depositing thin films of a new semiconductor material onto silicon wafers using chemical vapor deposition. After lunch you analyze X-ray diffraction data to confirm the crystal structure of a new alloy your team is developing for next-generation batteries. The afternoon is spent in a team meeting with aerospace engineers discussing whether your carbon fiber composite can meet the weight and strength requirements for a new aircraft wing.",
    realWorldImpact:
      "Materials scientists created the lightweight carbon fiber that makes fuel-efficient aircraft possible, the Gorilla Glass that protects your phone screen, and the silicon wafers that underpin the entire electronics industry. They are developing self-healing concrete that could extend bridge lifetimes by decades, flexible OLED displays, and biodegradable plastics that break down harmlessly. Every engineering breakthrough -- from space travel to renewable energy -- ultimately depends on having the right material for the job.",
    skills: {
      technical: [
        "Materials characterization (SEM, TEM, XRD, AFM)",
        "Mechanical testing (tensile, hardness, fatigue)",
        "Thin film deposition & processing",
        "Computational modeling (DFT, molecular dynamics)",
        "Failure analysis & fractography",
        "Lab synthesis of metals, polymers, & ceramics",
      ],
      soft: [
        "Interdisciplinary collaboration",
        "Visual & spatial reasoning",
        "Curiosity-driven research",
        "Technical report writing",
        "Creative problem-solving",
      ],
    },
    whereYoudWork: [
      "Aerospace companies (Boeing, SpaceX, Lockheed Martin)",
      "Semiconductor manufacturers (Intel, TSMC, Applied Materials)",
      "Automotive (Tesla, Ford, GM)",
      "National laboratories (Argonne, Sandia, Oak Ridge)",
      "Consumer electronics (Corning, Samsung)",
      "Battery & energy storage companies",
    ],
    salary: {
      entry: "$68,000",
      mid: "$95,000",
      experienced: "$135,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Growing demand from semiconductor manufacturing, battery technology for EVs, and advanced materials for aerospace and defense.",
      trend: "moderate",
    },
  },

  {
    id: "physics",
    title: "Physics",
    fieldId: "chemistry-materials",
    icon: "⚛️",
    hook: "Physics is the quest to understand the universe at its most fundamental level -- from quarks smaller than an atom to galaxies spanning millions of light-years. It is the discipline that gave us electricity, nuclear energy, lasers, MRI machines, and the theory of relativity.",
    whatYoudStudy: [
      "Classical Mechanics",
      "Electromagnetism",
      "Quantum Mechanics",
      "Thermodynamics & Statistical Mechanics",
      "Optics & Photonics",
      "Nuclear & Particle Physics",
      "Astrophysics & Cosmology",
      "Condensed Matter Physics",
      "Mathematical Methods for Physics",
      "Computational Physics & Simulation",
      "Advanced Laboratory (lasers, spectroscopy, detectors)",
    ],
    typicalDay:
      "As an experimental physicist at a national lab, your morning starts by aligning a laser beam through an intricate optical setup, measuring how photons interact with a new quantum material at ultra-cold temperatures. You spend an hour tweaking mirrors and detectors, then collect data while the cryostat keeps things near absolute zero. After lunch you analyze results in Python, comparing them with theoretical predictions from a collaborator at CERN. Late afternoon is spent writing a grant proposal, arguing why your quantum computing research deserves continued funding.",
    realWorldImpact:
      "Physics discoveries have reshaped civilization: electromagnetism gave us power grids and telecommunications, quantum mechanics enabled semiconductors and lasers, and Einstein's relativity makes GPS satellites accurate. Today, physicists are building quantum computers that could revolutionize cryptography, developing fusion reactors that promise limitless clean energy, and using gravitational wave detectors to observe collisions between black holes billions of light-years away. Physics-trained thinkers also dominate Wall Street quant trading and tech industry R&D.",
    skills: {
      technical: [
        "Mathematical modeling & differential equations",
        "Programming (Python, C++, MATLAB, Mathematica)",
        "Laboratory instrumentation & experimental design",
        "Data analysis & statistical methods",
        "Simulation & computational physics (Monte Carlo, FEM)",
        "Scientific computing & high-performance clusters",
      ],
      soft: [
        "Abstract & logical thinking",
        "Persistence through difficult problems",
        "Scientific communication & teaching",
        "Collaboration in large research teams",
        "Intellectual humility & open-mindedness",
      ],
    },
    whereYoudWork: [
      "National laboratories (Fermilab, SLAC, Los Alamos, CERN)",
      "University research & teaching",
      "Aerospace & defense (NASA, SpaceX, Northrop Grumman)",
      "Quantitative finance (hedge funds, trading firms)",
      "Tech companies (Google, IBM quantum divisions)",
      "Medical physics in hospitals (radiation therapy)",
    ],
    salary: {
      entry: "$60,000",
      mid: "$95,000",
      experienced: "$140,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Stable growth in academic and government research, with increasing crossover opportunities in quantum computing, data science, and finance.",
      trend: "stable",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Design & Build
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering",
    fieldId: "design-build",
    icon: "⚙️",
    hook: "From the engine in a Formula 1 car to the robotic arm assembling your next phone, if it moves, heats, cools, or converts energy, a mechanical engineer probably designed it. It is the broadest and most versatile engineering discipline -- and one of the oldest.",
    whatYoudStudy: [
      "Statics & Dynamics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Mechanics of Materials (Strength of Materials)",
      "Machine Design & Mechanisms",
      "Heat Transfer",
      "Manufacturing Processes",
      "Control Systems",
      "CAD & Finite Element Analysis (FEA)",
      "Robotics & Mechatronics",
      "Engineering Materials",
    ],
    typicalDay:
      "Your morning starts with a design review meeting, presenting a new HVAC compressor design using SolidWorks renderings and FEA stress results. After feedback, you head to the prototype shop to check on a 3D-printed housing that was printed overnight, comparing it against your CAD model. After lunch you run thermal simulations to make sure a circuit board enclosure will not overheat, iterating on fin geometry until temperatures stay within spec. Late afternoon is spent on the factory floor, working with manufacturing engineers to solve a tolerance issue on an injection-molded part.",
    realWorldImpact:
      "Mechanical engineers designed the International Space Station's life support systems, the turbines in wind farms generating clean electricity, and the prosthetic joints that let people walk again after surgery. They are central to the electric vehicle revolution, designing lighter chassis, more efficient motors, and better battery cooling systems. From roller coasters to surgical robots, mechanical engineering touches almost every physical product in modern life.",
    skills: {
      technical: [
        "CAD software (SolidWorks, CATIA, AutoCAD)",
        "Finite Element Analysis (ANSYS, Abaqus)",
        "Thermal & fluid simulation (CFD)",
        "GD&T and engineering drawings",
        "Prototyping (3D printing, CNC machining)",
        "Programming for automation (Python, MATLAB)",
      ],
      soft: [
        "Creative design thinking",
        "Hands-on problem-solving",
        "Cross-functional teamwork",
        "Project management",
        "Technical presentation skills",
      ],
    },
    whereYoudWork: [
      "Automotive companies (Toyota, Tesla, Ford)",
      "Aerospace (Boeing, GE Aviation, SpaceX)",
      "Consumer products (Dyson, Apple, Samsung)",
      "Energy companies (GE, Siemens, Vestas)",
      "Robotics & automation firms (Boston Dynamics, Fanuc)",
      "HVAC & building systems companies",
    ],
    salary: {
      entry: "$70,000",
      mid: "$95,000",
      experienced: "$135,000",
    },
    growthOutlook: {
      percentage: "2%",
      description:
        "Stable demand with the strongest growth in robotics, renewable energy systems, and electric vehicle development.",
      trend: "stable",
    },
  },

  {
    id: "aerospace-engineering",
    title: "Aerospace Engineering",
    fieldId: "design-build",
    icon: "🚀",
    hook: "Humans have walked on the moon, landed robots on Mars, and built a space station orbiting Earth at 17,500 mph. Aerospace engineers made all of it possible -- and they are just getting started with reusable rockets, hypersonic flight, and missions to deep space.",
    whatYoudStudy: [
      "Aerodynamics",
      "Orbital Mechanics & Astrodynamics",
      "Aircraft & Spacecraft Structures",
      "Propulsion Systems (jet engines, rockets)",
      "Flight Dynamics & Control",
      "Avionics & Navigation Systems",
      "Composite Materials & Lightweight Design",
      "Computational Fluid Dynamics (CFD)",
      "Space Environment & Systems Engineering",
      "Autonomous & Unmanned Aerial Systems (drones)",
    ],
    typicalDay:
      "Your morning at a rocket company begins with a post-flight data review, analyzing telemetry from last night's test fire of a new engine. You compare chamber pressure and thrust curves against your simulation predictions, flagging a slight anomaly in the turbopump. After lunch you join the structures team in a high bay, inspecting a composite fuel tank being prepared for a pressure test. Late afternoon is spent in a CAD review, refining the heat shield geometry for a re-entry capsule, running quick thermal simulations, and preparing slides for tomorrow's design milestone meeting with the program manager.",
    realWorldImpact:
      "Aerospace engineers put humans in space and satellites in orbit that enable GPS, weather forecasting, and global communications. SpaceX's reusable rockets, designed by aerospace engineers, reduced launch costs by over 90%, opening space to commercial ventures. The field also gave us modern air travel -- carrying billions of passengers safely each year -- and is now developing sustainable aviation fuel systems, electric aircraft, and air taxis. Every time you check a weather app or board a plane, you are benefiting from aerospace engineering.",
    skills: {
      technical: [
        "CFD tools (ANSYS Fluent, OpenFOAM)",
        "Structural analysis (Nastran, Abaqus)",
        "CAD (CATIA, NX, SolidWorks)",
        "MATLAB & Simulink for controls",
        "Propulsion system design & testing",
        "Systems engineering & requirements management",
      ],
      soft: [
        "Precision & attention to safety",
        "Working under high-stakes deadlines",
        "Team-based engineering culture",
        "Strong written & verbal communication",
        "Passion for exploration & innovation",
      ],
    },
    whereYoudWork: [
      "Space companies (SpaceX, Blue Origin, NASA, Rocket Lab)",
      "Aircraft manufacturers (Boeing, Airbus, Lockheed Martin)",
      "Defense contractors (Northrop Grumman, Raytheon)",
      "Airlines (engineering & maintenance divisions)",
      "Drone & UAV companies",
      "Government agencies (NASA, FAA, DOD)",
    ],
    salary: {
      entry: "$72,000",
      mid: "$105,000",
      experienced: "$148,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Growing demand driven by the commercial space industry boom, defense modernization programs, and development of next-generation aircraft.",
      trend: "moderate",
    },
  },

  {
    id: "civil-engineering",
    title: "Civil Engineering",
    fieldId: "design-build",
    icon: "🌉",
    hook: "Every bridge you drive over, every skyscraper you look up at, every glass of clean water you drink -- a civil engineer made it happen. This is the profession that literally builds civilization, and with aging infrastructure and climate change, the world has never needed it more.",
    whatYoudStudy: [
      "Structural Analysis & Design",
      "Geotechnical Engineering (soil mechanics)",
      "Transportation Engineering",
      "Water Resources & Hydraulics",
      "Construction Management & Scheduling",
      "Reinforced Concrete & Steel Design",
      "Surveying & Geomatics",
      "Environmental Engineering Fundamentals",
      "Earthquake & Wind Engineering",
      "Infrastructure Systems Planning",
    ],
    typicalDay:
      "Your morning begins at a construction site, wearing a hard hat and reviewing the steel reinforcement placement in a bridge pier before the concrete pour. You check dimensions against your structural drawings and sign off on the pour. Back at the office, you open structural analysis software to model load paths for a new parking garage, iterating on beam sizes until deflections meet code requirements. After lunch you meet with a city transportation planner to discuss traffic flow improvements for a new interchange, then review a geotechnical report on soil conditions for an upcoming high-rise project.",
    realWorldImpact:
      "Civil engineers built the interstate highway system, the Hoover Dam, the Golden Gate Bridge, and the water treatment plants that deliver safe drinking water to hundreds of millions of people. Today they are designing earthquake-resilient buildings in seismically active zones, flood-control systems for cities facing rising seas, and high-speed rail networks that reduce carbon emissions. The American Society of Civil Engineers estimates the US needs $2.6 trillion in infrastructure investment, meaning civil engineers will be busy for decades to come.",
    skills: {
      technical: [
        "Structural analysis software (SAP2000, ETABS, RISA)",
        "AutoCAD & Civil 3D",
        "Building codes & standards (ACI, AISC, ASCE 7)",
        "Geotechnical testing & soil analysis",
        "Project scheduling (Primavera, MS Project)",
        "Surveying equipment & GPS/GIS",
      ],
      soft: [
        "Leadership on multi-trade job sites",
        "Public safety mindset",
        "Communication with clients & officials",
        "Budget & schedule management",
        "Ethical responsibility",
      ],
    },
    whereYoudWork: [
      "Engineering firms (AECOM, WSP, Thornton Tomasetti)",
      "State & local government departments of transportation",
      "Construction companies (Bechtel, Kiewit, Turner)",
      "Real estate developers",
      "Federal agencies (Army Corps of Engineers, FEMA)",
      "International development organizations (World Bank)",
    ],
    salary: {
      entry: "$65,000",
      mid: "$90,000",
      experienced: "$130,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Steady demand driven by infrastructure renewal needs, climate adaptation projects, and continued urbanization worldwide.",
      trend: "moderate",
    },
  },

  {
    id: "industrial-engineering",
    title: "Industrial Engineering",
    fieldId: "design-build",
    icon: "📐",
    hook: "Why does it take exactly 90 seconds to get your burger at a fast-food drive-through? Because an industrial engineer optimized every step of the process. IEs are the efficiency experts who make complex systems -- from factories to hospitals to theme parks -- run smarter, faster, and cheaper.",
    whatYoudStudy: [
      "Operations Research & Optimization",
      "Probability & Statistics for Engineers",
      "Supply Chain & Logistics Management",
      "Manufacturing Systems & Lean Production",
      "Human Factors & Ergonomics",
      "Quality Control & Six Sigma",
      "Simulation Modeling (Arena, AnyLogic)",
      "Engineering Economics & Cost Analysis",
      "Data Analytics for Industrial Systems",
      "Facilities Planning & Layout Design",
    ],
    typicalDay:
      "Your morning starts at a warehouse, stopwatch in hand, doing a time-motion study to figure out why order fulfillment is 20% slower than target. You sketch a new layout on a tablet, rearranging pick zones to minimize travel distance. Back at your desk, you build a discrete-event simulation to test the new layout before the company invests in moving shelving. After lunch you join a Lean Kaizen event on the factory floor, facilitating a team of operators to identify waste in an assembly line. The afternoon wraps up with a dashboard showing real-time KPIs you built in Power BI, which the plant manager uses to make shift staffing decisions.",
    realWorldImpact:
      "Industrial engineers designed the assembly line that made cars affordable, the scheduling algorithms that keep airlines running, and the supply chains that deliver packages to your door in two days. During COVID, IEs redesigned hospital workflows to handle surges in patients and optimized vaccine distribution logistics. They reduce waste in manufacturing, cut wait times in emergency rooms, and help companies lower their carbon footprint by making processes leaner. If there is a system that could run better, an IE can make it happen.",
    skills: {
      technical: [
        "Simulation software (Arena, AnyLogic, FlexSim)",
        "Lean & Six Sigma methodologies",
        "Data analysis (Python, R, Excel, SQL)",
        "ERP systems (SAP, Oracle)",
        "Operations research & linear programming",
        "Process mapping & value stream mapping",
      ],
      soft: [
        "Systems thinking",
        "Facilitation & change management",
        "Cross-functional communication",
        "Analytical decision-making",
        "Leadership in process improvement teams",
      ],
    },
    whereYoudWork: [
      "Manufacturing companies (Toyota, 3M, Procter & Gamble)",
      "Tech & e-commerce logistics (Amazon, FedEx, UPS)",
      "Healthcare systems (hospital operations)",
      "Consulting firms (McKinsey, Deloitte, Accenture)",
      "Aerospace & defense (Lockheed Martin, Boeing)",
      "Theme parks & entertainment (Disney, Universal)",
    ],
    salary: {
      entry: "$68,000",
      mid: "$95,000",
      experienced: "$132,000",
    },
    growthOutlook: {
      percentage: "12%",
      description:
        "Strong growth driven by automation, supply chain complexity, and increasing demand for data-driven process optimization across every industry.",
      trend: "high",
    },
  },

  // ══════════════════════════════════════════════════════════════════════════
  // Earth & Energy
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: "geology",
    title: "Geology",
    fieldId: "earth-energy",
    icon: "🪨",
    hook: "The ground beneath your feet tells a story that stretches back 4.5 billion years. Geologists read that story in layers of rock, mineral crystals, and fossilized bones -- and use it to find natural resources, predict earthquakes, and understand how our planet works.",
    whatYoudStudy: [
      "Physical Geology & Earth Systems",
      "Mineralogy & Petrology",
      "Structural Geology & Tectonics",
      "Sedimentology & Stratigraphy",
      "Paleontology",
      "Hydrogeology (groundwater systems)",
      "Geophysics (seismology, gravity, magnetics)",
      "Geochemistry",
      "GIS & Remote Sensing for Geosciences",
      "Field Geology (mapping camps & field trips)",
    ],
    typicalDay:
      "Your morning begins at a rock outcrop in the desert, mapping geological formations with a hand lens, compass, and GPS unit, recording the orientation of fault lines and the composition of exposed strata. Back at base camp, you log your samples and upload field data to a GIS. After lunch you examine thin sections of rock under a polarizing microscope, identifying mineral assemblages that hint at the temperature and pressure conditions deep underground. Late afternoon is spent building a 3D subsurface model for a mining company considering a new drill site, integrating seismic survey data with your field observations.",
    realWorldImpact:
      "Geologists found the oil reserves that powered industrialization, the aquifers that supply drinking water to cities, and the mineral deposits used to make everything from steel to smartphone screens. Their seismic hazard maps save lives by guiding building codes in earthquake zones, and their climate reconstructions of past ice ages inform our understanding of current global warming. Today, geologists are critical to the energy transition, locating sites for geothermal power plants and identifying lithium deposits for EV batteries.",
    skills: {
      technical: [
        "Geological field mapping & sampling",
        "GIS & remote sensing (ArcGIS, Google Earth Pro)",
        "Geophysical data interpretation (seismic, GPR)",
        "Petrographic microscopy",
        "Subsurface 3D modeling (Petrel, Leapfrog)",
        "Geochemical analysis techniques",
      ],
      soft: [
        "Spatial reasoning & 3D visualization",
        "Physical fitness for fieldwork",
        "Keen observational skills",
        "Technical report writing",
        "Collaboration with engineers & environmental scientists",
      ],
    },
    whereYoudWork: [
      "Mining & exploration companies (Rio Tinto, BHP, Freeport-McMoRan)",
      "Oil & gas companies (ExxonMobil, Shell, Chevron)",
      "Environmental & geotechnical consulting firms",
      "US Geological Survey (USGS) & state geological surveys",
      "Geothermal energy companies",
      "University research & museum curation",
    ],
    salary: {
      entry: "$52,000",
      mid: "$78,000",
      experienced: "$115,000",
    },
    growthOutlook: {
      percentage: "5%",
      description:
        "Stable demand sustained by critical mineral exploration for clean energy, groundwater management, and geological hazard assessment.",
      trend: "stable",
    },
  },

  {
    id: "meteorology",
    title: "Meteorology",
    fieldId: "earth-energy",
    icon: "🌪️",
    hook: "A single accurate tornado warning can save hundreds of lives. A precise hurricane forecast can trigger evacuations that protect millions. Meteorologists use physics, math, and supercomputers to predict the atmosphere's wildest behavior -- and the stakes could not be higher.",
    whatYoudStudy: [
      "Atmospheric Dynamics & Thermodynamics",
      "Synoptic Meteorology (weather map analysis)",
      "Mesoscale Meteorology (thunderstorms, tornadoes)",
      "Climate Science & Global Climate Models",
      "Remote Sensing & Satellite Meteorology",
      "Radar Meteorology & Doppler Systems",
      "Numerical Weather Prediction (NWP)",
      "Physical Meteorology (clouds, radiation, precipitation)",
      "Air Quality & Environmental Meteorology",
      "Programming & Data Analysis (Python, Fortran)",
    ],
    typicalDay:
      "As a forecaster at the National Weather Service, your shift starts at 5 AM reviewing overnight model runs, comparing output from the GFS, ECMWF, and NAM to build a mental picture of the day's weather. By 7 AM you have issued the morning forecast discussion and special weather statements for your region. Mid-morning, a line of thunderstorms develops on radar, and you issue severe thunderstorm warnings based on Doppler velocity signatures, coordinating with emergency managers by phone. Afternoon is quieter -- you analyze upper-air soundings, tweak the evening forecast, and write a climate summary for the month.",
    realWorldImpact:
      "Accurate weather forecasts save an estimated $31 billion per year in the US alone by allowing people to prepare for severe weather. Meteorologists provide critical guidance for aviation safety, agriculture, military operations, and renewable energy production. Climate scientists within the field study long-term trends that inform national and international climate policy. From predicting wildfire-favorable conditions to routing ships around ocean storms, meteorology directly protects lives and livelihoods every single day.",
    skills: {
      technical: [
        "Weather forecasting models (GFS, ECMWF, WRF)",
        "Radar & satellite imagery interpretation",
        "Programming (Python, Fortran, NCL/NCO)",
        "Data visualization & mapping (GrADS, MetPy)",
        "Climate data analysis & statistics",
        "Atmospheric sounding & balloon launches",
      ],
      soft: [
        "Fast decision-making under time pressure",
        "Clear public communication (broadcast, writing)",
        "Calm under high-stress severe weather events",
        "Continuous learning (models evolve constantly)",
        "Teamwork in 24/7 operations",
      ],
    },
    whereYoudWork: [
      "National Weather Service (NWS/NOAA)",
      "TV & media broadcast meteorology",
      "Private weather companies (AccuWeather, The Weather Company)",
      "Military weather services (Air Force, Navy)",
      "Renewable energy companies (wind & solar forecasting)",
      "University atmospheric science departments",
    ],
    salary: {
      entry: "$50,000",
      mid: "$78,000",
      experienced: "$110,000",
    },
    growthOutlook: {
      percentage: "4%",
      description:
        "Stable growth with expanding roles in renewable energy forecasting, climate consulting, and private-sector weather analytics.",
      trend: "stable",
    },
  },

  {
    id: "environmental-engineering",
    title: "Environmental Engineering",
    fieldId: "earth-energy",
    icon: "♻️",
    hook: "Clean drinking water, breathable air, and land free of toxic contamination are not natural givens -- they are engineered outcomes. Environmental engineers design the systems that treat wastewater, capture pollution, and clean up contaminated sites, literally making the planet livable.",
    whatYoudStudy: [
      "Water & Wastewater Treatment Design",
      "Air Pollution Control Engineering",
      "Solid & Hazardous Waste Management",
      "Environmental Fluid Mechanics",
      "Soil & Groundwater Remediation",
      "Environmental Chemistry & Microbiology",
      "Sustainable Engineering & Life Cycle Assessment",
      "Environmental Regulations & Policy (Clean Air Act, Clean Water Act)",
      "Stormwater Management & Green Infrastructure",
      "Environmental Impact Assessment & Modeling",
    ],
    typicalDay:
      "Your morning starts at a municipal water treatment plant, reviewing flow data and adjusting chemical dosing to meet drinking water standards. A new membrane filtration system is being installed, and you meet with contractors to review the installation progress against your design drawings. After lunch you drive to a former gas station site where soil contamination was discovered, overseeing the installation of monitoring wells to track how the groundwater plume is moving. Back at the office, you run a groundwater transport model in MODFLOW and draft a remediation plan that will use bioremediation -- bacteria that eat the contaminants -- to clean the site.",
    realWorldImpact:
      "Environmental engineers made modern cities possible by designing the water and sewage systems that prevent waterborne disease -- the single greatest public health achievement of the 20th century. They designed the scrubbers that removed acid-rain-causing sulfur from power plant emissions and the landfill liners that prevent garbage from poisoning groundwater. Today they are tackling emerging contaminants like PFAS, designing resilient infrastructure for climate change, and engineering carbon capture systems to slow global warming.",
    skills: {
      technical: [
        "Water treatment process design",
        "Groundwater modeling (MODFLOW, GMS)",
        "Air dispersion modeling (AERMOD)",
        "Environmental site assessment & sampling",
        "CAD & hydraulic modeling (AutoCAD, EPA-SWMM)",
        "Regulatory compliance analysis",
      ],
      soft: [
        "Passion for public health & sustainability",
        "Project management across multiple sites",
        "Clear communication with regulators & the public",
        "Ethical decision-making",
        "Interdisciplinary problem-solving",
      ],
    },
    whereYoudWork: [
      "Environmental engineering firms (Arcadis, Tetra Tech, Golder)",
      "Municipal water & sewer utilities",
      "EPA & state environmental agencies",
      "Construction & remediation contractors",
      "Industrial companies (compliance departments)",
      "International development (World Health Organization, UNICEF)",
    ],
    salary: {
      entry: "$62,000",
      mid: "$90,000",
      experienced: "$128,000",
    },
    growthOutlook: {
      percentage: "6%",
      description:
        "Growing demand driven by PFAS remediation mandates, aging water infrastructure, and increasing need for climate-resilient design.",
      trend: "moderate",
    },
  },

  {
    id: "nuclear-engineering",
    title: "Nuclear Engineering",
    fieldId: "earth-energy",
    icon: "☢️",
    hook: "A single uranium fuel pellet the size of a gummy bear contains as much energy as a ton of coal. Nuclear engineers harness the most powerful energy source known to science -- the atom itself -- for clean electricity, cancer treatment, and deep-space exploration.",
    whatYoudStudy: [
      "Nuclear Physics & Reactor Theory",
      "Reactor Design & Engineering",
      "Radiation Detection & Measurement",
      "Nuclear Materials & Fuel Cycles",
      "Thermal Hydraulics",
      "Health Physics & Radiation Protection",
      "Nuclear Safety & Risk Assessment",
      "Computational Methods (Monte Carlo neutron transport)",
      "Nuclear Waste Management & Decommissioning",
      "Fusion Energy Science",
    ],
    typicalDay:
      "Your morning at a nuclear power plant starts in the control room, reviewing overnight reactor performance data and verifying that neutron flux levels and coolant temperatures are nominal. You join the engineering team for a meeting about an upcoming refueling outage, planning which fuel assemblies to replace and modeling the new core configuration using MCNP simulation code. After lunch you visit the spent fuel pool area to review shielding calculations for a new dry cask storage system. Late afternoon is spent writing a safety analysis for a proposed power uprate, which requires NRC review before the plant can increase its electrical output.",
    realWorldImpact:
      "Nuclear energy provides about 20% of US electricity and over 50% of America's carbon-free power, making it the largest single source of clean energy in the country. Nuclear medicine techniques like PET scans and radiation therapy save millions of cancer patients each year. Nuclear-powered spacecraft have explored the outer solar system (Voyager probes, Curiosity rover), and nuclear desalination plants produce fresh water in arid regions. With next-generation small modular reactors and fusion research advancing rapidly, nuclear engineering may hold the key to solving the climate crisis.",
    skills: {
      technical: [
        "Reactor physics & neutronics codes (MCNP, SCALE, SERPENT)",
        "Thermal-hydraulic analysis (RELAP, TRACE)",
        "Radiation protection & dosimetry",
        "Nuclear regulatory framework (NRC regulations, 10 CFR)",
        "Probabilistic risk assessment",
        "Programming (Python, MATLAB, Fortran)",
      ],
      soft: [
        "Rigorous safety culture",
        "Precision & attention to detail",
        "Clear communication of technical risk",
        "Teamwork in high-consequence environments",
        "Public engagement & trust-building",
      ],
    },
    whereYoudWork: [
      "Nuclear power plants & utilities (Exelon, Duke Energy, Southern Nuclear)",
      "National laboratories (Idaho National Lab, Oak Ridge, Sandia)",
      "Nuclear startups (TerraPower, NuScale, Commonwealth Fusion)",
      "Navy Nuclear Propulsion Program",
      "Nuclear Regulatory Commission (NRC)",
      "Medical physics & nuclear medicine departments",
    ],
    salary: {
      entry: "$72,000",
      mid: "$108,000",
      experienced: "$150,000",
    },
    growthOutlook: {
      percentage: "4%",
      description:
        "Renewed interest in nuclear as a carbon-free energy source, combined with advanced reactor development and fusion research, is stabilizing and growing the field after years of decline.",
      trend: "stable",
    },
  },
];
