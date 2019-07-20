# Project Overview
This is the NYC General Assembly Software Engineerning Immersive, Panda Cohort's "Project 3," created by Francine Altman, Alex Curtin, Erinn Nelson and Ana Silvia.

## Project Description

The purpose of this app is to allow users to ask and answer questions related to coding. Users may post questions and responses by topic once they have created an account. Additionally, questions can be marked as 'solved' by the original poster to help guide other users.

### Set Up
* Fork and clone this repo
* cd into the app directory
* run `npm i`
* run `npm start` to start up the backend server
* `cd client`
* run `npm start` and allow the client server to run on an available port

_Site link not yet available_

Created with [React](https://reactjs.org/), [Express](https://expressjs.com/), and [PostgreSQL](https://www.postgresql.org/)

## Wireframes

**Desktop**

<img src="wireframes/wf_dt1.png" alt="wireframe" width="606"/>
<img src="wireframes/wf_dt2.png" alt="mobile wireframe" width="606"/>

**Mobile**

<img src="wireframes/wf_mb1.png" alt="wireframe" width="200"/> <img src="wireframes/wf_mb2.png" alt="mobile wireframe" width="200"/> <img src="wireframes/wf_mb3.png" alt="mobile wireframe" width="200"/>

### MVP/PostMVP

**MVP**
* Users can browse questions by topic
* Users can register an account and log in
* Registered users can post questions
* Registered users can post responses to questions

**PostMVP**
* Users may mark questions they have posted as 'solved'
* Users may search for questions using title or body keywords

## React Component Hierarchy

* **\<App />**
    * \<header>
      * \<nav>
        * \<RouterLink to='/'>
        * **\<SearchBar />**
        * \<HashLink to='/topic-selectors>
        * \<modal name='Login-Register'>
          * **\<UserAccounts />**
            * **\<UserLogin />** _- conditionally render_
              * \<input type='text' name='username'/>
              * \<input type='text' name='password'/>
              * \<button onClick='login user'>
              * \<button onClick='show UserRegister'>
            * **\<UserRegister />** _- conditionally render_
              * \<input type='text' name='name'/>
              * \<input type='text' name='username'/>
              * \<input type='text' name='email'/>
              * \<input type='text' name='password'/>
              * \<button onClick='register user'>
              * \<button onClick='show UserLogin'>
    * \<main>
      * **\<Hero Page />** _- conditionally render_
        * \<img name='hero-image'>
        * **\<SearchBar />**
        * **\<TopicSelector />** _- multiple listed_
          * 'title'
          * \<RouterLink to='TopicPage'>
        * \<button onClick='create new question'>
      * **\<TopicOrSearchPage />** _- conditionally render_
        * 'topic/search-query'
        * \<button onClick='create new question'>
        * **\<PostNewQuestion />** _- conditionally render_
          * \<input type='select' name='topic'>
          * **\<PostEditForm />**
            * \<input type='text' name='title'>
            * \<input type='text' name='new-answer'>
        * **\<QuestionsList />**
          * \<button onClick='shows unsolved only'>
          * \<button onClick='shows solved only'>
          * **\<QuestionSelector />** _- multiple listed_
            * 'question title'
            * 'poster username, time posted'
            * 'topic'
            * \<RouterLink to='QuestionPage'>
      * **\<QuestionPage />** _- conditionally render_
        * **\<Question />**
          * **\<UserPost />** _- conditionally render_
            * 'poster username, time posted'
            * 'Answer text and code'
            * \<button onClick='edit'> _- Available to post creator_
            * \<button onClick='delete'> _- Available to post creator_
          * **\<PostEditForm />** _- conditionally render_
            * \<input type='text' name='title'>
            * \<input type='text' name='new-answer'>
            * \<input type='code' name='code'>
        * \<button onClick='create new answer'>
        * **\<PostNewAnswer />** _- conditionally render_
          * **\<PostEditForm />**
            * \<input type='text' name='title'>
            * \<input type='text' name='new-answer'>
            * \<button onClick='submit'>
        * **\<Answer />** - multiple listed
          * **\<UserPost />** _- conditionally render_
            * 'poster username, time posted'
            * 'Answer text and code'
            * \<button onClick='edit'> _- Available to post creator_
            * \<button onClick='delete'> _- Available to post creator_
          * **\<PostEditForm />** _- conditionally render_
            * \<input type='text' name='title'>
            * \<input type='text' name='new-answer'>
          * \<button onClick='marks AnswerPost as correct'> _- Available to QuestionPost creator_
    * \<footer>
      * 'year'
      * \<a href='github'>

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
