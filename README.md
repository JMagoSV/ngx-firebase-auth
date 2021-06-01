# Angular Firebase Auth

Proyecto de ejemplo para autenticar usuarios utilizando Google Firebase.


# Proyecto en Angular

 1. **Crear proyecto**: ng new ngx-firebase-auth
 2. **Agregar dependencia**: npm install firebase @angular/fire --save
 3. **Agregar config de firebase**: dentro del environment y luego llamarlo en el modulo principal
 4. **Agregar material -compatible con la versión de ngx-**: ng add @angular/material
 5. **Instalar rxjs**: npm install rxjs --save
 6. **Crear los componentes**:
	 - ng g c pages/main (Contenedor -agregar el outlet-)
	 - ng g c pages/login
	 - ng g c pages/register
	 - ng g c pages/forgot-password
	 - ng g c pages/verify-email
 7. **Agregar el ruteo**:
	 - `const routes:  Routes  = [
	  { path: '', redirectTo: 'main', pathMatch: 'full'},
	  { path:  'main', component:  MainComponent, children: [
	      { path:  'login',component:  LoginComponent},
	      { path:  'register', component:  RegisterComponent },
	      { path:  'forgot-password', component:  ForgotPasswordComponent },
	      { path:  'verify-email', component:  VerifyEmailComponent }
	    ]
	  }
	];`
	
 8. **Agregar el servicio para auth**: ng g s services/auth
 9. **Crear un modelo para el usuario**: ng generate interface models/user