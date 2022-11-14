# MyMovieWishlist

Simple API to help you keep track of the movies you want to watch and where to watch them.

# About

With this API you can manage your movie wishlist, adding the movies and the platforms where they're availiable.
Implemented features:
- View your complete movie wishlist with platform and genre
- Add movie to wishlist
- Delete Movie from wishlist
- Change movie status (unwatched/watched)
- Search a movie by desired platform

# Simple documentation

```bash
GET: /movies

PUT: /movies
Body: { "id": 1, "status": "watched" }

POST: /movies
Body: { "name": "The Batman", "platform": "HBO Max", "genre": "Ação"}

DELETE: /movies/:id

GET: /platform
Query parameter: platform

```
