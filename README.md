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

### MVP/PostMVP

**MVP**
* Users can browse questions by topic
* Users can register an account and log in
* Registered users can post/delete/edit questions
* Registered users can post/delete/edit responses to questions

**PostMVP**
* Users may mark questions they have posted as 'solved'
* Users may search for questions using title or body keywords
* User can visit a profile page that displays their activity on the site
* Users can login using authentication from 3rd party services like facebook

### App Features
* Users can register an account on the site
* Users and topics are stored on a backend server/database
* Seemless UI

### ERD

### API Endpoint Documentation

### Wireframes

**Desktop**

<img src="wireframes/wf_dt1.png" alt="wireframe" width="606"/>
<img src="wireframes/wf_dt2.png" alt="mobile wireframe" width="606"/>

**Mobile**

<img src="wireframes/wf_mb1.png" alt="wireframe" width="200"/> <img src="wireframes/wf_mb2.png" alt="mobile wireframe" width="200"/> <img src="wireframes/wf_mb3.png" alt="mobile wireframe" width="200"/>

### React Component Hierarchy

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

## Additional Libraries
https://www.npmjs.com/package/react-modal
https://www.npmjs.com/package/react-router-hash-link

## Code Snippet

## Issues and Resolutions
* Potential problem: Searching - using like perameters in PostGreSQL
* User forgetting password - setting a temporary token to change the password

