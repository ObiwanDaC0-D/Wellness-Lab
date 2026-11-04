import {additionalItems} from './additional-data.js';
// Editorial content is illustrative educational synthesis, not a clinical recommendation.
// Evidence labels are qualitative context, never numeric ratings.
export const domains=["Foundations","Therapies","Cognition","Emotion","Trauma","Neuroscience","Flourishing","Methods"];
export const items=[
["reappraisal","Cognitive reappraisal","Emotion","Changing an interpretation to alter its emotional impact.","A central strategy in the process model of emotion regulation.","Can be helpful in some contexts; effectiveness depends on timing, goals and situation.","Not every emotion should be reinterpreted; acceptance can be more suitable.","gross","cbt,act,stress"],
["cbt","Cognitive Behavioral Therapy","Therapies","A family of structured approaches targeting patterns of thought and behavior.","Cognitive and behavioral learning principles; formulation and collaborative testing.","Supported by substantial clinical trial evidence for several conditions, with condition-specific variation.","Effects vary across problems, settings and individuals; therapist competence matters.","beck","reappraisal,exposure,activation"],
["act","Acceptance and Commitment Therapy","Therapies","An approach emphasizing acceptance, defusion and values-guided action.","Psychological flexibility and contextual behavioral science.","Trials and reviews support benefits for some outcomes; comparative superiority is not established generally.","Specific mechanism evidence and comparison with other active therapies remain active research topics.","hayes","flexibility,mindfulness,cbt"],
["mindfulness","Mindfulness","Emotion","Attention to present-moment experience with a less reactive stance.","Attention regulation, awareness and altered relationship to experiences.","Mindfulness-based programs have evidence for selected outcomes; effects vary by population and comparator.","Not a universal treatment; adverse experiences and methodological limitations deserve attention.","kabat","mbsr,act,interoception"],
["mbsr","Mindfulness-Based Stress Reduction","Therapies","Structured mindfulness training originally developed for stress-related difficulties.","Mindfulness practice, body awareness and group learning.","Evidence suggests benefits for stress-related outcomes, with variable study quality and effect magnitude.","Not equivalent to a disorder-specific first-line treatment.","kabat","mindfulness,stress"],
["dbt","Dialectical Behavior Therapy","Therapies","A structured treatment combining behavioral strategies with acceptance skills.","Skills in emotion regulation, distress tolerance, mindfulness and interpersonal effectiveness.","Evidence supports DBT for particular clinical populations and outcomes.","Full treatment is more than stand-alone skills worksheets.","linehan","mindfulness,flexibility"],
["emdr","Eye Movement Desensitization and Reprocessing","Therapies","A structured trauma-focused psychotherapy.","Trauma memory processing using bilateral stimulation within a larger treatment protocol.","Recommended as an evidence-based PTSD treatment by some major guidelines.","The specific contribution of eye movements and proposed mechanisms remain debated.","shapiro","ptsd,exposure"],
["exposure","Exposure and inhibitory learning","Trauma","Approaching feared cues in safe, planned conditions to develop new learning.","Fear extinction and inhibitory learning models.","Exposure-based interventions have strong evidence for several anxiety-related conditions and PTSD.","Educational simulations are not exposure therapy; clinical work may require professional guidance.","pavlov","cbt,emdr,ptsd"],
["ptsd","Post-traumatic stress disorder","Trauma","A condition involving trauma-related symptoms and functional impairment.","Multiple interacting learning, memory, appraisal and biological processes.","Clinical guidelines support several trauma-focused psychotherapies.","No single physiological marker or theory fully explains PTSD.","","exposure,emdr,stress"],
["stress","Stress response and allostasis","Neuroscience","Adaptive physiological and behavioral responses to demands.","Autonomic, endocrine, cognitive and social systems interact.","Stress physiology is well-established; individual response trajectories vary.","Simple arousal diagrams are conceptual, not measurements of cortisol or autonomic balance.","lazarus","interoception,reappraisal,ptsd"],
["interoception","Interoception","Neuroscience","Sensing and interpreting signals from inside the body.","Neural processing of bodily state and its relation to emotion.","Research links interoception to affect and bodily awareness; causal intervention evidence varies.","Self-reports, performance and neural measures are not interchangeable.","barrett","stress,mindfulness"],
["memory","Retrieval practice and spacing","Cognition","Remembering by actively recalling information over distributed sessions.","Retrieval strengthens later access; spacing changes learning opportunities.","Robust learning-science evidence supports retrieval and spacing in many educational settings.","Optimal intervals depend on material, learner and retention goals.","","attention,plasticity"],
["attention","Executive attention and inhibition","Cognition","Selecting task-relevant information and managing competing responses.","Executive control processes and context-sensitive resource allocation.","Laboratory tasks measure narrow performance under controlled conditions.","Game scores are not clinical tests or reliable measures of general intelligence.","","memory,plasticity"],
["plasticity","Neuroplasticity","Neuroscience","Experience-dependent change in neural function and organization.","Synaptic and network-level adaptation.","Learning-dependent plasticity is well supported; broad cognitive-training transfer is often limited.","Brain change does not guarantee general performance improvement.","","memory,attention"],
["flexibility","Psychological flexibility","Flourishing","Responding adaptively while acting in line with chosen values.","Acceptance, awareness, cognitive defusion and committed action.","Associated with well-being and central to ACT research.","Associations and mediation analyses do not by themselves establish causal mechanisms.","hayes","act,dbt,reappraisal"],
["activation","Behavioral activation","Therapies","Increasing engagement with meaningful and reinforcing activities.","Behavioral learning and changes in activity patterns.","Supported as a treatment approach for depression in clinical research.","A self-guided educational habit exercise is not a substitute for treatment.","skinner","cbt,habits"],
["habits","Habit formation and reinforcement","Cognition","Repeated context-response learning and behavioral consequences.","Reinforcement, cues and automaticity.","Strong basic behavioral evidence; popular fixed-day habit claims oversimplify variability.","Habit formation varies widely by behavior and context.","skinner","activation,memory"],
["perma","PERMA and flourishing","Flourishing","A framework organizing positive emotion, engagement, relationships, meaning and accomplishment.","Multidimensional model of well-being.","Useful as a conceptual and measurement framework; components overlap with other models.","It is not a universally validated causal recipe for happiness.","seligman","flexibility,habits"],
["polyvagal","Polyvagal Theory","Trauma","A proposed account of autonomic states and social behavior.","Specific evolutionary and physiological claims about vagal pathways.","Some broad autonomic concepts overlap established physiology, but key distinctive claims are contested.","Do not treat the theory as established neurophysiological consensus.","","stress,interoception"],
["ifs","Internal Family Systems","Therapies","A parts-oriented model for understanding internal experiences.","Proposed internal parts and compassionate self-leadership.","Research is emerging but limited relative to established therapies.","The parts model is a therapeutic metaphor, not established brain anatomy.","","flexibility,ptsd"],
["rct","Randomized controlled trials","Methods","Studies that randomly allocate participants to interventions.","Randomization reduces some selection confounding.","Well-conducted RCTs inform causal inference about interventions.","Bias, attrition, small samples and external validity still matter.","","meta"],
["meta","Systematic reviews and meta-analysis","Methods","Structured evidence synthesis across studies.","Transparent searches, risk-of-bias assessment and statistical pooling when appropriate.","Can provide strong evidence when underlying studies and methods are sound.","Pooling biased or heterogeneous studies does not fix their weaknesses.","","rct"]
];
items.push(...additionalItems);
export const thinkers=[
["beck","Aaron Beck","Cognitive therapy and cognitive models of depression","cbt,reappraisal"],
["gross","James Gross","Process model of emotion regulation","reappraisal"],
["hayes","Steven C. Hayes","ACT and psychological flexibility","act,flexibility"],
["kabat","Jon Kabat-Zinn","MBSR and secular mindfulness programs","mbsr,mindfulness"],
["linehan","Marsha Linehan","Dialectical Behavior Therapy","dbt"],
["shapiro","Francine Shapiro","Development of EMDR","emdr"],
["pavlov","Ivan Pavlov","Classical conditioning","exposure"],
["lazarus","Richard Lazarus","Cognitive appraisal and stress theory","stress"],
["barrett","Lisa Feldman Barrett","Constructed emotion and affective neuroscience","interoception"],
["skinner","B. F. Skinner","Operant conditioning and behavior analysis","habits,activation"],
["seligman","Martin Seligman","Learned helplessness and positive psychology","perma"],
["rogers","Carl Rogers","Person-centered psychotherapy","flexibility"],
["bandura","Albert Bandura","Social cognitive theory and self-efficacy","habits"],
["freud","Sigmund Freud","Psychoanalysis; major historical influence, disputed empirical claims","ptsd"],
["piaget","Jean Piaget","Cognitive developmental theory","memory"],
["vygotsky","Lev Vygotsky","Social learning and cultural development","memory"],
["kahneman","Daniel Kahneman","Judgment, decision-making and cognitive biases","attention"],
["neff","Kristin Neff","Self-compassion research","mindfulness"]
];
thinkers.push(
["ellis","Albert Ellis","Rational Emotive Behavior Therapy","rebt,cbt"],
["bowlby","John Bowlby","Attachment theory","attachment"],
["deci","Edward Deci and Richard Ryan","Self-determination theory","selfdetermination"],
["ainsworth","Mary Ainsworth","Attachment research and the Strange Situation","attachment"],
["tversky","Amos Tversky","Judgment and decision research","cognitive"],
["frankl","Viktor Frankl","Existential meaning-centered psychotherapy","perma"],
["csikszentmihalyi","Mihaly Csikszentmihalyi","Flow and optimal experience","perma"]
);
export const pathways=[
["Psychological Science","rct,meta,attention,memory"],
["Cognitive and Behavioral Therapies","cbt,reappraisal,activation,exposure"],
["Mindfulness and Emotion","mindfulness,mbsr,reappraisal,flexibility"],
["Trauma and Recovery","ptsd,stress,exposure,emdr"],
["Learning and Performance","memory,attention,plasticity,habits"],
["Well-Being and Flourishing","perma,flexibility,habits"]
];
export const sources=[
["NICE PTSD guideline NG116","https://www.nice.org.uk/guidance/ng116","Clinical guideline","2018, updated"],
["VA/DoD PTSD Clinical Practice Guideline","https://www.healthquality.va.gov/guidelines/MH/ptsd/","Clinical guideline","2023"],
["NCCIH Meditation and Mindfulness","https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety","Evidence overview","Living resource"],
["APA Division 12 Treatment Resources","https://div12.org/treatments/","Treatment evidence resource","Living resource"],
["PubMed","https://pubmed.ncbi.nlm.nih.gov/","Bibliographic database","Live search"],
["OpenAlex","https://openalex.org/","Research discovery","Live search"],
["Crossref","https://search.crossref.org/","DOI metadata discovery","Live search"]
];