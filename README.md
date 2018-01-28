# Documentation

## Setup

- You can download the project from: https://github.com/CodeChrysalisCohort3/alpenfritzAPI.git
- Run `yarn install` to install node packages for the project
- Create a database in postgresql by running `createdb alpenfritzAPI` in the terminal
- Run `knex migrate:latest` in the terminal to create the table 'tvshow'
- Run `knex seed:run` to populate the table with some data
- You can use [Postman](https://www.getpostman.com/) to carry out your Http requests
- Project requirements can found [here](./PROJECT.md)

## Server

- Run `yarn start` to start a local server
- Run `yarn nodemon` to start nodemon
- Run `yarn test` to perform tests using mocha, chai, and supertest

## GET api/v1/tvshows

Get all records

```js
[
    {
        "id": 1,
        "title": "Band of Brothers",
        "description": "Action, Drama, History",
        "rating": 9.5,
        "url": "http://www.imdb.com/title/tt0185906/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3499204302&pf_rd_r=1D85Y5C0AWD7AFSNGQCM&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_2"
    },
    {
        "id": 2,
        "title": "Game of Thrones",
        "description": "Action, Adventure, Drama",
        "rating": 9.4,
        "url": "http://www.imdb.com/title/tt0944947/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3499204302&pf_rd_r=1D85Y5C0AWD7AFSNGQCM&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_4"
    },
    ...
]
```

## GET api/v1/tvshows/:id

Get one record using the id

```js
{
    "id": 3,
    "title": "Breaking Bad",
    "description": "Crime, Drama, Thriller",
    "rating": 9.5,
    "url": "http://www.imdb.com/title/tt0903747/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3499204302&pf_rd_r=1D85Y5C0AWD7AFSNGQCM&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_5"
}
```

## POST api/v1/tvshows

Add a record. It should be in JSON format:

```js
{
	"title": "House of Cards",
	"description": "Drama",
	"rating": 8.9,
	"url": "http://www.imdb.com/title/tt1856010/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3499204302&pf_rd_r=1D85Y5C0AWD7AFSNGQCM&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_38"
}
```

## PUT api/v1/tvshows/:id

Update a record using an id. It should be in JSON format:

```js
{
	"title": "House of Cards",
	"description": "Drama, <CHANGE>",
	"rating": 5,
	"url": "http://www.imdb.com/title/tt1856010/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3499204302&pf_rd_r=1D85Y5C0AWD7AFSNGQCM&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_tt_38"
}
```

## DELETE api/v1/tvshows/:id

Delete a record using an id. If successful, it should output:

```js
{
    "deleted": true
}
```