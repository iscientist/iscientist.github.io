---
layout: post
title:  "Star Formation and Morphology of Galaxies in Local Compact Groups"
date:   2018-01-11
volume: 3
field: Astronomy
featureImage: Figure1a.jpg
tags: ["compact groups", "galaxies: star formation", "galaxies: morphology"]
filename: 2018-01-11-SpeedieStar
author:
  - name: Speedie, Jessica
    affiliation:
      - Integrated Science, Class of 2020, McMaster University
  - name: Dr. Parker, Laura
    affiliation:
      - McMaster University, Physics and Astronomy Department
abstract: |- # this means to ignore newlines until next tag
  We present a study on the observed properties of galaxies in a large sample of compact groups identified in the Sloan Digital Sky Survey. Compact groups are extremely dense collections of galaxies, with 3 to 8 member galaxies within a very small volume. These systems are known to have frequent galaxy-galaxy interactions. In this work, we propose a new definition for the radius of a compact group and match our member galaxies to previous catalogues containing information about the masses, star formation rates and morphologies of these galaxies. We find that that both star formation and morphology depend strongly on the galaxy’s stellar mass but more weakly on their host environment: the member galaxy properties show very little radial dependence within their group, but they do depend on their group mass, as traced by the velocity dispersion. Galaxies in compact groups show similar properties to those in non-compact groups, despite being in fundamentally different environments.
---

## Introduction

Large scale structure in the universe is comprised of aggregations of galaxies. Gravitational interactions assemble galaxies into groups (containing 10-100 members) and clusters (100-10,000 members). When in close proximity, galaxies can fall onto one another and affect the motion and formation rate of the stars within them. The environment in which a galaxy lives –group, cluster or field– has observable effects on its properties (Conselice, 2014).

A special class of galaxy group is the so-called compact group (Figure 1). Compact groups are comprised of 3-8 member galaxies situated very close together; typical galaxy-galaxy separation is on the order of kiloparsecs (kpc), similar to the size of the galaxies themselves (Sohn et al. 2016). Compared to "regular" groups, compact groups have low velocity dispersions ($$\approx 200 km/s$$, Hickson & P. 1982; McConnachie et al. 2009), meaning the deviation in the radial velocities of the constituent member galaxies is small.

{% include figure.html
            fig="Figure1.png"
            title="Figure 1"
            caption="Images of four example compact groups as identified by Sohn et al. (2016). *Left to right*: MLCG1428 ($$\sigma{} = 37 \pm 8\ km/s$$), MLCG1492 ($$\sigma{} = 49 \pm{} 12\ km/s$$), MLCG1569 ($$\sigma{} = 302 \pm 57\ km/s$$), MLCG1577 ($$\sigma{} = 273 \pm{} 69\ km/s$$). Images are from the DR12 Science Archive Server (SAS)." %}

High spatial densities and low velocity dispersions imply that compact groups have short crossing times, and galaxy-galaxy interactions are slow. Compact groups are therefore environments in which many galaxy evolution processes occur, including mergers and other dynamical interactions (Brasseur et al. 2008; McConnachie et al. 2009). Previous work has shown that the observed properties of galaxies, such as star formation and morphology, are influenced by the group environment (Mcconnachie et al. 2008).  Additionally, the extremity of the compact group environment puts constraints on galaxy evolution models, which aim to predict average global trends in galaxy properties, but that must reproduce the observations in all environments if they are to be successful.

The effect of mergers or gravitational interactions on star formation rate (SFR) has been explored for close pairs of galaxies and for regular groups (Carlberg et al. 1994; Ellison et al. 2008) as well as for clusters (Moore et al. 1996; Gomez et al. 2003; Lewis et al. 2002). As tidal interactions disturb and redistribute gas from which stars may form, enhanced SFR would be expected. The observations for close pairs are consistent with this picture, but decreased SFRs are found for galaxies in clusters when local density is high (Brasseur et al. 2008). Where compact groups will fall on this spectrum is not immediately obvious.

There are special challenges involved in the study of compact groups, stemming from these groups containing very few member galaxies. Group velocity dispersion is difficult to quantify; the fewer galaxy velocities known, the less accurately their dispersion can be estimated. Additionally, the geometrical centre of the group is not a well-defined quantity for an aggregation of only a few galaxies. In larger groups and clusters, it is clear by their radial position in the group which galaxies live in the densest areas.

The goal of this work is to study the properties of galaxies in this dense environment - specifically, galaxy star formation rate and morphology. We explore whether galaxy properties exhibit dependence on their radial position in the group or on the group velocity dispersion (environmental metrics), as well on as stellar mass (a property internal to the galaxy).

The paper is structured as follows: In Section 2 we present the properties of the galaxies and compact groups within our data sample. In Section 3 we show our results for the dependence of galaxy properties (star formation and morphology) on environment (radial position and velocity dispersion) and on stellar mass. We discuss our results in Section 4 and present our conclusions in Section 5. Throughout, we adopt the flat CDM cosmological parameters of $$\Omega_M = 0.3$$, $$\Omega_\Lambda = 0.7$$, and $$H_0 = 70\ km\ s^{-1}\ Mpc^{-1}$$.

## Data

In order to address questions related to galaxy evolution in compact groups we need a large population of these groups and the member galaxies within them. We take advantage of the largest ever survey of galaxies, the Sloan Digital Sky Survey (SDSS) (Alam et al., 2015). The SDSS is a wide-field multi-spectral imaging survey covering just over 35% of the sky. It contains photometric measurements for around 500 million objects, and spectral information (and thus redshifts) for more than 3 million. New SDSS data sets have been released to the public every few years since data collection began in 1998.

From the galaxy properties provided by the SDSS (such as luminosity, colour, size, stellar mass and velocity dispersion), further information can be derived. Analysis of emission lines yields galaxy star formation rates, and galaxy morphology can be estimated directly from telescope images. Independent collaborations perform these analyses and publish them in separate catalogues. We use star formation data from the Max Planck for Astrophysics and Johns Hopkins University (MPA JHU) catalogue, which estimates star formation rates based on the technique discussed in Brinchmann et al. (2004) and Salim et al. (2007). We use the morphological data provided in the *Galaxy Image 2D* (GIM2D) catalogue by Simard et al. (2011).

### The Magnitude-Limited Compact Group Catalogue (MLCG)

Studying the properties of galaxies in compact groups requires reliable identification of these systems. Several algorithms exist for identifying groups in galaxy surveys, but they all involve linking together galaxies that are close together on the sky. The original criteria for identifying compact groups were specified by Hickson & P. (1982), who compiled the first collection (consisting of around 100 compact groupss) and started quantifying their properties. Hickson’s approach involved three criteria based on the relative brightness, compactness and isolation of the galaxies. For our work, we employ the Magnitude-Limited Compact Group (MLCG) catalogue created by Sohn et al. (2016) from the enhanced SDSS Data Release 12 (DR12; Alam et al. 2015). Their sample was derived using the friends-of-friends (FoF) algorithm of Barton et al. (1996) and two of the three Hickson criteria. They omit the isolation criterion, arguing that it artificially selects against nearby groups.

The MLCG (column 1 of Table 1) consists of 1588 compact groups composed of a total of 5178 member galaxies, covering a range in redshift $$0.01 \leq{} z \leq{} 0.20$$ (distances of 0.1 to 2.5 billion light years). The majority of groups, 1276, have three member galaxies and the remaining 312 have four or more. Galaxies have absolute r-band magnitudes down to $$r < 17.77$$.

{% include table.html
            title="Table 1"
            caption="The number of galaxies contained in our sample and subsamples. We match the MLCG of Sohn et al. (2016) to the GIM2D morphology catalogue and the MPA JHU star formation catalogue."
            content="
| The MLCG | Match to GIM2D | Matched to MPA JHU |
|---|---|---|
| 5178 | 4272 | 3656 |
"%}

### Galaxy properties

The morphology of a galaxy ranges from disk-dominated spiral galaxies (such as the Milky Way) to bulge-dominated elliptical galaxies, whose structure is supported by stars undergoing random motion rather than rotational motion. Morphology can be described qualitatively by eye (using the Hubble "tuning fork"; Nair & Abraham 2010) or it can be quantified numerically using the generalized de Vaucouleurs profile (also known as the Sèrsic profile). We are interested in the latter. The GIM2D catalogue (Simard et al. 2011) provides this metric of galaxy morphology by fitting a surface brightness radial profile $$\mu(r)$$ using a single parameter, the Sèrsic index $$n$$, as follows:

$$
\begin{align}
\mu(r)=\mu_e + 8.3268{\left(\frac{r}{r_e}^{1/n}-1\right)}
\end{align}
$$

where $$r_e$$ is the effective radius (the projected radius within which half of the galaxy’s light is emitted) and $$\mu_e$$ is the surface brightness at $$r_e$$. A value of $$n = 1$$ corresponds to a pure disc, and morphology becomes increasingly bulge-dominated with increasing $$n$$.

A second important observed property of a galaxy is its star formation rate. The star formation rate of a galaxy depends on how large a galaxy is and how much gas it has available to form stars. The SFR can be estimated in a number of ways; in the SDSS it is done using the emission lines from hot gas around young stars. To control for the dependence of SFR on stellar mass ($$M_{star}$$), we use the specific star formation rate, $$sSFR = \frac{SRF}{M_{star}}\ yr^{-1}$$.

To obtain star formation and morphological data on the galaxies in our sample of compact groups, we matched the MLCG to MPA JHU and GIM2D by the galaxies’ coordinates on the sky (Right Ascension, Declination). Not all galaxies in our compact group sample had matches in the other catalogues. This was partly due to the fact that MPA JHU and GIM2D originate from the SDSS Data Release (DR) 7 while the MLCG was constructed from DR12, although 1450 of the 1755 lost galaxies do appear in DR7. Figure 2 shows the relevant properties of the galaxies successfully matched and of those not. We find that the galaxies retained in our sample have lower stellar mass, lower luminosity in the r-band and are at slightly lower redshifts. It is likely that the unmatched galaxies suffer from fiber collisions (the inability to resolve objects that are close together on the sky due to the finite size of the fiber plugs in the telescope; Guo et al. 2011) or that they have low signal-to-noise ratios, making it difficult to determine star formation and morphology. Whenever possible, we conduct our analyses on the largest subsample with the required data; this means 3656 galaxies for plots with star formation data (column 3 in Table 1), 4272 with morphology (column 2), and 5178 galaxies otherwise (column 1).

{% include figure.html
            fig="Figure2.png"
            title="Figure 2"
            caption="A histogram of three galaxy properties (*Left panel*: stellar mass; *centre panel*: magnitude in the r-band - note that brightness decreases with higher r; *right panel*: redshift). Of the 5188 galaxies in the MLCG by Sohn et al. (2016), only 4372 of them are present in GIM2D morphology catalogue and 3656 in MPA JHU star formation catalogue. Shown in red is the sample remaining after matching to both, and in blue are the galaxies lost in the match." %}

In Figure 3, we show specific star formation rate plotted against galaxy stellar mass. Galaxies fall into one of two populations: star-forming or non star-forming. In the optical, these populations appear blue and red, respectively. The break in the bimodal distribution occurs at $$\log(sSFR) \approx 10^{-11} yr^{-1}$$. A galaxy’s location on this plot is not static. Various processes can "quench" a galaxy (drive it off the star-forming sequence) or induce star formation activity. On a cosmological scale, the migration occurs rapidly (Wetzel et al. 2011). Processes are a function of the environment in which the galaxy lives in addition to the galaxy’s intrinsic properties.

{% include figure.html
            fig="Figure3.png"
            title="Figure 3"
            caption="Specific star formation rate (SFR normalized by stellar mass) as a function of galaxy stellar mass for all 3656 galaxies in our sample with data in MPA JHU. Two galaxy populations are visible: star-forming and non star-forming (quenched). Like the total SDSS population, ours exhibits a bimodal distribution, with a break at $$sSFR \approx{} 10^{-11} yr^{-1}$$." %}

### Group properties

As mentioned in the introduction, some properties of compact groups make them challenging to study: particularly, group richness (the number of member galaxies). As aforementioned, 1276 of 1588 compact groups have only 3 members, and in Figure 4 we show a histogram of group richness for our smallest subsample of the MLCG (3656 galaxies matched to MPA JHU). Reliable statistics cannot be run on a sample of so few member galaxies.

{% include figure.html
            fig="Figure4.png"
            title="Figure 4"
            caption="Log-histogram of compact group richness (the number of member galaxies) for the subset of our sample with data in MPAJHU and GIM2D (3656 galaxies). The vast majority of groups contain three galaxies, the minimum number to qualify as a group." %}

Low group richness has implications for another crucial group property: velocity dispersion, $$\omega$$ . Similar to standard deviation, this $$\omega$$ is the statistical dispersion of individual galaxy velocities about their mean. It is derived for a group by measuring the line-of-sight velocities of the galaxies via spectroscopic redshifts. Observational incompleteness (due to the difficulty in resolving spectroscopic measurements for close-by galaxies) combines with the statistics to make velocity dispersion a very uncertain quantity for compact groups. Figure 5 shows the uncertainty in $$\omega$$ as a proportion of the reported value. The mean uncertainty for the whole MLCG catalogue is $$22%$$. Two groups even have an uncertainty fraction greater than 1 (not shown).

{% include figure.html
            fig="Figure5.png"
            title="Figure 5"
            caption="The distribution of observational uncertainty in compact group velocity dispersion () as a fraction of the reported value. Two groups (not shown) have an uncertainty fraction greater than 1 (185%, 511%). The mean for our sample of 5188 galaxies is 22%." %}

### Galaxy and group radii

We are interested in how the properties of galaxies are related to their distance from the centre of the group. However, investigations of radial trends cannot be done with simply the group radius as the independent variable. Compact galaxy groups come in different sizes (differing by a factor of $$\approx{}15$$), and so it is necessary to normalize the galaxy’s radial distance $$R$$ to a proportion of the group size, $$R_{Gr}$$.

The calculation of galaxy radial distance $$R$$ involves three steps (refer to Figure 6) and was done as outlined in Hogg (2000). The distance to the group ($$D$$) was calculated using the cosmological parameters assumed (described in the Introduction) and the group redshift ($$z$$). By the small angle approximation, the distance between a galaxy and its group centre is simply $$D$$ times the angular separation $$\theta$$.

{% include figure.html
            fig="Figure6.png"
            title="Figure 6"
            caption="The radial distance of each galaxy ($$R$$) from its group centre (black dot) is approximated as the angular separation ($$\theta{}$$) times the angular distance ($$D$$). The calculation of $$D$$ involves cosmological parameters ($$\Omega{}_M$$, $$\Omega{}_\Lambda{}$$, $$\Omega{}_K$$ and $$z$$) and was done as outlined in Hogg (2000)." %}

One commonly practiced way to define group radius is to fit a surface brightness or number density radial profile and identify where the curve falls to some chosen value; however, fitting radial profiles requires many galaxies, which compact groups do not have. The MLCG by Sohn et al. (2016) defines group radius $$R_{Gr}$$ as the radius of smallest circle encompassing all group members. In other words, the group radius is the same as the largest galaxy radial distance. Although the motivation for this definition is understandable, it is not physical.

An alternative way, often used in the literature, to calculate the radius of a system of galaxies is to assume that the system is spherical and in dynamical equilibrium. With these assumptions, we can relate group mass ($$M_{Gr}$$), radius ($$R_{virGr}$$) and velocity dispersion ($$\omega$$) using Equation 2. Unfortunately, due to the large uncertainties in $$\omega$$ (Figure 5), we are not able to reliably estimate group radius in this way.

$$
\begin{align}
  \frac{GM_{Gr}}{R_{virGr}}\approx{}\omega^2
\end{align}
$$

Instead, we follow the example of Mok et al. (2013) and define compact group radius as the root mean square of the constituent member galaxy radial distances:

$$
\begin{align}
R_{rms}=\sqrt{\frac{R_1^2+R_2^2+\ldots{}+R_n^2}{n}}
\end{align}
$$

where $$n$$ is the number of member galaxies and $$R_n$$ is the distance between the n<sup>th</sup> galaxy and group centre (we do not redefine the centre).  This definition is similar to a mean, but it takes into account the variation in the values of $$R_n$$. Because it uses the radial distances of all member galaxies, it is more physical than the $$R_{Gr}$$ of Sohn et al. (2016). For comparison, we show these two definitions of group radius, $$R_{Gr}$$ and $$R_{rms}$$, for two compact groups in Figure 7. The inner circle, representing $$R_{rms}$$, is necessarily smaller than that representing $$R_{Gr}$$, and does not necessarily have a galaxy located on its edge. Considering that galaxy sizes themselves are roughly on the scale of tens to hundreds of kpc, this figure also demonstrates the compactness of these groups.

{% include figure.html
            fig="Figure7.png"
            title="Figure 7"
            caption="A visual comparison between two definitions of compact group radius. Points are coordinates on the sky (Right Ascension, Declination) representing the projected location of two groups and their member galaxies, as appear in the MLCG by Sohn et al. (2016). The group MLCG0001 (yellow) contains 3 members, the minimum number to be deemed a group; the group MLCG0093 (purple) contains 6, one of the richest groups in the catalogue. In both panels, the radius of the large circle corresponds to $$R_{Gr}$$. As a result, a galaxy always lies on the edge. The radius of the smaller inset circle corresponds to $$R_{rms}$$, the root mean square of all galaxies’ radial distance from the geometric centre; a galaxy does not necessarily lie on the edge." %}

## Results

### Correlation of group radius definitions

In the left panel of Figure 8 we plot our definition of compact group radius, $$R_{rms}$$ against that of Sohn et al. (2016), $$R_{Gr}$$. As is to be expected based on how it is calculated, $$R_{rms}$$ is always smaller than $$R_{Gr}$$, and all the points lie below the one-to-one line. For small, tight-knit groups, the two definitions do not differ greatly. However, for groups with a galaxy at a large radial distance (corresponding to a large $$R_{Gr}$$), the root mean square $$R_{rms}$$ is significantly smaller than $$R_{Gr}$$. We expect to see radial trends with $$R_{rms}$$ that are similar but not identical to those of $$R_{Gr}$$.

{% include figure.html
            fig="Figure8.png"
            title="Figure 8"
            caption="A comparison between two definitions of compact group radius. *Left panel*: $$R_{Gr}$$ is the radius of the smallest circle enclosing all group member galaxies, as used in the MLCG by Sohn et al. (2016). In other words, the projected distance to the member farthest from the centre defines the radius of the group. $$R_{rms}$$ is the root mean square of the projected distance of all members from their geometrical centre. *Right panel*: The specific radius of each member galaxy (distance from the group centre as a proportion of its group’s radius) is plotted for the two group radius definitions, RGr and $$R_{rms}$$." %}

In the right panel of Figure 8 we see what the two different definitions of group radius mean for the galaxies’ normalized radial distance (“specific radius”). In this plot, the problem with the $$R_{Gr}$$ definition is clearly visible. At $$R/R_{Gr} \approx 1$$ is an artificial pile-up of galaxies that live on the edge of the group. The cut-off is not strictly at $$R/R_{Gr} = 1$$ because we normalized to the $$R_{Gr}$$ of the MLCG instead of to our own max($$R_N$$); the assumed cosmological parameters and details of numerical integration involved in our calculation of angular diameter distance likely differs slightly to that undertaken by Sohn et al. There is nothing physically significant about a specific radius of 1, and $$R_{rms}$$ rightfully extends past 1 on its axis.

### Mass segregation

Previous work has shown that galaxy properties depend most strongly on their own stellar mass, therefore any trend in galaxy properties needs to be independent of radial trends in stellar mass in order to be significant. We explore trends of stellar mass with specific radius in Figure 9. Galaxy stellar mass is plotted as a function of normalized radial distance from the group centre for the two group definitions.
In both cases the trend is clear: galaxies with higher stellar mass tend to live in the centre of the group, and those with lower stellar mass on the outskirts. The range on the y-axis, however, is small ($$\Delta{}\log(M_{star}/M_{dot}) \approx{} 0.25$$). We have binned the x-axis by frequency, making apparent the pile-up at $$R/R_{Gr} \approx{} 1$$, which does not occur in the right panel where specific radius is $$R/R_{rms}$$. For the remainder of the paper we fully adopt the $$R_{rms}$$ definition of group radius for use in exploring radial trends.

{% include figure.html
            fig="Figure9.png"
            title="Figure 9"
            caption="Mean galaxy stellar mass as a function of specific radius (normalized radial distance from group centre) for all 5178 galaxies in our sample. The x-axis is binned by frequency and error bars correspond to 1 SE. *Left panel*: Galaxy radial distance normalized by $$R_{Gr}$$, the group radius definition used in the MLCG by Sohn et. al (2016). *Right panel*: Galaxy radial distance normalized by $$R_{rms}$$, the root mean square of all galaxy radii of the group." %}

### Radial trends in star formation

Figure 10 shows how the rate at which a galaxy forms stars is related to its radial position in the group. As described in Figure 3, specific star formation rate (sSFR) is strongly dependent on stellar mass, and so we have divided our sample into four stellar mass bins. We also show the trend for the total sample (in red). We find a strong dependence of sSFR on stellar mass, with the lowest mass galaxies exhibiting the highest specific star formation rates. However, we see little to no trend with specific radius; the lines are consistent with being flat for all bins.

{% include figure.html
            fig="Figure10.png"
            title="Figure 10"
            caption="Mean galaxy specific star formation rate as a function of specific radius (normalized radial distance from group centre) for all 3656 galaxies in our sample with data in MPA JHU. In greens and blues are four stellar mass bins, and in red is the total unbinned mean. The x-axis is binned by frequency and error bars correspond to 1 SE." %}

In Figure 11 we differentiate compact groups based on their velocity dispersion. Since $$\sigma{}$$ is such an uncertain quantity (see Figure 5), we make cuts for only the highest ($$\sigma{}\geq{}300\ km/s$$) and lowest ($$\sigma{}\leq{}100\ km/s$$), instead of dividing the sample in half. Furthermore, we control for mixing of galaxies with different stellar masses by taking only galaxies with $$9.5 \leq{} \log(M_{star}/M_{dot}) \leq{} 10.5$$ (Figure 9 estimates the issue of mass segregation). The stellar mass distributions of the two velocity dispersion samples are different (low, $$<\log(M_{star}/M_{dot})>$$ of $$9.8$$ compared to high, $$<\log(M_{star}/M_{dot})>$$ of $$10.1$$) and we found that neglecting to account for this yields a misleading radial trend in the low  sample. The mean log stellar mass of the resulting galaxies plotted in Figure 11 are different by a factor of only 0.04 dex.

{% include figure.html
            fig="Figure11.png"
            title="Figure 11"
            caption="Mean galaxy sSFR as a function of specific radius (normalized radial distance from group centre) for the 2137 galaxies with $$9.5 \leq{} \log(M_{star}/M_{dot}) \leq 10.5$$. Galaxies are separated by group velocity dispersion: low, $$\omega{}\leq 100\ km/s$$ (479 galaxies); and high, $$\sigma{}\leq{} 300\ km/s$$ (638 galaxies). Solid lines correspond to a least squares best fit to the means and both slopes are consistent with being flat. The x-axis is binned by frequency and error bars correspond to 1 SE." %}

We find that there is a segregation of galaxies by group velocity dispersion. The galaxies in groups with low $$\sigma{}$$ have consistently higher specific star formation rates than those with high $$\sigma$$. We find no significant trend with radial distance (low $$\sigma$$, slope $$= 0.10 \pm{} 0.08$$; high $$\sigma$$, slope $$= -0.06 \pm{} 0.08$$).

### Radial trends in morphology

Sèrsic index, our quantitative metric of galaxy morphology, is shown as a function of specific radius in Figure 12. We find again a strong dependence on stellar mass, indicative of the known correlation between galaxy stellar mass and morphology: disks are lighter in stellar mass than elliptical galaxies.
The highest two stellar mass bins are consistent with being flat; high mass galaxies are more likely to be ellipticals and are found with equal probability at all radial positions. However, we do see a dependence of morphology on radial distance for galaxies low in stellar mass. Statistically significant slopes exist for the lowest and second lowest bins, and for the unbinned sample (slopes $$= 0.31 \pm{} 0.09$$, $$0.19 \pm{} 0.06$$ and $$0.44 \pm{} 0.09$$, respectively).

{% include figure.html
            fig="Figure11.png"
            title="Figure 11"
            caption="Mean galaxy Sèrsic index (n) as a function of specific radius (normalized radial distance from group centre) for all 4372 galaxies in our sample with data in GIM2D. In greens and blues are four stellar mass bins, and in red is the total unbinned mean. The x-axis is binned by frequency and error bars correspond to 1 SE. Solid lines correspond to a least squares best fit to the means." %}

As seen in Figure 9, stellar mass decreases with specific radius, therefore mixing of stellar mass leads to the unbinned radial trend. However, the radial dependence of the lowest two stellar mass bins is robust. The bulge component of low mass disk galaxies on the group outskirts is less than that of those closer to the group centre.

## Discussion

Our work investigates two properties of galaxies (star formation and morphology) as functions of both stellar mass (another galaxy property) and environmental properties (radial position and velocity dispersion) in compact groups. In this section, we discuss and interpret our results in the context of previous astronomical work.

There are two quantities essential to our work whose limitations are important to keep in mind. Due to the nature of the process for calculating sSFR from the observed data, values of $$\log(sSFR) < -11.5$$ have high uncertainty (Brinchmann et al. 2008); it is easy to calculate the SFR of a galaxy forming lots of stars but difficult to constrain that of a galaxy with very little star formation. Secondly, with respect to stellar mass, our sample is not complete. Data cannot be collected for the entire population of low mass galaxies; only the closest ones are bright enough to be measured. This introduces a potential bias with redshift, known as the Malmquist bias. In the future, we intend to estimate this incompleteness and weight our low stellar mass bins appropriately. It is important to note however that the sample galaxies with $$M_{star} > 10^{10}$$ is complete.

### Dependence on environment

There are many ways to describe the nature of the environment in which a galaxy exists, although we focus on two common metrics. Equation 2 shows that group velocity dispersion is proportional to the mass of the group. A galaxy’s mass takes two forms: ordinary matter (stars, gas) and dark matter. The mass of the combined group dark matter halo in which the visible mass sits, $$M_{halo}$$, can be proxied by the group velocity dispersion, $$\sigma$$. Because the value of $$\sigma$$ is so uncertain (see Figure 5), we do not have a well-determined measure of this first environmental property, halo mass. Our second environmental measure is normalized galaxy radial position, $$R/R_{rms}$$. Galaxies living near the centre are in much denser environments. The problem with this metric is introduced by the necessary normalization of galaxy radial position by group radius, defined as $$R_{rms}$$, which again is affected by low $$N_{Members}$$.

Controlling for stellar mass, a given galaxy has the same specific star formation rate regardless of where it lives in its compact group (Figure 10). This is consistent with previous work by Ziparo et al. (2012), which finds a marginal dependence of sSFR on normalized radial distance in non-compact galaxy groups. The intergalactic separation of non-compact groups is on the order of hundreds of kpc and group richness $$10 \leq{} N_{Members} \leq 100$$, in contrast to the compact groups’ mean separation of tens of kpc and $$3 \leq{} N_{Members} \leq{} 8$$. These two types of galaxy systems are very different, yet they exhibit similar radial trends with star formation.

The radial trend with morphology of Figure 12 exists only for galaxies of low stellar mass; their bulge component increases closer to the group centre. In addition to low mass, these galaxies have rotation-supported structure and tend to be gas-rich; they are easily disrupted by gravitational interactions. Our results suggest that low mass galaxies "feel" their environment more than high mass ellipticals. This is consistent with the work of Roberts et al. (2015), which finds that the effect of an X-ray-rich environment (which is to increase disk fraction) is strongest for low stellar mass galaxies.

It is common practice in astronomy to understand galaxy environment by considering the group’s gravitational potential well. For an aggregation of a sufficient number of galaxies, it is possible to trace out the potential well with the velocities of the galaxies. It is unknown whether compact groups have similar dynamics and velocity distributions to regular groups and clusters. As shown in Figure 4 and 5, group velocity dispersion is very uncertain as compact groups have very few members. Understanding the precise shape of their potential well is challenging.

In this context, two main ideas can explain the lack of radial dependence for star formation rates. The first hinges on a relative scale concept: with the separation between galaxies in compact groups being comparable to the size of the galaxies themselves, the environmental gradient between the group centre and edge may too small to be noticed by whole galaxies. A second idea, perhaps more plausible (also suggested by Hickson, 1997), is simply that the centre of a compact group is not a well-defined quantity. We can speculate on what the observational work suggests, but a more complete understanding will come from theoretical work using simulated galaxy groups.

However, we can look at groups with the largest and smallest potential wells in our sample, which we effectively do with the $$ \sigma{}\geq{} 300\ km/s$$ and $$\sigma{}\leq{} 100\ km/s$$ group samples in Figure 11. Our result that galaxies in groups with low $$\sigma{}$$ have consistently higher specific star formation rates is consistent with previous work. Wetzel et al. (2011) find a strong dependence of galaxy sSFR on the mass of the dark matter halo in which the galaxy lives. Although their study looks directly at halo mass and we look at velocity dispersion, because $$M_{halo}$$ and $$\sigma{}$$ are related (Equation 2), the agreement suggests that this is another aspect in which compact groups are similar to non-compact groups.

Considering the extreme differences between these two types of galaxy systems (namely, galaxy-galaxy separation), it would not be surprising if they exhibited very different galaxy properties. We
find instead that they are in fact similar, in the ways we have outlined in this work.

### Dependence on internal properties

In addition to environmental dependencies, we also explore how star formation and morphology depend on stellar mass; we do this by binning our data by frequency into quartiles. In both Figure 10 and 12, there is clear segregation between the bins. That Sèrsic index correlates strongly with stellar mass is a well-known global trend (Conselice 2014). The result that sSFR depends strongly on stellar mass is consistent with previous work. In addition to finding a strong dependence on $$M_{halo}$$, Wetzel et al. (2011) also find a sSFR distribution predominantly more star-forming for galaxies of low stellar mass. It is not clear in the literature whether the mechanisms for quenching star formation seen in large galaxy clusters (such as ram-pressure stripping or strangulation) could apply to the smaller regime of groups or compact groups (Wetzel et al. 2011).

### Galaxy pair interactions

The clear segregation in sSFR between galaxies in Figure 11 shows increased star formation in groups with lower group velocity dispersion. Although not exactly equivalent, the group velocity dispersion is an effective indicator for galaxy-galaxy flyby speeds. Within the constituent member galaxies, stars have internal velocities on the order of $$100-200\ km/s$$. If the trajectories of two galaxies in a group bring them past each other at a speed comparable to their internal stellar velocities, gas dynamics are more affected. Interactions at these speeds are also generally longer in duration. Shock fronts (high density areas) are created, making for effective radiative cooling of intragalactic dust and gas. It is this material that collapses to form stars.

Features indicative of galaxy pair interactions are visible in the images of four compact groups in Figure 1. Tidal tails, shock fronts and regions of high star formation are created as the galaxies slosh about in the potential well. Compact groups are ideal systems in which to study intergalaxy interactions.

## Conclusions

Our main findings are as follows.

* The star formation rates and morphologies of galaxies in compact groups depends strongly on their internal stellar mass. Low stellar mass galaxies are more star forming and diskier.

* Galaxies in compact groups with low velocity dispersion, and therefore lower halo masses, are more star forming.

* No radial trend exists for star formation rates of galaxies in compact groups. A weak radial trend exists for morphology at low stellar mass; the bulge component of low mass disk galaxies living on the outskirts of the group is less than that of those in the group centre.

In future work, we would like to explore galaxy X-ray profiles to define compact group centres based on a peak in that wavelength. Additionally, with simulations, we could trace out the potential well and quantify the effects of uncertain centres and test different definitions of group radius.

## Acknowledgements

We thank J. Sohn et al. for making their SDSS DR12 compact group catalogue publicly available, L. Simard et al. for the publication of their SDSS DR7 morphology catalogue, and J. Brinchmann et al. for publication of their SDSS SFRs. This research would not have been possible without access to these public catalogues.

Funding for SDSS-III has been provided by the Alfred P. Sloan Foundation, the Participating Institutions, the National Science Foundation, and the U.S. Department of Energy Office of Science. The SDSS-III web site is http://www.sdss3.org/.

SDSS-III is managed by the Astrophysical Research Consortium for the Participating Institutions of the SDSS-III Collaboration including the University of Arizona, the Brazilian Participation Group, Brookhaven National Laboratory, Carnegie Mellon University, University of Florida, the French Participation Group, the German Participation Group, Harvard University, the Instituto de Astrofisica de Canarias, the Michigan State/Notre Dame/JINA Participation Group, Johns Hopkins University, Lawrence Berkeley National Laboratory, Max Planck Institute for Astrophysics, Max Planck Institute for Extraterrestrial Physics, New Mexico State University, New York University, Ohio State University, Pennsylvania State University, University of Portsmouth, Princeton University, the Spanish Participation Group, University of Tokyo, University of Utah, Vanderbilt University, University of Virginia, University of Washington, and Yale University.

{% include references.md
            reference="
Alam, S., Albareti, D., Allende Prieto, C., et al., 2015. The Eleventh and Twelfth Data Releases of the Sloan Digital Sky Survey: Final Data from SDSS-III. [online] Available at: <http://arxiv.org/abs/1501.00963 http://dx.doi.org/10.1088/0067-0049/219/1/12.

Barton, E., Geller, M.J., Ramella, M., Marzke, R.O. and da Costa, L.N., 1996. Compact Group Selection From Redshift Surveys. Astronomical Journal v.112, p.871, 112, p.871.

Brasseur, C.M., Mcconnachie, A.W., Ellison, S.L. and Patton, D.R., 2008. Compact groups in theory and practice -II. Comparing the observed and predicted nature of galaxies in compact groups. Mon. Not. R. Astron. Soc., 392(3), pp.1141-1152.

Brinchmann, J., Charlot, S., White, S.D.M., Tremonti, C., Kauffmann, G., Heckman, T. and Brinkmann, J., 2003. The physical properties of star forming galaxies in the low redshift universe. Mon. Not. R. Astron. Soc. 351(4), pp.1151-1179.

Conselice, C.J., 2014. The Evolution of Galaxy Structure Over Cosmic Time. Annual Review of Astronomy and Astrophysics, 52(1), pp.291–337.

Ellison, S.L., Patton, D.R., Simard, L. and McConnachie, A.W., 2008. Galaxy pairs in the Sloan Digital Sky Survey. I. Star formation, active galactic nucleus fraction, and the luminosity/mass-metallicity relation. The Astronomical Journal, 135(5), pp.1877–1899.

Gomez, P.L., Nichol, R.C., Miller, C.J., Balogh, M.L., Goto, T., Zabludoff, A.I., Romer, A.K., Bernardi, M., Sheth, R., Hopkins, A.M., Castander, F.J., Connolly, A.J., Schneider, D.P., Brinkmann, J., Lamb, D.Q., SubbaRao, M. and York, D.G., 2003. Galaxy Star Formation as a Function of Environment in the Early Data Release of the Sloan Digital Sky Survey. The Astrophysical Journal, 584(1), pp.210–227.

Guo, H., Zehavi, I. and Zheng, Z., 2011. A New Method to Correct for Fiber Collisions in Galaxy Two-Point Statistics. [online] The Astrophysical Journal, 756(2), p.127.

Hickson, P., 1997. Compact groups of galaxies. Annual Review of Astronomy and Astrophysics, 35(1), pp.357-388.

Hickson, P. and P., 1982. Systematic properties of compact groups of galaxies. The Astrophysical Journal, 255, p.382.

Hogg, D.W., 2000. Distance measures in cosmology. [online] Available at: <https://arxiv.org/pdf/astro-ph/9905116.pdf>.

McConnachie, A., Patton, D., Ellison, S. and Simard, L., 2009. Compact groups in theory and practice - III. Compact groups of galaxies in the Sixth Data Release of the Sloan Digital Sky Survey. Mon. Not. R. Astron. Soc., 395(1), pp.255-268.

Mcconnachie, A.W., Ellison, S.L. and Patton, D.R., 2008. Compact groups in theory and practice -I. The spatial properties of compact groups. Mon. Not. R. Astron. Soc, 387(3), pp.1281-1290.

Mok, A., Balogh, M.L., Mcgee, S.L., Wilman, D.J., Finoguenov, A., Tanaka, M., Giodini, S., Bower, R.G., Connelly, J.L., Hou, A., Mulchaey, J.S. and Parker, L.C., 2013. Efficient satellite quenching at z ∼ 1 from the GEEC2 spectroscopic survey of galaxy groups. Mon. Not. R. Astron. Soc, 431(2), pp.1090-1106.

Moore, B., Katz, N., Lake, G., Dressler, A. and Oemler, A.J., 1996. Galaxy harassment and the evolution of clusters of galaxies. Nature, 379(6566), pp.613–616.

Nair, P.B. and Abraham, R.G., 2010. A Catalog of Detailed Visual Morphological Classifications for 14034 Galaxies in the Sloan Digital Sky Survey. The Astrophysical Journal Supplement Series, 186(2), p.427.

Roberts, I.D., Parker, L.C. and Karunakaran, A., 2015. Comparing galaxy disk and star-formation properties in X-ray bright and faint groups and clusters. MNRAS, 0, pp.1–12.

Salim, S., Rich, R.M., Charlot, S., Brinchmann, J., Johnson, B.D., Schiminovich, D., Seibert, M., Mallery, R., Heckman, T.M., Forster, K., Friedman, P.G., Martin, D.C., Morrissey, P., Neff, S.G., Small, T., Wyder, T.K., Bianchi, L., Donas, J., Lee, Y., Madore, B.F., Milliard, B., Szalay, A.S., Welsh, B.Y. and Yi, S.K., 2007. UV Star Formation Rates in the Local Universe. The Astrophysical Journal Supplement Series, 173(2), pp.267–292.

Simard, L., Trevor Mendel, J., Patton, D.R., Ellison, S.L. and McConnachie, A.W., 2011. A catalog of bulge+disk decompositions and updated photometry for 1.12 million galaxies in the Sloan Digital Sky Survey. The Astrophysical Journal Supplement Series, 196(1), p.11.

Sohn, J., Geller, M.J., Hwang, H.S., Zahid, H.J. and Lee, M.G., 2016. Catalogs of compact groups of galaxies from the enhanced SDSS DR12. The Astrophysical Journal Supplement Series, [online] 225. Available at: <http://iopscience.iop.org/article/10.3847/0067-0049/225/2/23/pdf>.

Wetzel, A.R., Tinker, J.L. and Conroy, C., 2011. Galaxy evolution in groups and clusters: star formation rates, red sequence fractions, and the persistent bimodality. Mon. Not. R. Astron. Soc, 424(1), pp.232-243.

Ziparo, F., Popesso, P., Biviano, A., Finoguenov, A., Wuyts, S., Wilman, D., Salvato, M., Tanaka, M., Ilbert, O., Nandra, K., Lutz, D., Elbaz, D., Dickinson, M., Altieri, B., Aussel, H., Berta, S., Cimatti, A., Fadda, D., Genzel, R., Le Flo’ch, E., Magnelli, B., Nordon, R., Poglitsch, A., Pozzi, F., Sanchez Portal, M., Tacconi, L. and Bauer, F.E., 2012. The lack of star formation gradients in galaxy groups up to z ~ 1.6. Mon. Not. R. Astron. Soc, 434(4), pp.3089-3103.
"
%}
