async function checkSession() {
    try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
            console.log(error);
            
        }
        const {session} = data; 


        const currentPage = window.location.pathname;
        const publicPages = ['/login.html', '/index.html', '/']

        if(!session && !publicPages.includes(currentPage)) {
            location.href = currentPage;
            
        } 
         if (session && publicPages.includes(currentPage)) {
            console.log("not logged in");
            console.log(currentPage);
            console.log(session);
            window.location.href = '/dashboard.html';
        }
       
    } catch (error) {
        console.log(error);
        
    }
}

// 1. Display "Hello, User!" after Login
 async function greeting() {
    
    try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
    const {session} = data       
        document.getElementById('hello-user').innerText = `Hello, ${session.user.email}!`;
        
    } catch (error) {
        console.log(error);
        
   
    }
 }
 greeting()


window.onload = checkSession;
