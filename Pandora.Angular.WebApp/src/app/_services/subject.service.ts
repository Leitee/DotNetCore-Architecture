import { Subject, Student } from "@/_models";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ApiBaseService, AppConfigService, ApiResponse } from '@/_commons';
import { map } from 'rxjs/operators';

@Injectable()
export class SubjectService extends ApiBaseService<Subject> {

    constructor(http: HttpClient) {
        super(http);
    }

    public getAllSubbjects(): Observable<Array<Subject>> {
        this.path = "subjects";
        return this.getAll();
    }

    public getSubjectsByTeacherId(teacherId: number): Observable<Subject[]> {
        this.path = "subjects/GetByTeacher";
        return this.getListById(teacherId);
    }

    public getSubjectsByCurrentStudent(userId: number): Observable<Subject[]> {
        this.path = "subjects/GetByStudent";
        return this.getListById(userId);
    }

    public saveAttendsBySubject(subjId: number, studList: Student[]): Observable<boolean> {
        this.path = "subjects/SaveAttends";
        let response = this.http.put<ApiResponse<boolean>>(this.getFullPath(subjId), studList, { headers: this.headerReq });
        return response.pipe(map(a => a.data));
    }
}