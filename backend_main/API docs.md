## users_service 

| Method | URL                | Description     |
| ------ | ------------------ | --------------- |
| GET    | `/api/users/`      | List all users  |
| POST   | `/api/users/`      | Create a user   |
| GET    | `/api/users/<id>/` | Retrieve a user |
| PUT    | `/api/users/<id>/` | Update a user   |
| DELETE | `/api/users/<id>/` | Delete a user   |


## course_service
| Endpoint             | Method | Description                           | Request Body                             | Response Body                                                   | Permissions         |
| -------------------- | ------ | ------------------------------------- | ---------------------------------------- | --------------------------------------------------------------- | ------------------- |
| `/api/courses/`      | GET    | List all courses                      | –                                        | `[{ "id":1, "title":"...", "description":"...", "teacher":5 }]` | Authenticated users |
| `/api/courses/`      | POST   | Create a new course                   | `{ "title":"...", "description":"...", "teacher":"...", "linktoplaylist":"..." }` | `{ "id":2, "title":"...", "description":"...", "teacher":5 }`   | Teachers only       |
| `/api/courses/{pk}/` | GET    | Retrieve one course by its ID         | –                                        | `{ "id":1, "title":"...", "description":"...", "teacher":5 }`   | Authenticated users |
| `/api/courses/{pk}/` | PUT    | Replace an existing course            | `{ "title":"...", "description":"..." }` | `{ "id":1, "title":"...", "description":"...", "teacher":5 }`   | Teachers only       |
| `/api/courses/{pk}/` | PATCH  | Update one or more fields of a course | e.g. `{ "description":"..." }`           | `{ "id":1, "title":"...", "description":"...", "teacher":5 }`   | Teachers only       |
| `/api/courses/{pk}/` | DELETE | Delete a course                       | –                                        | HTTP 204 No Content                                             | Teachers only       |
