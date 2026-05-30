---
title: "A Note on Migrating Immich From TrueNAS"
date: 2025-08-11
---

Over the past week I've taken on the complicated task of migrating my home server network from TrueNAS to Proxmox. I've been running Immich, a self-hostable Google Photos alternative, for about a year now, and have amassed half a terabyte of photos and videos. Not all of them were mine, so I had to be sure to do things right.

Immich doesn't officially support the TrueNAS image, and so the most guidance out there currently is [this github discussion](https://github.com/immich-app/immich/discussions/10906). Make sure to scroll down and read ericarthurc's updated guide along with the original post.

My approach looked like this:

1. get the photos off of the machine with rsync
2. back up the database with the commands detailed in the post
3. make an `immich-app` directory and download the docker-compose.yml and .env files
4. change the UPLOAD_LOCATION value to the folder with your backed up folders (the one containing upload, library, thumbs etc.)
5. change the IMMICH_VERSION value to the version of your backup, e.g. “v1.119.1”
6. change the db username and passwords to those found in the TrueNAS UI
7. in docker-compose.yml, change the postgres image to the one TrueNAS used
8. follow the rest of the instructions in the discussion

If something is not working, try changing all of the docker images to what they were in your truenas. Also, make sure to delete postgres/ each time you do a clean docker run.

Willa
