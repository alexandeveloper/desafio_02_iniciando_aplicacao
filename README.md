# Desafio 02 - Rocketseat
# Iniciando Aplicação

* Para atualizar o projeto com os módulos do node, no console, dentro da pasta do projeto dê o comando:

yarn

* Comando para criar o banco de dados postgres necessário para o projeto: (Utilizado Docker)

docker run --name container_meetup -e POSTGRES_USER=usuario_meetup -e POSTGRES_DB=db_meetup -e POSTGRES_PASSWORD=senha_meetup -p 5433:5432 -d postgres

* A palavra secreta utilizada no MD5

Secret keyword                    
md5parameetuprocketseat

Secret MD5 
6f949b1808d3b5b0228973e20dc20dfd


**Com este desafio é possível:**

* Autenticação feita utilizando JWT.
* Validação dos dados de entrada da autenticação, cadastro e atualização de usuários;
* Criptografia da senha do usuário.
