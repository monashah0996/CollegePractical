#Question 1

val <- c(mtcars)

car_mpg <- c(val$mpg)
car_cyl <- c(val$cyl)

 
carscarNames <- c(rownames(mtcars))


plot(car_mpg, type="o", col="blue",ylim =c(1,50))

lines(car_cyl, type="o", pch=22,col="red")

axis(1, at=1:32, las=1, lab=c(rownames(mtcars)))

title(main="Week 4:Lab 1: Mona Shah ", col.main="red", font.main=4)

legend(1,50, c("mpg","cyl"), cex=0.8,
  col=c("blue","red"), pch=21:22, lty=1:2)


#Question 2
USArrests

## Selecting 10 rows 
valuesTen<- head(USArrests,10)

## Fetching Names for Labels 
usNames <- c(rownames(valuesTen))

## Getting all the values of murder col 
murderRange <- c(valuesTen[,1])

## Concatenation the values 
v<-paste(usNames,"|",murderRange,"%" )

## Using Murder as variable
pie(valuesTen$Murder, main="Week 4 : Lab 1 : Question 2",
    col=rainbow(length(valuesTen)),labels=c(v), cex=0.8)
legend(-2.8, 1.0, c(usNames), cex=0.6, fill=rainbow(length(valuesTen)))
