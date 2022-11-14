<p align="center">
<img width='400' alt='Té Cuento logo' src='https://user-images.githubusercontent.com/101955307/201567634-3dcd0b47-93bf-4051-aa8e-0951f170984f.png'>
</p>

# Té Cuento API

## Table of contents
* [About the Project](#about-the-project)
* [Technologies](#technologies)
* [Database Objects](#database-objects)
* [Routes](#routes)

### About the Project
Té Cuento API is a REST API created to support the front-end Té Cuento project and to enhance my understanding of backend technologies<br>
<br>
[Front-End Repository](https://github.com/stephanieguzm/te-cuento-ui)<br>
[Deployed Project](te-cuento-ui.vercel.app) - Please be patient while the page fetches data from the API

	
### Technologies Used
Project is created with:
<p>

<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white">

### Database Objects
#### The TEA Object 🍵
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|id| tea id | integer| 
|type| tea type | text |
|name| tea name | text | 
|img| image url  |text | 
|origin| cultivation location | text| 
|description| tea description | text | 
|brew_time| range of minutes to steep | text | 
|temperature| brewing water temperature in farenheit | integer | 
|infusions| number of tea steepings per serving | integer | 
|caffeine_level| tea caffeine level | text | 
|farmer| farmer name | text | 
|farmer_img| image url | text | 

#### The COMMENTS Object
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|id| comment id | integer| 
|tea_id| parent tea id | integer |
|user_name| commentor's name| text | 
|user_message| commentor's message |text | 

### Routes 
primary route: https://te-cuento.herokuapp.com/api/v1

| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /teas| GET | Displays all teas
|/teas/:id| GET| Displays a specific tea, given its id
|/comments| POST|Adds a comment to the object


### Next Steps
- [ ] Populate database with new comments
