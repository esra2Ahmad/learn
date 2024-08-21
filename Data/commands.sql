-- SQLite
create table if not exists contact_form(ID_integer primary key,Name text not null,
                                            Email text not null unique, Message text not null, Created_Data text not null)
                                            SELECT * FROM sqlite_master where type="table";
                                            select * from contact_form;