---
layout: post
title:  "Redefining Invasive Species Using a Stage-Based Process"
date:   2018-01-20
volume: 3
categories: original
field: Biology
tags: [Invasion ecology, invasive species, stage-based model, propagule pressure, resource availability, energy consumption, reproductive capability]
filename: 2018-01-20-BiderRedefining
author:
  - name: Daniel, Tanya
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
  - name: Bider, Pascale
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
  - name: Tweedle, Adam
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
abstract: |- # this means to ignore newlines until next tag
  Invasion ecology explores the impacts of new species entering established ecological niches and communities. While the effects of invasive species are frequently discussed in both industry and academia, the definition of invasion remains vague, arbitrary, and based on human perception. The objective of this project was to better define species invasion using a mechanistic, stage-based perspective. Several authors have attempted to develop a definition that focuses on the process of invasion, rather than on the characteristics of the (potentially) invasive species. This process encompasses three main stages: transport, establishment, and spread. The purpose of a stage-based definition is to classify a given species by its progression through the invasion process. By integrating existing definitions, we propose a novel version of the stage-based process of invasion. This approach incorporates extrinsic factors such as competition, predation, and parasitism in addition to contingent physical forces such as flooding, freezing, and fire. Therefore, a wide variety of species will be able to fit into this definition. To demonstrate its effectiveness, we test our definition with an agent-based model that simulates the influence of multiple ecological factors (propagule pressure, resource availability, energy consumption, reproductive capability), which can either inhibit or assist the invasion of a species. Adopting a more comprehensive method for defining invasive species will allow for better communication within invasion ecology research and throughout the scientific community. Ultimately, our definition helps to simplify the process of developing a practical invasion prevention policy that can be implemented at multiple stages for full effectiveness.
---

## Introduction

Since the emergence of invasion ecology as a field, there have been many different words used to refer to a species that has travelled out of its native range. Terms such as “invasive”, “alien”, “introduced”, “exotic”, “imported”, “naturalized”, and “non-native” frequently appear in the literature, but generally remain poorly defined (Pereyra, 2016; Valéry et al., 2008). Authors will use some or all of these terms, but each with their own personal connotation. Despite ever-growing awareness of invasive species and invasion ecology, there has yet to be a consensus regarding how and when these terms should be used. For a comprehensive comparison of the following definitions found in the literature and for the general public, see Table 1.

### Definitions based on negative impacts

Many definitions of invasive species hinge on the idea that they are necessarily harmful. An example of such a definition comes from Russell and Blackburn (2016), who argue that an alien species becomes invasive only when it exceeds a given damage threshold. Another similar definition can be found in Richardson et al.’s (2000) paper, who claim that alien species makes the shift from “naturalized” to “invasive” when it begins to have detectable consequences. This paper also proposes to label those alien species, once they are regarded to be harmful, as “pests” and “weeds”.

The method of classifying species based on how harmful they are to their surroundings has some obvious issues. To use such a definition, we must define what constitutes “invasive”, as well as what constitutes a “negative impact”. Our perception of what is “negative” is heavily based on social values (Tassin et al., 2017). Invasive species have a variety of consequences, ranging across ecological, biological, economic, or social impacts. The introduction of a new species may result in negative consequences within certain areas, but not in others. When using these types of definitions, some may choose to label a given species as invasive, while others will not. Differences in values could result in confusing language and misuse of terms (Tassin et al., 2017). Additionally, defining “invasive species” based on their negative impacts makes it difficult to categorize species who have the potential for negative impacts in the future (Russell and Blackburn, 2016).

### Definitions based on human facilitation

Another problem that is presented by many current definitions of the term “invasive” is that, by some standards, an invasive species must be introduced through human means. Gilroy et al. (2016) argue that, since we need different management practices for species introduced with human aid and species introduced without, any definition used should clearly differentiate the two. It has been proposed that terms such as “invasion” be reserved for the cases where species distribution is changed by human activity (Gilroy et al., 2016; Pysek et al, 2004). Several legislative bodies have incorporated this school of thought in their definitions (Gilroy et al., 2016). For example, the European parliament stated in 2014 that an “alien” species is identified as “any live specimen introduced outside its natural past or present distribution” where introduction signifies “the movement by human intervention” (Gilroy et al., 2016). Additionally, it has been said that since non-human-mediated introductions are so rare, they should be classified as natural rather than invasive (Richardson et al., 2000).

This type of definition is problematic for many reasons. First, organisms can travel to new regions without the aid of humans. For example, in one of the first works to ever describe invasive species, Charles Elton explains that since many migratory birds travel across the globe, they can easily transport seeds, small eggs, or even microscopic organisms far from their usual range (Elton, 1958). Secondly, classification is difficult when a species uses human-mediated processes only temporarily, or for only a part of their journey to a new habitat. For example, bats may temporarily rest on boats when travelling over water from one range to the next (Gilroy et al., 2016). There is ambiguity when a species travels to a new area by more than one pathway, some human-mediated and some not (Hulme et al., 2016). This approach can also complicate the labelling of a newly-arrived species whose vector of transport is still unknown. Some argue that once a species is introduced, it makes no difference from an ecological perspective whether the introduction was human-mediated or not (Heger and Trepl, 2003). Therefore, no distinction needs to be made between the two. Many texts have now adopted this point of view (Valéry et al, 2008; Colautti and MacIsaac, 2004; Vermeij, 1996).

### Definitions using pejorative language

Texts describing species establishing themselves outside of their native range will often do so using unnecessarily pejorative or value-laden terms. The term “invasive” in itself can be associated with concepts such as “attack” or “aggression” (Richardson et al., 2000). However, this term has been used more often than any other in recent literature (Pereyra, 2016). Additionally, some papers may choose to use other pejorative terms such as “pest” and “weed” (Richardson et al., 2000; Pysek et al., 2004). This type of language is problematic as it may lead to biased attitudes towards non-native species (Pereyra, 2016). Viewing all invasive species as harmful attackers can cause us to overlook their potential uses and benefits (Geniusz, 2015). Some have proposed the replacement of biased terms by neutral ones, such as “alien”, “introduced” or “neobiota” (Pereyra, 2016). However, given how commonly some of these pejorative words are used, it may seem unrealistic to remove them from our language altogether.

### Definitions that are excessively specific

Throughout the literature, several definitions of “invasive” require the species to fit within highly specific, and relatively arbitrary, criteria. For example, Richardson et al. (2000) propose that, in order to be considered invasive, a plant must be carried further than 100 km from their native range. Then, plants spreading by seed must continue to expand in their new range at a rate of over 100 m in under 50 years (or over 6 m in under 3 years for plant spreading by root or rhizome). These minimum distances must be met in order for the plant to be considered invasive (Richardson et al., 2000). Another example can be found in the 2004 article by Pysek et al. where it is stated that a “naturalised alien” is a plant that has sustained a self-replicating population for at least 10 years without aid from humans. These overly precise definitions can be difficult to apply to a wide range of species. In addition, some feel that overly specific, academic language can complicate communication between invasion ecologists and the general public (Pereyra et al, 2016).

### The importance of a standardized definiton  

This inconsistency present in invasion ecology vocabulary has arisen as a result of many factors. First, it has been speculated that since invasion biology has not been studied as a holistic field until recently, the separate disciplines previously concerned with species invasion have each established their own definitions (Pysek et al., 2004). Consequently, we have definitions that come from ecological, biogeographical, and anthropocentric perspectives, to name only a few (Pysek et al., 2004). Furthermore, invasion ecologists concerned with different taxonomic groups have generated definitions that are applicable only to their taxa and not others (Blackburn et al, 2011). In particular, there tends to be a divide between ecologists studying plants and animals (Blackburn et al. 2011). Some plant ecologists might use the term “invasion” to define the local establishment of new populations, whereas outside of this field, the same process might be defined as “colonisation” (Richardson et al., 2000). For example, Taxillus tomentosus (mistletoe) has been called invasive to certain forested areas in South India, even though the plant is native in this general region (Rist et al., 2010).

Another potential reason for misunderstanding regarding current terminology could be the result of different languages in which invasion ecology has been studied and written. Researchers from all over, particularly in Central Europe, have contributed to the field of invasion ecology. Richardson et al. (2000) suggest the nuances with which terms are used in French, German, or other languages are not fully translated into English (Richardson et al., 2000). Furthermore, changes within the English language itself could also be responsible for this confusion (Richardson et al., 2000). Many of the terms used to talk about invasive species were defined before the complexities of the invasion process were fully understood. For example, the term “naturalized” appeared in biological literature in the mid-19th century, but invasion ecology as a field only began to emerge a century later (Richardson et al, 2000; Elton, 1958).

Overall, this has led to terms such as “invasive”, “native”, “alien”, and “naturalised” being used throughout the literature with a variety of definitions and connotations. Imprecise language and definitions cause many problems for studying and writing about invasive species. Ultimately, it hampers comparison between studies (Blackburn et al., 2011). By its very nature, invasion ecology requires comparing data sets from geographically separate regions (Pysek et al., 2004). In order to detect trends, it is important to know what species are native to what region, and what species are invasive elsewhere (Pysek et al., 2004). If researchers do not use the same criterion when labelling their species under investigation, comparison of data becomes impossible (Hulme and Weser, 2011). Secondly, inconsistent labelling complicates communication with the general public. The use of multiple different terms to describe invasive species can lead to both the public and the media misinterpreting information (Russell and Blackburn, 2017). Difficulty in interpreting data surrounding invasive species can then lead to the implementation of inadequate policy and legislation (Gilroy et al., 2011). Since the term “invasive species” is connoted with negative impacts, the species thus labelled are more likely to be targets for eradication policy. Meanwhile, species labelled as “native” or a similar term might become protected by legislation (Gilroy et al., 2011). The values we attach to the terms we use then inform environmental agendas (Pereyra, 2016). Evidently, it is vital to establish a clear-cut definition of “invasiveness” that can be applied to all species, while being separated from human values, and accounts for the entire invasion process.

## The stage-based Approach

To properly distinguish a native species from a species currently undergoing the process of invasion, an alternative definition must be proposed. This improved definition must consider the process of invasion, rather than focusing solely on a species’ capacity to spread and reproduce. Thus, a stage-based definition studies the progression of the potentially invasive species’ ability to occupy a new environment. There are three fundamental stages within a stage-based definition: transport, establishment, and spread. Within each stage, there are several factors that either inhibit or assist the species when moving from one stage to the next. In our proposed definition of the stage-based process of invasion, these extrinsic and contingent factors are included.

A stage-based perspective is more beneficial as a definition because it can encompass multiple pathways by which a species can invade. Due to the definition’s broader perspective, the focus is now on the ecological logistics - of both the environment and the species - which allow for invasion to occur. Since the stage-based perspective looks at the process overall, the development of prevention techniques and policies can be created to stop the invasion of a species, if necessary. As Jeschke et al. (2014) state, impact can occur at any stage. Our definition is broad enough to show how changes to the environment can happen, but these effects are not implied to be decidedly positive or negative. Thus, it is not assumed that all invasive species are detrimental to an environment.

Much of a species’ ability to invade is based on circumstance and random factors (Heger and Trepl, 2003). Our definition looks to include contingency and variability among species and the environment so that invasion can be generalized to a process. Furthermore, looking at invasion as a process allows investigation into the relationship and properties of both the invading species as well as the ecosystem itself. Invasion could be regarded as a temporally-dependent process rather than spatially-dependent. Overall, our proposed model builds on a more holistic perspective.

### The proposed invasion process

Expanding from an invasion model proposed by Blackburn et al. (2011), we integrate previous versions of the invasion model to develop a broader stage-based definition (Figure 1).

#### Stage 0: Origin

Most models of invasion are fundamentally built around three main stages: transport, establishment, and spread (Blackburn et al., 2011; Lockwood et al., 2007; Colautti and MacIsaac, 2004; Heger and Trepl, 2003; Sakai et al., 2001). We have decided to keep these three stages as well as add a *Stage 0*: Origin. This stage represents a species in its natural habitat. Although several papers have varying definitions for the meaning of a native species and its home region (Lockwood et al., 2007; Colautti and MacIsaac, 2004; Heger and Trepl, 2003; Sakai et al., 2001), the general consensus is that a native habitat is wherever the invading species has travelled from. For our purposes, we will regard *Stage 0* as a relative region so that a change in habitat is evident. Thus, this could be regarded as the donor region. Species survive and thrive in this first region before entering *Stage I* of the invasion process.

The Region numbers of our model are intended to quantify species movement as it progresses through the stages of invasion. To classify a species as being in *Stage 0*, the species must not inhabit more areas than those it is native to. However, once the species has commenced the invasion process, it will move to occupy increasingly more regions over time.

#### Stage I: Transport

In current literature, the first stage of transport (*Stage I*) is presented in a manner that is saturated with human bias. One source of this issue is that invasive species are believed to necessarily use human-mediated vectors. Our version of *Stage I* is broad enough to include human-facilitated transport as well as any other contributor to species movement that might arise. We primarily utilise Vermeij’s (1996) definition of biotic interchange, which refers to the expansion of a species’ range, as our definition for transport. More simply, transport is a broad term for a portion of a species’ population leaving its original habitat and entering a novel environment. Our definition regards transport of invasive species as any movement of a species, regardless if it was accomplished through a human-mediated vector or a non-human-mediated vector. Lockwood et al. (2007) and Sakai et al. (2001) distinguish several pathways of transport caused by humans which include but are not limited to: farming and hunting, environmental enhancement, biocontrol, conservation, and scientific pursuits. Examples of unintentional human-mediated transport include movement of species from airplane, automobile, and boat travel (Lockwood et al., 2007; Sakai et al., 2001). Although the transport of invasive species is usually due to human activity, natural transport can also occur, such as by wind and bird migrations (Lockwood et al., 2007). It should be noted that the success rate of a particular transport vector can change over time. For instance, the ability to travel across greater distances is increasingly becoming faster and more accessible. Additionally, transport is its own stage because it may take multiple trials and various new habitats before an invasive population can settle.

For survival through *Stage I*, there are multiple factors to take into account in order to overcome Barrier a: Geography. The vector itself must be sustainable to support the invasive population. For example, a greater distance to travel will likely result in fewer viable healthy individuals to establish in the new region. To counter this effect, a greater number of individuals could be transported to increase the chance of survivors. This is referred to as propagule pressure, which is defined as the size of the invading population as it enters the new habitat (Blackburn et al., 2011; Lockwood et al., 2007; Colautti and MacIsaac, 2004; Sakai et al., 2001). Another factor associated with propagule pressure is the frequency of the transport, and whether or not the invasive species population is being regularly replenished with healthy individuals to assist in mating, dealing with environmental stochasticity (unpredictable and stressful weather patterns), and maintaining competitive interactions with species in the novel region (Lockwood et al., 2007). As the density of the invasive population develops, it is more likely to establish.

Overall, the greater the propagule pressure, the more likely a species will succeed in entering *Stage II*. Our definition of *Stage II* resembles the description by Blackburn et al. (2011), which is that establishment refers to a single self-sustaining population over multiple generations in a localized region. Interestingly, there can be an intermediate period of time before an invasive species becomes self-sustaining in Region 2, which is denoted as The Lag Period (Lockwood et al., 2007; Sakai et al., 2001). This has been suggested to be the result of exponential population growth trends or a temporary timeframe used to increase propagule pressure (Sakai et al., 2001). Since the time frame varies per species, has not been well-recorded, and would not be considered a barrier to overcome, it is not included in our model as a separate section, but rather as a factor within Barrier b: Survival.

#### Stage II: Establishment

Colautti and MacIsaac (2004) separate establishment as 1) widespread but rare or 2) localized but dominant. We chose not to separate establishment into two distinct types but rather focus on the process of establishment within invasion. *Stage II* is broken down into two barriers because success in surviving is separate from success in reproducing (Blackburn et al., 2011; Heger and Trepl, 2003). Within Barrier b: Survival, the species must be able to survive against predators as well as compete for resources among natural inhabitants. Essentially, basic physiological needs must be met. This ability to survive in the new environment stems from the interactions between the natural region’s species and the invasive species. This includes competitive exclusion, predation (predator-prey), parasitism (parasite-host), herbivory (herbivore-plant), and mutualism (Lockwood et al., 2007; Sakai et al., 2001). Furthermore, r-selected species would have drastically different establishment and reproductive strategies than k-selected species. Since factors like fecundity, generation growth time, individual growth rates, and specialist versus generalist qualities depend on the particular species, they are not the sole reason for a species’ ability to invade. As a result, it is more correct to look at ecological interactions. All species-species interactions may work in favour or against an invading species. For instance, the invasive species may find that access to resources is easier in the new environment due to lack of predators and similar niche-sharing species. On the other hand, the invasive species may not have the fitness to exploit or compete for nutritional resources with current inhabitants. Moreover, mutualism can have both positive or negative effects. A lack of mutualism can inhibit a species’ population growth, while on the other hand, a newly established mutualism interaction can allow the species to thrive (Sakai et al., 2001). In addition to species-species interactions, Barrier b also includes the theory of disturbance and its role in allowing a species to invade (Lockwood et al., 2007; Sakai et al., 2001). This theory explains that environmental changes, as a result of human activity or natural activity, can lead to niche modifications which allow for invading species to enter (Lockwood et al., 2007; Sakai et al., 2001).

Within Barrier c: Reproduction, the invasive species must be near other viable mates. This proximity impacts an invading species’ genetic variation, which can be both advantageous or detrimental to the population (Dick et al., 2012; Lockwood et al., 2007; Sakai et al., 2001). Without genetic diversity, a population may not have the suitable characteristics to survive in the new habitat. This phenomenon is known as the founder effect, resulting in a bottleneck population. Limited genetic variation within a population leads to inbreeding depression and can limit population growth, and thus decreases establishment potential (Tsutsui et al., 2000; Sakai et al., 2001). However, the funneling of genetic diversity could also be beneficial to allow for adaptive evolution. The invading species may already have relatively pre-adapted traits that allow the species to grow in the new environment (Sakai et al., 2001). In summary, if the alleles that express the greatest fitness remain, the invasive species is more likely to establish. If the alleles express unsuitable traits, then the invasive species is more likely to fail. Furthermore, hybridization of native species with invasive species can be both beneficial or inhibiting (Sakai et al., 2001). The introduction of these new genes may lead to an increase in fitness or it can lead to genetic assimilation. In all of these cases, natural selection may favour the native species instead of the invasive species and vice versa. Evidently, genetic diversity and propagule pressure play an essential role in conjunction with species-species interactions to allow for an invasive species to establish.

#### *Stage III*: Spread

Once capacity of Region 2 has been reached or enough individuals are present in the settled population, the invasive population can move onto *Stage III* with the proper transport. Barrier d: Dispersal is similar to *Stage I*, but the colonization outwards from Region 2 tends to be more localized (Chapple et al., 2012; Sakai et al., 2001). In these newly introduced regions, the previously single, self-sustaining invasive population has now increased to two or more established communities. For Barrier e: Survival, this is similar to *Stage II* in terms of the factors that allow an invading species to live in the newest habitats. Genetic diversity, morphological traits, and reproductive rates are all key components in invasion. *Stage III* can theoretically occur in an infinite number of new regions for an infinite amount of time. In simple terms, *Stage III* is considered to be a range expansion of the initial invading population.

### Summary

At any phase of the invasion process, a species can indefinitely stay at a particular stage or the species can fail to invade. The former occurs when the independent species population is able to remain self-sustaining. As discussed, there are many factors that could result in the latter, which include, but are not limited to, propagule pressure, species-species interactions, and genetic diversity. Thus, pressure from the new environment can result in a lack of potential mates or inability to attain basic survival needs. As for the nomenclature, both stage and barrier are incorporated in a numeral-letter system. For example, a species that has established an invasive population in Region 2, but is not reproducing, would be in *Stage II*-b of the invasion process.

## NetLogo Agent-based Model

To visualize and observe trends in the stage-based model, an agent-based model was developed. The model was adapted and modified from the “Life Strategy and Invasion Biology Model”, designed by Kyra Simone (2016), in NetLogo (Wilensky, 1999). Parameters based on the interaction between a native ash borer species and an invasive ash borer species were set to demonstrate their roles within the invasion process.

The initial population size of the native and invasive specialist demonstrates how the population size of the native species will affect the fitness of the invasive species to progress through the model, as well as the effect of propagule pressure upon the native species.

The energy consumption of both species can be altered, helping to demonstrate how an organism’s ability to consume at a more efficient rate relative to another can provide a distinct advantage for population establishment and reproduction.

The minimum reproductive energy required of both the native and invasive borer species can be adjusted to demonstrate how high fecundity levels have significant impacts on propagation towards the surrounding region and throughout an environment.

The maximum number of offspring can be altered to simulate a species with a high fecundity rate and to aid in understanding its implications on the population dynamic in both the native and invasive borer species.

The final alterable parameter is the density of ash trees present within the environment. This demonstrates how a larger availability of hosts can significantly determine the ability of an ecosystem to support a native species as well as an invasive species simultaneously, or if the resources available will only support one species.

Using these parameters, we hope to demonstrate the effect that these factors will have on the invasion process and how they will affect the progression of an invasive species through the stage-based model.

### Results

Using the NetLogo code, various invasion situations were simulated. First, the code was used to re-create a situation with an abundance of food for the invading species, low competition, high reproductive ability, and high propagule pressure (Figure 2). When the new specialist was introduced, its frequency increased rapidly while the native specialist died out.

Next, an environment was created where the new specialist and the native specialist were similarly matched in terms of fitness (Figure 3). In this case, neither of the species died out and both appear to reach relatively stable population sizes.

A third simulation was performed where the propagule pressure of the new specialist was low (Figure 4). In this scenario, the new specialist died out while the native specialist population size remained relatively unchanged.

Finally, an invasion scenario was created where the new specialist was not as well adapted to its new environment as it has a reduced ability to extract energy from its food source (Figure 5). In this situation, the size of the new specialist population initially increases, then drops back down to disappearance.

### Discussion

With variation in starting conditions, it is possible to demonstrate how species in different situations will fit the definition of our stage-based model with diverse results.

In a situation where an invasion is favoured, the invading species has a high fecundity rate, an abundance of food, few competitors and a large number of invading propagules that reach the new environment. As seen in Figure 2, rhe initial spike in invasive species individuals marks the introduction and beginning of establishment. Consequently, the invasive species will thrive and its numbers will continually rise, characterising it as a species in *Stage III*-e.

In a scenario where the native species and the invasive propagules are evenly matched in numbers, ability to acquire nutrition, and reproductive ability, the arrival of the invader modifies the environmental steady-state conditions and a new equilibrium is reached (Figure 3). As evidenced by the relative steady population size in both native and invasive specialists, it appears that the environment is able to sustain this equilibrium. The invader is able to establish itself and sustain its population, however its numbers do not increase. As such, it would be labelled as a *Stage II*-c species.

A third situation that may occur is when the potential invader fails (Figure 4). In this case, the initial number of propagules that reach Region 2 is too low, and even though both species are equally able to feed themselves and reproduce, the invading species is not able to cross the barriers of survival and reproduction.

Similarly, invasion failure will also be induced if the invading species is ill-adapted to its new environment (Figure 5). In this scenario, the invasive species is not able to get sufficient nutrition once it is transported to the second region. Although the initial number of invasive propagules is almost double the initial amount of native specialists and they have equivalent reproductive capabilities, they have a lower likelihood to obtain any nutrition from their environment. The species is not able to cross the barrier of survival and the invasion fails.

Due to the number of combinations that can be created and simulated using the slider functions of the Netlogo model, all results were not acknowledged. The combinations that were highlighted include two instances of a successful invasion and two examples in which invasion fails. Successful invasion is apparent when the invader is able to integrate a population into the new environment, whether or not the native borer species is affected. When the invasion process fails and the invading borer species is not able to establish a population, this is characteristic of invasion failure.

## Conclusion

Ultimately, it is suggested that previous invasion vocabulary should become umbrella terms, and that our stage-based, numeral and letter system be used to specifically refer to species in the invasion process. Our proposed novel definition is an improvement over existing definitions in several ways. First, it demonstrates minimal human bias, as it does not rely on human perception of supposedly damaging or harmful impacts. Further, it does not depend on arbitrary values of distance or spread. Third, our model focuses on the plant-animal-environment interactions, allowing for a holistic approach to defining the invasion process. Finally, it can be can be simply applied to a wide range of plant and animal species. Our NetLogo model provides a user-friendly reference point for understanding how to apply our definition. If this stage-based perspective is adopted into the literature, communication within scientific communities as well as conversation with the general public will be more readily understandable. Standardizing the language used when communicating with and across both groups will minimize confusion and reduce the risk of mislabelling species. Clear language will allow for better legislation and prevention policies to be developed, as well as more effective outreach and education campaigns. Ideally, this will lead to greater ecological awareness in the community and a greater effort towards environmental stewardship.

## Acknowledgments

We would like to thank Dr. Chad Harvey for his guidance and support during this project. We would also like to thank Andrew Colgoni for his insight and editing, and Dr. Sarah Symons for her NetLogo expertise.
Author Contributions

Pascale Bider conducted a literature review on the existing language used in invasion ecology for the introduction and assisted in observing and analyzing the results from the stage-based invasion simulation. Tanya Daniel conducted the research for several proposed stage-based approaches for invasive species.  Afterwards, they were the main author to integrate these approaches to be used for our novel definition. Adam Tweedle developed the NetLogo modelling code for the stage-based invasion simulation as well as helped in writing the overall analysis and discussion of the outputs with Pascale Bider. All authors contributed in developing the proposed definition and were responsible for editing and revising one another’s work.

{% include references.md
            reference="
Blackburn, T., Pyšek, P., Bacher, S., Carlton, J., Duncan, R., Jarošík, V., Wilson, J. and Richardson, D., 2011. A proposed unified framework for biological invasions. Trends in Ecology & Evolution, 26(7), pp.333-339.

Chapple, D.G., Simmonds, S.M. and Wong, B.B.M., 2012. Can behavioral and personality traits influence the success of unintentional species introductions? Trends in Ecology & Evolution, 27(1), pp.57–64.

Colautti, R.I. and MacIsaac, H.J., 2004. A neutral terminology to define ‘invasive’ species. Diversity and Distributions, 10(2), pp.135–141.

Dick, J.T.A., Alexander, M.E., Ricciardi, A., Laverty, C., Downey, P.O., Xu, M., Jeschke, J.M., Saul, W.-C., Hill, M.P., Wasserman, R., Barrios-O’Neill, D., Weyl, O.L.F. and Shaw, R.H., 2017. Functional responses can unify invasion ecology. Biological Invasions, pp.1–6.

Elton, C., 1958. The ecology of invasions by plants and animals. 1st ed. Chicago: University of Chicago Press.

Geniusz, M., 2015. Plants have so much to give us, all we have to do is ask. 1st ed. Minneapolis: University of Minnesota press.

Gilroy, J., Avery, J. and Lockwood, J., 2016. Seeking International Agreement on What it Means To be “Native”. Conservation Letters, 10(2).

Government of Canada, 2016. What Are Alien and Invasive Alien Species?. [online] Environment and Climate Change Canada. Available at: <https://www.ec.gc.ca/eee-ias/default.asp?lang=En&n=986EC44D-1> [Accessed 5 Apr. 2017].

Heger, T. and Trepl, L., 2003. Predicting Biological Invasions. Biological Invasions, 5(4), pp.301-309.

Hulme, P., Bacher, S., Kenis, M., Kühn, I., Pergl, J., Pyšek, P., Roques, A. and Vilà, M., 2016. Blurring alien introduction pathways risks losing the focus on invasive species policy. Conservation Letters.

Hulme, P. and Weser, C., 2011. Mixed messages from multiple information sources on invasive species: a case of too much of a good thing?. Diversity and Distributions, 17(6), pp.1152-1160.

Lockwood, J.L., Hoopes, M.F. and Marchetti, M.P., 2007. Invasion Ecology. Blackwell Publishing.

OISAP, 2017. Invaders. [online] Ontario's Invading Species Awareness Program. Available at: <http://www.invadingspecies.com/invaders/> [Accessed 5 Apr. 2017].

NOBANIS, n.d. Definitions used by NOBANIS. [online] NOBANIS. Available at: <https://www.nobanis.org/about-nobanis/definitions-used-by-nobanis/> [Accessed 5 Apr. 2017].

 Pereyra, P., 2016. Revisiting the use of the invasive species concept: An empirical approach. Austral Ecology, 41(5), pp.519-528.

Powell, K., Chase, J. and Knight, T., 2013. Invasive Plants Have Scale-Dependent Effects on Diversity by Altering Species-Area Relationships. Science, 339(6117), pp.316-318.

Richardson, D., Pysek, P., Rejmanek, M., Barbour, M., Panetta, F. and West, C., 2000. Naturalization and invasion of alien plants: concepts and definitions. Diversity and Distributions, 6(2), pp.93-107.

Rist, L., Uma Shaanker, R., Milner-Gulland, E. and Ghazoul, J., 2010. The Use of Traditional Ecological Knowledge in Forest Management: an Example from India. Ecology and Society, 15(1).

Russell, J. and Blackburn, T., 2017. The Rise of Invasive Species Denialism. Trends in Ecology & Evolution, 32(1), pp.3-6.

Sakai, A.K., Allendorf, F.W., Holt, J.S., Lodge, D.M., Molofsky, J., With, K.A., Baughman, S., Cabin, R.J., Cohen, J.E. and Ellstrand, N.C., 2001. The population biology of invasive species. Annual review of ecology and systematics, 32(1), pp.305–332.

Tassin, J., Thompson, K., Carroll, S. and Thomas, C., 2017. Determining Whether the Impacts of Introduced Species Are Negative Cannot Be Based Solely on Science: A Response to Russell and Blackburn. Trends in Ecology & Evolution, 32(4), pp.230-231.

Tsutsui, N.D., Suarez, A.V., Holway, D.A. and Case, T.J., 2000. Reduced genetic variation and the success of an invasive species. Proceedings of the National Academy of Sciences, 97(11), pp.5948–5953.

USDA, 2016. What is an Invasive Species?. [online] National Invasive Species Information Center. Available at: <https://www.invasivespeciesinfo.gov/whatis.shtml> [Accessed 5 Apr. 2017].

Valéry, L., Fritz, H., Lefeuvre, J. and Simberloff, D., 2008. In search of a real definition of the biological invasion phenomenon itself. Biological Invasions, 10(8), pp.1345-1351.

Vermeij, G.J., 1996. An agenda for invasion biology. Invasion Biology, 78(1), pp.3–9.

Wikipedia, 2017. List of invasive species in North America. [online] Wikipedia. Available at: <https://en.wikipedia.org/wiki/List_of_invasive_species_in_North_America> [Accessed 5 Apr. 2017].

Wilensky, U., 1999. Netlogo. [online] Netlogo 6.0.1. Center for Connected Learning and Computer-Based Modeling, Northwestern University, Evanston, IL. Available at: <http://ccl.northwestern.edu/netlogo/> [Accessed 1 Mar. 2017].
"
%}
