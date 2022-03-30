<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm novalidation  @submit="validUserInfo">
                  <h1>Connexion</h1>
                  <p class="text-muted">Connecter-vous à votre compte</p>
                  <CInput placeholder="Username" v-model="user" :isValid="invalidUser" required >
                    <template #prepend-content
                      ><CIcon name="cil-user"
                    /></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    v-model="pass"
                    :isValid="invalidPass"
                    invalidFeedback="nom d'utilisateur ou mot de passe incorrect"
                   required
                  >
                    <template #prepend-content
                      ><CIcon name="cil-lock-locked"
                    /></template>
                  </CInput>
                  <CRow align-vertical="center" class="flex-wrap d-flex">
                    <CCol   class="text-left col-12 col-sm-6">
                      <CButton color="primary" class="px-2 w-100 d-flex justify-content-around align-items-center " type="submit" >
                        Se connecter <CSpinner size="sm" v-if="isloading" class="ml-2" color="secondary"/>
                      </CButton>
                    </CCol>
                    <CCol  class="text-right col-12 col-sm-6">
                      <CButton color="link" class="px-0">
                        Forgot password?
                      </CButton>
                      <CButton color="link" class="d-lg-none">
                        Register now!
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-lg-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Gestion des tâches</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <!-- <CButton color="light" variant="outline" size="lg">
                  Register Now!
                </CButton> -->
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
 import connect from "../../connect";
export default {
  name: "Login",
  data(){
    return {
      user: "stanee",
      pass: "azabzistany@gmail.com",
      invalidPass: null,
      invalidUser: null,
      isloading: false
    }
  },
  mounted() {
connect.checkUserLogin();
  },
  methods: {
    validUserInfo() {
      //let self = this
      event.preventDefault()
      this.isloading= true
      connect.testLogin(this.user,this.pass).then(reponse=> {
        console.log('login res', reponse)
        
        let user = {
          username: this.user,
          password: this.pass
        }
        window.localStorage.clear();
        window.localStorage.setItem('user', JSON.stringify(user))
         if(window.location.href != window.document.referrer) {
         window.location.href = window.document.referrer
        }else  {
         window.location.href = window.location.origin
        }
        this.isloading= false
      },(er)=> {
        console.log('error',er)
        this.isloading= false
        this.invalidPass= false
        
       // console.log('login error', error)
      })
      
    }
  },
};
/* 
lorsqu'un utilisateur arrive 
  on verifie s'il existe des données dans le localstorage = user
    si oui 
      rien ne se passe  
    SINON
      on le redirige vers la page de login
      ils entre ses identifiants
        si requête renvoie ok
         on stoque ses information dans le localstorage user ensuite on le redirige à l'acceuil
*/
</script>

