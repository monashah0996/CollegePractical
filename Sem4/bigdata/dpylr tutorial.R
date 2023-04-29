#Week 3 
#Using DPLYR functions
mydata = read.csv("C:\\Users\\Mona Shah\\Documents\\Mona2\\bigdata\\sampledata.csv")
#Example 1 : Selecting Random N Rows
#The sample_n function selects random rows from a data frame (or table). The second parameter of the function tells R the number of rows to select.
sample_n(mydata,3)

#Example 2 : Selecting Random Fraction of Rows

#The sample_frac function returns randomly N% of rows. In the example below, it returns randomly 10% of rows.
sample_frac(mydata,0.1)

#Example 3 : Remove Duplicate Rows based on all the variables (Complete Row)

#The distinct function is used to eliminate duplicates.
x1 = distinct(mydata)
x1
#Example 4 : Remove Duplicate Rows based on a variable

#The .keep_all function is used to retain all other variables in the output data frame.
x2 = distinct(mydata, Index, .keep_all= TRUE)
x2
#Example 5 : Remove Duplicates Rows based on multiple variables

#In the example below, we are using two variables - Index, Y2010 to determine uniqueness.
x2 = distinct(mydata, Index, Y2010, .keep_all= TRUE)
x2
#The Select Command

#Example 6 : Selecting Variables (or Columns)

#Suppose you are asked to select only a few variables. The code below selects variables "Index", columns from "State" to "Y2008".
mydata2 = select(mydata, Index, State:Y2008)
mydata2
#Helpers	Description
#starts_with()	Starts with a prefix
#ends_with()	Ends with a prefix
#contains()	Contains a literal string
#matches()	Matches a regular expression
#num_range()	Numerical range like x01, x02, x03.
#one_of()	Variables in character vector.
#everything()	All variables.


#Example 7 : Dropping Variables

#The minus sign before a variable tells R to drop the variable.
mydataminus = select(mydata, -Index, -State)
mydataminus
#The above code can also be written like :
mydatao = select(mydata, -c(Index,State))
mydatao
#Example 8 : Selecting or Dropping Variables starts with 'Y'

#The starts_with() function is used to select variables starts with an alphabet.
mydata3 = select(mydata, starts_with("I"))
mydata3
# Adding a negative sign before starts_with() implies dropping the variables starts with 'Y'
mydata33 = select(mydata, -starts_with("Y"))
mydata33
#example 9 : Selecting Variables contain 'I' in their names
mydata4 = select(mydata, contains("I"))
mydata4
#Example 10 : Reorder Variables

#The code below keeps variable 'State' in the front and the remaining variables follow that.
mydata5 = select(mydata, State, everything())
mydata5


mydata5
#Example 11 : Rename Variables

#The rename function can be used to rename variables.

#In the following code, we are renaming 'Index' variable to 'Index1'.
mydata6 = rename(mydata, Index1=Index)
mydata6

#The filter function
mydata7 = filter(mydata, Index == "A")
mydata7
#Example 13 : Multiple Selection Criteria

#The %in% operator can be used to select multiple items. In the following program, we are telling R to select rows against 'A' and 'C' in column 'Index'.
mydata7 = filter(mydata, Index %in% c("A", "C"))
mydata7
#Example 14 : 'AND' Condition in Selection Criteria

#Suppose you need to apply 'AND' condition. In this case, we are picking data for 'A' and 'C' in the column 'Index' and income greater than 1.3 million in Year 2002.
mydata8 = filter(mydata, Index %in% c("A", "C") & Y2002 >= 1300000 )
#Example 15 : 'OR' Condition in Selection Criteria
mydata8
#The 'I' denotes OR in the logical condition. It means any of the two conditions.
mydata9 = filter(mydata, Index %in% c("A", "C") | Y2002 >= 1300000)
#Example 16 : NOT Condition

#The "!" sign is used to reverse the logical condition.
mydata10 = filter(mydata, !Index %in% c("A", "C"))
mydata10
#Example 17 : CONTAINS Condition

#The grepl function is used to search for pattern matching. In the following code, we are looking for records wherein column state contains 'Ar' in their name.
mydata10 = filter(mydata, grepl("Ar", State))
mydata10
#Summarize Function


summarise(mydata, Y2015_mean = mean(Y2015), Y2015_med=median(Y2015))
#Example 19 : Summarize Multiple Variables

#In the following example, we are calculating number of records, mean and median for variables Y2005 and Y2006.
#The summarise_at function allows us to select multiple variables by their names.
summarise_at(mydata, vars(Y2005, Y2006), funs(n(), mean, median))

#Example 21 : Summarize all Numeric Variables

#The summarise_if function allows you to summarise conditionally.
summarise_if(mydata, is.numeric, funs(n(),mean,median))
#Alternative Method :

#First, store data for all the numeric variables
numdata = mydata[sapply(mydata,is.numeric)]
numdata
#Second, the summarise_all function calculates summary statistics for all the columns in a data frame
summarise_all(numdata, funs(n(),mean,median))

#The Arrange Function 
#Example 23 : Sort Data by Multiple Variables

#The default sorting order of arrange() function is ascending. In this example, we are sorting data by multiple variables.
arrange(mydata, Index, Y2011)
#Suppose you need to sort one variable by descending order and other variable by ascending oder.
arrange(mydata, desc(Index), Y2011)
#Pipe Operator %>%
  
  #It is important to understand the pipe (%>%) operator before knowing the other functions of dplyr package. dplyr utilizes pipe operator from another package (magrittr).
  #It allows you to write sub-queries like we do it in sql.
  #Note : All the functions in dplyr package can be used without the pipe operator. The question arises "Why to use pipe operator %>%". The answer is it lets to wrap multiple functions together with the use of  %>%.
dt = mydata %>% select(Index, State) %>% sample_n(10)
dt

#Group_by Function

group_by(mydata,Index)
ungroup(mydata)

#Do Function 
#Filter Data within a Categorical Variable

#Suppose you need to pull top 2 rows from 'A', 'C' and 'I' categories of variable Index. 
t = mydata %>% filter(Index %in% c("A", "C","I")) %>% group_by(Index) %>%
  do(head(. , 2))
t
#sort  descending andget 
t = mydata %>% select(Index, Y2015) %>%
  filter(Index %in% c("A", "C","I")) %>%
  group_by(Index) %>%
  do(arrange(.,desc(Y2015))) %>%  slice(3)

#Windows Function min_rank
t = mydata %>% select(Index, Y2015) %>%
  filter(Index %in% c("A", "C","I")) %>%
  group_by(Index) %>%
  filter(min_rank(desc(Y2015)) == 3)


#Mutate Function

mydata1 = mutate(mydata, change=Y2015/Y2014)
#it creates new variables and name them with suffix "_new".
mydata11 = mutate_all(numdata, funs("new" = .* 1000))
mydata11
#Calculate Rank for Variables

#Suppose you need to calculate rank for variables Y2008 to Y2010.
mydata12 = mutate_at(mydata, vars(Y2008:Y2010), funs(Rank=min_rank(.)))
mydata12
#Reverse Rank  by highest number 
mydata13 = mutate_at(mydata, vars(Y2008:Y2010), funs(Rank=min_rank(desc(.))))
mydata13

