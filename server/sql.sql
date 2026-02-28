create table if not exists posts (
  id int primary key generated always as identity,
  title text,
  body text,
  date date,
  time time,
  tags text,
  colour smallint
  );

  insert into posts (title, body, date, time, tags, colour) values ('test title', 'test body text lolololololololol', current_date, current_time, 'tags1', 3) returning *