### A SIMPLE CRUD TODO APP WITH A NON-PERSISTENT DATABASE

source("app/db.R")


library(jug)
library(jsonlite)

jug() %>%
  # READ MW - FULL LIST
  get("/items", function(req, res, err){
    
    res$json(db_list())
    
  }) %>%
  # READ MW - SPECIFIC items
  get("/items/(?<description>.*)", function(req, res, err){
    
    res$json(db_get(req$params$description))
    
  }) %>%
  # CREATE/UPDATE MW
  post("/items/(?<description>.*)", function(req, res, err){
    
    db_save(req$params$description, req$params$checked)
    return(TRUE)
    
  }) %>%
  # DELETE MW
  delete("/items", function(req, res, err){
    
    db_delete(req$params$description)
    return(TRUE)
    
  }) %>%
  serve_static_files(root_path="public/") %>%
  simple_error_handler() %>%
  serve_it(verbose=TRUE)
  
  