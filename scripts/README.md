Here be scripts!
=========
A catalogue of all othrewise unhoused scripts used in the course of this project

Unfortunately, dataframe table styles seem to not properly display within the github preview, so the wonderful colours in these script don't display adiquitely. 
To see the file in all its glory, please open it in Jupyter Notebook (or, presumably, Google Colab)

Janitor
---
As these datasets are truely immense (2023-2025 taking up nearly 300,000 entries and the full 2011-2025 set comming in at a whopping ~1.7 *million*), exploratory data analysis & relevant figures were created using the pre-cleaned 2023-2025 arrest dataset. The file created by the cleaner script is *not* the dataset used for EDA, but it will be the file primarily used going forward.

To clean this data, first I manually removed padding rows & normalized column names, as between the raw files there were numerous different renderings of the same type of information under different header names. Once they were in a state to be more easily parsed by code, all 11 raw files were concatenated (spanning 2011-2025, with a gap in 2013/14 where there was no associated raw).
To select what columns to drop, I generally took the intersection of any columns from 2015 onward together, and saved those ones. I kept all columns from the pre-2015 data (as they already have quite limited data). I removed all columns pertaining to specific ID numbers, raw-data references, or that contained duplicate information. I removed columns pertaining to the current case status of the individual, as it did not seem referent to our current research questions.
The only columns that were included before 2023 but not after were the variables: *Ethnicity*, *Gender*, and *Worst Criminal Charge*, as these were not present in the pre-cleaned 2023-2025 dataset. One aspect of this clean data to potentially improve would be to check the raw files for 2023-onward and attempt to fill in those missing values.

<5% of the 2023-2025 data were potential duplicates, <0.5% of the agglutinated set. All ~6000 rows marked as potential duplicates were removed to make this set reflect a *minimum estimate* for all variables it concerns.

Once all relevant columns and rows had been dropped, I changed the headers to Title Case and manually adjusted the format of a few names.

The most glaring piece of this dataset requiring normalization was the "Apprehension Date Time" column, which had different formats across different years and occassionally had missing timestamps. First, I used regex to extract the year to a separate column for easy groupby functionality. Then, I used a custom function to convert all entries in "Apprehension Date Time" into python datetime objects, filling in missing timestamps with midnight.

Finally, I alphebetized the column order for ease of display!

As a complete stats table for this dataset would be fairly unhelpful (most data is stored as strings which would individually be analyzable, but a single table summarizing all would be fairly clunky and less helpful than the codebook), I have in liu provided a chart of *which variables are recorded year-to-year*, as this will inform the extent & applicability of future analyses that stretch further back.
