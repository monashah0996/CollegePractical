# reading a CSV file into a data frame
startup_data<- read.csv("~/Library/Mobile Documents/com~apple~CloudDocs/SEM4/big data2/big_startup_secsees_dataset.csv", header = TRUE)
startup_data
library(dplyr)
#library(ggplot2)
my_df<-data.frame(startup_data)
my_df
 
# reading a CSV file into a matrix
my_matrix <- as.matrix(startup_data)

# printing the matrix
my_matrix



#success-failure-ipo-acquired of startups according our data 
num_operating=nrow(startup_data %>% filter(grepl('operating', status)))
num_ipo=nrow(startup_data %>% filter(grepl('ipo', status)))
num_closed =nrow(startup_data %>% filter(grepl('closed', status)))
num_acquired =nrow(startup_data %>% filter(grepl('acquired', status)))
success_ratio <- c(num_operating, num_closed,num_ipo,num_acquired)
barplot(success_ratio, names.arg = c("Operating", "Closed","IPO","Acquired"), xlab = "Company Status", ylab = "Number of Companies", main = "Status of Startups")

#success-failure of startups according our data
# Filter the data to include only companies with a status of "success"
num_successful=nrow(startup_data %>% filter(grepl('operating|ipo', status)))
num_successful
num_failed =nrow(startup_data %>% filter(grepl('closed|acquired', status)))
num_failed
success_ratio <- c(num_successful, num_failed)
barplot(success_ratio, names.arg = c("Successful", "Failed"), xlab = "Company Status", ylab = "Number of Companies", main = "Success-Failure Ratio")


#initiation rate category wise **
by_category <- aggregate(status ~ category_list, data = startup_data, function(x) c(num_successful = sum(x == "success"), num_failed = sum(x == "failed")))
by_category$success_ratio <- by_category$status$num_successful / by_category$status$num_failed
barplot(by_category$success_ratio, names.arg = by_category$category_list, xlab = "Category", ylab = "Success-Failure Ratio", main = "Success-Failure Ratio by Category")

#success rate of all cities of most initiated startup country
#category wise total funding-top funding category
#category wise total funding rounds/total funding 
#fund rounds between first fund date and last fund date category wise


#analysis1
#analysis2
#analysis3
#analysis4
#analysis5