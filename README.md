# Specifikace:

## Téma :
udělat jednoduchou webovou aplikaci, která umožnuje jejím uživatelům komunikovat přes chatroom.
Bude možné vytvořit nebo se přihlásit do existujícího uživatele.
Tento účet umožní uživatelům spát do chatroomy

## Pracující
Pracující : Jan Laššák, Petr Valdman, Martin Lacina, Artiom Topala

## TO DO:
###   frontend
####  Vizuální
  - [ ] Login/Register stránky
  - [X] Chatroom stránka
  - [X] Home Stránka
  - [ ] User stránka
#### Funkční
  - [ ] Login
  - [ ] Register
  - [ ] Posílání Messagu
  - [ ] Přijímání Messagu
### backend
  - [X] Useři
  - [X] Ukládání Userů
  - [X] Vytváření Userů
  - [ ] Mazání Userů
  - [ ] Editace Userů
  - [ ] Posílání / Přijímání messagu
## Stages
### 1stStage
#### backend
  - [X] ukladaní useru
    - Petr a Artiom
#### frontend
  - [ ] registrace / login(vyzualni)
    - Martin
  - [X] home (vyzualni)
    - Honza
    - Existuje to ale nelíbý se mi to
    - [X] struktura
### 2nd stage
#### backend
  - [X] registrace useru
    - Petr a Artiom
  - [X] login useru 
    - Petr a Artiom
#### frontend
  - [X] funkcionalita messagu
    - Honza a Martin
### 3rd stage
#### backend
  - [X] posilani messagu (id message, author message, text message)
    - Petr a Artiom
#### frontend
  - [ ] User stránka
    - Martin
  - [X] Dodělat home stránku aby jsem s ní byl graficky spokojen
    - Honza
### 4th stage
#### backend
  - [X] Dodělat fukcionalitu API
    - [X] Problém v mazání postu/message s ID
    - [X] Dodělat update useru/message
    - Artiom
#### frontend
  - [X] Najít barevnou kombinaci která se pro stránku hodí a nebolí z ní oči
    - Honza
  - [X] Animovaný tlačítka do navbaru
    + jěště někde jinde když se najde tlačítko kterému by se to hodilo
    - Honza
### 5th stage
#### frontend
  - [X] Předělat messages do servicy + připravit implementaci api
    - Honza
  - [X] Zpravit zobrazování messagu
    - container message by se měl zarovnavat na strany podle toho kdo message poslas
    - taky by se měl velikosti prispusobovat velikosti message
    - Honza
    - [X] Opravit Git
    - petr
#### backend
  - [ ] Users static ID
    + Každý user bude mít svůj vlastní id, který se bude používat jako author při posílaní message
    - Artiom
### 6th stage
#### frontend
  - [X] Opravit bootstrap
    - technicky funguje ale né úplně
    - [ ] předělat barvy at používaj bootsrap proměné
    - jsem líný
    - Honza
#### backend
  - [ ] Users static ID
    + Každý user bude mít svůj vlastní id, který se bude používat jako author při posílaní message
    - Artiom
    + Každý user bude mít v sobě mít IDička messagu ktery poslal 
    - Petr
### 7th stage
#### frontend
  - [X] User object
    - Příprava na spojení s backendem
    - Nějak pude fakovat přihlášení
    - Do chatroomu jde psát je když je user přihlášen
    - Honza
### 8th stage
#### frontend
- [ ] Dodělat user login & register (ještě nazapojeny do backendu)
    - Honza + Martin

## Když zbyde čas:
  - [X] zpravit proměné v scsskách (Honza)
  - [ ] Zorganizovat github aby developement a main branche meli důvod existovat (Kdokoliv ale pravděpodobně Honza)
