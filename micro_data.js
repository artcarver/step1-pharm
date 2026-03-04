const MICRO = {

bacteria: [
  {
    group: "Gram-Positive Cocci",
    color: "bact",
    organisms: [
      {
        name: "Staphylococcus aureus",
        summary: "Catalase+ coagulase+ — MRSA, toxic shock, scalded skin, food poisoning, endocarditis",
        tier: 1,
        gram: "GP Cocci (clusters)",
        tags: ["MRSA","Endocarditis","Osteomyelitis","Food Poisoning","Toxic Shock"],
        virulence: "**Protein A** (binds IgG Fc, evades opsonization) · **Coagulase** (fibrin clot formation) · **Leukocidin** (PVL — destroys WBCs) · **Exotoxins:** TSST-1 (superantigen→TSS), exfoliatin (cleaves desmoglein-1 → SSSS), enterotoxin (heat-stable → food poisoning)",
        disease: "Skin/soft tissue: folliculitis, furuncles, carbuncles, impetigo (crusted). Systemic: bacteremia, endocarditis (IV drug users → **tricuspid**), osteomyelitis (most common cause overall), septic arthritis. Toxin-mediated: TSS (tampon, wound), SSSS (neonates/immunocompromised), food poisoning (preformed toxin, 1–6h onset, N/V/D, no fever)",
        tx: "MSSA: nafcillin/oxacillin. MRSA: **vancomycin** (hospital) or TMP-SMX/doxycycline (community). Endocarditis: add gentamicin. SSSS: supportive + antistaphylococcal abx.",
        pearl: "**MRSA trap:** β-lactams and cephalosporins are useless against MRSA — altered PBP2a (mecA gene). The 'best initial test' for S. aureus food poisoning is clinical — don't culture stool, the toxin is preformed. **Novobiocin-sensitive** (distinguishes S. epidermidis from S. saprophyticus which is novobiocin-resistant)."
      },
      {
        name: "Staphylococcus epidermidis",
        summary: "Coagulase-negative — infects prosthetic valves/joints/catheters via biofilm. Novobiocin-sensitive",
        tier: 2,
        gram: "GP Cocci (clusters)",
        tags: ["Prosthetic Valve","Biofilm","Catheter Infection"],
        virulence: "**Biofilm formation** on prosthetic material (polysaccharide slime layer) — resistant to antibiotics and phagocytosis",
        disease: "Prosthetic valve endocarditis (#1 cause within 1st year), infected joint prostheses, IV catheter infections, VP shunt infections. A common blood culture contaminant — requires **2 positive cultures** to be significant.",
        tx: "Vancomycin ± rifampin (rifampin penetrates biofilm). Remove device if possible.",
        pearl: "**Device bug:** any infection of a prosthetic device or indwelling catheter → think S. epidermidis. Distinguished from S. saprophyticus by **novobiocin sensitivity** (epidermidis is sensitive). Multiple blood cultures growing S. epidermidis = NOT a contaminant."
      },
      {
        name: "Staphylococcus saprophyticus",
        summary: "Novobiocin-resistant — #2 cause of UTI in young sexually active women (after E. coli)",
        tier: 2,
        gram: "GP Cocci (clusters)",
        tags: ["UTI","Young Women"],
        virulence: "Urease production, surface adhesins for uroepithelium",
        disease: "Uncomplicated cystitis in young sexually active women. Presents with dysuria, frequency, pyuria. Urinalysis: WBCs, GP cocci in clusters.",
        tx: "TMP-SMX or nitrofurantoin (same as E. coli UTI). Fluoroquinolones are alternative.",
        pearl: "**Classic vignette:** young woman, sexually active, UTI with GP cocci on urinalysis. The key distinguisher: **novobiocin-resistant** (S. epidermidis is sensitive). Think 'Sapphire → Sexy young woman with UTI.'"
      },
      {
        name: "Streptococcus pyogenes (Group A Strep)",
        summary: "β-hemolytic, bacitracin-sensitive — pharyngitis, impetigo, rheumatic fever, PSGN, necrotizing fasciitis",
        tier: 1,
        gram: "GP Cocci (chains)",
        tags: ["Pharyngitis","Rheumatic Fever","PSGN","Necrotizing Fasciitis","Scarlet Fever"],
        virulence: "**M protein** (antiphagocytic, anti-complement) · Streptolysin O/S (β-hemolysis, ASO titer) · Streptokinase · Hyaluronidase ('spreading factor') · Pyrogenic exotoxins A/B/C (superantigens → scarlet fever, TSS)",
        disease: "Pharyngitis (exudative, no cough, tonsillar exudates, fever, cervical LAD). Impetigo (honey-crusted lesions — non-bullous). Scarlet fever (sandpaper rash, strawberry tongue, Pastia lines). Cellulitis/erysipelas. Necrotizing fasciitis ('flesh-eating bacteria' — surgical emergency). Post-streptococcal: **rheumatic fever** (Jones criteria — molecular mimicry of M protein → cardiac valves, esp. mitral) and **PSGN** (immune complex type III).",
        tx: "**Penicillin** (drug of choice — never develops resistance). Amoxicillin for pharyngitis. Clindamycin for invasive disease (inhibits toxin synthesis). Treat pharyngitis to prevent rheumatic fever (NOT PSGN).",
        pearl: "**ASO titer** rises after pharyngitis (strep O) but NOT after impetigo (strep S) — anti-DNase B better for impetigo. **Rheumatic fever vs PSGN:** RF → follows pharyngitis only, prevented by antibiotics. PSGN → follows pharyngitis OR impetigo, NOT prevented by antibiotics. Latency: PSGN 1–3 weeks post-pharyngitis, 3–6 weeks post-impetigo."
      },
      {
        name: "Streptococcus agalactiae (Group B Strep)",
        summary: "β-hemolytic, CAMP test positive — #1 neonatal meningitis/sepsis, maternal UTI/chorioamnionitis",
        tier: 2,
        gram: "GP Cocci (chains)",
        tags: ["Neonatal Meningitis","Neonatal Sepsis","GBS Screening"],
        virulence: "Polysaccharide capsule (antiphagocytic), CAMP factor (↑ beta-hemolysis of S. aureus)",
        disease: "**Neonates:** Early-onset (0–7d): pneumonia, sepsis — from maternal colonization. Late-onset (7d–3mo): meningitis, bacteremia. **Adults:** UTI in pregnant women, chorioamnionitis, postpartum endometritis, bacteremia in elderly/diabetics.",
        tx: "Ampicillin (drug of choice). **GBS screen at 35–37 weeks** — if positive, give intrapartum ampicillin IV.",
        pearl: "**CAMP test:** GBS produces CAMP factor which enhances S. aureus hemolysis → arrowhead hemolysis on agar. #1 cause of neonatal meningitis overall (vs. L. monocytogenes which is #1 in immunocompromised neonates). Hippurate hydrolysis positive."
      },
      {
        name: "Streptococcus pneumoniae",
        summary: "α-hemolytic, lancet-shaped diplococci, optochin-sensitive — #1 meningitis/pneumonia/otitis/sinusitis in adults",
        tier: 1,
        gram: "GP Diplococci (lancet-shaped)",
        tags: ["Pneumonia","Meningitis","Otitis Media","Sinusitis","Asplenia"],
        virulence: "**Polysaccharide capsule** (major virulence — prevents phagocytosis; opsonization requires IgG or C3b). IgA protease. Pneumolysin.",
        disease: "**Most common cause of:** community-acquired pneumonia (lobar), bacterial meningitis (adults >50), otitis media, sinusitis. Bacteremia in asplenic patients (most feared — also H. influenzae and N. meningitidis). Endocarditis is rare but can cause valvular destruction.",
        tx: "Penicillin (if susceptible). Resistant strains: ceftriaxone or vancomycin. Meningitis: ceftriaxone + vancomycin + dexamethasone (↓ hearing loss). **Vaccines:** PCV13 (children), PPSV23 (adults >65, asplenic, immunocompromised).",
        pearl: "**Optochin sensitivity** differentiates S. pneumoniae from S. viridans (viridans is resistant). **Quellung reaction:** capsule swells with type-specific antibody — used for identification. Asplenic patients are **most susceptible to encapsulated organisms:** S. pneumoniae > H. influenzae > N. meningitidis → 'SHiN'."
      },
      {
        name: "Streptococcus viridans",
        summary: "α-hemolytic, optochin-RESISTANT — #1 subacute bacterial endocarditis (native valve, prior damage)",
        tier: 2,
        gram: "GP Cocci (chains)",
        tags: ["Subacute Endocarditis","Dental Procedures","Dental Caries"],
        virulence: "**Dextran** (glucan) production — adheres to fibrin-platelet thrombi on damaged valves. S. mutans: dextran promotes dental caries.",
        disease: "**Subacute endocarditis** on previously damaged valves (MVP, RHD) — after dental procedures. Symptoms insidious (weeks–months): fever, weight loss, Osler nodes, Roth spots, Janeway lesions, splinter hemorrhages. S. mutans: dental caries (ferments sucrose → lactic acid).",
        tx: "Penicillin + gentamicin. **Endocarditis prophylaxis** for high-risk cardiac lesions: amoxicillin 1h before dental procedure.",
        pearl: "**Viridans vs pneumoniae:** Both α-hemolytic, but viridans is optochin-resistant and bile-insoluble. S. bovis endocarditis (group D strep) → strongly associated with **colorectal carcinoma** — colonoscopy is mandatory."
      },
      {
        name: "Enterococcus",
        summary: "Group D, bile-tolerant, grows in 6.5% NaCl — UTI, biliary, nosocomial endocarditis; VRE is multi-drug resistant",
        tier: 2,
        gram: "GP Cocci (pairs/chains)",
        tags: ["UTI","Endocarditis","VRE","Nosocomial"],
        virulence: "Intrinsic resistance to many antibiotics; acquires vancomycin resistance (VRE — vanA/vanB genes)",
        disease: "UTI (especially catheter-associated), biliary infections, nosocomial bacteremia and endocarditis. E. faecalis (90%) > E. faecium. VRE is major nosocomial threat in ICU/immunocompromised.",
        tx: "**E. faecalis:** ampicillin (± gentamicin for endocarditis — synergy). **VRE:** linezolid or daptomycin. Enterococcus is intrinsically resistant to cephalosporins and TMP-SMX.",
        pearl: "**Classic exam trap:** Enterococcus is **NOT killed by penicillin alone** — bacteriostatic only; need ampicillin + aminoglycoside for bactericidal effect (endocarditis). Distinguishable from S. bovis: Enterococcus grows in **6.5% NaCl** (S. bovis does not). PYR test positive."
      }
    ]
  },
  {
    group: "Gram-Positive Bacilli",
    color: "bact",
    organisms: [
      {
        name: "Bacillus anthracis",
        summary: "Anthrax — spore-forming, large GP rod with antiphagocytic capsule; cutaneous, inhalation, GI forms",
        tier: 2,
        gram: "GP Bacillus (spore-forming)",
        tags: ["Anthrax","Bioterrorism","Woolsorter's Disease"],
        virulence: "**Poly-D-glutamate capsule** (antiphagocytic) · **Anthrax toxin:** protective antigen (PA) + edema factor (EF = adenylate cyclase → ↑cAMP) + lethal factor (LF = metalloprotease → MAPK disruption → cell death)",
        disease: "**Cutaneous anthrax** (95%): painless papule → necrotic black eschar (malignant pustule) — contact with infected animals/hides. **Inhalation anthrax** (woolsorter's disease): mediastinal widening on CXR, hemorrhagic mediastinitis, high mortality. **GI:** from contaminated meat.",
        tx: "Ciprofloxacin or doxycycline. Post-exposure prophylaxis: ciprofloxacin + anthrax vaccine. **Bioterrorism agent** (Category A).",
        pearl: "**Mediastinal widening** on CXR in an otherwise healthy person + flu-like prodrome = inhalation anthrax until proven otherwise. B. cereus causes **food poisoning** — two forms: emetic (rice, 1–6h, preformed toxin) and diarrheal (8–16h). Germinate in intestine."
      },
      {
        name: "Clostridium tetani",
        summary: "Tetanospasmin — rusted nail/wound, opisthotonos, trismus, risus sardonicus; prevent with Td vaccine",
        tier: 1,
        gram: "GP Bacillus (anaerobic, spore-forming)",
        tags: ["Tetanus","Spastic Paralysis","Trismus"],
        virulence: "**Tetanospasmin** (tetanus toxin) — cleaves SNARE proteins at inhibitory interneurons in spinal cord → blocks glycine/GABA release → **disinhibited excitatory** neurons → spastic paralysis",
        disease: "**Generalized tetanus:** trismus (lockjaw) → risus sardonicus (sardonic smile) → opisthotonus (board-like back arching) → autonomic instability. **Neonatal tetanus:** umbilical stump infection in unvaccinated mothers. **Local tetanus:** localized rigidity near wound. **Cephalic tetanus:** cranial nerve involvement.",
        tx: "**TIG (tetanus immunoglobulin)** — neutralizes unbound toxin. Metronidazole (kills organism). Muscle relaxants (benzodiazepines, baclofen). **Prophylaxis:** Td booster if wound + not vaccinated in 5 years (dirty) or 10 years (clean).",
        pearl: "**MOA key:** tetanospasmin travels retrograde to spinal cord and blocks **inhibitory** interneurons (Renshaw cells) → spastic paralysis. Contrast with **botulinum toxin** which blocks **excitatory** (ACh release at NMJ) → flaccid paralysis. 'Tetanus = Tense; Botulism = Botulinum = Baggy (flaccid).'"
      },
      {
        name: "Clostridium botulinum",
        summary: "Botulinum toxin blocks ACh release at NMJ — descending flaccid paralysis; honey for infants, canned food for adults",
        tier: 1,
        gram: "GP Bacillus (anaerobic, spore-forming)",
        tags: ["Botulism","Flaccid Paralysis","Infant Botulism","Food-borne"],
        virulence: "**Botulinum toxin** (most lethal known toxin) — cleaves SNARE proteins at NMJ → blocks **ACh release** → flaccid paralysis. Also blocks parasympathetic autonomic neurons.",
        disease: "**Food-borne:** canned/preserved food (pre-formed toxin) — descending symmetric flaccid paralysis, cranial nerve palsies (diplopia, dysarthria, dysphagia) → respiratory failure. No fever, no sensory deficit. **Infant botulism:** honey before age 1 (germination in gut) — floppy baby, constipation, poor suck. **Wound botulism:** IV drug users.",
        tx: "**Antitoxin** (heptavalent). Supportive care (mechanical ventilation if needed). For infant botulism: **BabyBIG** (botulism immunoglobulin IV). **NOT** antibiotics (releasing toxin can worsen).",
        pearl: "**Classic infant botulism:** 'floppy baby' who can't nurse and is constipated — **honey exposure**. Normal EMG → repetitive nerve stimulation → **incremental response** (unlike MG which shows decremental). The 'DDD' presentation: Descending, Diplopia/Dysarthria/Dysphagia, Dilated pupils."
      },
      {
        name: "Clostridium difficile",
        summary: "Pseudomembranous colitis — antibiotic-disrupted flora; toxin A (enterotoxin) + toxin B (cytotoxin); treat with fidaxomicin/vancomycin (PO)",
        tier: 1,
        gram: "GP Bacillus (anaerobic, spore-forming)",
        tags: ["C. diff","Pseudomembranous Colitis","Antibiotic-Associated Diarrhea","Nosocomial"],
        virulence: "**Toxin A** (enterotoxin): fluid secretion, mucosal damage. **Toxin B** (cytotoxin): actin depolymerization → cell death (more important clinically). Binary toxin in hypervirulent NAP1 strain.",
        disease: "**AAD/PMC:** watery diarrhea (rarely bloody) after antibiotics (classically clindamycin, fluoroquinolones, cephalosporins). Colonoscopy: yellowish plaques (pseudomembranes). **Toxic megacolon:** fever, ↑WBC, abdominal distension — ileus → colonic dilation > 6cm → perforation risk. **Recurrent C. diff** (15–35%): treat with fidaxomicin or fecal microbiota transplant.",
        tx: "**First episode:** fidaxomicin (preferred) or oral vancomycin (NOT IV vancomycin). Metronidazole (if severe) is now second-line. Discontinue offending antibiotic. **Recurrence:** oral vancomycin taper or FMT. **Fulminant/toxic megacolon:** IV metronidazole + PO vancomycin, surgical consult.",
        pearl: "**IV vancomycin does NOT work** for C. diff — drug doesn't reach colon lumen. Oral vancomycin works because it's not absorbed. Spores survive alcohol-based hand sanitizer → use **soap and water** for C. diff. Metronidazole now **second-line** due to inferior outcomes. Diagnosis: **toxin EIA** (fast, less sensitive) or **PCR** (more sensitive, may detect colonization)."
      },
      {
        name: "Clostridium perfringens",
        summary: "Gas gangrene (myonecrosis) + food poisoning — double-zone β-hemolysis, lecithinase (alpha toxin)",
        tier: 2,
        gram: "GP Bacillus (anaerobic, spore-forming)",
        tags: ["Gas Gangrene","Myonecrosis","Food Poisoning"],
        virulence: "**Alpha toxin (lecithinase/phospholipase C):** lyses cell membranes → gas gangrene. **Enterotoxin:** food poisoning (disrupts intestinal epithelium).",
        disease: "**Gas gangrene (clostridial myonecrosis):** traumatic wounds, surgery, IVDUs. Severe pain, crepitus (gas), bronze/maroon discoloration, shock. Life-threatening — surgical emergency. **Food poisoning:** reheated meat (spores survive initial cooking, germinate) → 8–24h watery diarrhea, no fever, self-limited.",
        tx: "Gas gangrene: **emergent surgical debridement** + penicillin G (± clindamycin to ↓ toxin synthesis) + hyperbaric oxygen.",
        pearl: "**Crepitus (crackling under skin)** in a wound → gas gangrene → emergency surgical debridement. X-ray shows gas in soft tissues. **Nagler's reaction:** alpha toxin (lecithinase) causes opacity on egg yolk agar — inhibited by antitoxin on one side = double zone. Food poisoning: no fever, short incubation (8–12h) — distinguish from B. cereus (shorter) and Salmonella (fever)."
      },
      {
        name: "Corynebacterium diphtheriae",
        summary: "Diphtheria — pseudomembrane (grayish), bull neck, ADP-ribosylation of EF-2 → exotoxin; treat with antitoxin + erythromycin",
        tier: 2,
        gram: "GP Bacillus (non-spore, club-shaped)",
        tags: ["Diphtheria","Pseudomembrane","ADP-Ribosylation","EF-2"],
        virulence: "**Diphtheria toxin** (phage-encoded): **ADP-ribosylates EF-2 (elongation factor 2)** → halts protein synthesis → cell death. A-B toxin: B binds, A is active.",
        disease: "**Pharyngeal diphtheria:** gray, adherent pseudomembrane over tonsils/pharynx that bleeds when removed. Bull neck (massive LAD). Systemic effects: myocarditis (heart block, arrhythmias — weeks later), demyelinating neuropathy (cranial nerves — palatal palsy, eye muscle weakness; peripheral neuropathy).",
        tx: "**Antitoxin first** (neutralizes free toxin — most important). Erythromycin or penicillin (kills organism). Prevention: **DTaP vaccine**.",
        pearl: "**ADP-ribosylation of EF-2** = the classic mechanism — same as Pseudomonas exotoxin A. Diphtheria toxin: B binds→A is active (A-B toxin paradigm). **Lab:** Elek test (immunodiffusion for toxin) and Löffler medium (metachromatic granules on methylene blue). Tellurite agar: gray-black colonies."
      },
      {
        name: "Listeria monocytogenes",
        summary: "Facultative intracellular, tumbling motility, grows at 4°C — meningitis in neonates/elderly/immunocompromised; raw dairy, deli meat",
        tier: 2,
        gram: "GP Bacillus (non-spore, facultative anaerobe)",
        tags: ["Neonatal Meningitis","Immunocompromised","Cold Growth","Deli Meat"],
        virulence: "**Listeriolysin O (LLO):** pore-forming toxin → escapes phagosome. **ActA:** actin polymerization → intracellular motility (actin rockets). Cold enrichment (grows at 4°C — refrigerator).",
        disease: "**Neonates** (via transplacental or birth canal): granulomatosis infantiseptica, meningitis, sepsis. **Pregnant women:** mild flu-like illness → premature labor, stillbirth, neonatal infection. **Elderly/immunocompromised (esp. T-cell deficient):** meningitis, bacteremia. **Gastroenteritis** (healthy hosts): deli meats, soft cheeses, raw sprouts.",
        tx: "**Ampicillin** (drug of choice). Add gentamicin for synergy in severe cases. **Cephalosporins do NOT cover Listeria** — important for empiric meningitis coverage in neonates/elderly: add ampicillin to ceftriaxone.",
        pearl: "**Empiric meningitis coverage:** neonates and elderly/immunocompromised must get **ampicillin added** because cephalosporins miss Listeria. Grows at **4°C** (cold enrichment) and shows **tumbling motility** at room temperature. **CAMP test positive.** β-hemolytic on blood agar."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli – Enteric",
    color: "bact",
    organisms: [
      {
        name: "Escherichia coli",
        summary: "Lac+, indole+, IMViC: ++-− — 6 pathotypes; UTI (#1), neonatal meningitis (K1 capsule), EHEC → HUS",
        tier: 1,
        gram: "GN Bacillus (lactose fermenter)",
        tags: ["UTI","HUS","Neonatal Meningitis","Travelers Diarrhea","EHEC O157:H7"],
        virulence: "**ETEC:** heat-labile (LT, ↑cAMP like cholera) + heat-stable (ST, ↑cGMP like STa) toxins. **EPEC:** effacement, no toxin. **EHEC (O157:H7):** Shiga-like toxin (verotoxin) → HUS. **EIEC:** invades colonic mucosa (like Shigella). **EAEC:** aggregative, chronic diarrhea.",
        disease: "**UTI** (#1 cause overall). **Neonatal meningitis** (K1 polysaccharide capsule — same as group B meningococcus). **Travelers diarrhea** (ETEC — watery). **HUS** (EHEC O157:H7 — **bloody diarrhea** → **no antibiotics** — ↑Shiga toxin release → microangiopathic hemolytic anemia, thrombocytopenia, acute renal failure).",
        tx: "UTI: TMP-SMX or fluoroquinolone. Travelers diarrhea (ETEC): azithromycin or fluoroquinolone. **EHEC O157:H7: NO antibiotics** (↑HUS risk). Neonatal meningitis: cefotaxime + ampicillin.",
        pearl: "**EHEC = NO antibiotics** — one of the classic Step 1 traps. Sorbitol-non-fermenting on MacConkey agar. **HUS triad:** microangiopathic hemolytic anemia + thrombocytopenia + acute kidney injury. **Shiga toxin** → inhibits 60S ribosome (cleaves 28S rRNA) → endothelial damage especially in kidney. ETEC = most common cause of travelers diarrhea."
      },
      {
        name: "Salmonella",
        summary: "H2S+, non-lactose fermenter — intracellular; typhi causes enteric fever (rose spots, Peyer's patches); non-typhi causes diarrhea from eggs/poultry",
        tier: 1,
        gram: "GN Bacillus (non-lactose fermenter)",
        tags: ["Typhoid Fever","Osteomyelitis in Sickle Cell","Non-Typhi Diarrhea","Poultry/Eggs"],
        virulence: "**Survives intracellularly** in macrophages (does not produce urease). Vi capsule in typhi. SPI-1/SPI-2 pathogenicity islands.",
        disease: "**S. typhi (typhoid/enteric fever):** 'stepladder' fever, rose spots (trunk), hepatosplenomegaly, relative bradycardia, constipation early→ diarrhea. Transmitted fecal-oral (contaminated water). Chronic carrier: gallbladder (bacteremia → bile → feces). **Non-typhi Salmonella:** food poisoning — eggs, poultry, pet reptiles. **Osteomyelitis in sickle cell disease** (most common cause).",
        tx: "Typhoid fever: **ceftriaxone or fluoroquinolone** (azithromycin if resistant). Non-typhi gastroenteritis: usually self-limited; antibiotics if bacteremia/immunocompromised.",
        pearl: "**Sickle cell + osteomyelitis = Salmonella** (most common cause — due to bone infarcts and functional asplenia). Chronic typhoid carrier state: gallbladder colonization → 'Typhoid Mary.' **No lactose fermentation** (MacConkey clear); **H2S positive** (TSI agar black precipitate). Rose spots: blanching macules on trunk in week 2."
      },
      {
        name: "Shigella",
        summary: "Non-motile, non-H2S, no lactose — invasive bloody dysentery, very low inoculum (10 organisms); Shiga toxin in S. dysenteriae",
        tier: 1,
        gram: "GN Bacillus (non-lactose fermenter)",
        tags: ["Bloody Dysentery","Shiga Toxin","Low Inoculum","Fecal-Oral"],
        virulence: "**Invasin** — invades colonic epithelium directly. **Shiga toxin** (S. dysenteriae only): inhibits 60S ribosome (same mechanism as EHEC's Shiga-like toxin). No H2S, non-motile, very low ID50 (~10 organisms).",
        disease: "**Bacillary dysentery:** fever, cramping, tenesmus, bloody mucoid diarrhea. Invades M cells in Peyer's patches → spreads cell-to-cell (actin). Complications: HUS (S. dysenteriae), reactive arthritis (HLA-B27), seizures in children (Shigella encephalopathy).",
        tx: "**Azithromycin or fluoroquinolone** (shortens duration, reduces spread). Antibiotics ARE indicated (unlike EHEC). Ciprofloxacin for adults.",
        pearl: "**Key differentiator from EHEC:** Shigella = **give antibiotics**; EHEC = **no antibiotics**. Both cause bloody diarrhea. Shigella: RBCs and WBCs on stool smear. Very low inoculum → easily spread person-to-person (daycare centers, prisons). No animal reservoir (unlike Salmonella)."
      },
      {
        name: "Klebsiella pneumoniae",
        summary: "Mucoid capsule, currant jelly sputum — pneumonia in alcoholics/diabetics; UTI; #1 nosocomial GN pneumonia",
        tier: 2,
        gram: "GN Bacillus (lactose fermenter)",
        tags: ["Pneumonia","UTI","Nosocomial","Alcoholics","Liver Abscess"],
        virulence: "**Large polysaccharide capsule** (mucoid, hyperviscous strains) → antiphagocytic. ESBL/KPC-producing strains (carbapenem-resistant).",
        disease: "**Pneumonia:** alcoholics, diabetics, COPD — lobar or multilobar, upper lobe cavitation, 'currant jelly sputum' (necrotic mucosa + blood). **UTI:** #2 gram-negative UTI after E. coli. **Liver abscess** (Klebsiella hypermucoviscous strain — endogenous/hematogenous, esp. in East Asian populations). Nosocomial bloodstream infections.",
        tx: "Cephalosporins (if susceptible). ESBL: carbapenems. Carbapenem-resistant Klebsiella (KPC): polymyxin B/colistin ± other agents.",
        pearl: "**Currant jelly sputum** = Klebsiella or Moraxella (rarely). The 'mucoviscosity test' (string sign) for hypervirulent strains. Klebsiella has a **string sign > 5mm** (mucoviscous). UTI in hospitalized patients with urinary catheter: common Klebsiella habitat."
      },
      {
        name: "Helicobacter pylori",
        summary: "Urease-positive, microaerophilic, curved rod — #1 cause of peptic ulcer disease and gastric cancer/MALT lymphoma",
        tier: 1,
        gram: "GN Bacillus (curved, microaerophilic)",
        tags: ["Peptic Ulcer","Gastric Cancer","MALT Lymphoma","Urease"],
        virulence: "**Urease** (produces NH3 → alkalinizes microenvironment → survives gastric pH) · **CagA** (cytotoxin-associated antigen — injected into cells, disrupts tight junctions, associated with malignancy) · VacA (vacuolating cytotoxin) · Flagella.",
        disease: "**Peptic ulcer disease:** antral gastritis → duodenal ulcer; body gastritis → gastric ulcer. **Gastric adenocarcinoma** (intestinal type — most common). **MALT lymphoma** (marginal zone B-cell — may regress with H. pylori eradication). Achlorhydria in chronic/severe cases.",
        tx: "**Triple therapy:** PPI + clarithromycin + amoxicillin × 14 days. **Quadruple therapy** if clarithromycin resistance suspected: PPI + bismuth + metronidazole + tetracycline. Confirm eradication: **urea breath test** or stool antigen test (not serology — IgG stays elevated).",
        pearl: "**Diagnosis:** urea breath test (active infection, non-invasive), stool antigen (active), serology (not useful for eradication confirmation), endoscopic biopsy with rapid urease test (CLOtest). **Test of cure:** urea breath test or stool antigen — wait 4 weeks post-treatment, hold PPI. **MALT lymphoma** may regress completely with antibiotics — H. pylori eradication is first-line treatment."
      },
      {
        name: "Pseudomonas aeruginosa",
        summary: "Oxidase+, non-fermenter, aerobic, grape-like odor, blue-green pigment — CF lungs, burns, nosocomial, hot tub folliculitis; intrinsically resistant",
        tier: 1,
        gram: "GN Bacillus (non-fermenter)",
        tags: ["CF","Burns","Hot Tub Folliculitis","Osteomyelitis","Ecthyma Gangrenosum"],
        virulence: "**Exotoxin A** (ADP-ribosylates EF-2 — same mechanism as diphtheria toxin). Alginate biofilm (CF). Pyocyanin (blue-green pigment, generates ROS). Pyoverdine (siderophore). Elastase, proteases.",
        disease: "**CF patients:** mucoid strains in lung (alginate biofilm) → progressive obstructive disease. **Burns:** #1 cause of death in burn patients. **Nosocomial:** ventilator-associated pneumonia, catheter-associated UTI. **Osteomyelitis:** puncture wounds through rubber-soled shoes (sneakers). **Hot tub folliculitis** (skin rash after hot tub exposure). **Ecthyma gangrenosum:** necrotic skin ulcer in neutropenic patients (pathognomonic).",
        tx: "**Anti-pseudomonal penicillins** (pip-tazo), cefepime, ceftazidime, carbapenems (NOT ertapenem), fluoroquinolones, aztreonam, aminoglycosides. Often requires **combination therapy.** Intrinsic resistance to most β-lactams, narrow spectrum agents.",
        pearl: "**Ecthyma gangrenosum** in neutropenic patient = pathognomonic for Pseudomonas bacteremia. **Exotoxin A = same as diphtheria toxin mechanism** (ADP-ribosylates EF-2). 'You need a specific anti-pseudomonal agent — cefazolin won't cut it.' Osteomyelitis after nail through sneaker = Pseudomonas (not Staph)."
      }
    ]
  },
  {
    group: "Gram-Negative Bacilli – Respiratory",
    color: "bact",
    organisms: [
      {
        name: "Haemophilus influenzae",
        summary: "Requires factors X + V (chocolate agar) — epiglottitis (type b, unvaccinated), otitis, meningitis; β-lactamase resistance common",
        tier: 2,
        gram: "GN coccobacillus",
        tags: ["Epiglottitis","Otitis Media","Meningitis","Chocolate Agar","Satellite Phenomenon"],
        virulence: "**Polyribitol phosphate (PRP) capsule** (type b — most virulent, prevented by Hib vaccine). IgA protease.",
        disease: "**Hib (type b, unvaccinated):** epiglottitis ('cherry red epiglottis,' tripod position, thumb sign on lateral neck X-ray), meningitis, pneumonia, bacteremia, septic arthritis. **Unencapsulated (non-typeable):** otitis media (#1 bacterial cause in kids along with S. pneumoniae), sinusitis, COPD exacerbations.",
        tx: "Epiglottitis: secure airway first (intubation in OR), then **ceftriaxone**. Meningitis: ceftriaxone. Otitis/sinusitis: amoxicillin-clavulanate. **Hib vaccine** (conjugate) dramatically reduced invasive disease.",
        pearl: "**Chocolate agar** required (X factor = hemin, V factor = NAD — released by RBC lysis). **Satellite phenomenon:** H. influenzae grows around S. aureus colonies (which provide NAD). Epiglottitis: **do not examine throat** (may cause complete obstruction) → take to OR. Thumb sign on lateral neck XR."
      },
      {
        name: "Bordetella pertussis",
        summary: "Whooping cough — catarrhal/paroxysmal/convalescent; toxin ↑cAMP, ↑lymphocytes; treat with azithromycin in catarrhal phase",
        tier: 2,
        gram: "GN coccobacillus (tiny)",
        tags: ["Whooping Cough","Pertussis","Lymphocytosis","↑cAMP"],
        virulence: "**Pertussis toxin** (A-B, ADP-ribosylates Gi protein → ↑cAMP → impairs phagocyte killing, causes lymphocytosis). **Filamentous hemagglutinin (FHA):** adherence to cilia. Tracheal cytotoxin (kills ciliated cells).",
        disease: "**3 stages:** (1) **Catarrhal** (1–2 weeks): most infectious, mild URI, low fever. (2) **Paroxysmal** (2–6 weeks): severe paroxysmal cough → inspiratory 'whoop' → post-tussive vomiting — **lymphocytosis** (pertussis toxin). (3) **Convalescent**: weeks of resolving cough. Complications: subconjunctival hemorrhage, pneumonia, apnea in infants (can be fatal — no whoop in infants).",
        tx: "**Azithromycin** (or erythromycin, TMP-SMX) — effective in catarrhal phase; reduces infectivity in paroxysmal. Prevention: **DTaP** series + **Tdap** booster (pregnant women, healthcare workers).",
        pearl: "**Lymphocytosis** (atypical lymphocytes, high WBC 20,000–50,000 with >80% lymphocytes) is a classic clue. Culture on **Bordet-Gengou (BG) agar** (charcoal-blood agar) — forms 'mercury drop' colonies. Pertussis toxin inhibits Gi → ↑cAMP."
      },
      {
        name: "Legionella pneumophila",
        summary: "Atypical pneumonia — air conditioning/water towers, hyponatremia, no person-to-person spread; silver stain, BCYE agar",
        tier: 2,
        gram: "GN Bacillus (weakly, Dieterle silver stain)",
        tags: ["Atypical Pneumonia","Hyponatremia","Legionnaires' Disease","AC/Water Towers"],
        virulence: "**Intracellular parasite** of alveolar macrophages. Dot/Icm type IV secretion system — prevents phagosome-lysosome fusion. Lives in biofilms in water systems.",
        disease: "**Legionnaires' disease:** severe pneumonia with extrapulmonary features — **hyponatremia** (SIADH), diarrhea, confusion, elevated LFTs, hematuria. Incubation 2–10 days. Source: cooling towers, hot water systems, hospital water. **No person-to-person transmission.** Pontiac fever: mild flu-like illness without pneumonia.",
        tx: "**Azithromycin** (drug of choice) or fluoroquinolone. β-lactams ineffective (intracellular organism).",
        pearl: "**Classic triad:** pneumonia + hyponatremia + diarrhea in an elderly male hotel guest (or after hospital water exposure). **Diagnosis:** urine antigen test (serogroup 1 — most sensitive/specific for L. pneumophila sg 1). Culture: **BCYE agar** (buffered charcoal yeast extract — supplemented with L-cysteine and iron). Gram stain often negative — use **silver stain or DFA.** No person-to-person spread (clusters = common source outbreak)."
      }
    ]
  },
  {
    group: "Atypical & Intracellular Bacteria",
    color: "bact",
    organisms: [
      {
        name: "Mycobacterium tuberculosis",
        summary: "Acid-fast, aerobic, cord factor — primary/secondary TB; Ghon complex; classic upper lobe cavitation; treat RIPE",
        tier: 1,
        gram: "Acid-fast bacillus (not Gram-stained)",
        tags: ["TB","Latent TB","Ghon Complex","Miliary TB","RIPE Therapy"],
        virulence: "**Cord factor** (trehalose dimycolate — impairs phagosome-lysosome fusion, produces granulomas). **Sulfatides** (inhibit phagosome maturation). **Wax D** (mycoside — adjuvant, slows killing). Slow-growing (doubling time ~24h).",
        disease: "**Primary TB:** asymptomatic, Ghon focus (lower/mid lung) + hilar LAD = Ghon complex → Ranke complex with calcification. **Secondary (reactivation) TB:** upper lobe cavitation, hemoptysis, night sweats, weight loss, low-grade fever. **Miliary TB:** hematogenous spread → millet seed lesions on CXR. **Extrapulmonary:** lymphadenitis (scrofula), Pott's disease (vertebral), renal TB (sterile pyuria), Addison's disease (adrenal), CNS (meningitis, tuberculoma).",
        tx: "**RIPE** × 2 months (Rifampin + Isoniazid + Pyrazinamide + Ethambutol), then RI × 4 months. **Latent TB:** INH × 9 months (or rifampin × 4 months, or INH/rifapentine × 12 doses). Check TST or IGRA before TNF-α inhibitors.",
        pearl: "**RIPE side effects:** Rifampin → red/orange body fluids, rifamycin interactions (CYP inducer). Isoniazid → **peripheral neuropathy** (give B6/pyridoxine), hepatotoxicity, SLE-like reaction. Pyrazinamide → **hyperuricemia**, hepatotoxicity. Ethambutol → **optic neuritis** (red-green color blindness). Streptomycin (old regimen) → ototoxicity."
      },
      {
        name: "Chlamydia trachomatis",
        summary: "Obligate intracellular — serovars D–K: STI/PID; L1–L3: lymphogranuloma venereum; A–C: trachoma (leading infectious cause of blindness)",
        tier: 1,
        gram: "Obligate intracellular (no cell wall)",
        tags: ["STI","PID","Neonatal Conjunctivitis","Trachoma","LGV","Fitz-Hugh-Curtis"],
        virulence: "**Elementary body (EB):** infectious, metabolically inactive — survives extracellularly, enters cells by endocytosis. **Reticulate body (RB):** replicates intracellularly. Cannot make ATP (energy parasite).",
        disease: "**Serovars D–K:** most common bacterial STI in US. Urethritis/cervicitis (often asymptomatic), PID (→ ectopic pregnancy, infertility), epididymo-orchitis. **Neonatal:** conjunctivitis (5–14 days post-birth — **most common** neonatal conjunctivitis) and **pneumonia** ('staccato' cough, eosinophilia, 3–12 weeks). **Reactive arthritis** (Reiter syndrome — urethritis + arthritis + conjunctivitis/uveitis: 'Can't see, can't pee, can't climb a tree'). **Serovars A–C:** trachoma (repeated infection → scarring → entropion → corneal abrasion → blindness). **L1–L3 (LGV):** painless genital ulcer → tender inguinal LAD (buboes) → proctitis.",
        tx: "**Azithromycin** 1g single dose or **doxycycline** × 7 days. Screen partners. LGV: doxycycline × 21 days. Neonatal conjunctivitis: oral erythromycin (prophylaxis: erythromycin eye drops).",
        pearl: "**Can't see, can't pee, can't climb a tree** = reactive arthritis (Reiter syndrome — associated with HLA-B27 and classically occurs post-Chlamydia or enteric infection). **Does not Gram stain** — no cell wall. **Neonatal conjunctivitis timeline:** Chlamydia (5–14 days) vs. gonorrhea (<5 days, chemical within 24h). **Only azithromycin or doxycycline** — β-lactams don't work (no PBPs)."
      },
      {
        name: "Neisseria gonorrhoeae",
        summary: "GP intracellular diplococci in PMNs — STI, PID, septic arthritis (young adults), neonatal ophthalmia; β-lactamase strains common",
        tier: 1,
        gram: "GN diplococci (kidney-bean shaped, intracellular in PMNs)",
        tags: ["STI","Septic Arthritis","PID","Neonatal Ophthalmia","Thayer-Martin"],
        virulence: "**Pili** (antigenic variation — Phase variation); IgA protease; Porin proteins (survive intracellularly in PMNs); β-lactamase producing strains.",
        disease: "**Urethritis/cervicitis:** purulent discharge (more symptomatic than Chlamydia). **PID:** salpingitis → Fitz-Hugh-Curtis syndrome (perihepatic 'violin-string' adhesions, RUQ pain). **Disseminated gonococcal infection (DGI):** migratory polyarthralgia → septic monoarthritis (knee/wrist) + skin pustules/vesicles + tenosynovitis. **Neonatal ophthalmia neonatorum:** purulent conjunctivitis **<5 days** post-birth.",
        tx: "**Ceftriaxone 500mg IM single dose** (treat presumptively for Chlamydia co-infection with azithromycin or doxycycline). Disseminated: ceftriaxone IV. Neonatal prophylaxis: **erythromycin eye drops** at birth.",
        pearl: "**DGI vs Staph septic arthritis:** Gonococcal = young sexually active adult, migratory polyarthralgia then monoarthritis, skin lesions, responds quickly to antibiotics. Staph = any age, usually monoarthritis, no skin lesions. **Thayer-Martin agar:** VCN medium (vancomycin, colistin, nystatin) selects for Neisseria. Oxidase-positive."
      },
      {
        name: "Treponema pallidum",
        summary: "Syphilis — primary (painless chancre), secondary (maculopapular palms/soles + condyloma lata), tertiary (gumma, aortic aneurysm, tabes dorsalis)",
        tier: 1,
        gram: "Spirochete (too thin to Gram stain — darkfield microscopy)",
        tags: ["Syphilis","Chancre","Condyloma Lata","Tabes Dorsalis","VDRL/RPR","Argyll Robertson"],
        virulence: "Outer membrane proteins (facilitate adhesion). Cannot be cultured in vitro. Crosses placenta.",
        disease: "**Primary:** painless indurated chancre (hard chancre) at inoculation site — heals in 3–6 weeks. **Secondary (6wks–6mo post-chancre):** maculopapular rash on **palms and soles**, condyloma lata (flat warts in moist areas), mucous patches, systemic LAD, fever. **Latent:** early (<1yr) vs late (>1yr). **Tertiary:** gumma (granulomatous lesions), cardiovascular (ascending aortic aneurysm, aortic regurgitation — vasa vasorum obliteration), neurosyphilis (tabes dorsalis — dorsal column demyelination → sensory ataxia, positive Romberg, lancinating pain; Argyll Robertson pupil — accommodates but doesn't react to light = 'prostitute's pupil'). **Congenital:** saddle nose, Hutchinson triad (keratitis + deafness + Hutchinson teeth), saber shins.",
        tx: "**Benzathine penicillin G IM** (all stages). Neurosyphilis: IV aqueous penicillin G × 10–14 days. **Jarisch-Herxheimer reaction:** fever, headache, myalgia within 24h of treatment (release of pyrogens from killed spirochetes) — treat with NSAIDs, do NOT stop penicillin.",
        pearl: "**Argyll Robertson pupil:** accommodates (near reflex intact) but does NOT react to light (no direct/consensual light reflex) — lesion in dorsal midbrain (pretectal area). **VDRL/RPR** (non-treponemal — sensitive screening, false positives in lupus/pregnancy/viral infections). **FTA-ABS** (treponemal — specific, confirms diagnosis, stays positive for life). **Dark-field microscopy** visualizes live spirochetes from primary chancre."
      },
      {
        name: "Borrelia burgdorferi",
        summary: "Lyme disease — Ixodes tick (deer tick), ECM rash, bull's eye → facial palsy, heart block, arthritis; treat with doxycycline",
        tier: 2,
        gram: "Spirochete (Giemsa or Wright stain — too thin for Gram)",
        tags: ["Lyme Disease","Bull's Eye Rash","Ixodes Tick","Facial Palsy","Heart Block"],
        virulence: "OspA/OspC surface proteins (tick-midgut adhesion, immune evasion). No endotoxin.",
        disease: "**Stage 1 (early localized):** Erythema chronicum migrans (ECM) — bull's eye expanding rash at bite site, 3–30 days after bite. Flu-like symptoms. **Stage 2 (early disseminated, weeks–months):** Bilateral **facial nerve palsy** (Bell's palsy — most common cause of bilateral in young patient), **Lyme carditis** (AV nodal block, Wenckebach), migratory arthralgia, radiculopathy. **Stage 3 (late, months–years):** **Lyme arthritis** (large joints, esp. knee), encephalopathy.",
        tx: "**Doxycycline** (drug of choice, all stages except CNS/cardiac complications). Amoxicillin (children <8, pregnant). CNS/cardiac: IV **ceftriaxone**. No vaccine currently available (LYMErix was withdrawn). Tick removal within 36h prevents transmission.",
        pearl: "**Ixodes scapularis** (black-legged/deer tick) — nymph stage most likely to transmit (tiny, often not noticed). Co-infections: Babesia (hemolytic anemia), Anaplasmosis (thrombocytopenia, ↑LFTs). **Bell's palsy in young patient from endemic area** = test for Lyme (ELISA → Western blot for confirmation). AV block without structural disease in endemic area = Lyme carditis until proven otherwise."
      }
    ]
  }
],

viruses: [
  {
    group: "DNA Viruses — Herpesviruses",
    color: "vir",
    organisms: [
      {
        name: "HSV-1 and HSV-2",
        summary: "Latent in sensory ganglia — HSV-1: oral/encephalitis (temporal); HSV-2: genital/neonatal; treat with acyclovir",
        tier: 1,
        gram: "dsDNA, enveloped",
        tags: ["Oral Herpes","Genital Herpes","Encephalitis","Neonatal Herpes","Acyclovir"],
        virulence: "Tegument proteins and glycoproteins (gB, gC, gD) for cell entry. Viral TK (thymidine kinase) — required for acyclovir activation. LAT (latency-associated transcripts) maintain latency in neurons.",
        disease: "**HSV-1:** primary gingivostomatitis (painful vesicles/ulcers), recurrent herpes labialis ('cold sores'), keratoconjunctivitis (dendritic corneal ulcers — **fluorescein staining**), **herpes encephalitis** (temporal lobe → personality change, seizures, hemorrhagic necrosis — **MRI: temporal lobe signal, LP: RBCs + lymphocytes**). **HSV-2:** genital herpes (painful ulcers on genitals), **neonatal herpes** (from birth canal — disseminated → skin/eye/mouth or CNS → high mortality). **HSV** in immunocompromised: esophagitis, proctitis, encephalitis. **Whitlow:** finger infection from HSV.",
        tx: "**Acyclovir** (or valacyclovir, famciclovir) — phosphorylated by viral TK → inhibits viral DNA polymerase. HSV encephalitis: IV acyclovir (empirically in suspected cases — don't wait). **Prophylaxis** for frequent recurrences: daily valacyclovir. Acyclovir-resistant (TK-deficient): foscarnet.",
        pearl: "**Temporal lobe encephalitis** = HSV-1 until proven otherwise → start IV acyclovir immediately. **Tzanck smear:** multinucleated giant cells (not specific for HSV — also VZV). **Neonatal herpes triad:** skin vesicles + eye involvement + CNS/disseminated disease — C-section if active lesions at delivery. Acyclovir resistance → **foscarnet** (doesn't need TK for activation)."
      },
      {
        name: "VZV (HHV-3) — Varicella-Zoster",
        summary: "Chickenpox (primary) → latent in dorsal root ganglia → zoster (shingles, dermatomal) — vaccine-preventable; treat with acyclovir",
        tier: 1,
        gram: "dsDNA, enveloped",
        tags: ["Chickenpox","Shingles","Dermatomal Rash","Ramsay Hunt","Postherpetic Neuralgia"],
        virulence: "Highly contagious (airborne + droplet contact). Latency in dorsal root ganglia.",
        disease: "**Varicella (chickenpox):** pruritic rash — papules → vesicles → pustules → crusts (all stages simultaneously). Fever, malaise. Complications: bacterial superinfection (GAS), pneumonia (adults, immunocompromised), encephalitis, Reye syndrome (if given aspirin → avoid ASA in children with varicella). **Herpes zoster (shingles):** reactivation in dermatomal distribution — painful, unilateral vesicles. **Zoster ophthalmicus** (V1 — risk of keratitis, blindness). **Ramsay Hunt syndrome:** VZV reactivation in geniculate ganglion → facial palsy (CN VII) + ear vesicles + sensorineural hearing loss.",
        tx: "Acyclovir (IV for severe/immunocompromised, PO for uncomplicated shingles in <72h). **Zoster vaccine (Shingrix):** recombinant, recommended ≥50 yrs. **Varicella vaccine (Varivax):** live attenuated, 2-dose series. **VZIG** for post-exposure prophylaxis in immunocompromised/pregnant.",
        pearl: "**Reye syndrome:** aspirin + varicella (or influenza) → hepatic encephalopathy in children → **never give aspirin to children with viral illness**. **Ramsay Hunt:** VZV in geniculate ganglion → Bell's palsy + ear vesicles + hearing loss. Zoster can affect **V1 (ophthalmic)**: Hutchinson's sign (vesicles on tip of nose → indicates nasociliary nerve involvement → corneal disease risk). Tzanck smear: multinucleated giant cells."
      },
      {
        name: "EBV (HHV-4) — Epstein-Barr Virus",
        summary: "Infectious mononucleosis — heterophile antibodies (Monospot), atypical lymphocytes, splenomegaly, rash with ampicillin; transforms B cells → lymphomas",
        tier: 1,
        gram: "dsDNA, enveloped",
        tags: ["Mononucleosis","Heterophile Antibodies","Burkitt Lymphoma","Hodgkin Lymphoma","EBV Post-Transplant"],
        virulence: "Infects **B cells via CD21 (CR2 complement receptor)**. Immortalizes B cells (EBNA, LMP oncoproteins). Monospot: heterophile antibodies agglutinate horse/sheep RBCs.",
        disease: "**Infectious mononucleosis ('mono'):** fever + pharyngitis (exudative) + lymphadenopathy (posterior cervical) + splenomegaly. **Fatigue for weeks–months**. Rash if given **ampicillin/amoxicillin** (immune-mediated, maculopapular). Complications: splenic rupture (avoid contact sports for 3–4 weeks), airway obstruction (from tonsillar hypertrophy). **Malignancies:** Burkitt lymphoma (endemic African form c-myc:8;14 translocation, jaw mass in children, EBV-associated), primary CNS lymphoma (immunocompromised — HIV/transplant), nasopharyngeal carcinoma (Southeast Asian populations), Hodgkin lymphoma (mixed cellularity subtype), post-transplant lymphoproliferative disorder (PTLD).",
        tx: "Supportive (rest, avoid contact sports). Steroids if airway compromise or severe. No specific antiviral. Avoid ampicillin/amoxicillin. PTLD: reduce immunosuppression ± rituximab.",
        pearl: "**Ampicillin rash** in 'tonsillar pharyngitis' patient = classic EBV vignette (don't give ampicillin for sore throat without testing for mono). **CD21** is the receptor. Heterophile antibodies (Monospot) appear in 85% — may be falsely negative early. **Atypical lymphocytes** = CD8+ T cells (reactive) responding to EBV-infected B cells. Monospot false negative in first week."
      },
      {
        name: "CMV (HHV-5) — Cytomegalovirus",
        summary: "Owl-eye inclusions — congenital (calcifications, hearing loss) and immunocompromised (retinitis, esophagitis, colitis); treat with ganciclovir",
        tier: 1,
        gram: "dsDNA, enveloped (largest herpesvirus)",
        tags: ["Congenital CMV","Owl-Eye Inclusions","Retinitis","Esophagitis","Ganciclovir"],
        virulence: "Intranuclear inclusions ('owl eyes'). Infects many cell types. Latent in mononuclear cells. Can reactivate with immunosuppression.",
        disease: "**Congenital CMV** (most common congenital infection): **periventricular calcifications**, hearing loss (most common cause of non-hereditary sensorineural), chorioretinitis, hepatosplenomegaly, petechiae ('blueberry muffin' baby), microcephaly. **Immunocompromised (HIV, transplant):** CMV retinitis (most common cause of blindness in AIDS — 'pizza pie' fundus), esophagitis (linear ulcers), colitis (bloody diarrhea), pneumonitis (bone marrow/lung transplant). **Mononucleosis-like:** heterophile-negative mono (common in healthy adults).",
        tx: "**Ganciclovir** (or valganciclovir — prodrug). Ganciclovir resistance: **foscarnet** or cidofovir. Prophylaxis in transplant: valganciclovir.",
        pearl: "**CMV vs Toxoplasma calcifications:** CMV = **periventricular** (central). Toxoplasma = **diffuse/scattered** (peripheral). Both cause congenital CNS disease. **Ganciclovir** = guanosine analog, requires phosphorylation by viral UL97 kinase (CMV kinase). Bone marrow toxicity (neutropenia, thrombocytopenia) = main side effect. **Retinitis in AIDS:** bushy hemorrhagic infiltrate following blood vessels — 'pizza pie fundus.' CD4 <50/µL."
      }
    ]
  },
  {
    group: "RNA Viruses",
    color: "vir",
    organisms: [
      {
        name: "HIV",
        summary: "SS (+) RNA retrovirus — CD4+ T-cell depletion; AIDS < 200 CD4; HAART; opportunistic infections by CD4 count",
        tier: 1,
        gram: "ssRNA (+), retrovirus, enveloped",
        tags: ["AIDS","CD4","Opportunistic Infections","HAART","Reverse Transcriptase"],
        virulence: "**Reverse transcriptase** (RNA→DNA, error-prone → mutations). **Integrase** (integrates provirus). **Protease** (cleaves polyproteins). **gp120/gp41** (cell entry via CD4 + CCR5/CXCR4). **tat, rev, nef** (transcription/immune evasion).",
        disease: "**Acute HIV:** mononucleosis-like syndrome (2–4 wks post-exposure). **Latent period:** asymptomatic, CD4 slowly declines. **AIDS (CD4 < 200):** opportunistic infections by CD4 level — **>500:** recurrent oral candidiasis, constitutional; **<200:** PCP, Toxoplasma, Cryptococcus, histoplasmosis; **<100:** CNS lymphoma, CMV, MAC; **<50:** CMV retinitis, disseminated MAC. **AIDS-defining conditions:** PCP, MAC, CMV retinitis, CNS lymphoma, Kaposi's sarcoma, cryptococcal meningitis, cerebral toxoplasmosis, wasting syndrome.",
        tx: "**HAART** (highly active antiretroviral therapy): 2 NRTIs + PI or INSTI or NNRTI (integrase inhibitor preferred). **PrEP**: TDF/FTC. **Opportunistic infection prophylaxis:** CD4 <200 → TMP-SMX (PCP); <100 → add fluconazole (Cryptococcus) or azithromycin (MAC).",
        pearl: "**Opportunistic infection CD4 thresholds to memorize:** >500=candidiasis; <500=TB; <200=PCP (TMP-SMX prophylaxis), Toxo (if seropositive); <100=MAC (azithromycin prophylaxis); <50=CMV retinitis, disseminated MAC. **Western blot** confirms ELISA screening. **NNRTI**: inhibits reverse transcriptase non-competitively. **Protease inhibitors:** -navir suffix, MetS, fat redistribution, hyperglycemia."
      },
      {
        name: "Influenza",
        summary: "Orthomyxovirus — segmented ssRNA (reassortment → pandemics), hemagglutinin/neuraminidase; treat with oseltamivir/zanamivir within 48h",
        tier: 1,
        gram: "ssRNA (−), segmented, enveloped",
        tags: ["Influenza","Hemagglutinin","Neuraminidase","Oseltamivir","Antigenic Drift/Shift"],
        virulence: "**Hemagglutinin (HA):** binds sialic acid receptors on host cells (attachment). **Neuraminidase (NA):** cleaves sialic acid (release of virions). **8 segments** → reassortment between human + animal influenza → **antigenic shift** → pandemic. **Antigenic drift** (point mutations in HA/NA) → seasonal epidemics.",
        disease: "Abrupt fever, headache, myalgias, malaise, non-productive cough (distinguishes from common cold). Complications: primary influenza pneumonia, secondary bacterial pneumonia (S. aureus, S. pneumoniae, H. influenzae), myocarditis, Reye syndrome (children + aspirin). Influenza B: more neuraminidase variation, mainly in children.",
        tx: "**Oseltamivir** (Tamiflu) or zanamivir (inhaled) — neuraminidase inhibitors, effective if started within 48h. **Annual flu vaccine** (trivalent or quadrivalent inactivated). **Live attenuated vaccine (FluMist):** nasal spray, ages 2–49, not in pregnancy or immunocompromised. Amantadine/rimantadine: M2 inhibitors (influenza A only — most strains now resistant).",
        pearl: "**Antigenic drift** (minor mutations, annual seasonal flu) vs **antigenic shift** (major reassortment of 8 segments, pandemic potential). **Reye syndrome:** children + aspirin + influenza or VZV → hepatic failure + encephalopathy. Primary influenza pneumonia: diffuse bilateral infiltrates, severe. Oseltamivir not recommended for uncomplicated flu in healthy young patients."
      },
      {
        name: "Measles (Rubeola)",
        summary: "Koplik spots → maculopapular rash cephalocaudal; SSPE complication; MMR vaccine; paramyxovirus",
        tier: 2,
        gram: "ssRNA (−), non-segmented, enveloped (Paramyxovirus)",
        tags: ["Koplik Spots","Measles","SSPE","MMR","Maculopapular Rash"],
        virulence: "Fusion protein (syncytia formation → multinucleated giant cells). Infects via respiratory tract. Immunosuppression during acute infection.",
        disease: "**4 Cs:** Cough, Coryza, Conjunctivitis + fever (prodrome) → **Koplik spots** (blue-white on buccal mucosa — pathognomonic, 1–2 days before rash) → maculopapular rash spreads head-to-toe. Complications: pneumonia (Warthin-Finkeldey giant cells), encephalitis (acute — 1/1000), **SSPE** (subacute sclerosing panencephalitis — slow virus, 7–10 years post-infection → progressive neurodegeneration, high antibody titers in CSF).",
        tx: "Supportive. **Vitamin A** reduces mortality in children. **MMR vaccine** (live attenuated) — 2 doses, 12–15 months and 4–6 years. **IGIV** for post-exposure prophylaxis in immunocompromised.",
        pearl: "**Koplik spots** are pathognomonic and appear 1–2 days BEFORE the rash — classic Step 1 question. **SSPE** occurs years after measles → inclusion bodies in neurons + astrocytes → dementia, seizures, death. Measles is the most common vaccine-preventable cause of death in children worldwide. Rash spares palms/soles (unlike syphilis/RMSF)."
      },
      {
        name: "Mumps",
        summary: "Paramyxovirus — parotitis, orchitis (post-pubertal males → sterility), meningitis; MMR vaccine",
        tier: 2,
        gram: "ssRNA (−), non-segmented, enveloped (Paramyxovirus)",
        tags: ["Parotitis","Orchitis","Aseptic Meningitis","MMR"],
        virulence: "Hemagglutinin-neuraminidase (HN) and fusion protein.",
        disease: "**Parotitis** (bilateral or unilateral parotid swelling) — painful. **Orchitis** (post-pubertal males, unilateral > bilateral) — can cause infertility if bilateral. **Aseptic meningitis** (most common complication overall). Pancreatitis (↑ amylase + lipase). Sensorineural deafness (unilateral, major complication).",
        tx: "Supportive. **MMR vaccine** (highly effective). Scrotal support for orchitis.",
        pearl: "**Orchitis** in post-pubertal male with parotitis = mumps. Bilateral orchitis → risk of sterility. Mumps is most common cause of **acquired sensorineural hearing loss** in unvaccinated children. CSF in mumps meningitis: lymphocytic pleocytosis, ↑ protein, normal glucose (aseptic)."
      },
      {
        name: "Hepatitis Viruses",
        summary: "A (fecal-oral, acute), B (serology/sexual/vertical, chronicity risk), C (HCV RNA, chronic, cirrhosis, HCC), D (requires HBsAg), E (pregnancy mortality)",
        tier: 1,
        gram: "Multiple families",
        tags: ["Hepatitis A","Hepatitis B","Hepatitis C","HBsAg","Anti-HBs","Cirrhosis","HCC"],
        virulence: "HAV: ssRNA(+), non-enveloped (fecal-oral, no chronic). HBV: dsDNA, enveloped (Hepadnavirus, reverse transcriptase, cccDNA reservoir). HCV: ssRNA(+), enveloped (Flavivirus), high mutation rate → immune evasion → chronicity. HDV: ssRNA(−), requires HBsAg envelope. HEV: ssRNA(+), non-enveloped, fecal-oral.",
        disease: "**Hepatitis A:** acute, fecal-oral (shellfish, travel), self-limited, no chronic. **Hepatitis B:** acute (±jaundice, arthralgias) → chronic (10% adults, 90% neonates) → cirrhosis, HCC, PAN (polyarteritis nodosa — immune complex). **HBV serology:** HBsAg (acute/chronic), anti-HBs (immunity/vaccination), HBeAg (active replication), anti-HBc IgM (acute), IgG (past/chronic). **Window period:** HBsAg−, anti-HBs− but anti-HBc IgM+ **HCV:** most common cause of post-transfusion hepatitis, leading indication for liver transplant, 80% chronic, cirrhosis → HCC. **HDV:** co-infection (fulminant hepatitis) or superinfection (accelerated cirrhosis). **HEV:** fecal-oral, self-limited, **very high mortality in pregnancy** (20%).",
        tx: "HAV: supportive; vaccine (HAV). HBV: tenofovir or entecavir (nucleos(t)ide analogs); IFN-α. HBV vaccine. HCV: **direct-acting antivirals (DAAs)** — ledipasvir/sofosbuvir (NS5B polymerase inhibitor + NS5A inhibitor), >95% SVR. No HCV vaccine.",
        pearl: "**HBV serology:** 'HBsAg = you have it; anti-HBs = you're protected; anti-HBc IgM = acute; IgG = past.' **Vaccine gives anti-HBs only (no anti-HBc)**. Window period: anti-HBc IgM only positive. **HCV** = most common blood-borne infection in US (historically). HBeAg = high infectivity. **Neonatal HBV:** immunoglobulin + vaccine within 12h of birth."
      }
    ]
  }
],

fungi: [
  {
    group: "Systemic Mycoses",
    color: "fung",
    organisms: [
      {
        name: "Histoplasma capsulatum",
        summary: "Ohio/Mississippi River valleys, caves/bird droppings, dimorphic — intracellular in macrophages (yeast form); treat with itraconazole/amphotericin B",
        tier: 1,
        gram: "Dimorphic fungus (mold at 20°C → yeast at 37°C)",
        tags: ["Ohio/Mississippi Valley","Caves","Bird Droppings","Intracellular","Dimorphic"],
        virulence: "Yeast form survives intracellularly in macrophages (like TB). Soil contamination from bird/bat droppings.",
        disease: "**Pulmonary histoplasmosis:** usually asymptomatic (self-limited flu-like illness, hilar lymphadenopathy on CXR). Resembles TB (upper lobe, cavitation, calcifications) in immunocompetent. **Disseminated (immunocompromised, HIV with CD4 <150):** fever, weight loss, hepatosplenomegaly, oral ulcers, adrenal insufficiency. **Mediastinal/pericardial complications** in chronic forms.",
        tx: "Mild/moderate: **itraconazole**. Severe/disseminated: **amphotericin B** then step-down to itraconazole. **Urine Histoplasma antigen** (most sensitive for disseminated disease).",
        pearl: "**Intracellular** yeast found in macrophages on silver stain (GMS stain) — differentiate from other fungi (note small oval yeasts within macrophage cytoplasm). **Ohio/Mississippi River Valley** exposure. **Urine antigen** is the test of choice for disseminated histoplasmosis. **Adrenal involvement** is characteristic (bilateral adrenal enlargement → Addison's disease)."
      },
      {
        name: "Coccidioides immitis",
        summary: "Southwestern US/California (San Joaquin Valley fever), dimorphic — spherules with endospores in tissue; eosinophilia, erythema nodosum",
        tier: 2,
        gram: "Dimorphic fungus (arthroconidia in soil → spherules in tissue)",
        tags: ["San Joaquin Valley","Southwest US","Spherules","Eosinophilia","Erythema Nodosum"],
        virulence: "Arthroconidia highly infectious (inhalation). Spherules in tissue contain multiple endospores (200–300) → rupture → spread.",
        disease: "**Primary (Valley fever):** flu-like illness, 60% asymptomatic. Eosinophilia (classic). Erythema nodosum (immune complex reaction — tender red nodules on shins — 'desert rheumatism'). **Disseminated (immunocompromised, Black/Filipino patients at highest risk):** meningitis (most serious — CSF eosinophilia), bone/skin/lymph node involvement.",
        tx: "Mild/pulmonary: **fluconazole** or itraconazole. Severe/disseminated: **amphotericin B**. Meningitis: fluconazole (lifelong suppression). Amphotericin for severe.",
        pearl: "**Spherules with endospores** in tissue biopsy = pathognomonic for Coccidioides (no other organism forms spherules). **CSF eosinophilia** is a clue for coccidioidal meningitis (also consider in parasitic meningitis). **Risk factors for dissemination:** HIV, pregnancy (3rd trimester), immunosuppression, Black/Filipino ancestry. Do NOT give live fungal cultures to others — highly infectious arthroconidia."
      },
      {
        name: "Blastomyces dermatitidis",
        summary: "North America (Ohio/Mississippi + Great Lakes), broad-based budding yeast — verrucous skin lesions, pulmonary, osteomyelitis; no reliable serology",
        tier: 2,
        gram: "Dimorphic fungus",
        tags: ["Great Lakes","Broad-Based Budding","Skin Lesions","Osteomyelitis"],
        virulence: "Soil (decaying wood, near water). Inhalation of conidia.",
        disease: "**Pulmonary blastomycosis:** flu-like, often mistaken for bacterial pneumonia or cancer. Upper lobe infiltrates. **Skin (most distinctive):** verrucous (warty), ulcerating, crusted skin lesions — face, extremities. **Bone:** osteolytic lesions. **Genitourinary:** prostatitis, epididymo-orchitis. **CNS:** meningitis, abscess (rare).",
        tx: "Mild-moderate: **itraconazole**. Severe/CNS: **amphotericin B** then itraconazole.",
        pearl: "**Broad-based budding** (wide base between mother and daughter yeast cell) = Blastomyces. Contrast with **Cryptococcus** (narrow-based budding, thick capsule) and **Histoplasma** (intracellular, tiny). Urine antigen cross-reacts with Histoplasma antigen — not specific. **Skin lesions** are distinctive: verrucous, non-tender, crusted — can mimic squamous cell carcinoma."
      }
    ]
  },
  {
    group: "Opportunistic Fungal Infections",
    color: "fung",
    organisms: [
      {
        name: "Candida albicans",
        summary: "Dimorphic yeast with germ tubes — pseudohyphae, germ tube test positive; thrush/esophagitis/UTI/bloodstream in immunocompromised",
        tier: 1,
        gram: "Dimorphic yeast (budding yeast + pseudohyphae + hyphae)",
        tags: ["Thrush","Esophagitis","Candidemia","Diaper Rash","Germ Tube"],
        virulence: "**Germ tube formation** (true hyphae in serum — germ tube test positive, distinguishes C. albicans from other Candida). **Biofilm** on prosthetics. Transition between yeast/hyphae (phenotypic switching). Phospholipase B.",
        disease: "**Oral thrush:** white plaques on erythematous base, scrape off (distinguish from leukoplakia which doesn't scrape off). **Esophageal candidiasis:** dysphagia + odynophagia (AIDS-defining if severe), white plaques on endoscopy. **Vulvovaginitis:** cottage-cheese discharge, pruritus. **Diaper rash:** satellite lesions. **Invasive/bloodstream (candidemia):** IV catheters, broad-spectrum antibiotics, TPN, neutropenia → disseminated to retina, liver, spleen (retinal fluffy white lesions).",
        tx: "Mucocutaneous: **fluconazole** or nystatin (topical). Esophageal: fluconazole (systemic). Candidemia: **echinocandins** (caspofungin, micafungin) — first-line for severe/ICU. Azoles for stable non-critically ill. Remove catheters.",
        pearl: "**Germ tube test positive** = C. albicans (forms true hyphae in serum at 37°C within 2–3h — no other common Candida does this). **Nystatin is topical only** (too toxic for systemic use). **Echinocandins** (caspofungin, micafungin, anidulafungin): inhibit β-1,3-glucan synthase → cell wall → less fungal toxicity than amphotericin. C. krusei and C. glabrata: intrinsically resistant to fluconazole."
      },
      {
        name: "Aspergillus fumigatus",
        summary: "Septate hyphae at 45° (acute angle) — allergic bronchopulmonary (ABPA), aspergilloma, invasive aspergillosis in neutropenia",
        tier: 1,
        gram: "Mold (septate hyphae with dichotomous branching at 45°)",
        tags: ["ABPA","Aspergilloma","Invasive Aspergillosis","Septate Hyphae","Voriconazole"],
        virulence: "Small conidia easily inhaled. Thermotolerance (grows at 37°C–50°C). Produces gliotoxins, elastases, protease.",
        disease: "**ABPA (allergic bronchopulmonary aspergillosis):** asthma/CF patient, eosinophilia, elevated IgE, mucus plugs, central bronchiectasis — type I/III hypersensitivity. **Aspergilloma ('fungus ball'):** colonization of pre-existing lung cavity (prior TB) — hemoptysis, 'crescent sign' (Monod sign) on CXR. **Invasive pulmonary aspergillosis:** neutropenic/immunocompromised patients (transplant, prolonged steroids) — angioinvasion → hemorrhagic infarcts, halo sign (CT — ground-glass halo around nodule), air crescent sign late. **Sinusitis** (invasive in immunocompromised).",
        tx: "ABPA: steroids + itraconazole. Aspergilloma: observation (surgical if hemoptysis). **Invasive:** **voriconazole** (drug of choice). Alternative: amphotericin B or isavuconazole. Echinocandins: second-line.",
        pearl: "**Voriconazole** is now the DOC for invasive aspergillosis (superior to amphotericin B in trials). **CT halo sign** (ground-glass density surrounding pulmonary nodule) = early invasive aspergillosis in neutropenic patient. **45° branching** (acute angle, septate) = Aspergillus; **90° (right angle, non-septate)** = Mucor/Rhizopus. Galactomannan assay: Aspergillus antigen in serum/BAL — useful for diagnosis in high-risk patients."
      },
      {
        name: "Cryptococcus neoformans",
        summary: "Narrow-based budding, thick polysaccharide capsule (India ink halo), urease+ — meningitis in HIV (CD4 <100); pigeon droppings; treat with amphotericin B + 5-FC",
        tier: 1,
        gram: "Encapsulated yeast (thick polysaccharide capsule)",
        tags: ["Meningitis","HIV","India Ink","Pigeon Droppings","Cryptococcal Antigen"],
        virulence: "**Polysaccharide capsule** (massive, inhibits phagocytosis and T-cell activation; capsular material detected by cryptococcal antigen test — extremely sensitive). Melanin production (protects against oxidative killing). Urease positive.",
        disease: "**Cryptococcal meningitis** (AIDS-defining, CD4 <100): insidious onset — headache, fever, meningismus (may be absent), altered mental status. CSF: lymphocytic pleocytosis, ↑ protein, ↓ glucose, India ink positive (50–80%), cryptococcal antigen (>90%). **Serum CrAg:** highly sensitive. High intracranial pressure is a major complication.",
        tx: "**Induction:** amphotericin B + **flucytosine (5-FC)** × 2 weeks. **Consolidation:** fluconazole × 8 weeks. **Maintenance (suppression):** fluconazole (lifelong or until immune reconstitution). **Elevated ICP:** serial therapeutic LPs to lower pressure (no steroids for ICP in cryptococcal meningitis).",
        pearl: "**India ink** shows negative staining — capsule excludes ink creating a clear halo around yeast cell. **Cryptococcal antigen** > India ink for sensitivity. **5-FC (flucytosine)** inhibits fungal thymidylate synthase → pyrimidine synthesis. Side effects: bone marrow toxicity, GI. **Immune reconstitution inflammatory syndrome (IRIS)** can paradoxically worsen cryptococcal meningitis after starting ART — manage with steroids."
      },
      {
        name: "Mucormycosis (Rhizopus/Mucor)",
        summary: "Non-septate hyphae at 90° — rhinocerebral in diabetic ketoacidosis (DKA), black eschar, rapidly fatal; treat with amphotericin B + surgery",
        tier: 2,
        gram: "Mold (non-septate/aseptate ribbon-like hyphae, wide, irregular, 90° branching)",
        tags: ["Rhinocerebral","DKA","Diabetics","Black Eschar","Non-Septate Hyphae"],
        virulence: "Iron as essential nutrient. High glucose + acidosis + ↑ free iron (DKA) creates ideal environment. Angioinvasion.",
        disease: "**Rhinocerebral mucormycosis:** DKA, uncontrolled diabetes, deferoxamine therapy (releases iron). Starts in nasal cavity → spreads to sinuses → orbits → brain. **Black eschar** on nasal mucosa/palate (necrotic — angioinvasive). Facial pain, proptosis, CN deficits, headache. **Pulmonary:** immunocompromised (similar to Aspergillus but more angioinvasive). Rapidly fatal if untreated.",
        tx: "**Liposomal amphotericin B** (drug of choice). **Surgical debridement** (aggressive). Correct DKA/hyperglycemia. Isavuconazole (alternative). Posaconazole for step-down.",
        pearl: "**90° branching + non-septate** = Mucormycosis (Mucor, Rhizopus, Absidia). **45° branching + septate** = Aspergillus. **DKA patient with black eschar on nasal mucosa** = rhinocerebral mucormycosis — surgical emergency. **Deferoxamine therapy** (iron chelator for iron overload) paradoxically predisposes to mucormycosis by providing usable iron via siderophore mechanism."
      },
      {
        name: "Pneumocystis jirovecii (PCP)",
        summary: "Atypical fungus — PCP pneumonia in HIV (CD4 <200), diffuse bilateral infiltrates (ground-glass), elevated LDH; treat with TMP-SMX",
        tier: 1,
        gram: "Atypical fungus (cannot be cultured, not susceptible to antifungals targeting ergosterol)",
        tags: ["PCP","HIV","Ground-Glass Infiltrates","TMP-SMX","LDH"],
        virulence: "Cysts (ascospores containing 8 intracystic bodies) + trophic forms attach to type I pneumocytes. Formerly called P. carinii (classified as fungus by rRNA, but acts like protozoan).",
        disease: "**PCP pneumonia** (Pneumocystis pneumonia): AIDS-defining (CD4 <200). Insidious onset — progressive dyspnea, non-productive cough, fever. CXR: bilateral **perihilar/diffuse ground-glass** infiltrates (may be normal early). Elevated **LDH** (non-specific but sensitive). Exercise-induced hypoxia. **BAL (bronchoalveolar lavage)** with GMS (Gomori methenamine silver stain) or toluidine blue stain shows cysts. Spontaneous pneumothorax: complication in PCP.",
        tx: "**TMP-SMX** (drug of choice, IV/PO). Alternative: dapsone + trimethoprim, atovaquone (mild), clindamycin + primaquine (IV), IV pentamidine (severe). **Steroids** (prednisone) if PaO2 <70 or A-a gradient >35 (↓ inflammatory damage). **Prophylaxis:** TMP-SMX when CD4 <200 (also active against Toxoplasma).",
        pearl: "**CD4 <200 → start TMP-SMX prophylaxis** (covers both PCP and Toxoplasma). **LDH elevation** is non-specific but a clue. **BAL + GMS stain** (cysts appear as black round structures). NOT treated with azoles or echinocandins (no ergosterol target). **Steroids** improve outcomes in moderate-severe PCP (reduce mortality 50%). Pneumothorax in HIV patient → think PCP."
      }
    ]
  }
],

parasites: [
  {
    group: "Protozoa — Intestinal & Blood",
    color: "para",
    organisms: [
      {
        name: "Plasmodium species (Malaria)",
        summary: "RBC parasite — cyclic fever, splenomegaly; P. falciparum (severe) vs P. vivax/ovale (relapse/hypnozoites); treat by species",
        tier: 1,
        gram: "Protozoa (intracellular RBC parasite, Giemsa stain)",
        tags: ["Malaria","Cyclic Fever","Falciparum","Hypnozoites","Cerebral Malaria"],
        virulence: "**Anopheles mosquito** (female) vector. Sporozoites → liver (hepatocytes, exoerythrocytic phase) → merozoites → RBCs (erythrocytic phase) → ring forms → schizonts (burst → fever) → gametocytes (mosquito ingestion). **P. falciparum:** no hypnozoites, knob proteins on RBCs → cytoadherence, rosetting → **severe disease**. P. vivax/P. ovale: dormant liver forms (hypnozoites) → relapse.",
        disease: "**Cyclic fever:** P. vivax/ovale (48h — tertian), P. malariae (72h — quartan), P. falciparum (irregular). **P. falciparum complications:** cerebral malaria (altered consciousness, seizures), severe anemia, hypoglycemia, ARDS, acute tubular necrosis, **blackwater fever** (massive hemolysis + hemoglobinuria). P. vivax/ovale: relapse from hypnozoites months-years later. All: splenomegaly, thrombocytopenia.",
        tx: "**P. falciparum:** artemether-lumefantrine or atovaquone-proguanil (uncomplicated); IV **artesunate** (severe). **P. vivax/ovale:** chloroquine + **primaquine** (kills hypnozoites). Check G6PD before primaquine. Chloroquine-resistant falciparum: artesunate combination. **Prophylaxis:** atovaquone-proguanil or doxycycline (malaria-endemic areas).",
        pearl: "**Primaquine** kills hypnozoites in P. vivax/ovale — prevents relapse. **G6PD deficiency** → primaquine causes hemolysis → test G6PD first. **Sickle cell trait** is protective against falciparum malaria (infected RBCs sickle → cleared faster). **Schüffner's dots** (P. vivax/ovale) vs **Maurer's clefts** (P. falciparum). P. malariae: infected RBCs normal size; P. vivax/ovale: enlarged; P. falciparum: normal size (multiple rings per RBC, banana-shaped gametocytes)."
      },
      {
        name: "Toxoplasma gondii",
        summary: "Definitive host: cats; congenital (calcifications + chorioretinitis + hydrocephalus) and CNS toxoplasmosis in HIV (CD4 <100); treat with pyrimethamine + sulfadiazine",
        tier: 1,
        gram: "Obligate intracellular protozoan",
        tags: ["Congenital Toxoplasmosis","CNS Toxoplasmosis","HIV","Cats","Ring-Enhancing Lesions"],
        virulence: "Oocysts in cat feces, bradyzoites in undercooked meat. **Obligate intracellular** (infects almost any nucleated cell). Tachyzoites (acute) → bradyzoites in tissue cysts (latency). Disrupts T-cell immunity triggers reactivation.",
        disease: "**Congenital toxoplasmosis** (TORCH): classic triad — **chorioretinitis + hydrocephalus + intracranial calcifications (diffuse periventricular)**. Plus seizures, jaundice, hepatosplenomegaly. **CNS toxoplasmosis (HIV, CD4 <100):** multiple **ring-enhancing lesions** on MRI (basal ganglia/cortex), headache, fever, focal neurological deficits. Distinguish from primary CNS lymphoma (single ring-enhancing, periventricular). **Ocular toxoplasmosis:** reactivation in adults → chorioretinitis, scotoma.",
        tx: "**Pyrimethamine + sulfadiazine + leucovorin** (folinic acid prevents bone marrow suppression from pyrimethamine). **Alternative:** pyrimethamine + clindamycin. **TMP-SMX prophylaxis** if CD4 <100 and Toxoplasma IgG positive. **Empiric treatment:** if HIV patient has multiple ring-enhancing lesions → treat for Toxo empirically (if no improvement in 2 weeks → biopsy for CNS lymphoma).",
        pearl: "**Toxo vs CNS lymphoma:** Toxoplasma = multiple lesions, basal ganglia (bilateral), responds to empiric treatment. CNS lymphoma = single periventricular lesion, EBV associated, positive CSF EBV PCR, thallium SPECT (increased uptake in lymphoma). **Congenital calcifications:** Toxoplasma = diffuse/scattered. CMV = **periventricular**. Both can cause chorioretinitis. Pyrimethamine: dihydrofolate reductase inhibitor → give leucovorin."
      },
      {
        name: "Giardia lamblia",
        summary: "Pear-shaped trophozoite + cyst — #1 parasitic diarrhea (hikers/contaminated water), malabsorption, floating stools; treat with metronidazole",
        tier: 1,
        gram: "Flagellate protozoan",
        tags: ["Travelers Diarrhea","Malabsorption","Contaminated Water","Backpackers","Cyst"],
        virulence: "Trophozoites (pear-shaped, 2 nuclei 'owl-eye' appearance) attach to duodenal/jejunal epithelium with sucking disc → disrupts brush border → malabsorption. Cysts are infectious form (resistant to chlorine).",
        disease: "**Acute:** watery diarrhea (no blood, no fever), abdominal cramps, bloating, flatulence. **Chronic:** steatorrhea, malabsorption (fat + fat-soluble vitamins A, D, E, K), weight loss. **IgA deficiency:** increased susceptibility. Source: mountain streams, contaminated water, daycare centers.",
        tx: "**Metronidazole** (drug of choice). Alternative: tinidazole (single dose), nitazoxanide.",
        pearl: "**'Foul-smelling, greasy, floating stools' + hiker/camper + no blood** = Giardia. Flotation/stool O&P: cysts (oval, 4 nuclei). Trophozoites: sucking disc, 2 nuclei, 4 pairs flagella ('looks like a face'). IgA deficiency → recurrent Giardia. Distinguish from Cryptosporidium: Cryptosporidium is acid-fast, more severe in immunocompromised."
      },
      {
        name: "Entamoeba histolytica",
        summary: "Amebic dysentery + liver abscess — ingested cysts, trophozoites invade mucosa, RBCs in cytoplasm; treat with metronidazole + luminal agent",
        tier: 2,
        gram: "Ameba protozoan",
        tags: ["Amebic Dysentery","Liver Abscess","RBC in Trophozoite","Fecal-Oral","Flask-Shaped Ulcer"],
        virulence: "**Trophozoites** ingest RBCs (pathognomonic: RBCs within trophozoite cytoplasm on smear). Cysteine protease dissolves epithelial layer. Flask-shaped ulcers in colon.",
        disease: "**Amebic colitis (dysentery):** gradual onset bloody diarrhea, lower abdominal cramps, tenesmus. Flask-shaped ulcers on colonoscopy. **Amebic liver abscess:** right lobe (most common), 'anchovy paste' pus (necrotic, sterile — few organisms). Fever, RUQ pain, elevated LFTs. Rupture risk into pleural/peritoneal space. **Asymptomatic cyst passage:** common.",
        tx: "**Metronidazole** (tissue amebicide) + **luminal agent** (paromomycin or diloxanide furoate — kills cysts in intestine). Both required to eliminate cysts and tissue infection.",
        pearl: "**Liver abscess pus = 'anchovy paste'** (chocolate sauce) — yellow-brown necrotic material. CT: hypodense, right lobe, single lesion. **Serology (anti-amoeba IgG)** — useful. Key histology: trophozoites with **ingested RBCs** in cytoplasm. Distinguish from pyogenic liver abscess (bacteria — polymicrobial, multiple lesions often). Metronidazole alone = inadequate (leaves cysts in gut → relapse)."
      },
      {
        name: "Cryptosporidium parvum",
        summary: "Acid-fast oocysts — watery diarrhea in immunocompetent (self-limited) vs life-threatening profuse diarrhea in HIV (CD4 <100); no effective treatment in AIDS",
        tier: 2,
        gram: "Coccidian protozoan (acid-fast oocysts)",
        tags: ["Acid-Fast","HIV Diarrhea","Profuse Watery Diarrhea","Waterborne","No Treatment"],
        virulence: "**Acid-fast oocysts** (survive chlorination). Infects intestinal epithelial cells (intracellular but extracytoplasmic — in brush border). Sexual and asexual reproduction in intestine.",
        disease: "**Immunocompetent:** self-limited watery diarrhea (1–3 weeks), nausea, cramps. Common in daycare workers, recreational water. **HIV/AIDS (CD4 <100):** profuse watery diarrhea (3–15 L/day), wasting, biliary cryptosporidiosis (cholangiopathy — sclerosing cholangitis-like).",
        tx: "Immunocompetent: supportive. **AIDS:** nitazoxanide (modest benefit) + **immune reconstitution with HAART** (only cure). No reliable anti-cryptosporidial drug.",
        pearl: "**Acid-fast** staining = key diagnostic feature (along with Cyclospora and Isospora). Oocysts are **4–6 µm** (smaller than RBCs). 'Cryptosporidium parvum = small (parvo) + hidden (crypto).' In AIDS, massive secretory diarrhea leads to wasting. Biliary involvement = AIDS cholangiopathy. Resistant to chlorination of water supplies — common in recreational water outbreaks."
      }
    ]
  },
  {
    group: "Helminths & Other Parasites",
    color: "para",
    organisms: [
      {
        name: "Intestinal Nematodes",
        summary: "Pinworms (Enterobius), ascaris (giant roundworm), hookworms (Ancylostoma/Necator), strongyloides, whipworm — most via fecal-oral or skin penetration",
        tier: 2,
        gram: "Helminths (roundworms)",
        tags: ["Pinworm","Ascaris","Hookworm","Strongyloides","Eosinophilia"],
        virulence: "Varies: larva migrans patterns, tissue invasion, intestinal attachment, autoinfection (Strongyloides).",
        disease: "**Enterobius (pinworm):** perianal pruritus at night — scotch tape test. **Ascaris lumbricoides:** Löffler pneumonia (larval migration), intestinal obstruction, malnutrition. **Hookworm (Ancylostoma/Necator):** skin penetration (cutaneous larva migrans — creeping eruption), iron-deficiency anemia (blood-sucking adults in duodenum). **Trichuris (whipworm):** bloody diarrhea, rectal prolapse. **Strongyloides:** autoinfection — can survive for decades; hyperinfection syndrome in immunocompromised (larvae disseminate everywhere, gram-negative sepsis from gut flora carried).",
        tx: "**Albendazole or mebendazole** (most intestinal nematodes). Pinworm: pyrantel pamoate or albendazole + treat whole family. Strongyloides: **ivermectin** (drug of choice).",
        pearl: "**Strongyloides hyperinfection** in immunocompromised (steroids, HIV, HTLV-1) → larvae disseminate carrying enteric bacteria → gram-negative sepsis/meningitis → **screen before starting steroids in endemic area**. **Eosinophilia** = clue to parasitic infection (especially helminths with tissue migration). **Löffler syndrome** (transient pulmonary eosinophilia) in Ascaris, hookworm, Strongyloides."
      },
      {
        name: "Tissue Nematodes & Trematodes",
        summary: "Trichinella (undercooked pork, periorbital edema), filariasis (lymphedema), schistosoma (bladder cancer/portal HTN), Clonorchis (cholangiocarcinoma)",
        tier: 2,
        gram: "Helminths",
        tags: ["Trichinella","Filariasis","Elephantiasis","Schistosoma","Cholangiocarcinoma"],
        virulence: "Tissue invasion, larval encystment, immunopathology.",
        disease: "**Trichinella spiralis:** undercooked pork/bear — periorbital edema, myalgias, eosinophilia, facial edema. **Wuchereria bancrofti (filariasis):** mosquito vector → lymphatic obstruction → elephantiasis. **Onchocerca volvulus (river blindness):** blackfly vector, subcutaneous nodules, ocular involvement (keratitis → blindness — 'river blindness'). **Schistosoma:** freshwater snail → cercariae penetrate skin: S. mansoni/japonicum (portal HTN → esophageal varices, Symmers' pipe-stem fibrosis); S. haematobium (bladder — hematuria, squamous cell carcinoma of bladder). **Clonorchis/Opisthorchis (liver flukes):** undercooked fish → biliary obstruction + **cholangiocarcinoma**.",
        tx: "Trichinella: albendazole + steroids. Filariasis: diethylcarbamazine (DEC). Onchocerca: **ivermectin** (single annual dose). Schistosoma: **praziquantel** (drug of choice for all flukes and cestodes). Clonorchis: praziquantel.",
        pearl: "**Schistosoma haematobium = squamous cell carcinoma of the bladder** (painless hematuria). **Clonorchis = cholangiocarcinoma** (biliary obstruction, RUQ pain, jaundice). **Praziquantel** = treat all flatworms (flukes + tapeworms). **Ivermectin** = treat Onchocerca, Strongyloides. **Periorbital edema** + eosinophilia + exposure to raw meat = Trichinella."
      },
      {
        name: "Cestodes (Tapeworms)",
        summary: "Taenia (pork/beef), Echinococcus (cysts in liver/lung), Diphyllobothrium (B12 deficiency, raw fish); cysticercosis = neurocysticercosis",
        tier: 2,
        gram: "Helminths (flatworms — cestodes)",
        tags: ["Neurocysticercosis","Hydatid Cyst","Taenia","B12 Deficiency","Praziquantel"],
        virulence: "Larval forms most pathogenic. Echinococcus: cysts slowly expand (hydatid cysts — do NOT aspirate — anaphylaxis risk). T. solium: humans can be intermediate host (ingests eggs) → larvae in tissues.",
        disease: "**Taenia solium (pork tapeworm):** intestinal tapeworm (eating undercooked pork with cysticerci). **Cysticercosis/neurocysticercosis:** eating T. solium eggs (fecal-oral) → larvae encyst in brain → seizures (most common cause of adult-onset seizures in Central/South America), calcified cysts on CT. **Taenia saginata (beef tapeworm):** intestinal only, no cysticercosis. **Echinococcus granulosus:** dog/livestock exposure → hydatid cysts in liver/lung (fluid-filled, slow-growing), daughter cysts. **Diphyllobothrium latum (fish tapeworm):** raw freshwater fish → **B12 deficiency** (tapeworm competes for B12 in terminal ileum) → megaloblastic anemia.",
        tx: "Intestinal tapeworms: **praziquantel** or niclosamide. Neurocysticercosis: **albendazole** + dexamethasone + anti-seizure meds. Echinococcus: **PAIR** (Puncture-Aspiration-Injection-Reaspiration) or surgery + albendazole. Do NOT aspirate blindly (anaphylaxis risk from cyst rupture).",
        pearl: "**Neurocysticercosis** = most common cause of epilepsy in developing countries + most common CNS parasitic infection. **Diphyllobothrium + B12 deficiency** = classic association. **Echinococcus** liver cyst: do NOT needle biopsy (anaphylaxis from daughter cysts). CT shows 'daughter cysts within mother cyst' = pathognomonic. Eosinophilia may be absent with intraluminal cestode infections (no tissue migration)."
      }
    ]
  }
]

};
