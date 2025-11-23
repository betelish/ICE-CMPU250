# ICE-CMPU250
Drawing on data published by https://deportationdata.org/data/ice.html spanning 2011-2025 as an agglutination from multiple FOIA requests, how do ICE arrests, deportations, and other encounters change over time? Are there trends that align with presidential administrations? What are the racial and gendered leanings in the data? What times of day are ICE arrests more common, in what areas, and during what years?

In this project we intend to explore in-depth both recent and older data releases from Immigrations & Customs Enforcement from an explicitly anti-ICE perspective, putting the data releases in a critical context in which we question the efficacy and purpose of ICE as an institution, as well as questioning the *quality of data* that we interact with.

Methedology outline [OUTDATED]
---
We intend to focus on a handful of outcome variables: 
- Mismatches of deportation country & citizenship country (over time and by AOR)
- Numbers of arrests (by presidential administration, by time, by state, by gender, by age, and by AOR)
- Correlation between deportation, criminality, reported race, and reported ethnicity

We hope that through observations of these relationships, we can demonstrate (or refute) certain popular narratives about ICE & immigration. For example, one common justification for ICE is the presumed criminality of undocumented immigrants. By using the least charitable variable possible to individuals arrested by ICE (the worst crime they have ever been *accused* of), we can compare these data against publicly available demographic data for arrests and convictions made by municipal police, and demonstrate whether such claims hold any credibility. 
All these planned observations will require comparison against publicly available data of other sorts, such as policy and budget changes to ICE over time and intersectional criminalization statistics.

One other type of claim that we can evaluate through this dataset is claims often made about the behavior of ICE: Where do they tend to operate, and between what hours? Data such as this can be helpful to groups seeking to protect community members from ICE, and can be vital in promoting the safety of immigrants (both documented & undocumented) in light of the recent SCOTUS decision regarding ICE & racial profiling, the beginning politcal deployment of ICE (for example, what is currently happening to Khalil), and July's "Big Beautiful Bill" which allocates an additional $75 Billion to ICE's budget over the next four years.

This is an actively updating project.

<br><br>
# <b>CODEBOOK</b>

Arrests By Day (2023-2025)
---

| Name                         | Description                                                                                                                                          | Type  |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Arrests                      | The total number of arrests by ICE per day                                                                                                           | int   |
| Deportations                 | The total number of arrests per day that lead to the deportation of the person who is arrested.                                                      | int   |
| Deportations to home country | the total number of arrests per day that lead to the deportation of the person who is arrested to their country of citizenship.                      | int   |
| Deportations elsewhere       | The total number of arrests per day that lead to the deportation of the person who is arrested to a country other than their country of citizenship. | int   |
| Home country proportion      | The decimal portion of arrests leading to deportations that send the deported person to their country of citizenship.                                | float |

Note: We did not include the most recent week of data in the plots, as the ICE data were not fully recorded in the last week.

Arrests 2011-2025
---
|Name | Description | Type |
|-|-|-|
|Apprehension AOR|The ICE Area of Responsibility that made the arrest|str|
|Apprehension Date Time|Date & Time of the arrest. Set to midnight if unrecorded|datetime obj|
|Apprehension Method|How the arrest took place, differentiating arrests made of already incarcerated individuals from non-jail/prison locations|str|
|Apprehension Site Landmark|A nearby location, or an associated ICE division|str|
|Apprehension State|State of arrest|str|
|Apprehension Year|Year of arrest|int|
|Final Program|The program associated with the arrest, not necessarily ICE|str|
|Departed Date|Date of deportation, blank if not removed|str|
|Departure Country|Country of deportation, blank if not removed|str|
|Citizenship Country|Country arestee has citizenship in|str|
|Birth Year|Birth year of the arrested individual|int|
|Gender|ICE presumed gender of individual|str|
|Race|ICE presumed race of individual|str|
|Worst Criminal Charge|Current highest-level crime (misdemeanor/felony/etc) the arestee has been charged with (not necessarily convicted)|str|
|Charged|Flag for if arrestee has been charged with a crime|bool|
|Has Time Of Day|Flag for if the datetime includes time of day|bool|
|Hispanic|Flag for if the arrestee is of Hispanic origin|bool|
|Deported|Flag for if arrestee has been deported|bool|
|Convicted|Flag for if arrestee has any standing criminal convictions|bool|
CSV files are too large to store on native github
See drive: https://drive.google.com/drive/folders/1tC1GmXV51mEeywB6ZN0hkrYtJ38owuLB?usp=drive_link

