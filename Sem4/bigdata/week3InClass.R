characters = read.csv("C:\\Users\\Mona Shah\\Documents\\Mona2\\bigdata\\characters.csv")

bmi_characters = characters %>% 
  mutate( bmi = as.numeric(mass) / ((height / 100)  ^ 2))
str(bmi_characters)
bmi_characters %>% group_by(species) %>%
  summarise(
    mass = mean(as.numeric(mass), bmi = mean(as.numeric(bmi)))
  )