
#uncomment for installing
#install(dplyr)
#install(ggplot2)
#install(ggthemes)
#install(scales)
#install(stringr)
#install(sm)
#install(ploty)

#Loading necessary libraries
library(dplyr)
library(ggplot2)
library(ggthemes)
library(scales)
library(stringr)
library(sm)
library(plotly)


# reading a CSV file into a data frame
visa_df<- read.csv("~/Library/Mobile Documents/com~apple~CloudDocs/SEM4/big data2/h1b_data.csv", header = TRUE, na.strings = c("","NA"))
visa_df

# State information is the last word (after a comma) in the Worksite string
visa_df$state <- trimws(gsub("^.*,", "", visa_df$WORKSITE))

visa_df$rlat = round(visa_df$lat,1)
visa_df$rlon = round(visa_df$lon,1)


#analysis 1:all cases for all year, grouped by CASE_STATUS
visa_df %>% filter(!is.na(CASE_STATUS)) %>% group_by(CASE_STATUS) %>% 
  summarise(nr = length(EMPLOYER_NAME)) %>% ungroup() -> dc

ggplot(data = dc, aes(x = reorder(CASE_STATUS,nr), y = nr/1000)) +  
  geom_bar(stat="identity", fill="blue", colour="black") +
  coord_flip() + theme_bw(base_size = 10)  +
  labs(title="Total Applications per Case-Status", x ="Case status", y = "Number of applications (thousands)")

#analysis 2:the yearly distribution of these applications statuses
visa_df %>% filter(!is.na(CASE_STATUS)) %>%  filter(!is.na(YEAR)) %>%
  group_by(CASE_STATUS,YEAR) %>% summarise(nr = length(CASE_STATUS)) %>% ungroup() -> dcy

ggplot(data = dcy, aes(x = YEAR, y = nr/1000, colour = CASE_STATUS)) +  
  geom_line() + geom_point() + theme_bw() + theme(legend.position="right") +
  labs(x="Year", y="Applications (thousands)", colour="Case status", 
       title="Case status (per year)")

#analysis 3:What are the top 10 occupations America needs the most during 2011-2016?
visa <- mutate_each(visa_df, funs(toupper))
visa$PREVAILING_WAGE <- as.numeric(visa$PREVAILING_WAGE)
visa$YEAR <- as.numeric(visa$YEAR)
visa$lon <- as.numeric(visa$lon)
visa$lat <- as.numeric(visa$lat)
occu_group <- group_by(visa, SOC_NAME)
visa_by_occu <- summarize(occu_group, 
                                 count = n(),
                                 mean = mean(PREVAILING_WAGE))
visa_by_occu <- visa_by_occu[with(visa_by_occu, order(-count)), ]
visa_by_occu <- visa_by_occu[1:20, ]
visa_by_occu$count[2] <- 114102
visa_by_occu= visa_by_occu[-6,]

ggplot(aes(x = reorder(SOC_NAME, count), y=count/1000), data = visa_by_occu) +
  geom_bar(stat = 'identity', fill='skyblue') + coord_flip() +theme_bw()+
  labs(x ="Occupations", y = "Number of Applications")

  theme(axis.text = element_text(size = 8), 
        plot.title = element_text(size = 12)) +
  ggtitle('Top H-1B Visa Occupations 2016')
  
  
#analysis 4:Who are the top employers that submit the most applications?

plot_ly(visa_by_employer, labels = ~EMPLOYER_NAME, values = ~count, type = "pie", 
         rotation = 90, sort = TRUE,
        textinfo = "label+percent", 
        hovertemplate = "<b>%{label}</b><br>%{value} (%{percent})<extra></extra>") %>%
  add_trace(
    labels = ~EMPLOYER_NAME, 
    values = ~count, 
    type = "pie", 
    rotation = 90, 
    sort = FALSE,
    textinfo = "none", 
    hoverinfo = "none", 
    marker = list(colors = "darkblue", line = list(color = "white", width = 0.5)))






#analysis 5:What occupations make the most Money?
#Minimum wage is 0 and maximum wage is 329100000
summary(visa$PREVAILING_WAGE)
visa[which.max(visa$PREVAILING_WAGE),]

ggplot(aes(x = PREVAILING_WAGE), data = na.omit(visa)) + 
  scale_x_continuous(limits = c(40000, 250000)) +
  geom_histogram(aes(y = ..density..), bins=50) + 
  geom_density(color='blue') +
  xlab('Prevailing Wage(USD)') +
  ggtitle('Prevailing Wage Distribution 2016') +
  scale_y_continuous(labels = function(x) format(x, scientific = FALSE, big.mark = ",", trim = TRUE))

ggplot(aes(x = reorder(SOC_NAME, mean), y=mean), data = na.omit(visa_by_occu)) +
  geom_bar(stat = 'identity',fill='brown') + coord_flip() +
  xlab('Occupantions') + theme_bw() + 
  ylab('Average Prevailing Wage(USD)') +
  theme(axis.text = element_text(size = 8), 
        plot.title = element_text(size = 10)) +
  ggtitle('Top Wage H-1B Visa Occupations 2016')+
scale_y_continuous(labels = function(x) format(x, scientific = FALSE, big.mark = ",", trim = TRUE),limits = c(0, 300000))


#analysis 6:Which states and cities apply the most H-1B visas?

visa$CITY <- str_replace(visa$WORKSITE, '(.+),.+', '\\1')
visa$STATE <- str_replace(visa$WORKSITE, '.+,(.+)', '\\1')
state_group <- group_by(visa, STATE)
visa_by_state <- summarize(state_group, 
                                  count = n(),
                                  mean = mean(PREVAILING_WAGE))
visa_by_state <- visa_by_state[with(visa_by_state, order(-count)), ]
visa_by_state <- visa_by_state[1:20, ]
ggplot(aes(x = reorder(STATE, count), y = count), data = visa_by_state) +
  geom_bar(stat = 'identity',fill='orange') + coord_flip() +theme_bw()+
  xlab('State') +
  ylab('Number of Applications') +
  ggtitle('Top States Apply the Most H-1B Visas')+
scale_y_continuous(labels = function(x) format(x, scientific = FALSE, big.mark = ",", trim = TRUE))


#analysis 7:Density plot by years
#density plot of prevailing wages by years for SENIOR SOFTWARE DEVELOPER.


visa_df %>% filter(!is.na(PREVAILING_WAGE)) %>% filter(PREVAILING_WAGE>0) %>% 
  filter(!is.na(JOB_TITLE)) %>% filter(!is.na(YEAR)) %>% filter(CASE_STATUS == "CERTIFIED") %>%
  filter(JOB_TITLE %in% c("SENIOR SOFTWARE ENGINEER")) %>% ungroup() -> dws
x = dws$PREVAILING_WAGE
y = dws$YEAR
y.f <- factor(y, levels= c(2011, 2012,2013, 2014, 2015, 2016),
              labels = c("2011", "2012", "2013", "2014", "2015", "2016")) 
sm.density.compare(x,y.f, xlab="Prevailing wage", ylab="Density")
title(main="Density plot for SENIOR SOFTWARE ENGINEER by years")
grid()
colfill<-c(2:(2+length(levels(y.f)))) 
legend(x = "topright", levels(y.f), fill=colfill)


#the corresponding density plot for DATA SCIENTIST.
visa_df %>% filter(!is.na(PREVAILING_WAGE)) %>% filter(PREVAILING_WAGE>0) %>% 
  filter(!is.na(JOB_TITLE)) %>% filter(!is.na(YEAR)) %>% filter(CASE_STATUS == "CERTIFIED") %>%
  filter(JOB_TITLE %in% c("DATA SCIENTIST")) %>% ungroup() -> dws

x = dws$PREVAILING_WAGE
y = dws$YEAR
y.f <- factor(y, levels= c(2011, 2012,2013, 2014, 2015, 2016),
              labels = c("2011", "2012", "2013", "2014", "2015", "2016")) 
sm.density.compare(x,y.f, xlab="Prevailing wage", ylab="Density")
title(main="Density plot for DATA SCIENTIST by years")
grid()
colfill<-c(2:(2+length(levels(y.f)))) 
legend(x = "topright", levels(y.f), fill=colfill)


#analysis 8:Density plot by position
#the density plot of prevailing wages by type of position (Full-time or Part-time) for SENIOR SOFTWARE ENGINEER.

visa_df %>% filter(!is.na(PREVAILING_WAGE)) %>% filter(PREVAILING_WAGE>0) %>% 
  filter(!is.na(JOB_TITLE)) %>% filter(!is.na(YEAR)) %>% filter(CASE_STATUS == "CERTIFIED") %>%
  filter(JOB_TITLE %in% c("SENIOR SOFTWARE ENGINEER")) %>% ungroup() -> dws

x = dws$PREVAILING_WAGE
y=dws$FULL_TIME_POSITION
y.f <- factor(y, levels = c("Y", "N"), labels = c("Full time", "Part time"))
sm.density.compare(x,y.f, xlab="Prevailing wage", ylab="Density")
title(main="Density plot for SENIOR SOFTWARE ENGINEER by type of position")
grid()
colfill<-c(2:(2+length(levels(y.f)))) 
legend(x = "topright", levels(y.f), fill=colfill)


#the smaller amount and variation of the prevailing wage for SENIOR SOFTWARE ENGINEER

visa_df %>% filter(!is.na(PREVAILING_WAGE)) %>% filter(PREVAILING_WAGE>0) %>% 
  filter(!is.na(JOB_TITLE)) %>% filter(!is.na(YEAR)) %>% filter(CASE_STATUS == "CERTIFIED") %>%
  filter(JOB_TITLE %in% c("DATA SCIENTIST")) %>% ungroup() -> dws
x = dws$PREVAILING_WAGE
y=dws$FULL_TIME_POSITION
y.f <- factor(y, levels = c("Y", "N"), labels = c("Full time", "Part time"))
sm.density.compare(x,y.f, xlab="Prevailing wage", ylab="Density")
title(main="Density plot for DATA SCIENTIST by type of position")
grid()
colfill<-c(2:(2+length(levels(y.f)))) 
legend(x = "topright", levels(y.f), fill=colfill)