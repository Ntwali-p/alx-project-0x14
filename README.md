# alx-project-0x14

MoviesDatabase API – Documentation Summary
API Overview

The MoviesDatabase API provides a large collection of movie and TV show data including titles, images, release years, genres, ratings, plots, cast information, and more.
The API allows developers to:

Fetch lists of movies using filters such as year, genre, or title type

Search movies by keyword

Retrieve detailed information for a specific movie or TV show

Access supporting assets like posters and trailers

Use pagination to navigate large results

It is a modern REST-based API designed for fast responses and structured JSON output.

Version

According to the official MoviesDatabase API documentation, the current version is:

v1

Available Endpoints
1. /titles

Fetches a list of available movies and TV titles.
Supports filters such as:

year

genre

title type

page and limit

2. /titles/{id}

Fetches complete details for a specific movie or show using its unique ID.

3. /titles/search/title

Searches for movies or shows based on text input or keywords.

4. /titles/{id}/images

Returns image assets for the given movie or show, including posters and stills.

5. /titles/{id}/crew

Provides information about cast and crew members.

6. /titles/x/upcoming

Returns a list of upcoming movie releases.

7. /titles/x/popular

Fetches currently popular or trending movies.