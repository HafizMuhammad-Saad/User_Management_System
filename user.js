const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email_2 = document.getElementById('email-2');
const mobile = document.getElementById('mob');
const job = document.getElementById('job');
const userBtn = document.getElementById('user-btn');

const tableBody = document.getElementById('user_table_body');

async function registerUser() {
    try {
        const { data, error } = await supabase.from('users').insert({
            first_name: firstName.value,
            last_name: lastName.value,
            email: email_2.value,
            phone: mobile.value,
            job_title: job.value,
        });
        if(error) throw error;
        console.log('User registered successfully:', data);
        firstName.value = '';
        lastName.value = '';
        email_2.value = '';
        mobile.value = '';
        job.value = '';
        Swal.fire({
      title: "User Registered",
      text: "User Sucesfully registered in the System",
      icon: "success",
    });
        tableBody.innerHTML = ''
        
        getUsers();
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

async function getUsers() {
    try {
        const { data, error } = await supabase.from('users').select('*');
        if(error) throw error;
        console.log('All users:', data);
       
        if (data) {
            data.map((val, index) => {
                return (
                    tableBody.innerHTML += `
                    <tr data-id="${val.id}">
                    <td scope="col">${val.first_name}</td>
                    <td scope="col">${val.last_name}</td>
                    <td scope="col">${val.email}</td>
                    <td scope="col">${val.phone}</td>
                    <td scope="col">${val.job_title}</td>
                    <td><button class="btn btn-danger" id="dBtn" onclick="deleteUser(${val.id})"><i class="bi bi-trash-fill"></i></button></td>
                    </tr>`
                )
            })
        }

    } catch (error) {
        console.log("this is not understand", error);
        
    }
}


 if(userBtn) {
    userBtn.addEventListener('click', registerUser);
}

document.addEventListener('DOMContentLoaded', () => {
    getUsers();
});

// Update user function
//  async function updateUser(id) {
//     try {
//         const { data, error } = await supabase.from('users').update({
//             first_name: firstName.value,
//             last_name: lastName.value,
//             email: email_2.value,
//             phone: mobile.value,
//             job_title: job.value,
//         }).eq('id', id);
//         if(error) throw error;
//         console.log('User updated successfully:', data);
//         Swal.fire({
//       title: "User Updated",
//       text: "User Sucesfully updated in the System",
//       icon: "success",
//     });
//         firstName.value = '';
//         lastName.value = '';
//         email_2.value = '';
//         mobile.value = '';
//         job.value = '';
//         getUsers();
//     } catch (error) {
//         console.error('Error updating user:', error);
//     }
// }

// Search user function
//  async function searchUser() {
//          const { data, error } = await supabase.from('users').select('*').like('first_name', `%${searchInput.value}%`);
//         if(error) throw error;
//         console.log('Searched users:', data);

//              tableBody.innerHTML = '';
//              if (data) {
//                  data.map((val, index) => {
//                      return (
//                          tableBody.innerHTML += `
//                          <tr>
//                          <td scope="col">${val.first_name}</td>
//                          <td scope="col">${val.last_name}</td>
//                          <td scope="col">${val.email}</td>
//                          <td scope="col">${val.phone}</td>
//                          <td scope="col">${val.job_title}</td>
//                          <td>
//                          <button class="btn btn-sm btn-danger" onclick="deleteUser(${val.id})">Delete</button>
//                          <button class="btn btn-sm btn-warning" onclick="updateUser(${val.id})">Update</button>
//                          </td>
//                          </tr>`
//                      )
//                  })
            
//                  searchInput.value = '';
//              }
//  }
