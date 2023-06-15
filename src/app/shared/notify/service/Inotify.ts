export interface Notificacao {
  id?:number;
  mensagem: string;
  tipo: NotificacaoType;
  ttl?: number;
}

export enum NotificacaoType {
  SUCESSO = 'sucesso',
  ERRO = 'erro',
  WARN = 'warn'
}
