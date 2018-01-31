---
layout: post
type: article
title:  "The Induction of the Jasmonic Acid (JA) Plant Defence Pathway Affecting the Host-Plant Selection of <i>Myzus persicae</i>"
date:   2017-02-20
volume: 2
field: Biology
tags: ['Arabidopsis thaliana', 'Myzus persicae', 'green peach aphid', 'host preference', 'metapopulation dynamics', 'herbivory', 'mechanical wounding', 'defence pathways']
author:
  - name: Al-Atout, Rama
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
  - name: Andres, Chimira
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
  - name: Chong, Michael
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
  - name: Edwards, Ross
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
  - name: Pantaleo, Julia
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
abstract: |- # this means to ignore newlines until next tag
  Host selection in aphids such as *Myzus persicae* is an intriguing research pathway which investigates aphid population interactions within ecological systems. Induced plant resistance activates an effective signalling pathway, the jasmonic acid pathway, and in turn affects the performance of aphids.  In this study, we look to study the short-term host selection and preference of *M. persicae* between wounded and healthy wild-type Arabidopsis plants. We conducted a microcosm experiment wherein aphid movement between neighbouring plants was observed over a 12-day period. Each microcosm contained one of four possible combinations of damaged and undamaged host plants, and three *M. persicae*. Host-plant preference was measured using the percentage of *M. persicae* that moved to or from damaged plants and analyzed using pairwise t-tests between treatments. *M. persicae* showed a preference for undamaged hosts over damaged hosts.
---

## Introduction

Host selection in aphids such as *Myzus persicae* is an intriguing research pathway that investigates aphid population interactions within ecological systems. Understanding the underlying mechanism of aphid metapopulation dynamics and how that is affected by the type and condition of the plant is crucial for predicting their movements between local crops or plants in general.

### Metapopulation Dynamics

Measuring aphid population movement is crucial for assessing the impact of generalist species like *M. persicae* on a species of plant, especially when introduced into a new environment. Seasonal migration is understood in the context of gene-environment interactions, in particular, how annual climatic change and day length influences genotype frequencies in different parts of the world. A study by Blackman in 1974, for example, reported significant differences in the sexual reproduction and emigration of *M. persicae* populations that correlated directly to temporal and climatic changes. This research, however, does not consider the immediate “decision-making” of *M. persicae*. Past research has investigated how the species of a host plant can affect host selection, as well as the factors that influence relocating to a new host plant between healthy plants (Sutherland and Mittler, 1971; Renzo, 2005) However, it is unknown whether mechanical damage to the plant plays a role in host selection.  

### Aphid Host Preference and Probing

Previous research has attempted to identify factors affecting aphid host preference. In an isolated system, we expect “plant crowding” to be the primary regulating factor and main reason for aphid migration between plants. Plant crowding occurs when multiple individuals in a population begin to compete for resources on the same plant (Sutherland and Mittler, 1971). However, other factors are known to affect the suitability of a host. All aphids exhibit some kind of leaf-probing behaviour before selecting a host plant (Goggin, 2007).  When an aphid probes a plant, it searches for cues such as pH, protein content, and sugar content to inform it if the chosen feeding spot is viable (Elzinga, et al., 2013). In addition to phloem sampling cues, present volatiles may also affect host preference (Renzo, et al., 2005). Depending on food source quality and plant defences, an aphid may migrate to a neighbouring plant and restart the probing process.

### Plant Defence

The jasmonic acid (JA) plant defence pathway, which is induced by outer cell tissue damage of a plant, can be harmful to aphids (Jaouannet, et al., 2014). Lipoxygenase, or LOX, is one of the first enzymes involved in the biosynthesis of JA (Moran, 2001). Leaf wounding as well as aphid feeding have been found to induce the expression of LOX genes, suggesting that plant sensitivity to phloem feeding can involve JA synthesis (Hyun et al., 2008), and the build-up of JA and methyl jasmonate, a methyl ester of JA (He, et al., 2002). The formation and accumulation of JA stimulate the induction of genes for proteinase inhibitors, which have been found to deter insect feeding by inhibiting major insect digestive enzymes (Rockwood, 2015), delaying larval development, and negatively affecting adult insect herbivores. This is supported by a study by Thaler, et al. (2001), which found that the presence of JA increased the activity of proteinase inhibitors and polyphenol oxidase, thus causing a consequent decrease in herbivory.

Given the negative effect of the JA defence pathway on aphid populations, it is hypothesized that aphids are less inclined towards mechanically damaged host plants due to the presence of metabolites from the induced JA pathway. In this experimental study, our goal was to understand whether *M. persicae* has a preference between mechanically damaged and undamaged host plants by analyzing the short-term migratory behaviour of *M. persicae* as a result of *A. thaliana*’s induced plant defence response. Specifically, our experiment attempted to determine if the induced JA pathway via mechanical wounding in *Arabidopsis thaliana* causes aphid relocation to an undamaged host plant.

In order to answer these questions, a controlled microcosm experiment using the interacting species *M. persicae* and *A. thaliana* was conducted wherein different combinations of damaged and undamaged plants were used to observe aphid host selection behaviour in each microcosm. This experimental design was used to answer the question: how does the JA pathway induced by mechanical wounding influence the short-range host selection of *M. persicae* using *A. thaliana* as a model host plant?

## Results

Since aphid populations varied among microcosms, the primary measure used to determine aphid host preference was the mean percentage of the total aphid population that migrated to Plant 2 in each microcosm – Plant 2 being the plant adjacent to Plant 1 where the aphids were originally placed. Only data from day 12, the final day, were used because analysis of the proportions over time would not provide additional useful information about the research question, and sufficient time was to be provided for *M. persicae* to move to the adjacent plant. Since the damaged-undamaged (Plant 1 was cut, Plant 2 was not cut) and undamaged-damaged (Plant 1 was not cut, Plant 2 was cut) systems are the relative extremes of the treatment environments, they are best suited to test the host preference. The means of these two treatment environments were therefore analyzed using a two-sample t-test (R, v. 3.2.2, 2015), and a significant difference between these means would signify a host preference.

To assess overall health of the systems, differences in mean gross microcosm population were analyzed using a one-way ANOVA based on treatment, and a two-way ANOVA based on treatment and block.

*M. persicae* showed a preference for undamaged hosts over damaged hosts. There was a significant difference (t4.9 = 3.04, p = 0.03; Figure 1) between the undamaged-damaged and damaged-undamaged systems in the distribution of *M. persicae* between the starting and adjacent plants. In both cases, the undamaged plant hosted a higher percentage of the gross microcosm population on day 12.

{% include figure.html
            fig="Figure1.png"
            title="Figure 1"
            caption="The distribution of a population of *M. persicae* between two *A. thaliana* plants 12 days after inoculation based on mechanical damage. Mean percentages (± 1 S.D.) of the gross microcosm population on both the inoculation plant and adjacent plant are shown for four different mechanical damage treatments. Statistically significant differences (p < 0.05) were determined by pair-wise two-sample t -tests and are indicated by different lowercase letters above bars for each system" %}


There was no significant effect (t11.5 = 0.40, p = 0.70) due to spatial block (Figure 2). There was also no significant relationship found in the ANOVA between the gross microcosm populations and the treatment (F3, 11 = 0.6, p = 0.60) gross microcosm populations and block (t10.1 = 1.28, p = 0.23); and the gross microcosm population and the interaction of treatment and block (F1, 11 = 0.07, p = 0.80).

{% include figure.html
            fig="Figure2.png"
            title="Figure 2"
            caption="The distribution of a population of *M. persicae* across a two -plant *A. thaliana* system 12 days after inoculation based on spatial block. Mean percentages (± 1 S.D.) of the gross population on the inoculation plant and adjacent plant are shown for the two spatial blocks. Statisti cally significant differences (p < 0.05) were determined by a two - sample t -test and are indicated by different lowercase letters above bars for each spatial block." %}


We noted that there were winged (alate) *M. persicae* found at multiple instances throughout the 12 day period, the first of which was found on day 4. The highest occurrences of alates were on days 6 and 7. Alates were initially found on the mechanically damaged plants, indicating that they were in a stressful environment and were attempting to leave that plant to find a better habitat.

## Discussion

Based on the obtained data, we determined that the *M. persicae* populations had a preference for healthy plants, the general trend showing that they moved towards the healthy plants and away from mechanically wounded plants. This demonstrates a correlation between the presence of JA and the relocation of *M. persicae* population, potentially as a result of environmentally regulated stressors. According to past research, the development of alates is an indication of a stressful host-plant environment (Sutherland and Mittler, 1971). The presence of alates in our experiment therefore implies that the treatments triggered stress in the populations. However, since our experiment was contained within two large containers each containing several plant microcosms, it is impossible to determine where an alate may have migrated to upon flight. Therefore, we cannot make any additional conclusions about our experiment based on the number of alates observed in each microcosm.

The two-plant model represents a closed small-scale ecosystem with a small number of variable parameters, and considers only one of several interactions. However, it is important to realize that host selection in aphids is a vastly complex group behaviour influenced by a variety of factors, such as aphid predation, which were not considered in this particular study. Thus, while we identified an isolated factor for host preference, it does not demonstrate the importance of this factor relative to other factors that affect host preference, or whether this preference can be practically manifested in the realized niche of *M. persicae*.

### Possible Confounding Factors

It was important that our results also showed that the gross populations were not significantly affected by the present factors, which would imply that the observed differences in plant populations were more heavily due to selection instead of host viability. Another important consideration must be made in relation to plant communication. Mechanical wounding triggers the release of volatiles, and one could argue that the volatile release caused by the JA pathway induced a plant defence response in neighbouring undamaged plants. However, it was shown by Thaler, et al. in 2001 that the magnitude of the plant defence response (i.e. activity of proteinase inhibitors and polyphenol oxidase) varies with the dose of JA, and so it can be reasonably assumed that the magnitude of the defence response of directly damaged plants was much higher than the indirectly volatile-induced response.

### Applications

Biocontrol over crops is a potential application of crop pest research involving *M. persicae*. Mechanical damage to crop plants is not a practical solution to preventing herbivory; however, research suggests that when JA is added to *A. thaliana* plants it increases trichome density, just as it would if the plant tissue was actually damaged (Traw and Bergelson, 2003). Thus, if the JA pathway is induced, aphid populations will try to relocate to another host due to increased defences. In an agricultural setting, JA could be applied in order to reduce aphid herbivory in crop fields, and divert their efforts towards alternate host plants surrounding the food crop. Though a large inventory of insecticides already exists, many have been shown to be problematic regarding environmental safety. JA could be less damaging to the surrounding environment, while facilitating the same defence against herbivory. Relevant research includes a study which compared JA as a deterrent spray, and conventional insecticide in relation to chilli plant growth (Awang, et al., 2015). The results showed significant evidence that JA lowers the severity and frequency of plant diseases, and improves the growth and yield of the chilli in most circumstances. Based on our results, it is probable that this effect is at least in part due to the mitigation of aphid feeding, since *M. persicae* is known to damage the chilli crop through phloem sucking and the transferral of viruses (Chakravarthy, 2015). It is important, however, to consider the variability of plant growth across plant biodiversity. Although JA was an effective alternative insect deterrent for chilli, it may not be a perfect fit for other crops. Future research efforts should explore the advantages and disadvantages of using JA as an insect deterrent on other species of food crops.

### Coevolution and Adaptation

The difference in adaptations to the JA pathway and the salicylic acid (SA) pathway in *M. persicae* provides interesting insight into the cost-benefit of adaptations, and strategies taken to mitigate plant defence. The phloem-sucking behaviour of *M. persicae* is known to trigger the SA defence pathway; thus, for all of the plants in our experiment, this pathway would have been induced. Since the aphids showed a preference for undamaged plants, this indicates that they have adapted to tolerate the SA pathway, but not the JA pathway. Highly co-evolved tolerance mechanisms include the production of detoxification enzymes to combat allelopathic chemicals of the SA pathway (Francis, et al., 2006). However, since aphids have not adapted to tolerate the JA pathway, the concentration of JA becomes a population-regulating factor that must be taken into account when selecting a host. From a cost-benefit perspective, it is much more beneficial for *M. persicae* to produce enzymes in response to the SA pathway, as it is always induced during feeding. In contrast, it is not as beneficial for *M. persicae* to produce defences against the JA pathway since it is only induced by external factors that may not always be present, and aphids have the option of relocating to a plant with a lower concentration of JA. Future research should consider this cost-benefit analysis when incorporating defence pathways into different experimental models. Based on the large uncertainty in our experiment, this research should also use large sample sizes to avoid population bias and collect more representative data.  

## Conclusion

In this study, we present evidence that the host selection and local spatial distribution of *M. persicae* is influenced by the mechanically damaged state of *A. thaliana*, showing a preference for undamaged host plants. This behaviour is likely an adaptation to the significant increase in plant defences from the induced JA pathway. The magnitude of this preference relative to other factors affecting host preference is not yet known, and the interaction of factors affecting host preference continues to be an area of interest.

## Materials and Methods

### Study System

The mobile organism we selected for this experiment was the Arabidopsis-reared green peach aphid, *M. persicae*. Although thought to originate from Asia, *M. persicae* currently has populations widespread across the globe. *M. persicae* is considered an economically important crop pest and an important distributor of various plant viruses (Bass, et al., 2014; Li, et al., 2015). It has a wide host range, including important crops such as potato and members of the Brassicacea family, totalling over 400 specific plant species from approximately 50 families (Bass, et al., 2014; Louis and Shah, 2013; Li, et al., 2015). *M. persicae* has a short development period and a relatively short lifespan, lasting approximately 50 days from the early instar phase to death (Musa, et al., 2004). For these reasons, studies regarding aphid host selection and aphid population control are of high practical relevance.

The host plant we selected for this study was wild-type *A. thaliana* (accession line: Col). Although not an economically relevant plant, this herbaceous member of the Brassicacea family is often used as a model organism in scientific studies. As such, much is known about *A. thaliana*’s fast life cycle, easily manipulated genome, and herbivore defence pathways (Mewis, et al., 2006). Its short generation time, small size, and inclusion in the *M. persicae* host range make it an ideal host plant for this study.

### Treatments

In order to determine the effects of host-plant health and condition on aphid host selection, we performed a microcosm experiment using potted wild-type *A. thaliana* and Arabidopsis-reared *M. persicae* from a laboratory colony. There were four treatments of microcosms, each consisting of a pair of *A. thaliana* plants connected by two “bridges” made from thin string and wooden dowels (Figure 3). Each microcosm consisted of three adult or late instar *M. persicae* inoculated near the bottom of the central stem on Plant 1 in each system. Each treatment had four replicates for a total of 16 microcosms used in the experiment. The microcosms were stored on large plastic trays which were covered with clear plastic domes with mesh tops for ventilation. Each tray held two replicates of each treatment. The treatments were arranged randomly on the trays.

{% include figure.html
            fig="Figure3.png"
            title="Figure 3"
            caption="The setup of a twoplant microcosm studied in this experiment. Each microcosm consisted of two adjacent *A. thaliana* plants varying in state of mechanical damage, and three *M. persicae* were inoculated on one of the plants. String bridges were erected with wooden dowels to facilitate aphid movement." %}

The four treatments, which will be described as starting plant-adjacent plant, included: (1) an undamaged-undamaged system, which acted as the control, (2) an undamaged-damaged system; (3) a damaged-undamaged system; and (4) a damaged-damaged system, which acted as the negative control. For each respective plant that was damaged, 30% of the leaves were cut to ensure plant survival. Three cuts were made to each cut leaf using scissors: one parallel to the main vein of the leaf at the leaf tip, and two perpendicular to the main vein with one on either side of the leaf. No cuts were made to remove sections of the leaf. We cut the leaves such that approximately an equal number of leaves were damaged in each quadrant of the plant.

The experiment lasted 12 days. We recorded aphid count on each plant in each microcosm on 9 of the 12 days the experiment was run (days 1, 4-8, 11, 12). All microcosms were watered once on day 7. In order to remove bias from the experiment, all microcosms were exposed to the same duration of sunlight and darkness, and the same environmental conditions.

## Acknowledgements

This research was adapted from work done for the Plant-Animal Interactions module of the Integrated Science program. We thank McMaster University and the Integrated Science program for access to laboratory materials, as well as Russ Ellis, Dr. Chad Harvey and Sebastian Irazuzta for their helpful feedback and support. We would also like to thank you, the reader, for your time. Here is a haiku for you:

### The Big Aphid: A Haiku

Big aphid leaves home

Bridge of string to distant land

Life without JA

## Author Contributions

All authors contributed equally to the final paper in terms of editing, writing, data collection, and experimentation. However, it should be noted that M.C. had a primary focus on statistical analysis, J.P.  had a primary focus on experimental set-up, and C.A., R.A., and R.E. had a primary focus on preliminary research and analysis of observations.

{% include references.md
            reference="
Awang, N.A.A., Ismail, M.R., Omar, D., and Islam, M.R., 2015. Comparative study of the application of jasmonic acid and pesticide in chilli: effects on physiological activities yield and viruses control. Institute of Tropical Agriculture, 31(3), pp.671-681.

Bass, C., Puinean, A.M., Zimmer, C.T., Denholm, I., Field, L.M., Foster, S.P., Gutbrod, O., Nauen, R., Slater, R., and Williamson, M.S., 2014. The evolution of insecticide resistance in the peach potato aphid, Myzus persicae. Insect Biochemistry and Molecular Biology, 51, pp.41-51.

Blackman, R.L., 1974. Life-cycle variation of Myzus persicae (Sulz.) (Hom., Aphididae) in different parts of the world, in relation to genotype and environment. Bulletin of Entomological Research, 63, pp.595-607.

Chakravarthy, A.K., 2015. New horizons in insect science: towards sustainable pest management. Karnataka, India: Springer.

De Vos, M., Kim, J. and Jander, G. 2007. Biochemistry and molecular biology of Arabidopsis–aphid interactions. Bioessays, 29(9), pp.871-883.

Francis, F., Gerkens, P., Harmel, N., Mazzucchelli, G., de Pauw, E. and E. Haubruge, 2006. Proteomics in Myzus persicae: effect of aphid host plant switch. Insect Biochemistry and Molecular Biology, 36, pp.219–227.

Goggin, F.L., 2007. Plant–aphid interactions: molecular and ecological perspectives. Current Opinion in Plant Biology, 10, pp.399–408.

He, Y., Fukushige, H., Hildebrand, D. and Gan, S. ,2002. Evidence supporting a role of jasmonic acid in Arabidopsis leaf senescence. Plant Physiology, 128(3), pp.876-884.

Jaouannet, M., Rodriguez, P., Thorpe, P., Lenoir, C., MacLeod, R., Escudero-Martinez, C. and Bos, J. 2014. Plant immunity in plant-aphid interactions. Frontiers in Plant Science, 5.

Kettles, G. J., Drurey, C., Schoonbeek, H., Maule,  A.J. and Hogenhout, S.A., 2013. Resistance of Arabidopsis thaliana to the green peach aphid, Myzus persicae, involves camalexin and is regulated by microRNAs. The New Phytologist, 198, pp.1178-1190.

Li, J., Cao, J., Niu, J., Liu, X. and Zhang, Q., 2015. Identification of the population structure of Myzus persicae (Hemiptera: Aphididae) on peach trees in China using microsatellites. Journal of Insect Science, 15(1), p.73.

Louis, J. and Shah, J., 2013. Arabidopsis thaliana—Myzus persicae interaction: shaping the understanding of plant defence against phloem-feeding aphids. Frontiers in Plant Science, 4, p.213.

Mewis, I., Tokuhisa, J.G., Schultz, J.C., Appel, H.M., Ulrichs, C. and Gershenzon, J., 2006. Gene expression and glucosinolate accumulation in Arabidopsis thaliana in response to generalist and specialist herbivores of different feeding guilds and the role of defence signaling pathways. Phytochemistry, 67, pp.2450-2462.

Musa, F.M., Carli, C., Susuri, L.R. and Pireava, I.M. ,2004. Monitoring of Myzus persicae (Sulzer) in potato fields in Kosovo. Acta Agriculturae Slovenica, 83, pp.379–385.

Patrick J. and Moran, G., 2001. Molecular responses to aphid feeding in Arabidopsis in relation to plant defence pathways. Plant Physiology, 125(2), p.1074.

R Development Core Team, 2014. R: a language and environment for statistical computing. R Foundation for Statistical Computing.

Rockwood, L. 2015. Introduction to population ecology, 2nd ed. West Sussex, United Kingdom: John Wiley & Sons.

Seigler, D. S. 2012. Plant secondary metabolism. New York : Springer Science & Business Media.

Sutherland, O.R.W. and Mittler, T.E., 1971. Influence of diet composition and crowding on wing production by the aphid Myzus persicae. Journal of Insect Physiology, 17, pp.321-328.

Thaler, J., Stout, M., Karban, R. and Duffey, S. 2001. Jasmonate-mediated induced plant resistance affects a community of herbivores. Ecological Entomology, 26(3), pp. 312-324.

Traw, M.B. and Bergelson, J., 2003. Interactive effects of jasmonic acid, salicylic acid, and gibberellin on induction of trichomes in Arabidopsis. Plant Physiology, 133, pp.1367–1375.

Vargas, R.R., Troncoso, A.J., Tapia, D.H., Olivares-Donoso, R. and Niemeyer, H., 2005. Behavioural differences during host selection between alate virginoparae of generalist and tobacco-specialist Myzus persicae. The Netherlands Entomological Society, 116, pp.43-52.

War, A.R., Hussain, B. and Sharma, H.C., 2013. Induced resistance in groundnut by jasmonic acid and salicylic acid through alteration of trichome density and oviposition by Helicoverpa armigera (Lepidoptera: Noctuidae). AoB Plants, 5, p.53.
"
%}
