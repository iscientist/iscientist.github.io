---
layout: post
type: article
title:  "Redefining invasive species using a stage-based process"
date:   2018-03-15
volume: 3
field: Ecology
tags: ["Invasion ecology", "invasive species", "stage-based model", "propagule pressure", "resource availability", "energy consumption", "reproductive capability"]
author:
  - name: Pascale Bider
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
  - name: Tanya Daniel
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
  - name: Adam Tweedle
    affiliation:
      - Integrated Science, Class of 2019, McMaster University
abstract: |- # this means to ignore newlines until next tag
  Invasion ecology explores the impacts of new species entering established ecological niches and communities. While the effects of invasive species are frequently discussed in both industry and academia, the definition of invasion remains vague, arbitrary, and based on human perception. The objective of this project was to better define species invasion using a mechanistic, stage-based perspective. Several authors have attempted to develop a definition that focuses on the process of invasion, rather than on the characteristics of the (potentially) invasive species. This process encompasses three main stages: transport, establishment, and spread. The purpose of a stage-based definition is to classify a given species by its progression through the invasion process. By integrating existing definitions, we propose a novel version of the stage-based process of invasion. This approach incorporates extrinsic factors such as competition, predation, and parasitism in addition to contingent physical forces such as flooding, freezing, and fire. Therefore, a wide variety of species will be able to fit into this definition. To demonstrate its effectiveness, we test our definition with an agent-based model that simulates the influence of multiple ecological factors (propagule pressure, resource availability, energy consumption, reproductive capability), which can either inhibit or assist the invasion of a species. Adopting a more comprehensive method for defining invasive species will allow for better communication within invasion ecology research and throughout the scientific community. Ultimately, our definition helps to simplify the process of developing a practical invasion prevention policy that can be implemented at multiple stages for full effectiveness. 
---

## Introduction

Since the emergence of invasion ecology as a field, there have been many different words used to refer to a species that has travelled out of its native range. Terms such as “invasive”, “alien”, “introduced”, “exotic”, “imported”, “naturalized”, and “non-native” frequently appear in the literature, but generally remain poorly defined (Pereyra, 2016; Valéry et al., 2008). Authors will use some or all of these terms, but each with their own personal connotation. Despite ever-growing awareness of invasive species and invasion ecology, there has yet to be a consensus regarding how and when these terms should be used. For a comprehensive comparison of the following definitions found in the literature and for the general public, see Table 1.

{% include table.html
            title="Table 1"
            caption="Comparative table highlighting the various definitions of “invasive” used in invasion ecology (based on Pereyra’s 2016 methodology). Both academic and public sources were examined."
            content="
| Citation | Terms used | Specific characteristics that must be met in order to be considered invasive | | |
|------------------|----------|------------------------|------------|-----------------------|
| | | Negative Impact | Human Mediated | Other |
| Valery et al., 2008 | Invasive | No | No | Must become dominant in new ecosystem |
| Russell and Blackburn, 2017 | Invasive | Yes | No | - |
| Tassin et al., 2017 | Invasive | No | No | - |
| Richardson et al., 2000 | Invasive | No | Yes | Must be relocated beyond a specific distance |
| Hulme et al., 2016 | Alien | No | No | - |
| Pycek et al., 2004 | Invasive | No | Yes | Depends on specific term used |
| Heger and Trepl, 2003 | Invasive | No | No | - |
| Pycek and Richardson, 2010 | Invasive | No | Yes | Must produce reproductive offspring at locations far from the site of introduction |
| Powell, Chase, and Knight, 2013 | Invasive | No | No | Must have high rates of population growth and become dominant in new ecosystem |
| Wikipedia, 2017 | Invasive | Yes | Yes | Must directly threaten agriculture or biodiversity |
| USDA, 2016 | Invasive | Yes | No | Must cause environmental harm or harm to human health |
| Ontario's Invasive Species Awareness Program, n.d. | Alien, Invasive Alien | Yes | Yes | - |
| Government of Canada, 2016 | Alien, Invasive Alien | Yes | No | - |
"%}

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

## The stage-based approach

To properly distinguish a native species from a species currently undergoing the process of invasion, an alternative definition must be proposed. This improved definition must consider the process of invasion, rather than focusing solely on a species’ capacity to spread and reproduce. Thus, a stage-based definition studies the progression of the potentially invasive species’ ability to occupy a new environment. There are three fundamental stages within a stage-based definition: transport, establishment, and spread. Within each stage, there are several factors that either inhibit or assist the species when moving from one stage to the next. In our proposed definition of the stage-based process of invasion, these extrinsic and contingent factors are included.

A stage-based perspective is more beneficial as a definition because it can encompass multiple pathways by which a species can invade. Due to the definition’s broader perspective, the focus is now on the ecological logistics - of both the environment and the species - which allow for invasion to occur. Since the stage-based perspective looks at the process overall, the development of prevention techniques and policies can be created to stop the invasion of a species, if necessary. As Jeschke et al. (2014) state, impact can occur at any stage. Our definition is broad enough to show how changes to the environment can happen, but these effects are not implied to be decidedly positive or negative. Thus, it is not assumed that all invasive species are detrimental to an environment.

Much of a species’ ability to invade is based on circumstance and random factors (Heger and Trepl, 2003). Our definition looks to include contingency and variability among species and the environment so that invasion can be generalized to a process. Furthermore, looking at invasion as a process allows investigation into the relationship and properties of both the invading species as well as the ecosystem itself. Invasion could be regarded as a temporally-dependent process rather than spatially-dependent. Overall, our proposed model builds on a more holistic perspective.

### The proposed invasion process

Expanding from an invasion model proposed by Blackburn et al. (2011), we integrate previous versions of the invasion model to develop a broader stage-based definition (Figure 1).



{% include references.md
            reference="
"
%}
