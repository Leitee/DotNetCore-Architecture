//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

declare enum ExamTypeEnum { 
	FIRST = 1, 
	SECOND = 2, 
	THIRD = 3, 
	RETRY = 4, 
	FINAL = 5
}
declare enum RolesEnum { 
	ADMINISTRADOR = 1, 
	SUPERVISOR = 2, 
	TEACHER = 3, 
	DEBUG = -1
}
declare enum ShiftTimeEnum { 
	TOMORROW = 1, 
	AFTERNOON = 2, 
	NIGHT = 3
}
export interface Class
{
	id: number;
	name: string;
	shift: ShiftTimeEnum;
	grade: Grade;
}
export interface Exam
{
	id: number;
	examType: ExamTypeEnum;
	score: number;
	date?: any;
	obs: string;
	student: any;
	subject: any;
}
export interface Grade
{
	id: number;
	name: string;
}
export interface Login
{
	username: string;
	password: string;
	rememberMe: boolean;
}
export interface Register extends Login
{
	email: string;
	firstName: string;
	lastName: string;
	confirm: string;
}
export interface Role
{
	id: number;
	name: string;
	description: string;
}
export interface Student
{
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	fullName: string;
	class: any;
}
export interface Subject
{
	id: number;
	name: string;
	teacher: any;
}
export interface Teacher
{
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	fullName: string;
	subjects: any[];
}
export interface LoginResp
{
	token: string;
	expirationDate: number;
	hasToken: boolean;
	messageResponse: string;
}
export interface User
{
	id: number;
	userName: string;
	email: string;
	phoneNumber: string;
	firstName: string;
	lastName: string;
	fullName: string;
	joinDate: any;
	role: Role;
}
