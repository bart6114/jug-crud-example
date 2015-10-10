my_data<-
  list("macaroni"=FALSE,
       "cheese"=FALSE)

db_save<-function(description, checked) my_data[[description]]<<-checked

db_delete<-function(description) my_data[[description]]<<-NULL

db_list<-function() data.frame(description=names(my_data), 
                               checked=unlist(my_data, use.names = F))

db_get<-function(description) my_data[[description]]


