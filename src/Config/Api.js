export const LoginAPI = (cliente, login, password) => 
    `http://51.222.48.12/mezapBack/auth/index.php?cliente=${cliente}&login=${login}&password=${password}`;

export const sendToken = (idEmpresa, token, descricao) => 
    `http://51.222.48.12/mezapBack/token/createToken/index.php?idEmpresa=${idEmpresa}&token=${token}&descricao=${descricao}` 

export const consultarToken = (idEmpresa) => 
    `http://51.222.48.12/mezapBack/token/consulta/index.php?idEmpresa=${idEmpresa}`