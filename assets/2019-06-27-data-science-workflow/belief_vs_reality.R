

library(tidyverse)
library(tidyquant)

student_expectations_tbl <- tribble(
    ~type, ~measure, ~value,
    "Belief", "Machine Learning", 1,
    "Reality", "Understanding the Business Problem", 0.20,
    "Reality", "Working with Data", 0.6,
    "Reality", "Communicating Results", 0.15,
    "Reality", "Machine Learning", 0.05
)

student_expectations_tbl %>%
    group_by(type) %>%
    summarise(total = sum(value))

student_expectations_tbl %>%
    mutate(measure = as_factor(measure) %>% fct_reorder(value, .fun = max)) %>%
    ggplot(aes(measure, value, fill = measure)) +
    geom_col() +
    facet_wrap(~ type) +
    coord_flip() +
    theme_tq() +
    scale_fill_tq() +
    geom_label(aes(label = scales::percent(value)), 
               fill = "white", hjust = "inward", color = "#2c3e50") +
    theme(legend.position = "none", 
          strip.text = element_text(margin = margin(5,5,5,5),
                                    face = "bold")) +
    scale_y_continuous(labels = scales::percent_format()) +
    labs(
        title = "Misconception on How Data Scientist's Time Is Spent",
        subtitle = "Student's Belief vs Reality",
        x = "", y = ""
    )
