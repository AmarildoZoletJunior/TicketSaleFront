import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CepResponse } from '../Interfaces/cep-response';

@Injectable({
  providedIn: 'root'
})
export class CepService {
public BaseUrl:string = "http://viacep.com.br/ws/"
  constructor(private Http:HttpClient) { }

  public FindCep(cep:string):Observable<CepResponse>{
    return this.Http.get<CepResponse>(this.BaseUrl+cep+"/json").pipe(res => res, error => error)
  }
}
