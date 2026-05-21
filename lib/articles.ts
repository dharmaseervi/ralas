// lib/articles.ts — shared article data used by resources page and individual article pages

export interface Article {
  slug: string
  tag: string
  title: string
  desc: string
  readTime: string
  content: string // full article HTML content
}

export const articles: Article[] = [
  {
    slug: "how-to-read-your-audiogram",
    tag: "Guide",
    title: "How to read your audiogram",
    desc: "Your audiogram tells the full story of your hearing. Here's what the axes, symbols, and thresholds mean — and what your results indicate.",
    readTime: "5 min",
    content: `
      <p>An audiogram is a graph that shows the results of a hearing test. It maps the softest sounds you can hear at different frequencies (pitches), giving your audiologist a complete picture of your hearing ability.</p>

      <h2>Understanding the axes</h2>
      <p>The horizontal axis (X-axis) shows frequency in Hertz (Hz) — from low-pitched sounds on the left (250 Hz) to high-pitched sounds on the right (8000 Hz). The vertical axis (Y-axis) shows intensity in decibels (dB HL) — with softer sounds at the top and louder sounds at the bottom.</p>

      <h2>What the symbols mean</h2>
      <p>An <strong>O</strong> (circle) represents the right ear, and an <strong>X</strong> represents the left ear. Each symbol is plotted at the softest level you could hear that frequency during testing.</p>

      <h2>Hearing threshold categories</h2>
      <ul>
        <li><strong>0–25 dB:</strong> Normal hearing</li>
        <li><strong>26–40 dB:</strong> Mild hearing loss</li>
        <li><strong>41–55 dB:</strong> Moderate hearing loss</li>
        <li><strong>56–70 dB:</strong> Moderately severe hearing loss</li>
        <li><strong>71–90 dB:</strong> Severe hearing loss</li>
        <li><strong>91+ dB:</strong> Profound hearing loss</li>
      </ul>

      <h2>High-frequency vs low-frequency loss</h2>
      <p>Most age-related hearing loss (presbycusis) affects high frequencies first — meaning you may struggle to hear consonants like S, F, and TH clearly, even when you can hear someone speaking. This explains why people with hearing loss often say "I can hear you, I just can't understand you."</p>

      <h2>What to do with your results</h2>
      <p>Your audiologist will explain your audiogram in detail. The pattern and severity of your thresholds determines whether hearing aids are recommended, and if so, which type and level of technology is most appropriate for your lifestyle.</p>
    `,
  },
  {
    slug: "10-ways-to-protect-your-hearing",
    tag: "Tips",
    title: "10 ways to protect your hearing",
    desc: "Most hearing loss from noise exposure is entirely preventable. Simple daily habits can preserve your hearing for decades.",
    readTime: "4 min",
    content: `
      <p>Noise-induced hearing loss (NIHL) is one of the most common — and most preventable — types of hearing loss. Here are ten practical ways to protect your hearing every day.</p>

      <h2>1. Use ear protection in noisy environments</h2>
      <p>Wear earplugs or earmuffs when exposed to loud machinery, power tools, or industrial noise. Sounds above 85 dB can cause damage with prolonged exposure.</p>

      <h2>2. Follow the 60/60 rule for headphones</h2>
      <p>Listen at no more than 60% of maximum volume, for no more than 60 minutes at a time. Take regular breaks to let your ears recover.</p>

      <h2>3. Choose noise-cancelling headphones</h2>
      <p>Noise-cancelling headphones reduce background noise, so you don't need to turn the volume up to hear clearly in noisy environments.</p>

      <h2>4. Give your ears recovery time after loud events</h2>
      <p>After a concert or loud event, your ears need at least 16 hours of quiet to recover. Temporary threshold shift (ringing or muffled hearing) is a warning sign.</p>

      <h2>5. Wear custom ear protection at concerts</h2>
      <p>Musicians' earplugs reduce volume evenly across frequencies, so you hear the music clearly — just quieter. Custom-moulded versions from an audiologist offer the best fit and protection.</p>

      <h2>6. Keep the TV and radio at a reasonable level</h2>
      <p>If you need to raise your voice to be heard over the TV, it's too loud. Use subtitles as an alternative to turning up the volume.</p>

      <h2>7. Avoid cotton buds in your ears</h2>
      <p>Cotton buds push earwax deeper into the canal and can damage the eardrum. Ears are self-cleaning — only clean the outer ear.</p>

      <h2>8. Get regular hearing checks</h2>
      <p>Annual or biennial hearing tests allow early detection of changes in your hearing, before they significantly affect your quality of life.</p>

      <h2>9. Manage cardiovascular health</h2>
      <p>Good blood flow is essential for healthy hearing. Regular exercise, a balanced diet, and not smoking all contribute to long-term hearing health.</p>

      <h2>10. Be medication-aware</h2>
      <p>Some medications (ototoxic drugs) can damage hearing. If you're prescribed aminoglycoside antibiotics, high-dose aspirin, or certain chemotherapy drugs, discuss hearing monitoring with your doctor.</p>
    `,
  },
  {
    slug: "choosing-a-hearing-aid",
    tag: "Guide",
    title: "Choosing a hearing aid — what to look for",
    desc: "Battery vs rechargeable. BTE vs ITE. Bluetooth vs basic. We break down the key decisions so you can ask the right questions at your fitting.",
    readTime: "7 min",
    content: `
      <p>Choosing a hearing aid can feel overwhelming. There are hundreds of models across dozens of brands, at vastly different price points. Here's how to cut through the noise and focus on what actually matters.</p>

      <h2>Step 1: Start with your audiogram</h2>
      <p>The right hearing aid depends first on your audiogram. Not all styles suit all levels of loss — a CIC (completely-in-canal) device, for example, doesn't have enough amplification power for severe hearing loss. Your audiologist will narrow down the options based on your thresholds before you even consider features.</p>

      <h2>Style: BTE, RIC, ITE, or CIC?</h2>
      <p><strong>BTE (Behind-the-Ear):</strong> Most powerful, suits all loss levels, easiest to handle. Best for elderly patients or those with dexterity issues.</p>
      <p><strong>RIC (Receiver-in-Canal):</strong> Slim and discreet, excellent sound quality, most popular style worldwide. Suits mild to severe loss.</p>
      <p><strong>ITE (In-the-Ear):</strong> Custom-made, sits in the outer ear. Easy to insert, moderate discretion.</p>
      <p><strong>CIC/IIC:</strong> Nearly invisible, sits deep in the canal. For mild to moderate loss only.</p>

      <h2>Battery: Disposable or rechargeable?</h2>
      <p>Rechargeable hearing aids are increasingly popular — charge overnight, wear all day (16–30 hours). Ideal if you find small battery replacement difficult. Disposable batteries last 5–14 days depending on size and usage.</p>

      <h2>Connectivity: Do you need Bluetooth?</h2>
      <p>Bluetooth-enabled hearing aids stream audio directly from your phone, TV, and other devices. If you use your phone frequently or watch a lot of TV, Bluetooth connectivity can significantly improve your experience. It's less critical if you primarily need better hearing in conversation.</p>

      <h2>Technology level: Basic, mid, or premium?</h2>
      <p>Higher technology levels offer better performance in challenging environments (noisy restaurants, large groups). If you lead an active social life, premium technology is worth the investment. For someone who mainly needs to hear one-on-one at home, a mid-level device often suffices.</p>

      <h2>The 30-day trial</h2>
      <p>Always insist on a trial period. At Ralas, all devices come with a 30-day trial — if you're not satisfied, you can return for a full refund. This removes the risk from trying a new device.</p>
    `,
  },
  {
    slug: "speech-delay-in-toddlers",
    tag: "Speech",
    title: "Signs of speech delay in toddlers",
    desc: "Every child develops at their own pace, but certain milestones matter. A guide for parents on what to watch for — and when to seek an assessment.",
    readTime: "5 min",
    content: `
      <p>Speech and language development varies from child to child, but there are key milestones that most children reach by certain ages. Missing these milestones may indicate a speech delay that benefits from early intervention.</p>

      <h2>Why early intervention matters</h2>
      <p>The first three years of life are the most critical period for speech and language development. Early therapy — ideally before age 3 — yields significantly better outcomes than treatment that begins later. If you have any concerns, it's always better to seek an assessment early rather than waiting to see if your child "catches up."</p>

      <h2>Key milestones by age</h2>

      <h3>By 12 months</h3>
      <ul>
        <li>Responds to their name</li>
        <li>Babbles with different sounds (ba, da, ma)</li>
        <li>Uses gestures like waving or pointing</li>
        <li>Says one or two words (mama, dada)</li>
      </ul>

      <h3>By 18 months</h3>
      <ul>
        <li>Uses 10–20 words consistently</li>
        <li>Points to familiar objects when named</li>
        <li>Follows simple one-step instructions</li>
      </ul>

      <h3>By 24 months</h3>
      <ul>
        <li>Combines two words ("more milk", "daddy go")</li>
        <li>Has a vocabulary of at least 50 words</li>
        <li>Strangers can understand about 50% of what they say</li>
      </ul>

      <h3>By 36 months</h3>
      <ul>
        <li>Uses 3–4 word sentences</li>
        <li>Strangers can understand about 75% of speech</li>
        <li>Asks simple questions</li>
      </ul>

      <h2>When to seek an assessment</h2>
      <p>Seek an assessment if your child: has no words by 16 months, loses speech skills they previously had, doesn't respond to their name, or you have any concern at all about their communication development. A speech-language pathologist can assess your child and provide a clear picture within a single session.</p>

      <h2>Hearing first</h2>
      <p>Before a speech therapy assessment, a hearing test is recommended. Hearing loss is one of the most common causes of speech delay — and it's easily missed without a proper audiological evaluation.</p>
    `,
  },
  {
    slug: "living-with-tinnitus",
    tag: "Tinnitus",
    title: "Living with tinnitus — practical strategies",
    desc: "From sleep to concentration to social situations — evidence-backed strategies for managing tinnitus day to day while you undergo treatment.",
    readTime: "6 min",
    content: `
      <p>Tinnitus — the perception of sound in the absence of an external source — affects millions of people. While there is no universal cure, there are evidence-backed strategies that significantly reduce its impact on daily life.</p>

      <h2>Understanding the tinnitus-stress cycle</h2>
      <p>Stress and anxiety amplify the perceived loudness and intrusiveness of tinnitus. Tinnitus then causes more stress, creating a cycle that's difficult to break without deliberate intervention. Breaking this cycle is the foundation of most tinnitus management approaches.</p>

      <h2>Sound enrichment</h2>
      <p>Tinnitus is most noticeable in silence. Using background sound — a fan, white noise machine, nature sounds, or quiet music — reduces the contrast between the tinnitus and your environment, making it less intrusive. This is particularly helpful at night.</p>

      <h2>Sleep strategies</h2>
      <ul>
        <li>Use a white noise machine or app at a low level throughout the night</li>
        <li>Establish a consistent sleep routine</li>
        <li>Avoid caffeine after midday</li>
        <li>Keep the bedroom cool and dark</li>
        <li>Avoid lying in silence ruminating about the tinnitus</li>
      </ul>

      <h2>Mindfulness and relaxation</h2>
      <p>Mindfulness-based tinnitus stress reduction (MBTSR) has strong evidence for reducing tinnitus distress. The goal is not to eliminate the sound, but to change your relationship with it — observing it without judgement rather than fighting it.</p>

      <h2>Concentration and work</h2>
      <p>Background music (particularly instrumental) at a low level can provide sound enrichment without being distracting. Noise-cancelling headphones in open-plan offices can paradoxically worsen tinnitus — use them with low-level music rather than silence.</p>

      <h2>What to avoid</h2>
      <ul>
        <li>Further noise exposure without ear protection</li>
        <li>Silence (it makes tinnitus more noticeable)</li>
        <li>Excessive focus on the tinnitus</li>
        <li>High caffeine and alcohol intake</li>
        <li>Reading tinnitus forums obsessively (can increase anxiety)</li>
      </ul>

      <h2>Professional treatment</h2>
      <p>Sound therapy and Tinnitus Retraining Therapy (TRT) are the two most evidence-backed clinical treatments. TRT combines sound therapy with directive counselling and typically runs over 18–24 months, with most patients experiencing significant habituation.</p>
    `,
  },
  {
    slug: "hearing-loss-and-dementia",
    tag: "Research",
    title: "The link between hearing loss and dementia",
    desc: "Emerging research shows untreated hearing loss is one of the most significant modifiable risk factors for cognitive decline. What you should know.",
    readTime: "6 min",
    content: `
      <p>A growing body of research has established a significant association between untreated hearing loss and cognitive decline, including dementia. The Lancet Commission on dementia prevention identified hearing loss as the single largest modifiable risk factor for dementia — accounting for approximately 8% of cases.</p>

      <h2>The research evidence</h2>
      <p>A landmark Johns Hopkins study following 639 adults over 12 years found that mild hearing loss doubled the risk of dementia, moderate loss tripled it, and severe hearing loss increased the risk fivefold. More recent research has confirmed this association across multiple populations.</p>

      <h2>Why might hearing loss affect cognition?</h2>
      <p>Researchers have proposed several mechanisms:</p>
      <ul>
        <li><strong>Cognitive load:</strong> Struggling to hear consumes cognitive resources that would otherwise be used for memory and comprehension</li>
        <li><strong>Social isolation:</strong> Hearing loss often leads to social withdrawal, and social isolation is itself a risk factor for cognitive decline</li>
        <li><strong>Auditory deprivation:</strong> Reduced auditory input may lead to structural and functional changes in the brain over time</li>
        <li><strong>Common pathology:</strong> Hearing loss and dementia may share underlying causes such as vascular disease</li>
      </ul>

      <h2>Can hearing aids help?</h2>
      <p>Several studies suggest that treating hearing loss with hearing aids may reduce the risk of cognitive decline. A 2023 randomised controlled trial (ACHIEVE study) found that hearing intervention significantly slowed cognitive decline in older adults at higher risk. While causality hasn't been definitively established, the evidence for treating hearing loss — for cognitive as well as audiological reasons — is compelling.</p>

      <h2>What this means for you</h2>
      <p>If you or a family member has untreated hearing loss, seeking assessment and treatment is prudent — not just for hearing quality, but potentially for long-term brain health. A hearing test takes 30 minutes and is the essential first step.</p>
    `,
  },
]

export const tagColors: Record<string, string> = {
  Guide: "#E1F5EE", Tips: "#FAF7F2", Speech: "#F0EBE3", Tinnitus: "#FAF7F2", Research: "#E6F1FB",
}

export const tagTextColors: Record<string, string> = {
  Guide: "#0F6E56", Tips: "#1A3A2A", Speech: "#4A4A4A", Tinnitus: "#4A7C59", Research: "#185FA5",
}