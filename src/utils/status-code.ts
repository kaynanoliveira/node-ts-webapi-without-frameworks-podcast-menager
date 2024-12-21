export enum StatusCode {
        // Respostas Informativas
        Continue = 100,
        SwitchingProtocols = 101,
        Processing = 102,
    
        // Respostas de Sucesso
        OK = 200,
        Created = 201,
        Accepted = 202,
        NoContent = 204,
    
        // Mensagens de Redirecionamento
        MovedPermanently = 301,
        Found = 302,
        NotModified = 304,
    
        // Respostas de Erro no Cliente
        BadRequest = 400,
        Unauthorized = 401,
        Forbidden = 403,
        NotFound = 404,
        MethodNotAllowed = 405,
        Conflict = 409,
    
        // Respostas de Erro no Servidor
        InternalServerError = 500,
        NotImplemented = 501,
        BadGateway = 502,
        ServiceUnavailable = 503,
        GatewayTimeout = 504
}