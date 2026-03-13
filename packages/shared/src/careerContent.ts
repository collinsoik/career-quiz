// Rich content for all 172 careers, keyed by career ID.
// Kept separate from categories.ts to keep the structural tree clean.

export interface CareerContentEntry {
  typicalDay: string;
  realWorldImpact: string;
  skills: { technical: string[]; soft: string[] };
  whereYoudWork: string[];
}

export const CAREER_CONTENT: Record<string, CareerContentEntry> = {
  // ══════════════════════════════════════════
  // CLUSTER 1 — Technology & Digital Innovation
  // ══════════════════════════════════════════
  "tech-software-dev": {
    typicalDay: "You write and review code in VS Code or IntelliJ, attend a morning standup to sync with your team, then spend the afternoon debugging a backend service or building a new API endpoint. You push changes via Git, open pull requests, and collaborate on code reviews before end of day.",
    realWorldImpact: "Software you build could power a payment system used by millions or automate a workflow that saves a company thousands of hours per year.",
    skills: { technical: ["Git/GitHub", "Python or Java", "REST APIs", "SQL databases"], soft: ["Collaborative teamwork", "Clear written communication", "Problem decomposition", "Attention to detail"] },
    whereYoudWork: ["Tech companies (Google, Meta, startups)", "Finance and fintech firms", "Healthcare IT departments", "Remote/distributed teams"],
  },
  "tech-mobile-dev": {
    typicalDay: "You prototype screens in Figma, then implement them in Swift (iOS) or Kotlin (Android), testing layouts across multiple device sizes. You integrate a third-party SDK for push notifications, run the app on a physical device, and fix crashes surfaced in Firebase Crashlytics.",
    realWorldImpact: "The apps you build land in millions of pockets — a transit app you write might help commuters navigate a city every single day.",
    skills: { technical: ["Swift / Kotlin", "Xcode / Android Studio", "Firebase", "REST API integration"], soft: ["User empathy", "Iterative thinking", "Cross-functional collaboration", "Deadline management"] },
    whereYoudWork: ["Mobile-first startups", "Large consumer tech companies", "Agencies building client apps", "Freelance / contract work"],
  },
  "tech-web-dev": {
    typicalDay: "You build responsive UI components in React or Vue, wire them to a Node.js or Django backend, and style them with Tailwind CSS. You run Lighthouse audits to improve page performance and push releases through a CI/CD pipeline on GitHub Actions.",
    realWorldImpact: "A fast, accessible website you build can be the difference between a nonprofit reaching its audience or losing visitors to a broken mobile layout.",
    skills: { technical: ["HTML/CSS/JavaScript", "React or Vue", "Node.js or Django", "Git and CI/CD"], soft: ["Client communication", "Design sensibility", "Self-direction", "Time estimation"] },
    whereYoudWork: ["Digital agencies", "E-commerce companies", "SaaS startups", "Freelance / remote contracts"],
  },
  "tech-game-dev": {
    typicalDay: "You script character behavior in C# inside Unity or work on rendering systems in Unreal Engine with C++. You playtest builds, tweak physics parameters, and collaborate with artists to integrate new assets, iterating on game feel based on internal feedback.",
    realWorldImpact: "Games you create can entertain millions, but also serve serious purposes — military simulations, medical training, and educational tools all rely on game engine technology.",
    skills: { technical: ["Unity or Unreal Engine", "C# or C++", "Version control (Perforce/Git)", "Shader/graphics basics"], soft: ["Creative collaboration", "Constructive feedback", "Persistence through iteration", "Cross-discipline communication"] },
    whereYoudWork: ["AAA game studios", "Indie development teams", "VR/AR companies", "Serious games and simulation firms"],
  },
  "tech-data-scientist": {
    typicalDay: "You query a data warehouse using SQL, pull datasets into a Jupyter notebook, and train a predictive model with scikit-learn or PyTorch. You visualize results in Tableau or Matplotlib and present findings to product and business stakeholders.",
    realWorldImpact: "A churn prediction model you build could help a subscription business retain thousands of customers; a demand forecast could save a retailer millions in overstock.",
    skills: { technical: ["Python (pandas, scikit-learn)", "SQL", "Jupyter Notebooks", "Tableau or Power BI"], soft: ["Storytelling with data", "Stakeholder communication", "Critical thinking", "Intellectual curiosity"] },
    whereYoudWork: ["Tech and SaaS companies", "Retail and e-commerce", "Financial institutions", "Research labs and universities"],
  },
  "tech-ai-engineer": {
    typicalDay: "You fine-tune a large language model using Hugging Face Transformers, write prompt engineering pipelines, and deploy an inference endpoint on AWS SageMaker. You monitor model latency and accuracy in production and collaborate with ML researchers to translate research into reliable systems.",
    realWorldImpact: "AI systems you build can automate medical record summarization, power real-time translation tools, or detect fraud before it causes financial harm.",
    skills: { technical: ["Python / PyTorch / TensorFlow", "Hugging Face / LLM APIs", "MLOps tools (MLflow, SageMaker)", "Docker and Kubernetes"], soft: ["Research-to-product translation", "Rigorous experimentation", "Ethical reasoning", "Technical writing"] },
    whereYoudWork: ["AI-focused startups", "Big tech research divisions", "Healthcare and biotech AI teams", "Government and defense AI labs"],
  },
  "tech-database-admin": {
    typicalDay: "You monitor query performance in PostgreSQL, tune slow indexes, and write backup and recovery scripts to protect critical data. You create user roles, manage permissions, and coordinate with developers to safely migrate schemas with zero downtime.",
    realWorldImpact: "Without a DBA's work, a hospital's patient records or a bank's transaction history could be lost or compromised — your job is literally keeping organizations' most valuable data safe and available.",
    skills: { technical: ["PostgreSQL / MySQL / Oracle", "SQL query optimization", "Backup and recovery tools", "Shell scripting"], soft: ["Meticulous attention to detail", "Calm under pressure", "Documentation discipline", "Cross-team coordination"] },
    whereYoudWork: ["Hospitals and health systems", "Financial institutions", "Large enterprise IT departments", "Cloud managed services firms"],
  },
  "tech-security-analyst": {
    typicalDay: "You review alerts from a SIEM platform like Splunk, investigate suspicious login attempts, and write incident reports detailing threat vectors and remediation steps. You also run vulnerability scans with Nessus and brief leadership on current risk posture.",
    realWorldImpact: "Security analysts have stopped ransomware attacks that could have crippled hospitals or leaked millions of customers' personal data — your vigilance directly protects real people.",
    skills: { technical: ["SIEM tools (Splunk, QRadar)", "Vulnerability scanners (Nessus, Qualys)", "Network protocols (TCP/IP, DNS)", "Incident response frameworks"], soft: ["Analytical skepticism", "Clear report writing", "Composure during incidents", "Continuous learning mindset"] },
    whereYoudWork: ["Corporate security operations centers (SOCs)", "Government agencies (NSA, CISA)", "Managed security service providers", "Financial and healthcare organizations"],
  },
  "tech-pen-tester": {
    typicalDay: "You kick off an engagement by scoping a target web application, then use tools like Burp Suite and Metasploit to probe for SQL injection, broken auth, and misconfigured APIs. You document each finding with proof-of-concept exploits and write a detailed report with prioritized remediation steps.",
    realWorldImpact: "By finding and reporting a critical authentication bypass before a real attacker does, you can prevent a breach that might expose millions of user accounts.",
    skills: { technical: ["Burp Suite", "Metasploit", "Linux / Kali Linux", "Scripting (Python / Bash)"], soft: ["Methodical thinking", "Ethical judgment", "Technical writing", "Client communication"] },
    whereYoudWork: ["Cybersecurity consulting firms", "In-house red teams at large enterprises", "Bug bounty programs (remote)", "Government and defense contractors"],
  },
  "tech-forensics": {
    typicalDay: "You image a suspect hard drive using Autopsy or FTK, recover deleted files, and trace browser history and metadata to reconstruct a timeline of events. You document every step in a chain-of-custody log so your findings hold up in court.",
    realWorldImpact: "Digital forensic evidence you collect has helped convict cybercriminals, exonerate innocent defendants, and recover stolen intellectual property worth millions.",
    skills: { technical: ["Autopsy / FTK / EnCase", "File system and metadata analysis", "Memory forensics (Volatility)", "Hash verification and chain of custody"], soft: ["Extreme attention to detail", "Impartial objectivity", "Technical legal writing", "Discretion and confidentiality"] },
    whereYoudWork: ["Law enforcement agencies (FBI, local PD)", "Corporate legal and compliance teams", "Cybersecurity consulting firms", "Military and intelligence agencies"],
  },
  "tech-it-support": {
    typicalDay: "You work a ticket queue, troubleshooting a user's VPN issue over Zoom, then physically swapping a failing hard drive on a workstation, and deploying a software package via Microsoft Endpoint Manager. You document every resolution in ServiceNow so future issues resolve faster.",
    realWorldImpact: "When an IT support specialist gets a doctor's laptop working before a critical shift or restores a teacher's classroom projector mid-lesson, they directly enable the people who change lives.",
    skills: { technical: ["Windows and macOS troubleshooting", "Active Directory and Microsoft 365", "Ticketing systems (ServiceNow, Jira)", "Networking basics (DHCP, DNS, VPN)"], soft: ["Patient communication", "Empathy under frustration", "Prioritization", "Clear step-by-step explanation"] },
    whereYoudWork: ["Schools and universities", "Hospitals and clinics", "Corporate offices", "Managed IT service providers"],
  },
  "tech-network-admin": {
    typicalDay: "You configure VLAN segmentation on Cisco switches, monitor bandwidth utilization through SolarWinds, and update firewall rules to block a newly identified threat. You respond to outage alerts, trace packet loss with Wireshark, and document topology changes for the team.",
    realWorldImpact: "A network admin keeping a hospital's infrastructure online ensures that imaging equipment, EHR systems, and communications never go dark during patient care.",
    skills: { technical: ["Cisco IOS / Juniper", "Wireshark and network monitoring tools", "Firewalls and VPN configuration", "Routing protocols (BGP, OSPF)"], soft: ["Systematic troubleshooting", "Documentation habits", "Calm under outage pressure", "Team coordination"] },
    whereYoudWork: ["Enterprise IT departments", "Internet service providers", "Government and military networks", "University and school districts"],
  },
  "tech-cloud-architect": {
    typicalDay: "You design a multi-region AWS architecture using Terraform, define auto-scaling policies, and review cost optimization reports to eliminate idle resources. You lead an architecture review board meeting, evaluating a proposed migration from on-prem servers to a cloud-native microservices design.",
    realWorldImpact: "A well-designed cloud architecture you create can take a startup from zero to global scale in months, or cut an enterprise's infrastructure costs by millions annually.",
    skills: { technical: ["AWS / Azure / GCP", "Terraform or Pulumi (IaC)", "Kubernetes and Docker", "Cloud security and IAM"], soft: ["Systems-level thinking", "Executive communication", "Risk assessment", "Mentoring engineering teams"] },
    whereYoudWork: ["Cloud consulting firms (AWS partners, Accenture)", "Large enterprise IT architecture teams", "SaaS and platform companies", "Government cloud modernization programs"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 2 — Health & Medicine
  // ══════════════════════════════════════════
  "health-physician": {
    typicalDay: "You see 15-20 patients in a clinic, reviewing labs in an EHR like Epic, ordering imaging, and diagnosing conditions ranging from hypertension to acute infections. You consult with specialists via telehealth, document clinical notes, and counsel patients on treatment plans.",
    realWorldImpact: "Catching an early-stage cancer during a routine physical or managing a diabetic patient's insulin to prevent organ damage — your decisions directly extend and save lives.",
    skills: { technical: ["Epic or Cerner EHR", "Clinical diagnosis and ICD coding", "Pharmacology and prescription management", "Interpretation of labs and imaging"], soft: ["Empathetic listening", "Clear patient communication", "Clinical decision-making under uncertainty", "Teamwork with nurses and specialists"] },
    whereYoudWork: ["Outpatient clinics and private practices", "Hospital inpatient wards", "Community health centers", "Telehealth platforms"],
  },
  "health-surgeon": {
    typicalDay: "You begin with a pre-op briefing, scrub in and perform a laparoscopic cholecystectomy or joint replacement, then round on post-op patients to assess healing and manage pain. You review imaging with radiologists and brief families on outcomes.",
    realWorldImpact: "A single successful cardiac surgery can give a patient decades more of life with their family; a skilled trauma surgeon in an ER can be the only thing standing between a patient and death.",
    skills: { technical: ["Laparoscopic and robotic surgical systems (da Vinci)", "Sterile technique and OR protocols", "Surgical anatomy", "Intraoperative imaging interpretation"], soft: ["Precision under pressure", "Team leadership in the OR", "Clear family communication", "Resilience and emotional regulation"] },
    whereYoudWork: ["Hospital operating rooms", "Ambulatory surgical centers", "Academic medical centers", "Military or trauma surgery units"],
  },
  "health-nurse-practitioner": {
    typicalDay: "You manage your own patient panel — diagnosing ear infections, adjusting blood pressure medications, and ordering and interpreting bloodwork, all documented in Epic. You coordinate referrals, counsel patients on lifestyle changes, and precept nursing students.",
    realWorldImpact: "NPs often serve rural and underserved communities where there are no physicians, providing primary care to populations that would otherwise go without.",
    skills: { technical: ["Advanced physical assessment", "Prescriptive authority and pharmacology", "Epic or Athena EHR", "Diagnostic test interpretation"], soft: ["Patient education and health literacy", "Independent clinical judgment", "Compassionate care", "Interprofessional collaboration"] },
    whereYoudWork: ["Primary care clinics", "Urgent care centers", "Rural health clinics", "Hospital outpatient departments"],
  },
  "health-pa": {
    typicalDay: "You work alongside an orthopedic surgeon, conducting pre-op exams, assisting in joint replacement surgeries, and managing post-op follow-ups. You review X-rays, suture lacerations, order physical therapy referrals, and document everything in the EHR.",
    realWorldImpact: "PAs extend the reach of physician teams — in a busy surgical practice, your patient management work allows surgeons to perform more procedures and reduce patient wait times.",
    skills: { technical: ["Surgical assistance and sterile technique", "Radiograph interpretation", "EMR documentation (Epic, NextGen)", "Suturing and minor procedures"], soft: ["Adaptability across specialties", "Physician-PA team communication", "Patient advocacy", "Clinical efficiency"] },
    whereYoudWork: ["Surgical specialty practices", "Emergency departments", "Hospital medicine teams", "Urgent care and primary care clinics"],
  },
  "health-rn": {
    typicalDay: "You take a shift report, assess your five patients' vitals and status, administer IV medications, change wound dressings, and coordinate with the attending physician on a patient whose condition is deteriorating. You educate a discharge patient on managing their new insulin regimen at home.",
    realWorldImpact: "Nurses are the constant presence at a patient's bedside — catching a subtle sign of sepsis or medication error that prevents a life-threatening complication.",
    skills: { technical: ["IV insertion and medication administration", "EHR charting (Epic, Meditech)", "Patient monitoring equipment", "Wound care and sterile technique"], soft: ["Calm under pressure", "Advocacy for patients", "Team handoff communication (SBAR)", "Emotional resilience"] },
    whereYoudWork: ["Hospital med-surg and ICU floors", "Outpatient surgery centers", "Long-term care facilities", "Home health agencies"],
  },
  "health-emt": {
    typicalDay: "You respond to a 911 call, rapidly assess a patient with chest pain, administer oxygen, place an IV, and transmit a 12-lead ECG to the receiving ER while en route. Between calls, you restock the ambulance, complete patient care reports, and run training drills.",
    realWorldImpact: "An EMT's rapid response and treatment in the first minutes after a cardiac event or traumatic injury is often the deciding factor in whether a patient survives.",
    skills: { technical: ["BLS/ACLS skills", "12-lead ECG acquisition", "IV access and airway management", "Patient care reporting software"], soft: ["Split-second decision-making", "Communication with distraught families", "Physical and mental stamina", "Team coordination with paramedics and ER staff"] },
    whereYoudWork: ["Municipal emergency medical services", "Private ambulance companies", "Fire departments with EMS", "Hospital emergency departments"],
  },
  "health-surgical-tech": {
    typicalDay: "You arrive early to set up a sterile instrument table for a spinal fusion, count sponges and instruments with the RN, pass tools to the surgeon during the procedure, and assist with wound closure. Between cases, you turn over the OR and prepare for the next case.",
    realWorldImpact: "A surgical tech's meticulous instrument counts and sterile field management are the last line of defense against retained surgical items and post-op infections.",
    skills: { technical: ["Sterile technique and surgical scrubbing", "Surgical instrument identification", "OR table and equipment setup", "Specimen handling and labeling"], soft: ["Anticipating surgeon needs", "Calm and focus during emergencies", "Precision and consistency", "OR team communication"] },
    whereYoudWork: ["Hospital operating rooms", "Ambulatory surgical centers", "Orthopedic and specialty surgery clinics", "Military medical units"],
  },
  "health-dentist": {
    typicalDay: "You perform a comprehensive exam, review digital X-rays, diagnose two cavities and early-stage gum disease, and complete a composite filling — all before noon. Afternoons may include a crown prep, a pediatric cleaning, or consulting with a patient about orthodontic options.",
    realWorldImpact: "Treating oral infections prevents them from spreading systemically; regular dental care you provide reduces patients' risk of heart disease and diabetes complications linked to periodontal disease.",
    skills: { technical: ["Digital radiography (Dexis, Carestream)", "Dental practice software (Dentrix, Eaglesoft)", "Restorative and preventive procedures", "Local anesthetic administration"], soft: ["Calming anxious patients", "Fine motor precision", "Treatment plan communication", "Team management in the practice"] },
    whereYoudWork: ["Private dental practices", "Group dental service organizations (DSOs)", "Community health center dental clinics", "Military dental facilities"],
  },
  "health-dental-hygienist": {
    typicalDay: "You review a patient's medical history, take digital X-rays, perform a full periodontal charting and scaling treatment, and apply fluoride. You educate the patient on improving their brushing technique and flag areas of concern for the dentist's exam.",
    realWorldImpact: "Regular hygiene visits you provide catch early signs of oral cancer, gum disease, and decay — conditions that become far more serious and costly when missed.",
    skills: { technical: ["Ultrasonic and hand scaling instruments", "Digital X-ray systems", "Periodontal probing and charting", "Dental software (Dentrix, Eaglesoft)"], soft: ["Patient education and motivation", "Gentle chairside manner", "Time management across appointments", "Collaborative communication with dentists"] },
    whereYoudWork: ["Private dental offices", "Dental service organizations", "Public health and school-based programs", "Correctional and VA facilities"],
  },
  "health-optometrist": {
    typicalDay: "You perform comprehensive eye exams using a slit lamp and autorefractor, diagnose dry eye disease and early glaucoma, update prescriptions, and co-manage post-op cataract patients with an ophthalmologist. You fit contact lenses and counsel patients on UV protection.",
    realWorldImpact: "An optometrist who catches diabetic retinopathy early and coordinates treatment can prevent a patient from losing their vision entirely.",
    skills: { technical: ["Slit lamp biomicroscopy", "Visual field testing (Humphrey perimeter)", "OCT imaging", "Electronic health records (RevolutionEHR)"], soft: ["Precise and patient exam technique", "Explaining conditions in plain language", "Referral coordination", "Practice management"] },
    whereYoudWork: ["Private optometry practices", "Ophthalmology group practices", "Optical retail chains (LensCrafters, Warby Parker)", "VA hospitals and military clinics"],
  },
  "health-pharmacist": {
    typicalDay: "You verify a patient's prescription for a blood thinner, check for interactions with their statin, counsel them on dosing, and flag a concerning duplicate therapy to their physician. You supervise pharmacy techs, process insurance prior authorizations, and answer clinical questions from nurses on the floor.",
    realWorldImpact: "Pharmacists catch tens of thousands of potentially fatal drug interactions each year — your review process is a critical safety net in every patient's care.",
    skills: { technical: ["Pharmacy dispensing systems (PioneerRx, QS/1)", "Drug interaction databases (Lexicomp, Micromedex)", "Insurance billing and prior authorization", "Compounding and IV admixture"], soft: ["Patient counseling clarity", "Assertive communication with prescribers", "Accuracy under high volume", "Supervisory leadership"] },
    whereYoudWork: ["Retail pharmacy chains", "Hospital inpatient and outpatient pharmacies", "Specialty and compounding pharmacies", "Pharmacy benefit management companies"],
  },
  "health-physical-therapist": {
    typicalDay: "You evaluate a post-ACL repair patient's range of motion and strength, design a progressive exercise protocol, and lead them through manual therapy and therapeutic exercises. You document progress in WebPT and coordinate with the orthopedic surgeon on return-to-sport milestones.",
    realWorldImpact: "Physical therapy you provide helps a stroke patient relearn how to walk, gets an athlete back on the field after major surgery, and helps an elderly patient avoid a life-altering fall.",
    skills: { technical: ["Manual therapy techniques", "Therapeutic exercise programming", "Gait analysis and biomechanics", "EMR documentation (WebPT, Raintree)"], soft: ["Patient motivation and encouragement", "Goal-setting communication", "Observational diagnostic skill", "Collaborative care with physicians"] },
    whereYoudWork: ["Outpatient orthopedic clinics", "Hospital inpatient and acute rehab units", "Sports medicine facilities", "Home health agencies"],
  },
  "health-occupational-therapist": {
    typicalDay: "You assess a stroke patient's ability to dress, cook, and manage medications independently, then run targeted ADL retraining sessions using adaptive equipment. You complete a home safety evaluation, recommend grab bar installation, and document a functional goals plan in the EHR.",
    realWorldImpact: "An OT restoring a brain injury patient's ability to care for themselves returns independence and dignity — and often keeps patients out of costly long-term care facilities.",
    skills: { technical: ["Standardized assessments (FIM, COPM, Barthel Index)", "Adaptive equipment prescription", "Cognitive rehabilitation techniques", "EHR documentation (Cerner, Epic)"], soft: ["Creativity in problem-solving", "Empathy and patience", "Family and caregiver education", "Interdisciplinary team collaboration"] },
    whereYoudWork: ["Inpatient hospital rehabilitation units", "Skilled nursing and long-term care facilities", "School-based therapy programs", "Home health and community settings"],
  },
  "health-speech-pathologist": {
    typicalDay: "You evaluate a pediatric patient's articulation disorder using standardized assessments, then run a 30-minute therapy session using AAC device training and language games. Later, you perform a bedside swallowing evaluation for a post-stroke hospital patient and recommend modified diet textures.",
    realWorldImpact: "Helping a child with autism find a way to communicate, or restoring speech to an adult after a stroke, can transform a person's entire quality of life and social participation.",
    skills: { technical: ["AAC device programming (Tobii Dynavox, PRC)", "Videofluoroscopic swallow study interpretation", "Standardized language and articulation tests", "SOAP note documentation"], soft: ["Patience and positive reinforcement", "Parent and caregiver coaching", "Interdisciplinary team communication", "Creative therapeutic engagement"] },
    whereYoudWork: ["Pediatric clinics and schools", "Hospital acute care and rehab units", "Private practice outpatient clinics", "Early intervention programs"],
  },
  "health-biomedical-researcher": {
    typicalDay: "You run PCR assays and analyze gel electrophoresis results, maintain cell cultures, and enter data into a lab information management system (LIMS). You write up a methods section for a journal submission, attend a lab meeting to discuss a failed experiment, and revise your research protocol for IRB approval.",
    realWorldImpact: "Biomedical researchers developed the mRNA vaccine platform that made COVID-19 vaccines possible in record time — foundational research you do today may power tomorrow's cures.",
    skills: { technical: ["PCR, gel electrophoresis, cell culture", "Statistical analysis (R, GraphPad Prism)", "LIMS and research database management", "Grant writing and scientific writing"], soft: ["Rigorous scientific skepticism", "Collaborative lab culture", "Persistence through failed experiments", "Clear data presentation"] },
    whereYoudWork: ["University research laboratories", "Pharmaceutical and biotech R&D centers", "NIH and government research institutes", "Hospital research foundations"],
  },
  "health-epidemiologist": {
    typicalDay: "You analyze a cluster of foodborne illness cases using SAS, map disease spread with GIS software, and conduct interviews to identify a common exposure source. You brief public health officials on your findings, write a surveillance report, and contribute to an outbreak response plan.",
    realWorldImpact: "Epidemiologists traced the source of the 2011 cantaloupe listeria outbreak that killed 33 people — fieldwork like yours stops outbreaks before they become larger disasters.",
    skills: { technical: ["Statistical software (SAS, R, Stata)", "GIS mapping (ArcGIS, QGIS)", "Epidemiologic study design", "CDC surveillance databases (NNDSS, BRFSS)"], soft: ["Systematic investigative thinking", "Communicating risk to non-scientists", "Collaboration with government agencies", "Ethical handling of sensitive health data"] },
    whereYoudWork: ["CDC and state/local health departments", "WHO and global health organizations", "Academic schools of public health", "Hospital infection prevention departments"],
  },
  "health-public-health": {
    typicalDay: "You analyze community health assessment data to identify high rates of childhood asthma in a specific zip code, then write a grant proposal to fund a school-based intervention program. You coordinate with community organizations, present findings to city council, and develop health education materials.",
    realWorldImpact: "Public health programs you design — like vaccination campaigns or smoking cessation initiatives — can improve the health of entire communities, preventing disease at a scale no single clinician can match.",
    skills: { technical: ["Health data analysis (SAS, R, Excel)", "GIS and community health mapping", "Grant writing and program evaluation", "Health communication and outreach"], soft: ["Community engagement and trust-building", "Policy advocacy communication", "Cross-sector partnership coordination", "Equity-focused program design"] },
    whereYoudWork: ["City and county health departments", "State health agencies", "Nonprofits and community health organizations", "Global health NGOs and foundations"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 3 — Engineering
  // ══════════════════════════════════════════
  "eng-mechanical-engineer": {
    typicalDay: "You spend mornings running finite element analysis (FEA) simulations in ANSYS to stress-test a new bracket design, then meet with the manufacturing team to review tolerances on a CNC-machined component. Afternoons involve iterating CAD models in SolidWorks based on test results from the lab.",
    realWorldImpact: "Mechanical engineers designed the crumple zones that save lives in car crashes and engineered the turbines that generate wind power for millions of homes.",
    skills: { technical: ["SolidWorks / AutoCAD", "ANSYS FEA simulation", "GD&T (geometric dimensioning)", "Thermodynamics & fluid mechanics"], soft: ["Cross-functional collaboration", "Problem decomposition", "Technical writing", "Attention to detail"] },
    whereYoudWork: ["Automotive manufacturers (Ford, Tesla)", "Aerospace firms (Boeing, SpaceX)", "Consumer product companies (Dyson, Apple)", "Energy companies and utilities"],
  },
  "eng-aerospace-engineer": {
    typicalDay: "You review CFD outputs in MATLAB to analyze drag on a new wing profile, then collaborate with avionics engineers on system integration specs. Later you run through a pre-launch checklist simulation and document findings for the FAA certification package.",
    realWorldImpact: "Aerospace engineers developed the heat shield technology that brought the Apollo astronauts home safely and designed the fuel-efficient engines that cut airline carbon emissions by 20%.",
    skills: { technical: ["MATLAB / Simulink", "CFD software (ANSYS Fluent)", "CAD (CATIA)", "Orbital mechanics & propulsion"], soft: ["Systems thinking", "Risk assessment", "Precise documentation", "Team coordination under pressure"] },
    whereYoudWork: ["NASA and government space agencies", "Defense contractors (Lockheed Martin, Northrop Grumman)", "Commercial aerospace (SpaceX, Blue Origin, Boeing)", "Satellite and launch startups"],
  },
  "eng-robotics-engineer": {
    typicalDay: "You write ROS nodes in Python or C++ to control a robotic arm's motion path, then physically test the arm in the lab and debug sensor feedback loops. You spend the afternoon tuning PID controllers and updating simulation environments in Gazebo.",
    realWorldImpact: "Robotics engineers built the autonomous surgical robots that allow surgeons to perform minimally invasive procedures with sub-millimeter precision, and the warehouse robots that fulfill millions of Amazon orders daily.",
    skills: { technical: ["ROS / ROS2", "Python & C++", "CAD & mechanical prototyping", "Computer vision (OpenCV)"], soft: ["Iterative problem-solving", "Cross-disciplinary collaboration", "Logical debugging", "Creative prototyping"] },
    whereYoudWork: ["Manufacturing and automation firms", "Medical device companies", "Defense and government labs", "Robotics startups and research universities"],
  },
  "eng-electrical-engineer": {
    typicalDay: "You design a PCB layout in Altium Designer, carefully routing traces to minimize electromagnetic interference, then use an oscilloscope to diagnose signal integrity issues on a prototype board. Team standups cover progress on a new power management IC targeting 95% efficiency.",
    realWorldImpact: "Electrical engineers designed the compact, efficient battery management systems inside electric vehicles and created the power grids that keep hospitals running during emergencies.",
    skills: { technical: ["Altium Designer / KiCad (PCB design)", "SPICE circuit simulation", "Oscilloscopes & multimeters", "Embedded C / VHDL"], soft: ["Meticulous attention to detail", "Systematic troubleshooting", "Technical communication", "Collaboration with software teams"] },
    whereYoudWork: ["Consumer electronics companies (Apple, Samsung)", "Power and utilities companies", "Telecommunications firms", "Medical device manufacturers"],
  },
  "eng-computer-hardware": {
    typicalDay: "You analyze power and timing reports from a chip synthesis run in Synopsys Design Compiler, then work with firmware engineers to resolve a bottleneck in the memory controller pipeline. Afternoons involve reviewing architectural trade-offs for the next processor generation.",
    realWorldImpact: "Computer hardware engineers designed the GPUs powering AI breakthroughs in medicine and climate modeling, and created the low-power chips that let smartphones last all day.",
    skills: { technical: ["VHDL / Verilog (HDL)", "Synopsys / Cadence EDA tools", "CPU/GPU architecture", "Signal integrity analysis"], soft: ["Abstract systems thinking", "Deep focus and precision", "Cross-team communication", "Long-horizon project planning"] },
    whereYoudWork: ["Semiconductor companies (Intel, AMD, NVIDIA)", "Fabless chip startups", "Cloud infrastructure firms (Google, Amazon)", "Research labs and universities"],
  },
  "eng-drone-engineer": {
    typicalDay: "You flash updated flight controller firmware to a test drone, then run autonomous waypoint missions in a simulation environment before taking it outside for real-world GPS accuracy tests. Back at your desk you analyze telemetry logs in Python to tune the attitude control algorithms.",
    realWorldImpact: "Drone engineers built the agricultural drones that spray crops with 90% less pesticide than traditional methods, and the inspection drones that assess bridge structural integrity without putting workers at risk.",
    skills: { technical: ["ArduPilot / PX4 firmware", "Python & MAVLink", "CAD for airframe design", "RF communications & GPS systems"], soft: ["Field testing adaptability", "Safety-first mindset", "Data-driven iteration", "Regulatory awareness (FAA Part 107)"] },
    whereYoudWork: ["Drone manufacturers (DJI, Skydio)", "Agricultural technology companies", "Defense and surveillance contractors", "Infrastructure inspection startups"],
  },
  "eng-civil-engineer": {
    typicalDay: "You review structural load calculations for a new pedestrian bridge in AutoCAD Civil 3D, then visit the construction site to inspect foundation work and verify it matches approved drawings. Back in the office you coordinate with city planners to address stormwater drainage requirements.",
    realWorldImpact: "Civil engineers designed the levee systems that protect New Orleans from flooding and engineered the interstate highway network that moves goods across the entire country.",
    skills: { technical: ["AutoCAD Civil 3D / Revit", "Structural analysis software (SAP2000)", "Surveying equipment & GPS", "Hydrology & geotechnical analysis"], soft: ["Project management", "Stakeholder communication", "Regulatory navigation", "Site-level leadership"] },
    whereYoudWork: ["Civil engineering consulting firms", "City and county public works departments", "Federal agencies (USACE, FHWA)", "Large construction contractors"],
  },
  "eng-environmental-engineer": {
    typicalDay: "You model groundwater contaminant plume migration using EPA groundwater software, then write a remediation action plan for a former industrial site. Afternoons involve meeting with regulators to present air quality monitoring data from a new facility permit application.",
    realWorldImpact: "Environmental engineers designed the Superfund cleanup systems that removed toxic chemicals from contaminated aquifers, and engineered wastewater treatment plants that safely process millions of gallons of sewage daily.",
    skills: { technical: ["GIS (ArcGIS / QGIS)", "MODFLOW groundwater modeling", "EPA AERMOD air dispersion", "Laboratory analytical methods"], soft: ["Regulatory communication", "Report writing", "Stakeholder diplomacy", "Ethical judgment"] },
    whereYoudWork: ["Environmental consulting firms", "EPA and state environmental agencies", "Industrial manufacturers with compliance needs", "Municipal water and wastewater utilities"],
  },
  "eng-surveyor": {
    typicalDay: "You set up a robotic total station on a construction site to measure boundary points for a new subdivision, then process the raw field data in Trimble Business Center software. You draft a legal plat map and review deed descriptions to resolve a boundary dispute between neighboring landowners.",
    realWorldImpact: "Surveyors established the legally binding property lines for every home and business in the country, and their precise measurements ensure that tunnels drilled from opposite ends of a mountain meet perfectly in the middle.",
    skills: { technical: ["Total stations & GNSS/GPS receivers", "Trimble / Leica field software", "AutoCAD Civil 3D", "Legal description interpretation"], soft: ["Precision and accuracy", "Legal and spatial reasoning", "Field problem-solving", "Client communication"] },
    whereYoudWork: ["Land surveying private firms", "Civil engineering companies", "Government land management agencies (BLM, USGS)", "Construction and development companies"],
  },
  "eng-biomedical-engineer": {
    typicalDay: "You run biocompatibility tests on a new polymer coating for a stent, then analyze fatigue data from mechanical stress cycling on the implant prototype. You collaborate with clinicians to translate their surgical workflow needs into updated device design requirements and document everything for an FDA 510(k) submission.",
    realWorldImpact: "Biomedical engineers developed the MRI machines that detect brain tumors non-invasively and created the insulin pumps that give diabetic patients precise, automated glucose control.",
    skills: { technical: ["CAD (SolidWorks / CATIA)", "Biomechanical simulation (FEA)", "FDA regulatory frameworks (510k, PMA)", "Biomaterials characterization"], soft: ["Empathy for end-users (patients)", "Cross-disciplinary collaboration", "Meticulous documentation", "Ethical decision-making"] },
    whereYoudWork: ["Medical device companies (Medtronic, Boston Scientific)", "Hospital research and innovation labs", "FDA and regulatory consulting firms", "Academic biomedical research centers"],
  },
  "eng-chemical-engineer": {
    typicalDay: "You use Aspen Plus to simulate a distillation column and optimize separation efficiency for a pharmaceutical intermediate, then review safety data from a pilot-scale reactor run. You spend part of the afternoon writing a process hazard analysis (PHA) report.",
    realWorldImpact: "Chemical engineers scaled up the manufacturing process for mRNA COVID-19 vaccines from lab bench to billions of doses, and designed the catalytic converters that remove 98% of toxic exhaust from car engines.",
    skills: { technical: ["Aspen Plus / HYSYS process simulation", "Reaction kinetics & thermodynamics", "P&ID reading and design", "Safety & hazard analysis (HAZOP)"], soft: ["Analytical problem-solving", "Safety consciousness", "Technical report writing", "Collaboration with chemists and operators"] },
    whereYoudWork: ["Pharmaceutical and biotech companies", "Oil, gas and petrochemical refineries", "Specialty chemicals manufacturers", "Food and beverage processing companies"],
  },
  "eng-materials-scientist": {
    typicalDay: "You prepare samples of a new titanium alloy for electron microscopy analysis, then interpret the SEM images to characterize grain structure and correlate it with tensile strength test results. You write a research summary recommending a modified heat treatment cycle to improve fatigue resistance.",
    realWorldImpact: "Materials scientists developed the lithium-ion battery chemistries powering the EV revolution and created the carbon fiber composites that make modern aircraft 20% lighter and far more fuel-efficient.",
    skills: { technical: ["Electron microscopy (SEM/TEM)", "X-ray diffraction (XRD)", "Mechanical testing (tensile, fatigue)", "Computational modeling (DFT, CALPHAD)"], soft: ["Analytical curiosity", "Meticulous lab documentation", "Cross-disciplinary communication", "Patient experimental iteration"] },
    whereYoudWork: ["Materials R&D labs at aerospace and automotive firms", "Battery and energy storage companies", "National labs (Argonne, Oak Ridge)", "Advanced manufacturing startups"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 4 — Science & Research
  // ══════════════════════════════════════════
  "science-biologist": {
    typicalDay: "You design and run PCR experiments to analyze gene expression in cell cultures, then image samples under a confocal microscope and quantify fluorescence data using ImageJ. Afternoons are spent writing up results for a manuscript and attending a lab meeting to discuss the next experimental series.",
    realWorldImpact: "Biologists discovered CRISPR gene editing, opening the door to cures for inherited diseases, and identified the ecological mechanisms that allow coral reefs to sustain a quarter of all ocean species.",
    skills: { technical: ["PCR & gel electrophoresis", "Confocal/fluorescence microscopy", "Statistical analysis (R / Python)", "Cell culture techniques"], soft: ["Scientific skepticism", "Attention to experimental detail", "Written communication", "Collaborative research"] },
    whereYoudWork: ["University and college research labs", "Biotech and pharmaceutical companies", "Government research agencies (NIH, USDA)", "Environmental consulting and conservation nonprofits"],
  },
  "science-marine-biologist": {
    typicalDay: "You spend the morning on a research vessel collecting water samples and deploying underwater acoustic recorders to track whale movement, then dive with a team to survey coral health. Back in the lab, you enter field data into a GIS database and analyze population trend statistics.",
    realWorldImpact: "Marine biologists documented the collapse of global shark populations, driving international fishing policy changes, and identified symbiotic microbes that protect coral reefs from bleaching.",
    skills: { technical: ["SCUBA / scientific diving", "Acoustic tagging and telemetry", "GIS and spatial analysis", "Species identification and ecological surveys"], soft: ["Physical endurance and field adaptability", "Team coordination in remote settings", "Observational patience", "Science communication to the public"] },
    whereYoudWork: ["Marine research institutions and aquaria", "NOAA and government environmental agencies", "University oceanography departments", "Conservation NGOs and ocean advocacy organizations"],
  },
  "science-geneticist": {
    typicalDay: "You run whole-genome sequencing libraries on a patient cohort, then use bioinformatics pipelines in Python and bash to align reads and call variants against a reference genome. You interpret findings and present candidate disease-linked mutations to a clinical team.",
    realWorldImpact: "Geneticists identified the BRCA1 gene mutation that dramatically raises breast cancer risk, enabling preventive interventions for thousands of women, and decoded the genomes of COVID-19 variants to track their spread.",
    skills: { technical: ["Next-generation sequencing (Illumina platforms)", "Bioinformatics pipelines (BWA, GATK)", "Python / R for genomic analysis", "CRISPR-Cas9 gene editing"], soft: ["Computational problem-solving", "Ethical reasoning (genetic privacy)", "Cross-disciplinary collaboration", "Clear data visualization"] },
    whereYoudWork: ["Academic genomics research centers", "Clinical genetics labs and hospitals", "Biotech companies (23andMe, Illumina)", "Government health agencies (NIH, CDC)"],
  },
  "science-zoologist": {
    typicalDay: "You track GPS-collared wolves across a remote landscape, downloading location data and mapping movement corridors in ArcGIS. Back at the university, you code behavioral observations from video footage and run statistical models in R to test whether prey availability predicts territory size.",
    realWorldImpact: "Zoologists studying wolf reintroduction in Yellowstone documented a cascade of ecological recovery — rivers changed course, vegetation rebounded, and biodiversity surged.",
    skills: { technical: ["GPS and radio telemetry", "ArcGIS / QGIS spatial analysis", "R for statistical modeling", "Field species identification and trapping"], soft: ["Physical resilience in fieldwork", "Patience and observational discipline", "Ethical treatment of animals", "Public outreach and education"] },
    whereYoudWork: ["Zoos, wildlife parks, and sanctuaries", "National parks and wildlife refuges", "University ecology departments", "International conservation organizations (WWF, WCS)"],
  },
  "science-physicist": {
    typicalDay: "You write and test numerical simulations in Python modeling particle collision outcomes, then analyze detector data from CERN experiments and compare results to theoretical predictions. Team meetings involve debugging data acquisition hardware and peer-reviewing a colleague's preprint on quantum coherence.",
    realWorldImpact: "Physicists at CERN confirmed the existence of the Higgs boson, completing our fundamental model of matter, and their research on superconductivity directly led to MRI machines in hospitals worldwide.",
    skills: { technical: ["Python / C++ for scientific computing", "MATLAB / Mathematica", "Laboratory instrumentation & vacuum systems", "Statistical data analysis (ROOT framework)"], soft: ["Abstract theoretical reasoning", "Rigorous experimental design", "Collaborative large-team science", "Patient long-term research commitment"] },
    whereYoudWork: ["University physics departments and research labs", "National laboratories (Fermilab, SLAC, CERN)", "Semiconductor, optics, and quantum computing companies", "Government research and defense agencies"],
  },
  "science-chemist": {
    typicalDay: "You synthesize a novel organic compound using air-free Schlenk-line techniques, then characterize it with NMR spectroscopy and compare the spectrum to predicted shifts. You troubleshoot an unexpected reaction byproduct by consulting chemical databases and redesigning the synthetic route.",
    realWorldImpact: "Chemists developed the nitrogen fixation process that produces fertilizers feeding half the world's population, and synthesized the antiretroviral drugs that transformed HIV from a death sentence into a manageable condition.",
    skills: { technical: ["NMR / mass spectrometry (MS)", "HPLC and chromatography", "Synthetic organic / inorganic techniques", "Chemical safety (GHS, SDS handling)"], soft: ["Meticulous lab technique", "Creative problem-solving", "Scientific record-keeping", "Collaboration with engineers and biologists"] },
    whereYoudWork: ["Pharmaceutical and drug discovery labs", "Materials and specialty chemicals companies", "Academic research universities", "Forensic and environmental testing labs"],
  },
  "science-astronomer": {
    typicalDay: "You submit telescope time requests and queue observing scripts for the Keck Observatory, then spend the bulk of your day reducing raw imaging data using Python (Astropy) to extract photometric measurements of a distant exoplanet transit. You model the light curve to constrain the planet's radius and orbital period.",
    realWorldImpact: "Astronomers using the James Webb Space Telescope detected atmospheric molecules on exoplanets for the first time, and gravitational wave observations confirmed Einstein's century-old predictions about colliding black holes.",
    skills: { technical: ["Python with Astropy / NumPy", "Telescope operation and data pipelines", "Spectroscopy and photometry", "Linux / HPC cluster computing"], soft: ["Long-term focus and persistence", "Data-driven storytelling", "International collaboration", "Public science communication"] },
    whereYoudWork: ["University astronomy departments", "Space agencies (NASA, ESA)", "Observatories and planetariums", "Space telescope mission teams (STScI)"],
  },
  "science-geologist": {
    typicalDay: "You spend two days in the field hammering rock samples from an exposed fault escarpment, logging stratigraphy in a field notebook, then return to the lab to prepare thin sections for petrographic microscope analysis. You interpret structural data in Move software to reconstruct the tectonic history.",
    realWorldImpact: "Geologists identified the seismic fault patterns that now inform California's building codes, preventing thousands of deaths in earthquakes, and their subsurface mapping enabled the discovery of new clean water aquifers.",
    skills: { technical: ["Petrographic microscopy", "GIS and remote sensing (ArcGIS)", "Structural geology software (Move, Petrel)", "Rock and mineral identification"], soft: ["Physical field endurance", "Spatial reasoning", "Detailed observational logging", "Interdisciplinary collaboration"] },
    whereYoudWork: ["Oil, gas, and mining exploration companies", "USGS and state geological surveys", "Environmental and geotechnical consulting firms", "University Earth sciences departments"],
  },
  "science-meteorologist": {
    typicalDay: "You analyze upper-air radiosonde data and model output from the GFS and NAM forecast models to issue a severe thunderstorm outlook, then brief the emergency management team on expected tornado risk. You post public-facing forecast discussions explaining the atmospheric dynamics driving the pattern.",
    realWorldImpact: "Meteorologists issue tornado warnings that give communities an average of 13 minutes to take shelter, and their hurricane track forecasts have helped cut storm-related deaths by 90% over the past 50 years.",
    skills: { technical: ["Numerical weather prediction (GFS, NAM, ECMWF)", "AWIPS / GIS weather visualization", "Radar analysis (WSR-88D / NEXRAD)", "Python for meteorological data analysis"], soft: ["Clear public communication under pressure", "Rapid decision-making", "Explaining uncertainty", "On-camera presentation (broadcast track)"] },
    whereYoudWork: ["National Weather Service (NOAA)", "Television and radio broadcast stations", "Private weather companies (The Weather Company)", "Aviation, agriculture, and energy sector firms"],
  },
  "science-environmental-scientist": {
    typicalDay: "You collect soil and water samples at a brownfield site following EPA protocol, log chain-of-custody forms, and ship samples to an accredited lab for heavy metals analysis. Back at the office you build a site conceptual model in Excel and GIS to map contamination extents.",
    realWorldImpact: "Environmental scientists documented the link between lead in Flint, Michigan's water supply and children's neurological damage, forcing a nationwide reckoning with aging water infrastructure.",
    skills: { technical: ["EPA sampling protocols (SW-846)", "GIS / ArcGIS spatial mapping", "Environmental data analysis (Excel, R)", "Regulatory frameworks (CERCLA, RCRA, Clean Water Act)"], soft: ["Regulatory and legal communication", "Field sampling discipline", "Stakeholder trust-building", "Objective scientific reporting"] },
    whereYoudWork: ["Environmental consulting firms", "EPA and state environmental protection agencies", "Industrial companies (compliance departments)", "Conservation and advocacy organizations"],
  },
  "science-climate-scientist": {
    typicalDay: "You run and analyze output from a regional climate model on a high-performance computing cluster, comparing projected temperature and precipitation changes under different emissions scenarios. You write a chapter for an IPCC assessment report, translating complex model uncertainty into clear policy-relevant language.",
    realWorldImpact: "Climate scientists' ice core and atmospheric data established the direct link between CO2 concentrations and global temperature rise, forming the scientific foundation for the Paris Agreement.",
    skills: { technical: ["Climate modeling (CESM, CMIP)", "Python / NCO for large dataset analysis", "HPC cluster computing", "Statistical downscaling and uncertainty quantification"], soft: ["Science-policy communication", "Handling public and media scrutiny", "Long-range systems thinking", "Interdisciplinary collaboration"] },
    whereYoudWork: ["NOAA, NASA, and national climate centers", "University Earth and atmospheric science departments", "International research bodies (IPCC, ECMWF)", "Energy companies and climate risk consultancies"],
  },
  "science-mathematician": {
    typicalDay: "You spend the morning working through a proof on graph theory in LaTeX, exploring whether a new lemma holds for infinite graphs, then collaborate with a computer scientist to formalize a cryptographic protocol. Afternoons often involve teaching an undergraduate analysis course or supervising graduate students.",
    realWorldImpact: "Mathematicians developed the RSA encryption algorithm that secures every online financial transaction in the world, and their breakthroughs in topology underpinned the physics that led to MRI imaging.",
    skills: { technical: ["LaTeX for mathematical writing", "Proof assistants (Coq, Lean)", "Python / Mathematica for computation", "Linear algebra, topology, and abstract algebra"], soft: ["Deep abstract reasoning", "Precise logical argumentation", "Patient long-term focus", "Clear pedagogical communication"] },
    whereYoudWork: ["University mathematics departments", "Research institutes (Institute for Advanced Study)", "Cryptography and cybersecurity companies", "Financial modeling and quantitative trading firms"],
  },
  "science-statistician": {
    typicalDay: "You design a randomized controlled trial sampling strategy for a clinical research team, then write R code to run a mixed-effects regression model on longitudinal patient data. You present results to non-technical stakeholders and recommend which findings are statistically robust enough to act on.",
    realWorldImpact: "Statisticians designed the clinical trial methods that proved COVID-19 vaccines were safe and effective, and their analysis of census data directly determines how billions in federal funding are allocated.",
    skills: { technical: ["R and Python (pandas, statsmodels, scikit-learn)", "Bayesian and frequentist inference", "Experimental design and survey methodology", "Data visualization (ggplot2, Tableau)"], soft: ["Translating math for non-technical audiences", "Ethical data interpretation", "Collaborative research partnership", "Intellectual honesty about uncertainty"] },
    whereYoudWork: ["Academic research universities", "Pharmaceutical and clinical research organizations", "Government agencies (Census Bureau, CDC, BLS)", "Tech companies and market research firms"],
  },
  "science-actuary": {
    typicalDay: "You build and validate a predictive mortality model in R using a large insurance policyholder dataset, then present updated premium pricing recommendations to the underwriting team. You spend part of the afternoon studying for your next Society of Actuaries exam and reviewing regulatory capital reserve calculations.",
    realWorldImpact: "Actuaries designed the pension funding models that ensure millions of retirees receive promised benefits, and their risk models help insurers price flood and wildfire coverage in a changing climate.",
    skills: { technical: ["R and Excel for actuarial modeling", "SQL for insurance databases", "Predictive modeling and survival analysis", "Regulatory solvency frameworks (Solvency II, NAIC)"], soft: ["Communicating risk to executives", "Meticulous numerical accuracy", "Business and financial judgment", "Continuous exam-driven learning"] },
    whereYoudWork: ["Life, health, and property/casualty insurance companies", "Pension funds and employee benefits consulting firms", "Government agencies (SSA, PBGC)", "Reinsurance companies and financial risk consultancies"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 5 — Creative & Expressive Arts
  // ══════════════════════════════════════════
  "creative-graphic-designer": {
    typicalDay: "You open Figma or Adobe Illustrator to refine a brand identity package, then hop on a call with a client to review logo concepts. Afternoons might involve laying out a marketing brochure in InDesign or exporting assets for a social media campaign.",
    realWorldImpact: "Your packaging design for a local coffee brand triples their shelf recognition. A nonprofit's rebrand you led helps them raise 40% more donations through more compelling visual storytelling.",
    skills: { technical: ["Adobe Illustrator", "Figma", "InDesign", "Photoshop"], soft: ["Client communication", "Creative problem-solving", "Attention to detail", "Receiving and integrating feedback"] },
    whereYoudWork: ["In-house design team at a tech company", "Branding or advertising agency", "Freelance / self-employed studio", "Publishing house or media company"],
  },
  "creative-ux-designer": {
    typicalDay: "You start by reviewing user research notes, then sketch wireframes in Figma for a new onboarding flow. Later you run a usability test with five participants, recording where they hesitate, and document findings to share with the engineering team.",
    realWorldImpact: "A checkout redesign you led reduced cart abandonment by 22% for an e-commerce retailer. Reworking a hospital patient portal's navigation cut average task time in half for elderly users.",
    skills: { technical: ["Figma / Sketch", "User research & usability testing", "Prototyping tools (InVision, Maze)", "Accessibility standards (WCAG)"], soft: ["Empathy and active listening", "Storytelling with data", "Cross-functional collaboration", "Iterative thinking"] },
    whereYoudWork: ["Product team at a tech startup", "UX agency or design consultancy", "Large enterprise software company", "Government or nonprofit digital services"],
  },
  "creative-animator": {
    typicalDay: "You spend the morning rigging a character model in Autodesk Maya, then block out a walking cycle, tweaking keyframes to get the weight just right. Afternoons involve reviewing a shot sequence in Adobe After Effects and syncing animations to a storyboard timeline.",
    realWorldImpact: "Your animated explainer video helped a biotech startup secure $2M in funding by making complex science visually clear. A character you animated for a children's show reached millions of kids worldwide.",
    skills: { technical: ["Autodesk Maya or Blender", "Adobe After Effects", "Toon Boom Harmony", "Rigging and keyframe animation"], soft: ["Storytelling through motion", "Patience and precision", "Collaboration with directors and editors", "Creative resilience"] },
    whereYoudWork: ["Animation studio (film or TV)", "Game development company", "Marketing or motion graphics agency", "Freelance for YouTube creators or startups"],
  },
  "creative-fine-artist": {
    typicalDay: "Mornings are spent in the studio stretching canvas, mixing pigments, and working through a series of paintings exploring a single theme. You might also photograph finished pieces for your portfolio site, then research upcoming gallery open calls or artist residencies.",
    realWorldImpact: "A public mural commission you completed transformed a neglected underpass into a neighborhood landmark. Your gallery show sparked a sold-out auction benefiting a local arts education fund.",
    skills: { technical: ["Drawing and painting techniques", "Digital portfolio tools (Behance, Adobe Portfolio)", "Studio safety and materials handling", "Art installation methods"], soft: ["Self-motivation and discipline", "Conceptual thinking", "Networking within the arts community", "Resilience through creative blocks"] },
    whereYoudWork: ["Independent studio practice", "Artist residencies and fellowships", "University or community college (teaching)", "Gallery representation and art fairs"],
  },
  "creative-film-director": {
    typicalDay: "Pre-production days are packed with storyboarding scenes, casting callbacks, and location scouts. On set you're communicating your vision to the DP about camera angles, coaching actors through emotional scenes, and making quick decisions when weather or logistics throw off the shot list.",
    realWorldImpact: "Your debut short film screened at Sundance and sparked a distribution deal. A documentary you directed led a city council to reverse a park demolition after it went viral with 4 million views.",
    skills: { technical: ["Storyboarding and shot planning", "Camera and lighting fundamentals", "Editing software (Final Cut Pro, Premiere)", "Script breakdown and scheduling"], soft: ["Leadership under pressure", "Clear vision communication", "Collaborative decision-making", "Emotional intelligence with talent"] },
    whereYoudWork: ["Independent film productions", "Television network or streaming platform", "Commercial and advertising production houses", "Documentary production companies"],
  },
  "creative-video-editor": {
    typicalDay: "You ingest and organize raw footage from a multi-day shoot into Premiere Pro, then build a rough cut following the script. Hours are spent trimming for pacing, adding music beds, applying color grades in DaVinci Resolve, and exporting platform-specific deliverables.",
    realWorldImpact: "A brand documentary you edited won a Webby Award and boosted the client's organic reach by 300%. Your tight editing on a political campaign video is credited with increasing youth voter turnout.",
    skills: { technical: ["Adobe Premiere Pro", "DaVinci Resolve (color grading)", "Adobe After Effects (motion graphics)", "Audio mixing (Adobe Audition / Logic Pro)"], soft: ["Storytelling instinct and pacing", "Time management under deadlines", "Director/client communication", "Detail-oriented organization"] },
    whereYoudWork: ["Post-production studio", "In-house creative team at a brand or agency", "News or streaming media company", "Freelance for YouTubers, filmmakers, or nonprofits"],
  },
  "creative-photographer": {
    typicalDay: "A commercial shoot day means arriving early to set up lighting rigs, directing subjects through poses while tethering shots to a laptop for instant client review. Back in the studio you cull hundreds of images in Lightroom, do detailed retouching in Photoshop, and deliver final files via an online gallery.",
    realWorldImpact: "Your editorial photos from a conflict zone were published in TIME and informed international aid policy. A product photography overhaul you completed helped an online retailer increase conversion rates by 35%.",
    skills: { technical: ["Adobe Lightroom and Photoshop", "Studio lighting (strobes, modifiers)", "Tethered shooting workflows", "Camera systems and lens selection"], soft: ["Directing and putting subjects at ease", "Artistic eye and composition", "Business and client management", "Adaptability in unpredictable conditions"] },
    whereYoudWork: ["Own photography studio or freelance", "Editorial / magazine media house", "Advertising or e-commerce agency", "Wedding and event industry"],
  },
  "creative-content-creator": {
    typicalDay: "You spend the morning filming and scripting short-form videos for TikTok and Instagram Reels, then edit clips in CapCut or Premiere Rush while keeping an eye on trending audio. Afternoons involve responding to comments, reviewing analytics dashboards, and pitching a brand partnership deck to a potential sponsor.",
    realWorldImpact: "A personal finance video series you created helped 500,000 young adults understand investing basics. A sponsored campaign you produced for a sustainable brand sold out their product within 48 hours.",
    skills: { technical: ["Video editing (CapCut, Premiere Rush)", "Social media analytics (Creator Studio, Later)", "Scriptwriting and on-camera performance", "Basic SEO and hashtag strategy"], soft: ["Authentic audience connection", "Self-direction and consistency", "Brand negotiation", "Trend awareness and adaptability"] },
    whereYoudWork: ["Self-employed / home studio", "Creator economy platforms (YouTube, TikTok, Substack)", "Contracted to brands as a UGC creator", "Media company or talent agency roster"],
  },
  "creative-musician": {
    typicalDay: "Practice sessions take up the first part of the day — scales, learning new repertoire, or rehearsing with your band. You might spend an afternoon recording demo tracks in a home studio, then have an evening gig at a venue, followed by loading out gear and networking with other artists.",
    realWorldImpact: "Your original compositions are licensed to a Netflix series heard by millions globally. You perform at a sold-out charity concert that raises $80,000 for music education in underfunded schools.",
    skills: { technical: ["Instrument proficiency (guitar, piano, etc.)", "Music theory and ear training", "DAW basics (GarageBand, Ableton)", "Live performance and stage craft"], soft: ["Discipline and long-term practice habits", "Collaboration in ensembles", "Stage presence and emotional expression", "Resilience through rejection"] },
    whereYoudWork: ["Live performance venues and touring", "Recording and session work in studios", "Schools and community arts programs", "Film, TV, and game scoring projects"],
  },
  "creative-music-producer": {
    typicalDay: "You open Ableton Live and build out a beat, layering samples and synthesizer patches until the groove locks in. Then an artist comes into the studio and you guide their vocal performance, record and comp takes, and spend hours mixing levels, applying EQ and compression.",
    realWorldImpact: "A track you produced debuted at #3 on Billboard Hot 100. Your work developing an independent artist's sound helped them grow from 5,000 to 2 million Spotify monthly listeners in one year.",
    skills: { technical: ["Ableton Live or Logic Pro X", "Audio engineering (EQ, compression, effects)", "Music theory and arrangement", "Sample clearance and licensing basics"], soft: ["Artist coaching and communication", "Creative direction under pressure", "Active listening", "Business acumen for deal negotiations"] },
    whereYoudWork: ["Private recording studio", "Major or independent record label", "Self-run home studio / freelance", "Film, TV, and advertising post-production"],
  },
  "creative-sound-engineer": {
    typicalDay: "For a live event day you arrive hours early to run a PA system soundcheck — patching the stage box, ringing out monitors, and EQing each channel before doors open. Studio days involve setting up microphone placements for a drum session, recording to Pro Tools, and troubleshooting a ground hum.",
    realWorldImpact: "Your live mix at a 20,000-person festival received glowing reviews for clarity and punch. A podcast you mastered grew from 1,000 to 100,000 subscribers after listeners noted a dramatic improvement in audio quality.",
    skills: { technical: ["Pro Tools / Logic Pro", "Analog and digital mixing consoles", "Microphone techniques and signal flow", "Acoustics and room treatment"], soft: ["Calm under live performance pressure", "Technical problem-solving in real time", "Communication with artists and producers", "Precision and patience"] },
    whereYoudWork: ["Live music venues and touring companies", "Recording and post-production studios", "Broadcast (TV, radio, streaming)", "Podcast production companies"],
  },
  "creative-actor": {
    typicalDay: "You run lines with a scene partner in the morning, then attend a table read for a new project where you explore your character's motivations with the director. Afternoons might mean filming a commercial audition on your phone, submitting it online, and taking an evening acting class.",
    realWorldImpact: "Your portrayal of a character struggling with addiction in an indie film sparked nationwide conversations and earned a Critics' Choice nomination.",
    skills: { technical: ["Script analysis and memorization", "Voice and diction training", "On-camera vs. stage technique", "Improvisation"], soft: ["Emotional vulnerability and range", "Discipline and rejection resilience", "Collaboration with directors and cast", "Self-promotion and networking"] },
    whereYoudWork: ["Film and television sets", "Theater companies (regional, Broadway)", "Commercial and voiceover studios", "Streaming platform productions"],
  },
  "creative-author": {
    typicalDay: "Mornings are protected writing time — you hit a daily word count target, drafting a chapter and then revising yesterday's pages. Afternoons involve researching historical details for accuracy, corresponding with your literary agent about submission status, and engaging readers on social media.",
    realWorldImpact: "Your YA novel became a school curriculum staple reaching 500,000 students and was optioned for a film adaptation. A business book you wrote spent 12 weeks on the New York Times bestseller list.",
    skills: { technical: ["Drafting and revision processes", "Research methodology", "Manuscript formatting and style guides", "Query letters and publishing industry knowledge"], soft: ["Self-discipline and solitude tolerance", "Storytelling and voice development", "Receptiveness to editorial feedback", "Audience awareness"] },
    whereYoudWork: ["Home office / independent practice", "Writer's residencies and retreats", "University creative writing departments", "Publishing houses (as staff writer or editor-in-residence)"],
  },
  "creative-screenwriter": {
    typicalDay: "You open Final Draft and work through a scene you've been stuck on, rewriting dialogue until it sounds natural when spoken aloud. Then you take a notes call with a studio executive who wants the second act restructured, and spend the evening breaking new story beats on index cards.",
    realWorldImpact: "A pilot you wrote was picked up by HBO and ran for three seasons, employing hundreds of cast and crew. Your screenplay adapting a true crime story prompted a legal review that exonerated a wrongfully convicted man.",
    skills: { technical: ["Final Draft or Fade In software", "Three-act structure and screenplay formatting", "Story development and beat sheets", "TV writers' room process"], soft: ["Collaborative revision under notes", "Pitching ideas confidently", "Persistence through development hell", "Character psychology"] },
    whereYoudWork: ["Television writers' rooms", "Film production company development deals", "Streaming platform content teams", "Independent / spec script writing"],
  },
  "creative-editor": {
    typicalDay: "You read through a manuscript chapter, leaving tracked-change comments in Word about pacing issues and a character motivation that doesn't land, then draft a detailed editorial letter. Later you review copyedits on a different book that goes to print next month.",
    realWorldImpact: "A novel you shepherded through three rounds of edits became a Pulitzer finalist. Your developmental editing transformed a first-time author's rough draft into a debut that sold 200,000 copies.",
    skills: { technical: ["Microsoft Word tracked changes", "Chicago Manual of Style / AP Style", "Manuscript management tools (Submittable)", "Publishing production workflows"], soft: ["Constructive and encouraging feedback", "Strong command of narrative structure", "Author relationship management", "Meticulous attention to detail"] },
    whereYoudWork: ["Traditional book publishing houses", "Magazine or digital media editorial teams", "Freelance developmental or copyediting", "Academic or scientific journal publishing"],
  },
  "creative-game-designer": {
    typicalDay: "You spend the morning writing a game design document outlining new mechanics for a dungeon system, then meet with engineers to discuss feasibility. Afternoons involve playtesting a build, capturing feedback in a spreadsheet, and iterating on level layouts in Unity.",
    realWorldImpact: "A puzzle mechanic you designed became the centerpiece of an indie game that sold 2 million copies on Steam. Your work balancing a competitive multiplayer mode doubled average play session length.",
    skills: { technical: ["Unity or Unreal Engine (prototyping)", "Game design documentation (GDDs)", "Playtesting and data analysis", "Narrative systems and scripting logic"], soft: ["Systems thinking", "Empathy for the player experience", "Cross-discipline communication", "Iteration under feedback"] },
    whereYoudWork: ["AAA game studios (EA, Ubisoft, etc.)", "Independent indie game studios", "Mobile game companies", "Serious games / educational game developers"],
  },
  "creative-game-artist": {
    typicalDay: "You open Maya to sculpt and texture an environment asset — crumbling stone walls for a fantasy dungeon — then export it to Unreal Engine to check how it looks under in-game lighting. The rest of the day involves polishing a character's idle animation in Blender and attending an art review.",
    realWorldImpact: "Your environment art contributed to a game that won the BAFTA Games Award for Artistic Achievement. Character designs you created became iconic enough to spawn a toy line and licensing deals.",
    skills: { technical: ["Autodesk Maya or Blender (3D modeling)", "Substance Painter (texturing)", "Unreal Engine or Unity (engine integration)", "2D concept art (Photoshop, Procreate)"], soft: ["Visual storytelling", "Interpreting and executing art direction", "Attention to stylistic consistency", "Collaboration with designers and engineers"] },
    whereYoudWork: ["AAA game development studio", "Indie game team (often remote)", "Mobile game company", "VR/AR experience developer"],
  },
  "creative-esports": {
    typicalDay: "Morning starts with a two-hour solo ranked session analyzing your decision-making, then team scrimmages run mid-day against rival organizations. Coaches review VODs with you in the afternoon, breaking down positioning errors frame-by-frame, and evenings might mean streaming practice on Twitch.",
    realWorldImpact: "You compete in a tournament with a $500,000 prize pool broadcast live to 3 million viewers. Your team's victory earns a major sponsorship and cements your highlight clips as training references for aspiring players.",
    skills: { technical: ["High-level game mechanics and meta knowledge", "VOD review and strategic analysis", "Streaming setup (OBS, XSplit)", "Performance analytics tools"], soft: ["Team communication and shot-calling", "Mental resilience and tilt management", "Coachability", "Time management across practice, content, and health"] },
    whereYoudWork: ["Professional esports organization", "Streaming platforms (Twitch, YouTube Gaming)", "College esports programs", "Gaming content and media companies"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 6 — Business & Entrepreneurship
  // ══════════════════════════════════════════
  "biz-financial-analyst": {
    typicalDay: "You pull quarterly earnings data into Excel, build a discounted cash flow model, and stress-test assumptions for a company your firm is evaluating. After lunch you prepare a slide deck summarizing your findings, then join a call with an IR team to clarify line items in their 10-K filing.",
    realWorldImpact: "Your analysis flagged an overvalued acquisition target, saving your firm $40M in a potential bad deal. A sector report you authored guided a pension fund's reallocation affecting retirement savings for thousands of teachers.",
    skills: { technical: ["Excel financial modeling and pivot tables", "Bloomberg Terminal", "PowerPoint / data visualization", "Accounting fundamentals (GAAP)"], soft: ["Analytical precision", "Clear written and verbal communication", "Meeting tight deadlines", "Intellectual curiosity about markets"] },
    whereYoudWork: ["Investment bank", "Private equity or venture capital firm", "Corporate finance department", "Asset management company"],
  },
  "biz-accountant": {
    typicalDay: "You reconcile bank statements and review a client's general ledger in QuickBooks for discrepancies, then prepare journal entries for month-end close. During tax season afternoons are spent in tax preparation software analyzing depreciation schedules and ensuring IRS compliance.",
    realWorldImpact: "You identified a $120,000 payroll tax error for a small business client before it triggered an IRS audit. Streamlining the month-end close process saved a manufacturer 40 hours of staff time per month.",
    skills: { technical: ["QuickBooks / SAP / Oracle Financials", "Excel (pivot tables, VLOOKUP)", "Tax preparation software (UltraTax, ProConnect)", "GAAP and IFRS standards"], soft: ["Meticulous attention to detail", "Client trust and confidentiality", "Meeting regulatory deadlines", "Explaining complex financials simply"] },
    whereYoudWork: ["Public accounting firm (Big 4 or regional)", "Corporate accounting department", "Government or nonprofit finance office", "Self-employed CPA practice"],
  },
  "biz-financial-planner": {
    typicalDay: "You meet with a couple in their 40s to review their retirement projections in eMoney Advisor, updating savings assumptions and modeling Social Security scenarios. Back at your desk you draft a financial plan recommendation, rebalance a client's portfolio, and prepare for tomorrow's estate planning seminar.",
    realWorldImpact: "A retirement plan you built helped a teacher retire two years earlier than expected with full income replacement. Your guidance steered a young couple away from cashing out a 401(k) early, preserving over $200,000 in long-term wealth.",
    skills: { technical: ["Financial planning software (eMoney, MoneyGuidePro)", "Investment platform tools (Schwab, Fidelity Advisor)", "Tax planning fundamentals", "Insurance and estate planning knowledge"], soft: ["Empathetic client relationships", "Trustworthy communication on sensitive topics", "Goal-setting and coaching", "Long-term relationship management"] },
    whereYoudWork: ["Independent registered investment advisory (RIA) firm", "Wealth management division of a bank", "Insurance and financial services company", "Fee-only financial planning practice"],
  },
  "biz-management-consultant": {
    typicalDay: "Monday morning you fly to a client's headquarters and spend the day conducting stakeholder interviews to diagnose an operational bottleneck. By Thursday you're back building a process-flow analysis in Excel and crafting recommendation slides in PowerPoint to present to the C-suite.",
    realWorldImpact: "A supply chain restructuring plan your team recommended saved a retailer $30M annually. A go-to-market strategy you developed helped a healthcare startup capture 15% market share within 18 months.",
    skills: { technical: ["Excel data analysis and financial modeling", "PowerPoint / storytelling with slides", "Structured problem-solving frameworks (MECE, issue trees)", "Project management tools (Smartsheet, Jira)"], soft: ["Executive presence under scrutiny", "Rapid learning in unfamiliar industries", "Influence without authority", "Structured thinking under ambiguity"] },
    whereYoudWork: ["Management consulting firm (McKinsey, Deloitte, boutique)", "Internal strategy team at a large corporation", "Government advisory and public sector consulting", "Startup strategy consultancy"],
  },
  "biz-project-manager": {
    typicalDay: "Your morning starts with a standup in Jira where you unblock a developer waiting on design assets, then you update the project timeline after a vendor delivery slipped. Afternoons involve drafting a change-request document and facilitating a retrospective to improve the team's next sprint.",
    realWorldImpact: "You delivered a hospital EMR migration on time and under budget, improving patient record accuracy for 50,000 patients. A product launch you coordinated across six departments generated $5M in first-quarter revenue.",
    skills: { technical: ["Jira / Asana / Smartsheet", "Agile and Scrum methodologies", "Risk register and stakeholder management", "Budget tracking and reporting"], soft: ["Proactive communication", "Conflict resolution", "Keeping calm amid shifting priorities", "Accountability and follow-through"] },
    whereYoudWork: ["Technology company product team", "Construction or engineering firm", "Healthcare or government program office", "Marketing or creative agency"],
  },
  "biz-hr-manager": {
    typicalDay: "You start by reviewing applications in Workday for three open engineering roles, then conduct a behavioral interview and debrief with the hiring manager. Afternoon brings a sensitive meeting with an employee who filed a workplace complaint, then you update the employee handbook for a new PTO policy.",
    realWorldImpact: "A structured onboarding program you designed cut 90-day turnover by 30% at a 200-person company. Your implementation of a pay equity audit corrected salary disparities for 45 employees.",
    skills: { technical: ["HRIS platforms (Workday, BambooHR)", "Employment law and compliance basics", "Recruiting and applicant tracking systems", "Performance management frameworks"], soft: ["Discretion and trustworthiness", "Empathy and conflict mediation", "Clear written communication for policies", "Influencing leadership decisions"] },
    whereYoudWork: ["In-house HR department (any industry)", "HR consulting or staffing agency", "Nonprofit or public sector organization", "Tech startup as first HR hire"],
  },
  "biz-entrepreneur": {
    typicalDay: "Mornings alternate between product strategy and investor pitches — today you're refining your pitch deck before a Series A meeting. Afternoons might mean troubleshooting a customer churn spike with your head of product using Mixpanel data, then jumping into a hiring interview.",
    realWorldImpact: "The food-tech company you founded created 120 jobs and was acquired for $18M in its fourth year. Your edtech startup gave free learning tools to 300,000 students in underserved communities.",
    skills: { technical: ["Financial modeling and runway management", "Product analytics tools (Mixpanel, Amplitude)", "Fundraising and cap table basics", "Go-to-market strategy"], soft: ["Risk tolerance and decisive action", "Inspiring and retaining a team", "Resilience through failure", "Persuasive storytelling to investors"] },
    whereYoudWork: ["Self-founded startup", "Incubators and accelerators (Y Combinator, Techstars)", "Small business ownership (brick-and-mortar or online)", "Franchise ownership"],
  },
  "biz-product-manager": {
    typicalDay: "You kick off the day reviewing user feedback in Pendo and flagging recurring pain points. A mid-morning grooming session with engineers clarifies acceptance criteria for next sprint's features, and the afternoon is a roadmap review where you defend prioritization decisions to sales and marketing.",
    realWorldImpact: "A feature you championed based on user research drove a 25% increase in daily active users. Killing a legacy feature that confused new users reduced support ticket volume by 18%.",
    skills: { technical: ["Product analytics (Amplitude, Pendo, Mixpanel)", "Roadmapping tools (Productboard, Aha!)", "Agile / Scrum backlog management", "A/B testing and experimentation"], soft: ["Influence without authority", "Data-driven prioritization", "Translating business goals to technical requirements", "Customer empathy"] },
    whereYoudWork: ["Tech company (SaaS, consumer app, platform)", "Fintech or healthtech startup", "Enterprise software company", "E-commerce platform"],
  },
  "biz-ecommerce": {
    typicalDay: "You monitor overnight Shopify sales data, then investigate why a product page has a high bounce rate using Hotjar heatmaps. Midday involves coordinating a flash sale email with the marketing team in Klaviyo, and the afternoon is spent reviewing a supplier's lead time issue causing stockouts.",
    realWorldImpact: "A product page optimization you ran lifted conversion rates by 18% and added $400,000 in annual revenue. Fixing a broken mobile checkout flow recovered an estimated $60,000 in monthly abandoned carts.",
    skills: { technical: ["Shopify / WooCommerce platform management", "Google Analytics and conversion tracking", "Email marketing platforms (Klaviyo, Mailchimp)", "Paid advertising (Meta Ads, Google Shopping)"], soft: ["Data interpretation and quick decision-making", "Vendor negotiation", "Customer experience thinking", "Adaptability to platform changes"] },
    whereYoudWork: ["Own online store / direct-to-consumer brand", "E-commerce team at a retail company", "Amazon or marketplace seller operation", "Digital agency managing e-commerce clients"],
  },
  "biz-marketing-manager": {
    typicalDay: "Your morning is a campaign performance review in Google Analytics — you notice CPL spiked and redirect budget from a low-performing ad set. Then you brief a designer on creative assets for next month's product launch, review a blog draft for SEO, and present a quarterly channel strategy to the VP.",
    realWorldImpact: "A multi-channel campaign you orchestrated generated 8,000 qualified leads in a single quarter, exceeding target by 60%. Repositioning brand messaging for a B2B software client contributed to a 45% increase in enterprise deal flow.",
    skills: { technical: ["Google Analytics / GA4", "CRM and marketing automation (HubSpot, Marketo)", "SEO and paid search fundamentals", "Campaign management across paid social and email"], soft: ["Strategic thinking across channels", "Cross-functional leadership", "Budget management and ROI justification", "Clear written briefs and creative direction"] },
    whereYoudWork: ["In-house marketing department", "Full-service marketing agency", "Startup as first marketing hire", "B2B or B2C product company"],
  },
  "biz-social-media-manager": {
    typicalDay: "You plan the week's content calendar in Later, then draft and schedule posts for Instagram, LinkedIn, and TikTok — writing captions, sizing assets, and choosing hashtags. Mid-morning involves responding to comments and DMs, and afternoons are spent pulling performance reports and identifying which formats drove the most reach.",
    realWorldImpact: "A viral campaign you engineered grew a brand's TikTok following from 2,000 to 150,000 in three weeks. A community-building strategy boosted a nonprofit's engagement rate to 8%, tripling donation link clicks.",
    skills: { technical: ["Social media scheduling tools (Later, Sprout Social, Buffer)", "Platform analytics (Meta Business Suite, TikTok Analytics)", "Basic graphic design (Canva)", "Paid social advertising basics"], soft: ["Brand voice consistency", "Trend awareness and creative agility", "Community management and empathy", "Data-driven content iteration"] },
    whereYoudWork: ["Brand in-house marketing team", "Social media or digital marketing agency", "Freelance for small businesses and influencers", "Nonprofit or advocacy organization"],
  },
  "biz-market-researcher": {
    typicalDay: "You design a survey questionnaire in Qualtrics for a client launching a new product, carefully structuring questions to minimize bias. Midday you run a moderated focus group over Zoom. Afternoons are spent cleaning and analyzing data in SPSS and writing the insight narrative that will shape the client's go-to-market decision.",
    realWorldImpact: "Consumer research you led revealed an unmet need that became the foundation of a product generating $12M in first-year sales. Competitive intelligence helped a pharma company avoid entering an oversaturated market.",
    skills: { technical: ["Qualtrics or SurveyMonkey survey design", "SPSS or Excel for statistical analysis", "Focus group and interview facilitation", "Market sizing and secondary research databases"], soft: ["Intellectual curiosity and skepticism", "Translating data into business narratives", "Listening without leading respondents", "Presenting to non-technical audiences"] },
    whereYoudWork: ["Market research firm or insights consultancy", "Brand or product team at a consumer goods company", "Advertising or media agency", "Healthcare, financial services, or government sector"],
  },
  "biz-real-estate": {
    typicalDay: "Morning starts with a client showing of three properties you've scouted — you've prepared comp analysis in your MLS platform to anchor the pricing conversation. Back at the office you draft a purchase offer, then take a call from an investor client wanting a cap rate analysis on a multi-family property.",
    realWorldImpact: "You helped a first-generation homebuyer family purchase their first home, building generational wealth they'd never had access to. A commercial lease negotiation saved a restaurant client $180,000 over a five-year term.",
    skills: { technical: ["MLS platforms and comparative market analysis", "Transaction management tools (Dotloop, DocuSign)", "Basic financial analysis (cap rates, ROI)", "Real estate law and contract fundamentals"], soft: ["Negotiation and advocacy", "Building long-term client trust", "Market storytelling and persuasion", "Self-motivated prospecting"] },
    whereYoudWork: ["Residential real estate brokerage", "Commercial real estate firm", "Property management company", "Real estate investment firm or REIT"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 7 — Skilled Trades
  // ══════════════════════════════════════════
  "trades-electrician": {
    typicalDay: "You start the day reviewing blueprints and load calculations before running conduit and pulling wire through a commercial building. Afternoons might involve terminating panels, troubleshooting circuit faults with a multimeter, or coordinating with other trades on a job site.",
    realWorldImpact: "Electricians wire hospitals, schools, and data centers that communities depend on daily. A single skilled electrician can safely power an entire apartment complex for thousands of residents.",
    skills: { technical: ["Blueprint reading", "National Electrical Code (NEC)", "Conduit bending", "Multimeters & circuit analyzers"], soft: ["Attention to detail", "Problem-solving", "Physical stamina", "Team coordination"] },
    whereYoudWork: ["Commercial construction sites", "Residential new builds", "Industrial facilities", "Utility companies"],
  },
  "trades-solar-installer": {
    typicalDay: "You spend mornings on rooftops mounting racking systems and positioning photovoltaic panels to maximize sun exposure. Afternoons involve running DC wiring to inverters, configuring monitoring software, and walking homeowners through their new system.",
    realWorldImpact: "A single residential solar installation can eliminate a family's electric bill and offset 3-4 tons of CO2 per year. Utility-scale projects you work on can power entire neighborhoods with clean energy.",
    skills: { technical: ["PV system design", "DC/AC wiring", "SolarEdge/Enphase inverters", "Roof anchoring & fall protection"], soft: ["Safety consciousness", "Customer communication", "Physical agility", "Adaptability to weather"] },
    whereYoudWork: ["Residential rooftops", "Commercial buildings", "Solar farms", "Government facilities"],
  },
  "trades-wind-tech": {
    typicalDay: "You climb 200-foot turbine towers to inspect gearboxes, replace worn brake pads, and run diagnostics on SCADA control systems. Much of your day is spent inside the nacelle using specialized tools in tight quarters, logging maintenance data after each task.",
    realWorldImpact: "A single well-maintained wind turbine can power over 400 homes for a year. Wind technicians keep entire wind farms generating millions of kilowatt-hours that displace fossil fuel plants.",
    skills: { technical: ["SCADA systems", "Hydraulic & mechanical systems", "Electrical diagnostics", "Climbing & rescue certification"], soft: ["Comfort with heights", "Independent judgment", "Meticulous record-keeping", "Physical fitness"] },
    whereYoudWork: ["Onshore wind farms", "Offshore wind platforms", "Remote rural sites", "Wind energy companies"],
  },
  "trades-carpenter": {
    typicalDay: "You arrive on site, review framing plans, and spend the morning cutting lumber and assembling wall sections with a nail gun and circular saw. Afternoons may shift to finish work — hanging doors, installing trim, or building custom cabinetry.",
    realWorldImpact: "Carpenters build the physical framework of schools, homes, and offices where people spend their entire lives. A skilled finish carpenter transforms a raw space into something people are proud to live or work in.",
    skills: { technical: ["Power tools (miter saw, router, nail gun)", "Blueprint reading", "Framing & finish techniques", "CAD layout tools"], soft: ["Precision and patience", "Spatial reasoning", "Time management", "Collaboration with contractors"] },
    whereYoudWork: ["Residential construction sites", "Commercial build-outs", "Custom woodworking shops", "Historic renovation projects"],
  },
  "trades-construction-manager": {
    typicalDay: "You start each morning reviewing project schedules in Procore and conducting a site walk to check progress. The rest of the day involves coordinating subcontractors, reviewing RFIs, managing budgets, and resolving unexpected issues before they cause delays.",
    realWorldImpact: "Construction managers deliver billion-dollar infrastructure projects — hospitals, bridges, schools — on time and within budget. Effective management can save a city millions in cost overruns.",
    skills: { technical: ["Procore / Buildertrend", "MS Project scheduling", "Blueprint & spec reading", "OSHA safety compliance"], soft: ["Leadership", "Conflict resolution", "Budget discipline", "Clear written communication"] },
    whereYoudWork: ["Construction job sites", "General contractor offices", "Government infrastructure projects", "Real estate development firms"],
  },
  "trades-heavy-equipment": {
    typicalDay: "You pre-check fluid levels and tracks on your excavator before breaking ground on a site grading project, using GPS-guided blade controls to hit precise elevation targets. Afternoons might involve operating a bulldozer to clear land or a crane to lift steel beams into place.",
    realWorldImpact: "Heavy equipment operators build the roads, dams, and foundations that entire cities rest on. A single skilled operator can move thousands of cubic yards of earth in a day.",
    skills: { technical: ["GPS machine control systems", "Hydraulic system maintenance", "Grade reading", "OSHA / equipment certification"], soft: ["Spatial awareness", "Patience and precision", "Safety discipline", "Communication with ground crew"] },
    whereYoudWork: ["Highway construction projects", "Mining operations", "Utility trenching sites", "Port and airport expansion projects"],
  },
  "trades-plumber": {
    typicalDay: "You read isometric drawings to rough-in supply and drain lines in a new home, cutting and soldering copper pipe or joining PEX with crimp fittings. Later you troubleshoot a burst pipe using a pressure gauge, or install a commercial water heater and backflow preventer.",
    realWorldImpact: "Plumbers protect public health by ensuring clean water comes in and waste goes out safely — a system that prevents the outbreaks that once killed thousands.",
    skills: { technical: ["Pipe fitting (copper, PEX, PVC)", "Blueprint/isometric reading", "Pressure testing equipment", "Plumbing codes (IPC/UPC)"], soft: ["Problem-solving under pressure", "Physical dexterity", "Customer service", "Attention to code compliance"] },
    whereYoudWork: ["Residential new construction", "Commercial buildings", "Industrial facilities", "Municipal water systems"],
  },
  "trades-hvac": {
    typicalDay: "You start the day diagnosing a commercial chiller using manifold gauges and refrigerant analyzers, then swap out a compressor before the afternoon heat peaks. Other days involve installing ductwork, programming a BAS thermostat controller, or performing seasonal tune-ups on rooftop units.",
    realWorldImpact: "HVAC technicians keep hospitals at safe temperatures for patients and prevent heat-related deaths in elderly care facilities. A well-tuned commercial system can cut a building's energy costs by 20-30%.",
    skills: { technical: ["Refrigerant handling (EPA 608)", "BAS/thermostat programming", "Ductwork design & fabrication", "Electrical diagnostics"], soft: ["Systematic troubleshooting", "Customer communication", "Time management", "Physical endurance"] },
    whereYoudWork: ["Commercial office buildings", "Hospitals and data centers", "Residential service companies", "Industrial manufacturing plants"],
  },
  "trades-welder": {
    typicalDay: "You review weld procedure specifications, then spend the morning running TIG beads on stainless steel pipe sections, checking bead quality with a fillet weld gauge. Afternoons might involve MIG welding structural steel on a construction site or preparing joints for radiographic inspection.",
    realWorldImpact: "Welders hold together the pipelines that carry natural gas to millions of homes and the structural steel in bridges that carry traffic daily. A certified pipe welder's precision directly prevents catastrophic failures.",
    skills: { technical: ["TIG, MIG, and Stick welding", "Blueprint & weld symbol reading", "Metallurgy basics", "NDT/inspection awareness"], soft: ["Steady-handed precision", "Patience and focus", "Safety discipline", "Adaptability to materials"] },
    whereYoudWork: ["Manufacturing plants", "Construction and fabrication shops", "Oil & gas pipeline projects", "Shipyards and aerospace facilities"],
  },
  "trades-auto-mechanic": {
    typicalDay: "You pull a vehicle into the bay, connect an OBD-II scanner to pull diagnostic codes, and systematically work through the fault tree to find a failing mass airflow sensor. Other jobs include a brake pad replacement, transmission fluid service, and explaining a repair estimate to a customer.",
    realWorldImpact: "Auto mechanics keep the vehicles that millions of people depend on for work and family safe and reliable. A mechanic who catches worn brake components during a routine inspection can prevent a serious accident.",
    skills: { technical: ["OBD-II diagnostic scanners", "Hydraulic lifts & specialty tools", "Mitchell1/AllData repair software", "Electrical wiring diagnosis"], soft: ["Systematic troubleshooting", "Customer communication", "Time management", "Continuous learning"] },
    whereYoudWork: ["Dealership service departments", "Independent repair shops", "Fleet maintenance companies", "Specialty performance shops"],
  },
  "trades-diesel-tech": {
    typicalDay: "You connect a Cummins INSITE or Detroit Diesel diagnostic laptop to a semi-truck to read fault codes and calibrate injectors, then spend the afternoon replacing a turbocharger. You also perform DOT-required inspections, checking brake systems, air lines, and lighting.",
    realWorldImpact: "Diesel technicians keep the trucks, buses, and construction equipment that move America's freight and build its infrastructure running. A properly maintained fleet prevents costly breakdowns that disrupt supply chains.",
    skills: { technical: ["OEM diagnostic software (INSITE, Detroit Diesel)", "Hydraulic & pneumatic systems", "Diesel fuel system service", "DOT inspection standards"], soft: ["Analytical thinking", "Heavy physical work capacity", "Attention to safety specs", "Documentation discipline"] },
    whereYoudWork: ["Trucking company maintenance shops", "Construction equipment dealers", "Municipal bus fleets", "Military vehicle depots"],
  },
  "trades-ev-tech": {
    typicalDay: "You use manufacturer-specific software to diagnose high-voltage battery pack faults on an electric vehicle, then safely discharge the system using insulated tools before replacing a faulty battery module. Other tasks include programming motor controllers, updating firmware, and testing regenerative braking calibration.",
    realWorldImpact: "EV technicians support the transition away from fossil fuels by keeping electric fleets on the road for ride-share companies, delivery services, and everyday commuters.",
    skills: { technical: ["High-voltage safety protocols (OSHA 70E)", "BMS diagnostic software", "CAN bus diagnostics", "Battery module replacement"], soft: ["Safety-first mindset", "Rapid learning of new technology", "Precision under risk", "Technical communication"] },
    whereYoudWork: ["EV dealerships (Tesla, Rivian, GM)", "Electric bus and fleet operators", "Battery service centers", "Charging infrastructure companies"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 8 — Law & Public Service
  // ══════════════════════════════════════════
  "law-lawyer": {
    typicalDay: "You spend mornings reviewing case law in Westlaw and drafting motions, then head to court for an afternoon hearing where you argue evidence admissibility before a judge. Back at the office, you take client calls, review contracts, and prep witnesses for next week's deposition.",
    realWorldImpact: "Lawyers defend the wrongly accused, help victims win justice, and draft the contracts that keep businesses and individuals protected. A single public defender can be the difference between freedom and wrongful imprisonment.",
    skills: { technical: ["Westlaw / LexisNexis legal research", "Legal brief and motion drafting", "Deposition and cross-examination", "Contract analysis"], soft: ["Persuasive argumentation", "Analytical reasoning", "Client empathy", "Grace under pressure"] },
    whereYoudWork: ["Law firms", "Public defender offices", "Corporate legal departments", "Government agencies"],
  },
  "law-judge": {
    typicalDay: "You review pre-trial motions and case briefs in your chambers each morning, then preside over hearings where you manage courtroom procedure, rule on objections in real time, and ensure both sides receive fair process. Evenings often involve reading legal memoranda to prepare written opinions.",
    realWorldImpact: "Judges interpret the law and establish precedents that shape how cases are decided for decades. A single appellate ruling can protect civil rights or change sentencing policy across an entire state.",
    skills: { technical: ["Case law research", "Legal opinion writing", "Rules of evidence and procedure", "Judicial management systems"], soft: ["Impartiality and fairness", "Decisive judgment", "Deep listening", "Written clarity"] },
    whereYoudWork: ["Federal district and appellate courts", "State trial and supreme courts", "Family and probate courts", "Administrative law tribunals"],
  },
  "law-paralegal": {
    typicalDay: "You organize thousands of documents using Relativity e-discovery software, flagging key exhibits for the lead attorney. Your afternoon involves drafting a summary judgment motion, filing court documents through PACER, and coordinating a deposition schedule with opposing counsel.",
    realWorldImpact: "Paralegals make legal representation more efficient and affordable. In a complex litigation case, a paralegal's careful document review can uncover the single email that wins the case.",
    skills: { technical: ["Relativity / Clio / LexisNexis", "PACER court filing system", "Legal document drafting", "Case management software"], soft: ["Organizational precision", "Deadline management", "Discretion with confidential information", "Clear written communication"] },
    whereYoudWork: ["Law firms of all sizes", "Corporate legal departments", "Government attorney offices", "Nonprofit legal aid organizations"],
  },
  "law-police-officer": {
    typicalDay: "You begin your shift with roll call briefings on recent incidents, then patrol by vehicle and on foot responding to calls ranging from traffic accidents to domestic disputes. You conduct field interviews, write detailed incident reports, and coordinate with detectives when situations escalate.",
    realWorldImpact: "Police officers are often the first responders to the worst moments in people's lives — car crashes, assaults, missing children — and their quick judgment can save lives.",
    skills: { technical: ["Criminal law and procedure", "Use-of-force protocols", "CAD/records management systems", "Defensive tactics & firearms"], soft: ["De-escalation", "Situational awareness", "Empathy and cultural competence", "Calm under stress"] },
    whereYoudWork: ["Municipal police departments", "County sheriff's offices", "Transit and university police", "State police agencies"],
  },
  "law-detective": {
    typicalDay: "You spend the morning canvassing witnesses and reviewing surveillance footage from a robbery, then return to your desk to cross-reference tips in your department's RMS database. Afternoons involve drafting search warrant affidavits, interviewing suspects, and coordinating with the DA's office.",
    realWorldImpact: "Detectives solve crimes that deliver justice to victims and close cases that haunt communities. A skilled homicide detective's work can bring a family closure and put a violent offender behind bars.",
    skills: { technical: ["Records management systems (RMS)", "Forensic evidence handling", "Interview and interrogation techniques", "Criminal database searches (NCIC, AFIS)"], soft: ["Persistent analytical thinking", "Emotional resilience", "Deception detection", "Persuasive writing"] },
    whereYoudWork: ["Police department detective bureaus", "Sheriff's investigative divisions", "State criminal investigation agencies", "Federal task forces"],
  },
  "law-fbi-agent": {
    typicalDay: "You review intelligence reports and coordinate with a field office team on a cyber fraud investigation before interviewing a cooperating witness. Afternoons involve drafting subpoenas, analyzing financial records in FinCEN databases, and filing detailed case reports.",
    realWorldImpact: "FBI agents dismantle organized crime networks, disrupt domestic terrorism plots, and prosecute cyber criminals. A single successful investigation can shut down a human trafficking ring exploiting hundreds of victims.",
    skills: { technical: ["Surveillance and intelligence tools", "Financial crime analysis", "Forensic interviewing", "Federal criminal law"], soft: ["Discretion and ethics", "Cross-agency collaboration", "Analytical rigor", "Adaptability"] },
    whereYoudWork: ["FBI field offices nationwide", "Embedded task forces with local law enforcement", "International legal attache postings", "FBI headquarters (Washington, D.C.)"],
  },
  "law-forensic-scientist": {
    typicalDay: "You arrive at the lab to process DNA extracts from a sexual assault kit using PCR amplification and capillary electrophoresis, comparing profiles against CODIS. Later you analyze trace evidence under a comparison microscope and write a technical report for court.",
    realWorldImpact: "Forensic scientists provide objective scientific evidence that convicts the guilty and exonerates the innocent. DNA evidence has freed more than 375 wrongfully convicted people through the Innocence Project.",
    skills: { technical: ["PCR / DNA profiling", "Gas chromatography-mass spectrometry (GC-MS)", "CODIS database", "Forensic microscopy"], soft: ["Meticulous documentation", "Scientific objectivity", "Clear technical writing", "Courtroom testimony composure"] },
    whereYoudWork: ["Crime labs (state, federal, local)", "Medical examiner offices", "FBI and DEA labs", "Private forensic consulting firms"],
  },
  "law-firefighter": {
    typicalDay: "On shift, you train on hose evolutions and ventilation tactics in the morning, then respond to a structure fire where you don SCBA gear, advance a hoseline, and search rooms for victims. Back at the station you inspect equipment, conduct community fire safety education, and log maintenance records.",
    realWorldImpact: "Firefighters save lives, protect property, and respond to medical emergencies every day. In the U.S., firefighters respond to over 1.3 million fires annually, saving billions in property and countless lives.",
    skills: { technical: ["SCBA and PPE operation", "Hydraulics and hose deployment", "Emergency medical response (EMT/Paramedic)", "Incident Command System (ICS)"], soft: ["Courage and composure", "Team trust and communication", "Physical fitness", "Quick situational assessment"] },
    whereYoudWork: ["Municipal fire departments", "Airport crash/fire/rescue", "Wildland fire agencies (US Forest Service, CAL FIRE)", "Industrial fire brigades"],
  },
  "law-dispatcher": {
    typicalDay: "You monitor multiple radio channels and a CAD system simultaneously, answering 911 calls and rapidly extracting location and emergency information from panicked callers. You dispatch the closest units, coordinate between fire, EMS, and police, and provide pre-arrival instructions like CPR guidance.",
    realWorldImpact: "Dispatchers are the invisible first responders — their calm guidance has helped bystanders deliver babies, perform CPR, and survive active threat situations. Quick, accurate dispatch directly affects life-or-death response times.",
    skills: { technical: ["CAD dispatch systems (TriTech, Motorola PremierOne)", "Multi-channel radio management", "GIS mapping tools", "EMD/EFD/EPD protocols"], soft: ["Composure under extreme stress", "Rapid multitasking", "Empathetic crisis communication", "Active listening"] },
    whereYoudWork: ["911 Public Safety Answering Points (PSAPs)", "Police and fire communication centers", "Hospital dispatch hubs", "Emergency management operations centers"],
  },
  "law-emergency-manager": {
    typicalDay: "You spend the morning updating your jurisdiction's emergency operations plan and running a tabletop exercise with department heads to stress-test evacuation procedures. Afternoons involve reviewing FEMA grant applications, coordinating with utilities on infrastructure resilience, and briefing officials on hurricane preparedness.",
    realWorldImpact: "Emergency managers are the architects of community resilience — their pre-disaster planning saves lives and speeds recovery. A well-prepared county manager can reduce disaster-related deaths by ensuring evacuation orders reach every resident.",
    skills: { technical: ["NIMS / ICS frameworks", "WebEOC or similar EOC software", "FEMA grant writing", "GIS hazard mapping"], soft: ["Cross-agency coordination", "Clear public communication", "Strategic long-term planning", "Leadership in chaos"] },
    whereYoudWork: ["County and city emergency management offices", "State homeland security agencies", "FEMA regional offices", "Hospitals and university emergency management"],
  },
  "law-diplomat": {
    typicalDay: "You brief the ambassador on overnight cable traffic from Washington before attending a meeting with a foreign ministry official to negotiate terms of a bilateral trade agreement. Afternoons involve drafting formal cables, attending a reception to cultivate contacts, and reviewing visa applications.",
    realWorldImpact: "Diplomats prevent conflicts, open markets, and build alliances that protect lives and interests abroad. A skilled diplomat's quiet negotiation can resolve a border dispute without a single shot fired.",
    skills: { technical: ["Foreign policy analysis", "Treaty and agreement drafting", "Classified cable writing", "Foreign language proficiency"], soft: ["Cultural intelligence", "Negotiation and tact", "Discretion with sensitive information", "Resilience in adversity"] },
    whereYoudWork: ["U.S. embassies and consulates worldwide", "State Department headquarters", "United Nations missions", "International organizations (NATO, WHO, IMF)"],
  },
  "law-urban-planner": {
    typicalDay: "You analyze zoning maps and census data in ArcGIS to assess whether a proposed transit corridor aligns with the city's general plan. Afternoons involve facilitating a community meeting to gather input on a proposed mixed-use development, then writing a staff report for the planning commission.",
    realWorldImpact: "Urban planners shape where people live and how they get around. A planner who champions affordable housing near transit can reduce commute times and housing costs for thousands of working families.",
    skills: { technical: ["ArcGIS / QGIS", "Zoning code and land use law", "Urban design software (AutoCAD, SketchUp)", "Demographic and traffic analysis"], soft: ["Community facilitation", "Persuasive public speaking", "Negotiation between competing interests", "Long-range strategic thinking"] },
    whereYoudWork: ["City and county planning departments", "Regional planning agencies (MPOs)", "Private urban planning and architecture firms", "Nonprofit housing and community development organizations"],
  },
  "law-policy-analyst": {
    typicalDay: "You spend your morning synthesizing academic research and government data on healthcare costs into a briefing memo for a state legislator. Afternoons involve modeling the fiscal impact of a proposed Medicaid expansion using Excel and statistical software, then presenting findings to a legislative committee.",
    realWorldImpact: "Policy analysts translate complex problems into actionable recommendations that guide laws affecting millions of people. A well-researched policy brief can tip a vote on criminal justice reform or education funding.",
    skills: { technical: ["Quantitative analysis (Stata, R, Excel)", "Legislative research databases", "Policy memo and report writing", "Program evaluation methods"], soft: ["Nonpartisan analytical rigor", "Synthesizing large amounts of information", "Persuasive communication", "Stakeholder engagement"] },
    whereYoudWork: ["Government legislative and executive agencies", "Think tanks (Brookings, Urban Institute)", "Nonprofit advocacy organizations", "Consulting firms serving public sector clients"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 9 — Education & Training
  // ══════════════════════════════════════════
  "edu-elementary-teacher": {
    typicalDay: "You open the morning with a read-aloud to build literacy skills, then lead small guided reading groups while other students work independently on differentiated activities. After lunch, you teach a math lesson using manipulatives and exit tickets, then spend prep time grading and calling parents.",
    realWorldImpact: "Elementary teachers build the foundational literacy and numeracy that determine a child's entire educational trajectory. Research shows a highly effective third-grade teacher can measurably increase a student's lifetime earnings.",
    skills: { technical: ["Curriculum standards (Common Core/state frameworks)", "Learning platforms (Seesaw, Google Classroom)", "Differentiated instruction", "Formative assessment tools"], soft: ["Patience and enthusiasm", "Classroom management", "Communication with parents", "Creative problem-solving"] },
    whereYoudWork: ["Public elementary schools", "Private and parochial schools", "Charter schools", "International schools abroad"],
  },
  "edu-middle-teacher": {
    typicalDay: "You start class with a warm-up activity, then facilitate a Socratic seminar on a novel that connects to social-emotional themes. After school you collaborate with the team on a student showing behavioral changes, update grades in PowerSchool, and plan a cross-curricular project with the science teacher.",
    realWorldImpact: "Middle school teachers guide students through one of the most turbulent developmental periods, often serving as a stable, trusted adult who can redirect a struggling student's path.",
    skills: { technical: ["Subject-specific content expertise", "LMS platforms (Canvas, Google Classroom)", "PowerSchool / Infinite Campus", "Project-based learning design"], soft: ["Adolescent development awareness", "Relationship-building", "Flexibility and humor", "Team collaboration"] },
    whereYoudWork: ["Public middle schools", "Private and independent schools", "Rural and urban district schools", "International and bilingual schools"],
  },
  "edu-special-ed": {
    typicalDay: "You review IEPs for your caseload students, then co-teach a math inclusion class using adapted materials and assistive technology. Later you run a pull-out session on social skills, write progress notes for an IEP review, and meet with a parent to discuss transition planning.",
    realWorldImpact: "Special education teachers unlock access to learning for students who would otherwise fall through the cracks. Teachers in this field fundamentally change quality-of-life trajectories for students with disabilities and their families.",
    skills: { technical: ["IEP development and compliance", "Assistive technology (AAC devices, text-to-speech)", "Applied Behavior Analysis basics", "Special education law (IDEA)"], soft: ["Extraordinary patience", "Advocacy", "Creative differentiation", "Collaboration with parents and specialists"] },
    whereYoudWork: ["Public schools (inclusion and self-contained classrooms)", "Special day schools", "Residential treatment facilities", "Early intervention programs"],
  },
  "edu-pe-teacher": {
    typicalDay: "You run warm-up drills and teach motor skill progressions for a volleyball unit, using heart rate monitors to help students connect exercise to health concepts. After school, you coach cross-country, track student fitness data in FitnessGram, and plan a health curriculum unit on nutrition.",
    realWorldImpact: "PE teachers establish lifelong exercise habits during the critical window of childhood development. Schools with strong PE programs show improved academic concentration and lower rates of childhood obesity.",
    skills: { technical: ["FitnessGram / fitness assessment tools", "Sport-specific skill progressions", "First aid & AED certification", "Physical activity curriculum design"], soft: ["High-energy motivation", "Inclusivity for all fitness levels", "Positive behavior reinforcement", "Coaching and mentorship"] },
    whereYoudWork: ["K-12 public and private schools", "Recreation centers and YMCAs", "After-school programs", "Sports academies"],
  },
  "edu-professor": {
    typicalDay: "You deliver a lecture on organic reaction mechanisms to 60 undergraduates, fielding questions and using live polling to check comprehension. Office hours follow, then you spend the afternoon analyzing data from your NIH-funded lab, mentoring a graduate student on their thesis, and reviewing a journal article.",
    realWorldImpact: "Professors generate new knowledge that advances medicine, technology, and society — and train the next generation of scientists, lawyers, and thinkers.",
    skills: { technical: ["Discipline-specific research methods", "Statistical analysis software (SPSS, R)", "LMS course design (Canvas, Blackboard)", "Grant writing"], soft: ["Clear explanation of complex ideas", "Research mentorship", "Scholarly writing", "Academic networking"] },
    whereYoudWork: ["Research universities (R1 institutions)", "Liberal arts colleges", "Community colleges", "Online and hybrid universities"],
  },
  "edu-academic-advisor": {
    typicalDay: "You meet with five students across the morning — one mapping out a pre-med track, another switching majors, one on academic probation crafting a recovery plan. Afternoons involve updating advising notes in Degree Works, running an internship workshop, and collaborating with faculty on curriculum barriers.",
    realWorldImpact: "Academic advisors are often the difference between a student completing their degree and dropping out. First-generation students especially credit an advisor with giving them the knowledge to navigate higher education.",
    skills: { technical: ["Degree Works / Banner / EAB Navigate", "Degree requirement auditing", "FERPA compliance", "Career pathway research"], soft: ["Active listening", "Motivational coaching", "Cultural sensitivity", "Crisis referral judgment"] },
    whereYoudWork: ["University advising centers", "Community college counseling offices", "Online university student success teams", "High school college counseling departments"],
  },
  "edu-school-counselor": {
    typicalDay: "You facilitate a small-group session on coping skills for anxious middle schoolers, then do an individual check-in with a student whose grades have been declining. Afternoons involve coordinating a 504 plan meeting, reviewing college essays with seniors, and responding to a crisis referral from a teacher.",
    realWorldImpact: "School counselors provide the mental health support and guidance that many students have nowhere else to access. A counselor who intervenes early can prevent a crisis and redirect a student's entire life path.",
    skills: { technical: ["ASCA National Model", "MTSS and 504/IEP collaboration", "Suicide risk assessment (Columbia Protocol)", "College planning platforms (Naviance, Scoir)"], soft: ["Empathy and non-judgment", "Crisis de-escalation", "Confidentiality ethics", "Systems coordination"] },
    whereYoudWork: ["K-12 public and private schools", "Charter and magnet schools", "Residential treatment schools", "International schools"],
  },
  "edu-school-psychologist": {
    typicalDay: "You administer a cognitive and academic battery (WISC-V, WJ-IV) to a referred 4th grader, then score and interpret results. Afternoons involve writing a psychoeducational evaluation report, presenting findings at an eligibility meeting, and consulting with a teacher on behavior intervention strategies for a student with ADHD.",
    realWorldImpact: "School psychologists identify learning disabilities, giftedness, and emotional disorders that are often invisible without careful assessment — giving students access to services that transform their educational experience.",
    skills: { technical: ["Psychoeducational assessment (WISC-V, BASC-3, WJ-IV)", "Special education eligibility law (IDEA)", "Behavioral intervention planning", "Data-based decision making"], soft: ["Psychological insight", "Report writing clarity", "Collaborative consultation", "Cultural and linguistic sensitivity"] },
    whereYoudWork: ["Public school districts", "Private and independent schools", "Special education cooperatives", "Child psychiatric and evaluation clinics"],
  },
  "edu-librarian": {
    typicalDay: "You lead a research skills lesson for a high school English class, teaching students how to evaluate sources using lateral reading techniques. Afternoons involve cataloging new acquisitions, developing a display around a relevant social topic, and meeting with a teacher to co-design a research project.",
    realWorldImpact: "Librarians are champions of information literacy in a world overwhelmed with misinformation. School librarians with robust programs are strongly correlated with higher reading proficiency scores.",
    skills: { technical: ["Integrated library systems (Destiny, Follett)", "Database research (JSTOR, EBSCO)", "Cataloging (Dewey Decimal, MARC records)", "Digital literacy instruction"], soft: ["Intellectual curiosity", "Instructional collaboration", "Inclusive community building", "Organization and curation"] },
    whereYoudWork: ["K-12 school libraries", "Public library systems", "University and academic libraries", "Special libraries (legal, medical, corporate)"],
  },
  "edu-instructional-designer": {
    typicalDay: "You map out a new onboarding course using a storyboard in PowerPoint, then build interactive modules in Articulate Storyline 360 with branching scenario questions. Afternoons involve reviewing learner analytics in your LMS to identify where students drop off, then iterating content in response.",
    realWorldImpact: "Instructional designers make learning scalable — a single well-designed online course can effectively train thousands with consistent quality. In healthcare, well-designed training modules directly reduce medication errors.",
    skills: { technical: ["Articulate Storyline / Rise 360", "LMS administration (Moodle, Cornerstone, Canvas)", "ADDIE / SAM instructional design models", "Video and multimedia production"], soft: ["Translating expertise into clear learning sequences", "Collaborative content partnership", "Data-driven iteration", "Project management"] },
    whereYoudWork: ["Corporate L&D departments", "Higher education online program offices", "Government and military training agencies", "Healthcare and compliance training companies"],
  },
  "edu-corporate-trainer": {
    typicalDay: "You facilitate a half-day leadership workshop for 20 new managers, using role-play scenarios and group discussions. Afternoons involve updating a sales training module in your LMS based on last quarter's performance data, scheduling follow-up coaching sessions, and reporting completion metrics to HR.",
    realWorldImpact: "Corporate trainers directly affect employee performance, retention, and safety — a strong onboarding program can reduce new-hire turnover by 25% or more.",
    skills: { technical: ["LMS administration (Workday Learning, LinkedIn Learning)", "Instructional facilitation methods", "Training needs analysis", "Microsoft Office & presentation design"], soft: ["Engaging adult learners", "Adaptability in live settings", "Organizational credibility", "Feedback and coaching"] },
    whereYoudWork: ["Corporate HR and L&D departments", "Training and consulting firms", "Healthcare system education centers", "Financial services and tech companies"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 10 — Health & Human Services
  // ══════════════════════════════════════════
  "human-social-worker": {
    typicalDay: "You meet with clients in homes, hospitals, or offices to assess needs and connect them with housing, food assistance, or mental health services. You document case notes in systems like Apricot or Salesforce Nonprofit, coordinate with courts or schools, and attend team meetings to review caseloads.",
    realWorldImpact: "You help a single mother navigate the foster care system to reunite with her children, or connect a recently released inmate with job training and stable housing to prevent recidivism.",
    skills: { technical: ["Case management software (Apricot, HMIS)", "Crisis intervention protocols", "Benefits eligibility systems (Medicaid, SNAP)", "Documentation and report writing"], soft: ["Empathy and active listening", "Boundary-setting", "Cultural humility", "Advocacy and negotiation"] },
    whereYoudWork: ["Child protective services agencies", "Hospitals and healthcare systems", "Nonprofit community organizations", "Schools and school districts"],
  },
  "human-mental-health-counselor": {
    typicalDay: "You conduct 50-minute therapy sessions using evidence-based approaches like CBT or DBT, then write progress notes in an EHR system like SimplePractice. You consult with psychiatrists about medication questions and develop individualized treatment plans with clients.",
    realWorldImpact: "A teenager struggling with severe anxiety learns coping strategies that allow them to return to school, or a veteran with PTSD reduces flashback frequency through EMDR treatment you provide.",
    skills: { technical: ["Electronic health records (SimplePractice, Therapy Notes)", "CBT, DBT, and EMDR modalities", "DSM-5 diagnostic criteria", "Telehealth platforms (Zoom for Healthcare)"], soft: ["Active listening and reflection", "Non-judgmental presence", "Motivational interviewing", "Maintaining professional boundaries"] },
    whereYoudWork: ["Private therapy practices", "Community mental health centers", "Hospitals and inpatient facilities", "Schools and university counseling centers"],
  },
  "human-psychologist": {
    typicalDay: "You administer and score standardized assessments like the MMPI-3 or WISC-V, write detailed psychological evaluation reports, and conduct individual or group therapy sessions. Research-focused days involve analyzing data in SPSS or R and preparing findings for peer-reviewed journals.",
    realWorldImpact: "Your neuropsychological evaluation identifies a learning disability that unlocks academic accommodations for a struggling student, or your published research on trauma-informed care reshapes treatment guidelines used by thousands of clinicians.",
    skills: { technical: ["Psychological assessment tools (MMPI, WISC, Rorschach)", "Statistical software (SPSS, R)", "DSM-5 and ICD-11 diagnostic frameworks", "APA-style report writing"], soft: ["Critical thinking and hypothesis testing", "Communicating complex findings clearly", "Ethical judgment", "Patience and objectivity"] },
    whereYoudWork: ["Private practice offices", "University research labs", "Hospitals and rehabilitation centers", "Forensic and correctional settings"],
  },
  "human-nonprofit-director": {
    typicalDay: "You start your morning reviewing the organization's budget dashboard and grant deadlines, then lead a staff meeting to align program teams on quarterly goals. Afternoons involve meeting with major donors, presenting outcome data to your board, and reviewing partnership agreements with city agencies.",
    realWorldImpact: "Under your leadership, a food bank expands from serving 500 to 2,000 families monthly, or you secure a federal grant that funds after-school programming for underserved youth across three counties.",
    skills: { technical: ["Nonprofit accounting software (QuickBooks Nonprofit, Sage Intacct)", "Grant writing and reporting", "CRM and donor management (Salesforce Nonprofit, Bloomerang)", "Program outcome measurement"], soft: ["Strategic vision and planning", "Board and donor relationship management", "Staff leadership and development", "Public speaking and coalition building"] },
    whereYoudWork: ["Human services nonprofits", "Arts and cultural organizations", "Environmental advocacy groups", "Faith-based community organizations"],
  },
  "human-community-organizer": {
    typicalDay: "You spend mornings doing door-to-door canvassing in neighborhoods affected by a policy issue, listening to residents and recruiting volunteers. Afternoons involve facilitating planning meetings, drafting action alerts using Action Network, and coordinating with allied organizations before a city council vote.",
    realWorldImpact: "You organize a tenant coalition that successfully pressures a city council to pass rent stabilization protections for 10,000 residents, or lead a campaign that results in a new community health clinic.",
    skills: { technical: ["Canvassing and voter file tools (VAN, Hustle)", "Email and SMS mobilization platforms (Action Network)", "Social media organizing", "Meeting facilitation and agenda design"], soft: ["Relationship building across diverse communities", "Active listening and trust development", "Public speaking and storytelling", "Conflict mediation"] },
    whereYoudWork: ["Grassroots advocacy organizations", "Labor unions", "Environmental justice groups", "Political campaigns and civic organizations"],
  },
  "human-fundraiser": {
    typicalDay: "You review your donor pipeline in a CRM like Raiser's Edge, then spend the morning drafting personalized solicitation letters for a major gifts campaign. Afternoons involve calling mid-level donors to update them on program impact, and you end the day preparing slides for a foundation grant presentation.",
    realWorldImpact: "Your annual fund campaign raises $500,000 that directly funds scholarships for 40 first-generation college students, or your planned giving program secures a $2 million bequest that sustains the organization for decades.",
    skills: { technical: ["Donor CRM software (Raiser's Edge, Bloomerang, Salesforce)", "Grant writing and prospect research (Foundation Directory)", "Email marketing platforms", "Data analysis and fundraising metrics"], soft: ["Donor relationship cultivation", "Persuasive storytelling", "Attention to detail and follow-through", "Resilience and persistence"] },
    whereYoudWork: ["University development offices", "Hospital foundations", "Arts and cultural nonprofits", "Social service organizations"],
  },
  "human-clergy": {
    typicalDay: "You prepare and deliver sermons or services, drawing on theological texts and congregant needs. You conduct pastoral counseling sessions with individuals facing grief, marriage struggles, or spiritual doubt, and oversee staff and volunteers coordinating community programs like food pantries or youth groups.",
    realWorldImpact: "You provide grief counseling to a family after a sudden loss and facilitate a memorial service that brings healing to an entire congregation, or launch an interfaith dialogue program that reduces community tensions.",
    skills: { technical: ["Theological research and biblical scholarship", "Sermon writing and liturgical planning", "Nonprofit and budget administration", "Pastoral counseling frameworks"], soft: ["Spiritual leadership and pastoral presence", "Empathy and confidentiality", "Community building across diverse backgrounds", "Public speaking and teaching"] },
    whereYoudWork: ["Local congregations and houses of worship", "Campus ministries", "Denominational headquarters", "Faith-based nonprofits and social service agencies"],
  },
  "human-chaplain": {
    typicalDay: "You make rounds through a hospital's ICU and oncology ward, sitting with patients facing terminal diagnoses and supporting family members in waiting rooms. You coordinate multi-faith worship services, consult with medical staff on ethical dilemmas, and respond to emergency calls when a patient dies unexpectedly.",
    realWorldImpact: "You provide comfort to a soldier's family during a death notification, or help a patient of a minority faith tradition receive culturally appropriate spiritual care during end-of-life treatment.",
    skills: { technical: ["Clinical Pastoral Education (CPE) training", "Interfaith and cross-cultural religious literacy", "Healthcare ethics and HIPAA compliance", "Documentation in hospital EHR systems"], soft: ["Presence and non-anxious companionship", "Active and empathetic listening", "Adaptability across faith traditions", "Emotional resilience in traumatic settings"] },
    whereYoudWork: ["Hospitals and medical centers", "Military bases and VA facilities", "Prisons and correctional institutions", "Hospice and palliative care programs"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 11 — Agriculture & Natural Resources
  // ══════════════════════════════════════════
  "ag-farmer": {
    typicalDay: "You wake before dawn to irrigate fields, check soil moisture sensors, and inspect crops for pest or disease signs. Midday involves operating tractors and planting or harvesting equipment, and afternoons include tracking yields in farm management software and negotiating contracts with buyers.",
    realWorldImpact: "You produce enough wheat on 500 acres to supply bread for tens of thousands of people, or you transition your farm to regenerative practices that restore soil health and reduce water usage by 30%.",
    skills: { technical: ["Tractor and equipment operation", "Irrigation system management", "Farm management software (Granular, FarmLogs)", "Pesticide application and IPM protocols"], soft: ["Problem-solving and adaptability to weather", "Physical endurance", "Financial planning and risk management", "Negotiation with buyers and suppliers"] },
    whereYoudWork: ["Family-owned crop farms", "Large-scale commercial agricultural operations", "Organic and specialty produce farms", "Cooperative farming enterprises"],
  },
  "ag-precision-ag": {
    typicalDay: "You analyze drone imagery and satellite NDVI maps to identify areas of a field with nutrient deficiencies, then program a variable-rate applicator to adjust fertilizer inputs by zone. You calibrate soil sensors, upload prescription maps to John Deere Operations Center, and present data insights to farm owners.",
    realWorldImpact: "By implementing variable-rate seeding and fertilization on a 2,000-acre corn operation, you reduce input costs by $80,000 while increasing average yield by 12 bushels per acre.",
    skills: { technical: ["GIS and mapping software (ArcGIS, SMS Advanced)", "Drone operation and imagery analysis", "John Deere Operations Center and precision ag platforms", "Soil sampling and sensor calibration"], soft: ["Analytical thinking and data interpretation", "Communicating technical findings to farmers", "Attention to field-scale detail", "Continuous learning in fast-evolving technology"] },
    whereYoudWork: ["Precision ag consulting firms", "Agricultural equipment dealerships (John Deere, AGCO)", "Cooperative extension services", "Large commercial farming operations"],
  },
  "ag-agricultural-engineer": {
    typicalDay: "You design drainage tile layouts for a flooded field using AutoCAD and hydraulic modeling software, then visit a construction site to inspect installation. Back at the office, you run structural calculations for a grain bin foundation and review specs for a new automated irrigation system.",
    realWorldImpact: "Your drainage design prevents annual flooding that was destroying 200 acres of crops, or you engineer an automated greenhouse climate system that extends a grower's season by three months.",
    skills: { technical: ["AutoCAD and civil engineering design software", "Hydraulic and structural analysis tools", "GIS and terrain modeling", "Knowledge of NRCS engineering standards"], soft: ["Problem-solving under physical constraints", "Collaboration with farmers and contractors", "Technical communication and report writing", "Project management"] },
    whereYoudWork: ["USDA Natural Resources Conservation Service (NRCS)", "Agricultural engineering consulting firms", "Equipment manufacturers (John Deere, CNH Industrial)", "University extension and research programs"],
  },
  "ag-food-scientist": {
    typicalDay: "You run experiments in a food lab to test the shelf life of a new product formulation, adjusting emulsifiers and preservatives and documenting results in LIMS software. You taste-test prototype batches with a sensory panel, review FDA labeling requirements, and collaborate with production engineers to scale a formula.",
    realWorldImpact: "You develop a plant-based protein snack that replaces a less nutritious product in school lunch programs nationwide, or reformulate a popular sauce to remove an allergen without changing the taste.",
    skills: { technical: ["Laboratory instrumentation (HPLC, spectrophotometry)", "LIMS and food safety documentation systems", "FDA food labeling regulations (21 CFR)", "Sensory evaluation and product development methods"], soft: ["Scientific curiosity and attention to detail", "Cross-functional collaboration with marketing and production", "Critical evaluation of sensory data", "Clear technical writing"] },
    whereYoudWork: ["Food and beverage manufacturing companies", "University food science research labs", "Contract research and testing organizations", "FDA or USDA regulatory agencies"],
  },
  "ag-food-inspector": {
    typicalDay: "You arrive at a meat processing facility at 5 a.m. to observe slaughter line operations, checking for sanitation violations and proper temperature controls. You collect product samples for lab testing, review HACCP records for compliance, and issue corrective action reports when violations are found.",
    realWorldImpact: "You identify a Salmonella contamination issue in a poultry plant before product ships, preventing a potentially widespread foodborne illness outbreak affecting thousands of consumers.",
    skills: { technical: ["HACCP and food safety plan analysis", "USDA/FDA regulatory standards (9 CFR, 21 CFR)", "Laboratory sample collection procedures", "Report writing and violation documentation"], soft: ["Attention to detail and thoroughness", "Integrity and impartiality", "Clear verbal communication during walkthroughs", "Decisiveness in fast-paced environments"] },
    whereYoudWork: ["USDA Food Safety and Inspection Service (FSIS)", "FDA district offices", "State departments of agriculture", "Third-party food safety auditing firms"],
  },
  "ag-nutritionist": {
    typicalDay: "You meet with patients to review 3-day food diaries, run dietary analyses in software like NDSR, and create personalized meal plans. In a clinical setting, you calculate enteral nutrition formulas for hospitalized patients and document recommendations in the EHR system.",
    realWorldImpact: "You help a diabetic patient achieve an A1C reduction from 9.2 to 6.8 through dietary changes, reducing their need for medication, or you design a school lunch menu that increases vegetable consumption by 40%.",
    skills: { technical: ["Dietary analysis software (NDSR, Cronometer)", "Medical nutrition therapy protocols", "Electronic health records (Epic, Cerner)", "Macronutrient and micronutrient biochemistry"], soft: ["Motivational interviewing and behavior change", "Cultural sensitivity around food practices", "Patient education and health literacy", "Collaboration with physicians and care teams"] },
    whereYoudWork: ["Hospitals and outpatient clinical settings", "Public health departments and WIC programs", "Corporate wellness programs", "School districts and food service organizations"],
  },
  "ag-park-ranger": {
    typicalDay: "You patrol backcountry trails by foot or horseback, checking for trail damage, illegal campfires, and wildlife activity. You lead an interpretive hike for school students, respond to a lost hiker report using GPS tracking, and file an incident report using NPS resource management databases.",
    realWorldImpact: "You rescue a hypothermic hiker from a remote canyon before nightfall, or your invasive species removal program helps restore native plant communities in a protected meadow ecosystem.",
    skills: { technical: ["GPS navigation and GIS mapping", "Wildfire detection and suppression basics", "Wildlife identification and monitoring", "NPS resource management database systems"], soft: ["Public communication and visitor education", "Calm decision-making in emergencies", "Physical fitness and outdoor endurance", "Environmental stewardship ethic"] },
    whereYoudWork: ["National Park Service units", "State parks and forests", "Bureau of Land Management (BLM) districts", "Fish and Wildlife Service refuges"],
  },
  "ag-conservation-scientist": {
    typicalDay: "You conduct a land assessment on a farm enrolled in a conservation program, measuring soil erosion rates and identifying riparian buffer opportunities using GPS and GIS tools. Back at the office, you write a conservation plan recommending cover crops and filter strips, then submit it for cost-share approval.",
    realWorldImpact: "Your conservation plans on 50,000 acres of farmland annually prevent millions of pounds of soil from entering local waterways, directly improving downstream water quality and aquatic habitat.",
    skills: { technical: ["GIS and remote sensing (ArcGIS, Google Earth Engine)", "Soil science and erosion modeling (RUSLE)", "USDA NRCS conservation practice standards", "Environmental monitoring and data collection"], soft: ["Building trust with landowners and farmers", "Technical report writing", "Field-based problem solving", "Long-term relationship management"] },
    whereYoudWork: ["USDA Natural Resources Conservation Service (NRCS)", "State departments of natural resources", "Land trusts and conservation nonprofits", "Environmental consulting firms"],
  },
  "ag-wildlife-manager": {
    typicalDay: "You deploy camera traps and track GPS collar data to monitor a deer population across a wildlife management area, then analyze movement patterns in spatial software. You meet with hunting license holders about season regulations, respond to a crop damage complaint, and write a population assessment report.",
    realWorldImpact: "Your population management plan stabilizes an overgrown deer herd, reducing vehicle collisions by 25% and allowing native forest understory plants to recover across thousands of acres.",
    skills: { technical: ["Wildlife telemetry and GPS collar systems", "Population modeling software (Program MARK)", "GIS and spatial analysis (ArcGIS)", "Trapping, tagging, and field sampling"], soft: ["Communication with hunters, farmers, and the public", "Scientific observation and data integrity", "Patience for long-term ecological monitoring", "Conflict resolution between stakeholder groups"] },
    whereYoudWork: ["State fish and wildlife agencies", "US Fish and Wildlife Service", "Tribal natural resource departments", "Conservation NGOs and land trusts"],
  },
  "ag-veterinarian": {
    typicalDay: "You perform wellness exams and vaccinations during morning appointments, then rush to a farm call to diagnose a sick dairy cow using portable ultrasound equipment. Afternoons include reviewing lab results in veterinary practice software, performing surgery, and consulting with a livestock producer on herd health.",
    realWorldImpact: "You identify and contain a bovine respiratory disease outbreak before it spreads through a 500-head feedlot, saving the producer from catastrophic losses and protecting animal welfare.",
    skills: { technical: ["Diagnostic imaging (ultrasound, radiography)", "Veterinary practice management software (AVImark, Cornerstone)", "Surgical and anesthesia techniques", "Pharmacology and prescription management"], soft: ["Clinical decision-making under pressure", "Client communication and education", "Physical dexterity and stamina for large-animal work", "Compassion for both animals and owners"] },
    whereYoudWork: ["Small animal private practices", "Large animal and livestock practices", "USDA veterinary services", "Zoo and wildlife rehabilitation facilities"],
  },
  "ag-vet-tech": {
    typicalDay: "You prepare surgical suites, administer pre-operative sedation, and monitor anesthesia levels during a spay procedure. Between surgeries, you draw blood samples, run in-house lab diagnostics, take radiographs, and update patient records, while explaining home-care instructions to pet owners.",
    realWorldImpact: "Your careful anesthesia monitoring catches a dangerous cardiac arrhythmia mid-surgery, allowing the veterinarian to intervene and save the patient's life.",
    skills: { technical: ["Anesthesia monitoring equipment", "Radiology and digital imaging", "In-house laboratory diagnostics (CBC, chemistry panels)", "Veterinary practice management software (Cornerstone, ezyVet)"], soft: ["Calm handling of anxious animals", "Clear client communication", "Teamwork with veterinarians and staff", "Attention to detail in medication dosing"] },
    whereYoudWork: ["Small animal veterinary clinics", "Emergency and specialty animal hospitals", "Animal shelters and humane societies", "Research animal facilities"],
  },
  "ag-animal-scientist": {
    typicalDay: "You design a feeding trial to test a new soy protein substitute in broiler chicken diets, collect daily weight gain and feed conversion data, and enter it into SAS for statistical analysis. You present preliminary findings to a research team and consult with a poultry producer about implementing results.",
    realWorldImpact: "Your research on feed additive efficiency helps reduce the cost of raising broiler chickens by $0.03 per pound — saving the industry hundreds of millions of dollars annually while reducing environmental nutrient runoff.",
    skills: { technical: ["Statistical analysis software (SAS, R)", "Animal nutrition and metabolism research methods", "Laboratory techniques (proximate analysis, isotope tracing)", "Scientific writing and grant proposals"], soft: ["Rigorous scientific thinking", "Collaboration with producers and policymakers", "Translating research into practical recommendations", "Patience for long-duration studies"] },
    whereYoudWork: ["Land-grant university research departments", "USDA Agricultural Research Service (ARS)", "Feed and livestock industry R&D divisions", "International agricultural development organizations"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 12 — Hospitality & Tourism
  // ══════════════════════════════════════════
  "hosp-chef": {
    typicalDay: "You arrive early to receive and inspect produce deliveries, then prep sauces and proteins for lunch service. During service, you expedite from the pass — calling out tickets, plating dishes, and maintaining quality. Then you debrief your crew, adjust tomorrow's prep list, and update food cost spreadsheets.",
    realWorldImpact: "You create a seasonal tasting menu that earns your restaurant a Michelin star, or you overhaul a hospital food program to serve scratch-cooked meals that improve patient satisfaction scores.",
    skills: { technical: ["Knife skills and classical cooking techniques", "Food safety and ServSafe certification", "Kitchen inventory and food cost management", "Recipe scaling and menu engineering"], soft: ["Leadership under high-pressure service", "Team communication in a fast environment", "Creativity and flavor intuition", "Mentoring junior cooks"] },
    whereYoudWork: ["Fine dining and upscale restaurants", "Hotel food and beverage departments", "Hospital and healthcare food service", "Catering and event companies"],
  },
  "hosp-pastry-chef": {
    typicalDay: "You start at 5 a.m. to proof and bake bread and pastry items, then shift into production — tempering chocolate, piping dessert components, and assembling plated courses. You cost out new seasonal desserts, train a pastry cook on laminated dough technique, and coordinate with the executive chef on plating.",
    realWorldImpact: "Your custom wedding cake becomes a viral social media moment that generates months of bookings, or your reduced-sugar dessert program enables a hotel to meaningfully market to health-conscious guests.",
    skills: { technical: ["Chocolate tempering and sugar work", "Laminated dough techniques (croissant, puff pastry)", "Baking chemistry and formula scaling", "Food costing and recipe management software"], soft: ["Precision and patience", "Artistic eye for plating and decoration", "Time management across production timelines", "Adaptability to dietary restrictions"] },
    whereYoudWork: ["Fine dining restaurants", "Luxury hotels and resorts", "Artisan bakeries and patisseries", "Custom cake and dessert studios"],
  },
  "hosp-restaurant-manager": {
    typicalDay: "You review last night's sales report and labor costs in your POS system, then hold a pre-shift meeting with front-of-house staff. During service, you handle guest complaints, manage table turns, and support the host stand. Afternoons involve scheduling, interviewing candidates, and processing vendor invoices.",
    realWorldImpact: "You implement a table management system that reduces average wait times by 20 minutes, significantly improving guest satisfaction and increasing table turnover revenue.",
    skills: { technical: ["POS systems (Toast, Square, Aloha)", "Scheduling software (7shifts, HotSchedules)", "Food and labor cost analysis", "Inventory management and ordering"], soft: ["Guest conflict resolution", "Staff motivation and development", "Composure during service rushes", "Clear communication across kitchen and front-of-house"] },
    whereYoudWork: ["Independent and chain restaurants", "Hotel food and beverage outlets", "Resort dining operations", "Airport and stadium food service"],
  },
  "hosp-hotel-manager": {
    typicalDay: "You review occupancy forecasts and RevPAR metrics in your property management system, then walk the property to inspect room cleanliness and lobby presentation. You handle a VIP guest complaint, meet with department heads on staffing gaps, and review group sales contracts with the revenue manager.",
    realWorldImpact: "You lead a full hotel renovation project that increases average daily rates by $40 and earns a AAA Four Diamond designation, or you develop a staff training program that cuts guest complaint rates in half.",
    skills: { technical: ["Property management systems (Opera, Cloudbeds)", "Revenue management and channel distribution", "Hotel financial reporting (ADR, RevPAR, GOPPAR)", "Brand standard compliance and quality audits"], soft: ["Cross-departmental leadership", "Guest experience problem-solving", "Strategic planning and financial acumen", "Team culture development"] },
    whereYoudWork: ["Independent boutique hotels", "Major brand hotel properties (Marriott, Hilton, Hyatt)", "Resorts and conference centers", "Airport and extended-stay hotels"],
  },
  "hosp-travel-agent": {
    typicalDay: "You spend the morning researching river cruise itineraries, comparing cabin categories in a GDS system like Sabre, and contacting a DMC for custom shore excursions. Afternoons involve issuing flight tickets, building multi-city itineraries, and following up with past clients on post-trip feedback.",
    realWorldImpact: "You plan a seamless safari for a family that becomes the trip of their lifetime, or you rescue a corporate client stranded abroad by rebooking 12 travelers on alternate flights within an hour.",
    skills: { technical: ["Global Distribution Systems (Sabre, Amadeus, Galileo)", "Itinerary management software (Axus, TripCase)", "Destination and product knowledge research", "Travel insurance and fare rule interpretation"], soft: ["Active listening to match travel styles and budgets", "Attention to detail in complex itineraries", "Crisis management and quick problem-solving", "Building long-term client relationships"] },
    whereYoudWork: ["Independent travel agencies", "Corporate travel management companies (TMCs)", "Luxury and specialty travel boutiques", "Cruise and tour operator sales offices"],
  },
  "hosp-tour-guide": {
    typicalDay: "You lead a 3-hour walking tour through a historic district, weaving research-backed stories about architecture and local history into an engaging narrative. You answer questions, coordinate with a museum for a private access visit, and debrief with guests at the end to gather feedback.",
    realWorldImpact: "Your storytelling transforms a routine city visit into a deeply memorable cultural experience, and your five-star reviews help a tour company grow 30% in bookings over a single season.",
    skills: { technical: ["Deep destination and historical research", "Audio equipment and group communication tools", "Tour booking platforms (FareHarbor, Peek Pro)", "First aid certification and crowd management"], soft: ["Dynamic public speaking and storytelling", "Reading and adapting to diverse group energy", "Multilingual communication", "Improvisation and managing the unexpected"] },
    whereYoudWork: ["Tour operating companies in major cities", "National parks and heritage sites", "Museum and cultural institution education departments", "Cruise ship shore excursion teams"],
  },
  "hosp-event-planner": {
    typicalDay: "You lead a venue site inspection for a 400-person conference, reviewing AV setups, catering staging, and accessibility logistics. Back at the office, you build a production timeline in Asana, negotiate linen rental costs, and run a final walkthrough call with the client to confirm room layout.",
    realWorldImpact: "You execute a flawless 1,000-person gala that raises $2 million for a children's hospital, or you coordinate a multi-city product launch that generates $5 million in first-week sales.",
    skills: { technical: ["Event management platforms (Cvent, Eventbrite, Social Tables)", "Budget tracking and vendor contract management", "AV and production specifications", "Catering and floor plan logistics software"], soft: ["Meticulous organization and multitasking", "Vendor negotiation and relationship management", "Calm crisis management on event day", "Client communication and expectation-setting"] },
    whereYoudWork: ["Corporate event and meeting planning firms", "Hotel and resort event sales departments", "Nonprofit and fundraising organizations", "Independent event planning businesses"],
  },
  "hosp-sports-manager": {
    typicalDay: "You coordinate travel logistics for a collegiate basketball team's away tournament while managing budget approvals. You review athlete eligibility compliance reports, meet with a sponsorship partner about a co-branded promotion, and attend an evening game to oversee operations.",
    realWorldImpact: "Your facility management improvements reduce injury rates by creating safer training environments, or your sponsorship deal funds full scholarships for six student athletes.",
    skills: { technical: ["Sports management software (TeamWorks, Front Rush)", "Athletic compliance and eligibility tracking", "Budget and financial management", "Facility scheduling and operations tools"], soft: ["Organizational leadership across programs", "Negotiation with vendors and sponsors", "Relationship management with coaches and athletes", "Regulatory knowledge (NCAA, conference rules)"] },
    whereYoudWork: ["University and college athletic departments", "Professional sports franchises", "Sports marketing and management agencies", "Recreation and community sports organizations"],
  },
  "hosp-fitness-trainer": {
    typicalDay: "You lead three one-on-one personal training sessions in the morning — designing workouts, cueing form corrections, and adjusting intensity based on client feedback. Midday you teach a group HIIT class, then spend the afternoon creating a 12-week progressive program for a new client with a knee injury history.",
    realWorldImpact: "You help a 55-year-old client lose 40 pounds and come off blood pressure medication, or train a high school athlete whose improved conditioning earns them a college scholarship.",
    skills: { technical: ["Exercise programming and periodization", "Client tracking software (TrueCoach, Trainerize)", "Anatomy, kinesiology, and injury prevention", "NASM, ACE, or NSCA certification knowledge"], soft: ["Motivating and holding clients accountable", "Adapting communication to diverse clients", "Empathy for physical and emotional barriers", "Professionalism and consistency"] },
    whereYoudWork: ["Commercial gyms and fitness chains", "Private personal training studios", "Corporate wellness and on-site gym facilities", "Sports performance training centers"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 13 — Communications & Media
  // ══════════════════════════════════════════
  "comm-journalist": {
    typicalDay: "You scan police scanners, source tips, and review public records in the morning, then conduct interviews for a breaking story. You write and file a 600-word article by a 3 p.m. deadline in your CMS, then pitch tomorrow's stories in an afternoon editorial meeting.",
    realWorldImpact: "Your six-month investigation into city contract fraud leads to the indictment of a public official and millions of dollars returned to taxpayers.",
    skills: { technical: ["CMS platforms (WordPress, Arc Publishing)", "Public records research (PACER, FOIA requests)", "AP Style writing", "Audio and photo capture for digital publishing"], soft: ["Source cultivation and trust-building", "Accuracy and rigorous fact-checking", "Persistence in pursuing reluctant sources", "Storytelling under deadline pressure"] },
    whereYoudWork: ["Daily and weekly newspapers", "Digital news publications", "Local and network TV news", "Nonprofit investigative journalism outlets"],
  },
  "comm-broadcast-anchor": {
    typicalDay: "You arrive two hours before airtime to review wire feeds, rewrite scripts for your on-air voice, and review packages with producers. You anchor two live newscasts, conducting impromptu live interviews and staying calm through breaking news. After the show, you record social video teases for the station's digital platforms.",
    realWorldImpact: "Your clear, calm coverage during a major local emergency keeps thousands of residents informed and directs them to safety resources.",
    skills: { technical: ["Teleprompter and live broadcast studio operation", "Script writing and rundown management (iNews, ENPS)", "Live shot and IFB earpiece communication", "Social media content for broadcast platforms"], soft: ["Composure under live, unscripted conditions", "Clear and authoritative on-air presence", "Quick script rewriting and editorial judgment", "Collaboration with producers and camera operators"] },
    whereYoudWork: ["Local TV news stations", "Cable news networks", "Network affiliate newsrooms", "Streaming news platforms"],
  },
  "comm-podcast-host": {
    typicalDay: "You spend the morning researching a guest's background and drafting interview questions, then record a 60-minute conversation using Riverside.fm. In the afternoon, you edit the session in Adobe Audition, write show notes, and schedule the episode for release through your hosting platform.",
    realWorldImpact: "Your independently produced podcast grows to 200,000 monthly listeners, influencing discourse in your industry. Your interview with a little-known researcher exposes their work to an audience that leads to a major grant.",
    skills: { technical: ["Audio recording and editing (Adobe Audition, Descript)", "Remote recording platforms (Riverside.fm, Squadcast)", "Podcast hosting and distribution (Buzzsprout, Libsyn)", "Audience analytics and SEO for podcasts"], soft: ["Engaging conversational interviewing", "Audience engagement and community building", "Consistent content production", "Brand development and marketing"] },
    whereYoudWork: ["Independent self-production setups", "Media companies and news organizations", "Corporate communications and content marketing teams", "University and nonprofit communications departments"],
  },
  "comm-pr-specialist": {
    typicalDay: "You draft and pitch a press release about a client's product launch to 30 targeted journalists using Cision, then follow up with key media contacts. You monitor brand mentions using Meltwater, prepare a media coverage report, and help draft talking points for a CEO before a television interview.",
    realWorldImpact: "Your earned media campaign generates $500,000 in equivalent advertising value for a nonprofit. Your crisis communications strategy successfully protects a company's reputation after a product recall.",
    skills: { technical: ["Media database and outreach tools (Cision, Meltwater, MuckRack)", "Press release writing in AP Style", "Media monitoring and reporting platforms", "Social media and crisis communications"], soft: ["Relationship building with journalists", "Persuasive and concise written pitching", "Calm strategic thinking during crises", "Client management and expectation-setting"] },
    whereYoudWork: ["PR and communications agencies", "Corporate communications departments", "Nonprofit advocacy organizations", "Government and public affairs offices"],
  },
  "comm-speechwriter": {
    typicalDay: "You interview a CEO for 45 minutes to capture her voice and key positions, then draft a keynote address with section-by-section delivery notes. You revise the speech through three rounds of feedback, research supporting statistics, and attend the final rehearsal to suggest on-the-fly edits.",
    realWorldImpact: "The commencement address you write is shared thousands of times and inspires a generation of graduates. Legislative testimony you draft directly influences a committee's policy vote.",
    skills: { technical: ["AP and Chicago Style research and citation", "Rhetorical structure and speechwriting conventions", "Research using legislative and academic databases", "Teleprompter script formatting"], soft: ["Voice-matching and capturing authentic tone", "Active listening and extracting key narratives", "Collaborative editing under time pressure", "Discretion with sensitive content"] },
    whereYoudWork: ["Political campaigns and government offices", "Corporate C-suite executive offices", "Nonprofit and advocacy organizations", "PR and communications consulting firms"],
  },
  "comm-technical-writer": {
    typicalDay: "You meet with software engineers to understand a new API feature, then draft user-facing documentation and code examples in a docs-as-code workflow using Markdown and GitHub. You edit a colleague's user manual for clarity, create annotated screenshots in Snagit, and publish updates to a docs site.",
    realWorldImpact: "Your clear API documentation reduces developer support tickets by 35%, saving hundreds of engineering hours. Your rewritten medical device manual eliminates user errors that had been causing equipment damage.",
    skills: { technical: ["Markdown and docs-as-code workflows (GitHub, GitLab)", "Screen capture and annotation tools (Snagit, Figma)", "Static site generators (MkDocs, Docusaurus, Sphinx)", "DITA, XML, and structured authoring tools"], soft: ["Translating complex concepts for non-expert audiences", "Asking precise clarifying questions", "Meticulous attention to accuracy", "Prioritizing information architecture and usability"] },
    whereYoudWork: ["Software and SaaS companies", "Medical device and pharmaceutical firms", "Aerospace and defense contractors", "Government agencies producing regulatory documentation"],
  },
  "comm-digital-marketer": {
    typicalDay: "You review Google Analytics and Meta Ads Manager dashboards to assess campaign performance, then adjust ad targeting and reallocate budget from underperforming to high-converting ad sets. You brief a designer on new creative assets, write copy for an email sequence in Klaviyo, and present a monthly performance report.",
    realWorldImpact: "Your optimized paid social campaign drives a 4x return on ad spend during peak season, generating $400,000 in incremental revenue. Your SEO strategy increases organic traffic to a nonprofit's donation page by 180%.",
    skills: { technical: ["Google Ads and Meta Ads Manager", "SEO tools (Ahrefs, SEMrush)", "Email marketing platforms (Klaviyo, Mailchimp)", "Analytics and attribution (Google Analytics 4, Looker Studio)"], soft: ["Data-driven decision-making", "Creative copywriting and messaging", "Client communication and results presentation", "Adaptability to changing platform algorithms"] },
    whereYoudWork: ["Digital marketing agencies", "In-house brand marketing teams", "E-commerce companies", "Startups and tech companies"],
  },
  "comm-ux-writer": {
    typicalDay: "You join a product design sprint to write UI copy for onboarding flows — crafting button labels, error messages, and tooltip text. You review copy in Figma mockups for tone consistency, collaborate with engineers on character limits, and run an A/B test on two versions of an empty state screen.",
    realWorldImpact: "Your rewritten error messages reduce user drop-off during checkout by 22%, directly increasing conversion revenue. Your plain-language onboarding copy cuts customer support requests for a new feature by half.",
    skills: { technical: ["Figma and collaborative design tools", "Content management and style guide maintenance", "A/B testing and analytics platforms", "Accessibility and plain language writing (WCAG)"], soft: ["Empathy for user confusion and frustration", "Advocacy for clarity in design discussions", "Precision in writing with tight character constraints", "Collaboration with designers, PMs, and engineers"] },
    whereYoudWork: ["Tech companies and SaaS platforms", "E-commerce and fintech firms", "Design agencies with product clients", "Large enterprises modernizing digital products"],
  },
  "comm-translator": {
    typicalDay: "You work in CAT software like SDL Trados or memoQ, translating a 3,000-word legal contract from Spanish to English while consulting a specialized glossary. You review a colleague's medical translation for accuracy, then do consecutive interpretation for a 90-minute business negotiation via video conference.",
    realWorldImpact: "Your accurate translation of pharmaceutical trial documentation ensures regulators in three countries review identical protocols. Your interpretation during an asylum hearing allows a refugee to accurately convey their story to a judge.",
    skills: { technical: ["CAT tools (SDL Trados, memoQ, OmegaT)", "Terminology management databases", "Simultaneous and consecutive interpretation", "Specialized domain knowledge (legal, medical, technical)"], soft: ["Precision and obsessive attention to nuance", "Cultural competency beyond literal translation", "Concentration during long interpretation sessions", "Research and self-correction habits"] },
    whereYoudWork: ["Language services companies (LSPs)", "International organizations and the UN system", "Federal courts and legal firms", "Hospitals and medical centers"],
  },

  // ══════════════════════════════════════════
  // CLUSTER 14 — Manufacturing & Transportation
  // ══════════════════════════════════════════
  "mfg-industrial-engineer": {
    typicalDay: "You time-study a production line to identify bottlenecks, mapping the workflow in a value stream map. You run a simulation in Arena software to model a proposed layout change, present data-backed recommendations to plant management, and work with operators to pilot a kaizen improvement.",
    realWorldImpact: "Your lean manufacturing redesign of an automotive assembly line reduces waste by 18% and increases daily output by 300 units, saving the facility $1.2 million annually.",
    skills: { technical: ["Value stream mapping and lean manufacturing", "Simulation software (Arena, FlexSim)", "AutoCAD and facility layout design", "Statistical process control (SPC) and Six Sigma"], soft: ["Data analysis and presenting to leadership", "Collaborative problem-solving with frontline workers", "Systems thinking across production flows", "Change management and process adoption"] },
    whereYoudWork: ["Automotive and aerospace manufacturing plants", "Consumer goods production facilities", "Hospital and healthcare systems operations", "Supply chain and logistics companies"],
  },
  "mfg-cnc-machinist": {
    typicalDay: "You review engineering blueprints and set up a 5-axis CNC milling machine, loading the correct tooling, inputting G-code programs, and setting work offsets. You run a first-article inspection using micrometers and CMMs, adjust tool wear offsets to maintain tolerances, and document quality results.",
    realWorldImpact: "You machine a critical titanium component for a commercial aircraft landing gear assembly that must hold tolerances of plus or minus 0.0005 inches, directly contributing to flight safety for thousands of passengers.",
    skills: { technical: ["CNC programming (G-code and M-code)", "CAM software (Mastercam, Fusion 360 CAM)", "Precision metrology tools (micrometers, CMM, gauge blocks)", "Blueprint reading and GD&T interpretation"], soft: ["Meticulous attention to dimensional accuracy", "Troubleshooting unexpected tool behavior", "Patience for long setup processes", "Communication with quality engineers"] },
    whereYoudWork: ["Precision machining job shops", "Aerospace and defense manufacturers", "Medical device manufacturers", "Automotive and industrial equipment makers"],
  },
  "mfg-quality-engineer": {
    typicalDay: "You analyze production line defect data in Minitab, run a statistical control chart to detect an out-of-control process, and initiate a corrective action using your company's CAPA system. You lead an FMEA review meeting, then audit a supplier's quality management system against ISO 9001.",
    realWorldImpact: "You identify a subtle measurement system error causing a 3% defect rate, implement a corrective action that eliminates it, and save the company $800,000 annually in scrap and rework.",
    skills: { technical: ["Statistical software (Minitab, JMP)", "Quality management systems (ISO 9001, IATF 16949)", "Measurement system analysis (MSA/Gage R&R)", "FMEA, PPAP, and CAPA processes"], soft: ["Analytical thinking and root cause investigation", "Cross-functional influence", "Clear technical documentation", "Meticulous attention to standards"] },
    whereYoudWork: ["Automotive and aerospace manufacturers", "Medical device companies", "Food and pharmaceutical production facilities", "Electronics and semiconductor fabs"],
  },
  "mfg-3d-printing": {
    typicalDay: "You convert a CAD model into optimized print files, selecting layer height, infill patterns, and support strategies for a complex titanium bracket. You monitor a build on a metal powder bed fusion printer, perform post-processing like heat treatment and surface finishing, and document results.",
    realWorldImpact: "You produce a custom implant for a patient with a rare jaw defect using 3D-printed titanium that fits perfectly and integrates with bone, restoring function in a way no standard implant could achieve.",
    skills: { technical: ["3D slicer and build preparation software (Materialise Magics, PrusaSlicer)", "FDM, SLA, SLS, and metal AM process knowledge", "Post-processing techniques (sintering, finishing, annealing)", "CAD tools (SolidWorks, Fusion 360)"], soft: ["Problem-solving for first-of-kind challenges", "Detail-oriented troubleshooting of print failures", "Collaboration with engineers and designers", "Iterative experimentation mindset"] },
    whereYoudWork: ["Aerospace and defense additive manufacturing centers", "Medical device and orthopedic implant manufacturers", "Rapid prototyping and product development studios", "Academic and research institutions"],
  },
  "mfg-logistician": {
    typicalDay: "You analyze inventory levels and reorder points in an ERP system like SAP, then coordinate with freight brokers to optimize shipping routes. You track a delayed inbound shipment through a TMS, communicate the impact to production planning, and run a cost analysis on switching shipping modes.",
    realWorldImpact: "Your logistics optimization reduces a manufacturer's average delivery lead time from 8 days to 4 days while cutting freight costs by 12%, improving customer satisfaction and profitability.",
    skills: { technical: ["ERP systems (SAP, Oracle, NetSuite)", "Transportation management systems (TMS)", "Supply chain data analysis (Excel, Power BI)", "Inventory optimization and demand planning"], soft: ["Multi-variable problem-solving under pressure", "Negotiation with carriers and 3PLs", "Cross-functional communication with operations and sales", "Contingency planning for supply disruptions"] },
    whereYoudWork: ["Manufacturing company supply chain departments", "Third-party logistics (3PL) companies", "Retail and e-commerce distribution operations", "Defense and government logistics agencies"],
  },
  "mfg-warehouse-manager": {
    typicalDay: "You start the day reviewing a picking productivity dashboard in your WMS, then address a receiving backlog by reassigning labor. You audit a section of the warehouse for OSHA compliance, meet with the operations director on throughput targets, and implement a new slotting strategy to reduce picker travel distance.",
    realWorldImpact: "You implement a pick-to-light system that reduces picking error rates by 60%, saving tens of thousands of dollars in returns and reshipping costs annually.",
    skills: { technical: ["Warehouse management systems (Manhattan WMS, SAP EWM)", "Labor management and productivity metrics", "OSHA safety regulations and compliance", "Forklift certification and material handling equipment"], soft: ["Frontline team leadership and coaching", "Problem-solving under daily operational pressure", "Clear communication across shift teams", "Accountability and safety culture building"] },
    whereYoudWork: ["E-commerce fulfillment centers", "Manufacturing plant warehouses", "Third-party logistics (3PL) facilities", "Retail distribution centers"],
  },
  "mfg-purchasing-agent": {
    typicalDay: "You analyze spend data in procurement software like Coupa, then negotiate pricing and lead times with three competing vendors for a critical component. You issue purchase orders, track open orders for on-time delivery, and collaborate with engineering to qualify a new supplier.",
    realWorldImpact: "Your competitive bidding process saves your company $1.8 million annually, or you qualify a backup supplier that prevents a production shutdown when your primary vendor has a disruption.",
    skills: { technical: ["Procurement platforms (Coupa, SAP Ariba, Oracle)", "Spend analysis and cost modeling", "Contract negotiation and supplier agreements", "Supply risk assessment tools"], soft: ["Negotiation and vendor relationship management", "Strategic thinking about cost vs. risk", "Attention to contract terms and compliance", "Cross-functional alignment with engineering and operations"] },
    whereYoudWork: ["Manufacturing company procurement departments", "Healthcare system supply chain offices", "Government and defense acquisition agencies", "Retail and consumer goods companies"],
  },
  "mfg-pilot": {
    typicalDay: "You complete a pre-flight inspection using a standardized checklist, review weather briefings and NOTAMs, and file an IFR flight plan. You communicate with ATC throughout climb, cruise, and approach, manage an unexpected turbulence diversion, and complete post-flight paperwork in the airline's crew management system.",
    realWorldImpact: "Your calm decision-making during an uncommanded engine alert leads to a safe precautionary landing that protects 76 passengers and crew from harm.",
    skills: { technical: ["Glass cockpit avionics and FMS programming", "IFR and instrument approach procedures", "Weather interpretation (METARs, TAFs, radar)", "CRM (Crew Resource Management) protocols"], soft: ["Calm, decisive judgment under pressure", "Clear and precise radio communication", "Crew coordination and shared situational awareness", "Disciplined adherence to checklists and procedures"] },
    whereYoudWork: ["Regional and major commercial airlines", "Cargo and freight operators (FedEx, UPS)", "Charter and business aviation companies", "Military aviation branches"],
  },
  "mfg-air-traffic": {
    typicalDay: "You work a busy approach control sector, issuing altitude assignments, speed restrictions, and sequencing instructions to 15 aircraft simultaneously. You coordinate hand-offs with en route center controllers, manage a pilot-declared fuel emergency by prioritizing the aircraft for immediate landing, and conduct a post-shift debrief.",
    realWorldImpact: "Your efficient traffic sequencing allows an airport to process 60 aircraft per hour with zero conflicts. Your immediate response to a medical emergency declaration ensures a diverted aircraft lands 12 minutes faster, potentially saving a life.",
    skills: { technical: ["Radar and STARS/ERAM ATC systems", "FAA phraseology and radio communication standards", "Traffic flow management and sequencing", "Emergency and abnormal procedure protocols"], soft: ["Extreme concentration under high workload", "Rapid, confident decision-making", "Precise and unambiguous verbal communication", "Stress management during multi-aircraft emergencies"] },
    whereYoudWork: ["FAA Terminal Radar Approach Control (TRACON) facilities", "FAA Air Route Traffic Control Centers (ARTCCs)", "Airport towers (ATCT)", "Department of Defense ATC facilities"],
  },
  "mfg-ship-captain": {
    typicalDay: "You review weather routing and tidal charts before departing a container port, then navigate a 900-foot vessel through a busy shipping channel using ECDIS electronic charts and radar. At sea, you manage crew scheduling, review cargo stability calculations, conduct safety drills, and maintain the ship's official log.",
    realWorldImpact: "Your navigation decisions during a North Atlantic storm safely route a vessel around severe weather, protecting 22 crew members and $180 million in cargo from harm.",
    skills: { technical: ["ECDIS and electronic navigation systems", "GMDSS maritime communications", "Cargo stowage and stability software", "IMO SOLAS and MARPOL regulatory compliance"], soft: ["Command authority and crew leadership", "Calm judgment in heavy weather", "Clear communication with port authorities", "Long-horizon planning for multi-week passages"] },
    whereYoudWork: ["Container shipping and bulk carrier companies", "Tanker and LNG vessel operators", "Cruise lines", "US Navy and Coast Guard"],
  },
  "mfg-truck-driver": {
    typicalDay: "You perform a pre-trip inspection of your tractor-trailer — checking tires, brakes, lights, and fluid levels — then log on to your ELD and review dispatch instructions. You navigate a 400-mile haul using a truck-specific GPS, manage a tight dock appointment at a distribution center, and complete a post-trip inspection.",
    realWorldImpact: "You reliably transport refrigerated pharmaceutical products across three states overnight, ensuring hospitals receive time-sensitive medications, or your consistent on-time deliveries keep a just-in-time manufacturer's assembly line running.",
    skills: { technical: ["Electronic logging device (ELD) and HOS compliance", "Truck-specific navigation systems", "Pre- and post-trip inspection procedures (FMCSA)", "Air brake systems and trailer coupling"], soft: ["Self-discipline over long solo shifts", "Patience and spatial awareness in tight docks", "Alertness and hazard recognition", "Professional communication with dispatchers"] },
    whereYoudWork: ["Long-haul and over-the-road trucking carriers", "Regional LTL freight companies", "Private carrier fleets (retail, food and beverage)", "Specialized and hazmat transport companies"],
  },
};
