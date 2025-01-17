
let fullName = document.getElementById('fullname')
let signupEmail = document.getElementById('email')
let signupPass = document.getElementById('password')
let signupBtn = document.getElementById('signup-btn')
let signupBtnLoader = document.getElementById('loading_btn_spinner')
let loginBtn = document.getElementById('login-btn')
let loginEmail = document.getElementById('email-login')
let loginPass = document.getElementById('password-login')
let sessionBtn = document.getElementById('session_btn')
let logoutBtn = document.getElementById('logout_btn')
let googleLoginBtn = document.getElementById('google-login-btn') 

async function signup() {
  try {
    signupBtnLoader.style.display = 'block'
    const { data, error } = await supabase.auth.signUp({
        email: signupEmail.value,
        password: signupPass.value,
      })

      fullName.value = "";
      signupEmail.value = "";
      signupPass.value = "";
      
    if(error) throw error 
    if(data) {
        alert('Please Check your email for confirmation')
    }
    return data
  } catch (error) {
    console.log(error)
  } finally {
    signupBtnLoader.style.display = 'none'
  }
      
}


async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPass.value,
          })
          
          if(error) throw error
          if(data) {
              console.log(data)
              // alert('Sign in Succesfull')
              
              window.location.href = 'dashboard.html'
            }
            return data
        } catch (error) {
            console.log(error)
            
            alert(error.message)
        }
    }

    async function logout() {
      try {
        const {error} = await supabase.auth.signOut();
        if (error) throw error

        window.location.href = '/login.html'
      } catch (error) {
        console.log(error);
        
      }
    }

    async function loginWithGoogle() {
      try {
       const { user, session, error } = await supabase.auth.signInWithOAuth({
           provider: 'google',
          //  redirectTo: 'http://127.0.0.1:5500/dashboard.html'
         })
         if (error) throw error;
   
         if (user) {
           alert("Google Sign In Successfully" + user.email)
           
         }
      } catch (error) {
       console.log(error + 'No user found');
       
      }
   }
  
   if (googleLoginBtn) {
     googleLoginBtn.addEventListener("click", loginWithGoogle)
    
   }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', logout)
    }

    if(loginBtn) {
        loginBtn.addEventListener('click' , login)
      
      }

    if(signupBtn) {
        signupBtn.addEventListener('click' , signup)
      }