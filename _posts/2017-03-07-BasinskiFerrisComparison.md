---
layout: post
title:  "Comparison of Mathematical Models of Opinion Dynamics"
date:   2017-03-07
volume: 2
field: Mathematics
tags: ['sociophysics', 'Sznajd Model', 'opinion dynamics', 'mathematical modelling', 'MATLAB']
filename: 2017-03-07-BasinskiFerrisComparison
author:
  - name: Basinski-Ferris, Aurora
    affiliation:
      - Integrated Science, Class of 2018, McMaster University
abstract: |- # this means to ignore newlines until next tag
  Sociophysics is an emerging interdisciplinary research field that uses theories and methods developed by physicists as a modelling framework for various social science phenomena. This paper presents the Sznajd model, which is the basis of one of the simplest yet most efficient methods to predict the collective human behaviour in a binary opinion society. This model is a variation of the Ising model – a mathematical model used in statistical mechanics when studying the ferromagnetic phase transitions for the magnetization of a system based on the interaction between the neighbouring atomic spins of the system. In both the Ising model and the Sznajd model, individuals are only allowed to have a binary opinion – yes (spin up) or no (spin down).  The Sznajd model is based on the idea of social validation; the model requires that two neighbours share the same opinion to be able to convince individuals around them of their opinion.  Using MATLAB, this paper applies a two- dimensional simplified version of the Sznajd model to track the opinion movement over many time steps in a lattice of individuals with an initial randomly generated distribution of opinions. The results of this simplified model are then analyzed using psychological principles to examine the validity of the outcomes.
---

## Introduction

The idea of applying concepts from the natural sciences to try to explain social science phenomena is at least 25 centuries old. One of the first recorded comparisons between the properties of natural sciences and the behaviour of humans occurred when the Greek philosopher Empedocles stated an idea to the effect of “Humans are like liquids: some mix easily like wine and water, and others like oil and water refuse to mix.” (Stauffer, 2009). Since then, there have been a few individuals who drew comparisons between ordered physical systems and the behaviour of populations. For example, in 1942, Majorana compared quantum physics to social probabilities in human behaviour. However, with the exception of a select few individuals, the field of sociophysics took off in the early 2000s with the popularization of ideas such as opinion dynamics within academia (Stauffer, 2013).

Mathematical models of opinion formation examine society as a physical system in which individuals and their interactions are viewed as the microscopic scale of the system governed by rigid rule sets, and the emergent macroscopic trends are used to reflect overall societal opinion. In general, these models deal with binary opinion systems in which there is a general assumption that the opinion of an individual is in some way related to the opinions of their neighbours (Oz, 2008).

Models of opinion dynamics, and sociophysics in general, rely on the law of large numbers. This law is a statistical theorem that states that as the number of randomly generated variables increases, the average approaches the theoretical mean (Routledge, 2015). A simple system used to understand this is coin flipping. When just one coin is flipped, although the probability of either outcome is 0.5, you cannot predict with any certainty whether that single coin toss will show a head or tails. However, after 500 coin tosses, it is reasonable to assume that the long-term behaviour is approaching the 0.5 probability. Thus, this law applied to opinion dynamics means that with a large population, individual fluctuations are averaged out, and general trends in data are more visible. In turn, this also implies that the justification for the human aspect of these models stems from mass psychology rather than individual psychology.

This paper offers a brief history of the models developed to deal with the opinions of populations. However, the focus will lean more towards the examination of two variations of a fairly recent model of opinion dynamics called the Sznajd model. These two model variations were simplified and represented in MATLAB to analyze and compare the behaviour and validity of these models given an initial random population with varying size.

## Mathematical Background

Many models have been proposed to try to examine the opinion dynamics of populations. In general, these follow the theme of an initially disordered system that is brought to a more ordered state under certain conditions (Castellano, Fortunato, and Loreto, 2009). The key part of opinion dynamic models is the overarching rule that guides how interactions between various individuals in the population occur. In most models, the opinion of a single individual is updated after each time step; this change is affected by the opinions of the individual’s neighbours. Additionally, all models must define the space in which their population exists. The models presented in this paper treat populations as discrete points on a lattice rather than a continuous plane (Sen and Chakrabarti, 2013). This setup results in an assumption that individuals in the model are stationary.

### Ising Model and Variations

In physics, the 1924 Ising model is a mathematical model used for ferromagnetism (Sznajd-Weron, 2005). The Ising model looks at each site on a square lattice as an electron with a value assigned of either +1 (spin up) or -1 (spin down). Thus, each pair of neighbours at <i,j> has an energy of -JSiSj where J is some proportionality constant and S denotes spin. This means that each parallel pair of spins contributes -J to the total energy, and each antiparallel pair contributes +J to the energy (Stauffer, 2013).  

Therefore, the total energy of the system is given by:

$$
H = -J\sum_{<i,j>}s_{i}s_{j}
$$

To minimize energy, each spin is pushed to be aligned with its neighbours (Castellano, Fortunato and Loreto, 2009). Thus, the Ising model typically results in a higher probability of two neighbouring electrons having the same spin (Stauffer, 2009). Metropolis dynamics of the Ising model takes each elementary move to be a single spin change. This change in spin is accepted with a probability of:

$$
P = e^{\frac{-\Delta{}E}{k_{B}T}}
$$

where T is temperature, kB is the Boltzmann constant, and ∆E is the change in energy when this change takes place (Castellano, Fortunato, and Loreto, 2009). As this probability of acceptance is dependent on temperature, there is a critical temperature that denotes whether or not macroscopic ordering will occur. Above the critical temperature, there is macroscopic disorder even over many time steps. However, despite the disorder, there are still local clusters of just spin up (+1) or just spin down (-1). Below the critical temperature, macroscopic ordering occurs, because these local clusters spread to become global (although limited by the bounds of the lattice). Thus, the stable states of either all positive or all negative spins would emerge (Castellano, Fortunato, and Loreto, 2009).

The dynamics that emerge from the Ising model due to physical interactions can be applied to a human system to develop a model of opinion dynamics (Stauffer, 2009). In this case, neighbours on a lattice influence each other such that adjacent individuals ‘want’ to have similar opinions because energy functions as ‘unhappiness’ due to disagreement. Due to the application of physical phenomena to social dynamics, temperature has a social meaning. The social application of temperature denotes both the overall approximation of events that influence decision making of individuals not included in the microscopic rules and denotes the tolerance of the individuals in the population. As expected, changing these factors can change the behaviour of the system, just as going above or below critical temperature will change the ferromagnetic system. When temperature can grow arbitrarily large, neighbours will not affect an individual’s views. When temperature is of an intermediate value, small clusters form with similar opinions, but no overarching domains are present. When temperature is small, these domains extend to infinite size and all members of the population have the same opinion (Stauffer, 2009).

### Sznajd Model

Since the early 2000s, the vast majority of investigations into opinion dynamic models have been centered on one of three models: Sznajd, Krause-Hegselmann, and Deffuant (Stauffer, 2009). Sznajd is addressed in this paper as it fits the best with old investigations, such as Ising variants in that it utilizes discrete opinions. In contrast, the Krause-Hegselmann and Deffuant models allow agents in their population to have continuous opinions within a range (Stauffer, 2009).

The Sznajd model uses the concept of Ising spins, but slightly modifies the physical model to fit with human interactions rather than to make a direct correlation with physical phenomena. It is based around modifications of the microscopic interaction rules to make them more in line with human group psychology (Sznajd-Weron, 2005). The main relation between the Sznajd and Ising models is the application of the Ising spin chain idea, in which the spins are defined as binary variables that can influence the ‘opinion’ of neighbours (Sznajd-Weron and Sznajd, 2000). The basic rule of Sznajd states that, if there is a pair of neighbours in agreement, the individuals surrounding them will change their opinions to be in line with this spin. Thus, in one dimension, it can be stated that if Si=Si+1 then Si-1=Si and Si+2=Si. Correspondingly, in two dimensions, a pair of neighbours in agreement will influence the six neighbours surrounding them (Sznajd-Weron, 2005).

There are two variations of the Sznajd model. Both  variations deal with the agreement of neighbours in the same way, but they differ in their treatment of the disagreement of neighbours (Sznajd-Weron and Sznajd, 2000).  In the original model put forward in 2000, if Person A and Person B are neighbours in disagreement, the surrounding individuals of Person A take the opinion of Person B and vice versa. This was meant to emulate the act of an argument whereby neighbours are influenced. The long-term behaviour of a system following this dynamic rule would either be ferromagnetic (consensus) or antiferromagnetic (stalemate). For this reason, the Sznajd model was originally named “United we stand, Divided we fall” (Sznajd-Weron and Sznajd, 2000). The second variation of the Sznajd model was proposed in 2005. In this model, if Person A and Person B are neighbours in disagreement, the surrounding individuals of Person A would take Person A’s opinion and vice versa. The only stable state that can come of this model is ferromagnetic (consensus) (Sznajd-Weron, 2005).

There are a few key psychological phenomena that contribute to the validity of the Sznajd model as a simplified description of human behaviour. The primary focus of the dynamic rules is on social validation. Simply, social validation is the phenomenon in which individuals tend to conform to the actions of others when they are in a group. In terms of group psychology, this means that when more than one person has a certain behaviour, individuals around them will start to adopt this behaviour (DeMers, 2015). This phenomenon was demonstrated through Asch’s conformity experiments in the 1950s which tested the extent to which people tend to conform to the majority (Bond and Smith, 1996). The experimental setup involved showing a group of lines to test subjects. Before the subjects answered if the lines were of the same length, experimenters acting as subjects would incorrectly state an answer. Results found that subjects of the experiment would usually conform to this false opinion; only 29% of the subjects stated the correct answer rather than the most popular answer (Bryn Mawr College, 2000). Asch concluded that the perception of group consensus results in the conformity of individuals to a set opinion. Finally, it was found that an individual was more likely to conform to popular opinion if the individual identified with the majority – that is, if there are similar characteristics that both the individual and the majority hold (Bond and Smith, 1996). Thus, in the Sznajd model, this rule applies due to the ‘majority’ opinion of the pair affecting its neighbours rather than distant individuals.

## Methods

The modified MATLAB models created for this paper were designed to compare the two variations of the Sznadj model. Each variation consists of two sections of code – the first examines the behaviour of the system over a set number of time steps, while the second examines the number of time steps needed to reach a stable state (The MathWorks, Inc, 2015).

All initial matrices used for the two models for each variant were developed using the random matrix function. This automatic function randomizes a matrix of a given size with numbers in the range 0 to 1. This was converted to a random matrix of discrete values of -1 and +1, by setting original values between 0 and 0.5 to equal -1, and values between 0.5 and 1 to equal 1.

Both models apply their respective dynamic rules by utilizing a concept known as a Monte Carlo simulation. Monte Carlo is the act of approximating an overall expectation based on the behaviour of random samples; as samples are chosen by chance, this technique was named after an international gambling city (Anderson, 1999). When performing a mathematical model on a system where all the points in that system should behave according to a predefined rule, such as the Sznajd Model, a Monte Carlo simulation can be used. The Monte Carlo method takes random samples, and applies the rule at that site (Anderson, 1999).

In these models, the Monte Carlo simulations are performed using the randomization functions of which MATLAB is capable. First, an initial point (i,j) is chosen at random by generating two separate random numbers that fall in the matrix dimensions for both i and j. As the system is a two-dimensional matrix, each point has four neighbours. Thus, after this initial point is generated, another number is randomly generated between 1 and 4. This number chooses the pair that the dynamic rule will be applied to – a pair composed of that initial point and a randomly chosen neighbour.

As discussed in background, the two variations addressed have the same rule for when the pair chosen are in agreement, but deal with disagreement in different manners. Thus, in both variants, when the randomly chosen pair have consistent opinions, the six neighbours surrounding the pair take the opinion of this pair (Figure 1).

{% include figure.html
            fig="Figure1.png"
            title="Figure 1"
            caption="Illustration of the cases of initial pairs in agreement on the lattice generated by the MATLAB model. The grey boxes in the “Before” column indicate that those boxes could take either white or black values and it would not affect the outcome. At each time step, the initial pair would be randomly chosen, and the “After” column displays the behaviour of the neighbours near the pair." %}

The two variants of the Sznajd model that were compared differ in their treatment of disagreement. The microscopic description of this behaviour is shown in Figure 2.

{% include figure.html
            fig="Figure2.png"
            title="Figure 2"
            caption="Illustration of the cases of initial pairs in disagreement on the lattice generated by the MATLAB model. The grey boxes in the “Before” column indicate that those boxes could take either white or black values and it would not affect the outcome. At each time step, the initial pair would be randomly chosen, and the “After” column displays the behaviour of the neighbours near the pair as per the rule of the model variant (denoted 1 and 2 in the row headings). " %}

When designing the modelled system, periodic boundary conditions were utilized. This was done to avoid errors that occur at boundaries if the general interior rule was applied universally. For example, if looking at a pair of neighbours composed of a random point and a neighbour to the right, one of the neighbours that should be affected is one to the left of the initial point. If away from the boundaries, this could be stated as:

> If A(i,j) is equal to A(i,j+1)
> Then A(i,j-1) should equal A(i,j)

However, with a lattice of finite dimensions, the problem is encountered where the initial point could be on a boundary. For example, if the initial point is in initial column 1, a point one column to the left (A(i,j-1)) does not exist. Thus, the modular function is implemented to make assigning a point which should lie outside the matrix dimensions to loop back around to the other side of the matrix.

For example, take A(i,1) as the randomly generated point in a lattice that is 10 by 10. If we use the general ‘then’ statement as A(i,mod(j-2),y)+1), then we would use A(i, mod(-1,10) +1). This outputs the resultant point of A(i,10) meaning that the point ‘to the left of the 1st column’ is equal to the last column. Importantly, this modular design still outputs what we would expect when the initial point is not on the boundaries. If we take the point A(i,6) as the randomly generated point in a 10 by 10 lattice, we can see that applying this modular ‘then’ statement would result in A(i,mod(4,10)+1), which is equal to A(i,5) as expected. When applied in all directions, the use of the modular function results in the system looping and essentially functioning as a sphere.

For each model variation, there were two different sections of code developed, which each output different information. The two sections of code for each variation follow the descriptions included below; they were similar in that they all allowed for varied matrix size, followed the same dynamic rules for respective variation, and utilized the modular function to develop the space on which the individuals reside as a sphere.

## Results

The first section of code for each rule was relatively simple. It was made such that it applied the dynamic rules for a given number of time steps, showed the movement of the matrix over time, and graphed the percent of positive (yes) opinions on the lattice. Tracking the movement of the matrix over time utilized a three dimensional array indexed by time step. At each time step in this array, one could find the two-dimensional matrix that displayed the state of the population at that time.
The second section of code for each model variant extracted data useful for effectively comparing the two variants. It calculated the number of steps required by each variant to reach one of the stable states discussed in the background – stalemate or consensus. Interestingly, each of those options has two types; intuitively, it is known that consensus can occur either as all yes (+1 spin) or all no (-1 spin). Stalemate can also occur in two ways, because the tiles alternating can be shifted – such that the top left corner is yes, or such that the top left corner is no. For each variant, this model computed the number of steps required for a set number of trials on a set number of matrices. The output was a scatter plot of the average of the 20 trials for each matrix, an overall average across all trials and matrices, and a pie chart showing the proportion of the stable states achieved that were of each type (Figure 3).  

{% include figure.html
            fig="Figure3.png"
            title="Figure 3"
            caption="The proportion of each type of stable state achieved after 30 trials of 30 randomly generated 12 by 12 matrices. (A) displays the output for variation 1, described in the methods, while (B) shows the outputs for variation 2." %}

Examination of the general results from the second model of each rule shows one of the clearest distinctions between the two dynamic rules. Rule 1, which functions using the idea of argument when two neighbours disagree, can yield both a consensus and stalemate stable state. On the other hand, rule 2 yields consensus unanimously. However, in both of these models, there doesn’t appear to be a trend showing that any one possible stable state is preferred over the others.  

When 30 different random matrices are tested with 30 trials each (net of 900 trials), there appears to be around equal partition of the stable states possible. For rule 1, there are 4 stable states of which two were stalemate, and two were consensus (yes or no). As seen in Figure 3, half of trials yielded a stalemate stable state, while a quarter yielded each of yes consensus and no consensus.  For rule 2, in which there are two stable states, half of the trials yielded a yes consensus and half of the trials yielded a no consensus.

Thus, though the different variants have different possible stable states, all stable states are essentially equally possible for each variant. This means that there is no inherent pressure towards a final outcome within each model. However, the second variant has no possibility of stalemate and the population present always reaches consensus.

As shown in Figure 4, both dynamic rules result in a wide range between the average of 30 trials for each matrix. However, it becomes clear (especially when looking at very high numbers of trials) that both the average number of runs across all trials of all matrices, and the range for the average of 30 trials, vary when the different dynamic rules are applied. The first dynamic rule, which utilizes the idea of an ‘argument’ when the chosen pair disagrees, results in a mean of 1.4033*103 iterations necessary to reach a stable state. Alternatively, the second dynamic rule resulted in a mean of 2.4618*103 iterations until a stable state. This trend between the two variants remained mostly consistent over different matrix sizes and trial numbers.

{% include figure.html
            fig="Figure4.png"
            title="Figure 4"
            caption="Scatter plots of the average of number of runs to reach a stable state. This data was generated using 30 trials for 30 separate randomly generated initial 12 by 12 matrices. (A) shows the data generated when dynamic rule 1 was applied while (B) shows the data generated when dynamic rule 2 was applied." %}

There are a few possible reasons that could account for this difference in number of iterations required to reach stable state. The first possible reason is fairly simple – the first variation is able to reach either stalemate or consensus. Thus, the first variation has four possible states it can reach in order to achieve stability. Alternatively, the second variation can only reach consensus; thus, it only has two states that it can reach in order to be stable.

Another possibility is the interaction between the various rules and states. In the case of the second rule, the black and white solid sections tend to get more separated and have more stability on their side of the lattice. On the other hand, there is more interaction and less stability with the first rule. Often dynamics such as that displayed in Figure 5 occur.

{% include figure.html
            fig="Figure5.png"
            title="Figure 5"
            caption="Still frames throughout the evolution of two randomly generated 12-by-12 matrices. Each row shows the two iterative rule variations applied to the same initial matrix. The left column shows two instances of variation 1, while the right column shows variation 2." %}

Figure 5 shows the dynamic interaction between the checkered stalemate state and the consensus (white) state. There were very few areas with no movement in either section due to the dynamic rules, and one state can quite quickly take over the matrix. This can be seen more quantitatively in Figure 6. This figure shows there is a large fluctuation in the percent of “yes” voters on the matrix irrespective of the stable state eventually reached. The spikes up and down, which can encompass a large range, show that there is quite a bit of movement between various areas displaying a stable state behaviour.

{% include figure.html
            fig="Figure6.png"
            title="Figure 6"
            caption="Graphs showing the percent of positive voters over iterations when running variant 1. (A) corresponds to an eventual stalemate. (B) corresponds to positive consensus. (C) corresponds to negative consensus. All graphs show large fluctuations in the proportion of positive voters throughout their respective evolutions to stable states." %}

## Discussion

Models inspired by physical phenomena can work effectively when applied to sociophysical areas such as opinion dynamics. The simplification presented in this paper was developed using the dynamic rules proposed in the established Sznajd model which uses concepts from the Ising model of ferromagnetism and modifies them to better fit with psychological phenomena. This paper presented two different variations of the Sznajd model that each used distinct iterative rules. The setup for both models required a Monte Carlo simulation of a lattice. The two variations used the same rule when a pair of agreeing neighbours was chosen, whereby the six surrounding neighbours took that opinion. In the case of disagreement, the first variation had the neighbours of individual A take the opinion of individual B; the second variation had the neighbours of individual B take the opinion of individual A.

The results yielded were quite different for the two variations over many time steps. When these iterative rules were applied on the same initial setup, the first variation resulted in a long-term stable state of either consensus or stalemate. Alternatively, the second variation resulted exclusively in consensus.

The accuracy of both of these stable states to psychological phenomena can be argued. Due to the Asch conformity experiment on which this model is based, the idea of long-term consensus has merit. If individuals generally wish to fit in with the opinions of others and adhere to the majority, consensus seems possible in many situations. Although possibly anecdotal, examples of population conformity throughout history further add to our perception of the validity of achieving consensus in a population. However, especially if regarding points on the lattice as small groups of likeminded people rather than individuals, the stalemate solution cannot be discounted completely. Although we do not traditionally think of individuals as arranging themselves in such a way, the idea of small communities of like-minded people staying clustered and separated from those who disagree with them could apply in some situations.

## Conclusion

The choice of model variant may depend more on how it will be applied, rather than an inherently better solution. If looking at individuals, perhaps the evolution that always achieves conformity is more fitting with group psychology. However, if trying to model a larger scale system such as clusters of people in agreement, without regarding intra-cluster dynamics, the first model presented may be of more use. It is important to note that no model can ever exactly predict the behaviour of a system of biological individuals. However, as more variables are considered and modelled, the model can approach accuracy much more closely.

## Acknowedgements

The author would like to thank Dr. George Dragomir (McMaster University) for supervising this project, and providing continuous assistance throughout.

{% include references.md
            reference="
Anderson, E., 1999. Monte Carlo Methods and Importance Sampling. [online] University of Washington: Lecture Notes for Stat 578C. Available at: <http://ib.berkeley.edu/labs/slatkin/eriq/classes/guest_lect/mc_lecture_notes.pdf> [Accessed 24 Mar. 2016].

Bond, R. and Smith, P., 1996. Culture and conformity: A meta-analysis of studies using Asch’s (1952b, 1956) line judgment task. Psychological Bulletin, 119(1), 111-137.

Bryn Mawr College, 2000. Solomon E. Asch 1907-1996. [online] The Solomon Asch Center for Study of Ethnopolitical Conflict. Available at: <http://www.brynmawr.edu/aschcenter/about/solomon.htm> [Accessed 21 Mar. 2016].

Castellano, C., Fortunato, S. and Loreto, V., 2009. Statistical physics of social dynamics. Reviews of Modern Physics, 81(2), 591-646.

DeMers, J., 2015. The Importance Of Social Validation In Online Marketing. Forbes. [online] Available at: <http://www.forbes.com/sites/jaysondemers/2015/02/19/the-importance-of-social-validation-in-online-marketing/#4fd3ee6535c8> [Accessed 21 Mar. 2016].

Oz, M., 2008. Sznajd Model and Its Application to Politics. [online] p.11. Available at: <https://pdfs.semanticscholar.org/73ab/024a432d47ce20eaf407b995dc7356511588.pdf>.

Routledge, R., 2015. Law of large numbers. In: Encyclopædia Britannica. [online] Available at: <http://www.britannica.com/science/law-of-large-numbers> [Accessed 21 Mar. 2016].

Sen, P. and Chakrabarti, B.K., 2013. Sociophysics: An Introduction. New York: Oxford University Press.

Stauffer, D., 2009. Opinion dynamics and sociophysics. Encyclopedia of Complexity and Systems Science, 6380-6388.

Stauffer, D., 2013. A biased review of sociophysics. Journal of Statistical Physics, 151(1), 9-20.

Sznajd-Weron, K., 2005. Sznajd model and its applications. Acta Physica Polonica B, 36(8), 2537-2549.

Sznajd-Weron, K. and Sznajd, J., 2000. Opinion evolution in closed community. International Journal of Modern Physics C, 11(6), 1157-1165.

The MathWorks, Inc, 2015. MATLAB (R2015a). [computer program] The MathWorks, Inc.
"
%}
