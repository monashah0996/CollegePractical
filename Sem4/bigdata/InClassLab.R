install.packages("hflights")
library("hflights")
library("dplyr")
flights <- hflights
filter(flights, Month==1, DayofMonth==1)


#Question 1
# filter flights dataset by uniquecarrier equal to 'AA' or flightnum equal to 460 and Arrdelay > 5
# use | for OR condition

filter(flights, UniqueCarrier == "AA" | FlightNum == 460 & ArrDelay > 5)

#Question 2
# select flights dataset the following variables year,month,dayofmonth and any other column that CONTAINS
# the 'Taxi' and 'Delay' using the contains function

select(flights, Year, Month, DayofMonth, contains("Taxi"), contains("Delay"))

#Question 3
# Using pipe method to select UniqueCarrier and DepDelay columns and then filter for delays over 60 minutes

flights %>% 
  select(UniqueCarrier, DepDelay) %>% 
  filter(DepDelay > 60)

#Question 4
#Using pipe method to select UniqueCarrier and DepDelay columns and then sort by DepDelay

flights %>% 
  select(UniqueCarrier, DepDelay) %>% 
  arrange(DepDelay)

#Question 5
# using pipe method select distance and airtime, create a new variable Speed(calculation of Distance divided by Airtime *60)
# Also filter where Airtime is Null 'NA' 

flights %>% 
  select(Distance, AirTime) %>% 
  mutate(Speed = Distance / (AirTime/60)) %>% 
  filter(!is.na(AirTime))


#Question 6
#using nesting and pipe and summarise for each carrier, calculate the percentage of flights cancelled or diverted

flights %>% 
  group_by(UniqueCarrier) %>% 
  summarise(pct_cancelled_or_diverted = sum(Cancelled + Diverted) / n())



