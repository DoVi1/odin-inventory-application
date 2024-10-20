#!/usr/bin/env bash
sudo -u postgres psql postgres -f db/seed/super-user-schema.psql
