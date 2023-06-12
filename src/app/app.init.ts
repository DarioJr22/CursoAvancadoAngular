import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export var VERSAO = 'v1.0';
export var IP_HELP = '';

export interface Config {
  IP_SERVICE: string;
  VERSAO: string;
}
