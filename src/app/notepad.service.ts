import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {

  private baseUrl = 'http://localhost:9090/springboot-crud-rest/api/v1/notepads';

  constructor(private http: HttpClient) { }

  getNotepad(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createNotepad(notepad: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, notepad);
  }

  updateNotepad(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteNotepad(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getNotepadsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
