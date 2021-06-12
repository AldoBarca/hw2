

CREATE TABLE users (
user_id integer AUTO_INCREMENT,
nome_utente varchar(20) unique not null,
codice_fiscale varchar(20) unique not null,
password varchar(20) not null,
nome varchar(20) not null ,
cognome varchar(20) not null,
ruolo ENUM('Op','Paz'),
genere ENUM('M','F'),
terapia text,
reparto varchar(20),
UNIQUE(nome_utente,password),
primary key(user_id),
created_at timestamp NOT NULL   DEFAULT  CURRENT_TIMESTAMP,
updated_at timestamp NOT NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)engine=InnoDb;



CREATE TABLE visits(
visit_id INTEGER AUTO_INCREMENT,
nome_utente varchar(20) not null ,
visita varchar(30),
created_at timestamp NOT NULL   DEFAULT  CURRENT_TIMESTAMP,
updated_at timestamp NOT NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary key(visit_id),
UNIQUE(nome_utente,visita)
)engine=InnoDb;


CREATE TABLE user_visit(
user_id integer,
visit_id integer,
created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
primary KEY(user_id,visit_id),
FOREIGN KEY(user_id) REFERENCES users(user_id),
FOREIGN KEY(visit_id) REFERENCES visits(visit_id)
)engine=InnoDb;



    CREATE TABLE contents(
    content_id INTEGER AUTO_INCREMENT ,
    titolo varchar(40),
    descrizione text,
    immagine varchar(100),
    primary KEY(content_id)
    )engine=InnoDb;

insert into contents(titolo,immagine,descrizione) values("Esame del sangue","immagini/esamesangue.jpg","Esame generico del sangue per rilevare eventuali anomalie."),
("Elettrocardiogramma","immagini/elettro.jpg","Esame per monitorare lo status del cuore e rilevare eventuali anomalie."),
("Endoscopia","immagini/endoscopia.jpg","Esame atto per diagnosticare condizioni correlate al sistema digestivo e studiare sintomi dello stesso sistema."),
("Biopsia","immagini/biopsia.jpg","Prelievo di campioni di tessuto per esaminarli.Spesso si concentra sul reperimento di cellule anomale che possono indicare presenza di infiammazione o di malattia."),
("Cistografia","immagini/cistografia.jpg","Un esame radiologico che permette di studiare la funzionalita' di vescica e uretra e localizzarne calcoli e polipi."),
("Calcemia","immagini/calcemia.jpg","Esame per monitorare la quantita' di calcio nel sangue sia corretta."),
("Broncoscopia","immagini/broncoscopia.jpg","Indagine strumentale mirata ad esplorare visivamente bronchi e laringe per verificare che non vi siano arrossamenti o anomalie."),
("Risonanza magnetica","immagini/risonanza.jpg","Tecnica diagnostica che sfrutta i campi magnetici per creare immagini tridimensionali della anatomia interna del corpo umano."),
("Tampone","immagini/tampone.jpg","Tampone ad uso medico atto a rilevare la presenza di sars covid 19.");

insert into contents(immagine)values("immagini/reparto.jpg");
insert into contents(immagine,descrizione)VALUES
("immagini/fotoosp.jpg","Abbiamo vinto la prestigiosa Coppa Del Nonno e siamo stati confermati come migliore ospedale immaginario della Sicilia!"),
("immagini/Settore_medico.jpg","Il nostro personale e' estremamente preparato, accogliente e pronto a offrirti un servizio di prima qualita'!");

insert into contents(immagine)values("immagini/cartella.jpg");
insert into contents(immagine)values("immagini/modifica.jpg");
insert into contents(immagine)values("immagini/spunta.jpg");
insert into contents(immagine)values("immagini/unchecked.jpg");
insert into contents(immagine)values("immagini/icona-macchina.jpg");


create table posto_auto(
numero integer not null AUTO_INCREMENT,
nome_utente  varchar(20) unique,
created_at timestamp NOT NULL   DEFAULT  CURRENT_TIMESTAMP,
updated_at timestamp NOT NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (numero),
FOREIGN KEY(nome_utente)references users(nome_utente)
)engine=InnoDb;
