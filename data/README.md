Arrests By Day (2023-2025)
====

| Name                         | Description                                                                                                                                          | Type  |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Arrests                      | The total number of arrests by ICE per day                                                                                                           | int   |
| Deportations                 | The total number of arrests per day that lead to the deportation of the person who is arrested.                                                      | int   |
| Deportations to home country | the total number of arrests per day that lead to the deportation of the person who is arrested to their country of citizenship.                      | int   |
| Deportations elsewhere       | The total number of arrests per day that lead to the deportation of the person who is arrested to a country other than their country of citizenship. | int   |
| Home country proportion      | The decimal portion of arrests leading to deportations that send the deported person to their country of citizenship.                                | float |

Note: We did not include the most recent week of data in the plots, as the ICE data were not fully recorded in the last week.

Arrests 2011-2025
====
|Name | Description | Type |
|-|-|-|
|Apprehension AOR|The ICE Area of Responsibility that made the arrest|str|
|Apprehension Date Time|Date & Time of the arrest|datetime obj|
|Apprehension Method|How the arrest took place, differentiating arrests made of already |incarcerated individuals from non-jail/prison locations|str|
|Apprehension Site Landmark|A nearby location, or an associated ICE division|str|
|Apprehension State|State of arrest|str|
|Final Program|The program associated with the arrest, not necessarily ICE|str|
|Final Program Group|For Arrests, this is always ICE|str|
|Departed Date|Date of deportation, blank if not removed|str|
|Departure Country|Country of deportation, blank if not removed|str|
|Citizenship Country|Country arestee has citizenship in|str|
|Birth Year|Birth year of the arrested individual|int|
|Gender|ICE presumed gender of individual|str|
|Race|ICE presumed race of individual|str|
|Ethnicity|Flag for hispanic, should likely be updated to "Hispanic" & boolean type|str|
|Worst Criminal Charge|Current highest-level crime (misdemeanor/felony/etc) the arestee has been charged with (not necessarily convicted)|str|

CSV files are too large to store on native github
See drive: https://drive.google.com/drive/folders/1tC1GmXV51mEeywB6ZN0hkrYtJ38owuLB?usp=drive_link
