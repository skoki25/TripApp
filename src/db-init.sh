sudo docker cp ./DB/insert.sql adonisDB:/docker-entrypoint-initdb.d/
sudo docker compose run db ls -l docker-entrypoint-initdb.d
sudo docker compose run db psql -h localhost -d database -U postgres -p 5432 -a -q -f ./docker-entrypoint-initdb.d/insert.sql
echo "╭────────────────────────────────────────────────────────────────────────╮"
echo "│                    INSERT SQL SCRIPT                                   │"
echo "│────────────────────────────────────────────────────────────────────────│"
echo "│                                                                        │"
echo "│    ❯ Done                                                              │"
echo "│                                                                        │"
echo "╰────────────────────────────────────────────────────────────────────────╯"
