# CSV files for AirTable Coding

Each file has the following columns:

$$ i \in \set{\mathbb{N} | 1 \leq i \leq 10} $$ 

$$ j \in \set{\mathbb{N} | 1 \leq j \leq 5} $$
  
| Column | Description |
| --- | --- |
| $\text{mutual}$ | The twitter handle of the mutual network member|
| $\text{tweet}_i$ | The $i^{th}$ tweet from  $\text{mutual}$ |
| $\text{type}_i$ | The type of $\text{tweet}_i$ $\in \set{\text{tweet}, \text{retweet}, \text{reply}, \text{quote}}$ |
| $\text{rated}$ | The number of times this user has been rated $\in \set{0, 1, 2, 3, 4, 5}$
| $\text{p}_j$ | The unique id of the $i^{th}$ participant to rate the user|
| $\text{c}_j$ | The rating that participant $\text{p}_j$ made $\in \set{\text{Democrat}, \text{Repubican}, \text{Moderate}, \text{Other}, \text{Ambiguous}}$|

The folllowing files are in the directory:

| File | Description |
| ---  | ---         |
|$\text{rating.csv}$ | All ratings |
|$\text{sample}_k\text{.csv}$ | The rows from $\text{rating.csv}$ in $[(k - 1)\cdot100, 100\cdot k]$
