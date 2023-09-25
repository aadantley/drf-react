# Django Rest Framework Series

This is an application built from the tutorial from Very Academy for a django DRF application feeding a react front-end.

Course is slowly being released on YouTube, and has not gone further than the project setup.

playlist link: <https://www.youtube.com/playlist?list=PLOLrQ9Pn6cawHF2lVl9goEm9Ta3rlutPD>.

## Take Aways

- configuring environment variables to separate secrets from our code base. The variables are stored on the Operating System, and so are just referenced, but not presented in plaintext. We use the `dotenv` package for this. The values he made secret are:
  - database information (once known)
  - secret key
  - Debug value, should be turned off in production
